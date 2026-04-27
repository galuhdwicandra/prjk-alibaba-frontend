import { useMemo, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { PageHeader } from "@/components/navigation/PageHeader";
import { PermissionWrapper } from "@/components/navigation/PermissionWrapper";
import { PageErrorState } from "@/components/feedback/PageErrorState";
import { Card, Badge } from "@/components/ui";
import { masterDataService } from "@/modules/admin/services/master-data.service";
import { dashboardService } from "@/modules/dashboard/services/dashboard.service";
import { DashboardMetricCard } from "@/modules/dashboard/components/DashboardMetricCard";
import { DashboardFilters } from "@/modules/dashboard/components/DashboardFilters";
import { DashboardBarList } from "@/modules/dashboard/components/DashboardBarList";
import { DashboardQuickTable } from "@/modules/dashboard/components/DashboardQuickTable";
import { useActiveOutlet } from "@/hooks/useActiveOutlet";
import type {
  DashboardCriticalStock,
  DashboardFilter,
  DashboardOrderRow,
} from "@/types/dashboard";

const today = new Date().toISOString().slice(0, 10);

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

export default function AdminDashboardPage() {
  const { activeOutletId } = useActiveOutlet();

  const [filters, setFilters] = useState<DashboardFilter>({
    outlet_id: activeOutletId ?? "",
    date_from: today,
    date_until: today,
    overdue_minutes: 30,
    limit: 5,
  });

  const outletsQuery = useQuery({
    queryKey: ["dashboard-admin-outlets"],
    queryFn: () => masterDataService.getOutlets({ per_page: 100, is_active: true }),
  });

  const overviewQuery = useQuery({
    queryKey: ["dashboard-admin-overview", filters],
    queryFn: () => dashboardService.getOverview(filters),
  });

  const salesTrendQuery = useQuery({
    queryKey: ["dashboard-admin-sales-trend", filters],
    queryFn: () => dashboardService.getSalesTrend(filters),
  });

  const overview = overviewQuery.data?.data;
  const summary = overview?.summary;
  const outlets = outletsQuery.data?.items ?? [];
  const salesTrend = salesTrendQuery.data?.data ?? [];

  const topProducts = useMemo(() => {
    return (overview?.top_products ?? []).map((item) => ({
      label: item.product_name,
      value: Number(item.total_qty ?? 0),
      suffix: "terjual",
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
          title="Dashboard Admin"
          description="Ringkasan operasional outlet, penjualan, stok kritis, dan order yang perlu dipantau."
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
          <Card>Memuat dashboard admin...</Card>
        ) : (
          <>
            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
              <DashboardMetricCard
                title="Omzet Hari Ini"
                value={formatCurrency(summary?.today_sales ?? summary?.today_revenue)}
                description="Order completed dan paid hari ini"
              />
              <DashboardMetricCard
                title="Transaksi Hari Ini"
                value={formatNumber(summary?.today_orders)}
                description="Jumlah order hari ini"
              />
              <DashboardMetricCard
                title="Order Pending"
                value={formatNumber(summary?.pending_orders)}
                description="Pending, confirmed, preparing, atau ready"
              />
              <DashboardMetricCard
                title="Stok Minimum"
                value={formatNumber(summary?.critical_stocks)}
                description="Bahan baku di bawah batas minimum"
              />
            </div>

            <div className="grid gap-4 xl:grid-cols-2">
              <DashboardBarList
                title="Tren Penjualan"
                description="Nilai penjualan berdasarkan filter tanggal"
                items={salesTrendItems}
                emptyText="Belum ada data tren penjualan."
                valueFormatter={formatCurrency}
              />

              <DashboardBarList
                title="Top Menu Outlet"
                description="Produk terlaris berdasarkan jumlah item terjual"
                items={topProducts}
                emptyText="Belum ada data produk terlaris."
              />
            </div>

            <div className="grid gap-4 xl:grid-cols-2">
              <DashboardQuickTable<DashboardOrderRow>
                title="Order Pending"
                description="Order aktif yang masih perlu diproses."
                rows={overview?.pending_orders ?? []}
                emptyText="Tidak ada order pending."
                getRowKey={(row) => `pending-${row.order_id}`}
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
                    render: (row) => <Badge variant="warning">{row.order_status}</Badge>,
                  },
                  {
                    key: "total",
                    label: "Total",
                    render: (row) => formatCurrency(row.grand_total),
                  },
                  {
                    key: "time",
                    label: "Waktu",
                    render: (row) => formatDateTime(row.ordered_at),
                  },
                ]}
              />

              <DashboardQuickTable<DashboardCriticalStock>
                title="Stok Kritis"
                description="Bahan baku yang mencapai atau melewati batas minimum."
                rows={overview?.critical_stocks ?? []}
                emptyText="Tidak ada stok kritis."
                getRowKey={(row) => `stock-${row.outlet_id}-${row.raw_material_id}`}
                columns={[
                  {
                    key: "material",
                    label: "Bahan",
                    render: (row) => (
                      <div>
                        <div className="font-semibold text-slate-900">
                          {row.raw_material_name}
                        </div>
                        <div className="text-xs text-slate-500">{row.outlet_name}</div>
                      </div>
                    ),
                  },
                  {
                    key: "stock",
                    label: "Stok",
                    render: (row) =>
                      `${formatNumber(row.qty_on_hand)} ${row.unit_code ?? ""}`,
                  },
                  {
                    key: "minimum",
                    label: "Minimum",
                    render: (row) =>
                      `${formatNumber(row.minimum_stock)} ${row.unit_code ?? ""}`,
                  },
                  {
                    key: "reserved",
                    label: "Reserved",
                    render: (row) =>
                      `${formatNumber(row.qty_reserved)} ${row.unit_code ?? ""}`,
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