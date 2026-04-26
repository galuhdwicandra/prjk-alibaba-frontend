import { Button, Card, Input } from "@/components/ui";
import type {
  StockAdjustmentItemPayload,
  StockOpnameItemPayload,
  StockTransferItemPayload,
} from "@/modules/admin/services/stock-movement.service";
import type { OutletMaterialStock, RawMaterial, Unit } from "@/types/inventory";

type ItemMode = "adjustment" | "transfer" | "opname";

type StockItemPayload =
  | StockAdjustmentItemPayload
  | StockTransferItemPayload
  | StockOpnameItemPayload;

interface StockFlowItemsEditorProps<T extends StockItemPayload> {
  mode: ItemMode;
  value: T[];
  onChange: (next: T[]) => void;
  rawMaterials: RawMaterial[];
  units: Unit[];
  outletStocks?: OutletMaterialStock[];
}

const createEmptyItem = <T extends StockItemPayload>(mode: ItemMode): T => {
  if (mode === "adjustment") {
    return {
      raw_material_id: 0,
      qty_difference: 0,
      unit_id: 0,
      notes: "",
    } as T;
  }

  if (mode === "opname") {
    return {
      raw_material_id: 0,
      system_qty: 0,
      actual_qty: 0,
      unit_id: 0,
      notes: "",
    } as T;
  }

  return {
    raw_material_id: 0,
    qty_sent: 1,
    qty_received: null,
    unit_id: 0,
    notes: "",
  } as T;
};

export function StockFlowItemsEditor<T extends StockItemPayload>({
  mode,
  value,
  onChange,
  rawMaterials,
  units,
  outletStocks = [],
}: StockFlowItemsEditorProps<T>) {
  const updateItems = (updater: (prev: T[]) => T[]) => {
    onChange(updater(value));
  };

  const getRawMaterial = (id: number) => rawMaterials.find((item) => Number(item.id) === Number(id));

  const getSystemQty = (rawMaterialId: number) => {
    const stock = outletStocks.find((item) => Number(item.raw_material_id) === Number(rawMaterialId));
    return Number(stock?.qty_on_hand ?? 0);
  };

  const getTitle = () => {
    if (mode === "adjustment") {
      return "Item Adjustment";
    }

    if (mode === "opname") {
      return "Item Opname";
    }

    return "Item Transfer";
  };

  return (
    <div className="space-y-4">
      {value.map((item, index) => {
        const rawMaterial = getRawMaterial(item.raw_material_id);
        const unitId = item.unit_id || rawMaterial?.unit_id || 0;

        return (
          <Card key={index} title={`${getTitle()} #${index + 1}`}>
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
                      const selected = getRawMaterial(rawMaterialId);
                      const systemQty = getSystemQty(rawMaterialId);

                      next[index] = {
                        ...next[index],
                        raw_material_id: rawMaterialId,
                        unit_id: selected?.unit_id ?? next[index].unit_id,
                        ...(mode === "opname" ? { system_qty: systemQty } : {}),
                      };

                      return next;
                    })
                  }
                >
                  <option value="">Pilih bahan baku</option>
                  {rawMaterials.map((rawMaterialOption) => (
                    <option key={rawMaterialOption.id} value={rawMaterialOption.id}>
                      {rawMaterialOption.name}
                    </option>
                  ))}
                </select>
              </div>

              {mode === "adjustment" ? (
                <Input
                  label="Selisih Qty"
                  type="number"
                  value={String((item as StockAdjustmentItemPayload).qty_difference ?? 0)}
                  onChange={(event) =>
                    updateItems((prev) => {
                      const next = [...prev];

                      next[index] = {
                        ...next[index],
                        qty_difference: Number(event.target.value || 0),
                      } as T;

                      return next;
                    })
                  }
                />
              ) : null}

              {mode === "transfer" ? (
                <Input
                  label="Qty Kirim"
                  type="number"
                  value={String((item as StockTransferItemPayload).qty_sent ?? 0)}
                  onChange={(event) =>
                    updateItems((prev) => {
                      const next = [...prev];

                      next[index] = {
                        ...next[index],
                        qty_sent: Number(event.target.value || 0),
                      } as T;

                      return next;
                    })
                  }
                />
              ) : null}

              {mode === "opname" ? (
                <>
                  <Input
                    label="Qty Sistem"
                    type="number"
                    value={String((item as StockOpnameItemPayload).system_qty ?? 0)}
                    onChange={(event) =>
                      updateItems((prev) => {
                        const next = [...prev];

                        next[index] = {
                          ...next[index],
                          system_qty: Number(event.target.value || 0),
                        } as T;

                        return next;
                      })
                    }
                  />

                  <Input
                    label="Qty Fisik"
                    type="number"
                    value={String((item as StockOpnameItemPayload).actual_qty ?? 0)}
                    onChange={(event) =>
                      updateItems((prev) => {
                        const next = [...prev];

                        next[index] = {
                          ...next[index],
                          actual_qty: Number(event.target.value || 0),
                        } as T;

                        return next;
                      })
                    }
                  />
                </>
              ) : null}

              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700">Satuan</label>
                <select
                  className="w-full rounded-xl border border-slate-300 px-3 py-2 text-sm"
                  value={unitId || ""}
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

              {mode === "opname" ? (
                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-700">Selisih</label>
                  <div className="rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-sm font-semibold text-slate-900">
                    {(
                      Number((item as StockOpnameItemPayload).actual_qty ?? 0) -
                      Number((item as StockOpnameItemPayload).system_qty ?? 0)
                    ).toLocaleString("id-ID")}
                  </div>
                </div>
              ) : null}

              <div className={mode === "opname" ? "md:col-span-4" : "md:col-span-3"}>
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

              <div className="flex items-end">
                <Button
                  variant="danger"
                  onClick={() => updateItems((prev) => prev.filter((_, itemIndex) => itemIndex !== index))}
                >
                  Hapus
                </Button>
              </div>
            </div>
          </Card>
        );
      })}

      <Button variant="outline" onClick={() => onChange([...(value ?? []), createEmptyItem<T>(mode)])}>
        Tambah Item
      </Button>
    </div>
  );
}

export function createInitialStockItems<T extends StockItemPayload>(mode: ItemMode): T[] {
  return [createEmptyItem<T>(mode)];
}

export function sanitizeAdjustmentItems(
  value: StockAdjustmentItemPayload[]
): StockAdjustmentItemPayload[] {
  return (value ?? []).filter(
    (item) =>
      Number(item.raw_material_id) > 0 &&
      Number(item.unit_id) > 0 &&
      Number(item.qty_difference) !== 0
  );
}

export function sanitizeTransferItems(
  value: StockTransferItemPayload[]
): StockTransferItemPayload[] {
  return (value ?? []).filter(
    (item) =>
      Number(item.raw_material_id) > 0 &&
      Number(item.unit_id) > 0 &&
      Number(item.qty_sent) > 0
  );
}

export function sanitizeOpnameItems(value: StockOpnameItemPayload[]): StockOpnameItemPayload[] {
  return (value ?? []).filter(
    (item) =>
      Number(item.raw_material_id) > 0 &&
      Number(item.unit_id) > 0 &&
      Number(item.actual_qty) >= 0
  );
}