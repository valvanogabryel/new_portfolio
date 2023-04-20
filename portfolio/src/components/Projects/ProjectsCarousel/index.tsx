import Slider from "react-slick";
import { IProject } from "../../../interfaces/IProject";

interface ProjectsCarouselProps {
  projects: IProject[];
  onProjectClick: (project: IProject) => void;
}

const ProjectsCarousel = ({ projects, onProjectClick }: ProjectsCarouselProps) => {
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
    <Slider {...settings} className="">
      {
        projects.map(project => (
          <div
            key={project.id}
            className='flex flex-col justify-center items-center h-40 w-80 bg-dark_gray text-center'
            onClick={() => onProjectClick(project)}
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