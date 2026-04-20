import { useAuthStore } from "@/modules/auth/store/auth.store";

export const usePermission = (permissionName: string): boolean => {
  const user = useAuthStore((state) => state.user);

  if (!user?.permissions?.length) {
    return false;
  }

  return user.permissions.includes(permissionName);
};