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
          "w-full rounded-xl border border-slate-300 bg-white px-3 py-2 pr-10 text-sm outline-none transition focus:border-slate-500",
          className
        )}
        placeholder="Cari data..."
        {...props}
      />

      {hasValue && onClear ? (
        <button
          type="button"
          onClick={onClear}
          className="absolute right-2 top-1/2 -translate-y-1/2 rounded-lg px-2 py-1 text-xs text-slate-500 hover:bg-slate-100"
        >
          Clear
        </button>
      ) : null}
    </div>
  );
}