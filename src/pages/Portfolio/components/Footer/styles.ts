import styled from "styled-components";

export const FooterContainer = styled.footer`
  min-height: 10vh;
  padding: 2.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${({ theme }) => theme["gray-200"]};

  span {
    color: ${({ theme }) => theme["pink"]};
  }

  p {
    text-align: center;
  }
`;
