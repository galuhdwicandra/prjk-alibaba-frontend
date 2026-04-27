import type { PropsWithChildren } from "react";
import { QueryProvider } from "./QueryProvider";
import { AppToaster } from "@/components/feedback/AppToaster";
import { AppErrorBoundary } from "@/components/feedback/AppErrorBoundary";
import { NetworkStatusBanner } from "@/components/feedback/NetworkStatusBanner";

export function AppProviders({ children }: PropsWithChildren) {
  return (
    <AppErrorBoundary>
      <QueryProvider>
        <NetworkStatusBanner />
        {children}
        <AppToaster />
      </QueryProvider>
    </AppErrorBoundary>
  );
}