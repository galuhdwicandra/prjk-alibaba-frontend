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

  const getRawMaterial = (id: number) =>
    rawMaterials.find((item) => Number(item.id) === Number(id));

  const getSystemQty = (rawMaterialId: number) => {
    const stock = outletStocks.find(
      (item) => Number(item.raw_material_id) === Number(rawMaterialId)
    );

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

  const getDescription = () => {
    if (mode === "adjustment") {
      return "Masukkan bahan baku, satuan, dan selisih stok hasil koreksi.";
    }

    if (mode === "opname") {
      return "Bandingkan qty sistem dengan qty fisik untuk mendapatkan selisih stok.";
    }

    return "Masukkan bahan baku dan qty yang akan dikirim antar outlet.";
  };

  const selectClassName =
    "w-full rounded-xl border border-slate-300 bg-white px-3 py-2 text-sm text-slate-800 shadow-sm outline-none transition focus:border-[var(--brand-brick)] focus:ring-2 focus:ring-orange-100 disabled:cursor-not-allowed disabled:bg-slate-100 disabled:text-slate-400";

  return (
    <div className="space-y-4">
      <div className="rounded-2xl border border-orange-100 bg-[var(--brand-brick-soft)] px-4 py-3">
        <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h3 className="text-sm font-semibold text-[var(--brand-brick)]">
              {getTitle()}
            </h3>
            <p className="mt-1 text-xs leading-5 text-orange-900/70">
              {getDescription()}
            </p>
          </div>

          <div className="text-xs font-medium text-orange-900/70">
            Total item:{" "}
            <span className="font-semibold text-[var(--brand-brick)]">
              {value.length}
            </span>
          </div>
        </div>
      </div>

      {value.map((item, index) => {
        const rawMaterial = getRawMaterial(item.raw_material_id);
        const unitId = item.unit_id || rawMaterial?.unit_id || 0;
        const difference =
          Number((item as StockOpnameItemPayload).actual_qty ?? 0) -
          Number((item as StockOpnameItemPayload).system_qty ?? 0);

        return (
          <Card key={index} title={`${getTitle()} #${index + 1}`}>
            <div className="space-y-4">
              <div className="flex flex-col gap-2 rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <div className="text-xs font-medium uppercase tracking-wide text-slate-500">
                    Bahan dipilih
                  </div>
                  <div className="mt-1 text-sm font-semibold text-slate-900">
                    {rawMaterial?.name ?? "Belum dipilih"}
                  </div>
                </div>

                {mode === "opname" ? (
                  <div
                    className={[
                      "inline-flex w-fit items-center rounded-full border px-3 py-1 text-xs font-semibold",
                      difference < 0
                        ? "border-red-200 bg-red-50 text-red-700"
                        : difference > 0
                          ? "border-emerald-200 bg-emerald-50 text-emerald-700"
                          : "border-slate-200 bg-white text-slate-600",
                    ].join(" ")}
                  >
                    Selisih {difference.toLocaleString("id-ID")}
                  </div>
                ) : null}
              </div>

              <div className="grid gap-4 md:grid-cols-6">
                <div className="md:col-span-2">
                  <label className="mb-2 block text-sm font-medium text-slate-700">
                    Bahan Baku
                  </label>
                  <select
                    className={selectClassName}
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
                  <label className="mb-2 block text-sm font-medium text-slate-700">
                    Satuan
                  </label>
                  <select
                    className={selectClassName}
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
                    <label className="mb-2 block text-sm font-medium text-slate-700">
                      Selisih
                    </label>
                    <div
                      className={[
                        "rounded-xl border px-3 py-2 text-sm font-semibold",
                        difference < 0
                          ? "border-red-200 bg-red-50 text-red-700"
                          : difference > 0
                            ? "border-emerald-200 bg-emerald-50 text-emerald-700"
                            : "border-slate-200 bg-slate-50 text-slate-900",
                      ].join(" ")}
                    >
                      {difference.toLocaleString("id-ID")}
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
                    onClick={() =>
                      updateItems((prev) =>
                        prev.filter((_, itemIndex) => itemIndex !== index)
                      )
                    }
                  >
                    Hapus
                  </Button>
                </div>
              </div>
            </div>
          </Card>
        );
      })}

      <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        <Button
          variant="outline"
          onClick={() => onChange([...(value ?? []), createEmptyItem<T>(mode)])}
        >
          Tambah Item
        </Button>

        <p className="text-xs text-slate-500">
          Pastikan bahan baku, satuan, dan qty sudah sesuai sebelum menyimpan.
        </p>
      </div>
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