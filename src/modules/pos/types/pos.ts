import type { Customer } from "@/types/customer";
import type { Product, ProductModifierGroup, ProductVariantGroup } from "@/types/product";

export type PosOrderChannel =
  | "pos"
  | "takeaway"
  | "dine_in"
  | "pickup"
  | "delivery"
  | "website";

export interface PosVariantSelection {
  group_name: string;
  option_name: string;
  price_adjustment: number;
}

export interface PosModifierSelection {
  group_name: string;
  option_name: string;
  qty: number;
  price: number;
}

export interface PosCartItem {
  id: string;
  product_id: number;
  product_name: string;
  product_type: "single" | "bundle";
  image_url: string | null;
  qty: number;
  base_unit_price: number;
  notes: string;
  selected_variants: PosVariantSelection[];
  selected_modifiers: PosModifierSelection[];
  line_total: number;
}

export type PosCartItemInput = Omit<PosCartItem, "id" | "line_total">;

export interface PosHeldCart {
  held_at: string;
  customer: Customer | null;
  order_channel: PosOrderChannel;
  items: PosCartItem[];
}

export interface PosProductConfiguratorValue {
  product: Product;
  outlet_price: number;
  selected_variant_ids: Record<number, number[]>;
  selected_modifier_ids: Record<number, number[]>;
  note: string;
}

export interface PosProductConfiguratorSubmit {
  product: Product;
  qty: number;
  base_unit_price: number;
  notes: string;
  selected_variants: PosVariantSelection[];
  selected_modifiers: PosModifierSelection[];
}

export interface PosDisplayProduct extends Product {
  effective_price: number;
  is_available_in_pos: boolean;
}

export interface PosProductFilterResult {
  items: PosDisplayProduct[];
  categories: Array<{
    id: number;
    name: string;
    count: number;
  }>;
}

export interface PosVariantGroupView extends ProductVariantGroup {
  options: NonNullable<ProductVariantGroup["options"]>;
}

export interface PosModifierGroupView extends ProductModifierGroup {
  options: NonNullable<ProductModifierGroup["options"]>;
}

export interface PosCartState {
  items: PosCartItem[];
  customer: Customer | null;
  orderChannel: PosOrderChannel;
  heldCartMeta: PosHeldCart | null;
  setCustomer: (customer: Customer | null) => void;
  setOrderChannel: (channel: PosOrderChannel) => void;
  addItem: (item: PosCartItemInput) => void;
  updateQty: (itemId: string, qty: number) => void;
  updateNotes: (itemId: string, notes: string) => void;
  removeItem: (itemId: string) => void;
  clearCart: () => void;
  holdCart: () => void;
  restoreHeldCart: () => boolean;
  discardHeldCart: () => void;
}

export interface PosPaymentMethodOption {
  code: string;
  name: string;
  type: "cash" | "qris" | "transfer" | "ewallet" | "other";
  is_active: boolean;
  requires_reference?: boolean;
  allow_overpay?: boolean;
}

export interface PosPaymentSplitRow {
  id: string;
  payment_method_code: string;
  amount: number;
  reference_number: string;
  notes: string;
}

export interface PosVoucher {
  id: number;
  code: string;
  name: string;
  description?: string | null;
  discount_type: "percent" | "fixed";
  discount_value: number | string;
  max_discount?: number | string | null;
  min_order_total: number | string;
  quota?: number | null;
  used_count?: number;
  starts_at?: string | null;
  ends_at?: string | null;
  is_active: boolean;
  applies_to: "all" | "specific_products" | "specific_categories";
}

export interface PosVoucherEvaluationResult {
  valid: boolean;
  message: string;
  discount_amount: number;
  voucher: PosVoucher | null;
}

export interface PosCheckoutTotals {
  subtotal: number;
  discount: number;
  tax: number;
  serviceCharge: number;
  grandTotal: number;
  paidTotal: number;
  remaining: number;
  changeAmount: number;
}

export interface PosReceiptItemSnapshot {
  product_name: string;
  qty: number;
  unit_price: number;
  notes?: string;
  variants: PosVariantSelection[];
  modifiers: PosModifierSelection[];
  line_total: number;
}

export interface PosReceiptSnapshot {
  order_number: string;
  order_channel: PosOrderChannel;
  outlet_name: string;
  cashier_name: string;
  customer_name?: string | null;
  customer_phone?: string | null;
  ordered_at: string;
  voucher_code?: string | null;
  subtotal: number;
  discount_amount: number;
  tax_amount: number;
  service_charge_amount: number;
  grand_total: number;
  paid_total: number;
  change_amount: number;
  payment_status: "pending" | "success";
  payments: PosPaymentSplitRow[];
  items: PosReceiptItemSnapshot[];
}

export interface PosCheckoutDraftResult {
  message: string;
  order_number: string;
  receipt: PosReceiptSnapshot;
}