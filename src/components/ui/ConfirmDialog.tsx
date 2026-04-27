import { Modal } from "./Modal";
import { Button } from "./Button";

interface ConfirmDialogProps {
  open: boolean;
  title?: string;
  description?: string;
  confirmText?: string;
  cancelText?: string;
  confirmVariant?: "primary" | "danger";
  loading?: boolean;
  onConfirm: () => void;
  onClose: () => void;
}

export function ConfirmDialog({
  open,
  title = "Konfirmasi aksi",
  description = "Apakah Anda yakin ingin melanjutkan aksi ini?",
  confirmText = "Ya, lanjutkan",
  cancelText = "Batal",
  confirmVariant = "danger",
  loading = false,
  onConfirm,
  onClose,
}: ConfirmDialogProps) {
  return (
    <Modal
      open={open}
      title={title}
      description={description}
      onClose={onClose}
      footer={
        <div className="flex w-full flex-col-reverse gap-2 sm:flex-row sm:justify-end">
          <Button variant="outline" fullWidth className="sm:w-auto" onClick={onClose}>
            {cancelText}
          </Button>
          <Button
            variant={confirmVariant}
            loading={loading}
            fullWidth
            className="sm:w-auto"
            onClick={onConfirm}
          >
            {confirmText}
          </Button>
        </div>
      }
    >
      <div className="rounded-2xl border border-amber-200 bg-amber-50 px-4 py-3 text-sm leading-6 text-amber-800">
        Tindakan ini sebaiknya hanya dilakukan jika Anda sudah yakin terhadap data yang dipilih.
      </div>
    </Modal>
  );
}