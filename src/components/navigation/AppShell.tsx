import { useState } from "react";
import { Outlet } from "react-router-dom";
import { AppSidebar } from "./AppSidebar";
import { AppTopbar } from "./AppTopbar";
import type { NavigationItem } from "./navigation.config";

interface AppShellProps {
  appTitle: string;
  navItems: NavigationItem[];
  dark?: boolean;
  showOutletSwitcher?: boolean;
}

export function AppShell({
  appTitle,
  navItems,
  dark = false,
  showOutletSwitcher = true,
}: AppShellProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div
      className={[
        "min-h-screen",
        "transition-colors duration-200",
        dark
          ? "bg-slate-950 text-slate-100"
          : "bg-[var(--color-bg)] text-[var(--color-text)]",
      ].join(" ")}
    >
      <AppSidebar
        title={appTitle}
        items={navItems}
        dark={dark}
        open={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
      />

      <div className="flex min-h-screen min-w-0 flex-1 flex-col lg:pl-72">
        <AppTopbar
          dark={dark}
          showOutletSwitcher={showOutletSwitcher}
          onMenuClick={() => setSidebarOpen(true)}
        />

        <main
          className={[
            "min-w-0 flex-1",
            "px-4 py-5 sm:px-6 sm:py-6 lg:px-8 lg:py-7",
            dark ? "bg-slate-950" : "bg-transparent",
          ].join(" ")}
        >
          <div className="mx-auto w-full max-w-[1600px]">
            <div className="space-y-5">
              <Outlet />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}