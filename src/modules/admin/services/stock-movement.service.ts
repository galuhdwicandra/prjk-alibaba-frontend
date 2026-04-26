import { apiClient } from "@/services/api/api-client";
import type { ApiMeta, ApiResponse } from "@/types/api";
import type {
  StockAdjustment,
  StockAdjustmentReason,
  StockMovement,
  StockMovementType,
  StockOpname,
  StockOpnameStatus,
  StockTransfer,
  StockTransferStatus,
} from "@/types/stock-movement";

export interface PaginatedResult<T> {
  items: T[];
  meta: ApiMeta | null;
  message: string;
}

export interface StockMovementQuery {
  page?: number;
  per_page?: number;
  search?: string;
  outlet_id?: number | "";
  movement_type?: StockMovementType | "";
  status?: string;
  reason?: StockAdjustmentReason | "";
}

export interface StockAdjustmentItemPayload {
  raw_material_id: number;
  qty_difference: number;
  unit_id: number;
  notes?: string | null;
}

export interface StockAdjustmentPayload {
  outlet_id: number;
  adjustment_date: string;
  reason: StockAdjustmentReason;
  notes?: string | null;
  items: StockAdjustmentItemPayload[];
}

export interface StockTransferItemPayload {
  raw_material_id: number;
  qty_sent: number;
  qty_received?: number | null;
  unit_id: number;
  notes?: string | null;
}

export interface StockTransferPayload {
  source_outlet_id: number;
  target_outlet_id: number;
  transfer_date: string;
  notes?: string | null;
  items: StockTransferItemPayload[];
}

export interface ReceiveStockTransferPayload {
  received_at?: string | null;
  notes?: string | null;
  items?: Array<{
    stock_transfer_item_id: number;
    qty_received: number;
  }>;
}

export interface StockOpnameItemPayload {
  raw_material_id: number;
  system_qty?: number;
  actual_qty: number;
  unit_id: number;
  notes?: string | null;
}

export interface StockOpnamePayload {
  outlet_id: number;
  opname_date: string;
  notes?: string | null;
  items: StockOpnameItemPayload[];
}

const unwrapPaginated = <T>(response: ApiResponse<T[]>): PaginatedResult<T> => ({
  items: response.data,
  meta: response.meta ?? null,
  message: response.message,
});

export const stockMovementService = {
  async getStockMovements(params: StockMovementQuery = {}) {
    const response = await apiClient.get<ApiResponse<StockMovement[]>>("/stock-movements", {
      params,
    });

    return unwrapPaginated(response.data);
  },

  async getStockAdjustments(params: StockMovementQuery = {}) {
    const response = await apiClient.get<ApiResponse<StockAdjustment[]>>("/stock-adjustments", {
      params,
    });

    return unwrapPaginated(response.data);
  },

  async createStockAdjustment(payload: StockAdjustmentPayload) {
    const response = await apiClient.post<ApiResponse<StockAdjustment>>(
      "/stock-adjustments",
      payload
    );

    return response.data;
  },

  async updateStockAdjustment(id: number, payload: StockAdjustmentPayload) {
    const response = await apiClient.put<ApiResponse<StockAdjustment>>(
      `/stock-adjustments/${id}`,
      payload
    );

    return response.data;
  },

  async deleteStockAdjustment(id: number) {
    const response = await apiClient.delete<ApiResponse<null>>(`/stock-adjustments/${id}`);
    return response.data;
  },

  async getStockTransfers(params: StockMovementQuery & { status?: StockTransferStatus | "" } = {}) {
    const response = await apiClient.get<ApiResponse<StockTransfer[]>>("/stock-transfers", {
      params,
    });

    return unwrapPaginated(response.data);
  },

  async createStockTransfer(payload: StockTransferPayload) {
    const response = await apiClient.post<ApiResponse<StockTransfer>>("/stock-transfers", payload);
    return response.data;
  },

  async updateStockTransfer(id: number, payload: StockTransferPayload) {
    const response = await apiClient.put<ApiResponse<StockTransfer>>(
      `/stock-transfers/${id}`,
      payload
    );

    return response.data;
  },

  async deleteStockTransfer(id: number) {
    const response = await apiClient.delete<ApiResponse<null>>(`/stock-transfers/${id}`);
    return response.data;
  },

  async sendStockTransfer(id: number) {
    const response = await apiClient.post<ApiResponse<StockTransfer>>(
      `/stock-transfers/${id}/send`
    );

    return response.data;
  },

  async receiveStockTransfer(id: number, payload: ReceiveStockTransferPayload = {}) {
    const response = await apiClient.post<ApiResponse<StockTransfer>>(
      `/stock-transfers/${id}/receive`,
      payload
    );

    return response.data;
  },

  async cancelStockTransfer(id: number) {
    const response = await apiClient.post<ApiResponse<StockTransfer>>(
      `/stock-transfers/${id}/cancel`
    );

    return response.data;
  },

  async getStockOpnames(params: StockMovementQuery & { status?: StockOpnameStatus | "" } = {}) {
    const response = await apiClient.get<ApiResponse<StockOpname[]>>("/stock-opnames", {
      params,
    });

    return unwrapPaginated(response.data);
  },

  async createStockOpname(payload: StockOpnamePayload) {
    const response = await apiClient.post<ApiResponse<StockOpname>>("/stock-opnames", payload);
    return response.data;
  },

  async updateStockOpname(id: number, payload: StockOpnamePayload) {
    const response = await apiClient.put<ApiResponse<StockOpname>>(`/stock-opnames/${id}`, payload);
    return response.data;
  },

  async deleteStockOpname(id: number) {
    const response = await apiClient.delete<ApiResponse<null>>(`/stock-opnames/${id}`);
    return response.data;
  },

  async postStockOpname(id: number, payload: { posted_at?: string | null } = {}) {
    const response = await apiClient.post<ApiResponse<StockOpname>>(
      `/stock-opnames/${id}/post`,
      payload
    );

    return response.data;
  },

  async cancelStockOpname(id: number) {
    const response = await apiClient.post<ApiResponse<StockOpname>>(
      `/stock-opnames/${id}/cancel`
    );

    return response.data;
  },
};