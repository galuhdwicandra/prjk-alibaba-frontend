import { apiClient } from "@/services/api/api-client";
import type {
  ReportApiResponse,
  ReportData,
  ReportDefinition,
  ReportExportFormat,
  ReportExportParams,
  ReportFilterParams,
  ReportKey,
} from "@/types/report";

export const reportDefinitions: ReportDefinition[] = [
  {
    key: "sales-summary",
    label: "Ringkasan Penjualan",
    description: "Rekap omzet, transaksi, diskon, pajak, dan total penjualan.",
    category: "sales",
    endpoint: "/reports/sales-summary",
  },
  {
    key: "sales-trend",
    label: "Tren Penjualan",
    description: "Pergerakan penjualan berdasarkan periode.",
    category: "sales",
    endpoint: "/reports/sales-trend",
  },
  {
    key: "sales-by-outlet",
    label: "Penjualan per Outlet",
    description: "Perbandingan performa penjualan antar outlet.",
    category: "sales",
    endpoint: "/reports/sales-by-outlet",
  },
  {
    key: "sales-by-cashier",
    label: "Penjualan per Kasir",
    description: "Ringkasan transaksi berdasarkan kasir.",
    category: "sales",
    endpoint: "/reports/sales-by-cashier",
  },
  {
    key: "top-products",
    label: "Produk Terlaris",
    description: "Daftar produk dengan penjualan tertinggi.",
    category: "sales",
    endpoint: "/reports/top-products",
  },
  {
    key: "payment-summary",
    label: "Ringkasan Pembayaran",
    description: "Rekap metode pembayaran dan nominal transaksi.",
    category: "cash",
    endpoint: "/reports/payment-summary",
  },
  {
    key: "promo-usage",
    label: "Pemakaian Promo",
    description: "Rekap penggunaan promo dan potongan transaksi.",
    category: "sales",
    endpoint: "/reports/promo-usage",
  },
  {
    key: "void-refund",
    label: "Void & Refund",
    description: "Monitoring transaksi batal dan refund.",
    category: "cash",
    endpoint: "/reports/void-refund",
  },
  {
    key: "low-stocks",
    label: "Stok Minimum",
    description: "Daftar bahan baku yang berada di bawah batas minimum.",
    category: "inventory",
    endpoint: "/reports/low-stocks",
  },
  {
    key: "purchase-materials",
    label: "Pembelian Bahan",
    description: "Rekap pembelian bahan baku dan penerimaan barang.",
    category: "purchase",
    endpoint: "/reports/purchase-materials",
  },
  {
    key: "expenses",
    label: "Pengeluaran",
    description: "Rekap pengeluaran operasional outlet.",
    category: "expense",
    endpoint: "/reports/expenses",
  },
  {
    key: "shift-summary",
    label: "Ringkasan Shift",
    description: "Rekap buka tutup shift dan pergerakan kas.",
    category: "cash",
    endpoint: "/reports/shift-summary",
  },
];

const reportEndpointMap = reportDefinitions.reduce<Record<ReportKey, string>>(
  (accumulator, definition) => ({
    ...accumulator,
    [definition.key]: definition.endpoint,
  }),
  {
    "sales-summary": "/reports/sales-summary",
    "sales-trend": "/reports/sales-trend",
    "sales-by-outlet": "/reports/sales-by-outlet",
    "sales-by-cashier": "/reports/sales-by-cashier",
    "top-products": "/reports/top-products",
    "payment-summary": "/reports/payment-summary",
    "promo-usage": "/reports/promo-usage",
    "void-refund": "/reports/void-refund",
    "low-stocks": "/reports/low-stocks",
    "purchase-materials": "/reports/purchase-materials",
    expenses: "/reports/expenses",
    "shift-summary": "/reports/shift-summary",
    "order-details": "/reports/order-details",
  }
);

export const reportService = {
  async getReport(report: ReportKey, params: ReportFilterParams): Promise<ReportApiResponse> {
    const response = await apiClient.get<ReportApiResponse>(reportEndpointMap[report], {
      params,
    });

    return response.data;
  },

  async exportReport(report: ReportKey, params: ReportExportParams): Promise<Blob> {
    const response = await apiClient.get<Blob>(`/reports/${report}/export`, {
      params,
      responseType: "blob",
    });

    return response.data;
  },

  downloadBlob(blob: Blob, report: ReportKey, format: ReportExportFormat) {
    const url = window.URL.createObjectURL(blob);
    const anchor = document.createElement("a");

    anchor.href = url;
    anchor.download = `${report}.${format}`;
    document.body.appendChild(anchor);
    anchor.click();
    anchor.remove();

    window.URL.revokeObjectURL(url);
  },

  normalizeRows(data: ReportData): Record<string, string | number | boolean | null>[] {
    if (Array.isArray(data)) {
      return data;
    }

    return [data];
  },
};