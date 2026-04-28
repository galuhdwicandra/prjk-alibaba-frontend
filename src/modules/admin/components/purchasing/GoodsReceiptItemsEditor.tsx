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
    <div className="space-y-5">
      {value.map((item, index) => (
        <Card key={index}>
          <div className="mb-5 flex flex-col gap-3 border-b border-slate-100 pb-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h3 className="text-sm font-semibold text-slate-900">
                Item Receipt #{index + 1}
              </h3>
              <p className="mt-1 text-xs text-slate-500">
                Pilih bahan baku, jumlah diterima, satuan, harga terima, dan catatan item.
              </p>
            </div>

            <div className="rounded-xl border border-orange-100 bg-[var(--brand-brick-soft)] px-4 py-2 text-right">
              <div className="text-xs font-medium uppercase tracking-wide text-[var(--brand-brick)]">
                Subtotal
              </div>
              <div className="text-sm font-semibold text-slate-950">
                Rp {getLineTotal(item).toLocaleString("id-ID")}
              </div>
            </div>
          </div>

          <div className="grid gap-4 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <label className="mb-2 block text-sm font-medium text-slate-700">
                Bahan Baku
              </label>
              <select
                className="w-full rounded-xl border border-slate-300 bg-white px-3 py-2 text-sm text-slate-800 shadow-sm outline-none transition focus:border-[var(--brand-brick)] focus:ring-2 focus:ring-orange-100"
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

            <div className="lg:col-span-2">
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
            </div>

            <div className="lg:col-span-2">
              <label className="mb-2 block text-sm font-medium text-slate-700">
                Satuan
              </label>
              <select
                className="w-full rounded-xl border border-slate-300 bg-white px-3 py-2 text-sm text-slate-800 shadow-sm outline-none transition focus:border-[var(--brand-brick)] focus:ring-2 focus:ring-orange-100"
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
            </div>

            <div className="lg:col-span-2">
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
            </div>

            <div className="lg:col-span-10">
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

            <div className="flex items-end lg:col-span-2">
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
          className="w-full border-orange-200 bg-white text-[var(--brand-brick)] hover:bg-orange-50 sm:w-auto"
          onClick={() => onChange([...(value ?? []), createEmptyItem()])}
        >
          Tambah Item Receipt
        </Button>
      </div>
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