// src/modules/admin/services/purchasing.service.ts

import { apiClient } from "@/services/api/api-client";
import { endpoints } from "@/services/api/endpoints";
import type { ApiMeta, ApiResponse } from "@/types/api";
import type {
  GoodsReceipt,
  GoodsReceiptStatus,
  PurchaseOrder,
  PurchaseOrderStatus,
  Supplier,
} from "@/types/purchasing";

export interface PaginatedResult<T> {
  items: T[];
  meta: ApiMeta | null;
  message: string;
}

export interface PurchasingPaginationQuery {
  page?: number;
  per_page?: number;
  search?: string;
}

export interface SupplierQuery extends PurchasingPaginationQuery {
  is_active?: boolean | "";
}

export interface PurchaseOrderQuery extends PurchasingPaginationQuery {
  outlet_id?: number | "";
  supplier_id?: number | "";
  status?: PurchaseOrderStatus | "";
}

export interface GoodsReceiptQuery extends PurchasingPaginationQuery {
  purchase_order_id?: number | "";
  outlet_id?: number | "";
  status?: GoodsReceiptStatus | "";
}

export interface SupplierPayload {
  code?: string | null;
  name: string;
  phone?: string | null;
  email?: string | null;
  address?: string | null;
  city?: string | null;
  contact_person?: string | null;
  is_active?: boolean;
}

export interface PurchaseOrderItemPayload {
  raw_material_id: number;
  qty_ordered: number;
  unit_id: number;
  unit_price: number;
  discount_amount?: number;
  notes?: string | null;
}

export interface PurchaseOrderPayload {
  outlet_id: number;
  supplier_id: number;
  order_date: string;
  expected_date?: string | null;
  discount_amount?: number;
  tax_amount?: number;
  notes?: string | null;
  items: PurchaseOrderItemPayload[];
}

export interface GoodsReceiptItemPayload {
  raw_material_id: number;
  qty_received: number;
  unit_id: number;
  unit_cost: number;
  expired_at?: string | null;
  notes?: string | null;
}

export interface GoodsReceiptPayload {
  purchase_order_id: number;
  outlet_id: number;
  received_date: string;
  notes?: string | null;
  items: GoodsReceiptItemPayload[];
}

const unwrapPaginated = <T>(response: ApiResponse<T[]>): PaginatedResult<T> => ({
  items: response.data,
  meta: response.meta ?? null,
  message: response.message,
});

export const purchasingService = {
  async getSuppliers(params: SupplierQuery = {}) {
    const response = await apiClient.get<ApiResponse<Supplier[]>>(endpoints.suppliers.index, {
      params,
    });

    return unwrapPaginated(response.data);
  },

  async createSupplier(payload: SupplierPayload) {
    const response = await apiClient.post<ApiResponse<Supplier>>(endpoints.suppliers.store, payload);
    return response.data;
  },

  async updateSupplier(id: number, payload: SupplierPayload) {
    const response = await apiClient.put<ApiResponse<Supplier>>(
      endpoints.suppliers.update(id),
      payload
    );

    return response.data;
  },

  async deleteSupplier(id: number) {
    const response = await apiClient.delete<ApiResponse<null>>(endpoints.suppliers.destroy(id));
    return response.data;
  },

  async getPurchaseOrders(params: PurchaseOrderQuery = {}) {
    const response = await apiClient.get<ApiResponse<PurchaseOrder[]>>(
      endpoints.purchaseOrders.index,
      { params }
    );

    return unwrapPaginated(response.data);
  },

  async createPurchaseOrder(payload: PurchaseOrderPayload) {
    const response = await apiClient.post<ApiResponse<PurchaseOrder>>(
      endpoints.purchaseOrders.store,
      payload
    );

    return response.data;
  },

  async updatePurchaseOrder(id: number, payload: PurchaseOrderPayload) {
    const response = await apiClient.put<ApiResponse<PurchaseOrder>>(
      endpoints.purchaseOrders.update(id),
      payload
    );

    return response.data;
  },

  async deletePurchaseOrder(id: number) {
    const response = await apiClient.delete<ApiResponse<null>>(
      endpoints.purchaseOrders.destroy(id)
    );

    return response.data;
  },

  async approvePurchaseOrder(id: number) {
    const response = await apiClient.post<ApiResponse<PurchaseOrder>>(
      endpoints.purchaseOrders.approve(id)
    );

    return response.data;
  },

  async cancelPurchaseOrder(id: number) {
    const response = await apiClient.post<ApiResponse<PurchaseOrder>>(
      endpoints.purchaseOrders.cancel(id)
    );

    return response.data;
  },

  async getGoodsReceipts(params: GoodsReceiptQuery = {}) {
    const response = await apiClient.get<ApiResponse<GoodsReceipt[]>>(
      endpoints.goodsReceipts.index,
      { params }
    );

    return unwrapPaginated(response.data);
  },

  async createGoodsReceipt(payload: GoodsReceiptPayload) {
    const response = await apiClient.post<ApiResponse<GoodsReceipt>>(
      endpoints.goodsReceipts.store,
      payload
    );

    return response.data;
  },

  async updateGoodsReceipt(id: number, payload: GoodsReceiptPayload) {
    const response = await apiClient.put<ApiResponse<GoodsReceipt>>(
      endpoints.goodsReceipts.update(id),
      payload
    );

    return response.data;
  },

  async deleteGoodsReceipt(id: number) {
    const response = await apiClient.delete<ApiResponse<null>>(endpoints.goodsReceipts.destroy(id));
    return response.data;
  },

  async postGoodsReceipt(id: number) {
    const response = await apiClient.post<ApiResponse<GoodsReceipt>>(
      endpoints.goodsReceipts.post(id)
    );

    return response.data;
  },

  async cancelGoodsReceipt(id: number) {
    const response = await apiClient.post<ApiResponse<GoodsReceipt>>(
      endpoints.goodsReceipts.cancel(id)
    );

    return response.data;
  },
};