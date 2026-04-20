import { Navigate } from "react-router-dom";
import type { ReactNode } from "react";
import { usePermission } from "@/hooks/usePermission";

interface PermissionGuardProps {
  permission: string;
  children: ReactNode;
}

export function PermissionGuard({ permission, children }: PermissionGuardProps) {
  const allowed = usePermission(permission);

  if (!allowed) {
    return <Navigate to="/unauthorized" replace />;
  }

  return <>{children}</>;
}