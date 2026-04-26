// src/modules/admin/components/purchasing/GoodsReceiptItemsEditor.tsx

import { Button, Card, Input } from "@/components/ui";
import type { GoodsReceiptItemPayload } from "@/modules/admin/services/purchasing.service";
import type { PurchaseOrder } from "@/types/purchasing";
import type { RawMaterial, Unit } from "@/types/inventory";

interface GoodsReceiptItemsEditorProps {
  value: GoodsReceiptItemPayload[];
  onChange: (next: GoodsReceiptItemPayload[]) => void;
  rawMaterials: RawMaterial[];
  units: Unit[];
  purchaseOrder: PurchaseOrder | null;
}

const createEmptyItem = (): GoodsReceiptItemPayload => ({
  raw_material_id: 0,
  qty_received: 1,
  unit_id: 0,
  unit_cost: 0,
  expired_at: null,
  notes: "",
});

export function GoodsReceiptItemsEditor({
  value,
  onChange,
  rawMaterials,
  units,
  purchaseOrder,
}: GoodsReceiptItemsEditorProps) {
  const updateItems = (
    updater: (prev: GoodsReceiptItemPayload[]) => GoodsReceiptItemPayload[]
  ) => {
    onChange(updater(value));
  };

  const getLineTotal = (item: GoodsReceiptItemPayload) => {
    return Math.max(0, Number(item.qty_received || 0) * Number(item.unit_cost || 0));
  };

  return (
    <div className="space-y-4">
      {value.map((item, index) => (
        <Card key={index} title={`Item Receipt #${index + 1}`}>
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
                    const poItem = purchaseOrder?.items?.find(
                      (row) => Number(row.raw_material_id) === rawMaterialId
                    );

                    next[index] = {
                      ...next[index],
                      raw_material_id: rawMaterialId,
                      unit_id: poItem?.unit_id ?? rawMaterial?.unit_id ?? next[index].unit_id,
                      unit_cost: Number(poItem?.unit_price ?? rawMaterial?.last_purchase_price ?? 0),
                      qty_received: Number(poItem?.qty_ordered ?? next[index].qty_received),
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
              label="Qty Diterima"
              type="number"
              value={String(item.qty_received ?? 0)}
              onChange={(event) =>
                updateItems((prev) => {
                  const next = [...prev];
                  next[index] = {
                    ...next[index],
                    qty_received: Number(event.target.value || 0),
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
              label="Harga Terima"
              type="number"
              value={String(item.unit_cost ?? 0)}
              onChange={(event) =>
                updateItems((prev) => {
                  const next = [...prev];
                  next[index] = {
                    ...next[index],
                    unit_cost: Number(event.target.value || 0),
                  };
                  return next;
                })
              }
            />

            <Input
              label="Expired At"
              type="date"
              value={item.expired_at ?? ""}
              onChange={(event) =>
                updateItems((prev) => {
                  const next = [...prev];
                  next[index] = {
                    ...next[index],
                    expired_at: event.target.value || null,
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
        Tambah Item Receipt
      </Button>
    </div>
  );
}

export function mapGoodsReceiptItemsFromPurchaseOrder(
  purchaseOrder: PurchaseOrder | null
): GoodsReceiptItemPayload[] {
  if (!purchaseOrder?.items?.length) {
    return [createEmptyItem()];
  }

  return purchaseOrder.items.map((item) => ({
    raw_material_id: item.raw_material_id,
    qty_received: Number(item.qty_ordered ?? 0),
    unit_id: item.unit_id,
    unit_cost: Number(item.unit_price ?? 0),
    expired_at: null,
    notes: item.notes ?? "",
  }));
}

export function sanitizeGoodsReceiptItems(
  value: GoodsReceiptItemPayload[]
): GoodsReceiptItemPayload[] {
  return (value ?? []).filter(
    (item) =>
      Number(item.raw_material_id) > 0 &&
      Number(item.unit_id) > 0 &&
      Number(item.qty_received) > 0 &&
      Number(item.unit_cost) >= 0
  );
}