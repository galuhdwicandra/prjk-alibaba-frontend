import { useMemo, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { PageHeader } from "@/components/navigation/PageHeader";
import { PermissionWrapper } from "@/components/navigation/PermissionWrapper";
import { PageErrorState } from "@/components/feedback/PageErrorState";
import { Badge, Card } from "@/components/ui";
import { masterDataService } from "@/modules/admin/services/master-data.service";
import { dashboardService } from "@/modules/dashboard/services/dashboard.service";
import { DashboardMetricCard } from "@/modules/dashboard/components/DashboardMetricCard";
import { DashboardFilters } from "@/modules/dashboard/components/DashboardFilters";
import { DashboardBarList } from "@/modules/dashboard/components/DashboardBarList";
import { DashboardQuickTable } from "@/modules/dashboard/components/DashboardQuickTable";
import type {
  DashboardCashDiscrepancy,
  DashboardFilter,
  DashboardOrderRow,
} from "@/types/dashboard";

const today = new Date();
const firstDayOfMonth = new Date(today.getFullYear(), today.getMonth(), 1)
  .toISOString()
  .slice(0, 10);
const currentDay = today.toISOString().slice(0, 10);

const formatCurrency = (value: number | string | null | undefined) => {
  return `Rp ${Number(value ?? 0).toLocaleString("id-ID")}`;
};

const formatNumber = (value: number | string | null | undefined) => {
  return Number(value ?? 0).toLocaleString("id-ID");
};

const formatDateTime = (value: string | null | undefined) => {
  if (!value) return "-";

  return new Intl.DateTimeFormat("id-ID", {
    dateStyle: "medium",
    timeStyle: "short",
  }).format(new Date(value));
};

export default function OwnerDashboardPage() {
  const [filters, setFilters] = useState<DashboardFilter>({
    outlet_id: "",
    date_from: firstDayOfMonth,
    date_until: currentDay,
    overdue_minutes: 30,
    limit: 5,
  });

  const outletsQuery = useQuery({
    queryKey: ["dashboard-owner-outlets"],
    queryFn: () => masterDataService.getOutlets({ per_page: 100, is_active: true }),
  });

  const overviewQuery = useQuery({
    queryKey: ["dashboard-owner-overview", filters],
    queryFn: () => dashboardService.getOverview(filters),
  });

  const salesTrendQuery = useQuery({
    queryKey: ["dashboard-owner-sales-trend", filters],
    queryFn: () => dashboardService.getSalesTrend(filters),
  });

  const overview = overviewQuery.data?.data;
  const summary = overview?.summary;
  const outlets = outletsQuery.data?.items ?? [];
  const salesTrend = salesTrendQuery.data?.data ?? [];

  const bestOutlets = useMemo(() => {
    return (overview?.best_outlets ?? []).map((item) => ({
      label: item.outlet_name,
      value: Number(item.total_revenue ?? 0),
    }));
  }, [overview?.best_outlets]);

  const topProducts = useMemo(() => {
    return (overview?.top_products ?? []).map((item) => ({
      label: item.product_name,
      value: Number(item.total_sales ?? 0),
    }));
  }, [overview?.top_products]);

  const salesTrendItems = useMemo(() => {
    return salesTrend.map((item) => ({
      label: item.label ?? item.period ?? item.date ?? "-",
      value: Number(item.total_revenue ?? item.revenue ?? item.grand_total ?? 0),
    }));
  }, [salesTrend]);

  const refresh = () => {
    void overviewQuery.refetch();
    void salesTrendQuery.refetch();
  };

  return (
    <PermissionWrapper permission="reports.view">
      <div className="space-y-4">
        <PageHeader
          title="Dashboard Owner"
          description="Ringkasan performa semua outlet, omzet, produk terlaris, order tertunda, dan selisih kas."
        />

        <DashboardFilters
          value={filters}
          outlets={outlets}
          loading={overviewQuery.isFetching || salesTrendQuery.isFetching}
          onChange={setFilters}
          onRefresh={refresh}
        />

        {overviewQuery.isError ? (
          <PageErrorState onRetry={() => void overviewQuery.refetch()} />
        ) : overviewQuery.isLoading ? (
          <Card>Memuat dashboard owner...</Card>
        ) : (
          <>
            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
              <DashboardMetricCard
                title="Omzet Bulan Ini"
                value={formatCurrency(summary?.month_sales ?? summary?.month_revenue)}
                description="Akumulasi order completed dan paid"
              />
              <DashboardMetricCard
                title="Order Bulan Ini"
                value={formatNumber(summary?.month_orders)}
                description="Jumlah transaksi pada bulan berjalan"
              />
              <DashboardMetricCard
                title="Order Terlambat"
                value={formatNumber(summary?.overdue_orders)}
                description="Order yang melewati batas waktu proses"
              />
              <DashboardMetricCard
                title="Selisih Kas"
                value={formatNumber(summary?.cash_discrepancies)}
                description="Shift closed dengan cash difference"
              />
            </div>

            <div className="grid gap-4 xl:grid-cols-3">
              <DashboardBarList
                title="Tren Omzet"
                description="Pergerakan omzet berdasarkan filter tanggal"
                items={salesTrendItems}
                emptyText="Belum ada data tren omzet."
                valueFormatter={formatCurrency}
              />

              <DashboardBarList
                title="Perbandingan Outlet"
                description="Outlet terbaik berdasarkan total revenue"
                items={bestOutlets}
                emptyText="Belum ada data outlet."
                valueFormatter={formatCurrency}
              />

              <DashboardBarList
                title="Top Menu Global"
                description="Produk terlaris berdasarkan revenue"
                items={topProducts}
                emptyText="Belum ada data produk."
                valueFormatter={formatCurrency}
              />
            </div>

            <div className="grid gap-4 xl:grid-cols-2">
              <DashboardQuickTable<DashboardCashDiscrepancy>
                title="Cash Discrepancy"
                description="Shift yang memiliki selisih kas."
                rows={overview?.cash_discrepancies ?? []}
                emptyText="Tidak ada selisih kas."
                getRowKey={(row) => `cash-${row.cashier_shift_id}`}
                columns={[
                  {
                    key: "shift",
                    label: "Shift",
                    render: (row) => (
                      <div>
                        <div className="font-semibold text-slate-900">{row.shift_number}</div>
                        <div className="text-xs text-slate-500">{row.cashier_name}</div>
                      </div>
                    ),
                  },
                  {
                    key: "outlet",
                    label: "Outlet",
                    render: (row) => row.outlet_name,
                  },
                  {
                    key: "expected",
                    label: "Expected",
                    render: (row) => formatCurrency(row.expected_cash),
                  },
                  {
                    key: "closing",
                    label: "Closing",
                    render: (row) => formatCurrency(row.closing_cash),
                  },
                  {
                    key: "diff",
                    label: "Selisih",
                    render: (row) => (
                      <span className={row.cash_difference < 0 ? "text-red-600" : "text-emerald-600"}>
                        {formatCurrency(row.cash_difference)}
                      </span>
                    ),
                  },
                ]}
              />

              <DashboardQuickTable<DashboardOrderRow>
                title="Order Terlambat"
                description="Order yang harus segera ditindaklanjuti."
                rows={overview?.overdue_orders ?? []}
                emptyText="Tidak ada order terlambat."
                getRowKey={(row) => `overdue-${row.order_id}`}
                columns={[
                  {
                    key: "order",
                    label: "Order",
                    render: (row) => (
                      <div>
                        <div className="font-semibold text-slate-900">{row.order_number}</div>
                        <div className="text-xs text-slate-500">{row.queue_number ?? "-"}</div>
                      </div>
                    ),
                  },
                  {
                    key: "outlet",
                    label: "Outlet",
                    render: (row) => row.outlet_name,
                  },
                  {
                    key: "status",
                    label: "Status",
                    render: (row) => <Badge variant="danger">{row.order_status}</Badge>,
                  },
                  {
                    key: "cashier",
                    label: "Kasir",
                    render: (row) => row.cashier_name ?? "-",
                  },
                  {
                    key: "time",
                    label: "Waktu",
                    render: (row) => formatDateTime(row.ordered_at),
                  },
                ]}
              />
            </div>
          </>
        )}
      </div>
    </PermissionWrapper>
  );
}