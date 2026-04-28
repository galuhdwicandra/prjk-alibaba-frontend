import { useMemo, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import type { NavigationItem } from "./navigation.config";
import { usePermission } from "@/hooks/usePermission";

interface AppSidebarProps {
  title: string;
  items: NavigationItem[];
  dark?: boolean;
  open?: boolean;
  onClose?: () => void;
}

function groupNavigationItems(items: NavigationItem[]) {
  return items.reduce<Record<string, NavigationItem[]>>((groups, item) => {
    const section = item.section ?? "Menu";
    groups[section] = [...(groups[section] ?? []), item];
    return groups;
  }, {});
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
          "block rounded-xl px-3 py-2 text-sm font-medium transition",
          dark
            ? isActive
              ? "bg-slate-800 text-white"
              : "text-slate-300 hover:bg-slate-900 hover:text-white"
            : isActive
              ? "bg-[var(--brand-brick)] text-white shadow-sm"
              : "text-slate-700 hover:bg-[var(--brand-brick-soft)] hover:text-[var(--brand-brick)]",
        ].join(" ")
      }
    >
      {item.label}
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
  const location = useLocation();
  const groupedItems = useMemo(() => groupNavigationItems(items), [items]);

  const defaultOpenSections = useMemo(() => {
    return Object.entries(groupedItems)
      .filter(([, sectionItems]) =>
        sectionItems.some(
          (item) => location.pathname === item.to || location.pathname.startsWith(`${item.to}/`)
        )
      )
      .map(([section]) => section);
  }, [groupedItems, location.pathname]);

  const [openSections, setOpenSections] = useState<string[]>(defaultOpenSections);

  const toggleSection = (section: string) => {
    setOpenSections((prev) =>
      prev.includes(section)
        ? prev.filter((item) => item !== section)
        : [...prev, section]
    );
  };

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
          <div className="min-w-0">
            <p
              className={[
                "truncate text-base font-bold tracking-tight",
                dark ? "text-white" : "text-[var(--brand-brick)]",
              ].join(" ")}
            >
              Chicken Alibaba
            </p>
            <p
              className={[
                "mt-0.5 truncate text-xs",
                dark ? "text-slate-400" : "text-slate-500",
              ].join(" ")}
            >
              {title}
            </p>
          </div>

          <button
            type="button"
            onClick={onClose}
            className={[
              "inline-flex h-9 w-9 items-center justify-center rounded-xl text-lg transition lg:hidden",
              dark
                ? "text-slate-300 hover:bg-slate-900 hover:text-white"
                : "text-slate-500 hover:bg-orange-50 hover:text-[var(--brand-brick)]",
            ].join(" ")}
            aria-label="Tutup menu navigasi"
          >
            ×
          </button>
        </div>

        <nav className="min-h-0 flex-1 overflow-y-auto px-4 py-4">
          <div className="space-y-2">
            {Object.entries(groupedItems).map(([section, sectionItems]) => {
              const expanded = openSections.includes(section);

              return (
                <div
                  key={section}
                  className={[
                    "rounded-2xl border",
                    dark
                      ? "border-slate-800 bg-slate-950"
                      : "border-orange-100 bg-orange-50/30",
                  ].join(" ")}
                >
                  <button
                    type="button"
                    onClick={() => toggleSection(section)}
                    className={[
                      "flex w-full items-center justify-between gap-3 rounded-2xl px-4 py-3 text-left text-sm font-semibold transition",
                      dark
                        ? "text-slate-100 hover:bg-slate-900"
                        : "text-slate-900 hover:bg-orange-50",
                    ].join(" ")}
                  >
                    <span>{section}</span>
                    <span
                      className={[
                        "text-xs transition-transform",
                        expanded ? "rotate-180" : "rotate-0",
                        dark ? "text-slate-400" : "text-[var(--brand-brick)]",
                      ].join(" ")}
                    >
                      ▼
                    </span>
                  </button>

                  {expanded ? (
                    <div className="space-y-1 px-2 pb-3">
                      {sectionItems.map((item) => (
                        <SidebarLink
                          key={item.to}
                          item={item}
                          dark={dark}
                          onClick={onClose}
                        />
                      ))}
                    </div>
                  ) : null}
                </div>
              );
            })}
          </div>
        </nav>
      </aside>
    </>
  );
}