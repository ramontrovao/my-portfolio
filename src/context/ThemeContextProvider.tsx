import { createContext, ReactNode, useEffect, useState } from "react";
import { ThemeProvider } from "styled-components";
import { DarkTheme } from "../styles/themes/DarkTheme";
import { DefaultTheme } from "../styles/themes/DefaultTheme";

type themeType = "light" | "dark" | null;
interface ThemeContextType {
  theme: themeType;
  changeTheme: () => void;
}

interface ThemeContextProviderProps {
  children: ReactNode;
}

export const ThemeContext = createContext({} as ThemeContextType);

const localStorageTheme = localStorage.getItem(
  "portfolio-ramon-theme"
) as themeType;

export function ThemeContextProvider({ children }: ThemeContextProviderProps) {
  const [theme, setTheme] = useState<themeType>(localStorageTheme);

  function changeTheme() {
    const newThemeValue = theme === "light" ? "dark" : "light";
    setTheme(newThemeValue);

    localStorage.setItem("portfolio-ramon-theme", newThemeValue);
  }

  useEffect(() => {
    if (!localStorageTheme) {
      changeTheme();
      localStorage.setItem("portfolio-ramon-theme", "light");
    }
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, changeTheme }}>
      <ThemeProvider theme={theme === "light" ? DefaultTheme : DarkTheme}>
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
}
