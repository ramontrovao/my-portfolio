import { ProjectsSection, Title } from "./styles";
import { Swiper, SwiperSlide } from "swiper/react";
import { Scrollbar } from "swiper";
import "swiper/css";
import "swiper/css/scrollbar";
import { ProjectCard } from "./components/ProjectCard";

export function Projects() {
  return (
    <ProjectsSection id="projects">
      <Title>
        <h2>Projetos</h2>
        <div></div>
      </Title>

      <Swiper
        scrollbar={{
          hide: false,
          draggable: true,
        }}
        modules={[Scrollbar]}
        slidesPerView={3}
        breakpoints={{
          0: {
            slidesPerView: 1,
            spaceBetween: 80,
          },
          1024: {
            slidesPerView: 2,
            spaceBetween: 80,
          },
          1250: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
        }}
        className="projects-swiper"
      >
        <SwiperSlide>
          <ProjectCard
            projectName="Thunder Shop"
            imgSrc="./assets/thunder-shop-preview.png"
            productURL="https://thunder-shop.vercel.app/"
            repoURL="https://github.com/ramontrovao/thunder-shop"
            tags={["NextJS", "Typescript"]}
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
            projectName="Github Blog"
            imgSrc="./assets/github-blog-preview.png"
            productURL="https://github-blog-vert.vercel.app/"
            repoURL="https://github.com/ramontrovao/github-blog"
            tags={["React", "Typescript", "Axios"]}
          />
        </SwiperSlide>

        <SwiperSlide>
          <ProjectCard
            projectName="Meu portfólio"
            imgSrc="./assets/portfolio-preview.png"
            productURL="https://www.ramontrovao.tech"
            repoURL="https://github.com/ramontrovao/my-portfolio"
            tags={["React", "Typescript"]}
          />
        </SwiperSlide>

        <SwiperSlide>
          <ProjectCard
            projectName="Todo List"
            imgSrc="./assets/todolist-preview.png"
            productURL="https://todo-list-ramontrovao.vercel.app/"
            repoURL="https://github.com/ramontrovao/todo-list"
            tags={["React", "Typescript", "Sass"]}
          />
        </SwiperSlide>

        <SwiperSlide>
          <ProjectCard
            projectName="Pomodoro App"
            imgSrc="./assets/pomodoro-preview.png"
            productURL="https://pomodoro-smoky-five.vercel.app/"
            repoURL="https://github.com/ramontrovao/pomodoro"
            tags={["React", "Typescript"]}
          />
        </SwiperSlide>
      </Swiper>
    </ProjectsSection>
  );
}
