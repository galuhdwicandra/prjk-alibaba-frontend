import { Button, Card, Checkbox, Input } from "@/components/ui";
import type { ProductModifierGroupPayload } from "@/modules/admin/services/catalog.service";

interface ProductModifierGroupsEditorProps {
  value: ProductModifierGroupPayload[];
  onChange: (next: ProductModifierGroupPayload[]) => void;
}

const createEmptyModifierGroup = (): ProductModifierGroupPayload => ({
  name: "",
  min_select: 0,
  max_select: 1,
  is_required: false,
  sort_order: 0,
  options: [
    {
      name: "",
      price: 0,
      sort_order: 0,
      is_active: true,
    },
  ],
});

export function ProductModifierGroupsEditor({
  value,
  onChange,
}: ProductModifierGroupsEditorProps) {
  const updateGroups = (
    updater: (prev: ProductModifierGroupPayload[]) => ProductModifierGroupPayload[]
  ) => {
    onChange(updater(value));
  };

  return (
    <div className="space-y-4">
      {value.map((group, groupIndex) => (
        <Card key={groupIndex} title={`Modifier Group #${groupIndex + 1}`}>
          <div className="grid gap-4 md:grid-cols-4">
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

            <Input
              label="Min Select"
              type="number"
              value={String(group.min_select ?? 0)}
              onChange={(e) =>
                updateGroups((prev) => {
                  const next = [...prev];
                  next[groupIndex] = {
                    ...next[groupIndex],
                    min_select: Number(e.target.value || 0),
                  };
                  return next;
                })
              }
            />

            <Input
              label="Max Select"
              type="number"
              value={String(group.max_select ?? 1)}
              onChange={(e) =>
                updateGroups((prev) => {
                  const next = [...prev];
                  next[groupIndex] = {
                    ...next[groupIndex],
                    max_select: Number(e.target.value || 1),
                  };
                  return next;
                })
              }
            />

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

            <div className="md:col-span-3 flex items-end">
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
                  label="Price"
                  type="number"
                  value={String(option.price ?? 0)}
                  onChange={(e) =>
                    updateGroups((prev) => {
                      const next = [...prev];
                      const options = [...next[groupIndex].options];
                      options[optionIndex] = {
                        ...options[optionIndex],
                        price: Number(e.target.value || 0),
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
                        price: 0,
                        sort_order: 0,
                        is_active: true,
                      },
                    ],
                  };
                  return next;
                })
              }
            >
              Tambah Option Modifier
            </Button>
          </div>
        </Card>
      ))}

      <Button variant="outline" onClick={() => onChange([...(value ?? []), createEmptyModifierGroup()])}>
        Tambah Modifier Group
      </Button>
    </div>
  );
}

export function mapModifierGroupsFromProduct(product: {
  modifier_groups?: Array<{
    name: string;
    min_select?: number;
    max_select?: number;
    is_required?: boolean;
    sort_order?: number;
    options?: Array<{
      name: string;
      price?: number | string;
      sort_order?: number;
      is_active?: boolean;
    }>;
  }>;
}): ProductModifierGroupPayload[] {
  if (!product.modifier_groups?.length) {
    return [createEmptyModifierGroup()];
  }

  return product.modifier_groups.map((group) => ({
    name: group.name,
    min_select: group.min_select ?? 0,
    max_select: group.max_select ?? 1,
    is_required: group.is_required ?? false,
    sort_order: group.sort_order ?? 0,
    options:
      group.options?.map((option) => ({
        name: option.name,
        price: Number(option.price ?? 0),
        sort_order: option.sort_order ?? 0,
        is_active: option.is_active ?? true,
      })) ?? [],
  }));
}

export function sanitizeModifierGroups(
  value: ProductModifierGroupPayload[]
): ProductModifierGroupPayload[] {
  return (value ?? [])
    .filter((group) => group.name.trim() !== "")
    .map((group) => ({
      ...group,
      options: (group.options ?? []).filter((option) => option.name.trim() !== ""),
    }))
    .filter((group) => group.options.length > 0);
}

export function validateModifierGroups(value: ProductModifierGroupPayload[]) {
  const invalidGroup = (value ?? []).find(
    (group) => Number(group.max_select ?? 0) < Number(group.min_select ?? 0)
  );

  if (invalidGroup) {
    throw new Error("max_select tidak boleh lebih kecil dari min_select.");
  }
}