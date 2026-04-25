// src/types/cashier-shift.ts

import type { Outlet } from "@/types/outlet";
import type { User } from "@/types/user";

export type CashierShiftStatus = "open" | "closed";

export type CashMovementType =
  | "cash_in"
  | "cash_out"
  | "opening"
  | "closing_adjustment";

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
  creator?: User | null;
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
  status: CashierShiftStatus;
  notes?: string | null;
  created_at?: string | null;
  updated_at?: string | null;
  outlet?: Outlet | null;
  user?: User | null;
  cash_movements?: CashMovement[];
  cashMovements?: CashMovement[];
  orders_count?: number;
}

export interface CashierShiftQuery {
  page?: number;
  per_page?: number;
  outlet_id?: number | "";
  user_id?: number | "";
  status?: CashierShiftStatus | "";
  opened_from?: string;
  opened_until?: string;
}

export interface CashMovementQuery {
  page?: number;
  per_page?: number;
  cashier_shift_id?: number | "";
  outlet_id?: number | "";
  movement_type?: "cash_in" | "cash_out" | "";
}

export interface OpenCashierShiftPayload {
  outlet_id: number;
  opening_cash?: number;
  opened_at?: string | null;
  notes?: string | null;
}

export interface CloseCashierShiftPayload {
  closing_cash: number;
  closed_at?: string | null;
  notes?: string | null;
}

export interface CashMovementPayload {
  cashier_shift_id: number;
  movement_type: "cash_in" | "cash_out";
  amount: number;
  reason?: string | null;
  notes?: string | null;
}