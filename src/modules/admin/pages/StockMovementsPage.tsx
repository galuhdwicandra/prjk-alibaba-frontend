import { useMemo, useState } from "react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { PageHeader } from "@/components/navigation/PageHeader";
import { PermissionWrapper } from "@/components/navigation/PermissionWrapper";
import { PageEmptyState } from "@/components/feedback/PageEmptyState";
import { PageErrorState } from "@/components/feedback/PageErrorState";
import { Badge, Button, Card, ConfirmDialog, Input, Modal } from "@/components/ui";
import { masterDataService } from "@/modules/admin/services/master-data.service";
import { inventoryService } from "@/modules/admin/services/inventory.service";
import {
    stockMovementService,
    type StockAdjustmentItemPayload,
    type StockAdjustmentPayload,
    type StockOpnameItemPayload,
    type StockOpnamePayload,
    type StockTransferItemPayload,
    type StockTransferPayload,
} from "@/modules/admin/services/stock-movement.service";
import {
    StockFlowItemsEditor,
    createInitialStockItems,
    sanitizeAdjustmentItems,
    sanitizeOpnameItems,
    sanitizeTransferItems,
} from "@/modules/admin/components/stock/StockFlowItemsEditor";
import { parseApiError } from "@/services/api/error-parser";
import { useToast } from "@/hooks/useToast";
import type {
    StockAdjustment,
    StockAdjustmentReason,
    StockMovement,
    StockMovementType,
    StockOpname,
    StockOpnameStatus,
    StockTransfer,
    StockTransferStatus,
} from "@/types/stock-movement";

type ActiveTab = "adjustments" | "transfers" | "opnames" | "movements";

const nowLocalInput = () => {
    const date = new Date();
    date.setMinutes(date.getMinutes() - date.getTimezoneOffset());
    return date.toISOString().slice(0, 16);
};

const todayInput = () => {
    const date = new Date();
    date.setMinutes(date.getMinutes() - date.getTimezoneOffset());
    return date.toISOString().slice(0, 10);
};

const initialAdjustmentForm: StockAdjustmentPayload = {
    outlet_id: 0,
    adjustment_date: nowLocalInput(),
    reason: "correction",
    notes: "",
    items: createInitialStockItems<StockAdjustmentItemPayload>("adjustment"),
};

const initialTransferForm: StockTransferPayload = {
    source_outlet_id: 0,
    target_outlet_id: 0,
    transfer_date: nowLocalInput(),
    notes: "",
    items: createInitialStockItems<StockTransferItemPayload>("transfer"),
};

const initialOpnameForm: StockOpnamePayload = {
    outlet_id: 0,
    opname_date: todayInput(),
    notes: "",
    items: createInitialStockItems<StockOpnameItemPayload>("opname"),
};

const reasonLabel: Record<StockAdjustmentReason, string> = {
    damaged: "Rusak",
    expired: "Expired",
    lost: "Hilang",
    correction: "Koreksi",
    waste: "Waste",
    other: "Lainnya",
};

const adjustmentReasonOptions: StockAdjustmentReason[] = [
    "correction",
    "damaged",
    "expired",
    "lost",
    "waste",
    "other",
];

const transferStatusVariant: Record<StockTransferStatus, "success" | "warning" | "danger" | "info"> = {
    draft: "warning",
    sent: "info",
    received: "success",
    cancelled: "danger",
};

const opnameStatusVariant: Record<StockOpnameStatus, "success" | "warning" | "danger"> = {
    draft: "warning",
    posted: "success",
    cancelled: "danger",
};

const movementTypeOptions: StockMovementType[] = [
    "purchase",
    "sale_consumption",
    "adjustment",
    "transfer_out",
    "transfer_in",
    "opname",
    "waste",
];

export default function StockMovementsPage() {
    const toast = useToast();
    const queryClient = useQueryClient();

    const [activeTab, setActiveTab] = useState<ActiveTab>("adjustments");
    const [search, setSearch] = useState("");
    const [outletFilter, setOutletFilter] = useState<number | "">("");
    const [reasonFilter, setReasonFilter] = useState<StockAdjustmentReason | "">("");
    const [transferStatusFilter, setTransferStatusFilter] = useState<StockTransferStatus | "">("");
    const [opnameStatusFilter, setOpnameStatusFilter] = useState<StockOpnameStatus | "">("");
    const [movementTypeFilter, setMovementTypeFilter] = useState<StockMovementType | "">("");

    const [openAdjustmentModal, setOpenAdjustmentModal] = useState(false);
    const [openTransferModal, setOpenTransferModal] = useState(false);
    const [openOpnameModal, setOpenOpnameModal] = useState(false);

    const [editingAdjustment, setEditingAdjustment] = useState<StockAdjustment | null>(null);
    const [editingTransfer, setEditingTransfer] = useState<StockTransfer | null>(null);
    const [editingOpname, setEditingOpname] = useState<StockOpname | null>(null);

    const [detailMovement, setDetailMovement] = useState<StockMovement | null>(null);
    const [detailAdjustment, setDetailAdjustment] = useState<StockAdjustment | null>(null);
    const [detailTransfer, setDetailTransfer] = useState<StockTransfer | null>(null);
    const [detailOpname, setDetailOpname] = useState<StockOpname | null>(null);

    const [deleteAdjustmentTarget, setDeleteAdjustmentTarget] = useState<StockAdjustment | null>(null);
    const [deleteTransferTarget, setDeleteTransferTarget] = useState<StockTransfer | null>(null);
    const [deleteOpnameTarget, setDeleteOpnameTarget] = useState<StockOpname | null>(null);

    const [adjustmentForm, setAdjustmentForm] = useState<StockAdjustmentPayload>(initialAdjustmentForm);
    const [transferForm, setTransferForm] = useState<StockTransferPayload>(initialTransferForm);
    const [opnameForm, setOpnameForm] = useState<StockOpnamePayload>(initialOpnameForm);

    const outletsQuery = useQuery({
        queryKey: ["stock-flow-outlets"],
        queryFn: () => masterDataService.getOutlets({ per_page: 100 }),
    });

    const rawMaterialsQuery = useQuery({
        queryKey: ["stock-flow-raw-materials"],
        queryFn: () => inventoryService.getRawMaterials({ per_page: 100 }),
    });

    const unitsQuery = useQuery({
        queryKey: ["stock-flow-units"],
        queryFn: () => inventoryService.getUnits({ per_page: 100 }),
    });

    const outletStocksQuery = useQuery({
        queryKey: ["stock-flow-outlet-material-stocks", opnameForm.outlet_id],
        queryFn: () =>
            inventoryService.getOutletMaterialStocks({
                per_page: 500,
                outlet_id: opnameForm.outlet_id || "",
            }),
        enabled: opnameForm.outlet_id > 0,
    });

    const adjustmentsQuery = useQuery({
        queryKey: ["stock-adjustments", search, outletFilter, reasonFilter],
        queryFn: () =>
            stockMovementService.getStockAdjustments({
                per_page: 100,
                search,
                outlet_id: outletFilter,
                reason: reasonFilter,
            }),
    });

    const transfersQuery = useQuery({
        queryKey: ["stock-transfers", search, outletFilter, transferStatusFilter],
        queryFn: () =>
            stockMovementService.getStockTransfers({
                per_page: 100,
                search,
                outlet_id: outletFilter,
                status: transferStatusFilter,
            }),
    });

    const opnamesQuery = useQuery({
        queryKey: ["stock-opnames", search, outletFilter, opnameStatusFilter],
        queryFn: () =>
            stockMovementService.getStockOpnames({
                per_page: 100,
                search,
                outlet_id: outletFilter,
                status: opnameStatusFilter,
            }),
    });

    const movementsQuery = useQuery({
        queryKey: ["stock-movements", search, outletFilter, movementTypeFilter],
        queryFn: () =>
            stockMovementService.getStockMovements({
                per_page: 100,
                search,
                outlet_id: outletFilter,
                movement_type: movementTypeFilter,
            }),
    });

    const outlets = outletsQuery.data?.items ?? [];
    const rawMaterials = rawMaterialsQuery.data?.items ?? [];
    const units = unitsQuery.data?.items ?? [];
    const outletStocks = outletStocksQuery.data?.items ?? [];
    const adjustments = adjustmentsQuery.data?.items ?? [];
    const transfers = transfersQuery.data?.items ?? [];
    const opnames = opnamesQuery.data?.items ?? [];
    const movements = movementsQuery.data?.items ?? [];

    const tabs = useMemo(
        () => [
            {
                key: "adjustments",
                label: "Adjustment",
                content: null,
            },
            {
                key: "transfers",
                label: "Transfer",
                content: null,
            },
            {
                key: "opnames",
                label: "Opname",
                content: null,
            },
            {
                key: "movements",
                label: "Movement History",
                content: null,
            },
        ],
        []
    );

    const invalidateStockQueries = () => {
        void queryClient.invalidateQueries({ queryKey: ["stock-adjustments"] });
        void queryClient.invalidateQueries({ queryKey: ["stock-transfers"] });
        void queryClient.invalidateQueries({ queryKey: ["stock-opnames"] });
        void queryClient.invalidateQueries({ queryKey: ["stock-movements"] });
        void queryClient.invalidateQueries({ queryKey: ["inventory-outlet-material-stocks"] });
    };

    const adjustmentMutation = useMutation({
        mutationFn: (payload: StockAdjustmentPayload) => {
            const cleanPayload = {
                ...payload,
                items: sanitizeAdjustmentItems(payload.items),
            };

            if (editingAdjustment) {
                return stockMovementService.updateStockAdjustment(editingAdjustment.id, cleanPayload);
            }

            return stockMovementService.createStockAdjustment(cleanPayload);
        },
        onSuccess: (response) => {
            toast.success(response.message);
            setOpenAdjustmentModal(false);
            setEditingAdjustment(null);
            setAdjustmentForm(initialAdjustmentForm);
            invalidateStockQueries();
        },
        onError: (error) => {
            toast.error("Gagal menyimpan adjustment", parseApiError(error));
        },
    });

    const transferMutation = useMutation({
        mutationFn: (payload: StockTransferPayload) => {
            const cleanPayload = {
                ...payload,
                items: sanitizeTransferItems(payload.items),
            };

            if (editingTransfer) {
                return stockMovementService.updateStockTransfer(editingTransfer.id, cleanPayload);
            }

            return stockMovementService.createStockTransfer(cleanPayload);
        },
        onSuccess: (response) => {
            toast.success(response.message);
            setOpenTransferModal(false);
            setEditingTransfer(null);
            setTransferForm(initialTransferForm);
            invalidateStockQueries();
        },
        onError: (error) => {
            toast.error("Gagal menyimpan transfer", parseApiError(error));
        },
    });

    const opnameMutation = useMutation({
        mutationFn: (payload: StockOpnamePayload) => {
            const cleanPayload = {
                ...payload,
                items: sanitizeOpnameItems(payload.items),
            };

            if (editingOpname) {
                return stockMovementService.updateStockOpname(editingOpname.id, cleanPayload);
            }

            return stockMovementService.createStockOpname(cleanPayload);
        },
        onSuccess: (response) => {
            toast.success(response.message);
            setOpenOpnameModal(false);
            setEditingOpname(null);
            setOpnameForm(initialOpnameForm);
            invalidateStockQueries();
        },
        onError: (error) => {
            toast.error("Gagal menyimpan opname", parseApiError(error));
        },
    });

    const deleteAdjustmentMutation = useMutation({
        mutationFn: (target: StockAdjustment) => stockMovementService.deleteStockAdjustment(target.id),
        onSuccess: (response) => {
            toast.success(response.message);
            setDeleteAdjustmentTarget(null);
            invalidateStockQueries();
        },
        onError: (error) => {
            toast.error("Gagal menghapus adjustment", parseApiError(error));
        },
    });

    const deleteTransferMutation = useMutation({
        mutationFn: (target: StockTransfer) => stockMovementService.deleteStockTransfer(target.id),
        onSuccess: (response) => {
            toast.success(response.message);
            setDeleteTransferTarget(null);
            invalidateStockQueries();
        },
        onError: (error) => {
            toast.error("Gagal menghapus transfer", parseApiError(error));
        },
    });

    const deleteOpnameMutation = useMutation({
        mutationFn: (target: StockOpname) => stockMovementService.deleteStockOpname(target.id),
        onSuccess: (response) => {
            toast.success(response.message);
            setDeleteOpnameTarget(null);
            invalidateStockQueries();
        },
        onError: (error) => {
            toast.error("Gagal menghapus opname", parseApiError(error));
        },
    });

    const transferActionMutation = useMutation({
        mutationFn: ({ id, action }: { id: number; action: "send" | "receive" | "cancel" }) => {
            if (action === "send") {
                return stockMovementService.sendStockTransfer(id);
            }

            if (action === "receive") {
                return stockMovementService.receiveStockTransfer(id, { received_at: nowLocalInput() });
            }

            return stockMovementService.cancelStockTransfer(id);
        },
        onSuccess: (response) => {
            toast.success(response.message);
            invalidateStockQueries();
        },
        onError: (error) => {
            toast.error("Gagal memproses transfer", parseApiError(error));
        },
    });

    const opnameActionMutation = useMutation({
        mutationFn: ({ id, action }: { id: number; action: "post" | "cancel" }) => {
            if (action === "post") {
                return stockMovementService.postStockOpname(id, { posted_at: nowLocalInput() });
            }

            return stockMovementService.cancelStockOpname(id);
        },
        onSuccess: (response) => {
            toast.success(response.message);
            invalidateStockQueries();
        },
        onError: (error) => {
            toast.error("Gagal memproses opname", parseApiError(error));
        },
    });

    const openCreateAdjustment = () => {
        setEditingAdjustment(null);
        setAdjustmentForm(initialAdjustmentForm);
        setOpenAdjustmentModal(true);
    };

    const openEditAdjustment = (adjustment: StockAdjustment) => {
        setEditingAdjustment(adjustment);
        setAdjustmentForm({
            outlet_id: adjustment.outlet_id,
            adjustment_date: adjustment.adjustment_date?.slice(0, 16) ?? nowLocalInput(),
            reason: adjustment.reason,
            notes: adjustment.notes ?? "",
            items:
                adjustment.items?.map((item) => ({
                    raw_material_id: item.raw_material_id,
                    qty_difference: Number(item.qty_difference ?? 0),
                    unit_id: item.unit_id,
                    notes: item.notes ?? "",
                })) ?? createInitialStockItems<StockAdjustmentItemPayload>("adjustment"),
        });
        setOpenAdjustmentModal(true);
    };

    const openCreateTransfer = () => {
        setEditingTransfer(null);
        setTransferForm(initialTransferForm);
        setOpenTransferModal(true);
    };

    const openEditTransfer = (transfer: StockTransfer) => {
        setEditingTransfer(transfer);
        setTransferForm({
            source_outlet_id: transfer.source_outlet_id,
            target_outlet_id: transfer.target_outlet_id,
            transfer_date: transfer.transfer_date?.slice(0, 16) ?? nowLocalInput(),
            notes: transfer.notes ?? "",
            items:
                transfer.items?.map((item) => ({
                    raw_material_id: item.raw_material_id,
                    qty_sent: Number(item.qty_sent ?? 0),
                    qty_received: item.qty_received === null ? null : Number(item.qty_received ?? 0),
                    unit_id: item.unit_id,
                    notes: item.notes ?? "",
                })) ?? createInitialStockItems<StockTransferItemPayload>("transfer"),
        });
        setOpenTransferModal(true);
    };

    const openCreateOpname = () => {
        setEditingOpname(null);
        setOpnameForm(initialOpnameForm);
        setOpenOpnameModal(true);
    };

    const openEditOpname = (opname: StockOpname) => {
        setEditingOpname(opname);
        setOpnameForm({
            outlet_id: opname.outlet_id,
            opname_date: opname.opname_date?.slice(0, 10) ?? todayInput(),
            notes: opname.notes ?? "",
            items:
                opname.items?.map((item) => ({
                    raw_material_id: item.raw_material_id,
                    system_qty: Number(item.system_qty ?? 0),
                    actual_qty: Number(item.actual_qty ?? 0),
                    unit_id: item.unit_id,
                    notes: item.notes ?? "",
                })) ?? createInitialStockItems<StockOpnameItemPayload>("opname"),
        });
        setOpenOpnameModal(true);
    };

    return (
        <PermissionWrapper permission="stock_movements.view">
            <div className="space-y-4">
                <PageHeader
                    title="Stock Movement"
                    description="Kelola adjustment, transfer, opname, dan riwayat movement stok bahan baku."
                />

                <Card>
                    <div className="flex flex-wrap gap-2">
                        {tabs.map((tab) => (
                            <button
                                key={tab.key}
                                type="button"
                                onClick={() => setActiveTab(tab.key as ActiveTab)}
                                className={
                                    activeTab === tab.key
                                        ? "rounded-xl bg-slate-900 px-4 py-2 text-sm font-medium text-white"
                                        : "rounded-xl border border-slate-300 bg-white px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50"
                                }
                            >
                                {tab.label}
                            </button>
                        ))}
                    </div>
                </Card>

                <Card>
                    <div className="grid gap-4 md:grid-cols-4">
                        <Input
                            placeholder="Cari nomor dokumen atau catatan..."
                            value={search}
                            onChange={(event) => setSearch(event.target.value)}
                        />

                        <select
                            className="w-full rounded-xl border border-slate-300 px-3 py-2 text-sm"
                            value={outletFilter}
                            onChange={(event) =>
                                setOutletFilter(event.target.value ? Number(event.target.value) : "")
                            }
                        >
                            <option value="">Semua outlet</option>
                            {outlets.map((outlet) => (
                                <option key={outlet.id} value={outlet.id}>
                                    {outlet.name} ({outlet.code})
                                </option>
                            ))}
                        </select>

                        {activeTab === "adjustments" ? (
                            <select
                                className="w-full rounded-xl border border-slate-300 px-3 py-2 text-sm"
                                value={reasonFilter}
                                onChange={(event) => setReasonFilter(event.target.value as StockAdjustmentReason | "")}
                            >
                                <option value="">Semua alasan</option>
                                {adjustmentReasonOptions.map((reason) => (
                                    <option key={reason} value={reason}>
                                        {reasonLabel[reason]}
                                    </option>
                                ))}
                            </select>
                        ) : null}

                        {activeTab === "transfers" ? (
                            <select
                                className="w-full rounded-xl border border-slate-300 px-3 py-2 text-sm"
                                value={transferStatusFilter}
                                onChange={(event) => setTransferStatusFilter(event.target.value as StockTransferStatus | "")}
                            >
                                <option value="">Semua status</option>
                                <option value="draft">draft</option>
                                <option value="sent">sent</option>
                                <option value="received">received</option>
                                <option value="cancelled">cancelled</option>
                            </select>
                        ) : null}

                        {activeTab === "opnames" ? (
                            <select
                                className="w-full rounded-xl border border-slate-300 px-3 py-2 text-sm"
                                value={opnameStatusFilter}
                                onChange={(event) => setOpnameStatusFilter(event.target.value as StockOpnameStatus | "")}
                            >
                                <option value="">Semua status</option>
                                <option value="draft">draft</option>
                                <option value="posted">posted</option>
                                <option value="cancelled">cancelled</option>
                            </select>
                        ) : null}

                        {activeTab === "movements" ? (
                            <select
                                className="w-full rounded-xl border border-slate-300 px-3 py-2 text-sm"
                                value={movementTypeFilter}
                                onChange={(event) => setMovementTypeFilter(event.target.value as StockMovementType | "")}
                            >
                                <option value="">Semua tipe</option>
                                {movementTypeOptions.map((type) => (
                                    <option key={type} value={type}>
                                        {type}
                                    </option>
                                ))}
                            </select>
                        ) : null}

                        {activeTab === "adjustments" ? <Button onClick={openCreateAdjustment}>Buat Adjustment</Button> : null}
                        {activeTab === "transfers" ? <Button onClick={openCreateTransfer}>Buat Transfer</Button> : null}
                        {activeTab === "opnames" ? <Button onClick={openCreateOpname}>Buat Opname</Button> : null}
                    </div>
                </Card>

                {activeTab === "adjustments" ? (
                    adjustmentsQuery.isLoading ? (
                        <Card>Memuat stock adjustment...</Card>
                    ) : adjustmentsQuery.isError ? (
                        <PageErrorState onRetry={() => void adjustmentsQuery.refetch()} />
                    ) : !adjustments.length ? (
                        <PageEmptyState title="Belum ada stock adjustment" />
                    ) : (
                        <div className="grid gap-4 lg:grid-cols-2">
                            {adjustments.map((adjustment) => (
                                <Card
                                    key={adjustment.id}
                                    title={adjustment.adjustment_number}
                                    description={adjustment.outlet?.name ?? "-"}
                                    actions={<Badge variant="info">{reasonLabel[adjustment.reason]}</Badge>}
                                >
                                    <div className="grid gap-3 text-sm text-slate-600 md:grid-cols-2">
                                        <div>
                                            <div className="text-xs text-slate-500">Tanggal</div>
                                            <div>{adjustment.adjustment_date}</div>
                                        </div>
                                        <div>
                                            <div className="text-xs text-slate-500">Jumlah Item</div>
                                            <div>{adjustment.items?.length ?? 0}</div>
                                        </div>
                                        <div className="md:col-span-2">
                                            <div className="text-xs text-slate-500">Catatan</div>
                                            <div>{adjustment.notes || "-"}</div>
                                        </div>
                                    </div>

                                    <div className="mt-4 flex flex-wrap gap-2">
                                        <Button variant="outline" onClick={() => setDetailAdjustment(adjustment)}>
                                            Detail
                                        </Button>
                                        <Button variant="outline" onClick={() => openEditAdjustment(adjustment)}>
                                            Edit
                                        </Button>
                                        <Button variant="danger" onClick={() => setDeleteAdjustmentTarget(adjustment)}>
                                            Hapus
                                        </Button>
                                    </div>
                                </Card>
                            ))}
                        </div>
                    )
                ) : null}

                {activeTab === "transfers" ? (
                    transfersQuery.isLoading ? (
                        <Card>Memuat stock transfer...</Card>
                    ) : transfersQuery.isError ? (
                        <PageErrorState onRetry={() => void transfersQuery.refetch()} />
                    ) : !transfers.length ? (
                        <PageEmptyState title="Belum ada stock transfer" />
                    ) : (
                        <div className="grid gap-4 lg:grid-cols-2">
                            {transfers.map((transfer) => (
                                <Card
                                    key={transfer.id}
                                    title={transfer.transfer_number}
                                    description={`${transfer.source_outlet?.name ?? "-"} → ${transfer.target_outlet?.name ?? "-"
                                        }`}
                                    actions={
                                        <Badge variant={transferStatusVariant[transfer.status]}>
                                            {transfer.status}
                                        </Badge>
                                    }
                                >
                                    <div className="grid gap-3 text-sm text-slate-600 md:grid-cols-2">
                                        <div>
                                            <div className="text-xs text-slate-500">Tanggal</div>
                                            <div>{transfer.transfer_date}</div>
                                        </div>
                                        <div>
                                            <div className="text-xs text-slate-500">Jumlah Item</div>
                                            <div>{transfer.items?.length ?? 0}</div>
                                        </div>
                                        <div className="md:col-span-2">
                                            <div className="text-xs text-slate-500">Catatan</div>
                                            <div>{transfer.notes || "-"}</div>
                                        </div>
                                    </div>

                                    <div className="mt-4 flex flex-wrap gap-2">
                                        <Button variant="outline" onClick={() => setDetailTransfer(transfer)}>
                                            Detail
                                        </Button>
                                        {transfer.status === "draft" ? (
                                            <>
                                                <Button variant="outline" onClick={() => openEditTransfer(transfer)}>
                                                    Edit
                                                </Button>
                                                <Button
                                                    onClick={() =>
                                                        transferActionMutation.mutate({ id: transfer.id, action: "send" })
                                                    }
                                                >
                                                    Send
                                                </Button>
                                                <Button variant="danger" onClick={() => setDeleteTransferTarget(transfer)}>
                                                    Hapus
                                                </Button>
                                            </>
                                        ) : null}
                                        {transfer.status === "sent" ? (
                                            <>
                                                <Button
                                                    onClick={() =>
                                                        transferActionMutation.mutate({ id: transfer.id, action: "receive" })
                                                    }
                                                >
                                                    Receive
                                                </Button>
                                                <Button
                                                    variant="danger"
                                                    onClick={() =>
                                                        transferActionMutation.mutate({ id: transfer.id, action: "cancel" })
                                                    }
                                                >
                                                    Cancel
                                                </Button>
                                            </>
                                        ) : null}
                                    </div>
                                </Card>
                            ))}
                        </div>
                    )
                ) : null}

                {activeTab === "opnames" ? (
                    opnamesQuery.isLoading ? (
                        <Card>Memuat stock opname...</Card>
                    ) : opnamesQuery.isError ? (
                        <PageErrorState onRetry={() => void opnamesQuery.refetch()} />
                    ) : !opnames.length ? (
                        <PageEmptyState title="Belum ada stock opname" />
                    ) : (
                        <div className="grid gap-4 lg:grid-cols-2">
                            {opnames.map((opname) => (
                                <Card
                                    key={opname.id}
                                    title={opname.opname_number}
                                    description={opname.outlet?.name ?? "-"}
                                    actions={<Badge variant={opnameStatusVariant[opname.status]}>{opname.status}</Badge>}
                                >
                                    <div className="grid gap-3 text-sm text-slate-600 md:grid-cols-2">
                                        <div>
                                            <div className="text-xs text-slate-500">Tanggal</div>
                                            <div>{opname.opname_date}</div>
                                        </div>
                                        <div>
                                            <div className="text-xs text-slate-500">Jumlah Item</div>
                                            <div>{opname.items?.length ?? 0}</div>
                                        </div>
                                        <div className="md:col-span-2">
                                            <div className="text-xs text-slate-500">Catatan</div>
                                            <div>{opname.notes || "-"}</div>
                                        </div>
                                    </div>

                                    <div className="mt-4 flex flex-wrap gap-2">
                                        <Button variant="outline" onClick={() => setDetailOpname(opname)}>
                                            Detail
                                        </Button>
                                        {opname.status === "draft" ? (
                                            <>
                                                <Button variant="outline" onClick={() => openEditOpname(opname)}>
                                                    Edit
                                                </Button>
                                                <Button
                                                    onClick={() =>
                                                        opnameActionMutation.mutate({ id: opname.id, action: "post" })
                                                    }
                                                >
                                                    Post
                                                </Button>
                                                <Button
                                                    variant="danger"
                                                    onClick={() =>
                                                        opnameActionMutation.mutate({ id: opname.id, action: "cancel" })
                                                    }
                                                >
                                                    Cancel
                                                </Button>
                                                <Button variant="danger" onClick={() => setDeleteOpnameTarget(opname)}>
                                                    Hapus
                                                </Button>
                                            </>
                                        ) : null}
                                    </div>
                                </Card>
                            ))}
                        </div>
                    )
                ) : null}

                {activeTab === "movements" ? (
                    movementsQuery.isLoading ? (
                        <Card>Memuat movement history...</Card>
                    ) : movementsQuery.isError ? (
                        <PageErrorState onRetry={() => void movementsQuery.refetch()} />
                    ) : !movements.length ? (
                        <PageEmptyState title="Belum ada movement history" />
                    ) : (
                        <div className="grid gap-4 lg:grid-cols-2">
                            {movements.map((movement) => (
                                <Card
                                    key={movement.id}
                                    title={movement.movement_type}
                                    description={movement.outlet?.name ?? "-"}
                                    actions={<Badge variant="info">{movement.items?.length ?? 0} item</Badge>}
                                >
                                    <div className="grid gap-3 text-sm text-slate-600 md:grid-cols-2">
                                        <div>
                                            <div className="text-xs text-slate-500">Tanggal</div>
                                            <div>{movement.movement_date}</div>
                                        </div>
                                        <div>
                                            <div className="text-xs text-slate-500">Reference</div>
                                            <div>#{movement.reference_id ?? "-"}</div>
                                        </div>
                                        <div className="md:col-span-2">
                                            <div className="text-xs text-slate-500">Catatan</div>
                                            <div>{movement.notes || "-"}</div>
                                        </div>
                                    </div>

                                    <div className="mt-4">
                                        <Button variant="outline" onClick={() => setDetailMovement(movement)}>
                                            Detail
                                        </Button>
                                    </div>
                                </Card>
                            ))}
                        </div>
                    )
                ) : null}

                <Modal
                    open={openAdjustmentModal}
                    title={editingAdjustment ? "Edit Stock Adjustment" : "Buat Stock Adjustment"}
                    onClose={() => setOpenAdjustmentModal(false)}
                    footer={
                        <>
                            <Button variant="outline" onClick={() => setOpenAdjustmentModal(false)}>
                                Batal
                            </Button>
                            <Button
                                loading={adjustmentMutation.isPending}
                                onClick={() => adjustmentMutation.mutate(adjustmentForm)}
                            >
                                Simpan
                            </Button>
                        </>
                    }
                >
                    <div className="space-y-4">
                        <div className="grid gap-4 md:grid-cols-3">
                            <div>
                                <label className="mb-2 block text-sm font-medium text-slate-700">Outlet</label>
                                <select
                                    className="w-full rounded-xl border border-slate-300 px-3 py-2 text-sm"
                                    value={adjustmentForm.outlet_id || ""}
                                    onChange={(event) =>
                                        setAdjustmentForm((prev) => ({
                                            ...prev,
                                            outlet_id: Number(event.target.value || 0),
                                        }))
                                    }
                                >
                                    <option value="">Pilih outlet</option>
                                    {outlets.map((outlet) => (
                                        <option key={outlet.id} value={outlet.id}>
                                            {outlet.name} ({outlet.code})
                                        </option>
                                    ))}
                                </select>
                            </div>

                            <Input
                                label="Tanggal Adjustment"
                                type="datetime-local"
                                value={adjustmentForm.adjustment_date}
                                onChange={(event) =>
                                    setAdjustmentForm((prev) => ({
                                        ...prev,
                                        adjustment_date: event.target.value,
                                    }))
                                }
                            />

                            <div>
                                <label className="mb-2 block text-sm font-medium text-slate-700">Alasan</label>
                                <select
                                    className="w-full rounded-xl border border-slate-300 px-3 py-2 text-sm"
                                    value={adjustmentForm.reason}
                                    onChange={(event) =>
                                        setAdjustmentForm((prev) => ({
                                            ...prev,
                                            reason: event.target.value as StockAdjustmentReason,
                                        }))
                                    }
                                >
                                    {adjustmentReasonOptions.map((reason) => (
                                        <option key={reason} value={reason}>
                                            {reasonLabel[reason]}
                                        </option>
                                    ))}
                                </select>
                            </div>

                            <div className="md:col-span-3">
                                <Input
                                    label="Catatan"
                                    value={adjustmentForm.notes ?? ""}
                                    onChange={(event) =>
                                        setAdjustmentForm((prev) => ({
                                            ...prev,
                                            notes: event.target.value,
                                        }))
                                    }
                                />
                            </div>
                        </div>

                        <StockFlowItemsEditor
                            mode="adjustment"
                            value={adjustmentForm.items}
                            onChange={(items) => setAdjustmentForm((prev) => ({ ...prev, items }))}
                            rawMaterials={rawMaterials}
                            units={units}
                        />
                    </div>
                </Modal>

                <Modal
                    open={openTransferModal}
                    title={editingTransfer ? "Edit Stock Transfer" : "Buat Stock Transfer"}
                    onClose={() => setOpenTransferModal(false)}
                    footer={
                        <>
                            <Button variant="outline" onClick={() => setOpenTransferModal(false)}>
                                Batal
                            </Button>
                            <Button
                                loading={transferMutation.isPending}
                                onClick={() => transferMutation.mutate(transferForm)}
                            >
                                Simpan
                            </Button>
                        </>
                    }
                >
                    <div className="space-y-4">
                        <div className="grid gap-4 md:grid-cols-3">
                            <div>
                                <label className="mb-2 block text-sm font-medium text-slate-700">
                                    Outlet Asal
                                </label>
                                <select
                                    className="w-full rounded-xl border border-slate-300 px-3 py-2 text-sm"
                                    value={transferForm.source_outlet_id || ""}
                                    onChange={(event) =>
                                        setTransferForm((prev) => ({
                                            ...prev,
                                            source_outlet_id: Number(event.target.value || 0),
                                        }))
                                    }
                                >
                                    <option value="">Pilih outlet asal</option>
                                    {outlets.map((outlet) => (
                                        <option key={outlet.id} value={outlet.id}>
                                            {outlet.name} ({outlet.code})
                                        </option>
                                    ))}
                                </select>
                            </div>

                            <div>
                                <label className="mb-2 block text-sm font-medium text-slate-700">
                                    Outlet Tujuan
                                </label>
                                <select
                                    className="w-full rounded-xl border border-slate-300 px-3 py-2 text-sm"
                                    value={transferForm.target_outlet_id || ""}
                                    onChange={(event) =>
                                        setTransferForm((prev) => ({
                                            ...prev,
                                            target_outlet_id: Number(event.target.value || 0),
                                        }))
                                    }
                                >
                                    <option value="">Pilih outlet tujuan</option>
                                    {outlets.map((outlet) => (
                                        <option key={outlet.id} value={outlet.id}>
                                            {outlet.name} ({outlet.code})
                                        </option>
                                    ))}
                                </select>
                            </div>

                            <Input
                                label="Tanggal Transfer"
                                type="datetime-local"
                                value={transferForm.transfer_date}
                                onChange={(event) =>
                                    setTransferForm((prev) => ({
                                        ...prev,
                                        transfer_date: event.target.value,
                                    }))
                                }
                            />

                            <div className="md:col-span-3">
                                <Input
                                    label="Catatan"
                                    value={transferForm.notes ?? ""}
                                    onChange={(event) =>
                                        setTransferForm((prev) => ({
                                            ...prev,
                                            notes: event.target.value,
                                        }))
                                    }
                                />
                            </div>
                        </div>

                        <StockFlowItemsEditor
                            mode="transfer"
                            value={transferForm.items}
                            onChange={(items) => setTransferForm((prev) => ({ ...prev, items }))}
                            rawMaterials={rawMaterials}
                            units={units}
                        />
                    </div>
                </Modal>

                <Modal
                    open={openOpnameModal}
                    title={editingOpname ? "Edit Stock Opname" : "Buat Stock Opname"}
                    onClose={() => setOpenOpnameModal(false)}
                    footer={
                        <>
                            <Button variant="outline" onClick={() => setOpenOpnameModal(false)}>
                                Batal
                            </Button>
                            <Button
                                loading={opnameMutation.isPending}
                                onClick={() => opnameMutation.mutate(opnameForm)}
                            >
                                Simpan
                            </Button>
                        </>
                    }
                >
                    <div className="space-y-4">
                        <div className="grid gap-4 md:grid-cols-3">
                            <div>
                                <label className="mb-2 block text-sm font-medium text-slate-700">Outlet</label>
                                <select
                                    className="w-full rounded-xl border border-slate-300 px-3 py-2 text-sm"
                                    value={opnameForm.outlet_id || ""}
                                    onChange={(event) =>
                                        setOpnameForm((prev) => ({
                                            ...prev,
                                            outlet_id: Number(event.target.value || 0),
                                            items: createInitialStockItems<StockOpnameItemPayload>("opname"),
                                        }))
                                    }
                                >
                                    <option value="">Pilih outlet</option>
                                    {outlets.map((outlet) => (
                                        <option key={outlet.id} value={outlet.id}>
                                            {outlet.name} ({outlet.code})
                                        </option>
                                    ))}
                                </select>
                            </div>

                            <Input
                                label="Tanggal Opname"
                                type="date"
                                value={opnameForm.opname_date}
                                onChange={(event) =>
                                    setOpnameForm((prev) => ({
                                        ...prev,
                                        opname_date: event.target.value,
                                    }))
                                }
                            />

                            <Input
                                label="Catatan"
                                value={opnameForm.notes ?? ""}
                                onChange={(event) =>
                                    setOpnameForm((prev) => ({
                                        ...prev,
                                        notes: event.target.value,
                                    }))
                                }
                            />
                        </div>

                        <StockFlowItemsEditor
                            mode="opname"
                            value={opnameForm.items}
                            onChange={(items) => setOpnameForm((prev) => ({ ...prev, items }))}
                            rawMaterials={rawMaterials}
                            units={units}
                            outletStocks={outletStocks}
                        />
                    </div>
                </Modal>

                <Modal
                    open={Boolean(detailAdjustment)}
                    title={detailAdjustment?.adjustment_number ?? "Detail Adjustment"}
                    onClose={() => setDetailAdjustment(null)}
                >
                    <div className="space-y-3">
                        {detailAdjustment?.items?.map((item) => (
                            <div key={item.id} className="rounded-2xl border border-slate-200 p-4 text-sm">
                                <div className="font-semibold text-slate-900">{item.raw_material?.name ?? "-"}</div>
                                <div className="text-slate-600">
                                    Selisih: {Number(item.qty_difference ?? 0).toLocaleString("id-ID")}{" "}
                                    {item.unit?.code ?? ""}
                                </div>
                                <div className="text-slate-500">{item.notes ?? "-"}</div>
                            </div>
                        ))}
                    </div>
                </Modal>

                <Modal
                    open={Boolean(detailTransfer)}
                    title={detailTransfer?.transfer_number ?? "Detail Transfer"}
                    onClose={() => setDetailTransfer(null)}
                >
                    <div className="space-y-3">
                        {detailTransfer?.items?.map((item) => (
                            <div key={item.id} className="rounded-2xl border border-slate-200 p-4 text-sm">
                                <div className="font-semibold text-slate-900">{item.raw_material?.name ?? "-"}</div>
                                <div className="text-slate-600">
                                    Kirim: {Number(item.qty_sent ?? 0).toLocaleString("id-ID")} {item.unit?.code ?? ""}
                                </div>
                                <div className="text-slate-600">
                                    Terima:{" "}
                                    {item.qty_received === null
                                        ? "-"
                                        : Number(item.qty_received ?? 0).toLocaleString("id-ID")}{" "}
                                    {item.unit?.code ?? ""}
                                </div>
                                <div className="text-slate-500">{item.notes ?? "-"}</div>
                            </div>
                        ))}
                    </div>
                </Modal>

                <Modal
                    open={Boolean(detailOpname)}
                    title={detailOpname?.opname_number ?? "Detail Opname"}
                    onClose={() => setDetailOpname(null)}
                >
                    <div className="space-y-3">
                        {detailOpname?.items?.map((item) => (
                            <div key={item.id} className="rounded-2xl border border-slate-200 p-4 text-sm">
                                <div className="font-semibold text-slate-900">{item.raw_material?.name ?? "-"}</div>
                                <div className="text-slate-600">
                                    Sistem: {Number(item.system_qty ?? 0).toLocaleString("id-ID")} {item.unit?.code ?? ""}
                                </div>
                                <div className="text-slate-600">
                                    Fisik: {Number(item.actual_qty ?? 0).toLocaleString("id-ID")} {item.unit?.code ?? ""}
                                </div>
                                <div className="font-semibold text-slate-900">
                                    Selisih: {Number(item.difference_qty ?? 0).toLocaleString("id-ID")}{" "}
                                    {item.unit?.code ?? ""}
                                </div>
                                <div className="text-slate-500">{item.notes ?? "-"}</div>
                            </div>
                        ))}
                    </div>
                </Modal>

                <Modal
                    open={Boolean(detailMovement)}
                    title="Detail Movement"
                    onClose={() => setDetailMovement(null)}
                >
                    <div className="space-y-3">
                        {detailMovement?.items?.map((item) => (
                            <div key={item.id} className="rounded-2xl border border-slate-200 p-4 text-sm">
                                <div className="font-semibold text-slate-900">{item.raw_material?.name ?? "-"}</div>
                                <div className="text-slate-600">
                                    Masuk: {Number(item.qty_in ?? 0).toLocaleString("id-ID")}
                                </div>
                                <div className="text-slate-600">
                                    Keluar: {Number(item.qty_out ?? 0).toLocaleString("id-ID")}
                                </div>
                                <div className="text-slate-600">
                                    Unit Cost: Rp {Number(item.unit_cost ?? 0).toLocaleString("id-ID")}
                                </div>
                                <div className="text-slate-500">{item.notes ?? "-"}</div>
                            </div>
                        ))}
                    </div>
                </Modal>

                <ConfirmDialog
                    open={Boolean(deleteAdjustmentTarget)}
                    title="Hapus stock adjustment?"
                    description={`Adjustment ${deleteAdjustmentTarget?.adjustment_number ?? ""} akan dihapus.`}
                    confirmText="Hapus"
                    confirmVariant="danger"
                    loading={deleteAdjustmentMutation.isPending}
                    onClose={() => setDeleteAdjustmentTarget(null)}
                    onConfirm={() => {
                        if (deleteAdjustmentTarget) {
                            deleteAdjustmentMutation.mutate(deleteAdjustmentTarget);
                        }
                    }}
                />

                <ConfirmDialog
                    open={Boolean(deleteTransferTarget)}
                    title="Hapus stock transfer?"
                    description={`Transfer ${deleteTransferTarget?.transfer_number ?? ""} akan dihapus.`}
                    confirmText="Hapus"
                    confirmVariant="danger"
                    loading={deleteTransferMutation.isPending}
                    onClose={() => setDeleteTransferTarget(null)}
                    onConfirm={() => {
                        if (deleteTransferTarget) {
                            deleteTransferMutation.mutate(deleteTransferTarget);
                        }
                    }}
                />

                <ConfirmDialog
                    open={Boolean(deleteOpnameTarget)}
                    title="Hapus stock opname?"
                    description={`Opname ${deleteOpnameTarget?.opname_number ?? ""} akan dihapus.`}
                    confirmText="Hapus"
                    confirmVariant="danger"
                    loading={deleteOpnameMutation.isPending}
                    onClose={() => setDeleteOpnameTarget(null)}
                    onConfirm={() => {
                        if (deleteOpnameTarget) {
                            deleteOpnameMutation.mutate(deleteOpnameTarget);
                        }
                    }}
                />
            </div>
        </PermissionWrapper>
    );
}