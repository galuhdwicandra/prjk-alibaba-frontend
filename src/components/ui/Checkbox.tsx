import type { InputHTMLAttributes } from "react";
import { cn } from "./utils";

interface CheckboxProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "type"> {
  label: string;
  hint?: string;
}

export function Checkbox({ label, hint, id, className, ...props }: CheckboxProps) {
  const inputId = id ?? props.name;

  return (
    <label
      htmlFor={inputId}
      className="flex cursor-pointer items-start gap-3 rounded-lg p-2 transition hover:bg-slate-50"
    >
      <input
        id={inputId}
        type="checkbox"
        className={cn(
          "mt-1 h-4 w-4 rounded border-slate-300 text-slate-900 shadow-sm transition focus-visible:ring-2 focus-visible:ring-slate-400 focus-visible:ring-offset-1",
          className
        )}
        {...props}
      />
      <div className="flex flex-col">
        <span className="text-sm font-medium leading-5 text-slate-800">{label}</span>
        {hint ? <span className="text-xs text-slate-500">{hint}</span> : null}
      </div>
    </label>
  );
}