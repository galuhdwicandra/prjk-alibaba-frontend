// src/modules/admin/pages/GoodsReceiptsPage.tsx

import { useMemo, useState } from "react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { masterDataService } from "@/modules/admin/services/master-data.service";
import { inventoryService } from "@/modules/admin/services/inventory.service";
import {
    purchasingService,
    type GoodsReceiptItemPayload,
    type GoodsReceiptPayload,
} from "@/modules/admin/services/purchasing.service";
import {
    GoodsReceiptItemsEditor,
    mapGoodsReceiptItemsFromPurchaseOrder,
    sanitizeGoodsReceiptItems,
} from "@/modules/admin/components/purchasing/GoodsReceiptItemsEditor";
import { PageHeader } from "@/components/navigation/PageHeader";
import { PermissionWrapper } from "@/components/navigation/PermissionWrapper";
import { PageErrorState } from "@/components/feedback/PageErrorState";
import { PageEmptyState } from "@/components/feedback/PageEmptyState";
import { Badge, Button, Card, ConfirmDialog, Input, Modal } from "@/components/ui";
import { parseApiError } from "@/services/api/error-parser";
import { useToast } from "@/hooks/useToast";
import type { GoodsReceipt, GoodsReceiptStatus } from "@/types/purchasing";

const nowLocalInput = () => {
    const date = new Date();
    date.setMinutes(date.getMinutes() - date.getTimezoneOffset());
    return date.toISOString().slice(0, 16);
};

const initialForm: GoodsReceiptPayload = {
    purchase_order_id: 0,
    outlet_id: 0,
    received_date: nowLocalInput(),
    notes: "",
    items: [],
};

const statusVariant: Record<GoodsReceiptStatus, "success" | "warning" | "danger"> = {
    draft: "warning",
    posted: "success",
    cancelled: "danger",
};

const inputSelectClass =
    "w-full rounded-xl border border-slate-300 bg-white px-3 py-2 text-sm text-slate-800 shadow-sm outline-none transition focus:border-[var(--brand-brick)] focus:ring-2 focus:ring-orange-100";

const formatCurrency = (value: number | string | null | undefined) =>
    `Rp ${Number(value ?? 0).toLocaleString("id-ID")}`;

export default function GoodsReceiptsPage() {
    const toast = useToast();
    const queryClient = useQueryClient();

    const [search, setSearch] = useState("");
    const [outletFilter, setOutletFilter] = useState<number | "">("");
    const [purchaseOrderFilter, setPurchaseOrderFilter] = useState<number | "">("");
    const [statusFilter, setStatusFilter] = useState<GoodsReceiptStatus | "">("");
    const [openModal, setOpenModal] = useState(false);
    const [detailReceipt, setDetailReceipt] = useState<GoodsReceipt | null>(null);
    const [editingReceipt, setEditingReceipt] = useState<GoodsReceipt | null>(null);
    const [deleteTarget, setDeleteTarget] = useState<GoodsReceipt | null>(null);
    const [form, setForm] = useState<GoodsReceiptPayload>(initialForm);

    const goodsReceiptsQuery = useQuery({
        queryKey: ["purchasing-goods-receipts", search, outletFilter, purchaseOrderFilter, statusFilter],
        queryFn: () =>
            purchasingService.getGoodsReceipts({
                per_page: 100,
                search,
                outlet_id: outletFilter,
                purchase_order_id: purchaseOrderFilter,
                status: statusFilter,
            }),
    });

    const outletsQuery = useQuery({
        queryKey: ["purchasing-gr-outlets"],
        queryFn: () => masterDataService.getOutlets({ per_page: 100 }),
    });

    const purchaseOrdersQuery = useQuery({
        queryKey: ["purchasing-gr-purchase-orders"],
        queryFn: () =>
            purchasingService.getPurchaseOrders({
                per_page: 100,
                status: "",
            }),
    });

    const rawMaterialsQuery = useQuery({
        queryKey: ["purchasing-gr-raw-materials"],
        queryFn: () => inventoryService.getRawMaterials({ per_page: 100 }),
    });

    const unitsQuery = useQuery({
        queryKey: ["purchasing-gr-units"],
        queryFn: () => inventoryService.getUnits({ per_page: 100 }),
    });

    const receipts = goodsReceiptsQuery.data?.items ?? [];
    const outlets = outletsQuery.data?.items ?? [];
    const purchaseOrders = purchaseOrdersQuery.data?.items ?? [];
    const rawMaterials = rawMaterialsQuery.data?.items ?? [];
    const units = unitsQuery.data?.items ?? [];

    const selectedPurchaseOrder = useMemo(() => {
        return purchaseOrders.find((row) => Number(row.id) === Number(form.purchase_order_id)) ?? null;
    }, [form.purchase_order_id, purchaseOrders]);

    const formTotal = useMemo(() => {
        return sanitizeGoodsReceiptItems(form.items).reduce((total, item) => {
            return total + Math.max(0, Number(item.qty_received || 0) * Number(item.unit_cost || 0));
        }, 0);
    }, [form.items]);

    const saveMutation = useMutation({
        mutationFn: (payload: GoodsReceiptPayload) => {
            const sanitizedPayload = {
                ...payload,
                items: sanitizeGoodsReceiptItems(payload.items),
            };

            if (editingReceipt) {
                return purchasingService.updateGoodsReceipt(editingReceipt.id, sanitizedPayload);
            }

            return purchasingService.createGoodsReceipt(sanitizedPayload);
        },
        onSuccess: (response) => {
            toast.success(response.message);
            setOpenModal(false);
            setEditingReceipt(null);
            setForm(initialForm);
            void queryClient.invalidateQueries({ queryKey: ["purchasing-goods-receipts"] });
            void queryClient.invalidateQueries({ queryKey: ["purchasing-purchase-orders"] });
        },
        onError: (error) => toast.error("Gagal menyimpan goods receipt", parseApiError(error)),
    });

    const postMutation = useMutation({
        mutationFn: (receipt: GoodsReceipt) => purchasingService.postGoodsReceipt(receipt.id),
        onSuccess: (response) => {
            toast.success(response.message);
            void queryClient.invalidateQueries({ queryKey: ["purchasing-goods-receipts"] });
            void queryClient.invalidateQueries({ queryKey: ["inventory-outlet-material-stocks"] });
        },
        onError: (error) => toast.error("Gagal posting goods receipt", parseApiError(error)),
    });

    const cancelMutation = useMutation({
        mutationFn: (receipt: GoodsReceipt) => purchasingService.cancelGoodsReceipt(receipt.id),
        onSuccess: (response) => {
            toast.success(response.message);
            void queryClient.invalidateQueries({ queryKey: ["purchasing-goods-receipts"] });
        },
        onError: (error) => toast.error("Gagal membatalkan goods receipt", parseApiError(error)),
    });

    const deleteMutation = useMutation({
        mutationFn: (receipt: GoodsReceipt) => purchasingService.deleteGoodsReceipt(receipt.id),
        onSuccess: (response) => {
            toast.success(response.message);
            setDeleteTarget(null);
            void queryClient.invalidateQueries({ queryKey: ["purchasing-goods-receipts"] });
        },
        onError: (error) => toast.error("Gagal menghapus goods receipt", parseApiError(error)),
    });

    const openCreate = () => {
        setEditingReceipt(null);
        setForm({
            ...initialForm,
            received_date: nowLocalInput(),
            items: mapGoodsReceiptItemsFromPurchaseOrder(null),
        });
        setOpenModal(true);
    };

    const openEdit = (receipt: GoodsReceipt) => {
        const purchaseOrder = receipt.purchase_order ?? receipt.purchaseOrder ?? null;

        setEditingReceipt(receipt);
        setForm({
            purchase_order_id: receipt.purchase_order_id,
            outlet_id: receipt.outlet_id,
            received_date: receipt.received_date?.slice(0, 16) ?? nowLocalInput(),
            notes: receipt.notes ?? "",
            items:
                receipt.items?.map((item) => ({
                    raw_material_id: item.raw_material_id,
                    qty_received: Number(item.qty_received ?? 0),
                    unit_id: item.unit_id,
                    unit_cost: Number(item.unit_cost ?? 0),
                    expired_at: item.expired_at,
                    notes: item.notes ?? "",
                })) ?? mapGoodsReceiptItemsFromPurchaseOrder(purchaseOrder),
        });
        setOpenModal(true);
    };

    const handlePurchaseOrderChange = (purchaseOrderId: number) => {
        const purchaseOrder = purchaseOrders.find((row) => Number(row.id) === Number(purchaseOrderId));

        setForm((prev) => ({
            ...prev,
            purchase_order_id: purchaseOrderId,
            outlet_id: purchaseOrder?.outlet_id ?? prev.outlet_id,
            items: mapGoodsReceiptItemsFromPurchaseOrder(purchaseOrder ?? null),
        }));
    };

    return (
        <PermissionWrapper permission="goods_receipts.view">
            <div className="space-y-5">
                <PageHeader
                    title="Goods Receipt"
                    description="Kelola penerimaan bahan baku dari purchase order."
                    actions={<Button onClick={openCreate}>Buat Receipt</Button>}
                />

                <Card>
                    <div className="grid gap-4 lg:grid-cols-[minmax(0,1.4fr)_1fr_1fr_1fr]">
                        <Input
                            label="Pencarian"
                            placeholder="Cari nomor receipt atau PO..."
                            value={search}
                            onChange={(event) => setSearch(event.target.value)}
                        />

                        <div>
                            <label className="mb-2 block text-sm font-medium text-slate-700">
                                Outlet
                            </label>
                            <select
                                className={inputSelectClass}
                                value={outletFilter}
                                onChange={(event) =>
                                    setOutletFilter(event.target.value ? Number(event.target.value) : "")
                                }
                            >
                                <option value="">Semua outlet</option>
                                {outlets.map((outlet) => (
                                    <option key={outlet.id} value={outlet.id}>
                                        {outlet.name}
                                    </option>
                                ))}
                            </select>
                        </div>

                        <div>
                            <label className="mb-2 block text-sm font-medium text-slate-700">
                                Purchase Order
                            </label>
                            <select
                                className={inputSelectClass}
                                value={purchaseOrderFilter}
                                onChange={(event) =>
                                    setPurchaseOrderFilter(event.target.value ? Number(event.target.value) : "")
                                }
                            >
                                <option value="">Semua PO</option>
                                {purchaseOrders.map((order) => (
                                    <option key={order.id} value={order.id}>
                                        {order.po_number}
                                    </option>
                                ))}
                            </select>
                        </div>

                        <div>
                            <label className="mb-2 block text-sm font-medium text-slate-700">
                                Status
                            </label>
                            <select
                                className={inputSelectClass}
                                value={statusFilter}
                                onChange={(event) => setStatusFilter(event.target.value as GoodsReceiptStatus | "")}
                            >
                                <option value="">Semua status</option>
                                <option value="draft">draft</option>
                                <option value="posted">posted</option>
                                <option value="cancelled">cancelled</option>
                            </select>
                        </div>
                    </div>
                </Card>

                {goodsReceiptsQuery.isLoading ? (
                    <Card>
                        <div className="flex min-h-40 items-center justify-center text-sm text-slate-500">
                            Memuat goods receipt...
                        </div>
                    </Card>
                ) : goodsReceiptsQuery.isError ? (
                    <PageErrorState onRetry={() => void goodsReceiptsQuery.refetch()} />
                ) : !receipts.length ? (
                    <PageEmptyState title="Belum ada goods receipt" />
                ) : (
                    <div className="grid gap-4 xl:grid-cols-2">
                        {receipts.map((receipt) => {
                            const purchaseOrder = receipt.purchase_order ?? receipt.purchaseOrder ?? null;

                            return (
                                <Card
                                    key={receipt.id}
                                    title={receipt.receipt_number}
                                    description={`${receipt.outlet?.name ?? "-"} • ${purchaseOrder?.po_number ?? "-"}`}
                                    actions={<Badge variant={statusVariant[receipt.status]}>{receipt.status}</Badge>}
                                >
                                    <div className="grid gap-3 rounded-2xl border border-slate-100 bg-slate-50/70 p-4 text-sm md:grid-cols-2">
                                        <div>
                                            <div className="text-xs font-medium uppercase tracking-wide text-slate-500">
                                                Received Date
                                            </div>
                                            <div className="mt-1 font-medium text-slate-900">
                                                {receipt.received_date}
                                            </div>
                                        </div>

                                        <div>
                                            <div className="text-xs font-medium uppercase tracking-wide text-slate-500">
                                                Supplier
                                            </div>
                                            <div className="mt-1 font-medium text-slate-900">
                                                {purchaseOrder?.supplier?.name ?? "-"}
                                            </div>
                                        </div>

                                        <div className="md:col-span-2">
                                            <div className="text-xs font-medium uppercase tracking-wide text-slate-500">
                                                Notes
                                            </div>
                                            <div className="mt-1 line-clamp-2 text-slate-700">
                                                {receipt.notes ?? "-"}
                                            </div>
                                        </div>
                                    </div>

                                    <div className="mt-4 flex flex-col gap-2 sm:flex-row sm:flex-wrap">
                                        <Button variant="outline" onClick={() => setDetailReceipt(receipt)}>
                                            Detail
                                        </Button>

                                        {receipt.status === "draft" ? (
                                            <>
                                                <Button variant="outline" onClick={() => openEdit(receipt)}>
                                                    Edit
                                                </Button>
                                                <Button
                                                    loading={postMutation.isPending}
                                                    onClick={() => postMutation.mutate(receipt)}
                                                >
                                                    Post
                                                </Button>
                                                <Button
                                                    variant="danger"
                                                    loading={cancelMutation.isPending}
                                                    onClick={() => cancelMutation.mutate(receipt)}
                                                >
                                                    Cancel
                                                </Button>
                                                <Button variant="danger" onClick={() => setDeleteTarget(receipt)}>
                                                    Hapus
                                                </Button>
                                            </>
                                        ) : null}
                                    </div>
                                </Card>
                            );
                        })}
                    </div>
                )}

                <Modal
                    open={openModal}
                    title={editingReceipt ? "Edit Goods Receipt" : "Buat Goods Receipt"}
                    description="Lengkapi purchase order, outlet, tanggal penerimaan, dan item yang diterima."
                    onClose={() => setOpenModal(false)}
                    footer={
                        <>
                            <Button variant="outline" onClick={() => setOpenModal(false)}>
                                Batal
                            </Button>
                            <Button loading={saveMutation.isPending} onClick={() => saveMutation.mutate(form)}>
                                Simpan
                            </Button>
                        </>
                    }
                >
                    <div className="max-h-[72vh] space-y-5 overflow-y-auto pr-1">
                        <div className="rounded-2xl border border-slate-200 bg-white p-4">
                            <div className="mb-4">
                                <h3 className="text-sm font-semibold text-slate-900">
                                    Informasi Goods Receipt
                                </h3>
                                <p className="mt-1 text-xs text-slate-500">
                                    Data utama penerimaan barang dari purchase order.
                                </p>
                            </div>

                            <div className="grid gap-4 md:grid-cols-2">
                                <div>
                                    <label className="mb-2 block text-sm font-medium text-slate-700">
                                        Purchase Order
                                    </label>
                                    <select
                                        className={inputSelectClass}
                                        value={form.purchase_order_id || ""}
                                        onChange={(event) => handlePurchaseOrderChange(Number(event.target.value || 0))}
                                    >
                                        <option value="">Pilih PO</option>
                                        {purchaseOrders.map((order) => (
                                            <option key={order.id} value={order.id}>
                                                {order.po_number} - {order.supplier?.name ?? "-"}
                                            </option>
                                        ))}
                                    </select>
                                </div>

                                <div>
                                    <label className="mb-2 block text-sm font-medium text-slate-700">
                                        Outlet
                                    </label>
                                    <select
                                        className={inputSelectClass}
                                        value={form.outlet_id || ""}
                                        onChange={(event) =>
                                            setForm((prev) => ({
                                                ...prev,
                                                outlet_id: Number(event.target.value || 0),
                                            }))
                                        }
                                    >
                                        <option value="">Pilih outlet</option>
                                        {outlets.map((outlet) => (
                                            <option key={outlet.id} value={outlet.id}>
                                                {outlet.name}
                                            </option>
                                        ))}
                                    </select>
                                </div>

                                <Input
                                    label="Received Date"
                                    type="datetime-local"
                                    value={form.received_date}
                                    onChange={(event) =>
                                        setForm((prev) => ({
                                            ...prev,
                                            received_date: event.target.value,
                                        }))
                                    }
                                />

                                <Input
                                    label="Catatan"
                                    value={form.notes ?? ""}
                                    onChange={(event) =>
                                        setForm((prev) => ({
                                            ...prev,
                                            notes: event.target.value,
                                        }))
                                    }
                                />
                            </div>
                        </div>

                        <div className="rounded-2xl border border-slate-200 bg-slate-50/60 p-4">
                            <div className="mb-4">
                                <h3 className="text-sm font-semibold text-slate-900">
                                    Item Goods Receipt
                                </h3>
                                <p className="mt-1 text-xs text-slate-500">
                                    Pastikan qty diterima, satuan, harga terima, dan tanggal expired sudah benar.
                                </p>
                            </div>

                            <GoodsReceiptItemsEditor
                                value={form.items}
                                onChange={(items: GoodsReceiptItemPayload[]) =>
                                    setForm((prev) => ({
                                        ...prev,
                                        items,
                                    }))
                                }
                                rawMaterials={rawMaterials}
                                units={units}
                                purchaseOrder={selectedPurchaseOrder}
                            />
                        </div>

                        <Card>
                            <div className="grid gap-3 text-sm md:grid-cols-3">
                                <div className="rounded-xl bg-slate-50 p-3 md:col-span-2">
                                    <div className="text-xs font-medium uppercase tracking-wide text-slate-500">
                                        Total Item Valid
                                    </div>
                                    <div className="mt-1 font-semibold text-slate-900">
                                        {sanitizeGoodsReceiptItems(form.items).length} item
                                    </div>
                                </div>

                                <div className="rounded-xl bg-[var(--brand-brick-soft)] p-3">
                                    <div className="text-xs font-medium uppercase tracking-wide text-[var(--brand-brick)]">
                                        Estimasi Total Receipt
                                    </div>
                                    <div className="mt-1 text-lg font-bold text-[var(--brand-brick)]">
                                        {formatCurrency(formTotal)}
                                    </div>
                                </div>
                            </div>
                        </Card>
                    </div>
                </Modal>

                <Modal
                    open={Boolean(detailReceipt)}
                    title={`Detail Receipt ${detailReceipt?.receipt_number ?? ""}`}
                    onClose={() => setDetailReceipt(null)}
                    footer={
                        <Button variant="outline" onClick={() => setDetailReceipt(null)}>
                            Tutup
                        </Button>
                    }
                >
                    <div className="max-h-[72vh] space-y-4 overflow-y-auto pr-1">
                        <Card>
                            <div className="grid gap-3 text-sm md:grid-cols-2">
                                <div className="rounded-xl bg-slate-50 p-3">
                                    <div className="text-xs font-medium uppercase tracking-wide text-slate-500">
                                        Outlet
                                    </div>
                                    <div className="mt-1 font-medium text-slate-900">
                                        {detailReceipt?.outlet?.name ?? "-"}
                                    </div>
                                </div>

                                <div className="rounded-xl bg-slate-50 p-3">
                                    <div className="text-xs font-medium uppercase tracking-wide text-slate-500">
                                        PO
                                    </div>
                                    <div className="mt-1 font-medium text-slate-900">
                                        {detailReceipt?.purchase_order?.po_number ??
                                            detailReceipt?.purchaseOrder?.po_number ??
                                            "-"}
                                    </div>
                                </div>

                                <div className="rounded-xl bg-slate-50 p-3">
                                    <div className="text-xs font-medium uppercase tracking-wide text-slate-500">
                                        Status
                                    </div>
                                    <div className="mt-1">
                                        {detailReceipt ? (
                                            <Badge variant={statusVariant[detailReceipt.status]}>
                                                {detailReceipt.status}
                                            </Badge>
                                        ) : (
                                            "-"
                                        )}
                                    </div>
                                </div>

                                <div className="rounded-xl bg-slate-50 p-3">
                                    <div className="text-xs font-medium uppercase tracking-wide text-slate-500">
                                        Received Date
                                    </div>
                                    <div className="mt-1 font-medium text-slate-900">
                                        {detailReceipt?.received_date ?? "-"}
                                    </div>
                                </div>

                                <div className="rounded-xl bg-slate-50 p-3 md:col-span-2">
                                    <div className="text-xs font-medium uppercase tracking-wide text-slate-500">
                                        Notes
                                    </div>
                                    <div className="mt-1 text-slate-700">
                                        {detailReceipt?.notes ?? "-"}
                                    </div>
                                </div>
                            </div>
                        </Card>

                        <div className="space-y-3">
                            {detailReceipt?.items?.map((item) => (
                                <Card
                                    key={item.id}
                                    title={item.raw_material?.name ?? item.rawMaterial?.name ?? "-"}
                                    description={`${Number(item.qty_received ?? 0).toLocaleString("id-ID")} ${item.unit?.code ?? ""}`}
                                >
                                    <div className="grid gap-3 text-sm md:grid-cols-3">
                                        <div className="rounded-xl bg-slate-50 p-3">
                                            <div className="text-xs font-medium uppercase tracking-wide text-slate-500">
                                                Unit Cost
                                            </div>
                                            <div className="mt-1 font-medium text-slate-900">
                                                {formatCurrency(item.unit_cost)}
                                            </div>
                                        </div>

                                        <div className="rounded-xl bg-slate-50 p-3">
                                            <div className="text-xs font-medium uppercase tracking-wide text-slate-500">
                                                Expired
                                            </div>
                                            <div className="mt-1 font-medium text-slate-900">
                                                {item.expired_at ?? "-"}
                                            </div>
                                        </div>

                                        <div className="rounded-xl bg-[var(--brand-brick-soft)] p-3">
                                            <div className="text-xs font-medium uppercase tracking-wide text-[var(--brand-brick)]">
                                                Line Total
                                            </div>
                                            <div className="mt-1 font-bold text-[var(--brand-brick)]">
                                                {formatCurrency(item.line_total)}
                                            </div>
                                        </div>
                                    </div>
                                </Card>
                            ))}
                        </div>
                    </div>
                </Modal>

                <ConfirmDialog
                    open={Boolean(deleteTarget)}
                    title="Hapus goods receipt?"
                    description={`Receipt ${deleteTarget?.receipt_number ?? ""} akan dihapus.`}
                    confirmText="Hapus"
                    confirmVariant="danger"
                    loading={deleteMutation.isPending}
                    onClose={() => setDeleteTarget(null)}
                    onConfirm={() => {
                        if (deleteTarget) {
                            deleteMutation.mutate(deleteTarget);
                        }
                    }}
                />
            </div>
        </PermissionWrapper>
    );
}