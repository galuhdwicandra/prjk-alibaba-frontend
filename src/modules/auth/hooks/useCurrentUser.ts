import { useEffect } from "react";
import { authService } from "@/modules/auth/services/auth.service";
import { authStorage } from "@/services/storage/auth-storage";
import { useAuthStore } from "@/modules/auth/store/auth.store";

export const useCurrentUser = () => {
  const setAuth = useAuthStore((state) => state.setAuth);
  const clearAuth = useAuthStore((state) => state.clearAuth);
  const setHydrated = useAuthStore((state) => state.setHydrated);

  useEffect(() => {
    const bootstrap = async () => {
      const token = authStorage.getToken();

      if (!token) {
        clearAuth();
        setHydrated(true);
        return;
      }

      try {
        const response = await authService.me();

        setAuth({
          token,
          user: response.data,
        });
      } catch {
        authStorage.clearToken();
        clearAuth();
      } finally {
        setHydrated(true);
      }
    };

    void bootstrap();
  }, [clearAuth, setAuth, setHydrated]);
};