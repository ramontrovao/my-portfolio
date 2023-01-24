import { Portfolio } from "./pages/Portfolio";
import { GlobalStyle } from "./styles/global";
import { ThemeContextProvider } from "./context/ThemeContextProvider";

export function App() {
  return (
    <ThemeContextProvider>
      <GlobalStyle />
      <Portfolio />
    </ThemeContextProvider>
  );
}
