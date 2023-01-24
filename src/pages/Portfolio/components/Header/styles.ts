import styled, { css } from "styled-components";
import { DefaultTheme } from "../../../../styles/themes/DefaultTheme";

interface HeaderContainerProps {
  theme: typeof DefaultTheme;
  menuState: boolean;
}

export const HeaderContainer = styled.header`
  ${({ theme, menuState }: HeaderContainerProps) => css`
    position: fixed;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1.5rem 5rem;
    background-color: ${theme["background"]};

    .menu {
      display: none;

      svg {
        color: ${theme["pink"]};
      }
    }

    span {
      font-size: 1.5rem;
      color: ${theme["pink"]};

      strong {
        color: ${theme["gray-200"]};
      }
    }

    nav {
      display: flex;
      align-items: center;
      gap: 1rem;
      cursor: pointer;

      a {
        text-decoration: none;
        color: ${theme["gray-200"]};

        &:hover {
          color: ${theme["pink"]};
        }

        &::selection {
          background-color: transparent;
        }
      }
    }

    @media (max-width: 768px) {
      flex-direction: column;
      padding: 1.5rem 1rem;

      ${menuState
        ? css`
            nav {
              padding: 0;
              display: flex;
              justify-content: center;
              align-items: center;
              flex-direction: column;
              height: 50vh;
              font-size: 1.5rem;
              animation: ease-in openMenu 0.3s;
            }

            .menu {
            }
          `
        : css`
            nav {
              display: none;
            }
          `}

      div:first-child {
        width: 100%;
        display: flex;
        justify-content: space-between;
      }

      .menu {
        display: flex;
        flex-direction: column;
        gap: 0.25rem;

        div {
          width: 2rem;
          height: 0.25rem;
          border-radius: 999px;
          background-color: ${theme["pink"]};
        }
      }

      @keyframes openMenu {
        0% {
          height: 30vh;
        }

        100% {
          height: 50vh;
        }
      }
    }
  `}
`;
