import { NavLink } from "react-router-dom";
import type { NavigationItem } from "./navigation.config";
import { usePermission } from "@/hooks/usePermission";

interface AppSidebarProps {
  title: string;
  items: NavigationItem[];
  dark?: boolean;
  open?: boolean;
  onClose?: () => void;
}

function SidebarLink({
  item,
  dark = false,
  onClick,
}: {
  item: NavigationItem;
  dark?: boolean;
  onClick?: () => void;
}) {
  const allowed = item.permission ? usePermission(item.permission) : true;

  if (!allowed) {
    return null;
  }

  return (
    <NavLink
      to={item.to}
      end={item.to.split("/").length <= 3}
      onClick={onClick}
      className={({ isActive }) =>
        [
          "group flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition-all",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2",
          dark ? "focus-visible:ring-slate-600" : "focus-visible:ring-[var(--brand-brick)]",

          dark
            ? isActive
              ? "bg-slate-800 text-white shadow-sm ring-1 ring-slate-700"
              : "text-slate-300 hover:bg-slate-900 hover:text-white"
            : isActive
              ? "bg-[var(--brand-brick)] text-white shadow-sm ring-1 ring-[var(--brand-brick-dark)]"
              : "text-white/90 hover:bg-[var(--brand-brick-soft)] hover:text-[var(--brand-brick)]",
        ].join(" ")
      }
    >
      <span className="truncate">{item.label}</span>
    </NavLink>
  );
}

export function AppSidebar({
  title,
  items,
  dark = false,
  open = false,
  onClose,
}: AppSidebarProps) {
  return (
    <>
      <div
        aria-hidden="true"
        onClick={onClose}
        className={[
          "fixed inset-0 z-40 transition-opacity lg:hidden",
          open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0",
          dark ? "bg-slate-950/70" : "bg-slate-950/40 backdrop-blur-sm",
        ].join(" ")}
      />

      <aside
        className={[
          "fixed inset-y-0 left-0 z-50 flex w-72 max-w-[85vw] shrink-0 flex-col border-r shadow-xl transition-transform duration-300 lg:translate-x-0",
          open ? "translate-x-0" : "-translate-x-full",
          dark ? "border-slate-800 bg-slate-950" : "border-[var(--color-border)] bg-white",
        ].join(" ")}
      >
        <div
          className={[
            "flex h-16 items-center justify-between gap-3 px-5",
            dark ? "border-b border-slate-800" : "border-b border-[var(--color-border)]",
          ].join(" ")}
        >
          <span
            className={[
              "truncate text-base font-semibold tracking-tight",
              dark ? "text-white" : "text-[var(--color-text)]",
            ].join(" ")}
          >
            {title}
          </span>

          <button
            type="button"
            onClick={onClose}
            className={[
              "inline-flex h-9 w-9 items-center justify-center rounded-xl text-lg transition lg:hidden",
              dark
                ? "text-slate-300 hover:bg-slate-900 hover:text-white"
                : "text-slate-600 hover:bg-slate-100 hover:text-slate-900",
            ].join(" ")}
            aria-label="Tutup menu navigasi"
          >
            ×
          </button>
        </div>

        <nav className="flex-1 space-y-1 overflow-y-auto px-3 py-4">
          {items.map((item) => (
            <SidebarLink
              key={item.to}
              item={item}
              dark={dark}
              onClick={onClose}
            />
          ))}
        </nav>
      </aside>
    </>
  );
}