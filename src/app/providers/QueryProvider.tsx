import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import type { PropsWithChildren } from "react";
import { getAppErrorMessage } from "@/utils/error-message";

const shouldRetryRequest = (failureCount: number, error: unknown) => {
  const message = getAppErrorMessage(error).toLowerCase();

  if (failureCount >= 2) {
    return false;
  }

  if (
    message.includes("unauthorized") ||
    message.includes("forbidden") ||
    message.includes("validasi") ||
    message.includes("not found")
  ) {
    return false;
  }

  return true;
};

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: shouldRetryRequest,
      refetchOnWindowFocus: false,
      staleTime: 30_000,
      gcTime: 5 * 60_000,
    },
    mutations: {
      retry: false,
    },
  },
});

export function QueryProvider({ children }: PropsWithChildren) {
  return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>;
}