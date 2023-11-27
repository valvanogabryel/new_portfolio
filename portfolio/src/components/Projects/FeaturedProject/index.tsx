import Atropos from 'atropos/react';
import 'atropos/atropos.css';

import AnimatedBorder from '../../AnimatedBorder';
import Button from '../../Button';

import { IProject } from '../../../interfaces/IProject';

interface FeaturedProjectProps {
  featuredProject: IProject;
  onProjectClick: (project: IProject) => void;
}

const FeaturedProject = ({
  featuredProject,
  onProjectClick,
}: FeaturedProjectProps) => {
  const settings = {
    el: 'hightlight',
    shadow: true,
    shadowScale: 0.5,
    rotateXMax: 10,
    rotateYMax: 10,
    highlight: true,
    className: 'lg:h-auto 2xl:h-[21.5rem]',
  };

  return (
    <div
      className="flex flex-col items-center overflow-hidden p-4 duration-300 shadow-md relative bg-transparent dark:bg-dark_gray w-full m-auto bg-opacity-75 scale-125 lg:scale-100 lg:w-[65%]"
      onClick={() => onProjectClick(featuredProject)}
      // !AJEITAR AQUI DEPOIS (desconhecido)
      onKeyDown={() => {}}
    >
      <AnimatedBorder />

      <Atropos {...settings}>
        <div className="h-28 group sm:h-36 md:h-44 lg:h-56 xl:h-64 2xl:h-[20.5rem]">
          <Button>
            <h2 className="absolute bg-gray-500 w-full bg-opacity-50 z-30 text-white py-2 font-bold font-secondary-simple top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] sm:py-4 md:text-xl xl:text-2xl 2xl:text-3xl">
              {featuredProject.name}
            </h2>
            <img
              src={featuredProject.image}
              alt={`Capa do projeto destaque ${featuredProject.name}`}
              className="rounded-lg object-cover shadow-2xl lg:grayscale duration-300 group-hover:grayscale-0"
            />
          </Button>
        </div>
      </Atropos>
    </div>
  );
};

export default FeaturedProject;
