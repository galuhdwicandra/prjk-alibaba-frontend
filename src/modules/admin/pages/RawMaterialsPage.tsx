import { useState } from "react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
  inventoryService,
  type RawMaterialPayload,
} from "@/modules/admin/services/inventory.service";
import { masterDataService } from "@/modules/admin/services/master-data.service";
import { PageHeader } from "@/components/navigation/PageHeader";
import { PermissionWrapper } from "@/components/navigation/PermissionWrapper";
import { PageErrorState } from "@/components/feedback/PageErrorState";
import { PageEmptyState } from "@/components/feedback/PageEmptyState";
import { Badge, Button, Card, Checkbox, Input, Modal } from "@/components/ui";
import { parseApiError } from "@/services/api/error-parser";
import { useToast } from "@/hooks/useToast";
import type { RawMaterial } from "@/types/inventory";

const initialForm: RawMaterialPayload = {
  raw_material_category_id: 0,
  unit_id: 0,
  code: "",
  name: "",
  sku: "",
  description: "",
  minimum_stock: 0,
  last_purchase_price: 0,
  average_cost: 0,
  is_active: true,
  outlet_stocks: [],
};

const formatCurrency = (value: number | string | null | undefined) =>
  `Rp ${Number(value ?? 0).toLocaleString("id-ID")}`;

const formatNumber = (value: number | string | null | undefined) =>
  Number(value ?? 0).toLocaleString("id-ID");

const selectClassName =
  "w-full rounded-xl border border-slate-300 bg-white px-3 py-2 text-sm text-slate-800 shadow-sm outline-none transition focus:border-[var(--brand-brick)] focus:ring-2 focus:ring-orange-100";

export default function RawMaterialsPage() {
  const toast = useToast();
  const queryClient = useQueryClient();

  const [search, setSearch] = useState("");
  const [categoryFilter, setCategoryFilter] = useState<number | "">("");
  const [unitFilter, setUnitFilter] = useState<number | "">("");
  const [openModal, setOpenModal] = useState(false);
  const [editingRawMaterial, setEditingRawMaterial] = useState<RawMaterial | null>(null);
  const [form, setForm] = useState<RawMaterialPayload>(initialForm);

  const rawMaterialsQuery = useQuery({
    queryKey: ["inventory-raw-materials", search, categoryFilter, unitFilter],
    queryFn: () =>
      inventoryService.getRawMaterials({
        per_page: 100,
        search,
        raw_material_category_id: categoryFilter,
        unit_id: unitFilter,
      }),
  });

  const categoriesQuery = useQuery({
    queryKey: ["inventory-raw-material-categories-options"],
    queryFn: () => inventoryService.getRawMaterialCategories({ per_page: 100 }),
  });

  const unitsQuery = useQuery({
    queryKey: ["inventory-units-options"],
    queryFn: () => inventoryService.getUnits({ per_page: 100 }),
  });

  const outletsQuery = useQuery({
    queryKey: ["inventory-outlet-options"],
    queryFn: () => masterDataService.getOutlets({ per_page: 100 }),
  });

  const rawMaterials = rawMaterialsQuery.data?.items ?? [];
  const categories = categoriesQuery.data?.items ?? [];
  const units = unitsQuery.data?.items ?? [];
  const outlets = outletsQuery.data?.items ?? [];

  const saveMutation = useMutation({
    mutationFn: (payload: RawMaterialPayload) =>
      editingRawMaterial
        ? inventoryService.updateRawMaterial(editingRawMaterial.id, payload)
        : inventoryService.createRawMaterial(payload),
    onSuccess: (response) => {
      toast.success(response.message);
      setOpenModal(false);
      setEditingRawMaterial(null);
      setForm(initialForm);
      void queryClient.invalidateQueries({ queryKey: ["inventory-raw-materials"] });
      void queryClient.invalidateQueries({ queryKey: ["inventory-outlet-material-stocks"] });
    },
    onError: (error) => toast.error("Gagal menyimpan bahan baku", parseApiError(error)),
  });

  const deleteMutation = useMutation({
    mutationFn: (id: number) => inventoryService.deleteRawMaterial(id),
    onSuccess: (response) => {
      toast.success(response.message);
      void queryClient.invalidateQueries({ queryKey: ["inventory-raw-materials"] });
    },
    onError: (error) => toast.error("Gagal menghapus bahan baku", parseApiError(error)),
  });

  const openCreate = () => {
    setEditingRawMaterial(null);
    setForm({
      ...initialForm,
      outlet_stocks: outlets.map((outlet) => ({
        outlet_id: outlet.id,
        qty_on_hand: 0,
        qty_reserved: 0,
        last_movement_at: null,
      })),
    });
    setOpenModal(true);
  };

  const openEdit = (rawMaterial: RawMaterial) => {
    const stocks = rawMaterial.outlet_stocks ?? rawMaterial.outletStocks ?? [];

    setEditingRawMaterial(rawMaterial);
    setForm({
      raw_material_category_id: rawMaterial.raw_material_category_id,
      unit_id: rawMaterial.unit_id,
      code: rawMaterial.code ?? "",
      name: rawMaterial.name,
      sku: rawMaterial.sku ?? "",
      description: rawMaterial.description ?? "",
      minimum_stock: Number(rawMaterial.minimum_stock ?? 0),
      last_purchase_price: Number(rawMaterial.last_purchase_price ?? 0),
      average_cost: Number(rawMaterial.average_cost ?? 0),
      is_active: rawMaterial.is_active,
      outlet_stocks: outlets.map((outlet) => {
        const stock = stocks.find((item) => item.outlet_id === outlet.id);

        return {
          outlet_id: outlet.id,
          qty_on_hand: Number(stock?.qty_on_hand ?? 0),
          qty_reserved: Number(stock?.qty_reserved ?? 0),
          last_movement_at: stock?.last_movement_at ?? null,
        };
      }),
    });
    setOpenModal(true);
  };

  const updateStock = (
    outletId: number,
    field: "qty_on_hand" | "qty_reserved",
    value: number
  ) => {
    setForm((prev) => {
      const currentStocks = prev.outlet_stocks ?? [];
      const exists = currentStocks.some((item) => item.outlet_id === outletId);

      const nextStocks = exists
        ? currentStocks.map((item) =>
            item.outlet_id === outletId ? { ...item, [field]: value } : item
          )
        : [
            ...currentStocks,
            {
              outlet_id: outletId,
              qty_on_hand: field === "qty_on_hand" ? value : 0,
              qty_reserved: field === "qty_reserved" ? value : 0,
              last_movement_at: null,
            },
          ];

      return {
        ...prev,
        outlet_stocks: nextStocks,
      };
    });
  };

  const getStockValue = (outletId: number, field: "qty_on_hand" | "qty_reserved") => {
    const stock = form.outlet_stocks?.find((item) => item.outlet_id === outletId);
    return String(stock?.[field] ?? 0);
  };

  return (
    <PermissionWrapper permission="raw_materials.view">
      <div className="space-y-5">
        <PageHeader
          title="Bahan Baku"
          description="Kelola bahan baku, minimum stok, harga, dan saldo awal per outlet."
          actions={<Button onClick={openCreate}>Tambah Bahan Baku</Button>}
        />

        <Card>
          <div className="grid gap-4 lg:grid-cols-[1.4fr_1fr_1fr]">
            <Input
              label="Pencarian"
              placeholder="Cari nama, kode, atau SKU..."
              value={search}
              onChange={(event) => setSearch(event.target.value)}
            />

            <div>
              <label className="mb-2 block text-sm font-medium text-slate-700">
                Kategori
              </label>
              <select
                className={selectClassName}
                value={categoryFilter}
                onChange={(event) =>
                  setCategoryFilter(event.target.value ? Number(event.target.value) : "")
                }
              >
                <option value="">Semua kategori</option>
                {categories.map((category) => (
                  <option key={category.id} value={category.id}>
                    {category.name}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-slate-700">
                Satuan
              </label>
              <select
                className={selectClassName}
                value={unitFilter}
                onChange={(event) =>
                  setUnitFilter(event.target.value ? Number(event.target.value) : "")
                }
              >
                <option value="">Semua satuan</option>
                {units.map((unit) => (
                  <option key={unit.id} value={unit.id}>
                    {unit.name} ({unit.code})
                  </option>
                ))}
              </select>
            </div>
          </div>
        </Card>

        {rawMaterialsQuery.isLoading ? (
          <Card>
            <div className="flex min-h-40 items-center justify-center text-sm text-[var(--color-muted)]">
              Memuat bahan baku...
            </div>
          </Card>
        ) : rawMaterialsQuery.isError ? (
          <PageErrorState onRetry={() => void rawMaterialsQuery.refetch()} />
        ) : !rawMaterials.length ? (
          <PageEmptyState title="Belum ada bahan baku" />
        ) : (
          <div className="grid gap-4 xl:grid-cols-2">
            {rawMaterials.map((rawMaterial) => (
              <Card
                key={rawMaterial.id}
                title={rawMaterial.name}
                description={`${rawMaterial.code ?? "-"} / ${rawMaterial.sku ?? "-"}`}
                actions={
                  <Badge variant={rawMaterial.is_active ? "success" : "danger"}>
                    {rawMaterial.is_active ? "Aktif" : "Nonaktif"}
                  </Badge>
                }
              >
                <div className="grid gap-3 text-sm text-slate-600 sm:grid-cols-2">
                  <div className="rounded-xl border border-slate-200 bg-slate-50 px-3 py-2">
                    <div className="text-xs font-medium uppercase tracking-wide text-slate-500">
                      Kategori
                    </div>
                    <div className="mt-1 font-semibold text-slate-900">
                      {rawMaterial.category?.name ?? "-"}
                    </div>
                  </div>

                  <div className="rounded-xl border border-slate-200 bg-slate-50 px-3 py-2">
                    <div className="text-xs font-medium uppercase tracking-wide text-slate-500">
                      Satuan
                    </div>
                    <div className="mt-1 font-semibold text-slate-900">
                      {rawMaterial.unit?.code ?? "-"}
                    </div>
                  </div>

                  <div className="rounded-xl border border-slate-200 bg-white px-3 py-2">
                    <div className="text-xs font-medium uppercase tracking-wide text-slate-500">
                      Minimum Stok
                    </div>
                    <div className="mt-1 font-semibold text-slate-900">
                      {formatNumber(rawMaterial.minimum_stock)}
                    </div>
                  </div>

                  <div className="rounded-xl border border-slate-200 bg-white px-3 py-2">
                    <div className="text-xs font-medium uppercase tracking-wide text-slate-500">
                      Average Cost
                    </div>
                    <div className="mt-1 font-semibold text-slate-900">
                      {formatCurrency(rawMaterial.average_cost)}
                    </div>
                  </div>

                  <div className="rounded-xl border border-orange-100 bg-[var(--brand-brick-soft)] px-3 py-2 sm:col-span-2">
                    <div className="text-xs font-medium uppercase tracking-wide text-[var(--brand-brick)]">
                      Harga Beli Terakhir
                    </div>
                    <div className="mt-1 font-semibold text-slate-900">
                      {formatCurrency(rawMaterial.last_purchase_price)}
                    </div>
                  </div>
                </div>

                <div className="mt-4 flex flex-col gap-2 border-t border-slate-100 pt-4 sm:flex-row sm:justify-end">
                  <Button variant="outline" onClick={() => openEdit(rawMaterial)}>
                    Edit
                  </Button>
                  <Button
                    variant="danger"
                    loading={deleteMutation.isPending}
                    onClick={() => deleteMutation.mutate(rawMaterial.id)}
                  >
                    Hapus
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        )}

        <Modal
          open={openModal}
          title={editingRawMaterial ? "Edit Bahan Baku" : "Tambah Bahan Baku"}
          onClose={() => setOpenModal(false)}
          footer={
            <>
              <Button variant="outline" onClick={() => setOpenModal(false)}>
                Batal
              </Button>
              <Button loading={saveMutation.isPending} onClick={() => saveMutation.mutate(form)}>
                Simpan
              </Button>
            </>
          }
        >
          <div className="max-h-[72vh] space-y-5 overflow-y-auto pr-1">
            <div className="rounded-2xl border border-slate-200 bg-white p-4">
              <div className="mb-4">
                <h3 className="text-sm font-semibold text-slate-900">
                  Informasi Bahan Baku
                </h3>
                <p className="mt-1 text-xs text-slate-500">
                  Lengkapi kategori, satuan, kode, nama, dan informasi biaya bahan baku.
                </p>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-700">
                    Kategori
                  </label>
                  <select
                    className={selectClassName}
                    value={form.raw_material_category_id || ""}
                    onChange={(event) =>
                      setForm((prev) => ({
                        ...prev,
                        raw_material_category_id: Number(event.target.value || 0),
                      }))
                    }
                  >
                    <option value="">Pilih kategori</option>
                    {categories.map((category) => (
                      <option key={category.id} value={category.id}>
                        {category.name}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-700">
                    Satuan
                  </label>
                  <select
                    className={selectClassName}
                    value={form.unit_id || ""}
                    onChange={(event) =>
                      setForm((prev) => ({
                        ...prev,
                        unit_id: Number(event.target.value || 0),
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
                  label="Kode"
                  value={form.code ?? ""}
                  onChange={(event) =>
                    setForm((prev) => ({ ...prev, code: event.target.value }))
                  }
                />

                <Input
                  label="SKU"
                  value={form.sku ?? ""}
                  onChange={(event) =>
                    setForm((prev) => ({ ...prev, sku: event.target.value }))
                  }
                />

                <Input
                  label="Nama Bahan Baku"
                  value={form.name}
                  onChange={(event) =>
                    setForm((prev) => ({ ...prev, name: event.target.value }))
                  }
                />

                <Input
                  label="Minimum Stok"
                  type="number"
                  value={String(form.minimum_stock ?? 0)}
                  onChange={(event) =>
                    setForm((prev) => ({
                      ...prev,
                      minimum_stock: Number(event.target.value || 0),
                    }))
                  }
                />

                <Input
                  label="Harga Beli Terakhir"
                  type="number"
                  value={String(form.last_purchase_price ?? 0)}
                  onChange={(event) =>
                    setForm((prev) => ({
                      ...prev,
                      last_purchase_price: Number(event.target.value || 0),
                    }))
                  }
                />

                <Input
                  label="Average Cost"
                  type="number"
                  value={String(form.average_cost ?? 0)}
                  onChange={(event) =>
                    setForm((prev) => ({
                      ...prev,
                      average_cost: Number(event.target.value || 0),
                    }))
                  }
                />

                <div className="md:col-span-2">
                  <Input
                    label="Deskripsi"
                    value={form.description ?? ""}
                    onChange={(event) =>
                      setForm((prev) => ({ ...prev, description: event.target.value }))
                    }
                  />
                </div>

                <div className="md:col-span-2 rounded-xl border border-slate-200 bg-slate-50 px-4 py-3">
                  <Checkbox
                    label="Bahan baku aktif"
                    checked={Boolean(form.is_active)}
                    onChange={(event) =>
                      setForm((prev) => ({ ...prev, is_active: event.target.checked }))
                    }
                  />
                </div>
              </div>
            </div>

            <Card title="Saldo Awal Per Outlet" description="Atur stok awal bahan baku untuk setiap outlet.">
              <div className="space-y-3">
                {outlets.map((outlet) => (
                  <div
                    key={outlet.id}
                    className="grid gap-3 rounded-2xl border border-slate-200 bg-slate-50/70 p-4 md:grid-cols-[1.2fr_1fr_1fr]"
                  >
                    <div className="flex min-w-0 items-center">
                      <div>
                        <div className="truncate text-sm font-semibold text-slate-900">
                          {outlet.name}
                        </div>
                        <div className="mt-1 text-xs text-slate-500">{outlet.code}</div>
                      </div>
                    </div>

                    <Input
                      label="Qty On Hand"
                      type="number"
                      value={getStockValue(outlet.id, "qty_on_hand")}
                      onChange={(event) =>
                        updateStock(outlet.id, "qty_on_hand", Number(event.target.value || 0))
                      }
                    />

                    <Input
                      label="Qty Reserved"
                      type="number"
                      value={getStockValue(outlet.id, "qty_reserved")}
                      onChange={(event) =>
                        updateStock(outlet.id, "qty_reserved", Number(event.target.value || 0))
                      }
                    />
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </Modal>
      </div>
    </PermissionWrapper>
  );
}