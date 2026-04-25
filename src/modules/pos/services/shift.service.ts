// src/modules/pos/services/shift.service.ts

import { apiClient } from "@/services/api/api-client";
import { endpoints } from "@/services/api/endpoints";
import type { ApiMeta, ApiResponse } from "@/types/api";
import type {
  CashierShift,
  CashierShiftQuery,
  CashMovement,
  CashMovementPayload,
  CashMovementQuery,
  CloseCashierShiftPayload,
  OpenCashierShiftPayload,
} from "@/types/cashier-shift";

export interface ShiftPaginatedResult<T> {
  items: T[];
  meta: ApiMeta | null;
  message: string;
}

const unwrapPaginated = <T>(response: ApiResponse<T[]>): ShiftPaginatedResult<T> => ({
  items: response.data,
  meta: response.meta ?? null,
  message: response.message,
});

export const shiftService = {
  async getCashierShifts(params: CashierShiftQuery = {}) {
    const response = await apiClient.get<ApiResponse<CashierShift[]>>(
      endpoints.cashierShifts.index,
      { params }
    );

    return unwrapPaginated(response.data);
  },

  async getCashierShift(id: number) {
    const response = await apiClient.get<ApiResponse<CashierShift>>(
      endpoints.cashierShifts.show(id)
    );

    return response.data;
  },

  async openCashierShift(payload: OpenCashierShiftPayload) {
    const response = await apiClient.post<ApiResponse<CashierShift>>(
      endpoints.cashierShifts.store,
      payload
    );

    return response.data;
  },

  async closeCashierShift(id: number, payload: CloseCashierShiftPayload) {
    const response = await apiClient.post<ApiResponse<CashierShift>>(
      endpoints.cashierShifts.close(id),
      payload
    );

    return response.data;
  },

  async updateCashierShiftNotes(id: number, notes: string | null) {
    const response = await apiClient.put<ApiResponse<CashierShift>>(
      endpoints.cashierShifts.update(id),
      { notes }
    );

    return response.data;
  },

  async getCashMovements(params: CashMovementQuery = {}) {
    const response = await apiClient.get<ApiResponse<CashMovement[]>>(
      endpoints.cashMovements.index,
      { params }
    );

    return unwrapPaginated(response.data);
  },

  async createCashMovement(payload: CashMovementPayload) {
    const response = await apiClient.post<ApiResponse<CashMovement>>(
      endpoints.cashMovements.store,
      payload
    );

    return response.data;
  },
};