import { Aboutme } from "./components/Aboutme";
import { Header } from "./components/Header";
import { Introduction } from "./components/Introduction";
import { PortfolioContainer } from "./styles";

export function Portfolio() {
  return (
    <>
      <Header />
      <PortfolioContainer>
        <Introduction />
        <Aboutme />
      </PortfolioContainer>
    </>
  );
}
