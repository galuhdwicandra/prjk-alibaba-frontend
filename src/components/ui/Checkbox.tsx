import type { InputHTMLAttributes } from "react";

interface CheckboxProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "type"> {
  label: string;
  hint?: string;
}

export function Checkbox({ label, hint, id, ...props }: CheckboxProps) {
  const inputId = id ?? props.name;

  return (
    <label htmlFor={inputId} className="flex cursor-pointer items-start gap-3">
      <input
        id={inputId}
        type="checkbox"
        className="mt-1 h-4 w-4 rounded border-slate-300 text-slate-900"
        {...props}
      />
      <div>
        <div className="text-sm font-medium text-slate-800">{label}</div>
        {hint ? <div className="text-xs text-slate-500">{hint}</div> : null}
      </div>
    </label>
  );
}