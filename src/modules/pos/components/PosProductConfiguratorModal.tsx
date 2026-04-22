import { useMemo, useState } from "react";
import { Badge, Button, Card, Checkbox, Input, Modal } from "@/components/ui";
import type { Product } from "@/types/product";
import type {
  PosModifierSelection,
  PosProductConfiguratorSubmit,
  PosVariantSelection,
} from "@/modules/pos/types/pos";

interface PosProductConfiguratorModalProps {
  open: boolean;
  product: Product | null;
  outletPrice: number;
  onClose: () => void;
  onSubmit: (payload: PosProductConfiguratorSubmit) => void;
}

const formatCurrency = (value: number) =>
  new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    maximumFractionDigits: 0,
  }).format(Number(value || 0));

const groupSelectionsById = (ids: number[]) => Array.from(new Set(ids));

const getSafeId = (value?: number | null) => (typeof value === "number" ? value : null);

export function PosProductConfiguratorModal({
  open,
  product,
  outletPrice,
  onClose,
  onSubmit,
}: PosProductConfiguratorModalProps) {
  const [qty, setQty] = useState(1);
  const [note, setNote] = useState("");
  const [selectedVariantIds, setSelectedVariantIds] = useState<Record<number, number[]>>({});
  const [selectedModifierIds, setSelectedModifierIds] = useState<Record<number, number[]>>({});

  const resetState = () => {
    setQty(1);
    setNote("");
    setSelectedVariantIds({});
    setSelectedModifierIds({});
  };

  const handleClose = () => {
    resetState();
    onClose();
  };

  const selectedVariants = useMemo<PosVariantSelection[]>(() => {
    if (!product?.variant_groups?.length) return [];

    const results: PosVariantSelection[] = [];

    product.variant_groups.forEach((group) => {
      const groupId = getSafeId(group.id);
      if (groupId === null) return;

      const pickedIds = selectedVariantIds[groupId] ?? [];

      group.options?.forEach((option) => {
        const optionId = getSafeId(option.id);
        if (optionId === null) return;
        if (!pickedIds.includes(optionId)) return;

        results.push({
          group_name: group.name,
          option_name: option.name,
          price_adjustment: Number(option.price_adjustment ?? 0),
        });
      });
    });

    return results;
  }, [product, selectedVariantIds]);

  const selectedModifiers = useMemo<PosModifierSelection[]>(() => {
    if (!product?.modifier_groups?.length) return [];

    const results: PosModifierSelection[] = [];

    product.modifier_groups.forEach((group) => {
      const groupId = getSafeId(group.id);
      if (groupId === null) return;

      const pickedIds = selectedModifierIds[groupId] ?? [];

      group.options?.forEach((option) => {
        const optionId = getSafeId(option.id);
        if (optionId === null) return;
        if (!pickedIds.includes(optionId)) return;

        results.push({
          group_name: group.name,
          option_name: option.name,
          qty: 1,
          price: Number(option.price ?? 0),
        });
      });
    });

    return results;
  }, [product, selectedModifierIds]);

  const variantTotal = selectedVariants.reduce(
    (sum, item) => sum + Number(item.price_adjustment ?? 0),
    0
  );

  const modifierTotal = selectedModifiers.reduce(
    (sum, item) => sum + Number(item.price ?? 0) * Number(item.qty ?? 1),
    0
  );

  const previewLineTotal =
    (Number(outletPrice ?? 0) + variantTotal + modifierTotal) * Number(qty || 1);

  const validateSelections = () => {
    if (!product) {
      throw new Error("Produk belum dipilih.");
    }

    for (const group of product.variant_groups ?? []) {
      const groupId = getSafeId(group.id);
      if (groupId === null) continue;

      const pickedIds = selectedVariantIds[groupId] ?? [];

      if (group.is_required && pickedIds.length === 0) {
        throw new Error(`Variant "${group.name}" wajib dipilih.`);
      }

      if (group.selection_type === "single" && pickedIds.length > 1) {
        throw new Error(`Variant "${group.name}" hanya boleh memilih satu opsi.`);
      }
    }

    for (const group of product.modifier_groups ?? []) {
      const groupId = getSafeId(group.id);
      if (groupId === null) continue;

      const pickedIds = selectedModifierIds[groupId] ?? [];
      const minSelect = Number(group.min_select ?? 0);
      const maxSelect = Number(group.max_select ?? 0);

      if (group.is_required && pickedIds.length === 0) {
        throw new Error(`Modifier "${group.name}" wajib dipilih.`);
      }

      if (pickedIds.length < minSelect) {
        throw new Error(`Modifier "${group.name}" minimal harus memilih ${minSelect} opsi.`);
      }

      if (maxSelect > 0 && pickedIds.length > maxSelect) {
        throw new Error(`Modifier "${group.name}" maksimal hanya ${maxSelect} opsi.`);
      }
    }
  };

  const toggleVariant = (
    groupId: number,
    optionId: number,
    selectionType: "single" | "multiple"
  ) => {
    setSelectedVariantIds((prev) => {
      const current = prev[groupId] ?? [];

      if (selectionType === "single") {
        return {
          ...prev,
          [groupId]: current.includes(optionId) ? [] : [optionId],
        };
      }

      return {
        ...prev,
        [groupId]: current.includes(optionId)
          ? current.filter((id) => id !== optionId)
          : groupSelectionsById([...current, optionId]),
      };
    });
  };

  const toggleModifier = (
    groupId: number,
    optionId: number,
    maxSelect?: number | null
  ) => {
    setSelectedModifierIds((prev) => {
      const current = prev[groupId] ?? [];

      if (current.includes(optionId)) {
        return {
          ...prev,
          [groupId]: current.filter((id) => id !== optionId),
        };
      }

      if (maxSelect && maxSelect > 0 && current.length >= maxSelect) {
        return prev;
      }

      return {
        ...prev,
        [groupId]: groupSelectionsById([...current, optionId]),
      };
    });
  };

  const handleSubmit = () => {
    if (!product) return;

    validateSelections();

    onSubmit({
      product,
      qty: Math.max(1, Number(qty || 1)),
      base_unit_price: Number(outletPrice ?? 0),
      notes: note,
      selected_variants: selectedVariants,
      selected_modifiers: selectedModifiers,
    });

    resetState();
  };

  return (
    <Modal
      open={open}
      title={product ? `Konfigurasi Produk — ${product.name}` : "Konfigurasi Produk"}
      onClose={handleClose}
      footer={
        <>
          <Button variant="outline" onClick={handleClose}>
            Batal
          </Button>
          <Button onClick={handleSubmit}>Tambahkan ke Cart</Button>
        </>
      }
    >
      {!product ? null : (
        <div className="space-y-4">
          <Card
            title={product.name}
            description={product.category?.name ?? "-"}
            actions={<Badge variant="info">{formatCurrency(outletPrice)}</Badge>}
          >
            <div className="text-sm text-slate-600">
              {product.description?.trim() || "Tidak ada deskripsi produk."}
            </div>
          </Card>

          {(product.variant_groups ?? []).map((group, groupIndex) => {
            const groupId = getSafeId(group.id);
            const pickedIds = groupId !== null ? selectedVariantIds[groupId] ?? [] : [];

            return (
              <Card
                key={groupId ?? `variant-group-${groupIndex}`}
                title={group.name}
                description={`Tipe: ${group.selection_type} • ${
                  group.is_required ? "Wajib" : "Opsional"
                }`}
              >
                <div className="grid gap-2 md:grid-cols-2">
                  {group.options?.map((option, optionIndex) => {
                    const optionId = getSafeId(option.id);
                    const selected = optionId !== null ? pickedIds.includes(optionId) : false;

                    return (
                      <button
                        key={optionId ?? `variant-option-${groupIndex}-${optionIndex}`}
                        type="button"
                        disabled={groupId === null || optionId === null}
                        onClick={() => {
                          if (groupId === null || optionId === null) return;
                          toggleVariant(groupId, optionId, group.selection_type);
                        }}
                        className={[
                          "rounded-2xl border p-3 text-left transition",
                          selected
                            ? "border-slate-900 bg-slate-900 text-white"
                            : "border-slate-200 bg-white text-slate-800 hover:bg-slate-50",
                          groupId === null || optionId === null
                            ? "cursor-not-allowed opacity-60"
                            : "",
                        ].join(" ")}
                      >
                        <div className="font-medium">{option.name}</div>
                        <div
                          className={[
                            "mt-1 text-xs",
                            selected ? "text-slate-200" : "text-slate-500",
                          ].join(" ")}
                        >
                          {Number(option.price_adjustment ?? 0) > 0
                            ? `+ ${formatCurrency(Number(option.price_adjustment ?? 0))}`
                            : "Tanpa tambahan harga"}
                        </div>
                      </button>
                    );
                  })}
                </div>
              </Card>
            );
          })}

          {(product.modifier_groups ?? []).map((group, groupIndex) => {
            const groupId = getSafeId(group.id);
            const pickedIds = groupId !== null ? selectedModifierIds[groupId] ?? [] : [];

            return (
              <Card
                key={groupId ?? `modifier-group-${groupIndex}`}
                title={group.name}
                description={`Min ${Number(group.min_select ?? 0)} • Max ${Number(
                  group.max_select ?? 0
                )} • ${group.is_required ? "Wajib" : "Opsional"}`}
              >
                <div className="grid gap-3 md:grid-cols-2">
                  {group.options?.map((option, optionIndex) => {
                    const optionId = getSafeId(option.id);
                    const checked = optionId !== null ? pickedIds.includes(optionId) : false;

                    return (
                      <div
                        key={optionId ?? `modifier-option-${groupIndex}-${optionIndex}`}
                        className="rounded-2xl border border-slate-200 p-3"
                      >
                        <Checkbox
                          label={`${option.name} ${
                            Number(option.price ?? 0) > 0
                              ? `(+${formatCurrency(Number(option.price ?? 0))})`
                              : ""
                          }`}
                          checked={checked}
                          onChange={() => {
                            if (groupId === null || optionId === null) return;
                            toggleModifier(groupId, optionId, group.max_select);
                          }}
                        />
                      </div>
                    );
                  })}
                </div>
              </Card>
            );
          })}

          <div className="grid gap-4 md:grid-cols-2">
            <Input
              label="Qty"
              type="number"
              value={String(qty)}
              onChange={(event) => setQty(Math.max(1, Number(event.target.value || 1)))}
            />
            <Input
              label="Catatan Item"
              value={note}
              onChange={(event) => setNote(event.target.value)}
              placeholder="Contoh: sambal dipisah"
            />
          </div>

          <Card title="Ringkasan Harga">
            <div className="space-y-2 text-sm text-slate-700">
              <div className="flex items-center justify-between">
                <span>Harga dasar</span>
                <span>{formatCurrency(outletPrice)}</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Tambahan variant</span>
                <span>{formatCurrency(variantTotal)}</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Tambahan modifier</span>
                <span>{formatCurrency(modifierTotal)}</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Qty</span>
                <span>{qty}</span>
              </div>
              <div className="border-t border-slate-200 pt-2 text-base font-semibold text-slate-900">
                <div className="flex items-center justify-between">
                  <span>Total sementara</span>
                  <span>{formatCurrency(previewLineTotal)}</span>
                </div>
              </div>
            </div>
          </Card>
        </div>
      )}
    </Modal>
  );
}