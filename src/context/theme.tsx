import { createContext, useContext } from "react"; 


export const ThemeContextType = createContext({
  darkMode: true,
  toggleTheme: () => {}
});

export const ThemeProvider = ThemeContextType.Provider;

export default function useTheme() {
    return useContext(ThemeContextType);
};