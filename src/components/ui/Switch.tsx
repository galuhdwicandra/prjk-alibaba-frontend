interface SwitchProps {
  checked: boolean;
  onChange: (value: boolean) => void;
  label?: string;
  description?: string;
  disabled?: boolean;
}

export function Switch({
  checked,
  onChange,
  label,
  description,
  disabled = false,
}: SwitchProps) {
  return (
    <div
      className={[
        "flex items-center justify-between gap-4 rounded-2xl border bg-white px-4 py-3 transition",
        "border-slate-200",
        disabled ? "opacity-60" : "hover:border-slate-300",
      ].join(" ")}
    >
      <div className="min-w-0">
        {label ? (
          <div className="text-sm font-semibold leading-5 text-slate-900">
            {label}
          </div>
        ) : null}
        {description ? (
          <div className="mt-0.5 text-xs leading-5 text-slate-500">
            {description}
          </div>
        ) : null}
      </div>

      <button
        type="button"
        role="switch"
        aria-checked={checked}
        disabled={disabled}
        onClick={() => onChange(!checked)}
        className={[
          "relative inline-flex h-7 w-12 shrink-0 items-center rounded-full transition-colors duration-200",
          "focus:outline-none focus:ring-2 focus:ring-slate-900 focus:ring-offset-2",
          checked ? "bg-slate-900" : "bg-slate-300",
          disabled ? "cursor-not-allowed" : "cursor-pointer",
        ].join(" ")}
      >
        <span
          className={[
            "inline-block h-5 w-5 transform rounded-full bg-white shadow-sm ring-0 transition duration-200",
            checked ? "translate-x-6" : "translate-x-1",
          ].join(" ")}
        />
      </button>
    </div>
  );
}