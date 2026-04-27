import { apiClient } from "@/services/api/api-client";
import type { ApiMeta, ApiResponse } from "@/types/api";
import type {
  ActivityLog,
  ActivityLogQuery,
  AlertRule,
  AlertRulePayload,
  AlertRuleQuery,
  Notification,
  NotificationQuery,
  ScanAlertPayload,
  ScanAlertResult,
} from "@/types/notification";

export interface PaginatedResult<T> {
  items: T[];
  meta: ApiMeta | null;
  message: string;
}

const notificationEndpoints = {
  notifications: {
    index: "/notifications",
    show: (id: number | string) => `/notifications/${id}`,
    scan: "/notifications/scan",
    markAllRead: "/notifications/mark-all-read",
    markAsRead: (id: number | string) => `/notifications/${id}/read`,
    resolve: (id: number | string) => `/notifications/${id}/resolve`,
    destroy: (id: number | string) => `/notifications/${id}`,
  },
  alertRules: {
    index: "/alert-rules",
    store: "/alert-rules",
    show: (id: number | string) => `/alert-rules/${id}`,
    update: (id: number | string) => `/alert-rules/${id}`,
    destroy: (id: number | string) => `/alert-rules/${id}`,
  },
  activityLogs: {
    index: "/activity-logs",
    show: (id: number | string) => `/activity-logs/${id}`,
  },
};

const unwrapPaginated = <T>(response: ApiResponse<T[]>): PaginatedResult<T> => ({
  items: response.data,
  meta: response.meta ?? null,
  message: response.message,
});

export const notificationService = {
  async getNotifications(params: NotificationQuery = {}) {
    const response = await apiClient.get<ApiResponse<Notification[]>>(
      notificationEndpoints.notifications.index,
      { params }
    );

    return unwrapPaginated(response.data);
  },

  async getNotification(id: number) {
    const response = await apiClient.get<ApiResponse<Notification>>(
      notificationEndpoints.notifications.show(id)
    );

    return response.data;
  },

  async scanAlerts(payload: ScanAlertPayload = {}) {
    const response = await apiClient.post<ApiResponse<ScanAlertResult>>(
      notificationEndpoints.notifications.scan,
      payload
    );

    return response.data;
  },

  async markAllNotificationsAsRead(outletId?: number | "") {
    const response = await apiClient.post<ApiResponse<{ updated_count: number }>>(
      notificationEndpoints.notifications.markAllRead,
      {},
      {
        params: {
          outlet_id: outletId || undefined,
        },
      }
    );

    return response.data;
  },

  async markNotificationAsRead(id: number) {
    const response = await apiClient.post<ApiResponse<Notification>>(
      notificationEndpoints.notifications.markAsRead(id)
    );

    return response.data;
  },

  async resolveNotification(id: number) {
    const response = await apiClient.post<ApiResponse<Notification>>(
      notificationEndpoints.notifications.resolve(id)
    );

    return response.data;
  },

  async deleteNotification(id: number) {
    const response = await apiClient.delete<ApiResponse<null>>(
      notificationEndpoints.notifications.destroy(id)
    );

    return response.data;
  },

  async getAlertRules(params: AlertRuleQuery = {}) {
    const response = await apiClient.get<ApiResponse<AlertRule[]>>(
      notificationEndpoints.alertRules.index,
      { params }
    );

    return unwrapPaginated(response.data);
  },

  async createAlertRule(payload: AlertRulePayload) {
    const response = await apiClient.post<ApiResponse<AlertRule>>(
      notificationEndpoints.alertRules.store,
      payload
    );

    return response.data;
  },

  async updateAlertRule(id: number, payload: AlertRulePayload) {
    const response = await apiClient.put<ApiResponse<AlertRule>>(
      notificationEndpoints.alertRules.update(id),
      payload
    );

    return response.data;
  },

  async deleteAlertRule(id: number) {
    const response = await apiClient.delete<ApiResponse<null>>(
      notificationEndpoints.alertRules.destroy(id)
    );

    return response.data;
  },

  async getActivityLogs(params: ActivityLogQuery = {}) {
    const response = await apiClient.get<ApiResponse<ActivityLog[]>>(
      notificationEndpoints.activityLogs.index,
      { params }
    );

    return unwrapPaginated(response.data);
  },

  async getActivityLog(id: number) {
    const response = await apiClient.get<ApiResponse<ActivityLog>>(
      notificationEndpoints.activityLogs.show(id)
    );

    return response.data;
  },
};