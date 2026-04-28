import { useMemo } from "react";
import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { Badge, Button, Card } from "@/components/ui";
import { PageHeader } from "@/components/navigation/PageHeader";
import { PermissionWrapper } from "@/components/navigation/PermissionWrapper";
import { PageErrorState } from "@/components/feedback/PageErrorState";
import { useActiveOutlet } from "@/hooks/useActiveOutlet";
import { useAuthStore } from "@/modules/auth/store/auth.store";
import { posService } from "@/modules/pos/services/pos.service";
import { shiftService } from "@/modules/pos/services/shift.service";
import type { CashMovement, CashierShift } from "@/types/cashier-shift";
import type { PosOrderResponse } from "@/modules/pos/services/pos.service";

const formatCurrency = (value: number | string | null | undefined) =>
    new Intl.NumberFormat("id-ID", {
        style: "currency",
        currency: "IDR",
        maximumFractionDigits: 0,
    }).format(Number(value ?? 0));

const formatDateTime = (value?: string | null) => {
    if (!value) {
        return "-";
    }

    return new Intl.DateTimeFormat("id-ID", {
        dateStyle: "medium",
        timeStyle: "short",
    }).format(new Date(value));
};

const getShiftMovements = (shift: CashierShift | null): CashMovement[] => {
    if (!shift) {
        return [];
    }

    return shift.cash_movements ?? shift.cashMovements ?? [];
};

const getOrderStatusVariant = (status: string) => {
    if (status === "completed") return "success";
    if (status === "cancelled") return "danger";
    if (status === "ready") return "info";
    if (status === "preparing") return "warning";
    if (status === "confirmed") return "info";

    return "warning";
};

const getPaymentStatusVariant = (status: string) => {
    if (status === "paid") return "success";
    if (status === "partial") return "warning";
    if (status === "cancelled" || status === "refunded") return "danger";

    return "warning";
};

const sumGrandTotal = (orders: PosOrderResponse[]) =>
    orders.reduce((total, order) => total + Number(order.grand_total ?? 0), 0);

const countByStatus = (orders: PosOrderResponse[], status: string) =>
    orders.filter((order) => order.order_status === status).length;

export default function PosHomePage() {
    const user = useAuthStore((state) => state.user);
    const { activeOutlet } = useActiveOutlet();

    const activeOutletId = activeOutlet?.outlet_id ?? null;
    const activeOutletName = activeOutlet
        ? `${activeOutlet.outlet_name ?? `Outlet #${activeOutlet.outlet_id}`}${activeOutlet.outlet_code ? ` (${activeOutlet.outlet_code})` : ""
        }`
        : "Outlet belum dipilih";

    const today = new Date().toISOString().slice(0, 10);

    const shiftsQuery = useQuery({
        queryKey: ["pos-home-open-shift", activeOutletId],
        enabled: Boolean(activeOutletId),
        queryFn: () =>
            shiftService.getCashierShifts({
                outlet_id: activeOutletId ?? "",
                status: "open",
                per_page: 1,
            }),
    });

    const currentShift = shiftsQuery.data?.items?.[0] ?? null;

    const shiftDetailQuery = useQuery({
        queryKey: ["pos-home-open-shift-detail", currentShift?.id],
        enabled: Boolean(currentShift?.id),
        queryFn: () => shiftService.getCashierShift(Number(currentShift?.id)),
    });

    const ordersQuery = useQuery({
        queryKey: ["pos-home-today-orders", activeOutletId, today],
        enabled: Boolean(activeOutletId),
        queryFn: () =>
            posService.getOrders({
                outlet_id: activeOutletId ?? "",
                ordered_from: `${today} 00:00:00`,
                ordered_until: `${today} 23:59:59`,
                per_page: 50,
            }),
    });

    const currentShiftDetail = shiftDetailQuery.data?.data ?? currentShift;
    const todayOrders = (ordersQuery.data?.items ?? []).filter((order) =>
        ["pos", "dine_in", "takeaway"].includes(order.order_channel)
    );
    const shiftMovements = getShiftMovements(currentShiftDetail);

    const cashInTotal = useMemo(
        () =>
            shiftMovements
                .filter((movement) => movement.movement_type === "cash_in")
                .reduce((total, movement) => total + Number(movement.amount || 0), 0),
        [shiftMovements]
    );

    const cashOutTotal = useMemo(
        () =>
            shiftMovements
                .filter((movement) => movement.movement_type === "cash_out")
                .reduce((total, movement) => total + Number(movement.amount || 0), 0),
        [shiftMovements]
    );

    const openingCash = Number(currentShiftDetail?.opening_cash ?? 0);
    const expectedCash = Number(currentShiftDetail?.expected_cash ?? 0);

    const grossSalesToday = sumGrandTotal(todayOrders);
    const completedOrders = countByStatus(todayOrders, "completed");
    const activeOrders = todayOrders.filter((order) =>
        ["draft", "confirmed", "preparing", "ready"].includes(order.order_status)
    ).length;

    const isLoading = shiftsQuery.isLoading || ordersQuery.isLoading;
    const isError = shiftsQuery.isError || ordersQuery.isError;

    return (
        <PermissionWrapper permission="orders.view">
            <div className="space-y-5">
                <PageHeader
                    title="POS Home"
                    description="Ringkasan kerja kasir, status shift, transaksi hari ini, dan akses cepat ke fitur POS."
                    actions={
                        <div className="flex flex-col gap-2 sm:flex-row">
                            <Link to="/pos/orders">
                                <Button>Mulai Transaksi</Button>
                            </Link>
                            <Link to="/pos/shifts">
                                <Button variant="outline">Kelola Shift</Button>
                            </Link>
                        </div>
                    }
                />

                {isError ? (
                    <PageErrorState
                        onRetry={() => {
                            void shiftsQuery.refetch();
                            void ordersQuery.refetch();
                            void shiftDetailQuery.refetch();
                        }}
                    />
                ) : (
                    <>
                        <Card>
                            <div className="grid gap-4 lg:grid-cols-[1.5fr_1fr] lg:items-center">
                                <div>
                                    <div className="inline-flex rounded-full border border-orange-200 bg-orange-50 px-3 py-1 text-xs font-semibold text-[var(--brand-brick)]">
                                        Chicken Alibaba POS
                                    </div>

                                    <h2 className="mt-3 text-xl font-semibold text-slate-950">
                                        Selamat bekerja, {user?.name ?? "Kasir"}
                                    </h2>

                                    <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-600">
                                        Outlet aktif: <span className="font-semibold text-slate-900">{activeOutletName}</span>.
                                        Gunakan halaman ini untuk memantau shift dan langsung masuk ke transaksi kasir.
                                    </p>
                                </div>

                                <div className="rounded-2xl border border-orange-100 bg-orange-50/60 p-4">
                                    <div className="text-xs font-semibold uppercase tracking-wide text-[var(--brand-brick)]">
                                        Status Shift
                                    </div>

                                    <div className="mt-2 flex items-center justify-between gap-3">
                                        <div>
                                            <div className="text-lg font-semibold text-slate-950">
                                                {currentShiftDetail ? currentShiftDetail.shift_number : "Belum ada shift open"}
                                            </div>
                                            <div className="mt-1 text-sm text-slate-600">
                                                Dibuka: {formatDateTime(currentShiftDetail?.opened_at)}
                                            </div>
                                        </div>

                                        <Badge variant={currentShiftDetail ? "success" : "warning"}>
                                            {currentShiftDetail ? "Open" : "Perlu Buka Shift"}
                                        </Badge>
                                    </div>
                                </div>
                            </div>
                        </Card>

                        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
                            <Card>
                                <div className="text-sm font-medium text-slate-500">Penjualan Hari Ini</div>
                                <div className="mt-2 text-2xl font-semibold text-slate-950">
                                    {isLoading ? "..." : formatCurrency(grossSalesToday)}
                                </div>
                                <div className="mt-1 text-xs text-slate-500">
                                    Berdasarkan transaksi kasir channel POS, dine in, dan takeaway hari ini.
                                </div>
                            </Card>

                            <Card>
                                <div className="text-sm font-medium text-slate-500">Order Hari Ini</div>
                                <div className="mt-2 text-2xl font-semibold text-slate-950">
                                    {isLoading ? "..." : todayOrders.length.toLocaleString("id-ID")}
                                </div>
                                <div className="mt-1 text-xs text-slate-500">
                                    {completedOrders.toLocaleString("id-ID")} order selesai.
                                </div>
                            </Card>

                            <Card>
                                <div className="text-sm font-medium text-slate-500">Order Aktif</div>
                                <div className="mt-2 text-2xl font-semibold text-slate-950">
                                    {isLoading ? "..." : activeOrders.toLocaleString("id-ID")}
                                </div>
                                <div className="mt-1 text-xs text-slate-500">
                                    Draft, confirmed, preparing, atau ready.
                                </div>
                            </Card>

                            <Card>
                                <div className="text-sm font-medium text-slate-500">Estimasi Kas Shift</div>
                                <div className="mt-2 text-2xl font-semibold text-slate-950">
                                    {isLoading ? "..." : formatCurrency(expectedCash)}
                                </div>
                                <div className="mt-1 text-xs text-slate-500">
                                    Modal awal + kas masuk - kas keluar + penjualan tunai.
                                </div>
                            </Card>
                        </div>

                        <div className="grid gap-4 xl:grid-cols-[1.1fr_0.9fr]">
                            <Card
                                title="Akses Cepat POS"
                                description="Shortcut kerja utama kasir."
                            >
                                <div className="grid gap-3 sm:grid-cols-3">
                                    <Link
                                        to="/pos/orders"
                                        className="rounded-2xl border border-orange-100 bg-orange-50/60 p-4 transition hover:border-[var(--brand-brick)] hover:bg-orange-50"
                                    >
                                        <div className="text-sm font-semibold text-slate-950">Transaksi Baru</div>
                                        <p className="mt-1 text-xs leading-5 text-slate-600">
                                            Input produk, customer, voucher, dan pembayaran.
                                        </p>
                                    </Link>

                                    <Link
                                        to="/pos/order-history"
                                        className="rounded-2xl border border-slate-200 bg-white p-4 transition hover:border-[var(--brand-brick)] hover:bg-orange-50/40"
                                    >
                                        <div className="text-sm font-semibold text-slate-950">Riwayat Order</div>
                                        <p className="mt-1 text-xs leading-5 text-slate-600">
                                            Cek transaksi, status pembayaran, dan cetak ulang struk.
                                        </p>
                                    </Link>

                                    <Link
                                        to="/pos/shifts"
                                        className="rounded-2xl border border-slate-200 bg-white p-4 transition hover:border-[var(--brand-brick)] hover:bg-orange-50/40"
                                    >
                                        <div className="text-sm font-semibold text-slate-950">Shift Kasir</div>
                                        <p className="mt-1 text-xs leading-5 text-slate-600">
                                            Buka shift, catat kas masuk/keluar, dan tutup shift.
                                        </p>
                                    </Link>
                                </div>
                            </Card>

                            <Card
                                title="Ringkasan Kas Shift"
                                description="Data diambil dari cashier shift aktif."
                            >
                                <div className="space-y-3 text-sm">
                                    <div className="flex justify-between gap-4 rounded-xl bg-slate-50 px-4 py-3">
                                        <span className="text-slate-500">Modal Awal</span>
                                        <span className="font-semibold text-slate-950">{formatCurrency(openingCash)}</span>
                                    </div>

                                    <div className="flex justify-between gap-4 rounded-xl bg-slate-50 px-4 py-3">
                                        <span className="text-slate-500">Kas Masuk</span>
                                        <span className="font-semibold text-slate-950">{formatCurrency(cashInTotal)}</span>
                                    </div>

                                    <div className="flex justify-between gap-4 rounded-xl bg-slate-50 px-4 py-3">
                                        <span className="text-slate-500">Kas Keluar</span>
                                        <span className="font-semibold text-slate-950">{formatCurrency(cashOutTotal)}</span>
                                    </div>

                                    <div className="flex justify-between gap-4 rounded-xl border border-orange-100 bg-orange-50/60 px-4 py-3">
                                        <span className="font-medium text-[var(--brand-brick)]">Expected Cash</span>
                                        <span className="font-semibold text-slate-950">{formatCurrency(expectedCash)}</span>
                                    </div>
                                </div>
                            </Card>
                        </div>

                        <Card
                            title="Order POS Terbaru"
                            description="Menampilkan transaksi POS terbaru pada outlet aktif hari ini."
                            actions={
                                <Link to="/pos/order-history">
                                    <Button variant="outline">Lihat Semua</Button>
                                </Link>
                            }
                        >
                            {!todayOrders.length ? (
                                <div className="rounded-2xl border border-dashed border-slate-200 bg-slate-50 p-6 text-center">
                                    <div className="text-sm font-semibold text-slate-900">Belum ada order hari ini</div>
                                    <p className="mt-1 text-sm text-slate-500">
                                        Mulai transaksi pertama dari halaman POS Orders.
                                    </p>
                                </div>
                            ) : (
                                <div className="overflow-x-auto">
                                    <table className="min-w-full divide-y divide-slate-200 text-sm">
                                        <thead>
                                            <tr className="text-left text-xs font-semibold uppercase tracking-wide text-slate-500">
                                                <th className="px-3 py-3">Order</th>
                                                <th className="px-3 py-3">Waktu</th>
                                                <th className="px-3 py-3">Status Order</th>
                                                <th className="px-3 py-3">Status Bayar</th>
                                                <th className="px-3 py-3 text-right">Grand Total</th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-slate-100">
                                            {todayOrders.map((order) => (
                                                <tr key={order.id}>
                                                    <td className="whitespace-nowrap px-3 py-3 font-medium text-slate-900">
                                                        {order.order_number}
                                                    </td>
                                                    <td className="whitespace-nowrap px-3 py-3 text-slate-600">
                                                        {formatDateTime(order.ordered_at)}
                                                    </td>
                                                    <td className="px-3 py-3">
                                                        <Badge variant={getOrderStatusVariant(order.order_status)}>
                                                            {order.order_status}
                                                        </Badge>
                                                    </td>
                                                    <td className="px-3 py-3">
                                                        <Badge variant={getPaymentStatusVariant(order.payment_status)}>
                                                            {order.payment_status}
                                                        </Badge>
                                                    </td>
                                                    <td className="whitespace-nowrap px-3 py-3 text-right font-semibold text-slate-900">
                                                        {formatCurrency(order.grand_total)}
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            )}
                        </Card>
                    </>
                )}
            </div>
        </PermissionWrapper>
    );
}