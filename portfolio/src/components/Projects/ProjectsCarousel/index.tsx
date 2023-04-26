import Slider from "react-slick";

import { IProject } from "../../../interfaces/IProject";
import Button from "../../Button";

interface ProjectsCarouselProps {
  projects: IProject[];
  onProjectClick: (project: IProject) => void;
}

const ProjectsCarousel = ({ projects, onProjectClick }: ProjectsCarouselProps) => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    cssEase: 'ease-in-out',
    pauseOnHover: true,
    autoplay: true,
    autoplaySpeed: 5000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
        }
      }
    ],
  }

  return (
    <div
      className="hover:shadow-2xl shadow-[10px_-7px_0] shadow-black lg:cursor-pointer lg:w-[150%] lg:-ml-32"
    >

      <Slider
        {...settings}
        className="lg:m-auto"
      >
        {
          projects.map(project => (
            <div
              key={project.id}
              className='flex flex-col justify-center items-center h-40 w-80 bg-dark_gray text-center lg:m-auto'
              onClick={() => onProjectClick(project)}
            >
              <img src={project.image} alt="" className="object-cover min-h-full min-w-screen" />
              <h3 className="absolute  bg-black bg-opacity-50 top-0 w-auto py-2 px-4 rounded-br-lg text-white">
                {project.name}
              </h3>
            </div>
          ))
        }
      </Slider>
    </div>
  );
}

export default ProjectsCarousel;