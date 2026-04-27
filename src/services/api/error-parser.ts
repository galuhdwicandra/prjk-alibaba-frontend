import axios from "axios";
import type { ApiErrorResponse } from "@/types/api";

const DEFAULT_MESSAGE = "Terjadi kesalahan. Silakan coba lagi.";

const STATUS_MESSAGE_MAP: Record<number, string> = {
  400: "Permintaan tidak valid.",
  401: "Sesi login sudah berakhir. Silakan login ulang.",
  403: "Anda tidak memiliki akses untuk aksi ini.",
  404: "Data tidak ditemukan.",
  408: "Permintaan timeout. Silakan coba lagi.",
  409: "Terjadi konflik data.",
  422: "Validasi data gagal.",
  429: "Terlalu banyak request. Coba lagi nanti.",
  500: "Server mengalami kendala.",
  502: "Gateway server bermasalah.",
  503: "Layanan sedang tidak tersedia.",
};

const getFirstValidationError = (errors?: ApiErrorResponse["errors"]) => {
  if (!errors) return null;

  const firstEntry = Object.values(errors)[0];

  if (Array.isArray(firstEntry)) {
    return firstEntry[0] ?? null;
  }

  if (typeof firstEntry === "string") {
    return firstEntry;
  }

  return null;
};

export const parseApiError = (error: unknown): string => {
  if (axios.isAxiosError<ApiErrorResponse>(error)) {
    const response = error.response;
    const data = response?.data;

    const validationError = getFirstValidationError(data?.errors);
    if (validationError) return validationError;

    if (data?.message) return data.message;

    if (response?.status && STATUS_MESSAGE_MAP[response.status]) {
      return STATUS_MESSAGE_MAP[response.status];
    }

    if (error.code === "ERR_NETWORK") {
      return "Tidak dapat terhubung ke server. Periksa koneksi internet.";
    }

    return error.message || DEFAULT_MESSAGE;
  }

  if (error instanceof Error) {
    return error.message || DEFAULT_MESSAGE;
  }

  if (typeof error === "string") {
    return error;
  }

  return DEFAULT_MESSAGE;
};