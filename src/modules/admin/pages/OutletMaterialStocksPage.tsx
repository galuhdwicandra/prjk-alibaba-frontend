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

  return (
    <PermissionWrapper permission="outlet_material_stocks.view">
      <div className="space-y-4">
        <PageHeader
          title="Stok Bahan Per Outlet"
          description="Pantau dan update saldo stok bahan baku per outlet."
          actions={<Button onClick={openCreate}>Update Stok</Button>}
        />

        <Card>
          <div className="grid gap-4 md:grid-cols-3">
            <Input
              placeholder="Cari bahan atau outlet..."
              value={search}
              onChange={(event) => setSearch(event.target.value)}
            />

            <select
              className="w-full rounded-xl border border-slate-300 px-3 py-2 text-sm"
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

            <select
              className="w-full rounded-xl border border-slate-300 px-3 py-2 text-sm"
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
        </Card>

        {stocksQuery.isLoading ? (
          <Card>Memuat stok bahan per outlet...</Card>
        ) : stocksQuery.isError ? (
          <PageErrorState onRetry={() => void stocksQuery.refetch()} />
        ) : !stocks.length ? (
          <PageEmptyState title="Belum ada data stok outlet" />
        ) : (
          <div className="grid gap-4 lg:grid-cols-2">
            {stocks.map((stock) => {
              const rawMaterial = getRawMaterial(stock);

              return (
                <Card
                  key={stock.id}
                  title={rawMaterial?.name ?? "-"}
                  description={stock.outlet?.name ?? "-"}
                  actions={
                    <Badge variant={getStockVariant(stock)}>
                      {getStockVariant(stock) === "danger" ? "Low Stock" : "Aman"}
                    </Badge>
                  }
                >
                  <div className="grid gap-3 text-sm text-slate-600 md:grid-cols-2">
                    <div>
                      <div className="text-xs text-slate-500">Qty On Hand</div>
                      <div className="text-lg font-semibold text-slate-900">
                        {Number(stock.qty_on_hand ?? 0).toLocaleString("id-ID")}{" "}
                        {rawMaterial?.unit?.code ?? ""}
                      </div>
                    </div>

                    <div>
                      <div className="text-xs text-slate-500">Qty Reserved</div>
                      <div className="text-lg font-semibold text-slate-900">
                        {Number(stock.qty_reserved ?? 0).toLocaleString("id-ID")}{" "}
                        {rawMaterial?.unit?.code ?? ""}
                      </div>
                    </div>

                    <div>
                      <div className="text-xs text-slate-500">Minimum Stok</div>
                      <div>{Number(rawMaterial?.minimum_stock ?? 0).toLocaleString("id-ID")}</div>
                    </div>

                    <div>
                      <div className="text-xs text-slate-500">Last Movement</div>
                      <div>{stock.last_movement_at ?? "-"}</div>
                    </div>
                  </div>

                  <div className="mt-4">
                    <Button variant="outline" onClick={() => openEdit(stock)}>
                      Edit Stok
                    </Button>
                  </div>
                </Card>
              );
            })}
          </div>
        )}

        <Modal
          open={openModal}
          title={editingStock ? "Edit Stok Outlet" : "Update Stok Outlet"}
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
          <div className="grid gap-4 md:grid-cols-2">
            <div>
              <label className="mb-2 block text-sm font-medium text-slate-700">
                Outlet
              </label>
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
                className="w-full rounded-xl border border-slate-300 px-3 py-2 text-sm"
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
        </Modal>
      </div>
    </PermissionWrapper>
  );
}