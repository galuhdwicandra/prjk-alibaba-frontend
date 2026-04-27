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
    <div className="space-y-5">
      {value.map((group, groupIndex) => (
        <Card key={groupIndex}>
          <div className="mb-5 flex flex-col gap-3 border-b border-slate-100 pb-4 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <div className="inline-flex items-center rounded-full border border-orange-200 bg-orange-50 px-2.5 py-1 text-xs font-semibold text-orange-700">
                Modifier Group #{groupIndex + 1}
              </div>
              <h3 className="mt-2 text-base font-semibold text-slate-950">
                {group.name.trim() || "Group belum diberi nama"}
              </h3>
              <p className="mt-1 text-sm text-slate-500">
                Atur pilihan modifier, batas pilihan, status wajib, dan urutan tampil.
              </p>
            </div>

            <Button
              variant="danger"
              onClick={() => updateGroups((prev) => prev.filter((_, idx) => idx !== groupIndex))}
            >
              Hapus Group
            </Button>
          </div>

          <div className="grid gap-4 md:grid-cols-4">
            <div className="md:col-span-2">
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
            </div>

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

            <div className="flex items-end md:col-span-3">
              <div className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3">
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
          </div>

          <div className="mt-6 rounded-2xl border border-slate-200 bg-slate-50/70 p-4">
            <div className="mb-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h4 className="text-sm font-semibold text-slate-950">
                  Modifier Options
                </h4>
                <p className="mt-1 text-xs text-slate-500">
                  Tambahkan pilihan modifier beserta harga tambahan dan urutannya.
                </p>
              </div>

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

            <div className="space-y-3">
              {group.options.map((option, optionIndex) => (
                <div
                  key={optionIndex}
                  className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm"
                >
                  <div className="mb-4 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                      <div className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                        Option #{optionIndex + 1}
                      </div>
                      <div className="mt-1 text-sm font-semibold text-slate-900">
                        {option.name.trim() || "Option belum diberi nama"}
                      </div>
                    </div>

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

                  <div className="grid gap-4 md:grid-cols-3">
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

                    <div className="md:col-span-3">
                      <div className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3">
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
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Card>
      ))}

      <div className="rounded-2xl border border-dashed border-orange-200 bg-orange-50/50 p-4">
        <Button
          variant="outline"
          onClick={() => onChange([...(value ?? []), createEmptyModifierGroup()])}
        >
          Tambah Modifier Group
        </Button>
      </div>
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