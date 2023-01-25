import { Aboutme } from "./components/Aboutme";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Introduction } from "./components/Introduction";
import { Projects } from "./components/Projects";
import { PortfolioContainer } from "./styles";

export function Portfolio() {
  return (
    <>
      <Header />
      <PortfolioContainer>
        <Introduction />
        <Aboutme />
        <Projects />
        <Contact />
      </PortfolioContainer>
      <Footer />
    </>
  );
}
