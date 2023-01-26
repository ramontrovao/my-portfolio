import {
  ArrowDown,
  GithubLogo,
  LinkedinLogo,
  WhatsappLogo,
} from "phosphor-react";
import {
  ArrowDownContainer,
  Content,
  IntroductionSection,
  SocialList,
} from "./styles";

export function Introduction() {
  return (
    <IntroductionSection id="intro">
      <Content>
        <div className="square" id="squareLeft"></div>
        <span>Olá, eu sou</span>
        <h1>Ramon Pinheiro</h1>
        <div className="square" id="squareRight"></div>
        <p>
          Um desenvolvedor front-end responsável por criar interfaces incríveis!
        </p>

        <SocialList>
          <a
            href="https://www.linkedin.com/in/ramon-pinheiro-230439260/"
            target="_blank"
          >
            <div>
              <LinkedinLogo size={20} weight="fill" />
            </div>
          </a>

          <a href="https://github.com/ramontrovao" target="_blank">
            <div>
              <GithubLogo size={20} weight="fill" />
            </div>
          </a>

          <a
            href="https://api.whatsapp.com/send?phone=5527995785613"
            target="_blank"
          >
            <div>
              <WhatsappLogo size={20} weight="fill" />
            </div>
          </a>
        </SocialList>
      </Content>

      <ArrowDownContainer>
        <a href="#projects">
          <div>
            <ArrowDown size={20} />
          </div>
        </a>
      </ArrowDownContainer>
    </IntroductionSection>
  );
}
