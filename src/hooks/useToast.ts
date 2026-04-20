import { create } from "zustand";

export type ToastVariant = "success" | "error" | "info" | "warning";

export interface ToastItem {
  id: number;
  title: string;
  description?: string;
  variant: ToastVariant;
}

interface ToastState {
  items: ToastItem[];
  showToast: (payload: Omit<ToastItem, "id">) => void;
  removeToast: (id: number) => void;
}

export const useToastStore = create<ToastState>((set, get) => ({
  items: [],
  showToast: (payload) => {
    const id = Date.now() + Math.floor(Math.random() * 1000);

    set((state) => ({
      items: [...state.items, { id, ...payload }],
    }));

    window.setTimeout(() => {
      get().removeToast(id);
    }, 3500);
  },
  removeToast: (id) =>
    set((state) => ({
      items: state.items.filter((item) => item.id !== id),
    })),
}));

export const useToast = () => {
  const showToast = useToastStore((state) => state.showToast);

  return {
    success: (title: string, description?: string) =>
      showToast({ title, description, variant: "success" }),
    error: (title: string, description?: string) =>
      showToast({ title, description, variant: "error" }),
    info: (title: string, description?: string) =>
      showToast({ title, description, variant: "info" }),
    warning: (title: string, description?: string) =>
      showToast({ title, description, variant: "warning" }),
  };
};