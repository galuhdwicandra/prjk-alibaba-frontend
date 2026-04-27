export type ReportKey =
  | "sales-summary"
  | "sales-trend"
  | "sales-by-outlet"
  | "sales-by-cashier"
  | "top-products"
  | "payment-summary"
  | "promo-usage"
  | "void-refund"
  | "low-stocks"
  | "purchase-materials"
  | "expenses"
  | "shift-summary"
  | "order-details";

export type ReportExportFormat = "csv" | "xls" | "pdf";

export type ReportGroupBy = "day" | "week" | "month";

export interface ReportFilterParams {
  date_from?: string;
  date_until?: string;
  outlet_id?: number;
  status?: string;
  search?: string;
  group_by?: ReportGroupBy;
  limit?: number;
  per_page?: number;
}

export interface ReportExportParams extends ReportFilterParams {
  format: ReportExportFormat;
}

export type ReportPrimitiveValue = string | number | boolean | null;

export type ReportRow = Record<string, ReportPrimitiveValue>;

export type ReportData = ReportRow[] | ReportRow;

export interface ReportApiResponse {
  message: string;
  data: ReportData;
}

export interface ReportDefinition {
  key: ReportKey;
  label: string;
  description: string;
  category: "sales" | "cash" | "inventory" | "purchase" | "expense";
  endpoint: string;
}