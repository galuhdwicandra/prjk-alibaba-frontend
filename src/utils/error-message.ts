import axios from "axios";
import type { ApiErrorResponse } from "@/types/api";

const defaultMessage = "Terjadi kesalahan. Silakan coba lagi.";

const statusMessageMap: Record<number, string> = {
  400: "Permintaan tidak valid.",
  401: "Sesi login sudah berakhir. Silakan login ulang.",
  403: "Anda tidak memiliki akses untuk menjalankan aksi ini.",
  404: "Data tidak ditemukan.",
  408: "Request terlalu lama diproses. Silakan coba lagi.",
  409: "Data konflik dengan kondisi terbaru.",
  422: "Validasi data gagal.",
  429: "Terlalu banyak request. Silakan coba beberapa saat lagi.",
  500: "Server mengalami kendala.",
  502: "Gateway server bermasalah.",
  503: "Layanan sedang tidak tersedia.",
};

const getFirstValidationError = (errors: ApiErrorResponse["errors"]) => {
  if (!errors) {
    return null;
  }

  const firstEntry = Object.values(errors)[0];

  if (Array.isArray(firstEntry)) {
    return firstEntry[0] ?? null;
  }

  if (typeof firstEntry === "string") {
    return firstEntry;
  }

  return null;
};

export function getAppErrorMessage(error: unknown): string {
  if (axios.isAxiosError<ApiErrorResponse>(error)) {
    const response = error.response;
    const data = response?.data;

    const validationError = getFirstValidationError(data?.errors);

    if (validationError) {
      return validationError;
    }

    if (data?.message) {
      return data.message;
    }

    if (response?.status && statusMessageMap[response.status]) {
      return statusMessageMap[response.status];
    }

    if (error.code === "ERR_NETWORK") {
      return "Tidak dapat terhubung ke server. Periksa koneksi atau konfigurasi API.";
    }

    return error.message || defaultMessage;
  }

  if (error instanceof Error) {
    return error.message || defaultMessage;
  }

  if (typeof error === "string") {
    return error;
  }

  return defaultMessage;
}