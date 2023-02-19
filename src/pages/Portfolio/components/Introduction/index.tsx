import {
  ArrowDown,
  GithubLogo,
  LinkedinLogo,
  WhatsappLogo,
} from "phosphor-react";
import { useContext } from "react";
import { ThemeContext } from "../../../../context/ThemeContextProvider";
import {
  ArrowDownContainer,
  Content,
  ContentWrapper,
  IntroductionSection,
  SocialList,
} from "./styles";

export function Introduction() {
  const { theme } = useContext(ThemeContext);

  return (
    <IntroductionSection id="intro">
      <ContentWrapper>
        <Content>
          <div className="square" id="squareLeft"></div>
          <span>Olá, eu sou</span>
          <h1>Ramon Pinheiro</h1>
          <div className="square" id="squareRight"></div>
          <p>
            Um desenvolvedor front-end responsável por criar interfaces
            incríveis!
          </p>

          <SocialList>
            <a
              href="https://www.linkedin.com/in/ramon-pinheiro-230439260/"
              target="_blank"
              title="Meu LinkedIn"
              aria-label="Meu LinkedIn"
            >
              <LinkedinLogo size={20} weight="fill" />
            </a>

            <a
              href="https://github.com/ramontrovao"
              target="_blank"
              title="Meu Github"
              aria-label="Meu Github"
            >
              <GithubLogo size={20} weight="fill" />
            </a>

            <a
              href="https://api.whatsapp.com/send?phone=5527995785613"
              target="_blank"
              title="Meu Whatsapp"
              aria-label="Meu Whatsapp"
            >
              <WhatsappLogo size={20} weight="fill" />
            </a>
          </SocialList>
        </Content>

        {theme === "light" ? (
          <img src="./assets/logolight.png" />
        ) : (
          <img src="./assets/logodark.png" />
        )}
      </ContentWrapper>

      <ArrowDownContainer>
        <a
          href="#projects"
          title="Veja meus projetos"
          aria-label="Veja meus projetos"
        >
          <ArrowDown size={20} />
        </a>
      </ArrowDownContainer>
    </IntroductionSection>
  );
}
