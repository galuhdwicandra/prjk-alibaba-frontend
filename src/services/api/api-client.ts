import axios from "axios";
import { env } from "@/app/config/env";
import { authStorage } from "@/services/storage/auth-storage";
import { useAuthStore } from "@/modules/auth/store/auth.store";

const isLoginPage = () => {
  if (typeof window === "undefined") {
    return false;
  }

  return window.location.pathname === "/login";
};

const redirectToLoginBecauseSessionExpired = () => {
  if (typeof window === "undefined") {
    return;
  }

  const currentPath = window.location.pathname;
  const query = new URLSearchParams({
    reason: "session-expired",
  });

  if (currentPath && currentPath !== "/login") {
    query.set("from", currentPath);
  }

  window.location.replace(`/login?${query.toString()}`);
};

export const apiClient = axios.create({
  baseURL: env.apiBaseUrl,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

apiClient.interceptors.request.use((config) => {
  const token = authStorage.getToken();

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    const status = error?.response?.status;

    if (status === 401) {
      authStorage.clearToken();
      useAuthStore.getState().clearAuth();

      if (!isLoginPage()) {
        redirectToLoginBecauseSessionExpired();
      }
    }

    return Promise.reject(error);
  }
);