import { Navigate, Outlet } from "react-router-dom";
import { useAuthStore } from "@/modules/auth/store/auth.store";
import { redirectByRole } from "@/utils/redirect-by-role";

export function GuestGuard() {
  const user = useAuthStore((state) => state.user);

  if (user) {
    return <Navigate to={redirectByRole(user.roles ?? [])} replace />;
  }

  return <Outlet />;
}