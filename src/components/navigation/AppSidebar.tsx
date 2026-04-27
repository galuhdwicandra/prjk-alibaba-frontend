import { NavLink } from "react-router-dom";
import type { NavigationItem } from "./navigation.config";
import { usePermission } from "@/hooks/usePermission";

interface AppSidebarProps {
  title: string;
  items: NavigationItem[];
  dark?: boolean;
}

function SidebarLink({ item, dark = false }: { item: NavigationItem; dark?: boolean }) {
  const allowed = item.permission ? usePermission(item.permission) : true;

  if (!allowed) {
    return null;
  }

  return (
    <NavLink
      to={item.to}
      end={item.to.split("/").length <= 3}
      className={({ isActive }) =>
        [
          "group flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition-all",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2",
          dark
            ? "focus-visible:ring-slate-600"
            : "focus-visible:ring-slate-900",
          dark
            ? isActive
              ? "bg-slate-800 text-white shadow-sm"
              : "text-slate-300 hover:bg-slate-900 hover:text-white"
            : isActive
              ? "bg-slate-900 text-white shadow-sm"
              : "text-slate-700 hover:bg-slate-100 hover:text-slate-900",
        ].join(" ")
      }
    >
      <span className="truncate">{item.label}</span>
    </NavLink>
  );
}

export function AppSidebar({ title, items, dark = false }: AppSidebarProps) {
  return (
    <aside
      className={[
        "flex w-full shrink-0 flex-col border-r lg:w-64",
        dark
          ? "border-slate-800 bg-slate-950"
          : "border-slate-200 bg-white",
      ].join(" ")}
    >
      <div
        className={[
          "flex h-16 items-center px-5 text-base font-semibold tracking-tight",
          dark
            ? "border-b border-slate-800 text-white"
            : "border-b border-slate-200 text-slate-900",
        ].join(" ")}
      >
        <span className="truncate">{title}</span>
      </div>

      <nav className="flex-1 space-y-1 overflow-y-auto px-3 py-3">
        {items.map((item) => (
          <SidebarLink key={item.to} item={item} dark={dark} />
        ))}
      </nav>
    </aside>
  );
}