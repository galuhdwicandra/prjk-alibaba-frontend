// src/modules/admin/components/purchasing/PurchaseOrderItemsEditor.tsx

import { Button, Card, Input } from "@/components/ui";
import type { PurchaseOrderItemPayload } from "@/modules/admin/services/purchasing.service";
import type { RawMaterial, Unit } from "@/types/inventory";

interface PurchaseOrderItemsEditorProps {
  value: PurchaseOrderItemPayload[];
  onChange: (next: PurchaseOrderItemPayload[]) => void;
  rawMaterials: RawMaterial[];
  units: Unit[];
}

const createEmptyItem = (): PurchaseOrderItemPayload => ({
  raw_material_id: 0,
  qty_ordered: 1,
  unit_id: 0,
  unit_price: 0,
  discount_amount: 0,
  notes: "",
});

export function PurchaseOrderItemsEditor({
  value,
  onChange,
  rawMaterials,
  units,
}: PurchaseOrderItemsEditorProps) {
  const updateItems = (
    updater: (prev: PurchaseOrderItemPayload[]) => PurchaseOrderItemPayload[]
  ) => {
    onChange(updater(value));
  };

  const getLineTotal = (item: PurchaseOrderItemPayload) => {
    return Math.max(
      0,
      Number(item.qty_ordered || 0) * Number(item.unit_price || 0) -
        Number(item.discount_amount || 0)
    );
  };

  return (
    <div className="space-y-4">
      {value.map((item, index) => (
        <Card key={index} title={`Item PO #${index + 1}`}>
          <div className="grid gap-4 md:grid-cols-6">
            <div className="md:col-span-2">
              <label className="mb-2 block text-sm font-medium text-slate-700">
                Bahan Baku
              </label>
              <select
                className="w-full rounded-xl border border-slate-300 px-3 py-2 text-sm"
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
                      unit_price: Number(rawMaterial?.last_purchase_price ?? next[index].unit_price),
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

            <Input
              label="Qty Order"
              type="number"
              value={String(item.qty_ordered ?? 0)}
              onChange={(event) =>
                updateItems((prev) => {
                  const next = [...prev];
                  next[index] = {
                    ...next[index],
                    qty_ordered: Number(event.target.value || 0),
                  };
                  return next;
                })
              }
            />

            <div>
              <label className="mb-2 block text-sm font-medium text-slate-700">
                Satuan
              </label>
              <select
                className="w-full rounded-xl border border-slate-300 px-3 py-2 text-sm"
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

            <Input
              label="Harga Satuan"
              type="number"
              value={String(item.unit_price ?? 0)}
              onChange={(event) =>
                updateItems((prev) => {
                  const next = [...prev];
                  next[index] = {
                    ...next[index],
                    unit_price: Number(event.target.value || 0),
                  };
                  return next;
                })
              }
            />

            <Input
              label="Diskon"
              type="number"
              value={String(item.discount_amount ?? 0)}
              onChange={(event) =>
                updateItems((prev) => {
                  const next = [...prev];
                  next[index] = {
                    ...next[index],
                    discount_amount: Number(event.target.value || 0),
                  };
                  return next;
                })
              }
            />

            <div className="md:col-span-4">
              <Input
                label="Catatan Item"
                value={item.notes ?? ""}
                onChange={(event) =>
                  updateItems((prev) => {
                    const next = [...prev];
                    next[index] = {
                      ...next[index],
                      notes: event.target.value,
                    };
                    return next;
                  })
                }
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-slate-700">
                Subtotal
              </label>
              <div className="rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-sm font-semibold text-slate-900">
                Rp {getLineTotal(item).toLocaleString("id-ID")}
              </div>
            </div>

            <div className="flex items-end">
              <Button
                variant="danger"
                onClick={() => updateItems((prev) => prev.filter((_, idx) => idx !== index))}
              >
                Hapus
              </Button>
            </div>
          </div>
        </Card>
      ))}

      <Button variant="outline" onClick={() => onChange([...(value ?? []), createEmptyItem()])}>
        Tambah Item PO
      </Button>
    </div>
  );
}

export function createInitialPurchaseOrderItems(): PurchaseOrderItemPayload[] {
  return [createEmptyItem()];
}

export function sanitizePurchaseOrderItems(
  value: PurchaseOrderItemPayload[]
): PurchaseOrderItemPayload[] {
  return (value ?? []).filter(
    (item) =>
      Number(item.raw_material_id) > 0 &&
      Number(item.unit_id) > 0 &&
      Number(item.qty_ordered) > 0 &&
      Number(item.unit_price) >= 0
  );
}