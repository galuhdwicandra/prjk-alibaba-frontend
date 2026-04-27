import type { PropsWithChildren, ReactNode } from "react";
import { cn } from "./utils";

interface CardProps extends PropsWithChildren {
  title?: string;
  description?: string;
  actions?: ReactNode;
  className?: string;
}

export function Card({ title, description, actions, children, className }: CardProps) {
  return (
    <div
      className={cn(
        "rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition",
        className
      )}
    >
      {(title || actions) && (
        <div className="mb-5 flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
          <div className="space-y-1">
            {title ? (
              <h3 className="text-base font-semibold leading-tight text-slate-900">
                {title}
              </h3>
            ) : null}
            {description ? (
              <p className="text-sm leading-relaxed text-slate-500">
                {description}
              </p>
            ) : null}
          </div>

          {actions ? (
            <div className="flex shrink-0 items-center gap-2">{actions}</div>
          ) : null}
        </div>
      )}

      <div className="space-y-4">{children}</div>
    </div>
  );
}