import { useMemo, useState } from "react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { PageHeader } from "@/components/navigation/PageHeader";
import { PermissionWrapper } from "@/components/navigation/PermissionWrapper";
import { PageErrorState } from "@/components/feedback/PageErrorState";
import { PageEmptyState } from "@/components/feedback/PageEmptyState";
import { Badge, Button, Card, ConfirmDialog, Input, Modal, Pagination } from "@/components/ui";
import { parseApiError } from "@/services/api/error-parser";
import { useToast } from "@/hooks/useToast";
import { expenseService } from "@/modules/admin/services/expense.service";
import type { ExpenseCategory, ExpenseCategoryPayload } from "@/types/expense";

const initialForm: ExpenseCategoryPayload = {
  name: "",
  is_active: true,
};

export default function ExpenseCategoriesPage() {
  const toast = useToast();
  const queryClient = useQueryClient();

  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");
  const [isActive, setIsActive] = useState<boolean | "">("");
  const [openForm, setOpenForm] = useState(false);
  const [editing, setEditing] = useState<ExpenseCategory | null>(null);
  const [form, setForm] = useState<ExpenseCategoryPayload>(initialForm);
  const [deleting, setDeleting] = useState<ExpenseCategory | null>(null);

  const queryParams = useMemo(
    () => ({
      page,
      per_page: 10,
      search,
      is_active: isActive,
    }),
    [page, search, isActive]
  );

  const categoriesQuery = useQuery({
    queryKey: ["expense-categories", queryParams],
    queryFn: () => expenseService.getExpenseCategories(queryParams),
  });

  const saveMutation = useMutation({
    mutationFn: () => {
      if (editing) {
        return expenseService.updateExpenseCategory(editing.id, form);
      }

      return expenseService.createExpenseCategory(form);
    },
    onSuccess: (response) => {
      toast.success(response.message);
      setOpenForm(false);
      setEditing(null);
      setForm(initialForm);
      void queryClient.invalidateQueries({ queryKey: ["expense-categories"] });
    },
    onError: (error) => {
      toast.error("Gagal menyimpan kategori expense", parseApiError(error));
    },
  });

  const deleteMutation = useMutation({
    mutationFn: (id: number) => expenseService.deleteExpenseCategory(id),
    onSuccess: (response) => {
      toast.success(response.message);
      setDeleting(null);
      void queryClient.invalidateQueries({ queryKey: ["expense-categories"] });
    },
    onError: (error) => {
      toast.error("Gagal menghapus kategori expense", parseApiError(error));
    },
  });

  const openCreateForm = () => {
    setEditing(null);
    setForm(initialForm);
    setOpenForm(true);
  };

  const openEditForm = (category: ExpenseCategory) => {
    setEditing(category);
    setForm({
      name: category.name,
      is_active: Boolean(category.is_active),
    });
    setOpenForm(true);
  };

  return (
    <PermissionWrapper permission="expense_categories.view">
      <div className="space-y-4">
        <PageHeader
          title="Expense Categories"
          description="Kelola kategori pengeluaran operasional outlet."
        />

        <Card>
          <div className="grid gap-4 md:grid-cols-3">
            <Input
              label="Search"
              placeholder="Cari nama kategori"
              value={search}
              onChange={(event) => {
                setSearch(event.target.value);
                setPage(1);
              }}
            />

            <div>
              <label className="mb-2 block text-sm font-medium text-slate-700">Status</label>
              <select
                className="w-full rounded-xl border border-slate-300 px-3 py-2 text-sm"
                value={isActive === "" ? "" : String(isActive)}
                onChange={(event) => {
                  const value = event.target.value;
                  setIsActive(value === "" ? "" : value === "true");
                  setPage(1);
                }}
              >
                <option value="">Semua status</option>
                <option value="true">Aktif</option>
                <option value="false">Nonaktif</option>
              </select>
            </div>

            <div className="flex items-end justify-end">
              <PermissionWrapper permission="expense_categories.create">
                <Button onClick={openCreateForm}>Tambah Kategori</Button>
              </PermissionWrapper>
            </div>
          </div>
        </Card>

        {categoriesQuery.isLoading ? (
          <Card>Memuat kategori expense...</Card>
        ) : categoriesQuery.isError ? (
          <PageErrorState onRetry={() => void categoriesQuery.refetch()} />
        ) : !categoriesQuery.data?.items.length ? (
          <PageEmptyState title="Belum ada kategori expense" />
        ) : (
          <Card>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm">
                <thead>
                  <tr className="border-b border-slate-200 text-slate-500">
                    <th className="px-3 py-3 font-medium">Nama</th>
                    <th className="px-3 py-3 font-medium">Status</th>
                    <th className="px-3 py-3 font-medium">Total Expense</th>
                    <th className="px-3 py-3 text-right font-medium">Aksi</th>
                  </tr>
                </thead>
                <tbody>
                  {categoriesQuery.data.items.map((category) => (
                    <tr key={category.id} className="border-b border-slate-100">
                      <td className="px-3 py-3 font-medium text-slate-900">{category.name}</td>
                      <td className="px-3 py-3">
                        <Badge variant={category.is_active ? "success" : "danger"}>
                          {category.is_active ? "Aktif" : "Nonaktif"}
                        </Badge>
                      </td>
                      <td className="px-3 py-3 text-slate-600">
                        {Number(category.expenses_count ?? 0).toLocaleString("id-ID")}
                      </td>
                      <td className="px-3 py-3">
                        <div className="flex justify-end gap-2">
                          <PermissionWrapper permission="expense_categories.update">
                            <Button variant="outline" onClick={() => openEditForm(category)}>
                              Edit
                            </Button>
                          </PermissionWrapper>

                          <PermissionWrapper permission="expense_categories.delete">
                            <Button variant="danger" onClick={() => setDeleting(category)}>
                              Hapus
                            </Button>
                          </PermissionWrapper>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>
        )}

        <Pagination meta={categoriesQuery.data?.meta ?? null} onPageChange={setPage} />

        <Modal
          open={openForm}
          title={editing ? "Edit Kategori Expense" : "Tambah Kategori Expense"}
          onClose={() => setOpenForm(false)}
          footer={
            <>
              <Button variant="outline" onClick={() => setOpenForm(false)}>
                Batal
              </Button>
              <Button loading={saveMutation.isPending} onClick={() => saveMutation.mutate()}>
                Simpan
              </Button>
            </>
          }
        >
          <div className="space-y-4">
            <Input
              label="Nama Kategori"
              value={form.name}
              onChange={(event) => setForm((prev) => ({ ...prev, name: event.target.value }))}
            />

            <label className="flex items-center gap-2 text-sm text-slate-700">
              <input
                type="checkbox"
                checked={form.is_active}
                onChange={(event) =>
                  setForm((prev) => ({ ...prev, is_active: event.target.checked }))
                }
              />
              Aktif
            </label>
          </div>
        </Modal>

        <ConfirmDialog
          open={Boolean(deleting)}
          title="Hapus kategori expense"
          description={`Kategori "${deleting?.name ?? "-"}" akan dihapus.`}
          loading={deleteMutation.isPending}
          onClose={() => setDeleting(null)}
          onConfirm={() => deleting && deleteMutation.mutate(deleting.id)}
        />
      </div>
    </PermissionWrapper>
  );
}