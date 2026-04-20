import { useState } from "react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { masterDataService } from "@/modules/admin/services/master-data.service";
import { PageHeader } from "@/components/navigation/PageHeader";
import { PermissionWrapper } from "@/components/navigation/PermissionWrapper";
import { PageErrorState } from "@/components/feedback/PageErrorState";
import { PageEmptyState } from "@/components/feedback/PageEmptyState";
import { Button, Card, Input, Modal } from "@/components/ui";
import { parseApiError } from "@/services/api/error-parser";
import { useToast } from "@/hooks/useToast";
import type { Permission } from "@/types/permission";

export default function PermissionsPage() {
  const toast = useToast();
  const queryClient = useQueryClient();

  const [open, setOpen] = useState(false);
  const [editing, setEditing] = useState<Permission | null>(null);
  const [name, setName] = useState("");

  const permissionsQuery = useQuery({
    queryKey: ["admin-permissions"],
    queryFn: () => masterDataService.getPermissions({ per_page: 200 }),
  });

  const saveMutation = useMutation({
    mutationFn: () =>
      editing
        ? masterDataService.updatePermission(editing.id, { name })
        : masterDataService.createPermission({ name }),
    onSuccess: (response) => {
      toast.success(response.message);
      setOpen(false);
      setEditing(null);
      setName("");
      void queryClient.invalidateQueries({ queryKey: ["admin-permissions"] });
    },
    onError: (error) => toast.error("Gagal menyimpan permission", parseApiError(error)),
  });

  const deleteMutation = useMutation({
    mutationFn: (id: number) => masterDataService.deletePermission(id),
    onSuccess: (response) => {
      toast.success(response.message);
      void queryClient.invalidateQueries({ queryKey: ["admin-permissions"] });
    },
    onError: (error) => toast.error("Gagal menghapus permission", parseApiError(error)),
  });

  const permissions = permissionsQuery.data?.items ?? [];

  return (
    <PermissionWrapper permission="permissions.view">
      <div className="space-y-4">
        <PageHeader
          title="Permissions"
          description="Kelola permission sistem."
          actions={
            <Button
              onClick={() => {
                setEditing(null);
                setName("");
                setOpen(true);
              }}
            >
              Tambah Permission
            </Button>
          }
        />

        {permissionsQuery.isLoading ? (
          <Card>Memuat data permission...</Card>
        ) : permissionsQuery.isError ? (
          <PageErrorState onRetry={() => void permissionsQuery.refetch()} />
        ) : !permissions.length ? (
          <PageEmptyState title="Belum ada permission" />
        ) : (
          <Card>
            <div className="space-y-3">
              {permissions.map((permission) => (
                <div
                  key={permission.id}
                  className="flex flex-col gap-3 rounded-2xl border border-slate-200 p-4 lg:flex-row lg:items-center lg:justify-between"
                >
                  <div>
                    <div className="font-medium text-slate-900">{permission.name}</div>
                    <div className="text-xs text-slate-500">{permission.guard_name}</div>
                  </div>

                  <div className="flex gap-2">
                    <Button
                      variant="outline"
                      onClick={() => {
                        setEditing(permission);
                        setName(permission.name);
                        setOpen(true);
                      }}
                    >
                      Edit
                    </Button>
                    <Button
                      variant="danger"
                      loading={deleteMutation.isPending}
                      onClick={() => deleteMutation.mutate(permission.id)}
                    >
                      Hapus
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        )}

        <Modal
          open={open}
          title={editing ? "Edit Permission" : "Tambah Permission"}
          onClose={() => setOpen(false)}
          footer={
            <>
              <Button variant="outline" onClick={() => setOpen(false)}>
                Batal
              </Button>
              <Button loading={saveMutation.isPending} onClick={() => saveMutation.mutate()}>
                Simpan
              </Button>
            </>
          }
        >
          <Input
            label="Nama Permission"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="contoh: users.view"
          />
        </Modal>
      </div>
    </PermissionWrapper>
  );
}