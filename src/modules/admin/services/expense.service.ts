import { apiClient } from "@/services/api/api-client";
import { endpoints } from "@/services/api/endpoints";
import type { ApiMeta } from "@/types/api";
import type {
  CashMovement,
  CashMovementListParams,
  CashMovementPayload,
  CashierShift,
  CashierShiftListParams,
  Expense,
  ExpenseCategory,
  ExpenseCategoryListParams,
  ExpenseCategoryPayload,
  ExpenseListParams,
  ExpensePayload,
  PaginatedExpenseResult,
} from "@/types/expense";

interface ApiCollectionResponse<T> {
  message: string;
  data: T[];
  meta?: ApiMeta | null;
}

interface ApiResourceResponse<T> {
  message: string;
  data: T;
}

const normalizeCollection = <T>(
  response: ApiCollectionResponse<T>
): PaginatedExpenseResult<T> => ({
  items: response.data,
  meta: response.meta ?? null,
});

export const expenseService = {
  async getExpenseCategories(
    params: ExpenseCategoryListParams = {}
  ): Promise<PaginatedExpenseResult<ExpenseCategory>> {
    const response = await apiClient.get<ApiCollectionResponse<ExpenseCategory>>(
      endpoints.expenseCategories.index,
      { params }
    );

    return normalizeCollection(response.data);
  },

  async createExpenseCategory(
    payload: ExpenseCategoryPayload
  ): Promise<ApiResourceResponse<ExpenseCategory>> {
    const response = await apiClient.post<ApiResourceResponse<ExpenseCategory>>(
      endpoints.expenseCategories.store,
      payload
    );

    return response.data;
  },

  async updateExpenseCategory(
    id: number,
    payload: ExpenseCategoryPayload
  ): Promise<ApiResourceResponse<ExpenseCategory>> {
    const response = await apiClient.put<ApiResourceResponse<ExpenseCategory>>(
      endpoints.expenseCategories.update(id),
      payload
    );

    return response.data;
  },

  async deleteExpenseCategory(id: number): Promise<{ message: string }> {
    const response = await apiClient.delete<{ message: string }>(
      endpoints.expenseCategories.destroy(id)
    );

    return response.data;
  },

  async getExpenses(params: ExpenseListParams = {}): Promise<PaginatedExpenseResult<Expense>> {
    const response = await apiClient.get<ApiCollectionResponse<Expense>>(endpoints.expenses.index, {
      params,
    });

    return normalizeCollection(response.data);
  },

  async createExpense(payload: ExpensePayload): Promise<ApiResourceResponse<Expense>> {
    const response = await apiClient.post<ApiResourceResponse<Expense>>(
      endpoints.expenses.store,
      payload
    );

    return response.data;
  },

  async updateExpense(id: number, payload: ExpensePayload): Promise<ApiResourceResponse<Expense>> {
    const response = await apiClient.put<ApiResourceResponse<Expense>>(
      endpoints.expenses.update(id),
      payload
    );

    return response.data;
  },

  async submitExpense(id: number): Promise<ApiResourceResponse<Expense>> {
    const response = await apiClient.post<ApiResourceResponse<Expense>>(
      endpoints.expenses.submit(id)
    );

    return response.data;
  },

  async approveExpense(id: number, notes?: string): Promise<ApiResourceResponse<Expense>> {
    const response = await apiClient.post<ApiResourceResponse<Expense>>(
      endpoints.expenses.approve(id),
      { notes: notes ?? null }
    );

    return response.data;
  },

  async rejectExpense(id: number, notes: string): Promise<ApiResourceResponse<Expense>> {
    const response = await apiClient.post<ApiResourceResponse<Expense>>(
      endpoints.expenses.reject(id),
      { notes }
    );

    return response.data;
  },

  async uploadExpenseAttachments(
    id: number,
    files: File[]
  ): Promise<ApiResourceResponse<Expense>> {
    const formData = new FormData();

    files.forEach((file) => {
      formData.append("attachments[]", file);
    });

    const response = await apiClient.post<ApiResourceResponse<Expense>>(
      endpoints.expenses.attachments(id),
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );

    return response.data;
  },

  async deleteExpenseAttachment(id: number): Promise<{ message: string }> {
    const response = await apiClient.delete<{ message: string }>(
      endpoints.expenses.deleteAttachment(id)
    );

    return response.data;
  },

  async deleteExpense(id: number): Promise<{ message: string }> {
    const response = await apiClient.delete<{ message: string }>(endpoints.expenses.destroy(id));

    return response.data;
  },

  async getCashierShifts(
    params: CashierShiftListParams = {}
  ): Promise<PaginatedExpenseResult<CashierShift>> {
    const response = await apiClient.get<ApiCollectionResponse<CashierShift>>(
      endpoints.cashierShifts.index,
      { params }
    );

    return normalizeCollection(response.data);
  },

  async getCashMovements(
    params: CashMovementListParams = {}
  ): Promise<PaginatedExpenseResult<CashMovement>> {
    const response = await apiClient.get<ApiCollectionResponse<CashMovement>>(
      endpoints.cashMovements.index,
      { params }
    );

    return normalizeCollection(response.data);
  },

  async createCashMovement(
    payload: CashMovementPayload
  ): Promise<ApiResourceResponse<CashMovement>> {
    const response = await apiClient.post<ApiResourceResponse<CashMovement>>(
      endpoints.cashMovements.store,
      payload
    );

    return response.data;
  },
};