import styled from "styled-components";

export const ProjectCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme["background"]};
  min-width: 20rem;
  min-height: 20rem;
  border: 2px solid ${({ theme }) => theme["pink"]};
  border-radius: 8px;

  p,
  a {
    font-weight: bold;
    color: ${({ theme }) => theme["black"]};
  }

  img {
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
    width: 100%;
    height: 13rem;
    object-fit: cover;
  }

  @media (max-width: 768px) {
    min-width: 15rem;
    min-height: 15rem;
  }
`;

export const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding: 1.5rem 1rem;
`;

export const TechsList = styled.div`
  display: flex;
  gap: 0.5rem;

  div {
    background-color: ${({ theme }) => theme["pink"]};
    padding: 0.375rem;
    font-size: 0.9rem;
    border-radius: 8px;
  }
`;

export const WebsiteInfos = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  justify-content: space-between;
  background-color: ${({ theme }) => theme["pink"]};
  padding: 0.5rem;
  border-radius: 8px;

  p {
    font-size: 1.25rem;
  }

  div {
    line-height: 0;

    a {
      transition: 0.3s;

      &:hover {
        color: ${({ theme }) => theme["white"]};
      }
    }
  }
`;
