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
      <div className="space-y-4">
        <PageHeader
          title="Satuan & Konversi"
          description="Kelola satuan bahan baku dan konversi antar satuan."
          actions={
            <div className="flex flex-wrap gap-2">
              <Button onClick={openCreateUnit}>Tambah Satuan</Button>
              <Button variant="outline" onClick={openCreateConversion}>
                Tambah Konversi
              </Button>
            </div>
          }
        />

        <Card>
          <Input
            placeholder="Cari satuan..."
            value={search}
            onChange={(event) => setSearch(event.target.value)}
          />
        </Card>

        <div className="grid gap-4 lg:grid-cols-2">
          <Card title="Daftar Satuan">
            {unitsQuery.isLoading ? (
              <div className="text-sm text-slate-500">Memuat satuan...</div>
            ) : unitsQuery.isError ? (
              <PageErrorState onRetry={() => void unitsQuery.refetch()} />
            ) : !units.length ? (
              <PageEmptyState title="Belum ada satuan" />
            ) : (
              <div className="space-y-3">
                {units.map((unit) => (
                  <div
                    key={unit.id}
                    className="flex flex-col gap-3 rounded-2xl border border-slate-200 p-4 md:flex-row md:items-center md:justify-between"
                  >
                    <div>
                      <div className="font-medium text-slate-900">{unit.name}</div>
                      <div className="text-sm text-slate-500">{unit.code}</div>
                    </div>
                    <div className="flex flex-wrap gap-2">
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
                ))}
              </div>
            )}
          </Card>

          <Card title="Konversi Satuan">
            {conversionsQuery.isLoading ? (
              <div className="text-sm text-slate-500">Memuat konversi...</div>
            ) : conversionsQuery.isError ? (
              <PageErrorState onRetry={() => void conversionsQuery.refetch()} />
            ) : !conversions.length ? (
              <PageEmptyState title="Belum ada konversi satuan" />
            ) : (
              <div className="space-y-3">
                {conversions.map((conversion) => (
                  <div
                    key={conversion.id}
                    className="rounded-2xl border border-slate-200 p-4"
                  >
                    <div className="font-medium text-slate-900">
                      1 {getUnitName(conversion.from_unit_id)} ={" "}
                      {Number(conversion.multiplier).toLocaleString("id-ID")}{" "}
                      {getUnitName(conversion.to_unit_id)}
                    </div>
                    <div className="mt-3 flex flex-wrap gap-2">
                      <Button variant="outline" onClick={() => openEditConversion(conversion)}>
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
          <div className="grid gap-4 md:grid-cols-3">
            <div>
              <label className="mb-2 block text-sm font-medium text-slate-700">
                Dari Satuan
              </label>
              <select
                className="w-full rounded-xl border border-slate-300 px-3 py-2 text-sm"
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
                className="w-full rounded-xl border border-slate-300 px-3 py-2 text-sm"
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
        </Modal>
      </div>
    </PermissionWrapper>
  );
}