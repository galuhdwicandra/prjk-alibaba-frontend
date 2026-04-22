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