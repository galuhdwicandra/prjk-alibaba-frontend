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
  const updateGroups = (
    updater: (prev: ProductVariantGroupPayload[]) => ProductVariantGroupPayload[]
  ) => {
    onChange(updater(value));
  };

  return (
    <div className="space-y-5">
      {value.map((group, groupIndex) => (
        <Card key={groupIndex} title={`Variant Group #${groupIndex + 1}`}>
          <div className="space-y-5">
            <div className="rounded-2xl border border-[var(--color-border)] bg-white p-4 shadow-sm">
              <div className="mb-4 flex flex-col gap-2 border-b border-slate-100 pb-4 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <h3 className="text-sm font-semibold text-[var(--color-text)]">
                    Pengaturan Group Variant
                  </h3>
                  <p className="mt-1 text-xs leading-5 text-[var(--color-muted)]">
                    Atur nama group, tipe pilihan, urutan tampil, dan status wajib pilih.
                  </p>
                </div>

                <Button
                  variant="danger"
                  onClick={() =>
                    updateGroups((prev) => prev.filter((_, idx) => idx !== groupIndex))
                  }
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

                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-700">
                    Selection Type
                  </label>
                  <select
                    className="w-full rounded-xl border border-slate-300 bg-white px-3 py-2 text-sm text-slate-800 shadow-sm outline-none transition focus:border-[var(--brand-brick)] focus:ring-2 focus:ring-orange-100"
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

                <div className="md:col-span-4">
                  <div className="rounded-xl border border-orange-100 bg-[var(--brand-brick-soft)] px-4 py-3">
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
            </div>

            <div className="rounded-2xl border border-[var(--color-border)] bg-slate-50/70 p-4">
              <div className="mb-4 flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <h3 className="text-sm font-semibold text-[var(--color-text)]">
                    Option Variant
                  </h3>
                  <p className="mt-1 text-xs leading-5 text-[var(--color-muted)]">
                    Tambahkan pilihan variant beserta penyesuaian harga dan urutan tampil.
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

              <div className="space-y-3">
                {group.options.map((option, optionIndex) => (
                  <div
                    key={optionIndex}
                    className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm"
                  >
                    <div className="mb-4 flex flex-col gap-2 border-b border-slate-100 pb-3 sm:flex-row sm:items-center sm:justify-between">
                      <div>
                        <div className="text-sm font-semibold text-slate-900">
                          Option #{optionIndex + 1}
                        </div>
                        <div className="mt-1 text-xs text-slate-500">
                          {option.is_active ? "Aktif" : "Nonaktif"}
                        </div>
                      </div>

                      <Button
                        variant="danger"
                        onClick={() =>
                          updateGroups((prev) => {
                            const next = [...prev];
                            next[groupIndex] = {
                              ...next[groupIndex],
                              options: next[groupIndex].options.filter(
                                (_, idx) => idx !== optionIndex
                              ),
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
          </div>
        </Card>
      ))}

      <div className="rounded-2xl border border-dashed border-orange-200 bg-orange-50/50 p-4">
        <Button
          variant="outline"
          onClick={() => onChange([...(value ?? []), createEmptyVariantGroup()])}
        >
          Tambah Variant Group
        </Button>
      </div>
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

export function sanitizeVariantGroups(
  value: ProductVariantGroupPayload[]
): ProductVariantGroupPayload[] {
  return (value ?? [])
    .filter((group) => group.name.trim() !== "")
    .map((group) => ({
      ...group,
      options: (group.options ?? []).filter((option) => option.name.trim() !== ""),
    }))
    .filter((group) => group.options.length > 0);
}