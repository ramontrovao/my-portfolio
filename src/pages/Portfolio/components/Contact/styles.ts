import styled from "styled-components";

export const ContactSection = styled.section`
  display: flex;
  flex-direction: column;
`;

export const ContactContainer = styled.div`
  margin-top: 2rem;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  p {
    font-size: 1.5rem;
    line-height: 1.2;
    color: ${({ theme }) => theme["gray-200"]};
    text-align: center;
  }

  a {
    text-decoration: none;
  }

  div {
    margin-top: 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.25rem;
    background-color: ${({ theme }) => theme["pink"]};
    padding: 1rem;
    color: ${({ theme }) => theme["gray-200"]};
    font-weight: 600;
    text-decoration: none;
    border-radius: 8px;
    transition: color 0.4s;

    &:hover {
      color: ${({ theme }) => theme["background"]};
    }
  }
`;
