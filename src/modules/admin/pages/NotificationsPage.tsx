import { useMemo, useState } from "react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { PageHeader } from "@/components/navigation/PageHeader";
import { PermissionWrapper } from "@/components/navigation/PermissionWrapper";
import { PageEmptyState } from "@/components/feedback/PageEmptyState";
import { PageErrorState } from "@/components/feedback/PageErrorState";
import { Badge, Button, Card, ConfirmDialog, Input, Modal, Pagination } from "@/components/ui";
import { masterDataService } from "@/modules/admin/services/master-data.service";
import { notificationService } from "@/modules/admin/services/notification.service";
import { parseApiError } from "@/services/api/error-parser";
import { useToast } from "@/hooks/useToast";
import type {
  Notification,
  NotificationQuery,
  NotificationSeverity,
  NotificationStatus,
  NotificationType,
} from "@/types/notification";

const notificationTypes: Array<NotificationType | ""> = [
  "",
  "low_stock",
  "shift_not_closed",
  "promo_expiring",
  "order_overdue",
];

const severityOptions: Array<NotificationSeverity | ""> = ["", "info", "warning", "danger"];

const statusOptions: Array<NotificationStatus | ""> = ["", "unread", "read", "resolved"];

const formatDateTime = (value: string | null | undefined) => {
  if (!value) {
    return "-";
  }

  return new Intl.DateTimeFormat("id-ID", {
    dateStyle: "medium",
    timeStyle: "short",
  }).format(new Date(value));
};

const severityBadge = (severity: NotificationSeverity) => {
  if (severity === "danger") {
    return "danger";
  }

  if (severity === "warning") {
    return "warning";
  }

  return "info";
};

const statusBadge = (status: NotificationStatus) => {
  if (status === "resolved") {
    return "success";
  }

  if (status === "read") {
    return "info";
  }

  return "warning";
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

export default function NotificationsPage() {
  const toast = useToast();
  const queryClient = useQueryClient();

  const [filters, setFilters] = useState<NotificationQuery>({
    page: 1,
    per_page: 10,
    outlet_id: "",
    type: "",
    severity: "",
    status: "",
  });
  const [selected, setSelected] = useState<Notification | null>(null);
  const [deleting, setDeleting] = useState<Notification | null>(null);

  const queryParams = useMemo(
    () => ({
      ...filters,
      outlet_id: filters.outlet_id || undefined,
      type: filters.type || undefined,
      severity: filters.severity || undefined,
      status: filters.status || undefined,
    }),
    [filters]
  );

  const outletsQuery = useQuery({
    queryKey: ["notification-outlets"],
    queryFn: () => masterDataService.getOutlets({ per_page: 100, is_active: true }),
  });

  const notificationsQuery = useQuery({
    queryKey: ["notifications", queryParams],
    queryFn: () => notificationService.getNotifications(queryParams),
  });

  const detailQuery = useQuery({
    queryKey: ["notification-detail", selected?.id],
    queryFn: () => notificationService.getNotification(Number(selected?.id)),
    enabled: Boolean(selected?.id),
  });

  const markReadMutation = useMutation({
    mutationFn: (id: number) => notificationService.markNotificationAsRead(id),
    onSuccess: (response) => {
      toast.success(response.message);
      void queryClient.invalidateQueries({ queryKey: ["notifications"] });
      void queryClient.invalidateQueries({ queryKey: ["notification-detail"] });
    },
    onError: (error) => {
      toast.error("Gagal menandai notification", parseApiError(error));
    },
  });

  const markAllReadMutation = useMutation({
    mutationFn: () => notificationService.markAllNotificationsAsRead(filters.outlet_id),
    onSuccess: (response) => {
      toast.success(response.message, `${response.data.updated_count} notification diperbarui.`);
      void queryClient.invalidateQueries({ queryKey: ["notifications"] });
    },
    onError: (error) => {
      toast.error("Gagal menandai semua notification", parseApiError(error));
    },
  });

  const resolveMutation = useMutation({
    mutationFn: (id: number) => notificationService.resolveNotification(id),
    onSuccess: (response) => {
      toast.success(response.message);
      void queryClient.invalidateQueries({ queryKey: ["notifications"] });
      void queryClient.invalidateQueries({ queryKey: ["notification-detail"] });
    },
    onError: (error) => {
      toast.error("Gagal resolve notification", parseApiError(error));
    },
  });

  const deleteMutation = useMutation({
    mutationFn: (id: number) => notificationService.deleteNotification(id),
    onSuccess: (response) => {
      toast.success(response.message);
      setDeleting(null);
      void queryClient.invalidateQueries({ queryKey: ["notifications"] });
    },
    onError: (error) => {
      toast.error("Gagal menghapus notification", parseApiError(error));
    },
  });

  const scanMutation = useMutation({
    mutationFn: () =>
      notificationService.scanAlerts({
        outlet_id: filters.outlet_id ? Number(filters.outlet_id) : null,
        alert_type: filters.type || null,
      }),
    onSuccess: (response) => {
      toast.success(response.message);
      void queryClient.invalidateQueries({ queryKey: ["notifications"] });
    },
    onError: (error) => {
      toast.error("Gagal menjalankan scan alert", parseApiError(error));
    },
  });

  const rows = notificationsQuery.data?.items ?? [];
  const outlets = outletsQuery.data?.items ?? [];
  const detail = detailQuery.data?.data ?? selected;

  return (
    <PermissionWrapper permission="notifications.view">
      <div className="space-y-4">
        <PageHeader
          title="Notification Center"
          description="Pantau alert operasional seperti stok rendah, order terlambat, promo hampir habis, dan shift yang belum ditutup."
        />

        <Card>
          <div className="grid gap-4 lg:grid-cols-6">
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
              <label className="mb-2 block text-sm font-medium text-slate-700">Tipe</label>
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
                {notificationTypes.map((type) => (
                  <option key={type || "all"} value={type}>
                    {type ? typeLabel(type) : "Semua tipe"}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-slate-700">Severity</label>
              <select
                className="w-full rounded-xl border border-slate-300 px-3 py-2 text-sm"
                value={filters.severity ?? ""}
                onChange={(event) =>
                  setFilters((prev) => ({
                    ...prev,
                    page: 1,
                    severity: event.target.value as NotificationSeverity | "",
                  }))
                }
              >
                {severityOptions.map((severity) => (
                  <option key={severity || "all"} value={severity}>
                    {severity || "Semua severity"}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-slate-700">Status</label>
              <select
                className="w-full rounded-xl border border-slate-300 px-3 py-2 text-sm"
                value={filters.status ?? ""}
                onChange={(event) =>
                  setFilters((prev) => ({
                    ...prev,
                    page: 1,
                    status: event.target.value as NotificationStatus | "",
                  }))
                }
              >
                {statusOptions.map((status) => (
                  <option key={status || "all"} value={status}>
                    {status || "Semua status"}
                  </option>
                ))}
              </select>
            </div>

            <div className="flex items-end">
              <Button
                loading={notificationsQuery.isFetching}
                onClick={() => void notificationsQuery.refetch()}
              >
                Refresh
              </Button>
            </div>

            <div className="flex items-end gap-2">
              <Button
                variant="outline"
                loading={scanMutation.isPending}
                onClick={() => scanMutation.mutate()}
              >
                Scan Alert
              </Button>

              <Button
                variant="outline"
                loading={markAllReadMutation.isPending}
                onClick={() => markAllReadMutation.mutate()}
              >
                Mark All Read
              </Button>
            </div>
          </div>
        </Card>

        {notificationsQuery.isLoading ? (
          <Card>Memuat notification...</Card>
        ) : notificationsQuery.isError ? (
          <PageErrorState onRetry={() => void notificationsQuery.refetch()} />
        ) : !rows.length ? (
          <PageEmptyState title="Belum ada notification" />
        ) : (
          <Card>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-slate-200 text-sm">
                <thead>
                  <tr className="text-left text-xs font-semibold uppercase tracking-wide text-slate-500">
                    <th className="px-3 py-3">Notification</th>
                    <th className="px-3 py-3">Outlet</th>
                    <th className="px-3 py-3">Tipe</th>
                    <th className="px-3 py-3">Severity</th>
                    <th className="px-3 py-3">Status</th>
                    <th className="px-3 py-3">Waktu</th>
                    <th className="px-3 py-3 text-right">Aksi</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {rows.map((row) => (
                    <tr key={row.id} className="align-top">
                      <td className="px-3 py-3">
                        <div className="font-medium text-slate-900">{row.title}</div>
                        <div className="mt-1 max-w-xl text-xs text-slate-500">{row.message}</div>
                      </td>
                      <td className="px-3 py-3 text-slate-700">{row.outlet?.name ?? "-"}</td>
                      <td className="px-3 py-3 text-slate-700">{typeLabel(row.type)}</td>
                      <td className="px-3 py-3">
                        <Badge variant={severityBadge(row.severity)}>{row.severity}</Badge>
                      </td>
                      <td className="px-3 py-3">
                        <Badge variant={statusBadge(row.status)}>{row.status}</Badge>
                      </td>
                      <td className="px-3 py-3 text-slate-700">{formatDateTime(row.created_at)}</td>
                      <td className="px-3 py-3">
                        <div className="flex justify-end gap-2">
                          <Button variant="outline" onClick={() => setSelected(row)}>
                            Detail
                          </Button>
                          {row.status === "unread" ? (
                            <Button
                              variant="outline"
                              loading={markReadMutation.isPending}
                              onClick={() => markReadMutation.mutate(row.id)}
                            >
                              Read
                            </Button>
                          ) : null}
                          {row.status !== "resolved" ? (
                            <Button
                              variant="outline"
                              loading={resolveMutation.isPending}
                              onClick={() => resolveMutation.mutate(row.id)}
                            >
                              Resolve
                            </Button>
                          ) : null}
                          <Button variant="danger" onClick={() => setDeleting(row)}>
                            Hapus
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
          meta={notificationsQuery.data?.meta}
          onPageChange={(nextPage) => setFilters((prev) => ({ ...prev, page: nextPage }))}
        />

        <Modal
          open={Boolean(selected)}
          title="Detail Notification"
          onClose={() => setSelected(null)}
          footer={
            <Button variant="outline" onClick={() => setSelected(null)}>
              Tutup
            </Button>
          }
        >
          {detailQuery.isLoading ? (
            <div className="text-sm text-slate-500">Memuat detail...</div>
          ) : detail ? (
            <div className="space-y-4 text-sm">
              <div>
                <div className="font-semibold text-slate-900">{detail.title}</div>
                <div className="mt-1 text-slate-600">{detail.message}</div>
              </div>

              <div className="grid gap-3 md:grid-cols-2">
                <div className="rounded-xl bg-slate-50 p-3">
                  <div className="text-xs text-slate-500">Outlet</div>
                  <div className="font-medium text-slate-900">{detail.outlet?.name ?? "-"}</div>
                </div>
                <div className="rounded-xl bg-slate-50 p-3">
                  <div className="text-xs text-slate-500">Source</div>
                  <div className="font-medium text-slate-900">
                    {detail.source_type ?? "-"} #{detail.source_id ?? "-"}
                  </div>
                </div>
                <div className="rounded-xl bg-slate-50 p-3">
                  <div className="text-xs text-slate-500">Read At</div>
                  <div className="font-medium text-slate-900">{formatDateTime(detail.read_at)}</div>
                </div>
                <div className="rounded-xl bg-slate-50 p-3">
                  <div className="text-xs text-slate-500">Resolved At</div>
                  <div className="font-medium text-slate-900">
                    {formatDateTime(detail.resolved_at)}
                  </div>
                </div>
              </div>

              <div>
                <div className="mb-2 font-semibold text-slate-900">Data</div>
                <pre className="max-h-56 overflow-auto rounded-xl bg-slate-950 p-3 text-xs text-slate-50">
                  {JSON.stringify(detail.data ?? {}, null, 2)}
                </pre>
              </div>

              <div>
                <div className="mb-2 font-semibold text-slate-900">Log</div>
                <div className="space-y-2">
                  {(detail.logs ?? []).map((log) => (
                    <div key={log.id} className="rounded-xl border border-slate-200 p-3">
                      <div className="flex items-center justify-between gap-3">
                        <div className="font-medium text-slate-900">{log.action}</div>
                        <Badge variant={log.status === "success" ? "success" : "warning"}>
                          {log.status}
                        </Badge>
                      </div>
                      <div className="mt-1 text-xs text-slate-500">{formatDateTime(log.logged_at)}</div>
                      <div className="mt-2 text-slate-600">{log.message ?? "-"}</div>
                    </div>
                  ))}
                  {!detail.logs?.length ? (
                    <div className="rounded-xl border border-dashed border-slate-200 p-4 text-slate-500">
                      Belum ada log untuk notification ini.
                    </div>
                  ) : null}
                </div>
              </div>
            </div>
          ) : null}
        </Modal>

        <ConfirmDialog
          open={Boolean(deleting)}
          title="Hapus notification"
          description={`Notification "${deleting?.title ?? ""}" akan dihapus.`}
          loading={deleteMutation.isPending}
          onClose={() => setDeleting(null)}
          onConfirm={() => deleting && deleteMutation.mutate(deleting.id)}
        />
      </div>
    </PermissionWrapper>
  );
}