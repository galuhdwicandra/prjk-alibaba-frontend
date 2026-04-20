import type { ApiErrorResponse } from "@/types/api";
import axios from "axios";

export const parseApiError = (error: unknown): string => {
  if (axios.isAxiosError<ApiErrorResponse>(error)) {
    return error.response?.data?.message ?? "Terjadi kesalahan pada permintaan.";
  }

  if (error instanceof Error) {
    return error.message;
  }

  return "Terjadi kesalahan yang tidak diketahui.";
};