export interface ApiErrorBag {
  [key: string]: string[] | string;
}

export interface ApiResponse<T> {
  success: boolean;
  message: string;
  data: T;
  errors: ApiErrorBag | null;
  meta: Record<string, unknown> | null;
}

export interface ApiErrorResponse {
  success: boolean;
  message: string;
  data: null;
  errors: ApiErrorBag | null;
  meta: Record<string, unknown> | null;
}