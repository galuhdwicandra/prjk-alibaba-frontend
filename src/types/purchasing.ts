// src/types/purchasing.ts

import type { Outlet } from "@/types/outlet";
import type { RawMaterial, Unit } from "@/types/inventory";
import type { User } from "@/types/user";

export type PurchaseOrderStatus =
  | "draft"
  | "approved"
  | "partial_received"
  | "received"
  | "cancelled";

export type GoodsReceiptStatus = "draft" | "posted" | "cancelled";

export interface Supplier {
  id: number;
  code: string | null;
  name: string;
  phone: string | null;
  email: string | null;
  address: string | null;
  city: string | null;
  contact_person: string | null;
  is_active: boolean;
  purchase_orders_count?: number;
  purchaseOrders_count?: number;
  created_at?: string | null;
  updated_at?: string | null;
  deleted_at?: string | null;
}

export interface PurchaseOrderItem {
  id: number;
  purchase_order_id: number;
  raw_material_id: number;
  unit_id: number;
  qty_ordered: number;
  unit_price: number;
  discount_amount: number;
  line_total: number;
  notes: string | null;
  raw_material?: RawMaterial | null;
  rawMaterial?: RawMaterial | null;
  unit?: Unit | null;
  created_at?: string | null;
  updated_at?: string | null;
}

export interface PurchaseOrder {
  id: number;
  outlet_id: number;
  supplier_id: number;
  po_number: string;
  status: PurchaseOrderStatus;
  order_date: string;
  expected_date: string | null;
  subtotal: number;
  discount_amount: number;
  tax_amount: number;
  total_amount: number;
  notes: string | null;
  approved_by: number | null;
  approved_at: string | null;
  created_by: number | null;
  outlet?: Outlet | null;
  supplier?: Supplier | null;
  approver?: User | null;
  creator?: User | null;
  items?: PurchaseOrderItem[];
  goods_receipts?: GoodsReceipt[];
  goodsReceipts?: GoodsReceipt[];
  created_at?: string | null;
  updated_at?: string | null;
}

export interface GoodsReceiptItem {
  id: number;
  goods_receipt_id: number;
  raw_material_id: number;
  unit_id: number;
  qty_received: number;
  unit_cost: number;
  line_total: number;
  expired_at: string | null;
  notes: string | null;
  raw_material?: RawMaterial | null;
  rawMaterial?: RawMaterial | null;
  unit?: Unit | null;
  created_at?: string | null;
  updated_at?: string | null;
}

export interface GoodsReceipt {
  id: number;
  purchase_order_id: number;
  outlet_id: number;
  receipt_number: string;
  received_date: string;
  status: GoodsReceiptStatus;
  notes: string | null;
  received_by: number | null;
  purchase_order?: PurchaseOrder | null;
  purchaseOrder?: PurchaseOrder | null;
  outlet?: Outlet | null;
  receiver?: User | null;
  items?: GoodsReceiptItem[];
  created_at?: string | null;
  updated_at?: string | null;
}