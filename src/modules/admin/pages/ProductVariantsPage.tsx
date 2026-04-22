import { ProductConfigPage } from "@/modules/admin/components/product-config/ProductConfigPage";
import {
  ProductVariantGroupsEditor,
  mapVariantGroupsFromProduct,
  sanitizeVariantGroups,
} from "@/modules/admin/components/product-config/ProductVariantGroupsEditor";
import type { ProductVariantGroupPayload } from "@/modules/admin/services/catalog.service";
import type { Product } from "@/types/product";

export default function ProductVariantsPage() {
  return (
    <ProductConfigPage<ProductVariantGroupPayload[]>
      title="Product Variants"
      description="Kelola variant group dan option per produk."
      queryKey="admin-product-variants"
      emptyTitle="Belum ada produk"
      searchPlaceholder="Cari produk untuk mengatur varian..."
      saveButtonLabel="Simpan Varian"
      getBadge={(product: Product) => ({
        label: product.variant_groups?.length
          ? `${product.variant_groups.length} group`
          : "Belum ada varian",
        variant: product.variant_groups?.length ? "success" : "warning",
      })}
      renderSummary={(product: Product) =>
        (product.variant_groups ?? []).length ? (
          <>
            {product.variant_groups?.map((group) => (
              <div key={group.id} className="rounded-xl border border-slate-200 p-3">
                <div className="font-medium text-slate-800">
                  {group.name} ({group.selection_type})
                </div>
                <div className="mt-1 text-xs text-slate-500">
                  option: {group.options?.length ?? 0}
                </div>
              </div>
            ))}
          </>
        ) : (
          <div>Produk ini belum memiliki variant group.</div>
        )
      }
      mapFromProduct={mapVariantGroupsFromProduct}
      renderEditor={({ value, onChange }) => (
        <ProductVariantGroupsEditor value={value} onChange={onChange} />
      )}
      buildPayload={({ value }) => ({
        variant_groups: sanitizeVariantGroups(value),
      })}
    />
  );
}