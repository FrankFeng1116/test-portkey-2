import { create } from "zustand";

type UserUserStoreValues = {
  isLoggedIn: boolean;
  login: () => void;
  logout: () => void;
};

export const useUserStore = create<UserUserStoreValues>((set) => ({
  isLoggedIn: false,
  login: () => set({ isLoggedIn: true }),
  logout: () => set({ isLoggedIn: false }),
}));
