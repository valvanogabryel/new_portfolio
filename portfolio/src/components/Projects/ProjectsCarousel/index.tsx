import Slider from "react-slick";
import { IProject } from "../../../interfaces/IProject";

interface ProjectsCarouselProps {
  projects: IProject[];
}

const ProjectsCarousel = ({ projects }: ProjectsCarouselProps) => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: 'ease-in-out',
    pauseOnHover: true
  }

  return (
    <Slider {...settings} className="-z-50">
      {
        projects.map(project => (
          <div
            key={project.id}
            className='flex flex-col justify-center items-center h-40 w-80 bg-dark_gray text-center'
          >
            <img src={project.image} alt="" />
            <h3>{project.name}</h3>
          </div>
        ))
      }

    </Slider>
  );
}

export default ProjectsCarousel;