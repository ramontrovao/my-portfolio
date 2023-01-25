import { Browsers, GithubLogo } from "phosphor-react";
import {
  InfoWrapper,
  ProjectCardContainer,
  TechsList,
  WebsiteInfos,
} from "./styles";

interface ProjectCardProps {
  projectName: string;
  imgSrc: string;
  repoURL: string;
  productURL: string;
  tags: string[];
}

export function ProjectCard({
  projectName,
  imgSrc,
  repoURL,
  productURL,
  tags,
}: ProjectCardProps) {
  return (
    <ProjectCardContainer id="projects">
      <img src={imgSrc} />

      <InfoWrapper>
        <TechsList>
          {tags.map((tag) => (
            <div key={tag}>
              <p>{tag}</p>
            </div>
          ))}
        </TechsList>

        <WebsiteInfos>
          <p>{projectName}</p>

          <div>
            <a href={repoURL} target="_blank">
              <GithubLogo size={25} />
            </a>
            <a href={productURL} target="_blank">
              <Browsers size={25} />
            </a>
          </div>
        </WebsiteInfos>
      </InfoWrapper>
    </ProjectCardContainer>
  );
}
