import type { InputHTMLAttributes } from "react";
import { cn } from "./utils";

interface SearchFieldProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "type"> {
  onClear?: () => void;
}

export function SearchField({ className, value, onClear, ...props }: SearchFieldProps) {
  const hasValue = typeof value === "string" ? value.length > 0 : Boolean(value);

  return (
    <div className="relative">
      <input
        type="search"
        value={value}
        className={cn(
          "w-full rounded-xl border border-slate-300 bg-white px-3 py-2 pr-12 text-sm leading-5 text-slate-900 shadow-sm outline-none transition placeholder:text-slate-400 focus:border-slate-400 focus:ring-2 focus:ring-slate-200",
          className
        )}
        placeholder="Cari data..."
        {...props}
      />

      {hasValue && onClear ? (
        <button
          type="button"
          onClick={onClear}
          className="absolute right-2 top-1/2 inline-flex h-7 items-center justify-center rounded-lg px-2 text-xs font-medium text-slate-500 transition hover:bg-slate-100 hover:text-slate-700 -translate-y-1/2"
        >
          Clear
        </button>
      ) : null}
    </div>
  );
}