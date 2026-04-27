import { useMemo, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { PageHeader } from "@/components/navigation/PageHeader";
import { PermissionWrapper } from "@/components/navigation/PermissionWrapper";
import { PageEmptyState } from "@/components/feedback/PageEmptyState";
import { PageErrorState } from "@/components/feedback/PageErrorState";
import { Badge, Button, Card, Input, Modal, Pagination } from "@/components/ui";
import { masterDataService } from "@/modules/admin/services/master-data.service";
import { notificationService } from "@/modules/admin/services/notification.service";
import type { ActivityLog, ActivityLogQuery } from "@/types/notification";

const formatDateTime = (value: string | null | undefined) => {
  if (!value) {
    return "-";
  }

  return new Intl.DateTimeFormat("id-ID", {
    dateStyle: "medium",
    timeStyle: "short",
  }).format(new Date(value));
};

const shortReference = (value: string | null | undefined) => {
  if (!value) {
    return "-";
  }

  const parts = value.split("\\");
  return parts[parts.length - 1] ?? value;
};

export default function ActivityLogsPage() {
  const [filters, setFilters] = useState<ActivityLogQuery>({
    page: 1,
    per_page: 10,
    search: "",
    outlet_id: "",
    action: "",
    module: "",
    created_from: "",
    created_until: "",
  });
  const [selected, setSelected] = useState<ActivityLog | null>(null);

  const queryParams = useMemo(
    () => ({
      ...filters,
      search: filters.search || undefined,
      outlet_id: filters.outlet_id || undefined,
      action: filters.action || undefined,
      module: filters.module || undefined,
      created_from: filters.created_from || undefined,
      created_until: filters.created_until || undefined,
    }),
    [filters]
  );

  const outletsQuery = useQuery({
    queryKey: ["activity-log-outlets"],
    queryFn: () => masterDataService.getOutlets({ per_page: 100, is_active: true }),
  });

  const logsQuery = useQuery({
    queryKey: ["activity-logs", queryParams],
    queryFn: () => notificationService.getActivityLogs(queryParams),
  });

  const detailQuery = useQuery({
    queryKey: ["activity-log-detail", selected?.id],
    queryFn: () => notificationService.getActivityLog(Number(selected?.id)),
    enabled: Boolean(selected?.id),
  });

  const rows = logsQuery.data?.items ?? [];
  const outlets = outletsQuery.data?.items ?? [];
  const detail = detailQuery.data?.data ?? selected;

  return (
    <PermissionWrapper permission="activity_logs.view">
      <div className="space-y-4">
        <PageHeader
          title="Activity Logs"
          description="Histori aktivitas user, request API, modul, outlet, dan metadata teknis sistem."
        />

        <Card>
          <div className="grid gap-4 lg:grid-cols-6">
            <Input
              label="Search"
              placeholder="Cari action, module, user, outlet..."
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

            <Input
              label="Action"
              placeholder="create, update, login..."
              value={filters.action ?? ""}
              onChange={(event) =>
                setFilters((prev) => ({
                  ...prev,
                  page: 1,
                  action: event.target.value,
                }))
              }
            />

            <Input
              label="Module"
              placeholder="auth, reports, v1..."
              value={filters.module ?? ""}
              onChange={(event) =>
                setFilters((prev) => ({
                  ...prev,
                  page: 1,
                  module: event.target.value,
                }))
              }
            />

            <Input
              label="Dari"
              type="date"
              value={filters.created_from ?? ""}
              onChange={(event) =>
                setFilters((prev) => ({
                  ...prev,
                  page: 1,
                  created_from: event.target.value,
                }))
              }
            />

            <Input
              label="Sampai"
              type="date"
              value={filters.created_until ?? ""}
              onChange={(event) =>
                setFilters((prev) => ({
                  ...prev,
                  page: 1,
                  created_until: event.target.value,
                }))
              }
            />

            <div className="flex items-end">
              <Button loading={logsQuery.isFetching} onClick={() => void logsQuery.refetch()}>
                Terapkan Filter
              </Button>
            </div>
          </div>
        </Card>

        {logsQuery.isLoading ? (
          <Card>Memuat activity log...</Card>
        ) : logsQuery.isError ? (
          <PageErrorState onRetry={() => void logsQuery.refetch()} />
        ) : !rows.length ? (
          <PageEmptyState title="Belum ada activity log" />
        ) : (
          <Card>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-slate-200 text-sm">
                <thead>
                  <tr className="text-left text-xs font-semibold uppercase tracking-wide text-slate-500">
                    <th className="px-3 py-3">Waktu</th>
                    <th className="px-3 py-3">User</th>
                    <th className="px-3 py-3">Outlet</th>
                    <th className="px-3 py-3">Action</th>
                    <th className="px-3 py-3">Module</th>
                    <th className="px-3 py-3">Reference</th>
                    <th className="px-3 py-3">Description</th>
                    <th className="px-3 py-3 text-right">Aksi</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {rows.map((row) => (
                    <tr key={row.id} className="align-top">
                      <td className="whitespace-nowrap px-3 py-3 text-slate-700">
                        {formatDateTime(row.created_at)}
                      </td>
                      <td className="px-3 py-3 text-slate-700">{row.user?.name ?? "-"}</td>
                      <td className="px-3 py-3 text-slate-700">{row.outlet?.name ?? "-"}</td>
                      <td className="px-3 py-3">
                        <Badge variant="info">{row.action}</Badge>
                      </td>
                      <td className="px-3 py-3 text-slate-700">{row.module}</td>
                      <td className="px-3 py-3 text-slate-700">
                        {shortReference(row.reference_type)} #{row.reference_id ?? "-"}
                      </td>
                      <td className="px-3 py-3 text-slate-700">{row.description ?? "-"}</td>
                      <td className="px-3 py-3">
                        <div className="flex justify-end">
                          <Button variant="outline" onClick={() => setSelected(row)}>
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
          meta={logsQuery.data?.meta}
          onPageChange={(nextPage) => setFilters((prev) => ({ ...prev, page: nextPage }))}
        />

        <Modal
          open={Boolean(selected)}
          title="Detail Activity Log"
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
              <div className="grid gap-3 md:grid-cols-2">
                <div className="rounded-xl bg-slate-50 p-3">
                  <div className="text-xs text-slate-500">User</div>
                  <div className="font-medium text-slate-900">{detail.user?.name ?? "-"}</div>
                </div>
                <div className="rounded-xl bg-slate-50 p-3">
                  <div className="text-xs text-slate-500">Outlet</div>
                  <div className="font-medium text-slate-900">{detail.outlet?.name ?? "-"}</div>
                </div>
                <div className="rounded-xl bg-slate-50 p-3">
                  <div className="text-xs text-slate-500">Action</div>
                  <div className="font-medium text-slate-900">{detail.action}</div>
                </div>
                <div className="rounded-xl bg-slate-50 p-3">
                  <div className="text-xs text-slate-500">Module</div>
                  <div className="font-medium text-slate-900">{detail.module}</div>
                </div>
                <div className="rounded-xl bg-slate-50 p-3">
                  <div className="text-xs text-slate-500">IP Address</div>
                  <div className="font-medium text-slate-900">{detail.ip_address ?? "-"}</div>
                </div>
                <div className="rounded-xl bg-slate-50 p-3">
                  <div className="text-xs text-slate-500">Reference</div>
                  <div className="font-medium text-slate-900">
                    {shortReference(detail.reference_type)} #{detail.reference_id ?? "-"}
                  </div>
                </div>
              </div>

              <div>
                <div className="mb-2 font-semibold text-slate-900">Description</div>
                <div className="rounded-xl border border-slate-200 p-3 text-slate-700">
                  {detail.description ?? "-"}
                </div>
              </div>

              <div>
                <div className="mb-2 font-semibold text-slate-900">User Agent</div>
                <div className="rounded-xl border border-slate-200 p-3 text-xs text-slate-700">
                  {detail.user_agent ?? "-"}
                </div>
              </div>

              <div>
                <div className="mb-2 font-semibold text-slate-900">Metadata</div>
                <pre className="max-h-72 overflow-auto rounded-xl bg-slate-950 p-3 text-xs text-slate-50">
                  {JSON.stringify(detail.metadata ?? {}, null, 2)}
                </pre>
              </div>
            </div>
          ) : null}
        </Modal>
      </div>
    </PermissionWrapper>
  );
}