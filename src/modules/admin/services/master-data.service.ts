import { apiClient } from "@/services/api/api-client";
import { endpoints } from "@/services/api/endpoints";
import type { ApiMeta, ApiResponse } from "@/types/api";
import type { User } from "@/types/user";
import type { Role } from "@/types/role";
import type { Permission } from "@/types/permission";
import type { Outlet, OutletSetting } from "@/types/outlet";
import type { SystemSetting } from "@/types/settings";

export interface PaginationQuery {
  page?: number;
  per_page?: number;
  search?: string;
  is_active?: boolean | "";
}

export interface PaginatedResult<T> {
  items: T[];
  meta: ApiMeta | null;
  message: string;
}

export interface UserPayload {
  name: string;
  email?: string | null;
  phone?: string | null;
  username?: string | null;
  password?: string;
  password_confirmation?: string;
  is_active?: boolean;
  user_type?: "superadmin" | "staff" | "owner_viewer" | null;
  roles: string[];
  outlet_ids?: number[];
  default_outlet_id?: number | null;
}

export interface RolePayload {
  name: string;
  permissions?: string[];
}

export interface PermissionPayload {
  name: string;
}

export interface OutletPayload {
  code: string;
  name: string;
  phone?: string | null;
  email?: string | null;
  address?: string | null;
  city?: string | null;
  province?: string | null;
  postal_code?: string | null;
  latitude?: string | null;
  longitude?: string | null;
  opening_time?: string | null;
  closing_time?: string | null;
  is_active?: boolean;
}

export interface OutletSettingPayload {
  tax_percent?: number;
  service_charge_percent?: number;
  currency_code?: string;
  receipt_footer?: string | null;
  invoice_prefix?: string | null;
  order_prefix?: string | null;
  timezone?: string;
  allow_negative_stock?: boolean;
  low_stock_notification_enabled?: boolean;
}

export interface SystemSettingPayloadItem {
  key: string;
  value: string | number | boolean | Record<string, unknown> | null;
  type: "string" | "number" | "boolean" | "json";
}

const unwrapPaginated = <T>(response: ApiResponse<T[]>): PaginatedResult<T> => ({
  items: response.data,
  meta: response.meta ?? null,
  message: response.message,
});

export const masterDataService = {
  async getUsers(params: PaginationQuery = {}) {
    const response = await apiClient.get<ApiResponse<User[]>>(endpoints.users.index, { params });
    return unwrapPaginated(response.data);
  },

  async createUser(payload: UserPayload) {
    const response = await apiClient.post<ApiResponse<User>>(endpoints.users.store, payload);
    return response.data;
  },

  async updateUser(id: number, payload: UserPayload) {
    const response = await apiClient.put<ApiResponse<User>>(endpoints.users.update(id), payload);
    return response.data;
  },

  async deactivateUser(id: number) {
    const response = await apiClient.delete<ApiResponse<null>>(endpoints.users.destroy(id));
    return response.data;
  },

  async getRoles(params: Pick<PaginationQuery, "page" | "per_page"> = {}) {
    const response = await apiClient.get<ApiResponse<Role[]>>(endpoints.roles.index, { params });
    return unwrapPaginated(response.data);
  },

  async createRole(payload: RolePayload) {
    const response = await apiClient.post<ApiResponse<Role>>(endpoints.roles.store, payload);
    return response.data;
  },

  async updateRole(id: number, payload: RolePayload) {
    const response = await apiClient.put<ApiResponse<Role>>(endpoints.roles.update(id), payload);
    return response.data;
  },

  async deleteRole(id: number) {
    const response = await apiClient.delete<ApiResponse<null>>(endpoints.roles.destroy(id));
    return response.data;
  },

  async getPermissions(params: Pick<PaginationQuery, "page" | "per_page"> = {}) {
    const response = await apiClient.get<ApiResponse<Permission[]>>(endpoints.permissions.index, {
      params,
    });
    return unwrapPaginated(response.data);
  },

  async createPermission(payload: PermissionPayload) {
    const response = await apiClient.post<ApiResponse<Permission>>(
      endpoints.permissions.store,
      payload
    );
    return response.data;
  },

  async updatePermission(id: number, payload: PermissionPayload) {
    const response = await apiClient.put<ApiResponse<Permission>>(
      endpoints.permissions.update(id),
      payload
    );
    return response.data;
  },

  async deletePermission(id: number) {
    const response = await apiClient.delete<ApiResponse<null>>(endpoints.permissions.destroy(id));
    return response.data;
  },

  async getOutlets(params: PaginationQuery = {}) {
    const response = await apiClient.get<ApiResponse<Outlet[]>>(endpoints.outlets.index, { params });
    return unwrapPaginated(response.data);
  },

  async createOutlet(payload: OutletPayload) {
    const response = await apiClient.post<ApiResponse<Outlet>>(endpoints.outlets.store, payload);
    return response.data;
  },

  async updateOutlet(id: number, payload: OutletPayload) {
    const response = await apiClient.put<ApiResponse<Outlet>>(endpoints.outlets.update(id), payload);
    return response.data;
  },

  async deleteOutlet(id: number) {
    const response = await apiClient.delete<ApiResponse<null>>(endpoints.outlets.destroy(id));
    return response.data;
  },

  async getOutletSetting(outletId: number) {
    const response = await apiClient.get<ApiResponse<OutletSetting>>(endpoints.outlets.settings(outletId));
    return response.data;
  },

  async updateOutletSetting(outletId: number, payload: OutletSettingPayload) {
    const response = await apiClient.patch<ApiResponse<OutletSetting>>(
      endpoints.outlets.settings(outletId),
      payload
    );
    return response.data;
  },

  async getSystemSettings(params: Pick<PaginationQuery, "page" | "per_page" | "search"> = {}) {
    const response = await apiClient.get<ApiResponse<SystemSetting[]>>(endpoints.systemSettings.index, {
      params,
    });
    return unwrapPaginated(response.data);
  },

  async upsertSystemSettings(settings: SystemSettingPayloadItem[]) {
    const response = await apiClient.put<ApiResponse<SystemSetting[]>>(endpoints.systemSettings.upsert, {
      settings,
    });
    return response.data;
  },
};