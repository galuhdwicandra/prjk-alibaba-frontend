import type { SelectHTMLAttributes } from "react";
import { cn } from "./utils";

export interface SelectOption {
  label: string;
  value: string | number;
}

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  hint?: string;
  error?: string;
  placeholder?: string;
  options: SelectOption[];
}

export function Select({
  label,
  hint,
  error,
  id,
  name,
  placeholder = "Pilih data",
  options,
  className,
  ...props
}: SelectProps) {
  const selectId = id ?? name;

  return (
    <div className="space-y-1.5">
      {label ? (
        <label htmlFor={selectId} className="block text-sm font-medium text-slate-700">
          {label}
        </label>
      ) : null}

      <select
        id={selectId}
        name={name}
        className={cn(
          "w-full rounded-xl border px-3 py-2 text-sm outline-none transition",
          error
            ? "border-red-300 bg-red-50 text-slate-900 focus:border-red-400"
            : "border-slate-300 bg-white text-slate-900 focus:border-slate-500",
          className
        )}
        {...props}
      >
        <option value="">{placeholder}</option>
        {options.map((option) => (
          <option key={`${option.value}`} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>

      {error ? <p className="text-xs text-red-600">{error}</p> : null}
      {!error && hint ? <p className="text-xs text-slate-500">{hint}</p> : null}
    </div>
  );
}