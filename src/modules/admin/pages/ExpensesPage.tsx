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
import { masterDataService } from "@/modules/admin/services/master-data.service";
import type { Expense, ExpensePayload, ExpenseStatus } from "@/types/expense";

const formatCurrency = (value: number | string | null | undefined) =>
  `Rp ${Number(value ?? 0).toLocaleString("id-ID")}`;

const today = () => new Date().toISOString().slice(0, 10);

const initialForm: ExpensePayload = {
  outlet_id: 0,
  expense_category_id: 0,
  expense_date: today(),
  amount: 0,
  description: "",
  status: "draft",
};

const statusBadge = (status: ExpenseStatus) => {
  if (status === "approved") {
    return "success";
  }

  if (status === "submitted") {
    return "warning";
  }

  if (status === "rejected") {
    return "danger";
  }

  return "info";
};

export default function ExpensesPage() {
  const toast = useToast();
  const queryClient = useQueryClient();

  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState<ExpenseStatus | "">("");
  const [outletId, setOutletId] = useState<number | "">("");
  const [categoryId, setCategoryId] = useState<number | "">("");
  const [expenseFrom, setExpenseFrom] = useState("");
  const [expenseUntil, setExpenseUntil] = useState("");
  const [openForm, setOpenForm] = useState(false);
  const [editing, setEditing] = useState<Expense | null>(null);
  const [form, setForm] = useState<ExpensePayload>(initialForm);
  const [deleting, setDeleting] = useState<Expense | null>(null);
  const [actionTarget, setActionTarget] = useState<Expense | null>(null);
  const [actionType, setActionType] = useState<"submit" | "approve" | "reject" | null>(null);
  const [approvalNotes, setApprovalNotes] = useState("");
  const [attachmentTarget, setAttachmentTarget] = useState<Expense | null>(null);
  const [attachmentFiles, setAttachmentFiles] = useState<File[]>([]);

  const queryParams = useMemo(
    () => ({
      page,
      per_page: 10,
      search,
      status,
      outlet_id: outletId,
      expense_category_id: categoryId,
      expense_from: expenseFrom,
      expense_until: expenseUntil,
    }),
    [page, search, status, outletId, categoryId, expenseFrom, expenseUntil]
  );

  const expensesQuery = useQuery({
    queryKey: ["expenses", queryParams],
    queryFn: () => expenseService.getExpenses(queryParams),
  });

  const categoriesQuery = useQuery({
    queryKey: ["expense-categories", "active-options"],
    queryFn: () => expenseService.getExpenseCategories({ per_page: 100, is_active: true }),
  });

  const outletsQuery = useQuery({
    queryKey: ["outlets", "expense-options"],
    queryFn: () => masterDataService.getOutlets({ per_page: 100 }),
  });

  const saveMutation = useMutation({
    mutationFn: () => {
      if (editing) {
        return expenseService.updateExpense(editing.id, form);
      }

      return expenseService.createExpense(form);
    },
    onSuccess: (response) => {
      toast.success(response.message);
      setOpenForm(false);
      setEditing(null);
      setForm(initialForm);
      void queryClient.invalidateQueries({ queryKey: ["expenses"] });
    },
    onError: (error) => {
      toast.error("Gagal menyimpan expense", parseApiError(error));
    },
  });

  const deleteMutation = useMutation({
    mutationFn: (id: number) => expenseService.deleteExpense(id),
    onSuccess: (response) => {
      toast.success(response.message);
      setDeleting(null);
      void queryClient.invalidateQueries({ queryKey: ["expenses"] });
    },
    onError: (error) => {
      toast.error("Gagal menghapus expense", parseApiError(error));
    },
  });

  const statusMutation = useMutation({
    mutationFn: () => {
      if (!actionTarget || !actionType) {
        throw new Error("Expense belum dipilih");
      }

      if (actionType === "submit") {
        return expenseService.submitExpense(actionTarget.id);
      }

      if (actionType === "approve") {
        return expenseService.approveExpense(actionTarget.id, approvalNotes);
      }

      return expenseService.rejectExpense(actionTarget.id, approvalNotes);
    },
    onSuccess: (response) => {
      toast.success(response.message);
      setActionTarget(null);
      setActionType(null);
      setApprovalNotes("");
      void queryClient.invalidateQueries({ queryKey: ["expenses"] });
    },
    onError: (error) => {
      toast.error("Gagal memproses status expense", parseApiError(error));
    },
  });

  const uploadMutation = useMutation({
    mutationFn: () => {
      if (!attachmentTarget) {
        throw new Error("Expense belum dipilih");
      }

      return expenseService.uploadExpenseAttachments(attachmentTarget.id, attachmentFiles);
    },
    onSuccess: (response) => {
      toast.success(response.message);
      setAttachmentTarget(null);
      setAttachmentFiles([]);
      void queryClient.invalidateQueries({ queryKey: ["expenses"] });
    },
    onError: (error) => {
      toast.error("Gagal upload attachment", parseApiError(error));
    },
  });

  const deleteAttachmentMutation = useMutation({
    mutationFn: (id: number) => expenseService.deleteExpenseAttachment(id),
    onSuccess: (response) => {
      toast.success(response.message);
      void queryClient.invalidateQueries({ queryKey: ["expenses"] });
    },
    onError: (error) => {
      toast.error("Gagal menghapus attachment", parseApiError(error));
    },
  });

  const openCreateForm = () => {
    setEditing(null);
    setForm(initialForm);
    setOpenForm(true);
  };

  const openEditForm = (expense: Expense) => {
    setEditing(expense);
    setForm({
      outlet_id: expense.outlet_id,
      expense_category_id: expense.expense_category_id,
      expense_date: expense.expense_date,
      amount: Number(expense.amount ?? 0),
      description: expense.description ?? "",
      status: expense.status,
    });
    setOpenForm(true);
  };

  const confirmStatusAction = (expense: Expense, nextAction: "submit" | "approve" | "reject") => {
    setActionTarget(expense);
    setActionType(nextAction);
    setApprovalNotes("");
  };

  return (
    <PermissionWrapper permission="expenses.view">
      <div className="space-y-4">
        <PageHeader title="Expenses" description="Catat dan kontrol biaya operasional outlet." />

        <Card>
          <div className="grid gap-4 md:grid-cols-4">
            <Input
              label="Search"
              placeholder="Deskripsi, outlet, kategori"
              value={search}
              onChange={(event) => {
                setSearch(event.target.value);
                setPage(1);
              }}
            />

            <div>
              <label className="mb-2 block text-sm font-medium text-slate-700">Outlet</label>
              <select
                className="w-full rounded-xl border border-slate-300 px-3 py-2 text-sm"
                value={outletId}
                onChange={(event) => {
                  setOutletId(event.target.value ? Number(event.target.value) : "");
                  setPage(1);
                }}
              >
                <option value="">Semua outlet</option>
                {outletsQuery.data?.items.map((outlet) => (
                  <option key={outlet.id} value={outlet.id}>
                    {outlet.name}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-slate-700">Kategori</label>
              <select
                className="w-full rounded-xl border border-slate-300 px-3 py-2 text-sm"
                value={categoryId}
                onChange={(event) => {
                  setCategoryId(event.target.value ? Number(event.target.value) : "");
                  setPage(1);
                }}
              >
                <option value="">Semua kategori</option>
                {categoriesQuery.data?.items.map((category) => (
                  <option key={category.id} value={category.id}>
                    {category.name}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-slate-700">Status</label>
              <select
                className="w-full rounded-xl border border-slate-300 px-3 py-2 text-sm"
                value={status}
                onChange={(event) => {
                  setStatus(event.target.value as ExpenseStatus | "");
                  setPage(1);
                }}
              >
                <option value="">Semua status</option>
                <option value="draft">draft</option>
                <option value="submitted">submitted</option>
                <option value="approved">approved</option>
                <option value="rejected">rejected</option>
              </select>
            </div>

            <Input
              label="Dari tanggal"
              type="date"
              value={expenseFrom}
              onChange={(event) => {
                setExpenseFrom(event.target.value);
                setPage(1);
              }}
            />

            <Input
              label="Sampai tanggal"
              type="date"
              value={expenseUntil}
              onChange={(event) => {
                setExpenseUntil(event.target.value);
                setPage(1);
              }}
            />

            <div className="md:col-span-2 flex items-end justify-end">
              <PermissionWrapper permission="expenses.create">
                <Button onClick={openCreateForm}>Tambah Expense</Button>
              </PermissionWrapper>
            </div>
          </div>
        </Card>

        {expensesQuery.isLoading ? (
          <Card>Memuat expense...</Card>
        ) : expensesQuery.isError ? (
          <PageErrorState onRetry={() => void expensesQuery.refetch()} />
        ) : !expensesQuery.data?.items.length ? (
          <PageEmptyState title="Belum ada data expense" />
        ) : (
          <div className="space-y-4">
            {expensesQuery.data.items.map((expense) => (
              <Card
                key={expense.id}
                title={expense.category?.name ?? "Expense"}
                description={`${expense.outlet?.name ?? "-"} • ${expense.expense_date}`}
                actions={<Badge variant={statusBadge(expense.status)}>{expense.status}</Badge>}
              >
                <div className="grid gap-4 lg:grid-cols-[1.5fr_1fr]">
                  <div className="space-y-3">
                    <div>
                      <div className="text-2xl font-semibold text-slate-900">
                        {formatCurrency(expense.amount)}
                      </div>
                      <p className="mt-1 text-sm text-slate-500">
                        {expense.description || "Tidak ada deskripsi"}
                      </p>
                    </div>

                    <div className="grid gap-3 text-sm md:grid-cols-3">
                      <div className="rounded-xl bg-slate-50 p-3">
                        <div className="text-slate-500">Dibuat oleh</div>
                        <div className="font-medium text-slate-900">
                          {expense.creator?.name ?? "-"}
                        </div>
                      </div>

                      <div className="rounded-xl bg-slate-50 p-3">
                        <div className="text-slate-500">Disetujui oleh</div>
                        <div className="font-medium text-slate-900">
                          {expense.approver?.name ?? "-"}
                        </div>
                      </div>

                      <div className="rounded-xl bg-slate-50 p-3">
                        <div className="text-slate-500">Attachment</div>
                        <div className="font-medium text-slate-900">
                          {Number(expense.attachments_count ?? expense.attachments?.length ?? 0)}
                        </div>
                      </div>
                    </div>

                    {expense.attachments?.length ? (
                      <div className="space-y-2">
                        <div className="text-sm font-medium text-slate-700">Attachment</div>
                        <div className="grid gap-2 md:grid-cols-2">
                          {expense.attachments.map((attachment) => (
                            <div
                              key={attachment.id}
                              className="flex items-center justify-between rounded-xl border border-slate-200 p-3 text-sm"
                            >
                              <span className="truncate text-slate-700">
                                {attachment.file_name ?? attachment.file_path}
                              </span>
                              <PermissionWrapper permission="expenses.update">
                                <Button
                                  variant="ghost"
                                  onClick={() => deleteAttachmentMutation.mutate(attachment.id)}
                                >
                                  Hapus
                                </Button>
                              </PermissionWrapper>
                            </div>
                          ))}
                        </div>
                      </div>
                    ) : null}
                  </div>

                  <div className="flex flex-col gap-2 lg:items-end">
                    <PermissionWrapper permission="expenses.update">
                      <Button variant="outline" onClick={() => openEditForm(expense)}>
                        Edit
                      </Button>
                    </PermissionWrapper>

                    <PermissionWrapper permission="expenses.submit">
                      <Button
                        variant="outline"
                        disabled={expense.status !== "draft"}
                        onClick={() => confirmStatusAction(expense, "submit")}
                      >
                        Submit
                      </Button>
                    </PermissionWrapper>

                    <PermissionWrapper permission="expenses.approve">
                      <Button
                        variant="outline"
                        disabled={expense.status !== "submitted"}
                        onClick={() => confirmStatusAction(expense, "approve")}
                      >
                        Approve
                      </Button>
                    </PermissionWrapper>

                    <PermissionWrapper permission="expenses.reject">
                      <Button
                        variant="outline"
                        disabled={expense.status !== "submitted"}
                        onClick={() => confirmStatusAction(expense, "reject")}
                      >
                        Reject
                      </Button>
                    </PermissionWrapper>

                    <PermissionWrapper permission="expenses.update">
                      <Button variant="outline" onClick={() => setAttachmentTarget(expense)}>
                        Upload Attachment
                      </Button>
                    </PermissionWrapper>

                    <PermissionWrapper permission="expenses.delete">
                      <Button variant="danger" onClick={() => setDeleting(expense)}>
                        Hapus
                      </Button>
                    </PermissionWrapper>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        )}

        <Pagination meta={expensesQuery.data?.meta ?? null} onPageChange={setPage} />

        <Modal
          open={openForm}
          title={editing ? "Edit Expense" : "Tambah Expense"}
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
            <div>
              <label className="mb-2 block text-sm font-medium text-slate-700">Outlet</label>
              <select
                className="w-full rounded-xl border border-slate-300 px-3 py-2 text-sm"
                value={form.outlet_id || ""}
                onChange={(event) =>
                  setForm((prev) => ({
                    ...prev,
                    outlet_id: Number(event.target.value || 0),
                  }))
                }
              >
                <option value="">Pilih outlet</option>
                {outletsQuery.data?.items.map((outlet) => (
                  <option key={outlet.id} value={outlet.id}>
                    {outlet.name}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-slate-700">Kategori</label>
              <select
                className="w-full rounded-xl border border-slate-300 px-3 py-2 text-sm"
                value={form.expense_category_id || ""}
                onChange={(event) =>
                  setForm((prev) => ({
                    ...prev,
                    expense_category_id: Number(event.target.value || 0),
                  }))
                }
              >
                <option value="">Pilih kategori</option>
                {categoriesQuery.data?.items.map((category) => (
                  <option key={category.id} value={category.id}>
                    {category.name}
                  </option>
                ))}
              </select>
            </div>

            <Input
              label="Tanggal Expense"
              type="date"
              value={form.expense_date}
              onChange={(event) =>
                setForm((prev) => ({ ...prev, expense_date: event.target.value }))
              }
            />

            <Input
              label="Nominal"
              type="number"
              value={String(form.amount)}
              onChange={(event) =>
                setForm((prev) => ({
                  ...prev,
                  amount: Number(event.target.value || 0),
                }))
              }
            />

            <Input
              label="Deskripsi"
              value={form.description ?? ""}
              onChange={(event) =>
                setForm((prev) => ({ ...prev, description: event.target.value }))
              }
            />
          </div>
        </Modal>

        <Modal
          open={Boolean(actionTarget && actionType)}
          title="Konfirmasi Status Expense"
          description={`${actionType ?? "-"} expense #${actionTarget?.id ?? "-"}`}
          onClose={() => {
            setActionTarget(null);
            setActionType(null);
            setApprovalNotes("");
          }}
          footer={
            <>
              <Button
                variant="outline"
                onClick={() => {
                  setActionTarget(null);
                  setActionType(null);
                  setApprovalNotes("");
                }}
              >
                Batal
              </Button>
              <Button loading={statusMutation.isPending} onClick={() => statusMutation.mutate()}>
                Proses
              </Button>
            </>
          }
        >
          <div className="space-y-4">
            <Input
              label="Catatan"
              value={approvalNotes}
              onChange={(event) => setApprovalNotes(event.target.value)}
              placeholder="Opsional untuk approve, wajib untuk reject jika backend mewajibkan"
            />
          </div>
        </Modal>

        <Modal
          open={Boolean(attachmentTarget)}
          title="Upload Attachment Expense"
          onClose={() => {
            setAttachmentTarget(null);
            setAttachmentFiles([]);
          }}
          footer={
            <>
              <Button
                variant="outline"
                onClick={() => {
                  setAttachmentTarget(null);
                  setAttachmentFiles([]);
                }}
              >
                Batal
              </Button>
              <Button
                loading={uploadMutation.isPending}
                disabled={!attachmentFiles.length}
                onClick={() => uploadMutation.mutate()}
              >
                Upload
              </Button>
            </>
          }
        >
          <div className="space-y-4">
            <Input
              type="file"
              multiple
              onChange={(event) => setAttachmentFiles(Array.from(event.target.files ?? []))}
            />

            <div className="text-sm text-slate-500">
              {attachmentFiles.length
                ? `${attachmentFiles.length} file dipilih`
                : "Belum ada file dipilih"}
            </div>
          </div>
        </Modal>

        <ConfirmDialog
          open={Boolean(deleting)}
          title="Hapus expense"
          description={`Expense #${deleting?.id ?? "-"} akan dihapus.`}
          loading={deleteMutation.isPending}
          onClose={() => setDeleting(null)}
          onConfirm={() => deleting && deleteMutation.mutate(deleting.id)}
        />
      </div>
    </PermissionWrapper>
  );
}