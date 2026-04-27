import { useMemo, useState } from "react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { masterDataService, type UserPayload } from "@/modules/admin/services/master-data.service";
import { PageHeader } from "@/components/navigation/PageHeader";
import { PermissionWrapper } from "@/components/navigation/PermissionWrapper";
import { PageErrorState } from "@/components/feedback/PageErrorState";
import { PageEmptyState } from "@/components/feedback/PageEmptyState";
import { Badge, Button, Card, Checkbox, Input, Modal } from "@/components/ui";
import { parseApiError } from "@/services/api/error-parser";
import { useToast } from "@/hooks/useToast";
import type { User } from "@/types/user";

const initialForm: UserPayload = {
  name: "",
  email: "",
  phone: "",
  username: "",
  password: "",
  password_confirmation: "",
  is_active: true,
  user_type: "staff",
  roles: [],
  outlet_ids: [],
  default_outlet_id: null,
};

export default function UsersPage() {
  const toast = useToast();
  const queryClient = useQueryClient();

  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");
  const [open, setOpen] = useState(false);
  const [editing, setEditing] = useState<User | null>(null);
  const [form, setForm] = useState<UserPayload>(initialForm);

  const usersQuery = useQuery({
    queryKey: ["admin-users", page, search],
    queryFn: () => masterDataService.getUsers({ page, per_page: 10, search }),
  });

  const rolesQuery = useQuery({
    queryKey: ["admin-role-options"],
    queryFn: () => masterDataService.getRoles({ per_page: 100 }),
  });

  const outletsQuery = useQuery({
    queryKey: ["admin-outlet-options"],
    queryFn: () => masterDataService.getOutlets({ per_page: 100 }),
  });

  const saveMutation = useMutation({
    mutationFn: (payload: UserPayload) =>
      editing
        ? masterDataService.updateUser(editing.id, payload)
        : masterDataService.createUser(payload),
    onSuccess: (response) => {
      toast.success(response.message);
      setOpen(false);
      setEditing(null);
      setForm(initialForm);
      void queryClient.invalidateQueries({ queryKey: ["admin-users"] });
    },
    onError: (error) => toast.error("Gagal menyimpan user", parseApiError(error)),
  });

  const deleteMutation = useMutation({
    mutationFn: (id: number) => masterDataService.deactivateUser(id),
    onSuccess: (response) => {
      toast.success(response.message);
      void queryClient.invalidateQueries({ queryKey: ["admin-users"] });
    },
    onError: (error) => toast.error("Gagal menonaktifkan user", parseApiError(error)),
  });

  const roleOptions = rolesQuery.data?.items ?? [];
  const outletOptions = outletsQuery.data?.items ?? [];
  const users = usersQuery.data?.items ?? [];
  const meta = usersQuery.data?.meta;

  const totalPages = Number(meta?.last_page ?? 1);

  const openCreate = () => {
    setEditing(null);
    setForm(initialForm);
    setOpen(true);
  };

  const openEdit = (user: User) => {
    setEditing(user);
    setForm({
      name: user.name,
      email: user.email ?? "",
      phone: user.phone ?? "",
      username: user.username ?? "",
      password: "",
      password_confirmation: "",
      is_active: user.is_active,
      user_type: user.user_type ?? "staff",
      roles: user.roles ?? [],
      outlet_ids: user.outlet_accesses?.map((item) => item.outlet_id) ?? [],
      default_outlet_id:
        user.outlet_accesses?.find((item) => item.is_default)?.outlet_id ?? null,
    });
    setOpen(true);
  };

  const selectedDefaultOutletName = useMemo(() => {
    return outletOptions.find((item) => item.id === form.default_outlet_id)?.name ?? "-";
  }, [form.default_outlet_id, outletOptions]);

  return (
    <PermissionWrapper permission="users.view">
      <div className="space-y-5">
        <PageHeader
          title="Users"
          description="Kelola akun user, role, dan akses outlet."
          actions={
            <Button onClick={openCreate} disabled={!roleOptions.length}>
              Tambah User
            </Button>
          }
        />

        <Card>
          <div className="grid gap-3 md:grid-cols-[1fr_auto] md:items-end">
            <Input
              label="Pencarian"
              placeholder="Cari nama, email, phone, atau username..."
              value={search}
              onChange={(e) => {
                setPage(1);
                setSearch(e.target.value);
              }}
            />

            <div className="rounded-xl border border-[var(--color-border)] bg-[var(--brand-brick-soft)] px-4 py-3 text-sm">
              <div className="text-xs font-medium uppercase tracking-wide text-[var(--brand-brick)]">
                Total User
              </div>
              <div className="mt-1 text-lg font-semibold text-[var(--color-text)]">
                {meta?.total ?? 0}
              </div>
            </div>
          </div>
        </Card>

        {usersQuery.isLoading ? (
          <Card>
            <div className="flex min-h-40 items-center justify-center text-sm text-[var(--color-muted)]">
              Memuat data user...
            </div>
          </Card>
        ) : usersQuery.isError ? (
          <PageErrorState onRetry={() => void usersQuery.refetch()} />
        ) : !users.length ? (
          <PageEmptyState
            title="Belum ada user"
            description="Data user belum tersedia atau tidak cocok dengan filter."
          />
        ) : (
          <Card>
            <div className="overflow-x-auto rounded-xl border border-[var(--color-border)]">
              <table className="min-w-full divide-y divide-slate-200 text-sm">
                <thead className="bg-slate-50">
                  <tr className="text-left text-xs font-semibold uppercase tracking-wide text-slate-500">
                    <th className="px-4 py-3">Nama</th>
                    <th className="px-4 py-3">Login</th>
                    <th className="px-4 py-3">Role</th>
                    <th className="px-4 py-3">Outlet</th>
                    <th className="px-4 py-3">Status</th>
                    <th className="px-4 py-3 text-right">Aksi</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 bg-white">
                  {users.map((user) => (
                    <tr
                      key={user.id}
                      className="align-top transition-colors hover:bg-orange-50/40"
                    >
                      <td className="px-4 py-4">
                        <div className="font-semibold text-slate-900">{user.name}</div>
                        <div className="mt-1 text-xs capitalize text-slate-500">
                          {user.user_type ?? "-"}
                        </div>
                      </td>
                      <td className="px-4 py-4 text-slate-600">
                        <div className="max-w-xs truncate">
                          {user.email ?? user.username ?? user.phone ?? "-"}
                        </div>
                      </td>
                      <td className="px-4 py-4">
                        <div className="flex max-w-xs flex-wrap gap-2">
                          {(user.roles ?? []).length ? (
                            (user.roles ?? []).map((role) => (
                              <Badge key={role} variant="info">
                                {role}
                              </Badge>
                            ))
                          ) : (
                            <span className="text-sm text-slate-400">-</span>
                          )}
                        </div>
                      </td>
                      <td className="px-4 py-4 text-slate-600">
                        <div className="max-w-md leading-6">
                          {(user.outlet_accesses ?? []).length
                            ? user.outlet_accesses
                                ?.map((item) =>
                                  item.is_default
                                    ? `${item.outlet_name ?? item.outlet_code} (default)`
                                    : item.outlet_name ?? item.outlet_code
                                )
                                .join(", ")
                            : "-"}
                        </div>
                      </td>
                      <td className="px-4 py-4">
                        <Badge variant={user.is_active ? "success" : "danger"}>
                          {user.is_active ? "Aktif" : "Nonaktif"}
                        </Badge>
                      </td>
                      <td className="px-4 py-4">
                        <div className="flex flex-col justify-end gap-2 sm:flex-row">
                          <Button variant="outline" onClick={() => openEdit(user)}>
                            Edit
                          </Button>
                          <Button
                            variant="danger"
                            loading={deleteMutation.isPending}
                            onClick={() => deleteMutation.mutate(user.id)}
                          >
                            Nonaktifkan
                          </Button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mt-4 flex flex-col gap-3 border-t border-slate-100 pt-4 sm:flex-row sm:items-center sm:justify-between">
              <div className="text-sm text-slate-500">
                Halaman{" "}
                <span className="font-semibold text-slate-800">
                  {meta?.current_page ?? 1}
                </span>{" "}
                dari{" "}
                <span className="font-semibold text-slate-800">{totalPages}</span>
              </div>

              <div className="flex flex-col gap-2 sm:flex-row">
                <Button
                  variant="outline"
                  disabled={(meta?.current_page ?? 1) <= 1}
                  onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
                >
                  Sebelumnya
                </Button>
                <Button
                  variant="outline"
                  disabled={(meta?.current_page ?? 1) >= totalPages}
                  onClick={() => setPage((prev) => prev + 1)}
                >
                  Berikutnya
                </Button>
              </div>
            </div>
          </Card>
        )}

        <Modal
          open={open}
          title={editing ? "Edit User" : "Tambah User"}
          description="Isi data user, role, dan outlet access."
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
          <div className="max-h-[72vh] space-y-6 overflow-y-auto pr-1">
            <div className="rounded-2xl border border-slate-200 bg-white p-4">
              <div className="mb-4">
                <h3 className="text-sm font-semibold text-slate-900">Informasi Akun</h3>
                <p className="mt-1 text-xs text-slate-500">
                  Data utama untuk identitas dan akses login user.
                </p>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <Input
                  label="Nama"
                  value={form.name}
                  onChange={(e) => setForm((prev) => ({ ...prev, name: e.target.value }))}
                />
                <Input
                  label="Email"
                  value={form.email ?? ""}
                  onChange={(e) => setForm((prev) => ({ ...prev, email: e.target.value }))}
                />
                <Input
                  label="Phone"
                  value={form.phone ?? ""}
                  onChange={(e) => setForm((prev) => ({ ...prev, phone: e.target.value }))}
                />
                <Input
                  label="Username"
                  value={form.username ?? ""}
                  onChange={(e) => setForm((prev) => ({ ...prev, username: e.target.value }))}
                />
                <Input
                  label={editing ? "Password baru (opsional)" : "Password"}
                  type="password"
                  value={form.password ?? ""}
                  onChange={(e) => setForm((prev) => ({ ...prev, password: e.target.value }))}
                />
                <Input
                  label={editing ? "Konfirmasi password baru" : "Konfirmasi password"}
                  type="password"
                  value={form.password_confirmation ?? ""}
                  onChange={(e) =>
                    setForm((prev) => ({ ...prev, password_confirmation: e.target.value }))
                  }
                />
              </div>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-slate-50/60 p-4">
              <div className="mb-4">
                <h3 className="text-sm font-semibold text-slate-900">Roles</h3>
                <p className="mt-1 text-xs text-slate-500">
                  Pilih role yang akan diberikan kepada user.
                </p>
              </div>

              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {roleOptions.map((role) => {
                  const checked = form.roles.includes(role.name);

                  return (
                    <div
                      key={role.id}
                      className="rounded-xl border border-slate-200 bg-white px-3 py-2"
                    >
                      <Checkbox
                        label={role.name}
                        checked={checked}
                        onChange={(e) => {
                          const nextRoles = e.target.checked
                            ? [...form.roles, role.name]
                            : form.roles.filter((item) => item !== role.name);

                          setForm((prev) => ({ ...prev, roles: nextRoles }));
                        }}
                      />
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-slate-50/60 p-4">
              <div className="mb-4">
                <h3 className="text-sm font-semibold text-slate-900">Outlet Access</h3>
                <p className="mt-1 text-xs text-slate-500">
                  Tentukan outlet yang dapat diakses oleh user.
                </p>
              </div>

              <div className="grid gap-3 md:grid-cols-2">
                {outletOptions.map((outlet) => {
                  const checked = form.outlet_ids?.includes(outlet.id) ?? false;

                  return (
                    <div
                      key={outlet.id}
                      className="rounded-xl border border-slate-200 bg-white px-3 py-2"
                    >
                      <Checkbox
                        label={`${outlet.name} (${outlet.code})`}
                        checked={checked}
                        onChange={(e) => {
                          const current = form.outlet_ids ?? [];
                          const next = e.target.checked
                            ? [...current, outlet.id]
                            : current.filter((item) => item !== outlet.id);

                          setForm((prev) => ({
                            ...prev,
                            outlet_ids: next,
                            default_outlet_id:
                              prev.default_outlet_id && !next.includes(prev.default_outlet_id)
                                ? null
                                : prev.default_outlet_id,
                          }));
                        }}
                      />
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-4">
              <div className="grid gap-4 md:grid-cols-[1fr_auto] md:items-end">
                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-700">
                    Default Outlet
                  </label>
                  <select
                    value={form.default_outlet_id ?? ""}
                    onChange={(e) =>
                      setForm((prev) => ({
                        ...prev,
                        default_outlet_id: e.target.value ? Number(e.target.value) : null,
                      }))
                    }
                    className="w-full rounded-xl border border-slate-300 bg-white px-3 py-2 text-sm text-slate-800 shadow-sm outline-none transition focus:border-[var(--brand-brick)] focus:ring-2 focus:ring-orange-100"
                  >
                    <option value="">Pilih default outlet</option>
                    {(form.outlet_ids ?? []).map((outletId) => {
                      const outlet = outletOptions.find((item) => item.id === outletId);
                      if (!outlet) return null;

                      return (
                        <option key={outlet.id} value={outlet.id}>
                          {outlet.name} ({outlet.code})
                        </option>
                      );
                    })}
                  </select>
                  <p className="mt-2 text-xs text-slate-500">
                    Terpilih:{" "}
                    <span className="font-medium text-slate-700">
                      {selectedDefaultOutletName}
                    </span>
                  </p>
                </div>

                <div className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3">
                  <Checkbox
                    label="User aktif"
                    checked={Boolean(form.is_active)}
                    onChange={(e) => setForm((prev) => ({ ...prev, is_active: e.target.checked }))}
                  />
                </div>
              </div>
            </div>
          </div>
        </Modal>
      </div>
    </PermissionWrapper>
  );
}