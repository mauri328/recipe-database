import { create } from "zustand";

const STORAGE_KEY = "theme";

function getInitialTheme() {
  const stored = localStorage.getItem(STORAGE_KEY);
  if (stored === "light" || stored === "dark") return stored;
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

export const useThemeStore = create((set, get) => ({
  theme: getInitialTheme(),

  setTheme(theme) {
    localStorage.setItem(STORAGE_KEY, theme);
    document.documentElement.dataset.theme = theme;
    set({ theme });
  },

  toggleTheme() {
    get().setTheme(get().theme === "dark" ? "light" : "dark");
  },
}));

// apply immediately on load
document.documentElement.dataset.theme = useThemeStore.getState().theme;
