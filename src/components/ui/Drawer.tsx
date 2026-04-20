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
    <div className="fixed inset-0 z-50 bg-slate-950/50">
      <div
        className={[
          "absolute top-0 h-full w-full bg-white shadow-xl sm:w-[520px]",
          widthClassName,
          side === "right" ? "right-0" : "left-0",
        ].join(" ")}
      >
        <div className="flex h-full flex-col p-6">
          <div className="flex items-start justify-between gap-4 border-b border-slate-200 pb-4">
            <div>
              <h2 className="text-lg font-semibold text-slate-900">{title}</h2>
              {description ? <p className="mt-1 text-sm text-slate-500">{description}</p> : null}
            </div>

            <Button variant="ghost" onClick={onClose}>
              Tutup
            </Button>
          </div>

          <div className="flex-1 overflow-y-auto py-5">{children}</div>

          {footer ? <div className="border-t border-slate-200 pt-4">{footer}</div> : null}
        </div>
      </div>
    </div>
  );
}