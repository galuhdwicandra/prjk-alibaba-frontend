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
          <>
            {product.bundle_items?.map((item) => (
              <div key={item.id} className="rounded-xl border border-slate-200 p-3">
                <div className="font-medium text-slate-800">
                  {item.bundled_product?.name ?? `Produk #${item.bundled_product_id}`}
                </div>
                <div className="mt-1 text-xs text-slate-500">Qty: {item.qty}</div>
              </div>
            ))}
          </>
        ) : (
          <div>Produk bundle ini belum punya item.</div>
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