import type { Outlet } from "@/types/outlet";
import type { User } from "@/types/user";

export type NotificationType =
  | "low_stock"
  | "shift_not_closed"
  | "promo_expiring"
  | "order_overdue";

export type NotificationSeverity = "info" | "warning" | "danger";

export type NotificationStatus = "unread" | "read" | "resolved";

export type NotificationLogAction =
  | "generated"
  | "skipped"
  | "read"
  | "resolved"
  | "deleted";

export type NotificationLogStatus = "success" | "failed" | "skipped";

export type AlertRuleSeverity = "low" | "medium" | "high" | "critical";

export type AlertRuleThresholdUnit = "qty" | "minutes" | "days";

export interface NotificationData {
  alert_rule_id?: number;
  raw_material_id?: number;
  raw_material_name?: string;
  qty_on_hand?: number | string;
  threshold?: number | string;
  unit?: string;
  order_number?: string;
  queue_number?: string | null;
  order_status?: string;
  ordered_at?: string;
  threshold_minutes?: number;
  voucher_code?: string;
  voucher_name?: string;
  ends_at?: string;
  [key: string]: unknown;
}

export interface NotificationLog {
  id: number;
  notification_id?: number | null;
  alert_rule_id?: number | null;
  outlet_id?: number | null;
  user_id?: number | null;
  action: NotificationLogAction;
  status: NotificationLogStatus;
  channel?: string | null;
  message?: string | null;
  payload?: Record<string, unknown> | null;
  logged_at?: string | null;
  created_at?: string | null;
  updated_at?: string | null;
  alert_rule?: AlertRule | null;
  outlet?: Outlet | null;
  user?: User | null;
}

export interface Notification {
  id: number;
  outlet_id?: number | null;
  user_id?: number | null;
  type: NotificationType;
  severity: NotificationSeverity;
  status: NotificationStatus;
  title: string;
  message: string;
  source_type?: string | null;
  source_id?: number | null;
  data?: NotificationData | null;
  read_at?: string | null;
  resolved_at?: string | null;
  created_at?: string | null;
  updated_at?: string | null;
  logs_count?: number;
  outlet?: Outlet | null;
  user?: User | null;
  logs?: NotificationLog[];
}

export interface NotificationQuery {
  page?: number;
  per_page?: number;
  outlet_id?: number | "";
  user_id?: number | "";
  type?: NotificationType | "";
  severity?: NotificationSeverity | "";
  status?: NotificationStatus | "";
}

export interface ScanAlertPayload {
  outlet_id?: number | null;
  alert_type?: NotificationType | null;
}

export interface ScanAlertResult {
  generated_count?: number;
  skipped_count?: number;
  failed_count?: number;
  notifications?: Notification[];
  logs?: NotificationLog[];
  [key: string]: unknown;
}

export interface AlertRule {
  id: number;
  outlet_id?: number | null;
  name: string;
  alert_type: NotificationType;
  severity: AlertRuleSeverity;
  threshold_minutes?: number | null;
  days_before?: number | null;
  threshold_value?: number | string | null;
  threshold_unit?: AlertRuleThresholdUnit | null;
  recipient_roles?: string[] | null;
  channels?: string[] | null;
  metadata?: Record<string, unknown> | null;
  is_active: boolean;
  created_at?: string | null;
  updated_at?: string | null;
  outlet?: Outlet | null;
}

export interface AlertRuleQuery {
  page?: number;
  per_page?: number;
  outlet_id?: number | "";
  alert_type?: NotificationType | "";
  severity?: AlertRuleSeverity | "";
  is_active?: boolean | "";
}

export interface AlertRulePayload {
  outlet_id?: number | null;
  name: string;
  alert_type: NotificationType;
  severity: AlertRuleSeverity;
  threshold_minutes?: number | null;
  days_before?: number | null;
  threshold_value?: number | null;
  threshold_unit?: AlertRuleThresholdUnit | null;
  recipient_roles?: string[];
  channels?: string[];
  metadata?: Record<string, unknown> | null;
  is_active?: boolean;
}

export interface ActivityLog {
  id: number;
  user_id?: number | null;
  outlet_id?: number | null;
  action: string;
  module: string;
  reference_type?: string | null;
  reference_id?: number | null;
  description?: string | null;
  ip_address?: string | null;
  user_agent?: string | null;
  metadata?: Record<string, unknown> | null;
  created_at?: string | null;
  updated_at?: string | null;
  user?: User | null;
  outlet?: Outlet | null;
}

export interface ActivityLogQuery {
  page?: number;
  per_page?: number;
  search?: string;
  user_id?: number | "";
  outlet_id?: number | "";
  action?: string;
  module?: string;
  reference_type?: string;
  reference_id?: number | "";
  created_from?: string;
  created_until?: string;
}