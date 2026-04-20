import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { authService } from "@/modules/auth/services/auth.service";
import { authStorage } from "@/services/storage/auth-storage";
import { useAuthStore } from "@/modules/auth/store/auth.store";
import { parseApiError } from "@/services/api/error-parser";

interface AppProfileMenuProps {
  dark?: boolean;
}

export function AppProfileMenu({ dark = false }: AppProfileMenuProps) {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const user = useAuthStore((state) => state.user);
  const clearAuth = useAuthStore((state) => state.clearAuth);

  const userRoleLabel = useMemo(() => {
    return user?.roles?.join(", ") || "No role";
  }, [user?.roles]);

  const handleLogout = async () => {
    try {
      setLoading(true);
      await authService.logout();
    } catch (error) {
      console.error(parseApiError(error));
    } finally {
      authStorage.clearToken();
      clearAuth();
      navigate("/login", { replace: true });
      setLoading(false);
    }
  };

  return (
    <div className="relative">
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        className={[
          "rounded-xl border px-3 py-2 text-left",
          dark
            ? "border-slate-700 bg-slate-900 text-white"
            : "border-slate-300 bg-white text-slate-900",
        ].join(" ")}
      >
        <div className="text-sm font-semibold">{user?.name ?? "Unknown User"}</div>
        <div className={["text-xs", dark ? "text-slate-400" : "text-slate-500"].join(" ")}>
          {userRoleLabel}
        </div>
      </button>

      {open && (
        <div
          className={[
            "absolute right-0 z-20 mt-2 w-64 rounded-2xl border p-3 shadow-lg",
            dark
              ? "border-slate-800 bg-slate-950 text-white"
              : "border-slate-200 bg-white text-slate-900",
          ].join(" ")}
        >
          <div className="border-b border-slate-200 pb-3 dark:border-slate-800">
            <div className="text-sm font-semibold">{user?.name}</div>
            <div className={["mt-1 text-xs", dark ? "text-slate-400" : "text-slate-500"].join(" ")}>
              {user?.email || user?.username || user?.phone || "-"}
            </div>
          </div>

          <button
            type="button"
            onClick={handleLogout}
            disabled={loading}
            className="mt-3 w-full rounded-xl bg-red-600 px-3 py-2 text-sm font-medium text-white disabled:opacity-60"
          >
            {loading ? "Memproses..." : "Logout"}
          </button>
        </div>
      )}
    </div>
  );
}