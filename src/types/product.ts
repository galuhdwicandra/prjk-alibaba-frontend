import type { Outlet } from "@/types/outlet";

export interface ProductCategory {
  id: number;
  name: string;
  slug: string | null;
  sort_order: number;
  is_active: boolean;
  products_count?: number;
  created_at?: string;
  updated_at?: string;
}

export interface ProductPrice {
  id?: number;
  outlet_id: number;
  price: number | string;
  dine_in_price?: number | string | null;
  takeaway_price?: number | string | null;
  delivery_price?: number | string | null;
  starts_at?: string | null;
  ends_at?: string | null;
  is_active?: boolean;
  outlet?: Outlet;
}

export interface ProductOutletStatus {
  id?: number;
  outlet_id: number;
  is_available?: boolean;
  is_hidden?: boolean;
  daily_limit?: number | null;
  notes?: string | null;
  outlet?: Outlet;
}

export interface ProductVariantOption {
  id?: number;
  name: string;
  price_adjustment?: number | string;
  sort_order?: number;
  is_active?: boolean;
}

export interface ProductVariantGroup {
  id?: number;
  name: string;
  selection_type: "single" | "multiple";
  is_required?: boolean;
  sort_order?: number;
  options: ProductVariantOption[];
}

export interface ProductModifierOption {
  id?: number;
  name: string;
  price?: number | string;
  is_active?: boolean;
  sort_order?: number;
}

export interface ProductModifierGroup {
  id?: number;
  name: string;
  min_select?: number;
  max_select?: number;
  is_required?: boolean;
  sort_order?: number;
  options: ProductModifierOption[];
}

export interface ProductBundleItem {
  id?: number;
  bundled_product_id: number;
  qty: number | string;
  bundled_product?: {
    id: number;
    name: string;
    sku?: string | null;
    code?: string | null;
  };
}

export interface Product {
  id: number;
  product_category_id: number;
  sku: string | null;
  code: string | null;
  name: string;
  slug: string | null;
  description: string | null;
  image_url: string | null;
  base_price: number | string;
  product_type: "single" | "bundle";
  is_active: boolean;
  is_featured: boolean;
  track_recipe: boolean;
  track_stock_direct: boolean;
  category?: ProductCategory | null;
  prices?: ProductPrice[];
  outlet_statuses?: ProductOutletStatus[];
  variant_groups?: ProductVariantGroup[];
  modifier_groups?: ProductModifierGroup[];
  bundle_items?: ProductBundleItem[];
  created_at?: string;
  updated_at?: string;
}