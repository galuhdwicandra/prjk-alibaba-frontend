import type { InputHTMLAttributes } from "react";
import { cn } from "./utils";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  hint?: string;
  error?: string;
}

export function Input({ label, hint, error, className, id, ...props }: InputProps) {
  const inputId = id ?? props.name;

  return (
    <div className="space-y-1.5">
      {label ? (
        <label
          htmlFor={inputId}
          className="block text-sm font-medium text-slate-700"
        >
          {label}
        </label>
      ) : null}

      <input
        id={inputId}
        className={cn(
          "w-full rounded-xl border px-3 py-2 text-sm shadow-sm outline-none transition duration-150 placeholder:text-slate-400 focus:ring-2 focus:ring-slate-300 focus:ring-offset-0",
          error
            ? "border-red-300 bg-red-50 text-slate-900 focus:border-red-400 focus:ring-red-200"
            : "border-slate-300 bg-white text-slate-900 focus:border-slate-400",
          className
        )}
        aria-invalid={Boolean(error)}
        {...props}
      />

      {error ? (
        <p className="text-xs font-medium text-red-600">{error}</p>
      ) : hint ? (
        <p className="text-xs text-slate-500">{hint}</p>
      ) : null}
    </div>
  );
}