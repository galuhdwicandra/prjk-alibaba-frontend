import { create } from "zustand";
import type { Customer } from "@/types/customer";
import type {
  PosCartItem,
  PosHeldCart,
  PosModifierSelection,
  PosOrderChannel,
  PosVariantSelection,
} from "@/modules/pos/types/pos";

const HELD_CART_STORAGE_KEY = "chicken_alibaba_pos_held_cart";

const roundMoney = (value: number) => Math.round(value * 100) / 100;

const computeLineTotal = (
  qty: number,
  baseUnitPrice: number,
  selectedVariants: PosVariantSelection[],
  selectedModifiers: PosModifierSelection[]
) => {
  const variantDelta = selectedVariants.reduce(
    (sum, item) => sum + Number(item.price_adjustment ?? 0),
    0
  );

  const modifierDelta = selectedModifiers.reduce(
    (sum, item) => sum + Number(item.price ?? 0) * Number(item.qty ?? 1),
    0
  );

  return roundMoney((Number(baseUnitPrice) + variantDelta + modifierDelta) * Number(qty));
};

const createCartItemId = () => `pos-item-${Date.now()}-${Math.floor(Math.random() * 100000)}`;

interface PosCartState {
  orderChannel: PosOrderChannel;
  customer: Customer | null;
  items: PosCartItem[];
  heldCartMeta: PosHeldCart | null;
  setOrderChannel: (channel: PosOrderChannel) => void;
  setCustomer: (customer: Customer | null) => void;
  addItem: (payload: {
    product_id: number;
    product_name: string;
    product_type: "single" | "bundle";
    image_url?: string | null;
    qty?: number;
    base_unit_price: number;
    notes?: string;
    selected_variants?: PosVariantSelection[];
    selected_modifiers?: PosModifierSelection[];
  }) => void;
  updateQty: (itemId: string, qty: number) => void;
  updateNotes: (itemId: string, notes: string) => void;
  removeItem: (itemId: string) => void;
  clearCart: () => void;
  holdCart: () => void;
  restoreHeldCart: () => boolean;
  discardHeldCart: () => void;
}

export const usePosCartStore = create<PosCartState>((set, get) => ({
  orderChannel: "takeaway",
  customer: null,
  items: [],
  heldCartMeta: null,

  setOrderChannel: (orderChannel) => set({ orderChannel }),

  setCustomer: (customer) => set({ customer }),

  addItem: (payload) =>
    set((state) => {
      const qty = Number(payload.qty ?? 1);
      const selectedVariants = payload.selected_variants ?? [];
      const selectedModifiers = payload.selected_modifiers ?? [];
      const lineTotal = computeLineTotal(
        qty,
        payload.base_unit_price,
        selectedVariants,
        selectedModifiers
      );

      const newItem: PosCartItem = {
        id: createCartItemId(),
        product_id: payload.product_id,
        product_name: payload.product_name,
        product_type: payload.product_type,
        image_url: payload.image_url ?? null,
        qty,
        base_unit_price: Number(payload.base_unit_price ?? 0),
        notes: payload.notes ?? "",
        selected_variants: selectedVariants,
        selected_modifiers: selectedModifiers,
        line_total: lineTotal,
      };

      return {
        items: [...state.items, newItem],
      };
    }),

  updateQty: (itemId, qty) =>
    set((state) => ({
      items: state.items.map((item) => {
        if (item.id !== itemId) return item;

        const normalizedQty = Math.max(1, Number(qty || 1));

        return {
          ...item,
          qty: normalizedQty,
          line_total: computeLineTotal(
            normalizedQty,
            item.base_unit_price,
            item.selected_variants,
            item.selected_modifiers
          ),
        };
      }),
    })),

  updateNotes: (itemId, notes) =>
    set((state) => ({
      items: state.items.map((item) => (item.id === itemId ? { ...item, notes } : item)),
    })),

  removeItem: (itemId) =>
    set((state) => ({
      items: state.items.filter((item) => item.id !== itemId),
    })),

  clearCart: () =>
    set({
      customer: null,
      items: [],
      orderChannel: "takeaway",
    }),

  holdCart: () => {
    const snapshot: PosHeldCart = {
      held_at: new Date().toISOString(),
      customer: get().customer,
      order_channel: get().orderChannel,
      items: get().items,
    };

    localStorage.setItem(HELD_CART_STORAGE_KEY, JSON.stringify(snapshot));
    set({ heldCartMeta: snapshot });
  },

  restoreHeldCart: () => {
    const raw = localStorage.getItem(HELD_CART_STORAGE_KEY);
    if (!raw) {
      return false;
    }

    try {
      const parsed = JSON.parse(raw) as PosHeldCart;

      set({
        customer: parsed.customer ?? null,
        orderChannel: parsed.order_channel ?? "takeaway",
        items: parsed.items ?? [],
        heldCartMeta: parsed,
      });

      return true;
    } catch {
      localStorage.removeItem(HELD_CART_STORAGE_KEY);
      set({ heldCartMeta: null });
      return false;
    }
  },

  discardHeldCart: () => {
    localStorage.removeItem(HELD_CART_STORAGE_KEY);
    set({ heldCartMeta: null });
  },
}));