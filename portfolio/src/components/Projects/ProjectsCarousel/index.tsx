import Slider from "react-slick";
import { IProject } from "../../../interfaces/IProject";
import { useEffect, useState } from "react";
import useMediaMatch from "../../../hooks/useMediaMatch";

const CaroulselArrow = () => {
  return (
    <span aria-hidden='true' className="hidden"></span>
  );
}

interface ProjectsCarouselProps {
  projects: IProject[];
  onProjectClick: (project: IProject) => void;
}

const ProjectsCarousel = ({ projects, onProjectClick }: ProjectsCarouselProps) => {
  const [isRolling, setIsRolling] = useState(false);

  const settings = {
    infinite: true,
    centerMode: true,
    speed: 500,
    swipeToSlide: true,
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
    nextArrow: <CaroulselArrow />
    // className: isRolling ? 'opacity-50' : 'opacity-100'
  }

  return (
    <Slider
      {...settings}
    >
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