import { apiClient } from "@/services/api/api-client";
import { endpoints } from "@/services/api/endpoints";
import type { ApiResponse } from "@/types/api";
import type { LoginPayload, LoginResult, MeResult } from "@/types/auth";

export const authService = {
  async login(payload: LoginPayload) {
    const response = await apiClient.post<ApiResponse<LoginResult>>(endpoints.auth.login, payload);
    return response.data;
  },

  async logout() {
    const response = await apiClient.post<ApiResponse<null>>(endpoints.auth.logout);
    return response.data;
  },

  async me() {
    const response = await apiClient.get<ApiResponse<MeResult>>(endpoints.auth.me);
    return response.data;
  },
};