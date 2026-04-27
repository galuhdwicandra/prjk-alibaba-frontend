export type VoucherDiscountType = "percent" | "fixed";
export type VoucherAppliesTo = "all" | "specific_products" | "specific_categories";
export type PromotionType = "discount" | "bundle" | "buy_x_get_y";
export type PromotionRuleType = "min_total" | "product" | "category" | "outlet" | "channel" | "time";

export interface Voucher {
  id: number;
  code: string;
  name: string;
  description: string | null;
  discount_type: VoucherDiscountType;
  discount_value: number | string;
  max_discount: number | string | null;
  min_order_total: number | string;
  quota: number | null;
  used_count: number;
  starts_at: string | null;
  ends_at: string | null;
  is_active: boolean;
  applies_to: VoucherAppliesTo;
  created_at?: string | null;
  updated_at?: string | null;
}

export interface VoucherQuery {
  page?: number;
  per_page?: number;
  search?: string;
  discount_type?: VoucherDiscountType | "";
  applies_to?: VoucherAppliesTo | "";
  is_active?: boolean | "";
}

export interface VoucherPayload {
  code: string;
  name: string;
  description?: string | null;
  discount_type: VoucherDiscountType;
  discount_value: number;
  max_discount?: number | null;
  min_order_total?: number;
  quota?: number | null;
  used_count?: number;
  starts_at?: string | null;
  ends_at?: string | null;
  is_active?: boolean;
  applies_to: VoucherAppliesTo;
}

export interface PromotionRule {
  id: number;
  promotion_id: number;
  rule_type: PromotionRuleType;
  operator: string | null;
  value: string | null;
  created_at?: string | null;
  updated_at?: string | null;
}

export interface Promotion {
  id: number;
  name: string;
  description: string | null;
  promotion_type: PromotionType;
  starts_at: string | null;
  ends_at: string | null;
  priority: number;
  is_active: boolean;
  rules?: PromotionRule[];
  created_at?: string | null;
  updated_at?: string | null;
}

export interface PromotionQuery {
  page?: number;
  per_page?: number;
  search?: string;
  promotion_type?: PromotionType | "";
  is_active?: boolean | "";
}

export interface PromotionPayload {
  name: string;
  description?: string | null;
  promotion_type: PromotionType;
  starts_at?: string | null;
  ends_at?: string | null;
  priority?: number;
  is_active?: boolean;
  rules?: PromotionRulePayload[];
}

export interface PromotionRulePayload {
  rule_type: PromotionRuleType;
  operator?: string | null;
  value?: string | null;
}