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
    <div className="min-w-[220px]">
      <label
        className={[
          "mb-1 block text-xs font-medium",
          dark ? "text-slate-400" : "text-slate-500",
        ].join(" ")}
      >
        Outlet Aktif
      </label>

      <select
        value={activeOutletId ?? ""}
        onChange={(event) => {
          const value = event.target.value ? Number(event.target.value) : null;
          setActiveOutletId(value);
        }}
        className={[
          "w-full rounded-xl border px-3 py-2 text-sm outline-none",
          dark
            ? "border-slate-700 bg-slate-900 text-white"
            : "border-slate-300 bg-white text-slate-900",
        ].join(" ")}
      >
        {outlets.map((item) => (
          <option key={item.outlet_id} value={item.outlet_id}>
            {item.outlet_name ?? `Outlet #${item.outlet_id}`}{" "}
            {item.outlet_code ? `(${item.outlet_code})` : ""}
          </option>
        ))}
      </select>
    </div>
  );
}