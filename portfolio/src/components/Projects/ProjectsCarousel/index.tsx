import Slider from "react-slick";

import CaroulselArrow from "./CarouselArrow";

import { IProject } from "../../../interfaces/IProject";

interface ProjectsCarouselProps {
  projects: IProject[];
  onProjectClick: (project: IProject) => void;
}

const ProjectsCarousel = ({ projects, onProjectClick }: ProjectsCarouselProps) => {
  const settings = {
    infinite: true,
    centerMode: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: 'ease-in-out',
    pauseOnHover: true,
    rtl: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          centerMode: false,
        }
      }
    ],
    prevArrow: <CaroulselArrow />,
    nextArrow: <CaroulselArrow />,
    className: ''
  }

  return (
    <div
      className="hover:shadow-2xl lg:cursor-pointer"
      style={{
        boxShadow: '10px -7px 0 black'
      }}
    >
      <Slider {...settings}
      >
        {
          projects.map(project => (
            <div
              key={project.id}
              className='flex flex-col justify-center items-center h-40 w-80 bg-dark_gray text-center'
              onClick={() => onProjectClick(project)}
            >
              <img src={project.image} alt="" className="object-cover min-h-full" />
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