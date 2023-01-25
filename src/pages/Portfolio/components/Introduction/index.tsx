import { ArrowDown, GithubLogo, LinkedinLogo } from "phosphor-react";
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
        <span>Olá, eu sou</span>
        <h1>Ramon Pinheiro</h1>
        <div className="square"></div>
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
        </SocialList>
      </Content>

      <ArrowDownContainer>
        <a href="#aboutme">
          <div>
            <ArrowDown size={20} />
          </div>
        </a>
      </ArrowDownContainer>
    </IntroductionSection>
  );
}
