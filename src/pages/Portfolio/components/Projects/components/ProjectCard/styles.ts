import styled from "styled-components";

export const ProjectCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme["white"]};
  min-height: 20rem;
  border: 1px solid ${({ theme }) => theme["pink"]};
  border-radius: 8px;

  p,
  a {
    color: ${({ theme }) => theme["gray-200"]};
  }

  img {
    width: 100%;
    height: 13rem;
    object-fit: cover;
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

  div {
    a {
      color: ${({ theme }) => theme["gray-200"]};

      &:hover {
        color: ${({ theme }) => theme["background"]};
      }
    }
  }
`;
