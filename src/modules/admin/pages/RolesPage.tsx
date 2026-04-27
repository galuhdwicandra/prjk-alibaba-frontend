import { useMemo, useState } from "react";
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

const initialForm: RolePayload = {
  name: "",
  permissions: [],
};

const getPermissionGroup = (permissionName: string) => {
  const [group] = permissionName.split(".");
  return group || "other";
};

export default function RolesPage() {
  const toast = useToast();
  const queryClient = useQueryClient();

  const [search, setSearch] = useState("");
  const [open, setOpen] = useState(false);
  const [editing, setEditing] = useState<Role | null>(null);
  const [form, setForm] = useState<RolePayload>(initialForm);

  const rolesQuery = useQuery({
    queryKey: ["admin-roles"],
    queryFn: () => masterDataService.getRoles({ per_page: 100 }),
  });

  const permissionsQuery = useQuery({
    queryKey: ["admin-permissions"],
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
      setForm(initialForm);
      void queryClient.invalidateQueries({ queryKey: ["admin-roles"] });
    },
    onError: (error) => toast.error("Gagal menyimpan role", parseApiError(error)),
  });

  const roles = rolesQuery.data?.items ?? [];
  const permissions = permissionsQuery.data?.items ?? [];
  const selectedPermissions = form.permissions ?? [];

  const filteredRoles = useMemo(() => {
    const keyword = search.trim().toLowerCase();

    if (!keyword) {
      return roles;
    }

    return roles.filter((role) => role.name.toLowerCase().includes(keyword));
  }, [roles, search]);

  const groupedPermissions = useMemo(() => {
    const map: Record<string, typeof permissions> = {};

    permissions.forEach((permission) => {
      const group = getPermissionGroup(permission.name);

      if (!map[group]) {
        map[group] = [];
      }

      map[group].push(permission);
    });

    return map;
  }, [permissions]);

  const openCreate = () => {
    setEditing(null);
    setForm(initialForm);
    setOpen(true);
  };

  const openEdit = (role: Role) => {
    setEditing(role);
    setForm({
      name: role.name,
      permissions: role.permissions ?? [],
    });
    setOpen(true);
  };

  return (
    <PermissionWrapper permission="roles.view">
      <div className="space-y-5">
        <PageHeader
          title="Roles"
          description="Kelola role dan hak akses user berdasarkan permission yang tersedia."
          actions={<Button onClick={openCreate}>Tambah Role</Button>}
        />

        <Card>
          <div className="grid gap-3 md:grid-cols-[1fr_auto] md:items-end">
            <Input
              label="Pencarian"
              placeholder="Cari nama role..."
              value={search}
              onChange={(event) => setSearch(event.target.value)}
            />

            <div className="rounded-xl border border-[var(--color-border)] bg-[var(--brand-brick-soft)] px-4 py-3 text-sm">
              <div className="text-xs font-medium uppercase tracking-wide text-[var(--brand-brick)]">
                Total Role
              </div>
              <div className="mt-1 text-lg font-semibold text-[var(--color-text)]">
                {filteredRoles.length}
              </div>
            </div>
          </div>
        </Card>

        {rolesQuery.isLoading ? (
          <Card>
            <div className="flex min-h-40 items-center justify-center text-sm text-[var(--color-muted)]">
              Memuat data role...
            </div>
          </Card>
        ) : rolesQuery.isError ? (
          <PageErrorState onRetry={() => void rolesQuery.refetch()} />
        ) : !filteredRoles.length ? (
          <PageEmptyState title="Belum ada role" />
        ) : (
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {filteredRoles.map((role) => (
              <Card
                key={role.id}
                title={role.name}
                description={`${role.permissions?.length ?? 0} permissions`}
                actions={<Badge variant="info">Role</Badge>}
              >
                <div className="flex min-h-16 flex-wrap content-start gap-2 text-xs text-slate-600">
                  {(role.permissions ?? []).slice(0, 6).map((permission) => (
                    <Badge key={permission} variant="default">
                      {permission}
                    </Badge>
                  ))}

                  {(role.permissions ?? []).length > 6 ? (
                    <Badge variant="warning">
                      +{(role.permissions ?? []).length - 6} lainnya
                    </Badge>
                  ) : null}
                </div>

                <div className="mt-4 flex justify-end border-t border-slate-100 pt-4">
                  <Button variant="outline" onClick={() => openEdit(role)}>
                    Edit
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        )}

        <Modal
          open={open}
          title={editing ? "Edit Role" : "Tambah Role"}
          description="Atur nama role dan permission yang boleh digunakan."
          onClose={() => setOpen(false)}
          footer={
            <>
              <Button variant="outline" onClick={() => setOpen(false)}>
                Batal
              </Button>
              <Button loading={saveMutation.isPending} onClick={() => saveMutation.mutate(form)}>
                Simpan
              </Button>
            </>
          }
        >
          <div className="max-h-[75vh] space-y-6 overflow-y-auto pr-1">
            <div className="rounded-2xl border border-slate-200 bg-white p-4">
              <Input
                label="Nama Role"
                value={form.name}
                onChange={(event) =>
                  setForm((prev) => ({
                    ...prev,
                    name: event.target.value,
                  }))
                }
              />
            </div>

            <div className="space-y-4">
              {Object.entries(groupedPermissions).map(([group, groupPermissions]) => (
                <div
                  key={group}
                  className="rounded-2xl border border-slate-200 bg-slate-50/70 p-4"
                >
                  <div className="mb-3 flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                      <h3 className="text-sm font-semibold capitalize text-slate-900">
                        {group.replaceAll("_", " ")}
                      </h3>
                      <p className="text-xs text-slate-500">
                        {groupPermissions.length} permission tersedia
                      </p>
                    </div>
                  </div>

                  <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                    {groupPermissions.map((permission) => {
                      const checked = selectedPermissions.includes(permission.name);

                      return (
                        <div
                          key={permission.id}
                          className="rounded-xl border border-slate-200 bg-white px-3 py-2 shadow-sm"
                        >
                          <Checkbox
                            label={permission.name}
                            checked={checked}
                            onChange={(event) => {
                              const nextPermissions = event.target.checked
                                ? [...selectedPermissions, permission.name]
                                : selectedPermissions.filter((item) => item !== permission.name);

                              setForm((prev) => ({
                                ...prev,
                                permissions: nextPermissions,
                              }));
                            }}
                          />
                        </div>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Modal>
      </div>
    </PermissionWrapper>
  );
}