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
          <div className="space-y-3">
            {product.variant_groups?.map((group) => (
              <div
                key={group.id}
                className="rounded-2xl border border-slate-200 bg-slate-50/70 p-4 transition-colors hover:border-orange-200 hover:bg-orange-50/40"
              >
                <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                  <div className="min-w-0">
                    <div className="truncate text-sm font-semibold text-slate-900">
                      {group.name}
                    </div>
                    <div className="mt-1 text-xs font-medium uppercase tracking-wide text-[var(--brand-brick)]">
                      {group.selection_type}
                    </div>
                  </div>

                  <div className="shrink-0 rounded-full border border-slate-200 bg-white px-2.5 py-1 text-xs font-semibold text-slate-600">
                    {group.options?.length ?? 0} option
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="rounded-2xl border border-dashed border-amber-200 bg-amber-50/60 px-4 py-3 text-sm text-amber-700">
            Produk ini belum memiliki variant group.
          </div>
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