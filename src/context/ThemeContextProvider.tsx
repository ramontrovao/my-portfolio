import { createContext, ReactNode, useState } from "react";
import { ThemeProvider } from "styled-components";
import { DarkTheme } from "../styles/themes/DarkTheme";
import { DefaultTheme } from "../styles/themes/DefaultTheme";

type selectedThemeType = "light" | "dark";

interface ThemeContextType {
  theme: selectedThemeType;
  changeTheme: () => void;
}

interface ThemeContextProviderProps {
  children: ReactNode;
}

export const ThemeContext = createContext({} as ThemeContextType);

export function ThemeContextProvider({ children }: ThemeContextProviderProps) {
  const [theme, setTheme] = useState<selectedThemeType>("light");

  function changeTheme() {
    setTheme(theme === "light" ? "dark" : "light");
  }

  return (
    <ThemeContext.Provider value={{ theme, changeTheme }}>
      <ThemeProvider theme={theme === "light" ? DefaultTheme : DarkTheme}>
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
}
