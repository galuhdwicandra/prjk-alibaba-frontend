import { useActiveOutlet } from "@/hooks/useActiveOutlet";

interface AppOutletSwitcherProps {
  dark?: boolean;
}

export function AppOutletSwitcher({ dark = false }: AppOutletSwitcherProps) {
  const { outlets, activeOutletId, setActiveOutletId } = useActiveOutlet();

  if (!outlets.length) {
    return null;
  }

  return (
    <div className="w-full min-w-0 sm:w-auto sm:min-w-[240px]">
      <label
        className={[
          "mb-1.5 block text-xs font-semibold uppercase tracking-wide",
          dark ? "text-slate-400" : "text-slate-500",
        ].join(" ")}
      >
        Outlet Aktif
      </label>

      <div className="relative">
        <select
          value={activeOutletId ?? ""}
          onChange={(event) => {
            const value = event.target.value ? Number(event.target.value) : null;
            setActiveOutletId(value);
          }}
          className={[
            "h-10 w-full appearance-none rounded-xl border px-3 pr-9 text-sm font-medium shadow-sm outline-none transition",
            "focus:border-slate-900 focus:ring-2 focus:ring-slate-900/10",
            dark
              ? "border-slate-700 bg-slate-900 text-white shadow-none focus:border-slate-500 focus:ring-slate-500/20"
              : "border-slate-200 bg-white text-slate-900 hover:border-slate-300",
          ].join(" ")}
        >
          {outlets.map((item) => (
            <option key={item.outlet_id} value={item.outlet_id}>
              {item.outlet_name ?? `Outlet #${item.outlet_id}`}{" "}
              {item.outlet_code ? `(${item.outlet_code})` : ""}
            </option>
          ))}
        </select>

        <span
          className={[
            "pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-xs",
            dark ? "text-slate-400" : "text-slate-500",
          ].join(" ")}
        >
          ▾
        </span>
      </div>
    </div>
  );
}