import type { ReactNode } from "react";

interface PageHeaderProps {
  title: string;
  description?: string;
  actions?: ReactNode;
  dark?: boolean;
}

export function PageHeader({
  title,
  description,
  actions,
  dark = false,
}: PageHeaderProps) {
  return (
    <div
      className={[
        "rounded-2xl border p-5 shadow-sm sm:p-6",
        dark ? "border-slate-700 bg-slate-900" : "border-slate-200 bg-white",
      ].join(" ")}
    >
      <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
        <div className="min-w-0">
          <h1
            className={[
              "text-xl font-semibold tracking-tight sm:text-2xl",
              dark ? "text-white" : "text-slate-950",
            ].join(" ")}
          >
            {title}
          </h1>

          {description ? (
            <p
              className={[
                "mt-1 max-w-3xl text-sm leading-6",
                dark ? "text-slate-300" : "text-slate-500",
              ].join(" ")}
            >
              {description}
            </p>
          ) : null}
        </div>

        {actions ? (
          <div className="flex shrink-0 flex-col gap-2 sm:flex-row sm:items-center">
            {actions}
          </div>
        ) : null}
      </div>
    </div>
  );
}