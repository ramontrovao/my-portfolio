import styled from "styled-components";
import { css } from "styled-components";

export const IntroductionSection = styled.section`
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 8rem 3rem;

  @media (max-width: 768px) {
    padding: 5rem 1rem;

    .square {
      display: none;
    }
  }
`;

export const Content = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: center;
    flex-direction: column;
    min-height: 75vh;

    span {
      color: ${theme["gray-200"]};
      font-size: 1.5rem;
    }

    .square {
      position: absolute;
      background-color: ${theme["pink"]};
      width: 1.75rem;
      height: 1.75rem;
      border-radius: 8px;
      animation: infinite squareAnimation 5s;
    }

    h1 {
      color: ${theme["gray-200"]};
      font-size: 1.5rem;
      font-weight: bold;
      font-size: 3.5rem;
      position: relative;
      z-index: 1;
    }

    p {
      color: ${theme["gray-200"]};
      font-size: 1rem;
      position: relative;
      z-index: 1;
    }

    @keyframes squareAnimation {
      0% {
        top: 325px;
        left: 425px;
        transform: rotate(360deg);
      }

      25% {
        top: 300px;
        left: 425px;
      }

      50% {
        top: 300px;
        left: 470px;
        transform: rotate(360deg);
      }

      75% {
        top: 325px;
        left: 470px;
      }

      100% {
        top: 325px;
        left: 425px;
      }
    }
  `}
`;

export const ArrowDownContainer = styled.div`
  ${({ theme }) => css`
    margin-top: -5rem;
    padding: 2rem;
    display: flex;
    justify-content: center;
    align-items: center;

    div {
      position: relative;
      display: flex;
      border-radius: 999px;
      justify-content: center;
      align-items: center;
      height: 2rem;
      width: 2rem;
      background-color: ${theme["gray-200"]};
      color: ${theme["white"]};
      animation: infinite ArrowAnimation 2s;
    }

    @keyframes ArrowAnimation {
      0% {
        top: 0rem;
      }

      10% {
        top: 0.5rem;
      }

      15% {
        top: 0rem;
      }

      20% {
        top: 0.5rem;
      }

      100% {
        top: 0;
      }
    }

    @media (max-width: 768px) {
      margin-top: -2.5rem;
    }
  `}
`;

export const SocialList = styled.div`
  ${({ theme }) => css`
    margin-top: 1rem;
    display: flex;
    gap: 0.5rem;

    div {
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 999px;
      width: 2.5rem;
      height: 2.5rem;
      background-color: ${theme["gray-200"]};
      color: ${theme["background"]};
    }
  `}
`;
