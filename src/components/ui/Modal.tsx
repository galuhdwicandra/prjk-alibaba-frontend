import type { PropsWithChildren, ReactNode } from "react";
import { Button } from "./Button";

interface ModalProps extends PropsWithChildren {
  open: boolean;
  title: string;
  description?: string;
  onClose: () => void;
  footer?: ReactNode;
}

export function Modal({
  open,
  title,
  description,
  onClose,
  footer,
  children,
}: ModalProps) {
  if (!open) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/50 backdrop-blur-sm p-4">
      <div className="w-full max-w-xl rounded-2xl border border-slate-200 bg-white shadow-xl">
        <div className="flex items-start justify-between gap-4 border-b border-slate-100 px-6 py-4">
          <div className="space-y-1">
            <h2 className="text-lg font-semibold text-slate-900">{title}</h2>
            {description ? (
              <p className="text-sm text-slate-500">{description}</p>
            ) : null}
          </div>

          <Button variant="ghost" size="sm" onClick={onClose}>
            Tutup
          </Button>
        </div>

        <div className="max-h-[70vh] overflow-y-auto px-6 py-5">
          {children}
        </div>

        {footer ? (
          <div className="flex items-center justify-end gap-3 border-t border-slate-100 px-6 py-4">
            {footer}
          </div>
        ) : null}
      </div>
    </div>
  );
}