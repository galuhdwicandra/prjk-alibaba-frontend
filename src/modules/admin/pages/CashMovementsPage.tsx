import { useMemo, useState } from "react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { PageHeader } from "@/components/navigation/PageHeader";
import { PermissionWrapper } from "@/components/navigation/PermissionWrapper";
import { PageErrorState } from "@/components/feedback/PageErrorState";
import { PageEmptyState } from "@/components/feedback/PageEmptyState";
import { Badge, Button, Card, Input, Modal, Pagination } from "@/components/ui";
import { parseApiError } from "@/services/api/error-parser";
import { useToast } from "@/hooks/useToast";
import { expenseService } from "@/modules/admin/services/expense.service";
import type { CashMovementPayload, CashMovementType } from "@/types/expense";

const formatCurrency = (value: number | string | null | undefined) =>
  `Rp ${Number(value ?? 0).toLocaleString("id-ID")}`;

const initialForm: CashMovementPayload = {
  cashier_shift_id: 0,
  movement_type: "cash_in",
  amount: 0,
  reason: "",
  notes: "",
};

const movementBadge = (type: CashMovementType) => {
  if (type === "cash_in" || type === "opening") {
    return "success";
  }

  if (type === "cash_out") {
    return "danger";
  }

  return "warning";
};

export default function CashMovementsPage() {
  const toast = useToast();
  const queryClient = useQueryClient();

  const [page, setPage] = useState(1);
  const [movementType, setMovementType] = useState<CashMovementType | "">("");
  const [cashierShiftId, setCashierShiftId] = useState<number | "">("");
  const [openForm, setOpenForm] = useState(false);
  const [form, setForm] = useState<CashMovementPayload>(initialForm);

  const queryParams = useMemo(
    () => ({
      page,
      per_page: 10,
      movement_type: movementType,
      cashier_shift_id: cashierShiftId,
    }),
    [page, movementType, cashierShiftId]
  );

  const cashMovementsQuery = useQuery({
    queryKey: ["cash-movements", queryParams],
    queryFn: () => expenseService.getCashMovements(queryParams),
  });

  const shiftsQuery = useQuery({
    queryKey: ["cashier-shifts", "cash-movement-options"],
    queryFn: () => expenseService.getCashierShifts({ per_page: 100 }),
  });

  const saveMutation = useMutation({
    mutationFn: () => expenseService.createCashMovement(form),
    onSuccess: (response) => {
      toast.success(response.message);
      setOpenForm(false);
      setForm(initialForm);
      void queryClient.invalidateQueries({ queryKey: ["cash-movements"] });
      void queryClient.invalidateQueries({ queryKey: ["cashier-shifts"] });
    },
    onError: (error) => {
      toast.error("Gagal menyimpan cash movement", parseApiError(error));
    },
  });

  const openCreateForm = () => {
    setForm(initialForm);
    setOpenForm(true);
  };

  return (
    <PermissionWrapper permission="cash_movements.view">
      <div className="space-y-4">
        <PageHeader
          title="Cash Movements"
          description="Pantau dan catat pergerakan kas pada shift kasir."
        />

        <Card>
          <div className="grid gap-4 md:grid-cols-3">
            <div>
              <label className="mb-2 block text-sm font-medium text-slate-700">Shift</label>
              <select
                className="w-full rounded-xl border border-slate-300 px-3 py-2 text-sm"
                value={cashierShiftId}
                onChange={(event) => {
                  setCashierShiftId(event.target.value ? Number(event.target.value) : "");
                  setPage(1);
                }}
              >
                <option value="">Semua shift</option>
                {shiftsQuery.data?.items.map((shift) => (
                  <option key={shift.id} value={shift.id}>
                    {shift.shift_number} — {shift.outlet?.name ?? "-"}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-slate-700">Tipe</label>
              <select
                className="w-full rounded-xl border border-slate-300 px-3 py-2 text-sm"
                value={movementType}
                onChange={(event) => {
                  setMovementType(event.target.value as CashMovementType | "");
                  setPage(1);
                }}
              >
                <option value="">Semua tipe</option>
                <option value="opening">opening</option>
                <option value="cash_in">cash_in</option>
                <option value="cash_out">cash_out</option>
                <option value="closing_adjustment">closing_adjustment</option>
              </select>
            </div>

            <div className="flex items-end justify-end">
              <PermissionWrapper permission="cash_movements.create">
                <Button onClick={openCreateForm}>Tambah Cash Movement</Button>
              </PermissionWrapper>
            </div>
          </div>
        </Card>

        {cashMovementsQuery.isLoading ? (
          <Card>Memuat cash movement...</Card>
        ) : cashMovementsQuery.isError ? (
          <PageErrorState onRetry={() => void cashMovementsQuery.refetch()} />
        ) : !cashMovementsQuery.data?.items.length ? (
          <PageEmptyState title="Belum ada cash movement" />
        ) : (
          <Card>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm">
                <thead>
                  <tr className="border-b border-slate-200 text-slate-500">
                    <th className="px-3 py-3 font-medium">Shift</th>
                    <th className="px-3 py-3 font-medium">Outlet</th>
                    <th className="px-3 py-3 font-medium">Tipe</th>
                    <th className="px-3 py-3 font-medium">Nominal</th>
                    <th className="px-3 py-3 font-medium">Alasan</th>
                    <th className="px-3 py-3 font-medium">Dibuat Oleh</th>
                  </tr>
                </thead>
                <tbody>
                  {cashMovementsQuery.data.items.map((movement) => {
                    const shift = movement.cashier_shift ?? movement.cashierShift ?? null;

                    return (
                      <tr key={movement.id} className="border-b border-slate-100">
                        <td className="px-3 py-3 font-medium text-slate-900">
                          {shift?.shift_number ?? `#${movement.cashier_shift_id}`}
                        </td>
                        <td className="px-3 py-3 text-slate-600">{shift?.outlet?.name ?? "-"}</td>
                        <td className="px-3 py-3">
                          <Badge variant={movementBadge(movement.movement_type)}>
                            {movement.movement_type}
                          </Badge>
                        </td>
                        <td className="px-3 py-3 font-semibold text-slate-900">
                          {formatCurrency(movement.amount)}
                        </td>
                        <td className="px-3 py-3 text-slate-600">{movement.reason ?? "-"}</td>
                        <td className="px-3 py-3 text-slate-600">
                          {movement.creator?.name ?? "-"}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </Card>
        )}

        <Pagination meta={cashMovementsQuery.data?.meta ?? null} onPageChange={setPage} />

        <Modal
          open={openForm}
          title="Tambah Cash Movement"
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
              <label className="mb-2 block text-sm font-medium text-slate-700">Shift</label>
              <select
                className="w-full rounded-xl border border-slate-300 px-3 py-2 text-sm"
                value={form.cashier_shift_id || ""}
                onChange={(event) =>
                  setForm((prev) => ({
                    ...prev,
                    cashier_shift_id: Number(event.target.value || 0),
                  }))
                }
              >
                <option value="">Pilih shift</option>
                {shiftsQuery.data?.items.map((shift) => (
                  <option key={shift.id} value={shift.id}>
                    {shift.shift_number} — {shift.outlet?.name ?? "-"} — {shift.status}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-slate-700">Tipe</label>
              <select
                className="w-full rounded-xl border border-slate-300 px-3 py-2 text-sm"
                value={form.movement_type}
                onChange={(event) =>
                  setForm((prev) => ({
                    ...prev,
                    movement_type: event.target.value as CashMovementType,
                  }))
                }
              >
                <option value="cash_in">cash_in</option>
                <option value="cash_out">cash_out</option>
                <option value="opening">opening</option>
                <option value="closing_adjustment">closing_adjustment</option>
              </select>
            </div>

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
              label="Alasan"
              value={form.reason ?? ""}
              onChange={(event) => setForm((prev) => ({ ...prev, reason: event.target.value }))}
            />

            <Input
              label="Catatan"
              value={form.notes ?? ""}
              onChange={(event) => setForm((prev) => ({ ...prev, notes: event.target.value }))}
            />
          </div>
        </Modal>
      </div>
    </PermissionWrapper>
  );
}