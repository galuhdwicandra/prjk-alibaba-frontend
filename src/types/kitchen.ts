import type { ApiMeta } from "@/types/api";

export type KitchenTicketStatus =
  | "pending"
  | "preparing"
  | "ready"
  | "served"
  | "cancelled";

export type KitchenOrderChannel =
  | "pos"
  | "dine_in"
  | "takeaway"
  | "pickup"
  | "delivery"
  | "website";

export interface KitchenTicketOrderOutlet {
  id: number;
  code: string;
  name: string;
}

export interface KitchenTicketOrderCustomer {
  id: number;
  code?: string | null;
  name: string;
  phone?: string | null;
}

export interface KitchenTicketOrder {
  id: number;
  order_number: string;
  queue_number?: string | null;
  order_channel: KitchenOrderChannel;
  order_status: string;
  payment_status: string;
  outlet_id: number;
  outlet?: KitchenTicketOrderOutlet | null;
  customer?: KitchenTicketOrderCustomer | null;
  ordered_at?: string | null;
  notes?: string | null;
}

export interface KitchenTicketOrderItem {
  id: number;
  product_id?: number | null;
  product_name_snapshot: string;
  sku_snapshot?: string | null;
  qty: number | string;
  unit_price: number | string;
  discount_amount: number | string;
  line_total: number | string;
  notes?: string | null;
}

export interface KitchenTicketItem {
  id: number;
  kitchen_ticket_id: number;
  order_item_id: number;
  item_name_snapshot: string;
  qty: number | string;
  notes?: string | null;
  order_item?: KitchenTicketOrderItem | null;
  created_at?: string | null;
  updated_at?: string | null;
}

export interface KitchenTicket {
  id: number;
  order_id: number;
  ticket_number: string;
  status: KitchenTicketStatus;
  printed_at?: string | null;
  prepared_at?: string | null;
  ready_at?: string | null;
  order?: KitchenTicketOrder | null;
  items?: KitchenTicketItem[];
  created_at?: string | null;
  updated_at?: string | null;
}

export interface KitchenTicketQuery {
  page?: number;
  per_page?: number;
  search?: string;
  status?: KitchenTicketStatus | "";
  outlet_id?: number | "";
  order_id?: number | "";
}

export interface KitchenTicketActionPayload {
  notes?: string | null;
  printed_at?: string | null;
  prepared_at?: string | null;
  ready_at?: string | null;
  completed_at?: string | null;
  cancelled_at?: string | null;
}

export interface KitchenPaginatedResult<T> {
  items: T[];
  meta: ApiMeta | null;
  message: string;
}