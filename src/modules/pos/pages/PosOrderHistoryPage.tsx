import { useMemo, useState } from "react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { Badge, Button, Card, Input, Modal, Pagination } from "@/components/ui";
import { PageHeader } from "@/components/navigation/PageHeader";
import { PermissionWrapper } from "@/components/navigation/PermissionWrapper";
import { PageEmptyState } from "@/components/feedback/PageEmptyState";
import { PageErrorState } from "@/components/feedback/PageErrorState";
import { useActiveOutlet } from "@/hooks/useActiveOutlet";
import { posService, type PosOrderQuery, type PosOrderResponse } from "@/modules/pos/services/pos.service";
import type { PosOrderChannel } from "@/modules/pos/types/pos";
import { parseApiError } from "@/services/api/error-parser";
import { useToast } from "@/hooks/useToast";
import { PosDebtPaymentModal } from "@/modules/pos/components/PosDebtPaymentModal";

const formatCurrency = (value: number | string | null | undefined) =>
    new Intl.NumberFormat("id-ID", {
        style: "currency",
        currency: "IDR",
        maximumFractionDigits: 0,
    }).format(Number(value ?? 0));

const formatDateTime = (value: string | null | undefined) => {
    if (!value) {
        return "-";
    }

    return new Intl.DateTimeFormat("id-ID", {
        dateStyle: "medium",
        timeStyle: "short",
    }).format(new Date(value));
};

const orderStatusVariant = (status: string) => {
    if (status === "completed") return "success";
    if (status === "cancelled") return "danger";
    if (status === "ready") return "info";
    if (status === "preparing") return "warning";
    if (status === "confirmed") return "info";
    return "warning";
};

const paymentStatusVariant = (status: string) => {
    if (status === "paid") return "success";
    if (status === "partial") return "warning";
    if (status === "cancelled" || status === "refunded") return "danger";
    return "warning";
};

const channelLabel: Record<PosOrderChannel, string> = {
    pos: "POS",
    dine_in: "Dine In",
    takeaway: "Takeaway",
    pickup: "Pickup",
    delivery: "Delivery",
    website: "Website",
};

export default function PosOrderHistoryPage() {
    const { activeOutletId } = useActiveOutlet();
    const toast = useToast();
    const queryClient = useQueryClient();

    const [filters, setFilters] = useState<PosOrderQuery>({
        page: 1,
        per_page: 10,
        search: "",
        outlet_id: "",
        order_channel: "",
        order_status: "",
        payment_status: "",
        ordered_from: "",
        ordered_until: "",
    });

    const [selectedOrderId, setSelectedOrderId] = useState<number | null>(null);
    const [paymentOrder, setPaymentOrder] = useState<PosOrderResponse | null>(null);

    const queryParams = useMemo<PosOrderQuery>(
        () => ({
            ...filters,
            outlet_id: filters.outlet_id || activeOutletId || "",
            search: filters.search || undefined,
            order_channel: filters.order_channel || undefined,
            order_status: filters.order_status || undefined,
            payment_status: filters.payment_status || undefined,
            ordered_from: filters.ordered_from || undefined,
            ordered_until: filters.ordered_until || undefined,
        }),
        [activeOutletId, filters]
    );

    const ordersQuery = useQuery({
        queryKey: ["pos-order-history", queryParams],
        queryFn: () => posService.getOrders(queryParams),
    });

    const detailQuery = useQuery({
        queryKey: ["pos-order-detail", selectedOrderId],
        queryFn: () => posService.getOrder(Number(selectedOrderId)),
        enabled: Boolean(selectedOrderId),
    });

    const paymentMethodsQuery = useQuery({
        queryKey: ["pos-history-payment-methods"],
        queryFn: () => posService.getPaymentMethods({ per_page: 100 }),
    });

    const paymentMutation = useMutation({
        mutationFn: (payload: {
            order_id: number;
            payment_method_id: number;
            amount: number;
            reference_number: string | null;
            notes: string | null;
        }) =>
            posService.createPayment({
                order_id: payload.order_id,
                payment_method_id: payload.payment_method_id,
                amount: payload.amount,
                reference_number: payload.reference_number,
                paid_at: new Date().toISOString().slice(0, 19).replace("T", " "),
                status: "paid",
                notes: payload.notes,
            }),
        onSuccess: (response) => {
            toast.success(response.message);
            setPaymentOrder(null);

            void queryClient.invalidateQueries({ queryKey: ["pos-order-history"] });
            void queryClient.invalidateQueries({ queryKey: ["pos-order-detail"] });
            void queryClient.invalidateQueries({ queryKey: ["pos-home-open-shift"] });
            void queryClient.invalidateQueries({ queryKey: ["pos-home-open-shift-detail"] });
        },
        onError: (error) => {
            toast.error("Gagal menyimpan pembayaran", parseApiError(error));
        },
    });

    const orders = ordersQuery.data?.items ?? [];
    const selectedOrder = detailQuery.data?.data ?? null;

    const resetFilters = () => {
        setFilters({
            page: 1,
            per_page: 10,
            search: "",
            outlet_id: "",
            order_channel: "",
            order_status: "",
            payment_status: "",
            ordered_from: "",
            ordered_until: "",
        });
    };

    return (
        <PermissionWrapper permission="orders.view">
            <div className="space-y-5">
                <PageHeader
                    title="Riwayat Pesanan POS"
                    description="Daftar transaksi POS berdasarkan outlet aktif, status order, status pembayaran, tanggal, dan nomor order."
                    actions={
                        <Button variant="outline" onClick={() => void ordersQuery.refetch()}>
                            Refresh
                        </Button>
                    }
                />

                <Card>
                    <div className="grid gap-4 lg:grid-cols-6">
                        <Input
                            label="Cari Pesanan"
                            placeholder="Nomor order, nomor antrean, customer..."
                            value={filters.search ?? ""}
                            onChange={(event) =>
                                setFilters((prev) => ({
                                    ...prev,
                                    page: 1,
                                    search: event.target.value,
                                }))
                            }
                        />

                        <div>
                            <label className="mb-2 block text-sm font-medium text-slate-700">
                                Channel
                            </label>
                            <select
                                className="w-full rounded-xl border border-slate-300 bg-white px-3 py-2 text-sm text-slate-800 shadow-sm outline-none transition focus:border-[var(--brand-brick)] focus:ring-2 focus:ring-orange-100"
                                value={filters.order_channel ?? ""}
                                onChange={(event) =>
                                    setFilters((prev) => ({
                                        ...prev,
                                        page: 1,
                                        order_channel: event.target.value as PosOrderChannel | "",
                                    }))
                                }
                            >
                                <option value="">Semua channel</option>
                                <option value="pos">POS</option>
                                <option value="dine_in">Dine In</option>
                                <option value="takeaway">Takeaway</option>
                                <option value="pickup">Pickup</option>
                                <option value="delivery">Delivery</option>
                                <option value="website">Website</option>
                            </select>
                        </div>

                        <div>
                            <label className="mb-2 block text-sm font-medium text-slate-700">
                                Status Order
                            </label>
                            <select
                                className="w-full rounded-xl border border-slate-300 bg-white px-3 py-2 text-sm text-slate-800 shadow-sm outline-none transition focus:border-[var(--brand-brick)] focus:ring-2 focus:ring-orange-100"
                                value={filters.order_status ?? ""}
                                onChange={(event) =>
                                    setFilters((prev) => ({
                                        ...prev,
                                        page: 1,
                                        order_status: event.target.value,
                                    }))
                                }
                            >
                                <option value="">Semua status</option>
                                <option value="draft">draft</option>
                                <option value="pending">pending</option>
                                <option value="confirmed">confirmed</option>
                                <option value="preparing">preparing</option>
                                <option value="ready">ready</option>
                                <option value="completed">completed</option>
                                <option value="cancelled">cancelled</option>
                            </select>
                        </div>

                        <div>
                            <label className="mb-2 block text-sm font-medium text-slate-700">
                                Status Bayar
                            </label>
                            <select
                                className="w-full rounded-xl border border-slate-300 bg-white px-3 py-2 text-sm text-slate-800 shadow-sm outline-none transition focus:border-[var(--brand-brick)] focus:ring-2 focus:ring-orange-100"
                                value={filters.payment_status ?? ""}
                                onChange={(event) =>
                                    setFilters((prev) => ({
                                        ...prev,
                                        page: 1,
                                        payment_status: event.target.value,
                                    }))
                                }
                            >
                                <option value="">Semua status</option>
                                <option value="unpaid">unpaid</option>
                                <option value="partial">partial</option>
                                <option value="paid">paid</option>
                                <option value="refunded">refunded</option>
                                <option value="cancelled">cancelled</option>
                            </select>
                        </div>

                        <Input
                            label="Dari Tanggal"
                            type="date"
                            value={filters.ordered_from ?? ""}
                            onChange={(event) =>
                                setFilters((prev) => ({
                                    ...prev,
                                    page: 1,
                                    ordered_from: event.target.value,
                                }))
                            }
                        />

                        <Input
                            label="Sampai Tanggal"
                            type="date"
                            value={filters.ordered_until ?? ""}
                            onChange={(event) =>
                                setFilters((prev) => ({
                                    ...prev,
                                    page: 1,
                                    ordered_until: event.target.value,
                                }))
                            }
                        />

                        <div className="flex items-end gap-2 lg:col-span-6">
                            <Button loading={ordersQuery.isFetching} onClick={() => void ordersQuery.refetch()}>
                                Terapkan Filter
                            </Button>
                            <Button variant="outline" onClick={resetFilters}>
                                Reset
                            </Button>
                        </div>
                    </div>
                </Card>

                {ordersQuery.isLoading ? (
                    <Card>Memuat riwayat pesanan...</Card>
                ) : ordersQuery.isError ? (
                    <PageErrorState onRetry={() => void ordersQuery.refetch()} />
                ) : !orders.length ? (
                    <PageEmptyState
                        title="Belum ada riwayat pesanan"
                        description="Transaksi POS yang sudah tersimpan akan muncul di halaman ini."
                    />
                ) : (
                    <Card>
                        <div className="overflow-x-auto">
                            <table className="min-w-full divide-y divide-slate-200 text-sm">
                                <thead>
                                    <tr className="text-left text-xs font-semibold uppercase tracking-wide text-slate-500">
                                        <th className="px-3 py-3">Waktu</th>
                                        <th className="px-3 py-3">Order</th>
                                        <th className="px-3 py-3">Outlet</th>
                                        <th className="px-3 py-3">Customer</th>
                                        <th className="px-3 py-3">Channel</th>
                                        <th className="px-3 py-3">Status</th>
                                        <th className="px-3 py-3">Pembayaran</th>
                                        <th className="px-3 py-3 text-right">Total</th>
                                        <th className="px-3 py-3 text-right">Aksi</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-slate-100">
                                    {orders.map((order) => (
                                        <tr key={order.id} className="align-top">
                                            <td className="whitespace-nowrap px-3 py-3 text-slate-700">
                                                {formatDateTime(order.ordered_at)}
                                            </td>
                                            <td className="px-3 py-3">
                                                <div className="font-semibold text-slate-900">
                                                    {order.order_number}
                                                </div>
                                                <div className="text-xs text-slate-500">
                                                    Antrean: {order.queue_number ?? "-"}
                                                </div>
                                            </td>
                                            <td className="px-3 py-3 text-slate-700">
                                                {order.outlet?.name ?? "-"}
                                            </td>
                                            <td className="px-3 py-3 text-slate-700">
                                                {order.customer?.name ?? "Umum"}
                                            </td>
                                            <td className="px-3 py-3">
                                                <Badge variant="info">
                                                    {channelLabel[order.order_channel] ?? order.order_channel}
                                                </Badge>
                                            </td>
                                            <td className="px-3 py-3">
                                                <Badge variant={orderStatusVariant(order.order_status)}>
                                                    {order.order_status}
                                                </Badge>
                                            </td>
                                            <td className="px-3 py-3">
                                                <Badge variant={paymentStatusVariant(order.payment_status)}>
                                                    {order.payment_status}
                                                </Badge>
                                            </td>
                                            <td className="whitespace-nowrap px-3 py-3 text-right font-semibold text-slate-900">
                                                {formatCurrency(order.grand_total)}
                                            </td>
                                            <td className="px-3 py-3">
                                                <div className="flex justify-end gap-2">
                                                    {["unpaid", "partial"].includes(order.payment_status) ? (
                                                        <Button onClick={() => setPaymentOrder(order)}>
                                                            Bayar
                                                        </Button>
                                                    ) : null}

                                                    <Button variant="outline" onClick={() => setSelectedOrderId(order.id)}>
                                                        Detail
                                                    </Button>
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </Card>
                )}

                <Pagination
                    meta={ordersQuery.data?.meta}
                    onPageChange={(nextPage) =>
                        setFilters((prev) => ({
                            ...prev,
                            page: nextPage,
                        }))
                    }
                />

                <Modal
                    open={Boolean(selectedOrderId)}
                    title="Detail Pesanan"
                    description={selectedOrder ? selectedOrder.order_number : "Memuat detail pesanan..."}
                    onClose={() => setSelectedOrderId(null)}
                    footer={
                        <Button variant="outline" onClick={() => setSelectedOrderId(null)}>
                            Tutup
                        </Button>
                    }
                >
                    {detailQuery.isLoading ? (
                        <div className="text-sm text-slate-500">Memuat detail...</div>
                    ) : selectedOrder ? (
                        <OrderDetailContent order={selectedOrder} />
                    ) : (
                        <div className="text-sm text-slate-500">Detail pesanan tidak tersedia.</div>
                    )}
                </Modal>
            </div>
            <PosDebtPaymentModal
                open={Boolean(paymentOrder)}
                order={paymentOrder}
                paymentMethods={paymentMethodsQuery.data?.items ?? []}
                loading={paymentMethodsQuery.isLoading}
                submitting={paymentMutation.isPending}
                onClose={() => setPaymentOrder(null)}
                onSubmit={(payload) => {
                    if (!paymentOrder) {
                        return;
                    }

                    paymentMutation.mutate({
                        order_id: paymentOrder.id,
                        ...payload,
                    });
                }}
            />
        </PermissionWrapper>
    );
}

function OrderDetailContent({ order }: { order: PosOrderResponse }) {
    return (
        <div className="space-y-5 text-sm">
            <div className="grid gap-3 md:grid-cols-2">
                <InfoBox label="Outlet" value={order.outlet?.name ?? "-"} />
                <InfoBox label="Kasir" value={order.creator?.name ?? "-"} />
                <InfoBox label="Customer" value={order.customer?.name ?? "Umum"} />
                <InfoBox label="Waktu Order" value={formatDateTime(order.ordered_at)} />
                <InfoBox label="Status Order" value={order.order_status} />
                <InfoBox label="Status Pembayaran" value={order.payment_status} />
            </div>

            <div className="rounded-2xl border border-slate-200">
                <div className="border-b border-slate-100 px-4 py-3">
                    <h3 className="font-semibold text-slate-900">Item Pesanan</h3>
                </div>

                <div className="divide-y divide-slate-100">
                    {(order.items ?? []).length ? (
                        order.items?.map((item) => (
                            <div key={item.id} className="px-4 py-3">
                                <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                                    <div>
                                        <div className="font-semibold text-slate-900">
                                            {item.product_name_snapshot}
                                        </div>
                                        <div className="text-xs text-slate-500">
                                            SKU: {item.sku_snapshot ?? "-"} • Qty: {Number(item.qty).toLocaleString("id-ID")}
                                        </div>

                                        {item.variants?.length ? (
                                            <div className="mt-2 text-xs text-slate-500">
                                                Variant:{" "}
                                                {item.variants
                                                    .map((variant) => variant.variant_option_name_snapshot)
                                                    .join(", ")}
                                            </div>
                                        ) : null}

                                        {item.modifiers?.length ? (
                                            <div className="mt-1 text-xs text-slate-500">
                                                Modifier:{" "}
                                                {item.modifiers
                                                    .map((modifier) => modifier.modifier_option_name_snapshot)
                                                    .join(", ")}
                                            </div>
                                        ) : null}

                                        {item.notes ? (
                                            <div className="mt-1 text-xs text-slate-500">Catatan: {item.notes}</div>
                                        ) : null}
                                    </div>

                                    <div className="text-right">
                                        <div className="font-semibold text-slate-900">
                                            {formatCurrency(item.line_total)}
                                        </div>
                                        <div className="text-xs text-slate-500">
                                            @ {formatCurrency(item.unit_price)}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    ) : (
                        <div className="px-4 py-3 text-slate-500">Item pesanan tidak tersedia.</div>
                    )}
                </div>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <div className="space-y-2">
                    <SummaryRow label="Subtotal" value={formatCurrency(order.subtotal)} />
                    <SummaryRow label="Diskon" value={formatCurrency(order.discount_amount)} />
                    <SummaryRow label="Pajak" value={formatCurrency(order.tax_amount)} />
                    <SummaryRow label="Service Charge" value={formatCurrency(order.service_charge_amount)} />
                    <SummaryRow label="Grand Total" value={formatCurrency(order.grand_total)} strong />
                    <SummaryRow label="Dibayar" value={formatCurrency(order.paid_total)} />
                    <SummaryRow label="Kembalian" value={formatCurrency(order.change_amount)} />
                </div>
            </div>
        </div>
    );
}

function InfoBox({ label, value }: { label: string; value: string }) {
    return (
        <div className="rounded-xl bg-slate-50 p-3">
            <div className="text-xs text-slate-500">{label}</div>
            <div className="mt-1 font-medium text-slate-900">{value}</div>
        </div>
    );
}

function SummaryRow({
    label,
    value,
    strong = false,
}: {
    label: string;
    value: string;
    strong?: boolean;
}) {
    return (
        <div className="flex items-center justify-between gap-4">
            <span className={strong ? "font-semibold text-slate-900" : "text-slate-600"}>
                {label}
            </span>
            <span className={strong ? "font-bold text-slate-950" : "font-medium text-slate-800"}>
                {value}
            </span>
        </div>
    );
}