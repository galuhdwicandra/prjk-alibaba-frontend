import { create } from "zustand";
import type { User } from "@/types/user";

interface AuthState {
  token: string | null;
  user: User | null;
  hydrated: boolean;
  setAuth: (payload: { token: string | null; user: User | null }) => void;
  setHydrated: (value: boolean) => void;
  clearAuth: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  token: null,
  user: null,
  hydrated: false,
  setAuth: ({ token, user }) => set({ token, user }),
  setHydrated: (hydrated) => set({ hydrated }),
  clearAuth: () => set({ token: null, user: null }),
}));