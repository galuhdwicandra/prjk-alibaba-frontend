import type { PropsWithChildren } from "react";
import { cn } from "./utils";

type BadgeVariant = "default" | "success" | "warning" | "danger" | "info";

const variantClassMap: Record<BadgeVariant, string> = {
  default: "border-slate-200 bg-white text-slate-700 ring-slate-100",
  success: "border-emerald-200 bg-emerald-50 text-emerald-700 ring-emerald-100",
  warning: "border-amber-200 bg-amber-50 text-amber-700 ring-amber-100",
  danger: "border-red-200 bg-red-50 text-red-700 ring-red-100",
  info: "border-orange-200 bg-orange-50 text-orange-700 ring-orange-100",
};

interface BadgeProps extends PropsWithChildren {
  variant?: BadgeVariant;
  className?: string;
}

export function Badge({ children, variant = "default", className }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex max-w-full items-center gap-1 rounded-full border px-2.5 py-1 text-xs font-semibold leading-none shadow-sm ring-1 ring-inset transition-colors",
        variantClassMap[variant],
        className
      )}
    >
      <span className="truncate">{children}</span>
    </span>
  );
}