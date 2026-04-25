import type { Outlet } from "@/types/outlet";
import type { Product } from "@/types/product";

export interface Unit {
  id: number;
  name: string;
  code: string;
  created_at?: string | null;
  updated_at?: string | null;
}

export interface UnitConversion {
  id: number;
  from_unit_id: number;
  to_unit_id: number;
  multiplier: number;
  from_unit?: Unit | null;
  to_unit?: Unit | null;
  created_at?: string | null;
  updated_at?: string | null;
}

export interface RawMaterialCategory {
  id: number;
  name: string;
  created_at?: string | null;
  updated_at?: string | null;
}

export interface OutletMaterialStock {
  id: number;
  outlet_id: number;
  raw_material_id: number;
  qty_on_hand: number;
  qty_reserved: number;
  last_movement_at?: string | null;
  outlet?: Outlet | null;
  raw_material?: RawMaterial | null;
  rawMaterial?: RawMaterial | null;
  created_at?: string | null;
  updated_at?: string | null;
}

export interface RawMaterial {
  id: number;
  raw_material_category_id: number;
  unit_id: number;
  code?: string | null;
  name: string;
  sku?: string | null;
  description?: string | null;
  minimum_stock: number;
  last_purchase_price: number;
  average_cost: number;
  is_active: boolean;
  category?: RawMaterialCategory | null;
  unit?: Unit | null;
  outlet_stocks?: OutletMaterialStock[];
  outletStocks?: OutletMaterialStock[];
  created_at?: string | null;
  updated_at?: string | null;
}

export interface ProductBomItem {
  id: number;
  product_bom_id: number;
  raw_material_id: number;
  unit_id: number;
  qty: number;
  waste_percent: number;
  raw_material?: RawMaterial | null;
  rawMaterial?: RawMaterial | null;
  unit?: Unit | null;
  created_at?: string | null;
  updated_at?: string | null;
}

export interface ProductBom {
  id: number;
  product_id: number;
  version: number;
  is_active: boolean;
  notes?: string | null;
  product?: Product | null;
  items?: ProductBomItem[];
  created_at?: string | null;
  updated_at?: string | null;
}