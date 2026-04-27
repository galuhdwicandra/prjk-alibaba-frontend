import { ProductConfigPage } from "@/modules/admin/components/product-config/ProductConfigPage";
import {
  ProductModifierGroupsEditor,
  mapModifierGroupsFromProduct,
  sanitizeModifierGroups,
  validateModifierGroups,
} from "@/modules/admin/components/product-config/ProductModifierGroupsEditor";
import type { ProductModifierGroupPayload } from "@/modules/admin/services/catalog.service";
import type { Product } from "@/types/product";

export default function ProductModifiersPage() {
  return (
    <ProductConfigPage<ProductModifierGroupPayload[]>
      title="Product Modifiers"
      description="Kelola modifier group dan option per produk."
      queryKey="admin-product-modifiers"
      emptyTitle="Belum ada produk"
      searchPlaceholder="Cari produk untuk mengatur modifier..."
      saveButtonLabel="Simpan Modifier"
      getBadge={(product: Product) => ({
        label: product.modifier_groups?.length
          ? `${product.modifier_groups.length} group`
          : "Belum ada modifier",
        variant: product.modifier_groups?.length ? "success" : "warning",
      })}
      renderSummary={(product: Product) =>
        (product.modifier_groups ?? []).length ? (
          <div className="space-y-3">
            {product.modifier_groups?.map((group) => (
              <div
                key={group.id}
                className="rounded-2xl border border-slate-200 bg-slate-50/70 p-4 transition-colors hover:border-orange-200 hover:bg-orange-50/40"
              >
                <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                  <div className="min-w-0">
                    <div className="truncate text-sm font-semibold text-slate-900">
                      {group.name}
                    </div>
                    <div className="mt-2 flex flex-wrap gap-2 text-xs">
                      <span className="rounded-full border border-slate-200 bg-white px-2.5 py-1 font-medium text-slate-600">
                        Min {group.min_select ?? 0}
                      </span>
                      <span className="rounded-full border border-slate-200 bg-white px-2.5 py-1 font-medium text-slate-600">
                        Max {group.max_select ?? 1}
                      </span>
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
            Produk ini belum memiliki modifier group.
          </div>
        )
      }
      mapFromProduct={mapModifierGroupsFromProduct}
      renderEditor={({ value, onChange }) => (
        <ProductModifierGroupsEditor value={value} onChange={onChange} />
      )}
      buildPayload={({ value }) => {
        validateModifierGroups(value);

        return {
          modifier_groups: sanitizeModifierGroups(value),
        };
      }}
    />
  );
}