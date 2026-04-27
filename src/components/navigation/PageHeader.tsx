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
        dark
          ? "border-slate-700 bg-slate-900"
          : "border-[var(--color-border)] bg-white",
      ].join(" ")}
    >
      <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
        <div className="min-w-0 space-y-1">
          <h1
            className={[
              "truncate text-xl font-semibold tracking-tight sm:text-2xl",
              dark ? "text-white" : "text-[var(--color-text)]",
            ].join(" ")}
          >
            {title}
          </h1>

          {description ? (
            <p
              className={[
                "max-w-2xl text-sm leading-relaxed",
                dark ? "text-slate-300" : "text-[var(--color-muted)]",
              ].join(" ")}
            >
              {description}
            </p>
          ) : null}
        </div>

        {actions ? (
          <div className="flex w-full flex-col gap-2 sm:w-auto sm:flex-row sm:flex-wrap sm:items-center sm:justify-end">
            {actions}
          </div>
        ) : null}
      </div>
    </div>
  );
}