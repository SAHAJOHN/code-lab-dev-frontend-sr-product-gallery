import { create } from 'zustand';

export type ThemeNameType = 'light' | 'dark';

type ThemeStoreType = {
  theme: ThemeNameType;
  setTheme: (
    theme: ThemeNameType | ((prev: ThemeNameType) => ThemeNameType),
  ) => void;
};

const useThemeStore = create<ThemeStoreType>((set) => ({
  theme: 'light', // Default theme
  setTheme: (theme) =>
    set((state) => ({
      theme: typeof theme === 'function' ? theme(state.theme) : theme,
    })),
}));

export default useThemeStore;
