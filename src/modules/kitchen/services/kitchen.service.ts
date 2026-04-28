import { apiClient } from "@/services/api/api-client";
import type { ApiResponse } from "@/types/api";
import type {
  KitchenPaginatedResult,
  KitchenTicket,
  KitchenTicketActionPayload,
  KitchenTicketQuery,
} from "@/types/kitchen";

const unwrapPaginated = <T>(response: ApiResponse<T[]>): KitchenPaginatedResult<T> => ({
  items: response.data,
  meta: response.meta ?? null,
  message: response.message,
});

const kitchenTicketEndpoints = {
  index: "/kitchen-tickets",
  store: "/kitchen-tickets",
  show: (id: number | string) => `/kitchen-tickets/${id}`,
  print: (id: number | string) => `/kitchen-tickets/${id}/print`,
  startPreparing: (id: number | string) => `/kitchen-tickets/${id}/start-preparing`,
  ready: (id: number | string) => `/kitchen-tickets/${id}/ready`,
  serve: (id: number | string) => `/kitchen-tickets/${id}/serve`,
  cancel: (id: number | string) => `/kitchen-tickets/${id}/cancel`,
  destroy: (id: number | string) => `/kitchen-tickets/${id}`,
};

export const kitchenService = {
  async getTickets(params: KitchenTicketQuery = {}) {
    const response = await apiClient.get<ApiResponse<KitchenTicket[]>>(
      kitchenTicketEndpoints.index,
      {
        params,
      }
    );

    return unwrapPaginated(response.data);
  },

  async createTicket(orderId: number) {
    const response = await apiClient.post<ApiResponse<KitchenTicket>>(
      kitchenTicketEndpoints.store,
      {
        order_id: orderId,
      }
    );

    return response.data;
  },

  async getTicket(id: number) {
    const response = await apiClient.get<ApiResponse<KitchenTicket>>(
      kitchenTicketEndpoints.show(id)
    );

    return response.data;
  },

  async markPrinted(id: number, payload: KitchenTicketActionPayload = {}) {
    const response = await apiClient.post<ApiResponse<KitchenTicket>>(
      kitchenTicketEndpoints.print(id),
      {
        printed_at: payload.printed_at ?? new Date().toISOString(),
      }
    );

    return response.data;
  },

  async startPreparing(id: number, payload: KitchenTicketActionPayload = {}) {
    const response = await apiClient.post<ApiResponse<KitchenTicket>>(
      kitchenTicketEndpoints.startPreparing(id),
      {
        prepared_at: payload.prepared_at ?? new Date().toISOString(),
        notes: payload.notes ?? null,
      }
    );

    return response.data;
  },

  async markReady(id: number, payload: KitchenTicketActionPayload = {}) {
    const response = await apiClient.post<ApiResponse<KitchenTicket>>(
      kitchenTicketEndpoints.ready(id),
      {
        ready_at: payload.ready_at ?? new Date().toISOString(),
        notes: payload.notes ?? null,
      }
    );

    return response.data;
  },

  async serve(id: number, payload: KitchenTicketActionPayload = {}) {
    const response = await apiClient.post<ApiResponse<KitchenTicket>>(
      kitchenTicketEndpoints.serve(id),
      {
        completed_at: payload.completed_at ?? new Date().toISOString(),
        notes: payload.notes ?? null,
      }
    );

    return response.data;
  },

  async cancel(id: number, payload: KitchenTicketActionPayload = {}) {
    const response = await apiClient.post<ApiResponse<KitchenTicket>>(
      kitchenTicketEndpoints.cancel(id),
      {
        cancelled_at: payload.cancelled_at ?? new Date().toISOString(),
        notes: payload.notes ?? null,
      }
    );

    return response.data;
  },

  async deleteTicket(id: number) {
    const response = await apiClient.delete<ApiResponse<null>>(
      kitchenTicketEndpoints.destroy(id)
    );

    return response.data;
  },
};