import type { InputHTMLAttributes } from "react";

interface RadioProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "type"> {
  label: string;
  hint?: string;
}

export function Radio({ label, hint, id, ...props }: RadioProps) {
  const inputId = id ?? `${props.name}-${props.value}`;

  return (
    <label
      htmlFor={inputId}
      className="group flex cursor-pointer items-start gap-3 rounded-xl border border-slate-200 bg-white px-4 py-3 text-left transition hover:border-slate-300 hover:bg-slate-50 has-[:checked]:border-slate-900 has-[:checked]:bg-slate-50 has-[:disabled]:cursor-not-allowed has-[:disabled]:opacity-60"
    >
      <input
        id={inputId}
        type="radio"
        className="mt-0.5 h-4 w-4 shrink-0 border-slate-300 text-slate-900 accent-slate-900 focus:ring-2 focus:ring-slate-900 focus:ring-offset-2 disabled:cursor-not-allowed"
        {...props}
      />
      <span className="min-w-0">
        <span className="block text-sm font-semibold leading-5 text-slate-900">
          {label}
        </span>
        {hint ? (
          <span className="mt-0.5 block text-xs leading-5 text-slate-500">
            {hint}
          </span>
        ) : null}
      </span>
    </label>
  );
}