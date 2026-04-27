import { apiClient } from "@/services/api/api-client";
import type { ApiResponse } from "@/types/api";
import type {
  DashboardBestOutlet,
  DashboardCashDiscrepancy,
  DashboardCriticalStock,
  DashboardFilter,
  DashboardOrderRow,
  DashboardOverview,
  DashboardSalesTrendItem,
  DashboardSummary,
  DashboardTopProduct,
} from "@/types/dashboard";

const dashboardEndpoints = {
  overview: "/dashboard/overview",
  summary: "/dashboard/summary",
  salesTrend: "/dashboard/sales-trend",
  topProducts: "/dashboard/top-products",
  bestOutlets: "/dashboard/best-outlets",
  criticalStocks: "/dashboard/critical-stocks",
  pendingOrders: "/dashboard/pending-orders",
  overdueOrders: "/dashboard/overdue-orders",
  cashDiscrepancies: "/dashboard/cash-discrepancies",
};

export const dashboardService = {
  async getOverview(params: DashboardFilter = {}) {
    const response = await apiClient.get<ApiResponse<DashboardOverview>>(
      dashboardEndpoints.overview,
      { params }
    );

    return response.data;
  },

  async getSummary(params: DashboardFilter = {}) {
    const response = await apiClient.get<ApiResponse<DashboardSummary>>(
      dashboardEndpoints.summary,
      { params }
    );

    return response.data;
  },

  async getSalesTrend(params: DashboardFilter = {}) {
    const response = await apiClient.get<ApiResponse<DashboardSalesTrendItem[]>>(
      dashboardEndpoints.salesTrend,
      { params }
    );

    return response.data;
  },

  async getTopProducts(params: DashboardFilter = {}) {
    const response = await apiClient.get<ApiResponse<DashboardTopProduct[]>>(
      dashboardEndpoints.topProducts,
      { params }
    );

    return response.data;
  },

  async getBestOutlets(params: DashboardFilter = {}) {
    const response = await apiClient.get<ApiResponse<DashboardBestOutlet[]>>(
      dashboardEndpoints.bestOutlets,
      { params }
    );

    return response.data;
  },

  async getCriticalStocks(params: DashboardFilter = {}) {
    const response = await apiClient.get<ApiResponse<DashboardCriticalStock[]>>(
      dashboardEndpoints.criticalStocks,
      { params }
    );

    return response.data;
  },

  async getPendingOrders(params: DashboardFilter = {}) {
    const response = await apiClient.get<ApiResponse<DashboardOrderRow[]>>(
      dashboardEndpoints.pendingOrders,
      { params }
    );

    return response.data;
  },

  async getOverdueOrders(params: DashboardFilter = {}) {
    const response = await apiClient.get<ApiResponse<DashboardOrderRow[]>>(
      dashboardEndpoints.overdueOrders,
      { params }
    );

    return response.data;
  },

  async getCashDiscrepancies(params: DashboardFilter = {}) {
    const response = await apiClient.get<ApiResponse<DashboardCashDiscrepancy[]>>(
      dashboardEndpoints.cashDiscrepancies,
      { params }
    );

    return response.data;
  },
};