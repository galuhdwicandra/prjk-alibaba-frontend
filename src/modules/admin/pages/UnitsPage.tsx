import { useState } from "react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
  inventoryService,
  type UnitConversionPayload,
  type UnitPayload,
} from "@/modules/admin/services/inventory.service";
import { PageHeader } from "@/components/navigation/PageHeader";
import { PermissionWrapper } from "@/components/navigation/PermissionWrapper";
import { PageErrorState } from "@/components/feedback/PageErrorState";
import { PageEmptyState } from "@/components/feedback/PageEmptyState";
import { Button, Card, Input, Modal } from "@/components/ui";
import { parseApiError } from "@/services/api/error-parser";
import { useToast } from "@/hooks/useToast";
import type { Unit, UnitConversion } from "@/types/inventory";

const initialUnitForm: UnitPayload = {
  name: "",
  code: "",
};

const initialConversionForm: UnitConversionPayload = {
  from_unit_id: 0,
  to_unit_id: 0,
  multiplier: 1,
};

export default function UnitsPage() {
  const toast = useToast();
  const queryClient = useQueryClient();

  const [search, setSearch] = useState("");
  const [openUnitModal, setOpenUnitModal] = useState(false);
  const [openConversionModal, setOpenConversionModal] = useState(false);
  const [editingUnit, setEditingUnit] = useState<Unit | null>(null);
  const [editingConversion, setEditingConversion] = useState<UnitConversion | null>(null);
  const [unitForm, setUnitForm] = useState<UnitPayload>(initialUnitForm);
  const [conversionForm, setConversionForm] =
    useState<UnitConversionPayload>(initialConversionForm);

  const unitsQuery = useQuery({
    queryKey: ["inventory-units", search],
    queryFn: () => inventoryService.getUnits({ per_page: 100, search }),
  });

  const conversionsQuery = useQuery({
    queryKey: ["inventory-unit-conversions"],
    queryFn: () => inventoryService.getUnitConversions({ per_page: 100 }),
  });

  const units = unitsQuery.data?.items ?? [];
  const conversions = conversionsQuery.data?.items ?? [];

  const saveUnitMutation = useMutation({
    mutationFn: (payload: UnitPayload) =>
      editingUnit
        ? inventoryService.updateUnit(editingUnit.id, payload)
        : inventoryService.createUnit(payload),
    onSuccess: (response) => {
      toast.success(response.message);
      setOpenUnitModal(false);
      setEditingUnit(null);
      setUnitForm(initialUnitForm);
      void queryClient.invalidateQueries({ queryKey: ["inventory-units"] });
    },
    onError: (error) => toast.error("Gagal menyimpan satuan", parseApiError(error)),
  });

  const deleteUnitMutation = useMutation({
    mutationFn: (id: number) => inventoryService.deleteUnit(id),
    onSuccess: (response) => {
      toast.success(response.message);
      void queryClient.invalidateQueries({ queryKey: ["inventory-units"] });
    },
    onError: (error) => toast.error("Gagal menghapus satuan", parseApiError(error)),
  });

  const saveConversionMutation = useMutation({
    mutationFn: (payload: UnitConversionPayload) =>
      editingConversion
        ? inventoryService.updateUnitConversion(editingConversion.id, payload)
        : inventoryService.createUnitConversion(payload),
    onSuccess: (response) => {
      toast.success(response.message);
      setOpenConversionModal(false);
      setEditingConversion(null);
      setConversionForm(initialConversionForm);
      void queryClient.invalidateQueries({ queryKey: ["inventory-unit-conversions"] });
    },
    onError: (error) => toast.error("Gagal menyimpan konversi satuan", parseApiError(error)),
  });

  const deleteConversionMutation = useMutation({
    mutationFn: (id: number) => inventoryService.deleteUnitConversion(id),
    onSuccess: (response) => {
      toast.success(response.message);
      void queryClient.invalidateQueries({ queryKey: ["inventory-unit-conversions"] });
    },
    onError: (error) => toast.error("Gagal menghapus konversi satuan", parseApiError(error)),
  });

  const openCreateUnit = () => {
    setEditingUnit(null);
    setUnitForm(initialUnitForm);
    setOpenUnitModal(true);
  };

  const openEditUnit = (unit: Unit) => {
    setEditingUnit(unit);
    setUnitForm({
      name: unit.name,
      code: unit.code,
    });
    setOpenUnitModal(true);
  };

  const openCreateConversion = () => {
    setEditingConversion(null);
    setConversionForm(initialConversionForm);
    setOpenConversionModal(true);
  };

  const openEditConversion = (conversion: UnitConversion) => {
    setEditingConversion(conversion);
    setConversionForm({
      from_unit_id: conversion.from_unit_id,
      to_unit_id: conversion.to_unit_id,
      multiplier: Number(conversion.multiplier),
    });
    setOpenConversionModal(true);
  };

  const getUnitName = (id: number) => {
    const unit = units.find((item) => item.id === id);
    return unit ? `${unit.name} (${unit.code})` : "-";
  };

  return (
    <PermissionWrapper permission="units.view">
      <div className="space-y-5">
        <PageHeader
          title="Satuan & Konversi"
          description="Kelola satuan bahan baku dan konversi antar satuan."
          actions={
            <div className="flex w-full flex-col gap-2 sm:w-auto sm:flex-row">
              <Button onClick={openCreateUnit}>Tambah Satuan</Button>
              <Button variant="outline" onClick={openCreateConversion}>
                Tambah Konversi
              </Button>
            </div>
          }
        />

        <Card>
          <div className="grid gap-4 lg:grid-cols-[1fr_auto_auto] lg:items-end">
            <Input
              label="Pencarian"
              placeholder="Cari nama atau kode satuan..."
              value={search}
              onChange={(event) => setSearch(event.target.value)}
            />

            <div className="rounded-2xl border border-orange-100 bg-[var(--brand-brick-soft)] px-4 py-3">
              <div className="text-xs font-semibold uppercase tracking-wide text-[var(--brand-brick)]">
                Total Satuan
              </div>
              <div className="mt-1 text-xl font-semibold text-[var(--color-text)]">
                {units.length}
              </div>
            </div>

            <div className="rounded-2xl border border-yellow-200 bg-[var(--brand-yellow-soft)] px-4 py-3">
              <div className="text-xs font-semibold uppercase tracking-wide text-yellow-700">
                Total Konversi
              </div>
              <div className="mt-1 text-xl font-semibold text-[var(--color-text)]">
                {conversions.length}
              </div>
            </div>
          </div>
        </Card>

        <div className="grid gap-5 xl:grid-cols-2">
          <Card title="Daftar Satuan">
            {unitsQuery.isLoading ? (
              <div className="flex min-h-40 items-center justify-center rounded-2xl border border-dashed border-slate-200 bg-slate-50 text-sm text-[var(--color-muted)]">
                Memuat satuan...
              </div>
            ) : unitsQuery.isError ? (
              <PageErrorState onRetry={() => void unitsQuery.refetch()} />
            ) : !units.length ? (
              <PageEmptyState title="Belum ada satuan" />
            ) : (
              <div className="space-y-3">
                {units.map((unit) => (
                  <div
                    key={unit.id}
                    className="group rounded-2xl border border-[var(--color-border)] bg-white p-4 shadow-sm transition hover:border-orange-200 hover:bg-orange-50/30"
                  >
                    <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                      <div className="min-w-0">
                        <div className="truncate text-sm font-semibold text-slate-950">
                          {unit.name}
                        </div>
                        <div className="mt-1 inline-flex rounded-full border border-slate-200 bg-slate-50 px-2.5 py-1 text-xs font-semibold uppercase tracking-wide text-slate-600">
                          {unit.code}
                        </div>
                      </div>

                      <div className="flex flex-col gap-2 sm:flex-row sm:justify-end">
                        <Button variant="outline" onClick={() => openEditUnit(unit)}>
                          Edit
                        </Button>
                        <Button
                          variant="danger"
                          loading={deleteUnitMutation.isPending}
                          onClick={() => deleteUnitMutation.mutate(unit.id)}
                        >
                          Hapus
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </Card>

          <Card title="Konversi Satuan">
            {conversionsQuery.isLoading ? (
              <div className="flex min-h-40 items-center justify-center rounded-2xl border border-dashed border-slate-200 bg-slate-50 text-sm text-[var(--color-muted)]">
                Memuat konversi...
              </div>
            ) : conversionsQuery.isError ? (
              <PageErrorState onRetry={() => void conversionsQuery.refetch()} />
            ) : !conversions.length ? (
              <PageEmptyState title="Belum ada konversi satuan" />
            ) : (
              <div className="space-y-3">
                {conversions.map((conversion) => (
                  <div
                    key={conversion.id}
                    className="rounded-2xl border border-[var(--color-border)] bg-white p-4 shadow-sm transition hover:border-yellow-200 hover:bg-yellow-50/40"
                  >
                    <div className="space-y-3">
                      <div className="flex flex-col gap-2 rounded-xl bg-slate-50 p-3 text-sm sm:flex-row sm:items-center sm:justify-between">
                        <div className="font-medium text-slate-700">
                          1 {getUnitName(conversion.from_unit_id)}
                        </div>
                        <div className="hidden h-px flex-1 bg-slate-200 sm:block" />
                        <div className="font-semibold text-slate-950">
                          {Number(conversion.multiplier).toLocaleString("id-ID")}{" "}
                          {getUnitName(conversion.to_unit_id)}
                        </div>
                      </div>

                      <div className="flex flex-col gap-2 sm:flex-row sm:justify-end">
                        <Button
                          variant="outline"
                          onClick={() => openEditConversion(conversion)}
                        >
                          Edit
                        </Button>
                        <Button
                          variant="danger"
                          loading={deleteConversionMutation.isPending}
                          onClick={() => deleteConversionMutation.mutate(conversion.id)}
                        >
                          Hapus
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </Card>
        </div>

        <Modal
          open={openUnitModal}
          title={editingUnit ? "Edit Satuan" : "Tambah Satuan"}
          onClose={() => setOpenUnitModal(false)}
          footer={
            <>
              <Button variant="outline" onClick={() => setOpenUnitModal(false)}>
                Batal
              </Button>
              <Button
                loading={saveUnitMutation.isPending}
                onClick={() => saveUnitMutation.mutate(unitForm)}
              >
                Simpan
              </Button>
            </>
          }
        >
          <div className="space-y-4">
            <div className="rounded-2xl border border-slate-200 bg-slate-50/70 p-4">
              <h3 className="text-sm font-semibold text-slate-900">Informasi Satuan</h3>
              <p className="mt-1 text-xs leading-5 text-slate-500">
                Gunakan nama satuan yang mudah dibaca dan kode singkat yang konsisten.
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <Input
                label="Nama"
                value={unitForm.name}
                onChange={(event) =>
                  setUnitForm((prev) => ({ ...prev, name: event.target.value }))
                }
              />
              <Input
                label="Kode"
                value={unitForm.code}
                onChange={(event) =>
                  setUnitForm((prev) => ({ ...prev, code: event.target.value }))
                }
              />
            </div>
          </div>
        </Modal>

        <Modal
          open={openConversionModal}
          title={editingConversion ? "Edit Konversi Satuan" : "Tambah Konversi Satuan"}
          onClose={() => setOpenConversionModal(false)}
          footer={
            <>
              <Button variant="outline" onClick={() => setOpenConversionModal(false)}>
                Batal
              </Button>
              <Button
                loading={saveConversionMutation.isPending}
                onClick={() => saveConversionMutation.mutate(conversionForm)}
              >
                Simpan
              </Button>
            </>
          }
        >
          <div className="space-y-4">
            <div className="rounded-2xl border border-yellow-200 bg-[var(--brand-yellow-soft)] p-4">
              <h3 className="text-sm font-semibold text-slate-900">Aturan Konversi</h3>
              <p className="mt-1 text-xs leading-5 text-slate-600">
                Format konversi: 1 satuan asal sama dengan nilai multiplier pada satuan tujuan.
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-3">
              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700">
                  Dari Satuan
                </label>
                <select
                  className="w-full rounded-xl border border-slate-300 bg-white px-3 py-2 text-sm text-slate-800 shadow-sm outline-none transition focus:border-[var(--brand-brick)] focus:ring-2 focus:ring-orange-100"
                  value={conversionForm.from_unit_id || ""}
                  onChange={(event) =>
                    setConversionForm((prev) => ({
                      ...prev,
                      from_unit_id: Number(event.target.value || 0),
                    }))
                  }
                >
                  <option value="">Pilih satuan</option>
                  {units.map((unit) => (
                    <option key={unit.id} value={unit.id}>
                      {unit.name} ({unit.code})
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700">
                  Ke Satuan
                </label>
                <select
                  className="w-full rounded-xl border border-slate-300 bg-white px-3 py-2 text-sm text-slate-800 shadow-sm outline-none transition focus:border-[var(--brand-brick)] focus:ring-2 focus:ring-orange-100"
                  value={conversionForm.to_unit_id || ""}
                  onChange={(event) =>
                    setConversionForm((prev) => ({
                      ...prev,
                      to_unit_id: Number(event.target.value || 0),
                    }))
                  }
                >
                  <option value="">Pilih satuan</option>
                  {units.map((unit) => (
                    <option key={unit.id} value={unit.id}>
                      {unit.name} ({unit.code})
                    </option>
                  ))}
                </select>
              </div>

              <Input
                label="Multiplier"
                type="number"
                value={String(conversionForm.multiplier)}
                onChange={(event) =>
                  setConversionForm((prev) => ({
                    ...prev,
                    multiplier: Number(event.target.value || 0),
                  }))
                }
              />
            </div>
          </div>
        </Modal>
      </div>
    </PermissionWrapper>
  );
}