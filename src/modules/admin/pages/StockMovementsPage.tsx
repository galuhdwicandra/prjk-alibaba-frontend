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

const transferStatusVariant: Record<
  StockTransferStatus,
  "success" | "warning" | "danger" | "info"
> = {
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

const selectClassName =
  "w-full rounded-xl border border-slate-300 bg-white px-3 py-2 text-sm text-slate-800 shadow-sm outline-none transition focus:border-[var(--brand-brick)] focus:ring-2 focus:ring-orange-100";

const formatNumber = (value: number | string | null | undefined) =>
  Number(value ?? 0).toLocaleString("id-ID");

const formatCurrency = (value: number | string | null | undefined) =>
  `Rp ${Number(value ?? 0).toLocaleString("id-ID")}`;

const formatDateTime = (value: string | null | undefined) => {
  if (!value) {
    return "-";
  }

  return new Intl.DateTimeFormat("id-ID", {
    dateStyle: "medium",
    timeStyle: "short",
  }).format(new Date(value));
};

const formatDate = (value: string | null | undefined) => {
  if (!value) {
    return "-";
  }

  return new Intl.DateTimeFormat("id-ID", {
    dateStyle: "medium",
  }).format(new Date(value));
};

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

  const [deleteAdjustmentTarget, setDeleteAdjustmentTarget] =
    useState<StockAdjustment | null>(null);
  const [deleteTransferTarget, setDeleteTransferTarget] = useState<StockTransfer | null>(null);
  const [deleteOpnameTarget, setDeleteOpnameTarget] = useState<StockOpname | null>(null);

  const [adjustmentForm, setAdjustmentForm] =
    useState<StockAdjustmentPayload>(initialAdjustmentForm);
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
        count: adjustments.length,
      },
      {
        key: "transfers",
        label: "Transfer",
        count: transfers.length,
      },
      {
        key: "opnames",
        label: "Opname",
        count: opnames.length,
      },
      {
        key: "movements",
        label: "Movement History",
        count: movements.length,
      },
    ],
    [adjustments.length, transfers.length, opnames.length, movements.length]
  );

  const activeTabLabel = tabs.find((tab) => tab.key === activeTab)?.label ?? "Stock Movement";

  const activeQueryIsFetching =
    (activeTab === "adjustments" && adjustmentsQuery.isFetching) ||
    (activeTab === "transfers" && transfersQuery.isFetching) ||
    (activeTab === "opnames" && opnamesQuery.isFetching) ||
    (activeTab === "movements" && movementsQuery.isFetching);

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
      <div className="space-y-5">
        <PageHeader
          title="Stock Movement"
          description="Kelola adjustment, transfer, opname, dan riwayat movement stok bahan baku."
        />

        <Card>
          <div className="flex flex-col gap-4">
            <div className="flex flex-wrap gap-2">
              {tabs.map((tab) => {
                const active = activeTab === tab.key;

                return (
                  <button
                    key={tab.key}
                    type="button"
                    onClick={() => setActiveTab(tab.key as ActiveTab)}
                    className={[
                      "inline-flex items-center gap-2 rounded-xl border px-4 py-2 text-sm font-semibold shadow-sm transition",
                      active
                        ? "border-[var(--brand-brick)] bg-[var(--brand-brick)] text-white"
                        : "border-slate-200 bg-white text-slate-700 hover:border-orange-200 hover:bg-orange-50 hover:text-[var(--brand-brick)]",
                    ].join(" ")}
                  >
                    <span>{tab.label}</span>
                    <span
                      className={[
                        "rounded-full px-2 py-0.5 text-xs",
                        active ? "bg-white/20 text-white" : "bg-slate-100 text-slate-600",
                      ].join(" ")}
                    >
                      {tab.count}
                    </span>
                  </button>
                );
              })}
            </div>

            <div className="rounded-2xl border border-orange-100 bg-[var(--brand-brick-soft)] px-4 py-3 text-sm text-[var(--brand-brick)]">
              Menampilkan data: <span className="font-semibold">{activeTabLabel}</span>
              {activeQueryIsFetching ? <span className="ml-2 text-xs">(sinkronisasi...)</span> : null}
            </div>
          </div>
        </Card>

        <Card>
          <div className="grid gap-4 lg:grid-cols-[1.4fr_1fr_1fr_auto] lg:items-end">
            <Input
              label="Pencarian"
              placeholder="Cari nomor dokumen atau catatan..."
              value={search}
              onChange={(event) => setSearch(event.target.value)}
            />

            <div>
              <label className="mb-2 block text-sm font-medium text-slate-700">Outlet</label>
              <select
                className={selectClassName}
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
            </div>

            {activeTab === "adjustments" ? (
              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700">Alasan</label>
                <select
                  className={selectClassName}
                  value={reasonFilter}
                  onChange={(event) =>
                    setReasonFilter(event.target.value as StockAdjustmentReason | "")
                  }
                >
                  <option value="">Semua alasan</option>
                  {adjustmentReasonOptions.map((reason) => (
                    <option key={reason} value={reason}>
                      {reasonLabel[reason]}
                    </option>
                  ))}
                </select>
              </div>
            ) : null}

            {activeTab === "transfers" ? (
              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700">Status</label>
                <select
                  className={selectClassName}
                  value={transferStatusFilter}
                  onChange={(event) =>
                    setTransferStatusFilter(event.target.value as StockTransferStatus | "")
                  }
                >
                  <option value="">Semua status</option>
                  <option value="draft">draft</option>
                  <option value="sent">sent</option>
                  <option value="received">received</option>
                  <option value="cancelled">cancelled</option>
                </select>
              </div>
            ) : null}

            {activeTab === "opnames" ? (
              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700">Status</label>
                <select
                  className={selectClassName}
                  value={opnameStatusFilter}
                  onChange={(event) =>
                    setOpnameStatusFilter(event.target.value as StockOpnameStatus | "")
                  }
                >
                  <option value="">Semua status</option>
                  <option value="draft">draft</option>
                  <option value="posted">posted</option>
                  <option value="cancelled">cancelled</option>
                </select>
              </div>
            ) : null}

            {activeTab === "movements" ? (
              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700">Tipe</label>
                <select
                  className={selectClassName}
                  value={movementTypeFilter}
                  onChange={(event) =>
                    setMovementTypeFilter(event.target.value as StockMovementType | "")
                  }
                >
                  <option value="">Semua tipe</option>
                  {movementTypeOptions.map((type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
              </div>
            ) : null}

            <div className="flex flex-col gap-2 sm:flex-row lg:justify-end">
              {activeTab === "adjustments" ? (
                <Button onClick={openCreateAdjustment}>Buat Adjustment</Button>
              ) : null}
              {activeTab === "transfers" ? (
                <Button onClick={openCreateTransfer}>Buat Transfer</Button>
              ) : null}
              {activeTab === "opnames" ? <Button onClick={openCreateOpname}>Buat Opname</Button> : null}
            </div>
          </div>
        </Card>

        {activeTab === "adjustments" ? (
          adjustmentsQuery.isLoading ? (
            <Card>
              <div className="flex min-h-40 items-center justify-center text-sm text-[var(--color-muted)]">
                Memuat stock adjustment...
              </div>
            </Card>
          ) : adjustmentsQuery.isError ? (
            <PageErrorState onRetry={() => void adjustmentsQuery.refetch()} />
          ) : !adjustments.length ? (
            <PageEmptyState title="Belum ada stock adjustment" />
          ) : (
            <div className="grid gap-4 xl:grid-cols-2">
              {adjustments.map((adjustment) => (
                <Card key={adjustment.id}>
                  <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                    <div className="min-w-0">
                      <div className="flex flex-wrap items-center gap-2">
                        <h3 className="truncate text-base font-semibold text-slate-950">
                          {adjustment.adjustment_number}
                        </h3>
                        <Badge variant="info">{reasonLabel[adjustment.reason]}</Badge>
                      </div>
                      <p className="mt-1 text-sm text-slate-500">
                        {adjustment.outlet?.name ?? "-"}
                      </p>
                    </div>
                  </div>

                  <div className="mt-5 grid gap-3 sm:grid-cols-3">
                    <div className="rounded-2xl border border-slate-200 bg-white p-4">
                      <div className="text-xs font-medium uppercase tracking-wide text-slate-500">
                        Tanggal
                      </div>
                      <div className="mt-2 font-semibold text-slate-950">
                        {formatDateTime(adjustment.adjustment_date)}
                      </div>
                    </div>

                    <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                      <div className="text-xs font-medium uppercase tracking-wide text-slate-500">
                        Jumlah Item
                      </div>
                      <div className="mt-2 text-xl font-semibold text-slate-950">
                        {adjustment.items?.length ?? 0}
                      </div>
                    </div>

                    <div className="rounded-2xl border border-orange-100 bg-orange-50 p-4">
                      <div className="text-xs font-medium uppercase tracking-wide text-[var(--brand-brick)]">
                        Alasan
                      </div>
                      <div className="mt-2 font-semibold text-slate-950">
                        {reasonLabel[adjustment.reason]}
                      </div>
                    </div>
                  </div>

                  <div className="mt-4 rounded-2xl border border-slate-200 bg-slate-50/70 p-4 text-sm">
                    <div className="text-xs font-medium text-slate-500">Catatan</div>
                    <div className="mt-1 text-slate-700">{adjustment.notes || "-"}</div>
                  </div>

                  <div className="mt-4 flex flex-col gap-2 sm:flex-row sm:flex-wrap">
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
            <Card>
              <div className="flex min-h-40 items-center justify-center text-sm text-[var(--color-muted)]">
                Memuat stock transfer...
              </div>
            </Card>
          ) : transfersQuery.isError ? (
            <PageErrorState onRetry={() => void transfersQuery.refetch()} />
          ) : !transfers.length ? (
            <PageEmptyState title="Belum ada stock transfer" />
          ) : (
            <div className="grid gap-4 xl:grid-cols-2">
              {transfers.map((transfer) => (
                <Card key={transfer.id}>
                  <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                    <div className="min-w-0">
                      <div className="flex flex-wrap items-center gap-2">
                        <h3 className="truncate text-base font-semibold text-slate-950">
                          {transfer.transfer_number}
                        </h3>
                        <Badge variant={transferStatusVariant[transfer.status]}>
                          {transfer.status}
                        </Badge>
                      </div>
                      <p className="mt-1 text-sm text-slate-500">
                        {transfer.source_outlet?.name ?? "-"} →{" "}
                        {transfer.target_outlet?.name ?? "-"}
                      </p>
                    </div>
                  </div>

                  <div className="mt-5 grid gap-3 sm:grid-cols-3">
                    <div className="rounded-2xl border border-slate-200 bg-white p-4">
                      <div className="text-xs font-medium uppercase tracking-wide text-slate-500">
                        Tanggal
                      </div>
                      <div className="mt-2 font-semibold text-slate-950">
                        {formatDateTime(transfer.transfer_date)}
                      </div>
                    </div>

                    <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                      <div className="text-xs font-medium uppercase tracking-wide text-slate-500">
                        Jumlah Item
                      </div>
                      <div className="mt-2 text-xl font-semibold text-slate-950">
                        {transfer.items?.length ?? 0}
                      </div>
                    </div>

                    <div className="rounded-2xl border border-orange-100 bg-orange-50 p-4">
                      <div className="text-xs font-medium uppercase tracking-wide text-[var(--brand-brick)]">
                        Status
                      </div>
                      <div className="mt-2 font-semibold text-slate-950">{transfer.status}</div>
                    </div>
                  </div>

                  <div className="mt-4 rounded-2xl border border-slate-200 bg-slate-50/70 p-4 text-sm">
                    <div className="text-xs font-medium text-slate-500">Catatan</div>
                    <div className="mt-1 text-slate-700">{transfer.notes || "-"}</div>
                  </div>

                  <div className="mt-4 flex flex-col gap-2 sm:flex-row sm:flex-wrap">
                    <Button variant="outline" onClick={() => setDetailTransfer(transfer)}>
                      Detail
                    </Button>

                    {transfer.status === "draft" ? (
                      <>
                        <Button variant="outline" onClick={() => openEditTransfer(transfer)}>
                          Edit
                        </Button>
                        <Button
                          loading={transferActionMutation.isPending}
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
                          loading={transferActionMutation.isPending}
                          onClick={() =>
                            transferActionMutation.mutate({ id: transfer.id, action: "receive" })
                          }
                        >
                          Receive
                        </Button>
                        <Button
                          variant="danger"
                          loading={transferActionMutation.isPending}
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
            <Card>
              <div className="flex min-h-40 items-center justify-center text-sm text-[var(--color-muted)]">
                Memuat stock opname...
              </div>
            </Card>
          ) : opnamesQuery.isError ? (
            <PageErrorState onRetry={() => void opnamesQuery.refetch()} />
          ) : !opnames.length ? (
            <PageEmptyState title="Belum ada stock opname" />
          ) : (
            <div className="grid gap-4 xl:grid-cols-2">
              {opnames.map((opname) => (
                <Card key={opname.id}>
                  <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                    <div className="min-w-0">
                      <div className="flex flex-wrap items-center gap-2">
                        <h3 className="truncate text-base font-semibold text-slate-950">
                          {opname.opname_number}
                        </h3>
                        <Badge variant={opnameStatusVariant[opname.status]}>
                          {opname.status}
                        </Badge>
                      </div>
                      <p className="mt-1 text-sm text-slate-500">{opname.outlet?.name ?? "-"}</p>
                    </div>
                  </div>

                  <div className="mt-5 grid gap-3 sm:grid-cols-3">
                    <div className="rounded-2xl border border-slate-200 bg-white p-4">
                      <div className="text-xs font-medium uppercase tracking-wide text-slate-500">
                        Tanggal
                      </div>
                      <div className="mt-2 font-semibold text-slate-950">
                        {formatDate(opname.opname_date)}
                      </div>
                    </div>

                    <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                      <div className="text-xs font-medium uppercase tracking-wide text-slate-500">
                        Jumlah Item
                      </div>
                      <div className="mt-2 text-xl font-semibold text-slate-950">
                        {opname.items?.length ?? 0}
                      </div>
                    </div>

                    <div className="rounded-2xl border border-orange-100 bg-orange-50 p-4">
                      <div className="text-xs font-medium uppercase tracking-wide text-[var(--brand-brick)]">
                        Status
                      </div>
                      <div className="mt-2 font-semibold text-slate-950">{opname.status}</div>
                    </div>
                  </div>

                  <div className="mt-4 rounded-2xl border border-slate-200 bg-slate-50/70 p-4 text-sm">
                    <div className="text-xs font-medium text-slate-500">Catatan</div>
                    <div className="mt-1 text-slate-700">{opname.notes || "-"}</div>
                  </div>

                  <div className="mt-4 flex flex-col gap-2 sm:flex-row sm:flex-wrap">
                    <Button variant="outline" onClick={() => setDetailOpname(opname)}>
                      Detail
                    </Button>

                    {opname.status === "draft" ? (
                      <>
                        <Button variant="outline" onClick={() => openEditOpname(opname)}>
                          Edit
                        </Button>
                        <Button
                          loading={opnameActionMutation.isPending}
                          onClick={() =>
                            opnameActionMutation.mutate({ id: opname.id, action: "post" })
                          }
                        >
                          Post
                        </Button>
                        <Button
                          variant="danger"
                          loading={opnameActionMutation.isPending}
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
            <Card>
              <div className="flex min-h-40 items-center justify-center text-sm text-[var(--color-muted)]">
                Memuat movement history...
              </div>
            </Card>
          ) : movementsQuery.isError ? (
            <PageErrorState onRetry={() => void movementsQuery.refetch()} />
          ) : !movements.length ? (
            <PageEmptyState title="Belum ada movement history" />
          ) : (
            <div className="grid gap-4 xl:grid-cols-2">
              {movements.map((movement) => (
                <Card key={movement.id}>
                  <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                    <div className="min-w-0">
                      <div className="flex flex-wrap items-center gap-2">
                        <h3 className="truncate text-base font-semibold text-slate-950">
                          {movement.movement_type}
                        </h3>
                        <Badge variant="info">{movement.items?.length ?? 0} item</Badge>
                      </div>
                      <p className="mt-1 text-sm text-slate-500">{movement.outlet?.name ?? "-"}</p>
                    </div>
                  </div>

                  <div className="mt-5 grid gap-3 sm:grid-cols-3">
                    <div className="rounded-2xl border border-slate-200 bg-white p-4">
                      <div className="text-xs font-medium uppercase tracking-wide text-slate-500">
                        Tanggal
                      </div>
                      <div className="mt-2 font-semibold text-slate-950">
                        {formatDateTime(movement.movement_date)}
                      </div>
                    </div>

                    <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                      <div className="text-xs font-medium uppercase tracking-wide text-slate-500">
                        Reference
                      </div>
                      <div className="mt-2 font-semibold text-slate-950">
                        #{movement.reference_id ?? "-"}
                      </div>
                    </div>

                    <div className="rounded-2xl border border-orange-100 bg-orange-50 p-4">
                      <div className="text-xs font-medium uppercase tracking-wide text-[var(--brand-brick)]">
                        Items
                      </div>
                      <div className="mt-2 text-xl font-semibold text-slate-950">
                        {movement.items?.length ?? 0}
                      </div>
                    </div>
                  </div>

                  <div className="mt-4 rounded-2xl border border-slate-200 bg-slate-50/70 p-4 text-sm">
                    <div className="text-xs font-medium text-slate-500">Catatan</div>
                    <div className="mt-1 text-slate-700">{movement.notes || "-"}</div>
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
          description="Isi outlet, tanggal, alasan adjustment, dan daftar bahan yang disesuaikan."
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
          <div className="max-h-[72vh] space-y-5 overflow-y-auto pr-1">
            <div className="rounded-2xl border border-slate-200 bg-white p-4">
              <div className="mb-4">
                <h3 className="text-sm font-semibold text-slate-900">Informasi Adjustment</h3>
                <p className="mt-1 text-xs text-slate-500">
                  Tentukan outlet, waktu pencatatan, dan alasan perubahan stok.
                </p>
              </div>

              <div className="grid gap-4 md:grid-cols-3">
                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-700">Outlet</label>
                  <select
                    className={selectClassName}
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
                    className={selectClassName}
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
          description="Buat perpindahan stok bahan dari outlet asal ke outlet tujuan."
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
          <div className="max-h-[72vh] space-y-5 overflow-y-auto pr-1">
            <div className="rounded-2xl border border-slate-200 bg-white p-4">
              <div className="mb-4">
                <h3 className="text-sm font-semibold text-slate-900">Informasi Transfer</h3>
                <p className="mt-1 text-xs text-slate-500">
                  Pilih outlet asal, outlet tujuan, dan tanggal transfer stok.
                </p>
              </div>

              <div className="grid gap-4 md:grid-cols-3">
                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-700">
                    Outlet Asal
                  </label>
                  <select
                    className={selectClassName}
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
                    className={selectClassName}
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
          description="Catat hasil opname fisik bahan baku dan bandingkan dengan stok sistem."
          onClose={() => setOpenOpnameModal(false)}
          footer={
            <>
              <Button variant="outline" onClick={() => setOpenOpnameModal(false)}>
                Batal
              </Button>
              <Button loading={opnameMutation.isPending} onClick={() => opnameMutation.mutate(opnameForm)}>
                Simpan
              </Button>
            </>
          }
        >
          <div className="max-h-[72vh] space-y-5 overflow-y-auto pr-1">
            <div className="rounded-2xl border border-slate-200 bg-white p-4">
              <div className="mb-4">
                <h3 className="text-sm font-semibold text-slate-900">Informasi Opname</h3>
                <p className="mt-1 text-xs text-slate-500">
                  Pilih outlet dan tanggal opname. Item akan mengikuti stok outlet terpilih.
                </p>
              </div>

              <div className="grid gap-4 md:grid-cols-3">
                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-700">Outlet</label>
                  <select
                    className={selectClassName}
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
          <div className="max-h-[70vh] space-y-3 overflow-y-auto pr-1">
            {detailAdjustment?.items?.map((item) => (
              <div key={item.id} className="rounded-2xl border border-slate-200 bg-white p-4 text-sm shadow-sm">
                <div className="font-semibold text-slate-900">{item.raw_material?.name ?? "-"}</div>
                <div className="mt-2 grid gap-2 sm:grid-cols-2">
                  <div className="rounded-xl bg-slate-50 px-3 py-2 text-slate-600">
                    Selisih:{" "}
                    <span className="font-semibold text-slate-900">
                      {formatNumber(item.qty_difference)} {item.unit?.code ?? ""}
                    </span>
                  </div>
                  <div className="rounded-xl bg-slate-50 px-3 py-2 text-slate-600">
                    Catatan: <span className="text-slate-900">{item.notes ?? "-"}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Modal>

        <Modal
          open={Boolean(detailTransfer)}
          title={detailTransfer?.transfer_number ?? "Detail Transfer"}
          onClose={() => setDetailTransfer(null)}
        >
          <div className="max-h-[70vh] space-y-3 overflow-y-auto pr-1">
            {detailTransfer?.items?.map((item) => (
              <div key={item.id} className="rounded-2xl border border-slate-200 bg-white p-4 text-sm shadow-sm">
                <div className="font-semibold text-slate-900">{item.raw_material?.name ?? "-"}</div>
                <div className="mt-2 grid gap-2 sm:grid-cols-3">
                  <div className="rounded-xl bg-slate-50 px-3 py-2 text-slate-600">
                    Kirim:{" "}
                    <span className="font-semibold text-slate-900">
                      {formatNumber(item.qty_sent)} {item.unit?.code ?? ""}
                    </span>
                  </div>
                  <div className="rounded-xl bg-slate-50 px-3 py-2 text-slate-600">
                    Terima:{" "}
                    <span className="font-semibold text-slate-900">
                      {item.qty_received === null ? "-" : formatNumber(item.qty_received)}{" "}
                      {item.unit?.code ?? ""}
                    </span>
                  </div>
                  <div className="rounded-xl bg-slate-50 px-3 py-2 text-slate-600">
                    Catatan: <span className="text-slate-900">{item.notes ?? "-"}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Modal>

        <Modal
          open={Boolean(detailOpname)}
          title={detailOpname?.opname_number ?? "Detail Opname"}
          onClose={() => setDetailOpname(null)}
        >
          <div className="max-h-[70vh] space-y-3 overflow-y-auto pr-1">
            {detailOpname?.items?.map((item) => (
              <div key={item.id} className="rounded-2xl border border-slate-200 bg-white p-4 text-sm shadow-sm">
                <div className="font-semibold text-slate-900">{item.raw_material?.name ?? "-"}</div>
                <div className="mt-2 grid gap-2 sm:grid-cols-4">
                  <div className="rounded-xl bg-slate-50 px-3 py-2 text-slate-600">
                    Sistem:{" "}
                    <span className="font-semibold text-slate-900">
                      {formatNumber(item.system_qty)} {item.unit?.code ?? ""}
                    </span>
                  </div>
                  <div className="rounded-xl bg-slate-50 px-3 py-2 text-slate-600">
                    Fisik:{" "}
                    <span className="font-semibold text-slate-900">
                      {formatNumber(item.actual_qty)} {item.unit?.code ?? ""}
                    </span>
                  </div>
                  <div className="rounded-xl bg-orange-50 px-3 py-2 text-[var(--brand-brick)]">
                    Selisih:{" "}
                    <span className="font-semibold">
                      {formatNumber(item.difference_qty)} {item.unit?.code ?? ""}
                    </span>
                  </div>
                  <div className="rounded-xl bg-slate-50 px-3 py-2 text-slate-600">
                    Catatan: <span className="text-slate-900">{item.notes ?? "-"}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Modal>

        <Modal open={Boolean(detailMovement)} title="Detail Movement" onClose={() => setDetailMovement(null)}>
          <div className="max-h-[70vh] space-y-3 overflow-y-auto pr-1">
            {detailMovement?.items?.map((item) => (
              <div key={item.id} className="rounded-2xl border border-slate-200 bg-white p-4 text-sm shadow-sm">
                <div className="font-semibold text-slate-900">{item.raw_material?.name ?? "-"}</div>
                <div className="mt-2 grid gap-2 sm:grid-cols-4">
                  <div className="rounded-xl bg-emerald-50 px-3 py-2 text-emerald-700">
                    Masuk: <span className="font-semibold">{formatNumber(item.qty_in)}</span>
                  </div>
                  <div className="rounded-xl bg-red-50 px-3 py-2 text-red-700">
                    Keluar: <span className="font-semibold">{formatNumber(item.qty_out)}</span>
                  </div>
                  <div className="rounded-xl bg-slate-50 px-3 py-2 text-slate-600">
                    Unit Cost:{" "}
                    <span className="font-semibold text-slate-900">
                      {formatCurrency(item.unit_cost)}
                    </span>
                  </div>
                  <div className="rounded-xl bg-slate-50 px-3 py-2 text-slate-600">
                    Catatan: <span className="text-slate-900">{item.notes ?? "-"}</span>
                  </div>
                </div>
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