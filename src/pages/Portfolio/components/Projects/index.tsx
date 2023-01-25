import { ProjectsSection, Title } from "./styles";
import { Swiper, SwiperSlide } from "swiper/react";
import { Scrollbar } from "swiper";
import "swiper/css";
import "swiper/css/scrollbar";
import { ProjectCard } from "./components/ProjectCard";

export function Projects() {
  return (
    <ProjectsSection>
      <Title>
        <h2>Projetos</h2>
        <div></div>
      </Title>

      <Swiper
        scrollbar={{
          hide: true,
        }}
        modules={[Scrollbar]}
        slidesPerView={3}
        breakpoints={{
          0: {
            slidesPerView: 1,
            spaceBetween: 50,
          },
          // when window width is >= 480px
          768: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
        }}
        className="projects-swiper"
      >
        <SwiperSlide>
          <ProjectCard
            projectName="Coffee Delivery"
            imgSrc="./assets/coffee-delivery-preview.png"
            productURL="https://bit.ly/coffeedeliveryrocket"
            repoURL="https://github.com/ramontrovao/coffee-delivery"
            tags={["React", "Typescript", "RadixUI"]}
          />
        </SwiperSlide>

        <SwiperSlide>
          <ProjectCard
            projectName="Coffee Delivery"
            imgSrc="./assets/coffee-delivery-preview.png"
            productURL="https://bit.ly/coffeedeliveryrocket"
            repoURL="https://github.com/ramontrovao/coffee-delivery"
            tags={["React", "Typescript", "RadixUI"]}
          />
        </SwiperSlide>

        <SwiperSlide>
          <ProjectCard
            projectName="Coffee Delivery"
            imgSrc="./assets/coffee-delivery-preview.png"
            productURL="https://bit.ly/coffeedeliveryrocket"
            repoURL="https://github.com/ramontrovao/coffee-delivery"
            tags={["React", "Typescript", "RadixUI"]}
          />
        </SwiperSlide>

        <SwiperSlide>
          <ProjectCard
            projectName="Coffee Delivery"
            imgSrc="./assets/coffee-delivery-preview.png"
            productURL="https://bit.ly/coffeedeliveryrocket"
            repoURL="https://github.com/ramontrovao/coffee-delivery"
            tags={["React", "Typescript", "RadixUI"]}
          />
        </SwiperSlide>

        <SwiperSlide>
          <ProjectCard
            projectName="Coffee Delivery"
            imgSrc="./assets/coffee-delivery-preview.png"
            productURL="https://bit.ly/coffeedeliveryrocket"
            repoURL="https://github.com/ramontrovao/coffee-delivery"
            tags={["React", "Typescript", "RadixUI"]}
          />
        </SwiperSlide>

        <SwiperSlide>
          <ProjectCard
            projectName="Coffee Delivery"
            imgSrc="./assets/coffee-delivery-preview.png"
            productURL="https://bit.ly/coffeedeliveryrocket"
            repoURL="https://github.com/ramontrovao/coffee-delivery"
            tags={["React", "Typescript", "RadixUI"]}
          />
        </SwiperSlide>
      </Swiper>
    </ProjectsSection>
  );
}
