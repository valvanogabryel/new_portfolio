import Slider from "react-slick";
import { IProject } from "../../../interfaces/IProject";
import StyledArrowLeft from "../../StyledArrows/StyledArrowLeft";
import StyledArrowRight from "../../StyledArrows/StyledArrowRight";
import InvisibleArrows from "../../InvisibleArrows";

interface ProjectsCarouselProps {
  projects: IProject[];
  onProjectClick: (project: IProject) => void;
}

const ProjectsCarousel = ({
  projects,
  onProjectClick,
}: ProjectsCarouselProps) => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    prevArrow: <StyledArrowLeft />,
    nextArrow: <StyledArrowRight />,
    cssEase: "ease-in-out",
    autoplaySpeed: 5000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          prevArrow: <InvisibleArrows />,
          nextArrow: <InvisibleArrows />,
        },
      },
    ],
  };

  return (
    <div className="shadow-[10px_-7px_0] shadow-black lg:cursor-pointer lg:m-0">
      <Slider {...settings} className="lg:m-auto">
        {projects.map((project) => (
          <div
            key={project.id}
            className="flex flex-col justify-center items-center h-40 w-80 bg-dark_gray text-center lg:m-auto duration-300 hover:scale-105 hover:z-50 lg:h-40 2xl:h-60 group"
            onClick={() => onProjectClick(project)}
          >
            <img
              src={project.image}
              alt={`Capa do projeto ${project.name}`}
              className="object-cover min-h-full min-w-screen 2xl:grayscale duration-300 2xl:group-hover:grayscale-0"
            />
            <h3 className="absolute bg-black bg-opacity-50 top-0 w-auto py-2 px-4 rounded-br-lg text-white">
              {project.name}
            </h3>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ProjectsCarousel;
