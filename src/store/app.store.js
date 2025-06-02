import { create } from "zustand";
import { persist } from "zustand/middleware";
import { LANGUAGES, PAGES, THEMES } from "../types";

export const appInitialState = {
  page: PAGES.HOME,
  language: LANGUAGES.EN,
  theme: THEMES.DARK,
};

export const useAppStore = create()(
  persist(
    (set) => ({
      ...appInitialState,

      setPage: (newPage) => set({ page: newPage }),
      setLanguage: (newLanguage) => set({ language: newLanguage }),
      setTheme: (newTheme) => set({ theme: newTheme }),
    }),
    {
      name: "app",
      partialize: (state) => ({
        language: state.language,
        theme: state.theme,
      }),
    }
  )
);
