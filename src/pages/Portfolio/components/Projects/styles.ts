import styled, { css } from "styled-components";

export const ProjectsSection = styled.section`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2rem;

    .projects-swiper {
      width: 80%;
      height: 100%;
      padding: 1.5rem;
      cursor: grab;
      background-color: ${({ theme }) => theme["background"]};

      @media (max-width: 1024px) {
        width: 100%;
      }
    }

    .swiper-slide {
      text-align: center;
      font-size: 18px;
      background: #fff;

      /* Center slide text vertically */
      display: -webkit-box;
      display: -ms-flexbox;
      display: -webkit-flex;
      display: flex;
      -webkit-box-pack: center;
      -ms-flex-pack: center;
      -webkit-justify-content: center;
      justify-content: center;
      -webkit-box-align: center;
      -ms-flex-align: center;
      -webkit-align-items: center;
      align-items: center;
    }
  `}
`;

export const Title = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    h2 {
      font-size: 1.75rem;
      color: ${theme["gray-200"]};
    }

    div {
      width: 4rem;
      height: 0.5rem;
      border-radius: 999px;
      background-color: ${theme["pink"]};
    }
  `}
`;
