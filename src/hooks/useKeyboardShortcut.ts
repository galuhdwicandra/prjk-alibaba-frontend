import { useEffect } from "react";

type ShortcutKey = string;

interface KeyboardShortcutOptions {
  key: ShortcutKey;
  ctrlKey?: boolean;
  altKey?: boolean;
  shiftKey?: boolean;
  metaKey?: boolean;
  enabled?: boolean;
  allowInEditable?: boolean;
  preventDefault?: boolean;
  onTrigger: () => void;
}

const isEditableElement = (target: EventTarget | null) => {
  if (!(target instanceof HTMLElement)) {
    return false;
  }

  const tagName = target.tagName.toLowerCase();

  return (
    tagName === "input" ||
    tagName === "textarea" ||
    tagName === "select" ||
    target.isContentEditable
  );
};

export function useKeyboardShortcut({
  key,
  ctrlKey = false,
  altKey = false,
  shiftKey = false,
  metaKey = false,
  enabled = true,
  allowInEditable = false,
  preventDefault = true,
  onTrigger,
}: KeyboardShortcutOptions) {
  useEffect(() => {
    if (!enabled) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      const isSameKey = event.key.toLowerCase() === key.toLowerCase();
      const isSameCtrl = event.ctrlKey === ctrlKey;
      const isSameAlt = event.altKey === altKey;
      const isSameShift = event.shiftKey === shiftKey;
      const isSameMeta = event.metaKey === metaKey;

      if (!isSameKey || !isSameCtrl || !isSameAlt || !isSameShift || !isSameMeta) {
        return;
      }

      if (!allowInEditable && isEditableElement(event.target)) {
        return;
      }

      if (preventDefault) {
        event.preventDefault();
      }

      onTrigger();
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [
    key,
    ctrlKey,
    altKey,
    shiftKey,
    metaKey,
    enabled,
    allowInEditable,
    preventDefault,
    onTrigger,
  ]);
}