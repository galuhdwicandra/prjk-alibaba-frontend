import { useAuthStore } from "@/modules/auth/store/auth.store";

export const usePermission = (permissionName: string): boolean => {
  const user = useAuthStore((state) => state.user);

  if (!user?.permissions) {
    return false;
  }

  return user.permissions.some((permission) => permission.name === permissionName);
};