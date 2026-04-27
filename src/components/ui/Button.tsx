import type { ButtonHTMLAttributes, PropsWithChildren } from "react";
import { cn } from "./utils";

type ButtonVariant = "primary" | "secondary" | "outline" | "danger" | "ghost";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>, PropsWithChildren {
  variant?: ButtonVariant;
  size?: ButtonSize;
  loading?: boolean;
  fullWidth?: boolean;
}

const variantClassMap: Record<ButtonVariant, string> = {
  primary: "bg-slate-900 text-white shadow-sm hover:bg-slate-800 active:bg-slate-950",
  secondary: "bg-slate-100 text-slate-900 hover:bg-slate-200 active:bg-slate-300",
  outline:
    "border border-slate-300 bg-white text-slate-900 shadow-sm hover:bg-slate-50 active:bg-slate-100",
  danger: "bg-red-600 text-white shadow-sm hover:bg-red-700 active:bg-red-800",
  ghost: "bg-transparent text-slate-700 hover:bg-slate-100 active:bg-slate-200",
};

const sizeClassMap: Record<ButtonSize, string> = {
  sm: "min-h-9 px-3 py-1.5 text-xs",
  md: "min-h-10 px-4 py-2 text-sm",
  lg: "min-h-12 px-5 py-2.5 text-base",
};

export function Button({
  children,
  className,
  variant = "primary",
  size = "md",
  loading = false,
  fullWidth = false,
  disabled,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-xl font-semibold leading-none outline-none transition duration-150 focus-visible:ring-2 focus-visible:ring-slate-400 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-60",
        variantClassMap[variant],
        sizeClassMap[size],
        fullWidth && "w-full",
        className
      )}
      disabled={disabled || loading}
      aria-busy={loading}
      {...props}
    >
      {loading ? "Memproses..." : children}
    </button>
  );
}