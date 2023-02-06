import { AboutmeContainer } from "./styles";

export function Aboutme() {
  return (
    <AboutmeContainer id="aboutme">
      <img src="./assets/profileicon.jpeg" alt="" />

      <div>
        <h2>Sobre mim</h2>

        <div></div>

        <p>
          Olá, seja bem vindo ao meu portfólio! Meu nome é Ramon, tenho 15 anos
          e programo há quase um ano! Sou apaixonado por Typescript e utilizo
          React e NextJS no meu dia a dia. Atualmente sou desenvolvedor
          front-end, porém tenho interesse em migrar para área mobile no futuro.
          Sou apaixonado por tecnolgia desde os meus 8 anos, mas só fiz meu
          primeiro curso no ínicio do ano passado. Completei o curso Fullstack
          da Onebitcode e estou quase terminando o curso Ignite (avançado) da
          Rocketseat na área de React! :)
        </p>
      </div>
    </AboutmeContainer>
  );
}
