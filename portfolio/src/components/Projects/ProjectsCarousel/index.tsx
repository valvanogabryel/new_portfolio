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
    autoplaySpeed: 4000,
    cssEase: 'linear',
    pauseOnHover: true
  }

  return (
    <Slider {...settings}>
      {
        projects.map(project => (
          <div className='flex flex-col justify-center items-center h-40 w-80 bg-dark_gray text-center' key={project.id}>
            <img src={project.image} alt="" />
            <h3>{project.name}</h3>
          </div>
        ))
      }

    </Slider>
  );
}

export default ProjectsCarousel;