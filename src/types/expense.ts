import type { ApiMeta } from "@/types/api";

export type ExpenseStatus = "draft" | "submitted" | "approved" | "rejected";

export type CashMovementType = "cash_in" | "cash_out" | "opening" | "closing_adjustment";

export interface ExpenseOutlet {
  id: number;
  code?: string | null;
  name: string;
}

export interface ExpenseUser {
  id: number;
  name: string;
  email?: string | null;
  username?: string | null;
}

export interface ExpenseCategory {
  id: number;
  name: string;
  is_active: boolean;
  expenses_count?: number;
  created_at?: string | null;
  updated_at?: string | null;
}

export interface ExpenseAttachment {
  id: number;
  expense_id: number;
  file_path: string;
  file_name?: string | null;
  mime_type?: string | null;
  created_at?: string | null;
  updated_at?: string | null;
}

export interface Expense {
  id: number;
  outlet_id: number;
  expense_category_id: number;
  expense_date: string;
  amount: number | string;
  description?: string | null;
  status: ExpenseStatus;
  created_by?: number | null;
  approved_by?: number | null;
  approved_at?: string | null;
  created_at?: string | null;
  updated_at?: string | null;
  outlet?: ExpenseOutlet | null;
  category?: ExpenseCategory | null;
  creator?: ExpenseUser | null;
  approver?: ExpenseUser | null;
  attachments?: ExpenseAttachment[];
  attachments_count?: number;
}

export interface CashierShift {
  id: number;
  outlet_id: number;
  user_id: number;
  shift_number: string;
  opened_at: string;
  closed_at?: string | null;
  opening_cash: number | string;
  expected_cash: number | string;
  closing_cash: number | string;
  cash_difference: number | string;
  status: "open" | "closed";
  notes?: string | null;
  outlet?: ExpenseOutlet | null;
  user?: ExpenseUser | null;
  orders_count?: number;
}

export interface CashMovement {
  id: number;
  cashier_shift_id: number;
  movement_type: CashMovementType;
  amount: number | string;
  reason?: string | null;
  notes?: string | null;
  created_by?: number | null;
  created_at?: string | null;
  updated_at?: string | null;
  cashier_shift?: CashierShift | null;
  cashierShift?: CashierShift | null;
  creator?: ExpenseUser | null;
}

export interface ExpenseListParams {
  page?: number;
  per_page?: number;
  search?: string;
  outlet_id?: number | "";
  expense_category_id?: number | "";
  status?: ExpenseStatus | "";
  expense_from?: string;
  expense_until?: string;
}

export interface ExpenseCategoryListParams {
  page?: number;
  per_page?: number;
  search?: string;
  is_active?: boolean | "";
}

export interface CashMovementListParams {
  page?: number;
  per_page?: number;
  cashier_shift_id?: number | "";
  outlet_id?: number | "";
  movement_type?: CashMovementType | "";
}

export interface CashierShiftListParams {
  page?: number;
  per_page?: number;
  outlet_id?: number | "";
  user_id?: number | "";
  status?: "open" | "closed" | "";
}

export interface ExpensePayload {
  outlet_id: number;
  expense_category_id: number;
  expense_date: string;
  amount: number;
  description?: string | null;
  status?: ExpenseStatus;
}

export interface ExpenseCategoryPayload {
  name: string;
  is_active: boolean;
}

export interface CashMovementPayload {
  cashier_shift_id: number;
  movement_type: CashMovementType;
  amount: number;
  reason?: string | null;
  notes?: string | null;
}

export interface PaginatedExpenseResult<T> {
  items: T[];
  meta: ApiMeta | null;
}