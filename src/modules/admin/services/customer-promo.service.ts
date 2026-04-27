import { apiClient } from "@/services/api/api-client";
import { endpoints } from "@/services/api/endpoints";
import type { ApiMeta, ApiResponse } from "@/types/api";
import type { Customer, CustomerPayload, CustomerQuery } from "@/types/customer";
import type {
  Promotion,
  PromotionPayload,
  PromotionQuery,
  Voucher,
  VoucherPayload,
  VoucherQuery,
} from "@/types/promo";

export interface PaginatedResult<T> {
  items: T[];
  meta: ApiMeta | null;
  message: string;
}

const unwrapPaginated = <T>(response: ApiResponse<T[]>): PaginatedResult<T> => ({
  items: response.data,
  meta: response.meta ?? null,
  message: response.message,
});

export const customerPromoService = {
  async getCustomers(params: CustomerQuery = {}) {
    const response = await apiClient.get<ApiResponse<Customer[]>>(endpoints.customers.index, {
      params,
    });

    return unwrapPaginated(response.data);
  },

  async getCustomer(id: number) {
    const response = await apiClient.get<ApiResponse<Customer>>(endpoints.customers.show(id));

    return response.data;
  },

  async createCustomer(payload: CustomerPayload) {
    const response = await apiClient.post<ApiResponse<Customer>>(
      endpoints.customers.store,
      payload
    );

    return response.data;
  },

  async updateCustomer(id: number, payload: CustomerPayload) {
    const response = await apiClient.put<ApiResponse<Customer>>(
      endpoints.customers.update(id),
      payload
    );

    return response.data;
  },

  async deleteCustomer(id: number) {
    const response = await apiClient.delete<ApiResponse<null>>(endpoints.customers.destroy(id));

    return response.data;
  },

  async getVouchers(params: VoucherQuery = {}) {
    const response = await apiClient.get<ApiResponse<Voucher[]>>(endpoints.vouchers.index, {
      params,
    });

    return unwrapPaginated(response.data);
  },

  async getVoucher(id: number) {
    const response = await apiClient.get<ApiResponse<Voucher>>(endpoints.vouchers.show(id));

    return response.data;
  },

  async createVoucher(payload: VoucherPayload) {
    const response = await apiClient.post<ApiResponse<Voucher>>(
      endpoints.vouchers.store,
      payload
    );

    return response.data;
  },

  async updateVoucher(id: number, payload: VoucherPayload) {
    const response = await apiClient.put<ApiResponse<Voucher>>(
      endpoints.vouchers.update(id),
      payload
    );

    return response.data;
  },

  async deleteVoucher(id: number) {
    const response = await apiClient.delete<ApiResponse<null>>(endpoints.vouchers.destroy(id));

    return response.data;
  },

  async getPromotions(params: PromotionQuery = {}) {
    const response = await apiClient.get<ApiResponse<Promotion[]>>(endpoints.promotions.index, {
      params,
    });

    return unwrapPaginated(response.data);
  },

  async getPromotion(id: number) {
    const response = await apiClient.get<ApiResponse<Promotion>>(endpoints.promotions.show(id));

    return response.data;
  },

  async createPromotion(payload: PromotionPayload) {
    const response = await apiClient.post<ApiResponse<Promotion>>(
      endpoints.promotions.store,
      payload
    );

    return response.data;
  },

  async updatePromotion(id: number, payload: PromotionPayload) {
    const response = await apiClient.put<ApiResponse<Promotion>>(
      endpoints.promotions.update(id),
      payload
    );

    return response.data;
  },

  async deletePromotion(id: number) {
    const response = await apiClient.delete<ApiResponse<null>>(
      endpoints.promotions.destroy(id)
    );

    return response.data;
  },
};