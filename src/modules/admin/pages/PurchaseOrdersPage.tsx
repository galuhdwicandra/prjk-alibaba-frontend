// src/modules/admin/pages/PurchaseOrdersPage.tsx

import { useMemo, useState } from "react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { masterDataService } from "@/modules/admin/services/master-data.service";
import { inventoryService } from "@/modules/admin/services/inventory.service";
import {
    purchasingService,
    type PurchaseOrderItemPayload,
    type PurchaseOrderPayload,
} from "@/modules/admin/services/purchasing.service";
import {
    PurchaseOrderItemsEditor,
    createInitialPurchaseOrderItems,
    sanitizePurchaseOrderItems,
} from "@/modules/admin/components/purchasing/PurchaseOrderItemsEditor";
import { PageHeader } from "@/components/navigation/PageHeader";
import { PermissionWrapper } from "@/components/navigation/PermissionWrapper";
import { PageErrorState } from "@/components/feedback/PageErrorState";
import { PageEmptyState } from "@/components/feedback/PageEmptyState";
import { Badge, Button, Card, ConfirmDialog, Input, Modal } from "@/components/ui";
import { parseApiError } from "@/services/api/error-parser";
import { useToast } from "@/hooks/useToast";
import type { PurchaseOrder, PurchaseOrderStatus } from "@/types/purchasing";

const today = new Date().toISOString().slice(0, 10);

const initialForm: PurchaseOrderPayload = {
    outlet_id: 0,
    supplier_id: 0,
    order_date: today,
    expected_date: null,
    discount_amount: 0,
    tax_amount: 0,
    notes: "",
    items: createInitialPurchaseOrderItems(),
};

const statusVariant: Record<PurchaseOrderStatus, "success" | "warning" | "info" | "danger"> = {
    draft: "warning",
    approved: "info",
    partial_received: "warning",
    received: "success",
    cancelled: "danger",
};

export default function PurchaseOrdersPage() {
    const toast = useToast();
    const queryClient = useQueryClient();

    const [search, setSearch] = useState("");
    const [outletFilter, setOutletFilter] = useState<number | "">("");
    const [supplierFilter, setSupplierFilter] = useState<number | "">("");
    const [statusFilter, setStatusFilter] = useState<PurchaseOrderStatus | "">("");
    const [openModal, setOpenModal] = useState(false);
    const [detailOrder, setDetailOrder] = useState<PurchaseOrder | null>(null);
    const [editingOrder, setEditingOrder] = useState<PurchaseOrder | null>(null);
    const [deleteTarget, setDeleteTarget] = useState<PurchaseOrder | null>(null);
    const [form, setForm] = useState<PurchaseOrderPayload>(initialForm);

    const purchaseOrdersQuery = useQuery({
        queryKey: ["purchasing-purchase-orders", search, outletFilter, supplierFilter, statusFilter],
        queryFn: () =>
            purchasingService.getPurchaseOrders({
                per_page: 100,
                search,
                outlet_id: outletFilter,
                supplier_id: supplierFilter,
                status: statusFilter,
            }),
    });

    const outletsQuery = useQuery({
        queryKey: ["purchasing-po-outlets"],
        queryFn: () => masterDataService.getOutlets({ per_page: 100 }),
    });

    const suppliersQuery = useQuery({
        queryKey: ["purchasing-po-suppliers"],
        queryFn: () => purchasingService.getSuppliers({ per_page: 100, is_active: true }),
    });

    const rawMaterialsQuery = useQuery({
        queryKey: ["purchasing-po-raw-materials"],
        queryFn: () => inventoryService.getRawMaterials({ per_page: 100 }),
    });

    const unitsQuery = useQuery({
        queryKey: ["purchasing-po-units"],
        queryFn: () => inventoryService.getUnits({ per_page: 100 }),
    });

    const purchaseOrders = purchaseOrdersQuery.data?.items ?? [];
    const outlets = outletsQuery.data?.items ?? [];
    const suppliers = suppliersQuery.data?.items ?? [];
    const rawMaterials = rawMaterialsQuery.data?.items ?? [];
    const units = unitsQuery.data?.items ?? [];

    const formSubtotal = useMemo(() => {
        return sanitizePurchaseOrderItems(form.items).reduce((total, item) => {
            return (
                total +
                Math.max(
                    0,
                    Number(item.qty_ordered || 0) * Number(item.unit_price || 0) -
                    Number(item.discount_amount || 0)
                )
            );
        }, 0);
    }, [form.items]);

    const formTotal = Math.max(
        0,
        formSubtotal - Number(form.discount_amount || 0) + Number(form.tax_amount || 0)
    );

    const saveMutation = useMutation({
        mutationFn: (payload: PurchaseOrderPayload) => {
            const sanitizedPayload = {
                ...payload,
                items: sanitizePurchaseOrderItems(payload.items),
            };

            if (editingOrder) {
                return purchasingService.updatePurchaseOrder(editingOrder.id, sanitizedPayload);
            }

            return purchasingService.createPurchaseOrder(sanitizedPayload);
        },
        onSuccess: (response) => {
            toast.success(response.message);
            setOpenModal(false);
            setEditingOrder(null);
            setForm(initialForm);
            void queryClient.invalidateQueries({ queryKey: ["purchasing-purchase-orders"] });
        },
        onError: (error) => toast.error("Gagal menyimpan purchase order", parseApiError(error)),
    });

    const approveMutation = useMutation({
        mutationFn: (order: PurchaseOrder) => purchasingService.approvePurchaseOrder(order.id),
        onSuccess: (response) => {
            toast.success(response.message);
            void queryClient.invalidateQueries({ queryKey: ["purchasing-purchase-orders"] });
        },
        onError: (error) => toast.error("Gagal approve purchase order", parseApiError(error)),
    });

    const cancelMutation = useMutation({
        mutationFn: (order: PurchaseOrder) => purchasingService.cancelPurchaseOrder(order.id),
        onSuccess: (response) => {
            toast.success(response.message);
            void queryClient.invalidateQueries({ queryKey: ["purchasing-purchase-orders"] });
        },
        onError: (error) => toast.error("Gagal membatalkan purchase order", parseApiError(error)),
    });

    const deleteMutation = useMutation({
        mutationFn: (order: PurchaseOrder) => purchasingService.deletePurchaseOrder(order.id),
        onSuccess: (response) => {
            toast.success(response.message);
            setDeleteTarget(null);
            void queryClient.invalidateQueries({ queryKey: ["purchasing-purchase-orders"] });
        },
        onError: (error) => toast.error("Gagal menghapus purchase order", parseApiError(error)),
    });

    const openCreate = () => {
        setEditingOrder(null);
        setForm(initialForm);
        setOpenModal(true);
    };

    const openEdit = (order: PurchaseOrder) => {
        setEditingOrder(order);
        setForm({
            outlet_id: order.outlet_id,
            supplier_id: order.supplier_id,
            order_date: order.order_date,
            expected_date: order.expected_date,
            discount_amount: Number(order.discount_amount ?? 0),
            tax_amount: Number(order.tax_amount ?? 0),
            notes: order.notes ?? "",
            items:
                order.items?.map((item) => ({
                    raw_material_id: item.raw_material_id,
                    qty_ordered: Number(item.qty_ordered ?? 0),
                    unit_id: item.unit_id,
                    unit_price: Number(item.unit_price ?? 0),
                    discount_amount: Number(item.discount_amount ?? 0),
                    notes: item.notes ?? "",
                })) ?? createInitialPurchaseOrderItems(),
        });
        setOpenModal(true);
    };

    return (
        <PermissionWrapper permission="purchase_orders.view">
            <div className="space-y-4">
                <PageHeader
                    title="Purchase Order"
                    description="Kelola draft, approval, dan riwayat pembelian bahan baku."
                    actions={<Button onClick={openCreate}>Buat PO</Button>}
                />

                <Card>
                    <div className="grid gap-4 md:grid-cols-4">
                        <Input
                            placeholder="Cari nomor PO atau supplier..."
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
                                    {outlet.name}
                                </option>
                            ))}
                        </select>

                        <select
                            className="w-full rounded-xl border border-slate-300 px-3 py-2 text-sm"
                            value={supplierFilter}
                            onChange={(event) =>
                                setSupplierFilter(event.target.value ? Number(event.target.value) : "")
                            }
                        >
                            <option value="">Semua supplier</option>
                            {suppliers.map((supplier) => (
                                <option key={supplier.id} value={supplier.id}>
                                    {supplier.name}
                                </option>
                            ))}
                        </select>

                        <select
                            className="w-full rounded-xl border border-slate-300 px-3 py-2 text-sm"
                            value={statusFilter}
                            onChange={(event) => setStatusFilter(event.target.value as PurchaseOrderStatus | "")}
                        >
                            <option value="">Semua status</option>
                            <option value="draft">draft</option>
                            <option value="approved">approved</option>
                            <option value="partial_received">partial_received</option>
                            <option value="received">received</option>
                            <option value="cancelled">cancelled</option>
                        </select>
                    </div>
                </Card>

                {purchaseOrdersQuery.isLoading ? (
                    <Card>Memuat purchase order...</Card>
                ) : purchaseOrdersQuery.isError ? (
                    <PageErrorState onRetry={() => void purchaseOrdersQuery.refetch()} />
                ) : !purchaseOrders.length ? (
                    <PageEmptyState title="Belum ada purchase order" />
                ) : (
                    <div className="grid gap-4 xl:grid-cols-2">
                        {purchaseOrders.map((order) => (
                            <Card
                                key={order.id}
                                title={order.po_number}
                                description={`${order.outlet?.name ?? "-"} • ${order.supplier?.name ?? "-"}`}
                                actions={<Badge variant={statusVariant[order.status]}>{order.status}</Badge>}
                            >
                                <div className="grid gap-3 text-sm text-slate-600 md:grid-cols-2">
                                    <div>
                                        <div className="text-xs text-slate-500">Tanggal Order</div>
                                        <div>{order.order_date}</div>
                                    </div>

                                    <div>
                                        <div className="text-xs text-slate-500">Expected Date</div>
                                        <div>{order.expected_date ?? "-"}</div>
                                    </div>

                                    <div>
                                        <div className="text-xs text-slate-500">Subtotal</div>
                                        <div>Rp {Number(order.subtotal ?? 0).toLocaleString("id-ID")}</div>
                                    </div>

                                    <div>
                                        <div className="text-xs text-slate-500">Total</div>
                                        <div className="font-semibold text-slate-900">
                                            Rp {Number(order.total_amount ?? 0).toLocaleString("id-ID")}
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-4 flex flex-wrap gap-2">
                                    <Button variant="outline" onClick={() => setDetailOrder(order)}>
                                        Detail
                                    </Button>

                                    {order.status === "draft" ? (
                                        <>
                                            <Button variant="outline" onClick={() => openEdit(order)}>
                                                Edit
                                            </Button>
                                            <Button
                                                loading={approveMutation.isPending}
                                                onClick={() => approveMutation.mutate(order)}
                                            >
                                                Approve
                                            </Button>
                                            <Button
                                                variant="danger"
                                                loading={cancelMutation.isPending}
                                                onClick={() => cancelMutation.mutate(order)}
                                            >
                                                Cancel
                                            </Button>
                                            <Button variant="danger" onClick={() => setDeleteTarget(order)}>
                                                Hapus
                                            </Button>
                                        </>
                                    ) : null}
                                </div>
                            </Card>
                        ))}
                    </div>
                )}

                <Modal
                    open={openModal}
                    title={editingOrder ? "Edit Purchase Order" : "Buat Purchase Order"}
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
                    <div className="space-y-4">
                        <div className="grid gap-4 md:grid-cols-2">
                            <div>
                                <label className="mb-2 block text-sm font-medium text-slate-700">
                                    Outlet
                                </label>
                                <select
                                    className="w-full rounded-xl border border-slate-300 px-3 py-2 text-sm"
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

                            <div>
                                <label className="mb-2 block text-sm font-medium text-slate-700">
                                    Supplier
                                </label>
                                <select
                                    className="w-full rounded-xl border border-slate-300 px-3 py-2 text-sm"
                                    value={form.supplier_id || ""}
                                    onChange={(event) =>
                                        setForm((prev) => ({
                                            ...prev,
                                            supplier_id: Number(event.target.value || 0),
                                        }))
                                    }
                                >
                                    <option value="">Pilih supplier</option>
                                    {suppliers.map((supplier) => (
                                        <option key={supplier.id} value={supplier.id}>
                                            {supplier.name}
                                        </option>
                                    ))}
                                </select>
                            </div>

                            <Input
                                label="Order Date"
                                type="date"
                                value={form.order_date}
                                onChange={(event) =>
                                    setForm((prev) => ({
                                        ...prev,
                                        order_date: event.target.value,
                                    }))
                                }
                            />

                            <Input
                                label="Expected Date"
                                type="date"
                                value={form.expected_date ?? ""}
                                onChange={(event) =>
                                    setForm((prev) => ({
                                        ...prev,
                                        expected_date: event.target.value || null,
                                    }))
                                }
                            />

                            <Input
                                label="Diskon Header"
                                type="number"
                                value={String(form.discount_amount ?? 0)}
                                onChange={(event) =>
                                    setForm((prev) => ({
                                        ...prev,
                                        discount_amount: Number(event.target.value || 0),
                                    }))
                                }
                            />

                            <Input
                                label="Pajak"
                                type="number"
                                value={String(form.tax_amount ?? 0)}
                                onChange={(event) =>
                                    setForm((prev) => ({
                                        ...prev,
                                        tax_amount: Number(event.target.value || 0),
                                    }))
                                }
                            />

                            <div className="md:col-span-2">
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

                        <PurchaseOrderItemsEditor
                            value={form.items}
                            onChange={(items: PurchaseOrderItemPayload[]) =>
                                setForm((prev) => ({
                                    ...prev,
                                    items,
                                }))
                            }
                            rawMaterials={rawMaterials}
                            units={units}
                        />

                        <Card>
                            <div className="grid gap-3 text-sm md:grid-cols-3">
                                <div>
                                    <div className="text-xs text-slate-500">Subtotal Item</div>
                                    <div className="font-semibold text-slate-900">
                                        Rp {formSubtotal.toLocaleString("id-ID")}
                                    </div>
                                </div>

                                <div>
                                    <div className="text-xs text-slate-500">Diskon + Pajak</div>
                                    <div className="font-semibold text-slate-900">
                                        Rp{" "}
                                        {(
                                            Number(form.tax_amount || 0) - Number(form.discount_amount || 0)
                                        ).toLocaleString("id-ID")}
                                    </div>
                                </div>

                                <div>
                                    <div className="text-xs text-slate-500">Estimasi Total</div>
                                    <div className="text-lg font-bold text-slate-900">
                                        Rp {formTotal.toLocaleString("id-ID")}
                                    </div>
                                </div>
                            </div>
                        </Card>
                    </div>
                </Modal>

                <Modal
                    open={Boolean(detailOrder)}
                    title={`Detail PO ${detailOrder?.po_number ?? ""}`}
                    onClose={() => setDetailOrder(null)}
                    footer={
                        <Button variant="outline" onClick={() => setDetailOrder(null)}>
                            Tutup
                        </Button>
                    }
                >
                    <div className="space-y-4">
                        <Card>
                            <div className="grid gap-3 text-sm md:grid-cols-2">
                                <div>
                                    <div className="text-xs text-slate-500">Outlet</div>
                                    <div>{detailOrder?.outlet?.name ?? "-"}</div>
                                </div>

                                <div>
                                    <div className="text-xs text-slate-500">Supplier</div>
                                    <div>{detailOrder?.supplier?.name ?? "-"}</div>
                                </div>

                                <div>
                                    <div className="text-xs text-slate-500">Status</div>
                                    <div>{detailOrder?.status ?? "-"}</div>
                                </div>

                                <div>
                                    <div className="text-xs text-slate-500">Approved At</div>
                                    <div>{detailOrder?.approved_at ?? "-"}</div>
                                </div>

                                <div className="md:col-span-2">
                                    <div className="text-xs text-slate-500">Notes</div>
                                    <div>{detailOrder?.notes ?? "-"}</div>
                                </div>
                            </div>
                        </Card>

                        <div className="space-y-3">
                            {detailOrder?.items?.map((item) => (
                                <Card
                                    key={item.id}
                                    title={item.raw_material?.name ?? item.rawMaterial?.name ?? "-"}
                                    description={`${Number(item.qty_ordered ?? 0).toLocaleString("id-ID")} ${item.unit?.code ?? ""
                                        }`}
                                >
                                    <div className="grid gap-3 text-sm md:grid-cols-3">
                                        <div>
                                            <div className="text-xs text-slate-500">Unit Price</div>
                                            <div>Rp {Number(item.unit_price ?? 0).toLocaleString("id-ID")}</div>
                                        </div>

                                        <div>
                                            <div className="text-xs text-slate-500">Diskon</div>
                                            <div>Rp {Number(item.discount_amount ?? 0).toLocaleString("id-ID")}</div>
                                        </div>

                                        <div>
                                            <div className="text-xs text-slate-500">Line Total</div>
                                            <div className="font-semibold text-slate-900">
                                                Rp {Number(item.line_total ?? 0).toLocaleString("id-ID")}
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
                    title="Hapus purchase order?"
                    description={`PO ${deleteTarget?.po_number ?? ""} akan dihapus.`}
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