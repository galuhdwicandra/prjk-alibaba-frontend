import { useCallback } from "react";
import { useKeyboardShortcut } from "@/hooks/useKeyboardShortcut";

interface UsePosKeyboardShortcutsOptions {
  enabled?: boolean;
  onFocusSearch?: () => void;
  onOpenPayment?: () => void;
  onClearCart?: () => void;
  onPrintReceipt?: () => void;
  onHoldOrder?: () => void;
}

export function usePosKeyboardShortcuts({
  enabled = true,
  onFocusSearch,
  onOpenPayment,
  onClearCart,
  onPrintReceipt,
  onHoldOrder,
}: UsePosKeyboardShortcutsOptions) {
  const focusSearch = useCallback(() => {
    onFocusSearch?.();
  }, [onFocusSearch]);

  const openPayment = useCallback(() => {
    onOpenPayment?.();
  }, [onOpenPayment]);

  const clearCart = useCallback(() => {
    onClearCart?.();
  }, [onClearCart]);

  const printReceipt = useCallback(() => {
    onPrintReceipt?.();
  }, [onPrintReceipt]);

  const holdOrder = useCallback(() => {
    onHoldOrder?.();
  }, [onHoldOrder]);

  useKeyboardShortcut({
    key: "/",
    enabled,
    preventDefault: true,
    onTrigger: focusSearch,
  });

  useKeyboardShortcut({
    key: "Enter",
    ctrlKey: true,
    enabled,
    allowInEditable: true,
    preventDefault: true,
    onTrigger: openPayment,
  });

  useKeyboardShortcut({
    key: "Backspace",
    ctrlKey: true,
    enabled,
    preventDefault: true,
    onTrigger: clearCart,
  });

  useKeyboardShortcut({
    key: "p",
    ctrlKey: true,
    enabled,
    preventDefault: true,
    onTrigger: printReceipt,
  });

  useKeyboardShortcut({
    key: "h",
    ctrlKey: true,
    enabled,
    preventDefault: true,
    onTrigger: holdOrder,
  });
}