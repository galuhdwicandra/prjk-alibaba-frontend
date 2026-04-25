// src/modules/pos/pages/PosShiftsPage.tsx

import { useMemo, useState } from "react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { PageHeader } from "@/components/navigation/PageHeader";
import { PermissionWrapper } from "@/components/navigation/PermissionWrapper";
import { PageEmptyState } from "@/components/feedback/PageEmptyState";
import { PageErrorState } from "@/components/feedback/PageErrorState";
import { Badge, Button, Card, Input, Modal } from "@/components/ui";
import { useActiveOutlet } from "@/hooks/useActiveOutlet";
import { useToast } from "@/hooks/useToast";
import { parseApiError } from "@/services/api/error-parser";
import { shiftService } from "@/modules/pos/services/shift.service";
import type {
  CashierShift,
  CashierShiftStatus,
  CashMovement,
  CashMovementType,
} from "@/types/cashier-shift";

interface OpenShiftForm {
  opening_cash: string;
  notes: string;
}

interface CashMovementForm {
  movement_type: "cash_in" | "cash_out";
  amount: string;
  reason: string;
  notes: string;
}

interface CloseShiftForm {
  closing_cash: string;
  notes: string;
}

const initialOpenShiftForm: OpenShiftForm = {
  opening_cash: "0",
  notes: "",
};

const initialCashMovementForm: CashMovementForm = {
  movement_type: "cash_in",
  amount: "",
  reason: "",
  notes: "",
};

const initialCloseShiftForm: CloseShiftForm = {
  closing_cash: "",
  notes: "",
};

const formatCurrency = (value: number | string | null | undefined) =>
  new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    maximumFractionDigits: 0,
  }).format(Number(value ?? 0));

const formatDateTime = (value?: string | null) => {
  if (!value) {
    return "-";
  }

  return new Intl.DateTimeFormat("id-ID", {
    dateStyle: "medium",
    timeStyle: "short",
  }).format(new Date(value));
};

const getShiftMovements = (shift: CashierShift | null): CashMovement[] => {
  if (!shift) {
    return [];
  }

  return shift.cash_movements ?? shift.cashMovements ?? [];
};

const getMovementLabel = (movementType: CashMovementType) => {
  const labels: Record<CashMovementType, string> = {
    opening: "Modal Awal",
    cash_in: "Kas Masuk",
    cash_out: "Kas Keluar",
    closing_adjustment: "Penyesuaian Tutup Shift",
  };

  return labels[movementType];
};

const getMovementBadgeVariant = (movementType: CashMovementType) => {
  if (movementType === "cash_out") {
    return "danger";
  }

  if (movementType === "closing_adjustment") {
    return "warning";
  }

  return "success";
};

const getShiftBadgeVariant = (status: CashierShiftStatus) =>
  status === "open" ? "success" : "default";

export default function PosShiftsPage() {
  const toast = useToast();
  const queryClient = useQueryClient();
  const { activeOutlet } = useActiveOutlet();

  const activeOutletId = activeOutlet?.outlet_id ?? null;
  const activeOutletName = activeOutlet
  ? `${activeOutlet.outlet_name ?? `Outlet #${activeOutlet.outlet_id}`}${
      activeOutlet.outlet_code ? ` (${activeOutlet.outlet_code})` : ""
    }`
  : "Outlet belum dipilih";

  const [openShiftModal, setOpenShiftModal] = useState(false);
  const [cashMovementModal, setCashMovementModal] = useState(false);
  const [closeShiftModal, setCloseShiftModal] = useState(false);
  const [selectedStatus, setSelectedStatus] = useState<CashierShiftStatus | "">("");
  const [openShiftForm, setOpenShiftForm] = useState<OpenShiftForm>(initialOpenShiftForm);
  const [cashMovementForm, setCashMovementForm] =
    useState<CashMovementForm>(initialCashMovementForm);
  const [closeShiftForm, setCloseShiftForm] = useState<CloseShiftForm>(initialCloseShiftForm);

  const shiftsQuery = useQuery({
    queryKey: ["pos-cashier-shifts", activeOutletId, selectedStatus],
    enabled: Boolean(activeOutletId),
    queryFn: () =>
      shiftService.getCashierShifts({
        outlet_id: activeOutletId ?? "",
        status: selectedStatus,
        per_page: 50,
      }),
  });

  const shifts = shiftsQuery.data?.items ?? [];

  const currentShift = useMemo(
    () => shifts.find((shift) => shift.status === "open") ?? null,
    [shifts]
  );

  const currentShiftDetailQuery = useQuery({
    queryKey: ["pos-current-cashier-shift-detail", currentShift?.id],
    enabled: Boolean(currentShift?.id),
    queryFn: () => shiftService.getCashierShift(Number(currentShift?.id)),
  });

  const currentShiftDetail = currentShiftDetailQuery.data?.data ?? currentShift;
  const shiftMovements = getShiftMovements(currentShiftDetail);

  const cashInTotal = shiftMovements
    .filter((movement) => movement.movement_type === "cash_in")
    .reduce((sum, movement) => sum + Number(movement.amount || 0), 0);

  const cashOutTotal = shiftMovements
    .filter((movement) => movement.movement_type === "cash_out")
    .reduce((sum, movement) => sum + Number(movement.amount || 0), 0);

  const openingCash = Number(currentShiftDetail?.opening_cash ?? 0);
  const expectedCash = Number(currentShiftDetail?.expected_cash ?? openingCash + cashInTotal - cashOutTotal);

  const openShiftMutation = useMutation({
    mutationFn: () => {
      if (!activeOutletId) {
        throw new Error("Outlet aktif belum dipilih.");
      }

      return shiftService.openCashierShift({
        outlet_id: activeOutletId,
        opening_cash: Number(openShiftForm.opening_cash || 0),
        notes: openShiftForm.notes.trim() || null,
      });
    },
    onSuccess: (response) => {
      toast.success(response.message);
      setOpenShiftModal(false);
      setOpenShiftForm(initialOpenShiftForm);
      void queryClient.invalidateQueries({ queryKey: ["pos-cashier-shifts"] });
    },
    onError: (error) => {
      toast.error("Gagal membuka shift", parseApiError(error));
    },
  });

  const cashMovementMutation = useMutation({
    mutationFn: () => {
      if (!currentShiftDetail?.id) {
        throw new Error("Shift aktif tidak ditemukan.");
      }

      return shiftService.createCashMovement({
        cashier_shift_id: currentShiftDetail.id,
        movement_type: cashMovementForm.movement_type,
        amount: Number(cashMovementForm.amount || 0),
        reason: cashMovementForm.reason.trim() || null,
        notes: cashMovementForm.notes.trim() || null,
      });
    },
    onSuccess: (response) => {
      toast.success(response.message);
      setCashMovementModal(false);
      setCashMovementForm(initialCashMovementForm);
      void queryClient.invalidateQueries({ queryKey: ["pos-cashier-shifts"] });
      void queryClient.invalidateQueries({ queryKey: ["pos-current-cashier-shift-detail"] });
    },
    onError: (error) => {
      toast.error("Gagal menyimpan pergerakan kas", parseApiError(error));
    },
  });

  const closeShiftMutation = useMutation({
    mutationFn: () => {
      if (!currentShiftDetail?.id) {
        throw new Error("Shift aktif tidak ditemukan.");
      }

      return shiftService.closeCashierShift(currentShiftDetail.id, {
        closing_cash: Number(closeShiftForm.closing_cash || 0),
        notes: closeShiftForm.notes.trim() || null,
      });
    },
    onSuccess: (response) => {
      toast.success(response.message);
      setCloseShiftModal(false);
      setCloseShiftForm(initialCloseShiftForm);
      void queryClient.invalidateQueries({ queryKey: ["pos-cashier-shifts"] });
      void queryClient.invalidateQueries({ queryKey: ["pos-current-cashier-shift-detail"] });
    },
    onError: (error) => {
      toast.error("Gagal menutup shift", parseApiError(error));
    },
  });

  const openCloseShiftModal = () => {
    setCloseShiftForm({
      closing_cash: String(expectedCash),
      notes: "",
    });
    setCloseShiftModal(true);
  };

  return (
    <PermissionWrapper permission="cashier_shifts.view">
      <div className="space-y-4">
        <PageHeader
          title="Shift Kasir"
          description="Kelola buka shift, kas masuk, kas keluar, dan tutup shift."
          actions={
            <div className="flex flex-wrap gap-2">
              <Button
                variant="outline"
                onClick={() => void shiftsQuery.refetch()}
                loading={shiftsQuery.isFetching}
              >
                Refresh
              </Button>
              <Button
                disabled={!activeOutletId || Boolean(currentShiftDetail)}
                onClick={() => setOpenShiftModal(true)}
              >
                Buka Shift
              </Button>
            </div>
          }
        />

        <Card>
          <div className="grid gap-3 md:grid-cols-4">
            <div>
              <div className="text-xs font-medium uppercase tracking-wide text-slate-500">
                Outlet Aktif
              </div>
              <div className="mt-1 text-sm font-semibold text-slate-900">{activeOutletName}</div>
            </div>

            <div>
              <div className="text-xs font-medium uppercase tracking-wide text-slate-500">
                Status Shift
              </div>
              <div className="mt-1">
                <Badge variant={currentShiftDetail ? "success" : "warning"}>
                  {currentShiftDetail ? "Shift Terbuka" : "Belum Ada Shift Aktif"}
                </Badge>
              </div>
            </div>

            <div>
              <div className="text-xs font-medium uppercase tracking-wide text-slate-500">
                Expected Cash
              </div>
              <div className="mt-1 text-sm font-semibold text-slate-900">
                {formatCurrency(expectedCash)}
              </div>
            </div>

            <div>
              <label className="mb-1 block text-xs font-medium uppercase tracking-wide text-slate-500">
                Filter Riwayat
              </label>
              <select
                className="w-full rounded-xl border border-slate-300 px-3 py-2 text-sm"
                value={selectedStatus}
                onChange={(event) => setSelectedStatus(event.target.value as CashierShiftStatus | "")}
              >
                <option value="">Semua Status</option>
                <option value="open">Open</option>
                <option value="closed">Closed</option>
              </select>
            </div>
          </div>
        </Card>

        {!activeOutletId ? (
          <PageEmptyState title="Outlet aktif belum dipilih" />
        ) : shiftsQuery.isLoading ? (
          <Card>Memuat data shift...</Card>
        ) : shiftsQuery.isError ? (
          <PageErrorState onRetry={() => void shiftsQuery.refetch()} />
        ) : (
          <div className="grid gap-4 xl:grid-cols-[1.1fr_0.9fr]">
            <div className="space-y-4">
              <Card
                title="Current Shift"
                description="Shift aktif yang sedang digunakan kasir."
                actions={
                  currentShiftDetail ? (
                    <Badge variant={getShiftBadgeVariant(currentShiftDetail.status)}>
                      {currentShiftDetail.status}
                    </Badge>
                  ) : null
                }
              >
                {!currentShiftDetail ? (
                  <PageEmptyState title="Belum ada shift aktif" />
                ) : (
                  <div className="space-y-4">
                    <div className="grid gap-3 md:grid-cols-2">
                      <div className="rounded-2xl border border-slate-200 p-4">
                        <div className="text-xs text-slate-500">Nomor Shift</div>
                        <div className="mt-1 font-semibold text-slate-900">
                          {currentShiftDetail.shift_number}
                        </div>
                      </div>

                      <div className="rounded-2xl border border-slate-200 p-4">
                        <div className="text-xs text-slate-500">Dibuka</div>
                        <div className="mt-1 font-semibold text-slate-900">
                          {formatDateTime(currentShiftDetail.opened_at)}
                        </div>
                      </div>

                      <div className="rounded-2xl border border-slate-200 p-4">
                        <div className="text-xs text-slate-500">Modal Awal</div>
                        <div className="mt-1 font-semibold text-slate-900">
                          {formatCurrency(currentShiftDetail.opening_cash)}
                        </div>
                      </div>

                      <div className="rounded-2xl border border-slate-200 p-4">
                        <div className="text-xs text-slate-500">Jumlah Order</div>
                        <div className="mt-1 font-semibold text-slate-900">
                          {currentShiftDetail.orders_count ?? 0}
                        </div>
                      </div>
                    </div>

                    <div className="grid gap-3 md:grid-cols-3">
                      <div className="rounded-2xl bg-emerald-50 p-4">
                        <div className="text-xs text-emerald-700">Kas Masuk</div>
                        <div className="mt-1 font-semibold text-emerald-900">
                          {formatCurrency(cashInTotal)}
                        </div>
                      </div>

                      <div className="rounded-2xl bg-rose-50 p-4">
                        <div className="text-xs text-rose-700">Kas Keluar</div>
                        <div className="mt-1 font-semibold text-rose-900">
                          {formatCurrency(cashOutTotal)}
                        </div>
                      </div>

                      <div className="rounded-2xl bg-slate-100 p-4">
                        <div className="text-xs text-slate-600">Expected Cash</div>
                        <div className="mt-1 font-semibold text-slate-900">
                          {formatCurrency(expectedCash)}
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      <Button variant="secondary" onClick={() => setCashMovementModal(true)}>
                        Tambah Kas Masuk/Keluar
                      </Button>
                      <Button variant="danger" onClick={openCloseShiftModal}>
                        Tutup Shift
                      </Button>
                    </div>
                  </div>
                )}
              </Card>

              <Card title="Riwayat Pergerakan Kas">
                {!currentShiftDetail ? (
                  <PageEmptyState title="Shift aktif belum tersedia" />
                ) : currentShiftDetailQuery.isLoading ? (
                  <div>Memuat pergerakan kas...</div>
                ) : !shiftMovements.length ? (
                  <PageEmptyState title="Belum ada pergerakan kas" />
                ) : (
                  <div className="overflow-x-auto">
                    <table className="w-full min-w-[720px] text-left text-sm">
                      <thead>
                        <tr className="border-b border-slate-200 text-xs uppercase text-slate-500">
                          <th className="px-3 py-2">Tipe</th>
                          <th className="px-3 py-2">Nominal</th>
                          <th className="px-3 py-2">Alasan</th>
                          <th className="px-3 py-2">Catatan</th>
                          <th className="px-3 py-2">Waktu</th>
                        </tr>
                      </thead>
                      <tbody>
                        {shiftMovements.map((movement) => (
                          <tr key={movement.id} className="border-b border-slate-100">
                            <td className="px-3 py-3">
                              <Badge variant={getMovementBadgeVariant(movement.movement_type)}>
                                {getMovementLabel(movement.movement_type)}
                              </Badge>
                            </td>
                            <td className="px-3 py-3 font-semibold">
                              {formatCurrency(movement.amount)}
                            </td>
                            <td className="px-3 py-3">{movement.reason ?? "-"}</td>
                            <td className="px-3 py-3">{movement.notes ?? "-"}</td>
                            <td className="px-3 py-3">{formatDateTime(movement.created_at)}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}
              </Card>
            </div>

            <Card title="Riwayat Shift" description="Daftar shift outlet aktif.">
              {!shifts.length ? (
                <PageEmptyState title="Belum ada riwayat shift" />
              ) : (
                <div className="space-y-3">
                  {shifts.map((shift) => (
                    <div key={shift.id} className="rounded-2xl border border-slate-200 p-4">
                      <div className="flex flex-wrap items-start justify-between gap-3">
                        <div>
                          <div className="font-semibold text-slate-900">{shift.shift_number}</div>
                          <div className="mt-1 text-xs text-slate-500">
                            {formatDateTime(shift.opened_at)} - {formatDateTime(shift.closed_at)}
                          </div>
                        </div>
                        <Badge variant={getShiftBadgeVariant(shift.status)}>{shift.status}</Badge>
                      </div>

                      <div className="mt-3 grid gap-2 text-sm text-slate-600 md:grid-cols-2">
                        <div>Opening: {formatCurrency(shift.opening_cash)}</div>
                        <div>Expected: {formatCurrency(shift.expected_cash)}</div>
                        <div>Closing: {formatCurrency(shift.closing_cash)}</div>
                        <div>Selisih: {formatCurrency(shift.cash_difference)}</div>
                      </div>

                      {shift.notes ? (
                        <div className="mt-3 rounded-xl bg-slate-50 p-3 text-sm text-slate-600">
                          {shift.notes}
                        </div>
                      ) : null}
                    </div>
                  ))}
                </div>
              )}
            </Card>
          </div>
        )}

        <Modal
          open={openShiftModal}
          title="Buka Shift"
          onClose={() => setOpenShiftModal(false)}
          footer={
            <>
              <Button variant="outline" onClick={() => setOpenShiftModal(false)}>
                Batal
              </Button>
              <Button
                loading={openShiftMutation.isPending}
                onClick={() => openShiftMutation.mutate()}
              >
                Simpan
              </Button>
            </>
          }
        >
          <div className="space-y-4">
            <Input
              label="Modal Awal"
              type="number"
              min="0"
              value={openShiftForm.opening_cash}
              onChange={(event) =>
                setOpenShiftForm((prev) => ({
                  ...prev,
                  opening_cash: event.target.value,
                }))
              }
            />

            <Input
              label="Catatan"
              value={openShiftForm.notes}
              onChange={(event) =>
                setOpenShiftForm((prev) => ({
                  ...prev,
                  notes: event.target.value,
                }))
              }
            />
          </div>
        </Modal>

        <Modal
          open={cashMovementModal}
          title="Tambah Kas Masuk/Keluar"
          onClose={() => setCashMovementModal(false)}
          footer={
            <>
              <Button variant="outline" onClick={() => setCashMovementModal(false)}>
                Batal
              </Button>
              <Button
                loading={cashMovementMutation.isPending}
                onClick={() => cashMovementMutation.mutate()}
              >
                Simpan
              </Button>
            </>
          }
        >
          <div className="space-y-4">
            <div>
              <label className="mb-2 block text-sm font-medium text-slate-700">
                Tipe Pergerakan Kas
              </label>
              <select
                className="w-full rounded-xl border border-slate-300 px-3 py-2 text-sm"
                value={cashMovementForm.movement_type}
                onChange={(event) =>
                  setCashMovementForm((prev) => ({
                    ...prev,
                    movement_type: event.target.value as "cash_in" | "cash_out",
                  }))
                }
              >
                <option value="cash_in">Kas Masuk</option>
                <option value="cash_out">Kas Keluar</option>
              </select>
            </div>

            <Input
              label="Nominal"
              type="number"
              min="1"
              value={cashMovementForm.amount}
              onChange={(event) =>
                setCashMovementForm((prev) => ({
                  ...prev,
                  amount: event.target.value,
                }))
              }
            />

            <Input
              label="Alasan"
              value={cashMovementForm.reason}
              onChange={(event) =>
                setCashMovementForm((prev) => ({
                  ...prev,
                  reason: event.target.value,
                }))
              }
            />

            <Input
              label="Catatan"
              value={cashMovementForm.notes}
              onChange={(event) =>
                setCashMovementForm((prev) => ({
                  ...prev,
                  notes: event.target.value,
                }))
              }
            />
          </div>
        </Modal>

        <Modal
          open={closeShiftModal}
          title="Tutup Shift"
          onClose={() => setCloseShiftModal(false)}
          footer={
            <>
              <Button variant="outline" onClick={() => setCloseShiftModal(false)}>
                Batal
              </Button>
              <Button
                variant="danger"
                loading={closeShiftMutation.isPending}
                onClick={() => closeShiftMutation.mutate()}
              >
                Tutup Shift
              </Button>
            </>
          }
        >
          <div className="space-y-4">
            <Card>
              <div className="space-y-2 text-sm text-slate-700">
                <div className="flex justify-between">
                  <span>Modal Awal</span>
                  <span>{formatCurrency(openingCash)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Kas Masuk</span>
                  <span>{formatCurrency(cashInTotal)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Kas Keluar</span>
                  <span>{formatCurrency(cashOutTotal)}</span>
                </div>
                <div className="flex justify-between border-t border-slate-200 pt-2 font-semibold text-slate-900">
                  <span>Expected Cash</span>
                  <span>{formatCurrency(expectedCash)}</span>
                </div>
              </div>
            </Card>

            <Input
              label="Uang Fisik Saat Tutup"
              type="number"
              min="0"
              value={closeShiftForm.closing_cash}
              onChange={(event) =>
                setCloseShiftForm((prev) => ({
                  ...prev,
                  closing_cash: event.target.value,
                }))
              }
            />

            <Input
              label="Catatan Tutup Shift"
              value={closeShiftForm.notes}
              onChange={(event) =>
                setCloseShiftForm((prev) => ({
                  ...prev,
                  notes: event.target.value,
                }))
              }
            />

            <div className="rounded-2xl bg-slate-100 p-4 text-sm text-slate-700">
              Selisih sementara:{" "}
              <span className="font-semibold text-slate-900">
                {formatCurrency(Number(closeShiftForm.closing_cash || 0) - expectedCash)}
              </span>
            </div>
          </div>
        </Modal>
      </div>
    </PermissionWrapper>
  );
}