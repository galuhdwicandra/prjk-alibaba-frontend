import { useState } from "react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { catalogService } from "@/modules/admin/services/catalog.service";
import {
  inventoryService,
  type ProductBomItemPayload,
  type ProductBomPayload,
} from "@/modules/admin/services/inventory.service";
import {
  BomItemsEditor,
  createInitialBomItems,
  sanitizeBomItems,
} from "@/modules/admin/components/inventory/BomItemsEditor";
import { PageHeader } from "@/components/navigation/PageHeader";
import { PermissionWrapper } from "@/components/navigation/PermissionWrapper";
import { PageErrorState } from "@/components/feedback/PageErrorState";
import { PageEmptyState } from "@/components/feedback/PageEmptyState";
import { Badge, Button, Card, Checkbox, Input, Modal } from "@/components/ui";
import { parseApiError } from "@/services/api/error-parser";
import { useToast } from "@/hooks/useToast";
import type { ProductBom } from "@/types/inventory";

interface BomFormState {
  product_id: number;
  version: number;
  is_active: boolean;
  notes: string;
  items: ProductBomItemPayload[];
}

const initialForm: BomFormState = {
  product_id: 0,
  version: 1,
  is_active: true,
  notes: "",
  items: createInitialBomItems(),
};

export default function ProductBomsPage() {
  const toast = useToast();
  const queryClient = useQueryClient();

  const [search, setSearch] = useState("");
  const [productFilter, setProductFilter] = useState<number | "">("");
  const [openModal, setOpenModal] = useState(false);
  const [editingBom, setEditingBom] = useState<ProductBom | null>(null);
  const [form, setForm] = useState<BomFormState>(initialForm);

  const bomsQuery = useQuery({
    queryKey: ["inventory-product-boms", search, productFilter],
    queryFn: () =>
      inventoryService.getProductBoms({
        per_page: 100,
        search,
        product_id: productFilter,
      }),
  });

  const productsQuery = useQuery({
    queryKey: ["inventory-bom-products"],
    queryFn: () => catalogService.getProducts({ per_page: 100 }),
  });

  const rawMaterialsQuery = useQuery({
    queryKey: ["inventory-bom-raw-materials"],
    queryFn: () => inventoryService.getRawMaterials({ per_page: 100, is_active: true }),
  });

  const unitsQuery = useQuery({
    queryKey: ["inventory-bom-units"],
    queryFn: () => inventoryService.getUnits({ per_page: 100 }),
  });

  const boms = bomsQuery.data?.items ?? [];
  const products = productsQuery.data?.items ?? [];
  const rawMaterials = rawMaterialsQuery.data?.items ?? [];
  const units = unitsQuery.data?.items ?? [];

  const saveMutation = useMutation({
    mutationFn: (payload: ProductBomPayload) =>
      editingBom
        ? inventoryService.updateProductBom(editingBom.id, payload)
        : inventoryService.createProductBom(payload),
    onSuccess: (response) => {
      toast.success(response.message);
      setOpenModal(false);
      setEditingBom(null);
      setForm(initialForm);
      void queryClient.invalidateQueries({ queryKey: ["inventory-product-boms"] });
    },
    onError: (error) => toast.error("Gagal menyimpan BOM produk", parseApiError(error)),
  });

  const deleteMutation = useMutation({
    mutationFn: (id: number) => inventoryService.deleteProductBom(id),
    onSuccess: (response) => {
      toast.success(response.message);
      void queryClient.invalidateQueries({ queryKey: ["inventory-product-boms"] });
    },
    onError: (error) => toast.error("Gagal menghapus BOM produk", parseApiError(error)),
  });

  const openCreate = () => {
    setEditingBom(null);
    setForm(initialForm);
    setOpenModal(true);
  };

  const openEdit = (bom: ProductBom) => {
    setEditingBom(bom);
    setForm({
      product_id: bom.product_id,
      version: Number(bom.version ?? 1),
      is_active: bom.is_active,
      notes: bom.notes ?? "",
      items: bom.items?.length
        ? bom.items.map((item) => ({
            raw_material_id: item.raw_material_id,
            unit_id: item.unit_id,
            qty: Number(item.qty ?? 0),
            waste_percent: Number(item.waste_percent ?? 0),
          }))
        : createInitialBomItems(),
    });
    setOpenModal(true);
  };

  const submitForm = () => {
    const payload: ProductBomPayload = {
      product_id: form.product_id,
      version: form.version,
      is_active: form.is_active,
      notes: form.notes || null,
      items: sanitizeBomItems(form.items),
    };

    saveMutation.mutate(payload);
  };

  return (
    <PermissionWrapper permission="product_boms.view">
      <div className="space-y-4">
        <PageHeader
          title="BOM / Resep Produk"
          description="Kelola komposisi bahan baku untuk setiap produk."
          actions={<Button onClick={openCreate}>Tambah BOM</Button>}
        />

        <Card>
          <div className="grid gap-4 md:grid-cols-2">
            <Input
              placeholder="Cari BOM..."
              value={search}
              onChange={(event) => setSearch(event.target.value)}
            />

            <select
              className="w-full rounded-xl border border-slate-300 px-3 py-2 text-sm"
              value={productFilter}
              onChange={(event) =>
                setProductFilter(event.target.value ? Number(event.target.value) : "")
              }
            >
              <option value="">Semua produk</option>
              {products.map((product) => (
                <option key={product.id} value={product.id}>
                  {product.name}
                </option>
              ))}
            </select>
          </div>
        </Card>

        {bomsQuery.isLoading ? (
          <Card>Memuat BOM produk...</Card>
        ) : bomsQuery.isError ? (
          <PageErrorState onRetry={() => void bomsQuery.refetch()} />
        ) : !boms.length ? (
          <PageEmptyState title="Belum ada BOM produk" />
        ) : (
          <div className="grid gap-4 lg:grid-cols-2">
            {boms.map((bom) => (
              <Card
                key={bom.id}
                title={bom.product?.name ?? "-"}
                description={`Versi ${bom.version}`}
                actions={
                  <Badge variant={bom.is_active ? "success" : "default"}>
                    {bom.is_active ? "Aktif" : "Nonaktif"}
                  </Badge>
                }
              >
                <div className="space-y-2 text-sm text-slate-600">
                  <div>Catatan: {bom.notes ?? "-"}</div>
                  <div>Jumlah Item: {bom.items?.length ?? 0}</div>
                  <div className="space-y-1">
                    {(bom.items ?? []).slice(0, 5).map((item) => (
                      <div key={item.id}>
                        {item.raw_material?.name ?? item.rawMaterial?.name ?? "-"} —{" "}
                        {Number(item.qty ?? 0).toLocaleString("id-ID")}{" "}
                        {item.unit?.code ?? ""}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-4 flex flex-wrap gap-2">
                  <Button variant="outline" onClick={() => openEdit(bom)}>
                    Edit
                  </Button>
                  <Button
                    variant="danger"
                    loading={deleteMutation.isPending}
                    onClick={() => deleteMutation.mutate(bom.id)}
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
          title={editingBom ? "Edit BOM Produk" : "Tambah BOM Produk"}
          onClose={() => setOpenModal(false)}
          footer={
            <>
              <Button variant="outline" onClick={() => setOpenModal(false)}>
                Batal
              </Button>
              <Button loading={saveMutation.isPending} onClick={submitForm}>
                Simpan
              </Button>
            </>
          }
        >
          <div className="max-h-[70vh] space-y-5 overflow-y-auto pr-1">
            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700">
                  Produk
                </label>
                <select
                  className="w-full rounded-xl border border-slate-300 px-3 py-2 text-sm"
                  value={form.product_id || ""}
                  onChange={(event) =>
                    setForm((prev) => ({
                      ...prev,
                      product_id: Number(event.target.value || 0),
                    }))
                  }
                >
                  <option value="">Pilih produk</option>
                  {products.map((product) => (
                    <option key={product.id} value={product.id}>
                      {product.name}
                    </option>
                  ))}
                </select>
              </div>

              <Input
                label="Versi"
                type="number"
                value={String(form.version)}
                onChange={(event) =>
                  setForm((prev) => ({
                    ...prev,
                    version: Number(event.target.value || 1),
                  }))
                }
              />

              <Input
                label="Catatan"
                value={form.notes}
                onChange={(event) =>
                  setForm((prev) => ({
                    ...prev,
                    notes: event.target.value,
                  }))
                }
              />

              <div className="flex items-end">
                <Checkbox
                  label="BOM aktif"
                  checked={form.is_active}
                  onChange={(event) =>
                    setForm((prev) => ({
                      ...prev,
                      is_active: event.target.checked,
                    }))
                  }
                />
              </div>
            </div>

            <BomItemsEditor
              value={form.items}
              onChange={(items) => setForm((prev) => ({ ...prev, items }))}
              rawMaterials={rawMaterials}
              units={units}
            />
          </div>
        </Modal>
      </div>
    </PermissionWrapper>
  );
}