import { useMemo, useState } from "react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { PageHeader } from "@/components/navigation/PageHeader";
import { PermissionWrapper } from "@/components/navigation/PermissionWrapper";
import { PageEmptyState } from "@/components/feedback/PageEmptyState";
import { PageErrorState } from "@/components/feedback/PageErrorState";
import { Badge, Button, Card, Input, Pagination } from "@/components/ui";
import { masterDataService } from "@/modules/admin/services/master-data.service";
import { notificationService } from "@/modules/admin/services/notification.service";
import { parseApiError } from "@/services/api/error-parser";
import { useToast } from "@/hooks/useToast";
import type { NotificationQuery, NotificationType } from "@/types/notification";

const criticalTypes: Array<NotificationType | ""> = [
  "",
  "low_stock",
  "order_overdue",
  "shift_not_closed",
  "promo_expiring",
];

const formatDateTime = (value: string | null | undefined) => {
  if (!value) {
    return "-";
  }

  return new Intl.DateTimeFormat("id-ID", {
    dateStyle: "medium",
    timeStyle: "short",
  }).format(new Date(value));
};

const typeLabel = (type: NotificationType) => {
  const labels: Record<NotificationType, string> = {
    low_stock: "Low Stock",
    shift_not_closed: "Shift Belum Ditutup",
    promo_expiring: "Promo Hampir Habis",
    order_overdue: "Order Terlambat",
  };

  return labels[type];
};

export default function CriticalAlertsPage() {
  const toast = useToast();
  const queryClient = useQueryClient();

  const [filters, setFilters] = useState<NotificationQuery>({
    page: 1,
    per_page: 10,
    outlet_id: "",
    type: "",
    severity: "danger",
    status: "unread",
  });

  const queryParams = useMemo(
    () => ({
      ...filters,
      outlet_id: filters.outlet_id || undefined,
      type: filters.type || undefined,
      severity: "danger" as const,
      status: filters.status || undefined,
    }),
    [filters]
  );

  const outletsQuery = useQuery({
    queryKey: ["critical-alert-outlets"],
    queryFn: () => masterDataService.getOutlets({ per_page: 100, is_active: true }),
  });

  const alertsQuery = useQuery({
    queryKey: ["critical-alerts", queryParams],
    queryFn: () => notificationService.getNotifications(queryParams),
  });

  const scanMutation = useMutation({
    mutationFn: () =>
      notificationService.scanAlerts({
        outlet_id: filters.outlet_id ? Number(filters.outlet_id) : null,
        alert_type: filters.type || null,
      }),
    onSuccess: (response) => {
      toast.success(response.message);
      void queryClient.invalidateQueries({ queryKey: ["critical-alerts"] });
    },
    onError: (error) => {
      toast.error("Gagal menjalankan scan critical alert", parseApiError(error));
    },
  });

  const resolveMutation = useMutation({
    mutationFn: (id: number) => notificationService.resolveNotification(id),
    onSuccess: (response) => {
      toast.success(response.message);
      void queryClient.invalidateQueries({ queryKey: ["critical-alerts"] });
    },
    onError: (error) => {
      toast.error("Gagal resolve critical alert", parseApiError(error));
    },
  });

  const rows = alertsQuery.data?.items ?? [];
  const outlets = outletsQuery.data?.items ?? [];

  return (
    <PermissionWrapper permission="notifications.view">
      <div className="space-y-4">
        <PageHeader
          title="Critical Alerts"
          description="Daftar alert prioritas tinggi yang perlu ditindaklanjuti lebih cepat."
        />

        <Card>
          <div className="grid gap-4 lg:grid-cols-5">
            <div>
              <label className="mb-2 block text-sm font-medium text-slate-700">Outlet</label>
              <select
                className="w-full rounded-xl border border-slate-300 px-3 py-2 text-sm"
                value={filters.outlet_id ?? ""}
                onChange={(event) =>
                  setFilters((prev) => ({
                    ...prev,
                    page: 1,
                    outlet_id: event.target.value ? Number(event.target.value) : "",
                  }))
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
              <label className="mb-2 block text-sm font-medium text-slate-700">Tipe Alert</label>
              <select
                className="w-full rounded-xl border border-slate-300 px-3 py-2 text-sm"
                value={filters.type ?? ""}
                onChange={(event) =>
                  setFilters((prev) => ({
                    ...prev,
                    page: 1,
                    type: event.target.value as NotificationType | "",
                  }))
                }
              >
                {criticalTypes.map((type) => (
                  <option key={type || "all"} value={type}>
                    {type ? typeLabel(type) : "Semua tipe critical"}
                  </option>
                ))}
              </select>
            </div>

            <Input label="Severity" value="danger" disabled />

            <div>
              <label className="mb-2 block text-sm font-medium text-slate-700">Status</label>
              <select
                className="w-full rounded-xl border border-slate-300 px-3 py-2 text-sm"
                value={filters.status ?? ""}
                onChange={(event) =>
                  setFilters((prev) => ({
                    ...prev,
                    page: 1,
                    status: event.target.value as NotificationQuery["status"],
                  }))
                }
              >
                <option value="">Semua status</option>
                <option value="unread">unread</option>
                <option value="read">read</option>
                <option value="resolved">resolved</option>
              </select>
            </div>

            <div className="flex items-end gap-2">
              <Button loading={alertsQuery.isFetching} onClick={() => void alertsQuery.refetch()}>
                Refresh
              </Button>
              <Button
                variant="outline"
                loading={scanMutation.isPending}
                onClick={() => scanMutation.mutate()}
              >
                Scan
              </Button>
            </div>
          </div>
        </Card>

        {alertsQuery.isLoading ? (
          <Card>Memuat critical alert...</Card>
        ) : alertsQuery.isError ? (
          <PageErrorState onRetry={() => void alertsQuery.refetch()} />
        ) : !rows.length ? (
          <PageEmptyState title="Tidak ada critical alert" />
        ) : (
          <div className="grid gap-4 xl:grid-cols-2">
            {rows.map((row) => (
              <Card
                key={row.id}
                title={row.title}
                description={row.outlet?.name ?? "Semua outlet"}
                actions={<Badge variant="danger">{row.status}</Badge>}
              >
                <div className="space-y-4">
                  <p className="text-sm text-slate-600">{row.message}</p>

                  <div className="grid gap-3 md:grid-cols-3">
                    <div className="rounded-xl bg-slate-50 p-3">
                      <div className="text-xs text-slate-500">Tipe</div>
                      <div className="font-medium text-slate-900">{typeLabel(row.type)}</div>
                    </div>

                    <div className="rounded-xl bg-slate-50 p-3">
                      <div className="text-xs text-slate-500">Source</div>
                      <div className="font-medium text-slate-900">#{row.source_id ?? "-"}</div>
                    </div>

                    <div className="rounded-xl bg-slate-50 p-3">
                      <div className="text-xs text-slate-500">Waktu</div>
                      <div className="font-medium text-slate-900">{formatDateTime(row.created_at)}</div>
                    </div>
                  </div>

                  {row.status !== "resolved" ? (
                    <Button
                      loading={resolveMutation.isPending}
                      onClick={() => resolveMutation.mutate(row.id)}
                    >
                      Resolve Alert
                    </Button>
                  ) : null}
                </div>
              </Card>
            ))}
          </div>
        )}

        <Pagination
          meta={alertsQuery.data?.meta}
          onPageChange={(nextPage) => setFilters((prev) => ({ ...prev, page: nextPage }))}
        />
      </div>
    </PermissionWrapper>
  );
}