import { Button, Card, Input } from "@/components/ui";
import type { ProductBundleItemPayload } from "@/modules/admin/services/catalog.service";
import type { Product } from "@/types/product";

interface ProductBundleItemsEditorProps {
  value: ProductBundleItemPayload[];
  onChange: (next: ProductBundleItemPayload[]) => void;
  productOptions: Product[];
}

const createEmptyBundleItem = (): ProductBundleItemPayload => ({
  bundled_product_id: 0,
  qty: 1,
});

export function ProductBundleItemsEditor({
  value,
  onChange,
  productOptions,
}: ProductBundleItemsEditorProps) {
  const updateItems = (
    updater: (prev: ProductBundleItemPayload[]) => ProductBundleItemPayload[]
  ) => {
    onChange(updater(value));
  };

  return (
    <div className="space-y-4">
      {value.map((item, index) => (
        <Card key={index} title={`Bundle Item #${index + 1}`}>
          <div className="grid gap-4 md:grid-cols-3">
            <div className="md:col-span-2">
              <label className="mb-2 block text-sm font-medium text-slate-700">
                Bundled Product
              </label>
              <select
                className="w-full rounded-xl border border-slate-300 px-3 py-2 text-sm"
                value={item.bundled_product_id || ""}
                onChange={(e) =>
                  updateItems((prev) => {
                    const next = [...prev];
                    next[index] = {
                      ...next[index],
                      bundled_product_id: Number(e.target.value || 0),
                    };
                    return next;
                  })
                }
              >
                <option value="">Pilih produk</option>
                {productOptions.map((product) => (
                  <option key={product.id} value={product.id}>
                    {product.name}
                  </option>
                ))}
              </select>
            </div>

            <Input
              label="Qty"
              type="number"
              value={String(item.qty ?? 1)}
              onChange={(e) =>
                updateItems((prev) => {
                  const next = [...prev];
                  next[index] = {
                    ...next[index],
                    qty: Number(e.target.value || 1),
                  };
                  return next;
                })
              }
            />

            <div className="md:col-span-3">
              <Button
                variant="danger"
                onClick={() => updateItems((prev) => prev.filter((_, idx) => idx !== index))}
              >
                Hapus Item
              </Button>
            </div>
          </div>
        </Card>
      ))}

      <Button variant="outline" onClick={() => onChange([...(value ?? []), createEmptyBundleItem()])}>
        Tambah Bundle Item
      </Button>
    </div>
  );
}

export function mapBundleItemsFromProduct(product: {
  bundle_items?: Array<{
    bundled_product_id: number;
    qty?: number | string;
  }>;
}): ProductBundleItemPayload[] {
  if (!product.bundle_items?.length) {
    return [createEmptyBundleItem()];
  }

  return product.bundle_items.map((item) => ({
    bundled_product_id: item.bundled_product_id,
    qty: Number(item.qty ?? 1),
  }));
}

export function sanitizeBundleItems(value: ProductBundleItemPayload[]): ProductBundleItemPayload[] {
  return (value ?? []).filter((item) => item.bundled_product_id > 0);
}

export function validateBundleItems(
  value: ProductBundleItemPayload[],
  currentProductId: number
) {
  const sanitized = sanitizeBundleItems(value);

  if (!sanitized.length) {
    throw new Error("Produk bundle wajib memiliki minimal satu bundle item.");
  }

  const selfIncluded = sanitized.some(
    (item) => Number(item.bundled_product_id) === Number(currentProductId)
  );

  if (selfIncluded) {
    throw new Error("Produk bundle tidak boleh membundle dirinya sendiri.");
  }
}