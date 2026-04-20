import { useMemo, useState } from "react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
  masterDataService,
  type SystemSettingPayloadItem,
} from "@/modules/admin/services/master-data.service";
import { PageHeader } from "@/components/navigation/PageHeader";
import { PermissionWrapper } from "@/components/navigation/PermissionWrapper";
import { PageErrorState } from "@/components/feedback/PageErrorState";
import { PageEmptyState } from "@/components/feedback/PageEmptyState";
import { Badge, Button, Card, Input } from "@/components/ui";
import { parseApiError } from "@/services/api/error-parser";
import { useToast } from "@/hooks/useToast";
import type { SystemSetting } from "@/types/settings";

export default function SystemSettingsPage() {
  const toast = useToast();
  const queryClient = useQueryClient();
  const [search, setSearch] = useState("");
  const [drafts, setDrafts] = useState<Record<number, string>>({});

  const settingsQuery = useQuery({
    queryKey: ["admin-system-settings", search],
    queryFn: () => masterDataService.getSystemSettings({ per_page: 100, search }),
  });

  const saveMutation = useMutation({
    mutationFn: (payload: SystemSettingPayloadItem[]) => masterDataService.upsertSystemSettings(payload),
    onSuccess: (response) => {
      toast.success(response.message);
      void queryClient.invalidateQueries({ queryKey: ["admin-system-settings"] });
    },
    onError: (error) => toast.error("Gagal menyimpan system settings", parseApiError(error)),
  });

  const settings = settingsQuery.data?.items ?? [];

  const changedItems = useMemo(() => {
    return settings
      .filter((item) => Object.prototype.hasOwnProperty.call(drafts, item.id))
      .map((item): SystemSettingPayloadItem => ({
        key: item.key,
        value: drafts[item.id] ?? "",
        type: item.type,
      }));
  }, [drafts, settings]);

  const updateDraft = (item: SystemSetting, value: string) => {
    setDrafts((prev) => ({ ...prev, [item.id]: value }));
  };

  return (
    <PermissionWrapper permission="system_settings.view">
      <div className="space-y-4">
        <PageHeader
          title="System Settings"
          description="Kelola pengaturan sistem berbasis key-value."
          actions={
            <Button
              loading={saveMutation.isPending}
              disabled={!changedItems.length}
              onClick={() => saveMutation.mutate(changedItems)}
            >
              Simpan Perubahan
            </Button>
          }
        />

        <Card>
          <Input
            placeholder="Cari key setting..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </Card>

        {settingsQuery.isLoading ? (
          <Card>Memuat system settings...</Card>
        ) : settingsQuery.isError ? (
          <PageErrorState onRetry={() => void settingsQuery.refetch()} />
        ) : !settings.length ? (
          <PageEmptyState title="Belum ada system settings" />
        ) : (
          <div className="space-y-3">
            {settings.map((item) => (
              <Card key={item.id}>
                <div className="flex flex-col gap-3 lg:flex-row lg:items-start lg:justify-between">
                  <div className="min-w-0">
                    <div className="font-medium text-slate-900">{item.key}</div>
                    <div className="mt-1 flex items-center gap-2">
                      <Badge variant="info">{item.type}</Badge>
                    </div>
                  </div>

                  <div className="w-full max-w-xl">
                    <Input
                      value={drafts[item.id] ?? item.value ?? ""}
                      onChange={(e) => updateDraft(item, e.target.value)}
                    />
                  </div>
                </div>
              </Card>
            ))}
          </div>
        )}
      </div>
    </PermissionWrapper>
  );
}