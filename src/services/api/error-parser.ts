import type { ApiErrorResponse } from "@/types/api";
import axios from "axios";

export const parseApiError = (error: unknown): string => {
  if (axios.isAxiosError<ApiErrorResponse>(error)) {
    const data = error.response?.data;

    if (data?.errors) {
      const firstEntry = Object.values(data.errors)[0];

      if (Array.isArray(firstEntry)) {
        return firstEntry[0] ?? data.message ?? "Terjadi kesalahan pada permintaan.";
      }

      if (typeof firstEntry === "string") {
        return firstEntry;
      }
    }

    return data?.message ?? "Terjadi kesalahan pada permintaan.";
  }

  if (error instanceof Error) {
    return error.message;
  }

  return "Terjadi kesalahan yang tidak diketahui.";
};