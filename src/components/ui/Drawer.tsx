import type { PropsWithChildren, ReactNode } from "react";
import { Button } from "./Button";

interface DrawerProps extends PropsWithChildren {
  open: boolean;
  title: string;
  description?: string;
  side?: "left" | "right";
  widthClassName?: string;
  onClose: () => void;
  footer?: ReactNode;
}

export function Drawer({
  open,
  title,
  description,
  side = "right",
  widthClassName = "max-w-lg",
  onClose,
  footer,
  children,
}: DrawerProps) {
  if (!open) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/60 backdrop-blur-sm">
      <div
        className={[
          "absolute top-0 h-full w-full overflow-hidden bg-white shadow-2xl ring-1 ring-slate-950/10 sm:w-[520px]",
          widthClassName,
          side === "right" ? "right-0" : "left-0",
        ].join(" ")}
        role="dialog"
        aria-modal="true"
        aria-labelledby="drawer-title"
      >
        <div className="flex h-full flex-col">
          <div className="flex items-start justify-between gap-4 border-b border-slate-200 px-5 py-4 sm:px-6">
            <div className="min-w-0">
              <h2 id="drawer-title" className="text-base font-semibold text-slate-950 sm:text-lg">
                {title}
              </h2>
              {description ? (
                <p className="mt-1 max-w-prose text-sm leading-6 text-slate-500">
                  {description}
                </p>
              ) : null}
            </div>

            <Button variant="ghost" size="sm" onClick={onClose}>
              Tutup
            </Button>
          </div>

          <div className="flex-1 overflow-y-auto px-5 py-5 sm:px-6">{children}</div>

          {footer ? (
            <div className="border-t border-slate-200 bg-white px-5 py-4 sm:px-6">{footer}</div>
          ) : null}
        </div>
      </div>
    </div>
  );
}