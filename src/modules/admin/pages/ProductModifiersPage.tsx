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
          <>
            {product.modifier_groups?.map((group) => (
              <div key={group.id} className="rounded-xl border border-slate-200 p-3">
                <div className="font-medium text-slate-800">{group.name}</div>
                <div className="mt-1 text-xs text-slate-500">
                  min: {group.min_select ?? 0} • max: {group.max_select ?? 1} • option:{" "}
                  {group.options?.length ?? 0}
                </div>
              </div>
            ))}
          </>
        ) : (
          <div>Produk ini belum memiliki modifier group.</div>
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