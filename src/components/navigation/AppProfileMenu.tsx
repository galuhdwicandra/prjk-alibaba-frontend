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

  const userInitial = useMemo(() => {
    return (user?.name?.trim()?.charAt(0) || "U").toUpperCase();
  }, [user?.name]);

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
        aria-haspopup="menu"
        aria-expanded={open}
        className={[
          "flex max-w-[240px] items-center gap-3 rounded-2xl border px-3 py-2 text-left transition",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2",
          dark
            ? "border-slate-700 bg-slate-900 text-white hover:bg-slate-800 focus-visible:ring-slate-600"
            : "border-slate-200 bg-white text-slate-900 shadow-sm hover:border-slate-300 hover:bg-slate-50 focus-visible:ring-slate-900",
        ].join(" ")}
      >
        <span
          className={[
            "flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-sm font-bold",
            dark ? "bg-slate-800 text-slate-100" : "bg-slate-900 text-white",
          ].join(" ")}
        >
          {userInitial}
        </span>

        <span className="min-w-0">
          <span className="block truncate text-sm font-semibold">
            {user?.name ?? "Unknown User"}
          </span>
          <span
            className={[
              "block truncate text-xs",
              dark ? "text-slate-400" : "text-slate-500",
            ].join(" ")}
          >
            {userRoleLabel}
          </span>
        </span>
      </button>

      {open && (
        <div
          role="menu"
          className={[
            "absolute right-0 z-20 mt-2 w-72 overflow-hidden rounded-2xl border shadow-xl",
            dark
              ? "border-slate-800 bg-slate-950 text-white"
              : "border-slate-200 bg-white text-slate-900",
          ].join(" ")}
        >
          <div
            className={[
              "flex items-start gap-3 border-b p-4",
              dark ? "border-slate-800" : "border-slate-100",
            ].join(" ")}
          >
            <span
              className={[
                "flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-sm font-bold",
                dark ? "bg-slate-800 text-slate-100" : "bg-slate-900 text-white",
              ].join(" ")}
            >
              {userInitial}
            </span>

            <div className="min-w-0">
              <div className="truncate text-sm font-semibold">{user?.name ?? "-"}</div>
              <div
                className={[
                  "mt-1 truncate text-xs",
                  dark ? "text-slate-400" : "text-slate-500",
                ].join(" ")}
              >
                {user?.email || user?.username || user?.phone || "-"}
              </div>
              <div
                className={[
                  "mt-2 inline-flex max-w-full rounded-full px-2.5 py-1 text-xs font-medium",
                  dark ? "bg-slate-900 text-slate-300" : "bg-slate-100 text-slate-700",
                ].join(" ")}
              >
                <span className="truncate">{userRoleLabel}</span>
              </div>
            </div>
          </div>

          <div className="p-3">
            <button
              type="button"
              onClick={handleLogout}
              disabled={loading}
              role="menuitem"
              className={[
                "w-full rounded-xl px-3 py-2.5 text-sm font-semibold text-white transition",
                "bg-red-600 hover:bg-red-700 disabled:cursor-not-allowed disabled:opacity-60",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2",
              ].join(" ")}
            >
              {loading ? "Memproses..." : "Logout"}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}