import { Button, Card, Input } from "@/components/ui";
import type { ProductBomItemPayload } from "@/modules/admin/services/inventory.service";
import type { RawMaterial, Unit } from "@/types/inventory";

interface BomItemsEditorProps {
  value: ProductBomItemPayload[];
  onChange: (next: ProductBomItemPayload[]) => void;
  rawMaterials: RawMaterial[];
  units: Unit[];
}

const createEmptyBomItem = (): ProductBomItemPayload => ({
  raw_material_id: 0,
  unit_id: 0,
  qty: 1,
  waste_percent: 0,
});

export function BomItemsEditor({
  value,
  onChange,
  rawMaterials,
  units,
}: BomItemsEditorProps) {
  const updateItems = (
    updater: (prev: ProductBomItemPayload[]) => ProductBomItemPayload[]
  ) => {
    onChange(updater(value));
  };

  return (
    <div className="space-y-4">
      {value.map((item, index) => (
        <Card
          key={index}
          title={`BOM Item #${index + 1}`}
          description="Atur bahan baku, satuan, kuantitas, dan estimasi waste."
        >
          <div className="grid gap-4 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <label className="mb-2 block text-sm font-medium text-slate-700">
                Bahan Baku
              </label>
              <select
                className="w-full rounded-xl border border-slate-300 bg-white px-3 py-2.5 text-sm text-slate-800 shadow-sm outline-none transition focus:border-[var(--brand-brick)] focus:ring-2 focus:ring-orange-100"
                value={item.raw_material_id || ""}
                onChange={(event) =>
                  updateItems((prev) => {
                    const next = [...prev];
                    const rawMaterialId = Number(event.target.value || 0);
                    const rawMaterial = rawMaterials.find((row) => row.id === rawMaterialId);

                    next[index] = {
                      ...next[index],
                      raw_material_id: rawMaterialId,
                      unit_id: rawMaterial?.unit_id ?? next[index].unit_id,
                    };

                    return next;
                  })
                }
              >
                <option value="">Pilih bahan baku</option>
                {rawMaterials.map((rawMaterial) => (
                  <option key={rawMaterial.id} value={rawMaterial.id}>
                    {rawMaterial.name}
                  </option>
                ))}
              </select>
            </div>

            <div className="lg:col-span-3">
              <label className="mb-2 block text-sm font-medium text-slate-700">
                Satuan
              </label>
              <select
                className="w-full rounded-xl border border-slate-300 bg-white px-3 py-2.5 text-sm text-slate-800 shadow-sm outline-none transition focus:border-[var(--brand-brick)] focus:ring-2 focus:ring-orange-100"
                value={item.unit_id || ""}
                onChange={(event) =>
                  updateItems((prev) => {
                    const next = [...prev];
                    next[index] = {
                      ...next[index],
                      unit_id: Number(event.target.value || 0),
                    };
                    return next;
                  })
                }
              >
                <option value="">Pilih satuan</option>
                {units.map((unit) => (
                  <option key={unit.id} value={unit.id}>
                    {unit.name} ({unit.code})
                  </option>
                ))}
              </select>
            </div>

            <div className="lg:col-span-2">
              <Input
                label="Qty"
                type="number"
                value={String(item.qty ?? 0)}
                onChange={(event) =>
                  updateItems((prev) => {
                    const next = [...prev];
                    next[index] = {
                      ...next[index],
                      qty: Number(event.target.value || 0),
                    };
                    return next;
                  })
                }
              />
            </div>

            <div className="lg:col-span-2">
              <Input
                label="Waste %"
                type="number"
                value={String(item.waste_percent ?? 0)}
                onChange={(event) =>
                  updateItems((prev) => {
                    const next = [...prev];
                    next[index] = {
                      ...next[index],
                      waste_percent: Number(event.target.value || 0),
                    };
                    return next;
                  })
                }
              />
            </div>

            <div className="flex items-end lg:col-span-1">
              <Button
                variant="danger"
                className="w-full"
                onClick={() => updateItems((prev) => prev.filter((_, idx) => idx !== index))}
              >
                Hapus
              </Button>
            </div>
          </div>
        </Card>
      ))}

      <div className="rounded-2xl border border-dashed border-orange-200 bg-orange-50/40 p-4">
        <Button
          variant="outline"
          onClick={() => onChange([...(value ?? []), createEmptyBomItem()])}
        >
          Tambah BOM Item
        </Button>
      </div>
    </div>
  );
}

export function sanitizeBomItems(value: ProductBomItemPayload[]): ProductBomItemPayload[] {
  return (value ?? []).filter(
    (item) => item.raw_material_id > 0 && item.unit_id > 0 && Number(item.qty) > 0
  );
}

export function createInitialBomItems(): ProductBomItemPayload[] {
  return [createEmptyBomItem()];
}