import type { InputHTMLAttributes } from "react";

interface RadioProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "type"> {
  label: string;
  hint?: string;
}

export function Radio({ label, hint, id, ...props }: RadioProps) {
  const inputId = id ?? `${props.name}-${props.value}`;

  return (
    <label htmlFor={inputId} className="flex cursor-pointer items-start gap-3">
      <input
        id={inputId}
        type="radio"
        className="mt-1 h-4 w-4 border-slate-300 text-slate-900"
        {...props}
      />
      <div>
        <div className="text-sm font-medium text-slate-800">{label}</div>
        {hint ? <div className="text-xs text-slate-500">{hint}</div> : null}
      </div>
    </label>
  );
}