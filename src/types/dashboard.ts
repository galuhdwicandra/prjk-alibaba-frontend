export interface DashboardFilter {
  outlet_id?: number | "";
  date_from?: string;
  date_until?: string;
  overdue_minutes?: number;
  limit?: number;
}

export interface DashboardSummary {
  today_sales?: number;
  today_revenue?: number;
  month_sales?: number;
  month_revenue?: number;
  today_orders?: number;
  month_orders?: number;
  pending_orders?: number;
  overdue_orders?: number;
  critical_stocks?: number;
  active_cashiers?: number;
  cash_discrepancies?: number;
}

export interface DashboardTopProduct {
  product_id: number | null;
  product_name: string;
  total_qty: number;
  total_sales: number;
}

export interface DashboardBestOutlet {
  outlet_id: number;
  outlet_code: string;
  outlet_name: string;
  total_orders: number;
  total_revenue: number;
}

export interface DashboardCriticalStock {
  outlet_id: number;
  outlet_code: string;
  outlet_name: string;
  raw_material_id: number;
  raw_material_name: string;
  qty_on_hand: number;
  qty_reserved: number;
  minimum_stock: number;
  unit_code: string | null;
}

export interface DashboardOrderRow {
  order_id: number;
  order_number: string;
  queue_number: string | null;
  order_channel: string;
  order_status: string;
  payment_status: string;
  grand_total: number;
  ordered_at: string;
  outlet_id: number;
  outlet_code: string;
  outlet_name: string;
  cashier_name: string | null;
}

export interface DashboardCashDiscrepancy {
  cashier_shift_id: number;
  shift_number: string;
  outlet_id: number;
  outlet_code: string;
  outlet_name: string;
  cashier_name: string;
  opened_at: string;
  closed_at: string | null;
  expected_cash: number;
  closing_cash: number;
  cash_difference: number;
}

export interface DashboardSalesTrendItem {
  date?: string;
  period?: string;
  label?: string;
  total_orders?: number;
  total_revenue?: number;
  revenue?: number;
  grand_total?: number;
}

export interface DashboardOverviewMeta {
  filters: DashboardFilter;
  generated_at: string;
}

export interface DashboardOverview {
  summary: DashboardSummary;
  top_products: DashboardTopProduct[];
  best_outlets: DashboardBestOutlet[];
  critical_stocks: DashboardCriticalStock[];
  pending_orders: DashboardOrderRow[];
  overdue_orders: DashboardOrderRow[];
  cash_discrepancies: DashboardCashDiscrepancy[];
  meta?: DashboardOverviewMeta;
}