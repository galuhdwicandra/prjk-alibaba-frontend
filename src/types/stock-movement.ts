import type { Outlet } from "@/types/outlet";
import type { RawMaterial, Unit } from "@/types/inventory";
import type { User } from "@/types/user";

export type StockAdjustmentReason =
  | "damaged"
  | "expired"
  | "lost"
  | "correction"
  | "waste"
  | "other";

export type StockTransferStatus = "draft" | "sent" | "received" | "cancelled";

export type StockOpnameStatus = "draft" | "posted" | "cancelled";

export type StockMovementType =
  | "purchase"
  | "sale_consumption"
  | "adjustment"
  | "transfer_out"
  | "transfer_in"
  | "opname"
  | "waste";

export interface StockAdjustmentItem {
  id: number;
  stock_adjustment_id: number;
  raw_material_id: number;
  qty_difference: number | string;
  unit_id: number;
  notes?: string | null;
  raw_material?: RawMaterial | null;
  unit?: Unit | null;
}

export interface StockAdjustment {
  id: number;
  outlet_id: number;
  adjustment_number: string;
  adjustment_date: string;
  reason: StockAdjustmentReason;
  notes?: string | null;
  created_by?: number | null;
  approved_by?: number | null;
  approved_at?: string | null;
  outlet?: Outlet | null;
  creator?: User | null;
  approver?: User | null;
  items?: StockAdjustmentItem[];
}

export interface StockTransferItem {
  id: number;
  stock_transfer_id: number;
  raw_material_id: number;
  qty_sent: number | string;
  qty_received?: number | string | null;
  unit_id: number;
  notes?: string | null;
  raw_material?: RawMaterial | null;
  unit?: Unit | null;
}

export interface StockTransfer {
  id: number;
  source_outlet_id: number;
  target_outlet_id: number;
  transfer_number: string;
  status: StockTransferStatus;
  transfer_date: string;
  sent_at?: string | null;
  received_at?: string | null;
  notes?: string | null;
  created_by?: number | null;
  received_by?: number | null;
  source_outlet?: Outlet | null;
  target_outlet?: Outlet | null;
  creator?: User | null;
  receiver?: User | null;
  items?: StockTransferItem[];
}

export interface StockOpnameItem {
  id: number;
  stock_opname_id: number;
  raw_material_id: number;
  system_qty: number | string;
  actual_qty: number | string;
  difference_qty: number | string;
  unit_id: number;
  notes?: string | null;
  raw_material?: RawMaterial | null;
  unit?: Unit | null;
}

export interface StockOpname {
  id: number;
  outlet_id: number;
  opname_number: string;
  opname_date: string;
  status: StockOpnameStatus;
  notes?: string | null;
  created_by?: number | null;
  posted_by?: number | null;
  posted_at?: string | null;
  outlet?: Outlet | null;
  creator?: User | null;
  poster?: User | null;
  items?: StockOpnameItem[];
}

export interface StockMovementItem {
  id: number;
  stock_movement_id: number;
  raw_material_id: number;
  qty_in: number | string;
  qty_out: number | string;
  unit_cost: number | string;
  notes?: string | null;
  raw_material?: RawMaterial | null;
}

export interface StockMovement {
  id: number;
  outlet_id: number;
  movement_type: StockMovementType;
  reference_type?: string | null;
  reference_id?: number | null;
  movement_date: string;
  notes?: string | null;
  created_by?: number | null;
  outlet?: Outlet | null;
  creator?: User | null;
  items?: StockMovementItem[];
}