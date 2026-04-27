import { AppBreadcrumbs } from "./AppBreadcrumbs";
import { AppOutletSwitcher } from "./AppOutletSwitcher";
import { AppProfileMenu } from "./AppProfileMenu";

interface AppTopbarProps {
  dark?: boolean;
  showOutletSwitcher?: boolean;
  onMenuClick?: () => void;
}

export function AppTopbar({
  dark = false,
  showOutletSwitcher = true,
  onMenuClick,
}: AppTopbarProps) {
  return (
    <header
      className={[
        "sticky top-0 z-30 border-b px-4 py-3 backdrop-blur lg:px-6",
        dark
          ? "border-slate-800 bg-slate-950/95"
          : "border-slate-200 bg-white/95 shadow-sm shadow-slate-200/50",
      ].join(" ")}
    >
      <div className="mx-auto flex w-full max-w-[1600px] flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex min-w-0 items-center gap-3">
          <button
            type="button"
            onClick={onMenuClick}
            className={[
              "inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border text-lg transition lg:hidden",
              dark
                ? "border-slate-800 bg-slate-900 text-slate-100 hover:bg-slate-800"
                : "border-slate-200 bg-white text-slate-700 hover:bg-slate-100 hover:text-slate-950",
            ].join(" ")}
            aria-label="Buka menu navigasi"
          >
            ☰
          </button>

          <div className="min-w-0">
            <AppBreadcrumbs dark={dark} />
          </div>
        </div>

        <div className="flex min-w-0 flex-col gap-2 sm:flex-row sm:items-center sm:justify-end lg:gap-3">
          {showOutletSwitcher ? <AppOutletSwitcher dark={dark} /> : null}
          <AppProfileMenu dark={dark} />
        </div>
      </div>
    </header>
  );
}