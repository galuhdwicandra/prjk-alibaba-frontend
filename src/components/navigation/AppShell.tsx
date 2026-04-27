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
        dark
          ? "bg-slate-950 text-slate-100"
          : "bg-gradient-to-br from-slate-50 via-slate-100 to-slate-200 text-slate-950",
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
            "px-4 py-4 sm:px-5 sm:py-5 lg:px-6 lg:py-6 xl:px-8",
            dark ? "bg-slate-950" : "bg-transparent",
          ].join(" ")}
        >
          <div className="mx-auto w-full max-w-[1600px]">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
}