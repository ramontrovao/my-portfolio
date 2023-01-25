import styled, { css } from "styled-components";

export const AboutmeContainer = styled.section`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    gap: 2.5rem;
    margin-top: -3rem;
    padding: 2rem 7rem;

    img {
      width: 12.5rem;
    }

    div {
      display: flex;
      flex-direction: column;

      div {
        width: 4rem;
        height: 0.5rem;
        border-radius: 999px;
        background-color: ${theme["pink"]};
      }

      h2 {
        color: ${theme["gray-200"]};
        font-size: 1.75rem;
      }

      p {
        color: ${theme["gray-200"]};
        margin-top: 1rem;
        font-size: 1.25rem;
      }
    }

    @media (max-width: 768px) {
      padding: 2rem 1rem;
      flex-direction: column-reverse;
    }
  `}
`;