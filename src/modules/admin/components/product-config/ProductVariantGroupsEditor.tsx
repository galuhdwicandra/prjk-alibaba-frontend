import { Button, Card, Checkbox, Input } from "@/components/ui";
import type { ProductVariantGroupPayload } from "@/modules/admin/services/catalog.service";

interface ProductVariantGroupsEditorProps {
  value: ProductVariantGroupPayload[];
  onChange: (next: ProductVariantGroupPayload[]) => void;
}

const createEmptyVariantGroup = (): ProductVariantGroupPayload => ({
  name: "",
  selection_type: "single",
  is_required: true,
  sort_order: 0,
  options: [
    {
      name: "",
      price_adjustment: 0,
      sort_order: 0,
      is_active: true,
    },
  ],
});

export function ProductVariantGroupsEditor({
  value,
  onChange,
}: ProductVariantGroupsEditorProps) {
  const updateGroups = (updater: (prev: ProductVariantGroupPayload[]) => ProductVariantGroupPayload[]) => {
    onChange(updater(value));
  };

  return (
    <div className="space-y-4">
      {value.map((group, groupIndex) => (
        <Card key={groupIndex} title={`Variant Group #${groupIndex + 1}`}>
          <div className="grid gap-4 md:grid-cols-3">
            <Input
              label="Nama Group"
              value={group.name}
              onChange={(e) =>
                updateGroups((prev) => {
                  const next = [...prev];
                  next[groupIndex] = { ...next[groupIndex], name: e.target.value };
                  return next;
                })
              }
            />

            <div>
              <label className="mb-2 block text-sm font-medium text-slate-700">
                Selection Type
              </label>
              <select
                className="w-full rounded-xl border border-slate-300 px-3 py-2 text-sm"
                value={group.selection_type}
                onChange={(e) =>
                  updateGroups((prev) => {
                    const next = [...prev];
                    next[groupIndex] = {
                      ...next[groupIndex],
                      selection_type: e.target.value as "single" | "multiple",
                    };
                    return next;
                  })
                }
              >
                <option value="single">single</option>
                <option value="multiple">multiple</option>
              </select>
            </div>

            <div className="flex items-end">
              <Button
                variant="danger"
                onClick={() => updateGroups((prev) => prev.filter((_, idx) => idx !== groupIndex))}
              >
                Hapus Group
              </Button>
            </div>

            <Input
              label="Sort Order"
              type="number"
              value={String(group.sort_order ?? 0)}
              onChange={(e) =>
                updateGroups((prev) => {
                  const next = [...prev];
                  next[groupIndex] = {
                    ...next[groupIndex],
                    sort_order: Number(e.target.value || 0),
                  };
                  return next;
                })
              }
            />

            <div className="md:col-span-2 flex items-end">
              <Checkbox
                label="Required"
                checked={Boolean(group.is_required)}
                onChange={(e) =>
                  updateGroups((prev) => {
                    const next = [...prev];
                    next[groupIndex] = {
                      ...next[groupIndex],
                      is_required: e.target.checked,
                    };
                    return next;
                  })
                }
              />
            </div>
          </div>

          <div className="mt-4 space-y-3">
            {group.options.map((option, optionIndex) => (
              <div
                key={optionIndex}
                className="grid gap-3 rounded-2xl border border-slate-200 p-4 md:grid-cols-4"
              >
                <Input
                  label="Option Name"
                  value={option.name}
                  onChange={(e) =>
                    updateGroups((prev) => {
                      const next = [...prev];
                      const options = [...next[groupIndex].options];
                      options[optionIndex] = {
                        ...options[optionIndex],
                        name: e.target.value,
                      };
                      next[groupIndex] = { ...next[groupIndex], options };
                      return next;
                    })
                  }
                />

                <Input
                  label="Price Adjustment"
                  type="number"
                  value={String(option.price_adjustment ?? 0)}
                  onChange={(e) =>
                    updateGroups((prev) => {
                      const next = [...prev];
                      const options = [...next[groupIndex].options];
                      options[optionIndex] = {
                        ...options[optionIndex],
                        price_adjustment: Number(e.target.value || 0),
                      };
                      next[groupIndex] = { ...next[groupIndex], options };
                      return next;
                    })
                  }
                />

                <Input
                  label="Sort Order"
                  type="number"
                  value={String(option.sort_order ?? 0)}
                  onChange={(e) =>
                    updateGroups((prev) => {
                      const next = [...prev];
                      const options = [...next[groupIndex].options];
                      options[optionIndex] = {
                        ...options[optionIndex],
                        sort_order: Number(e.target.value || 0),
                      };
                      next[groupIndex] = { ...next[groupIndex], options };
                      return next;
                    })
                  }
                />

                <div className="flex items-end">
                  <Button
                    variant="danger"
                    onClick={() =>
                      updateGroups((prev) => {
                        const next = [...prev];
                        next[groupIndex] = {
                          ...next[groupIndex],
                          options: next[groupIndex].options.filter((_, idx) => idx !== optionIndex),
                        };
                        return next;
                      })
                    }
                  >
                    Hapus Option
                  </Button>
                </div>

                <div className="md:col-span-4">
                  <Checkbox
                    label="Option aktif"
                    checked={Boolean(option.is_active)}
                    onChange={(e) =>
                      updateGroups((prev) => {
                        const next = [...prev];
                        const options = [...next[groupIndex].options];
                        options[optionIndex] = {
                          ...options[optionIndex],
                          is_active: e.target.checked,
                        };
                        next[groupIndex] = { ...next[groupIndex], options };
                        return next;
                      })
                    }
                  />
                </div>
              </div>
            ))}

            <Button
              variant="outline"
              onClick={() =>
                updateGroups((prev) => {
                  const next = [...prev];
                  next[groupIndex] = {
                    ...next[groupIndex],
                    options: [
                      ...next[groupIndex].options,
                      {
                        name: "",
                        price_adjustment: 0,
                        sort_order: 0,
                        is_active: true,
                      },
                    ],
                  };
                  return next;
                })
              }
            >
              Tambah Option Variant
            </Button>
          </div>
        </Card>
      ))}

      <Button variant="outline" onClick={() => onChange([...(value ?? []), createEmptyVariantGroup()])}>
        Tambah Variant Group
      </Button>
    </div>
  );
}

export function mapVariantGroupsFromProduct(product: {
  variant_groups?: Array<{
    name: string;
    selection_type: "single" | "multiple";
    is_required?: boolean;
    sort_order?: number;
    options?: Array<{
      name: string;
      price_adjustment?: number | string;
      sort_order?: number;
      is_active?: boolean;
    }>;
  }>;
}): ProductVariantGroupPayload[] {
  if (!product.variant_groups?.length) {
    return [createEmptyVariantGroup()];
  }

  return product.variant_groups.map((group) => ({
    name: group.name,
    selection_type: group.selection_type,
    is_required: group.is_required ?? true,
    sort_order: group.sort_order ?? 0,
    options:
      group.options?.map((option) => ({
        name: option.name,
        price_adjustment: Number(option.price_adjustment ?? 0),
        sort_order: option.sort_order ?? 0,
        is_active: option.is_active ?? true,
      })) ?? [],
  }));
}

export function sanitizeVariantGroups(value: ProductVariantGroupPayload[]): ProductVariantGroupPayload[] {
  return (value ?? [])
    .filter((group) => group.name.trim() !== "")
    .map((group) => ({
      ...group,
      options: (group.options ?? []).filter((option) => option.name.trim() !== ""),
    }))
    .filter((group) => group.options.length > 0);
}