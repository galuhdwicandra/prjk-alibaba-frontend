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
    <div className={cn("rounded-2xl border border-slate-200 bg-white p-5", className)}>
      {(title || actions) && (
        <div className="mb-4 flex items-start justify-between gap-4">
          <div>
            {title ? <h3 className="text-base font-semibold text-slate-900">{title}</h3> : null}
            {description ? <p className="mt-1 text-sm text-slate-500">{description}</p> : null}
          </div>
          {actions ? <div>{actions}</div> : null}
        </div>
      )}

      {children}
    </div>
  );
}