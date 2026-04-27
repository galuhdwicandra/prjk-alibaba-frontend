import { ProductConfigPage } from "@/modules/admin/components/product-config/ProductConfigPage";
import {
  ProductBundleItemsEditor,
  mapBundleItemsFromProduct,
  sanitizeBundleItems,
  validateBundleItems,
} from "@/modules/admin/components/product-config/ProductBundleItemsEditor";
import type { ProductBundleItemPayload } from "@/modules/admin/services/catalog.service";
import type { Product } from "@/types/product";

export default function ProductBundlesPage() {
  return (
    <ProductConfigPage<ProductBundleItemPayload[]>
      title="Product Bundles"
      description="Kelola paket atau combo product."
      queryKey="admin-product-bundles"
      emptyTitle="Belum ada produk bundle"
      searchPlaceholder="Cari produk bundle..."
      saveButtonLabel="Simpan Bundle"
      filterProducts={(products) => products.filter((product) => product.product_type === "bundle")}
      getBadge={() => ({
        label: "bundle",
        variant: "warning",
      })}
      renderSummary={(product: Product) =>
        (product.bundle_items ?? []).length ? (
          <div className="space-y-3">
            {product.bundle_items?.map((item) => (
              <div
                key={item.id}
                className="rounded-2xl border border-slate-200 bg-slate-50/70 p-4 transition-colors hover:border-orange-200 hover:bg-orange-50/40"
              >
                <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                  <div className="min-w-0">
                    <div className="truncate text-sm font-semibold text-slate-900">
                      {item.bundled_product?.name ?? `Produk #${item.bundled_product_id}`}
                    </div>
                    <div className="mt-1 text-xs font-medium text-slate-500">
                      Item dalam paket
                    </div>
                  </div>

                  <div className="shrink-0 rounded-full border border-amber-200 bg-amber-50 px-2.5 py-1 text-xs font-semibold text-amber-700">
                    Qty {item.qty}
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="rounded-2xl border border-dashed border-amber-200 bg-amber-50/60 px-4 py-3 text-sm text-amber-700">
            Produk bundle ini belum punya item.
          </div>
        )
      }
      mapFromProduct={mapBundleItemsFromProduct}
      renderEditor={({ value, onChange, product, products }) => (
        <ProductBundleItemsEditor
          value={value}
          onChange={onChange}
          productOptions={products.filter((item) => item.id !== product?.id)}
        />
      )}
      buildPayload={({ value, product }) => {
        validateBundleItems(value, product.id);

        return {
          product_type: "bundle",
          bundle_items: sanitizeBundleItems(value),
        };
      }}
    />
  );
}