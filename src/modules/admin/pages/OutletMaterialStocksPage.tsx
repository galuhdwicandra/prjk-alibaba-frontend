import { useState } from "react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
  inventoryService,
  type OutletMaterialStockPayload,
} from "@/modules/admin/services/inventory.service";
import { masterDataService } from "@/modules/admin/services/master-data.service";
import { PageHeader } from "@/components/navigation/PageHeader";
import { PermissionWrapper } from "@/components/navigation/PermissionWrapper";
import { PageErrorState } from "@/components/feedback/PageErrorState";
import { PageEmptyState } from "@/components/feedback/PageEmptyState";
import { Badge, Button, Card, Input, Modal } from "@/components/ui";
import { parseApiError } from "@/services/api/error-parser";
import { useToast } from "@/hooks/useToast";
import type { OutletMaterialStock } from "@/types/inventory";

const initialForm: OutletMaterialStockPayload = {
  outlet_id: 0,
  raw_material_id: 0,
  qty_on_hand: 0,
  qty_reserved: 0,
  last_movement_at: null,
};

const formatNumber = (value: number | string | null | undefined) =>
  Number(value ?? 0).toLocaleString("id-ID");

const formatDateTime = (value: string | null | undefined) => {
  if (!value) {
    return "-";
  }

  return new Intl.DateTimeFormat("id-ID", {
    dateStyle: "medium",
    timeStyle: "short",
  }).format(new Date(value));
};

export default function OutletMaterialStocksPage() {
  const toast = useToast();
  const queryClient = useQueryClient();

  const [search, setSearch] = useState("");
  const [outletFilter, setOutletFilter] = useState<number | "">("");
  const [rawMaterialFilter, setRawMaterialFilter] = useState<number | "">("");
  const [openModal, setOpenModal] = useState(false);
  const [editingStock, setEditingStock] = useState<OutletMaterialStock | null>(null);
  const [form, setForm] = useState<OutletMaterialStockPayload>(initialForm);

  const stocksQuery = useQuery({
    queryKey: ["inventory-outlet-material-stocks", search, outletFilter, rawMaterialFilter],
    queryFn: () =>
      inventoryService.getOutletMaterialStocks({
        per_page: 100,
        search,
        outlet_id: outletFilter,
        raw_material_id: rawMaterialFilter,
      }),
  });

  const outletsQuery = useQuery({
    queryKey: ["inventory-stock-outlets"],
    queryFn: () => masterDataService.getOutlets({ per_page: 100 }),
  });

  const rawMaterialsQuery = useQuery({
    queryKey: ["inventory-stock-raw-materials"],
    queryFn: () => inventoryService.getRawMaterials({ per_page: 100 }),
  });

  const stocks = stocksQuery.data?.items ?? [];
  const outlets = outletsQuery.data?.items ?? [];
  const rawMaterials = rawMaterialsQuery.data?.items ?? [];

  const saveMutation = useMutation({
    mutationFn: (payload: OutletMaterialStockPayload) =>
      inventoryService.upsertOutletMaterialStock(payload),
    onSuccess: (response) => {
      toast.success(response.message);
      setOpenModal(false);
      setEditingStock(null);
      setForm(initialForm);
      void queryClient.invalidateQueries({
        queryKey: ["inventory-outlet-material-stocks"],
      });
    },
    onError: (error) => toast.error("Gagal menyimpan stok outlet", parseApiError(error)),
  });

  const openCreate = () => {
    setEditingStock(null);
    setForm(initialForm);
    setOpenModal(true);
  };

  const openEdit = (stock: OutletMaterialStock) => {
    setEditingStock(stock);
    setForm({
      outlet_id: stock.outlet_id,
      raw_material_id: stock.raw_material_id,
      qty_on_hand: Number(stock.qty_on_hand ?? 0),
      qty_reserved: Number(stock.qty_reserved ?? 0),
      last_movement_at: stock.last_movement_at ?? null,
    });
    setOpenModal(true);
  };

  const getRawMaterial = (stock: OutletMaterialStock) => {
    return stock.raw_material ?? stock.rawMaterial ?? null;
  };

  const getStockVariant = (stock: OutletMaterialStock) => {
    const rawMaterial = getRawMaterial(stock);
    const minimumStock = Number(rawMaterial?.minimum_stock ?? 0);
    const qtyOnHand = Number(stock.qty_on_hand ?? 0);

    if (qtyOnHand <= minimumStock) {
      return "danger";
    }

    return "success";
  };

  const getAvailableStock = (stock: OutletMaterialStock) => {
    return Number(stock.qty_on_hand ?? 0) - Number(stock.qty_reserved ?? 0);
  };

  return (
    <PermissionWrapper permission="outlet_material_stocks.view">
      <div className="space-y-5">
        <PageHeader
          title="Stok Bahan Per Outlet"
          description="Pantau dan update saldo stok bahan baku per outlet."
          actions={<Button onClick={openCreate}>Update Stok</Button>}
        />

        <Card>
          <div className="grid gap-4 lg:grid-cols-[1.3fr_1fr_1fr_auto] lg:items-end">
            <Input
              label="Pencarian"
              placeholder="Cari bahan atau outlet..."
              value={search}
              onChange={(event) => setSearch(event.target.value)}
            />

            <div>
              <label className="mb-2 block text-sm font-medium text-slate-700">
                Outlet
              </label>
              <select
                className="w-full rounded-xl border border-slate-300 bg-white px-3 py-2 text-sm text-slate-800 shadow-sm outline-none transition focus:border-[var(--brand-brick)] focus:ring-2 focus:ring-orange-100"
                value={outletFilter}
                onChange={(event) =>
                  setOutletFilter(event.target.value ? Number(event.target.value) : "")
                }
              >
                <option value="">Semua outlet</option>
                {outlets.map((outlet) => (
                  <option key={outlet.id} value={outlet.id}>
                    {outlet.name} ({outlet.code})
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-slate-700">
                Bahan Baku
              </label>
              <select
                className="w-full rounded-xl border border-slate-300 bg-white px-3 py-2 text-sm text-slate-800 shadow-sm outline-none transition focus:border-[var(--brand-brick)] focus:ring-2 focus:ring-orange-100"
                value={rawMaterialFilter}
                onChange={(event) =>
                  setRawMaterialFilter(event.target.value ? Number(event.target.value) : "")
                }
              >
                <option value="">Semua bahan</option>
                {rawMaterials.map((rawMaterial) => (
                  <option key={rawMaterial.id} value={rawMaterial.id}>
                    {rawMaterial.name}
                  </option>
                ))}
              </select>
            </div>

            <div className="rounded-xl border border-[var(--color-border)] bg-[var(--brand-brick-soft)] px-4 py-3 text-sm">
              <div className="text-xs font-medium uppercase tracking-wide text-[var(--brand-brick)]">
                Total Data
              </div>
              <div className="mt-1 text-lg font-semibold text-[var(--color-text)]">
                {stocks.length}
              </div>
            </div>
          </div>
        </Card>

        {stocksQuery.isLoading ? (
          <Card>
            <div className="flex min-h-40 items-center justify-center text-sm text-[var(--color-muted)]">
              Memuat stok bahan per outlet...
            </div>
          </Card>
        ) : stocksQuery.isError ? (
          <PageErrorState onRetry={() => void stocksQuery.refetch()} />
        ) : !stocks.length ? (
          <PageEmptyState
            title="Belum ada data stok outlet"
            description="Data stok belum tersedia atau tidak cocok dengan filter yang dipilih."
          />
        ) : (
          <div className="grid gap-4 xl:grid-cols-2">
            {stocks.map((stock) => {
              const rawMaterial = getRawMaterial(stock);
              const stockVariant = getStockVariant(stock);
              const unitCode = rawMaterial?.unit?.code ?? "";
              const minimumStock = Number(rawMaterial?.minimum_stock ?? 0);
              const qtyOnHand = Number(stock.qty_on_hand ?? 0);
              const qtyReserved = Number(stock.qty_reserved ?? 0);
              const availableStock = getAvailableStock(stock);

              return (
                <Card key={stock.id}>
                  <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                    <div className="min-w-0">
                      <div className="flex flex-wrap items-center gap-2">
                        <h3 className="truncate text-base font-semibold text-slate-950">
                          {rawMaterial?.name ?? "-"}
                        </h3>
                        <Badge variant={stockVariant}>
                          {stockVariant === "danger" ? "Low Stock" : "Aman"}
                        </Badge>
                      </div>

                      <div className="mt-1 flex flex-wrap items-center gap-2 text-sm text-slate-500">
                        <span>{stock.outlet?.name ?? "-"}</span>
                        <span className="h-1 w-1 rounded-full bg-slate-300" />
                        <span>{rawMaterial?.category?.name ?? "Tanpa kategori"}</span>
                      </div>
                    </div>

                    <Button variant="outline" onClick={() => openEdit(stock)}>
                      Edit Stok
                    </Button>
                  </div>

                  <div className="mt-5 grid gap-3 sm:grid-cols-3">
                    <div className="rounded-2xl border border-slate-200 bg-white p-4">
                      <div className="text-xs font-medium uppercase tracking-wide text-slate-500">
                        Qty On Hand
                      </div>
                      <div className="mt-2 text-xl font-semibold text-slate-950">
                        {formatNumber(qtyOnHand)}
                      </div>
                      <div className="mt-1 text-xs text-slate-500">{unitCode || "-"}</div>
                    </div>

                    <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                      <div className="text-xs font-medium uppercase tracking-wide text-slate-500">
                        Reserved
                      </div>
                      <div className="mt-2 text-xl font-semibold text-slate-950">
                        {formatNumber(qtyReserved)}
                      </div>
                      <div className="mt-1 text-xs text-slate-500">{unitCode || "-"}</div>
                    </div>

                    <div
                      className={[
                        "rounded-2xl border p-4",
                        stockVariant === "danger"
                          ? "border-red-200 bg-red-50"
                          : "border-emerald-200 bg-emerald-50",
                      ].join(" ")}
                    >
                      <div
                        className={[
                          "text-xs font-medium uppercase tracking-wide",
                          stockVariant === "danger" ? "text-red-600" : "text-emerald-600",
                        ].join(" ")}
                      >
                        Tersedia
                      </div>
                      <div className="mt-2 text-xl font-semibold text-slate-950">
                        {formatNumber(availableStock)}
                      </div>
                      <div className="mt-1 text-xs text-slate-500">{unitCode || "-"}</div>
                    </div>
                  </div>

                  <div className="mt-4 grid gap-3 rounded-2xl border border-slate-200 bg-slate-50/70 p-4 text-sm sm:grid-cols-2">
                    <div>
                      <div className="text-xs font-medium text-slate-500">Minimum Stok</div>
                      <div className="mt-1 font-semibold text-slate-900">
                        {formatNumber(minimumStock)} {unitCode}
                      </div>
                    </div>

                    <div>
                      <div className="text-xs font-medium text-slate-500">Last Movement</div>
                      <div className="mt-1 font-semibold text-slate-900">
                        {formatDateTime(stock.last_movement_at)}
                      </div>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        )}

        <Modal
          open={openModal}
          title={editingStock ? "Edit Stok Outlet" : "Update Stok Outlet"}
          description="Pilih outlet dan bahan baku, lalu isi saldo stok yang tersedia dan sedang reserved."
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
          <div className="space-y-5">
            <div className="rounded-2xl border border-slate-200 bg-white p-4">
              <div className="mb-4">
                <h3 className="text-sm font-semibold text-slate-900">Identitas Stok</h3>
                <p className="mt-1 text-xs text-slate-500">
                  Hubungkan saldo stok dengan outlet dan bahan baku yang sesuai.
                </p>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-700">
                    Outlet
                  </label>
                  <select
                    className="w-full rounded-xl border border-slate-300 bg-white px-3 py-2 text-sm text-slate-800 shadow-sm outline-none transition focus:border-[var(--brand-brick)] focus:ring-2 focus:ring-orange-100"
                    value={form.outlet_id || ""}
                    onChange={(event) =>
                      setForm((prev) => ({
                        ...prev,
                        outlet_id: Number(event.target.value || 0),
                      }))
                    }
                  >
                    <option value="">Pilih outlet</option>
                    {outlets.map((outlet) => (
                      <option key={outlet.id} value={outlet.id}>
                        {outlet.name} ({outlet.code})
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-700">
                    Bahan Baku
                  </label>
                  <select
                    className="w-full rounded-xl border border-slate-300 bg-white px-3 py-2 text-sm text-slate-800 shadow-sm outline-none transition focus:border-[var(--brand-brick)] focus:ring-2 focus:ring-orange-100"
                    value={form.raw_material_id || ""}
                    onChange={(event) =>
                      setForm((prev) => ({
                        ...prev,
                        raw_material_id: Number(event.target.value || 0),
                      }))
                    }
                  >
                    <option value="">Pilih bahan baku</option>
                    {rawMaterials.map((rawMaterial) => (
                      <option key={rawMaterial.id} value={rawMaterial.id}>
                        {rawMaterial.name}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-slate-50/70 p-4">
              <div className="mb-4">
                <h3 className="text-sm font-semibold text-slate-900">Saldo Stok</h3>
                <p className="mt-1 text-xs text-slate-500">
                  Qty on hand adalah saldo fisik. Qty reserved adalah saldo yang sudah dialokasikan.
                </p>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <Input
                  label="Qty On Hand"
                  type="number"
                  value={String(form.qty_on_hand ?? 0)}
                  onChange={(event) =>
                    setForm((prev) => ({
                      ...prev,
                      qty_on_hand: Number(event.target.value || 0),
                    }))
                  }
                />

                <Input
                  label="Qty Reserved"
                  type="number"
                  value={String(form.qty_reserved ?? 0)}
                  onChange={(event) =>
                    setForm((prev) => ({
                      ...prev,
                      qty_reserved: Number(event.target.value || 0),
                    }))
                  }
                />
              </div>
            </div>
          </div>
        </Modal>
      </div>
    </PermissionWrapper>
  );
}