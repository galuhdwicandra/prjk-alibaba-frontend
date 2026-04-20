import { useEffect, useState } from "react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { masterDataService, type RolePayload } from "@/modules/admin/services/master-data.service";
import { PageHeader } from "@/components/navigation/PageHeader";
import { PermissionWrapper } from "@/components/navigation/PermissionWrapper";
import { PageErrorState } from "@/components/feedback/PageErrorState";
import { PageEmptyState } from "@/components/feedback/PageEmptyState";
import { Badge, Button, Card, Checkbox, Input, Modal } from "@/components/ui";
import { parseApiError } from "@/services/api/error-parser";
import { useToast } from "@/hooks/useToast";
import type { Role } from "@/types/role";

export default function RolesPage() {
  const toast = useToast();
  const queryClient = useQueryClient();

  const [open, setOpen] = useState(false);
  const [editing, setEditing] = useState<Role | null>(null);
  const [name, setName] = useState("");
  const [selectedPermissions, setSelectedPermissions] = useState<string[]>([]);

  const rolesQuery = useQuery({
    queryKey: ["admin-roles"],
    queryFn: () => masterDataService.getRoles({ per_page: 100 }),
  });

  const permissionsQuery = useQuery({
    queryKey: ["admin-permissions-for-role-page"],
    queryFn: () => masterDataService.getPermissions({ per_page: 200 }),
  });

  const saveMutation = useMutation({
    mutationFn: (payload: RolePayload) =>
      editing
        ? masterDataService.updateRole(editing.id, payload)
        : masterDataService.createRole(payload),
    onSuccess: (response) => {
      toast.success(response.message);
      setOpen(false);
      setEditing(null);
      setName("");
      setSelectedPermissions([]);
      void queryClient.invalidateQueries({ queryKey: ["admin-roles"] });
    },
    onError: (error) => toast.error("Gagal menyimpan role", parseApiError(error)),
  });

  const deleteMutation = useMutation({
    mutationFn: (id: number) => masterDataService.deleteRole(id),
    onSuccess: (response) => {
      toast.success(response.message);
      void queryClient.invalidateQueries({ queryKey: ["admin-roles"] });
    },
    onError: (error) => toast.error("Gagal menghapus role", parseApiError(error)),
  });

  useEffect(() => {
    if (!open) {
      setEditing(null);
      setName("");
      setSelectedPermissions([]);
    }
  }, [open]);

  const openCreate = () => setOpen(true);

  const openEdit = (role: Role) => {
    setEditing(role);
    setName(role.name);
    setSelectedPermissions(role.permissions ?? []);
    setOpen(true);
  };

  const roles = rolesQuery.data?.items ?? [];
  const permissions = permissionsQuery.data?.items ?? [];

  return (
    <PermissionWrapper permission="roles.view">
      <div className="space-y-4">
        <PageHeader
          title="Roles"
          description="Kelola role dan permission matrix sederhana."
          actions={<Button onClick={openCreate}>Tambah Role</Button>}
        />

        {rolesQuery.isLoading ? (
          <Card>Memuat data role...</Card>
        ) : rolesQuery.isError ? (
          <PageErrorState onRetry={() => void rolesQuery.refetch()} />
        ) : !roles.length ? (
          <PageEmptyState title="Belum ada role" />
        ) : (
          <Card>
            <div className="space-y-4">
              {roles.map((role) => (
                <div
                  key={role.id}
                  className="rounded-2xl border border-slate-200 p-4"
                >
                  <div className="flex flex-col gap-3 lg:flex-row lg:items-start lg:justify-between">
                    <div>
                      <div className="text-base font-semibold text-slate-900">{role.name}</div>
                      <div className="mt-2 flex flex-wrap gap-2">
                        {(role.permissions ?? []).map((permission) => (
                          <Badge key={permission} variant="info">
                            {permission}
                          </Badge>
                        ))}
                        {!role.permissions?.length ? (
                          <span className="text-sm text-slate-500">Belum ada permission.</span>
                        ) : null}
                      </div>
                    </div>

                    <div className="flex gap-2">
                      <Button variant="outline" onClick={() => openEdit(role)}>
                        Edit
                      </Button>
                      <Button
                        variant="danger"
                        loading={deleteMutation.isPending}
                        onClick={() => deleteMutation.mutate(role.id)}
                      >
                        Hapus
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        )}

        <Modal
          open={open}
          title={editing ? "Edit Role" : "Tambah Role"}
          description="Atur nama role dan checklist permission."
          onClose={() => setOpen(false)}
          footer={
            <>
              <Button variant="outline" onClick={() => setOpen(false)}>
                Batal
              </Button>
              <Button
                loading={saveMutation.isPending}
                onClick={() =>
                  saveMutation.mutate({
                    name,
                    permissions: selectedPermissions,
                  })
                }
              >
                Simpan
              </Button>
            </>
          }
        >
          <div className="space-y-4">
            <Input label="Nama Role" value={name} onChange={(e) => setName(e.target.value)} />

            <div>
              <div className="mb-2 text-sm font-medium text-slate-700">Permissions</div>
              <div className="grid gap-2 md:grid-cols-2">
                {permissions.map((permission) => {
                  const checked = selectedPermissions.includes(permission.name);

                  return (
                    <Checkbox
                      key={permission.id}
                      label={permission.name}
                      checked={checked}
                      onChange={(e) => {
                        setSelectedPermissions((prev) =>
                          e.target.checked
                            ? [...prev, permission.name]
                            : prev.filter((item) => item !== permission.name)
                        );
                      }}
                    />
                  );
                })}
              </div>
            </div>
          </div>
        </Modal>
      </div>
    </PermissionWrapper>
  );
}