import { Chat } from "phosphor-react";
import { Title } from "../Projects/styles";
import { ContactContainer, ContactSection } from "./styles";

export function Contact() {
  return (
    <ContactSection id="contact">
      <Title>
        <h2>Contato</h2>

        <div></div>
      </Title>

      <ContactContainer>
        <p>
          Sabia que o próximo projeto pode ser seu ou da sua empresa? <br />
          Entre em contato comigo agora mesmo!
        </p>

        <a
          href="https://api.whatsapp.com/send?phone=5527995785613"
          target="_blank"
        >
          <div>
            <Chat size={25} /> Me mande uma mensagem!
          </div>
        </a>
      </ContactContainer>
    </ContactSection>
  );
}
