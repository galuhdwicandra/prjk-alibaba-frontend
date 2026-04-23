import { create } from "zustand";
import type { Customer } from "@/types/customer";
import type {
  PosCartItem,
  PosCartItemInput,
  PosCartState,
  PosHeldCart,
  PosOrderChannel,
} from "@/modules/pos/types/pos";

const HELD_CART_STORAGE_KEY = "chicken-alibaba-pos-held-cart";

const generateCartItemId = () =>
  `${Date.now()}-${Math.random().toString(36).slice(2, 10)}`;

const calculateLineTotal = (item: {
  qty: number;
  base_unit_price: number;
  selected_variants: Array<{ price_adjustment: number }>;
  selected_modifiers: Array<{ qty: number; price: number }>;
}) => {
  const variantTotal = (item.selected_variants ?? []).reduce(
    (sum, entry) => sum + Number(entry.price_adjustment || 0),
    0
  );

  const modifierTotal = (item.selected_modifiers ?? []).reduce(
    (sum, entry) => sum + Number(entry.price || 0) * Number(entry.qty || 0),
    0
  );

  const unitPrice = Number(item.base_unit_price || 0) + variantTotal + modifierTotal;

  return unitPrice * Number(item.qty || 0);
};

const areSameSelection = (left: PosCartItemInput, right: PosCartItemInput) => {
  return JSON.stringify(left) === JSON.stringify(right);
};

const initialState = {
  items: [] as PosCartItem[],
  customer: null as Customer | null,
  orderChannel: "takeaway" as PosOrderChannel,
  heldCartMeta: null as PosHeldCart | null,
};

export const usePosCartStore = create<PosCartState>((set, get) => ({
  ...initialState,

  setCustomer: (customer) => set({ customer }),

  setOrderChannel: (orderChannel) => set({ orderChannel }),

  addItem: (item) => {
    const nextItem: PosCartItem = {
      ...item,
      id: generateCartItemId(),
      line_total: calculateLineTotal(item),
    };

    const existingIndex = get().items.findIndex((current) =>
      areSameSelection(
        {
          product_id: current.product_id,
          product_name: current.product_name,
          product_type: current.product_type,
          image_url: current.image_url,
          qty: current.qty,
          base_unit_price: current.base_unit_price,
          notes: current.notes,
          selected_variants: current.selected_variants,
          selected_modifiers: current.selected_modifiers,
        },
        {
          product_id: nextItem.product_id,
          product_name: nextItem.product_name,
          product_type: nextItem.product_type,
          image_url: nextItem.image_url,
          qty: nextItem.qty,
          base_unit_price: nextItem.base_unit_price,
          notes: nextItem.notes,
          selected_variants: nextItem.selected_variants,
          selected_modifiers: nextItem.selected_modifiers,
        }
      )
    );

    if (existingIndex >= 0) {
      const items = [...get().items];
      const mergedQty = Number(items[existingIndex].qty) + Number(nextItem.qty);

      items[existingIndex] = {
        ...items[existingIndex],
        qty: mergedQty,
        line_total: calculateLineTotal({
          qty: mergedQty,
          base_unit_price: items[existingIndex].base_unit_price,
          selected_variants: items[existingIndex].selected_variants,
          selected_modifiers: items[existingIndex].selected_modifiers,
        }),
      };

      set({ items });
      return;
    }

    set({
      items: [...get().items, nextItem],
    });
  },

  updateQty: (itemId, qty) => {
    if (qty <= 0) {
      set({
        items: get().items.filter((item) => item.id !== itemId),
      });
      return;
    }

    set({
      items: get().items.map((item) =>
        item.id === itemId
          ? {
              ...item,
              qty,
              line_total: calculateLineTotal({
                qty,
                base_unit_price: item.base_unit_price,
                selected_variants: item.selected_variants,
                selected_modifiers: item.selected_modifiers,
              }),
            }
          : item
      ),
    });
  },

  updateNotes: (itemId, notes) => {
    set({
      items: get().items.map((item) =>
        item.id === itemId
          ? {
              ...item,
              notes,
            }
          : item
      ),
    });
  },

  removeItem: (itemId) => {
    set({
      items: get().items.filter((item) => item.id !== itemId),
    });
  },

  clearCart: () =>
    set({
      items: [],
      customer: null,
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