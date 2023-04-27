import Atropos from 'atropos/react';
import 'atropos/atropos.css';

import AnimatedBorder from '../../AnimatedBorder';
import Button from '../../Button';

import { IProject } from '../../../interfaces/IProject';

interface featuredProjectProps {
  featuredProject: IProject;
  onProjectClick: (project: IProject) => void;
}

const FeaturedProject = ({ featuredProject, onProjectClick }: featuredProjectProps) => {
  const settings = {
    el: 'hightlight',
    shadow: false,
    rotateXMax: 10,
    rotateYMax: 10
  };

  return (
    <>
      <div
        className='flex flex-col items-center p-4 overflow-hidden shadow-2xl relative bg-dark_gray w-full m-auto bg-opacity-75 scale-125 lg:scale-100 lg:w-[65%]'
        onClick={() => onProjectClick(featuredProject)}
      >

        <AnimatedBorder />

        <Atropos
          {...settings}
        >
          <div className='h-28 group sm:h-36 md:h-44 lg:h-56 xl:h-64 2xl:h-[16.5rem]'>
            <Button onClick={() => { }}>
              <h2 className='absolute bg-slate-500 w-full bg-opacity-50 z-30 text-white py-2 font-bold font-secondary-simple top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] sm:py-4 md:text-xl'>{featuredProject.name}</h2>
              <img
                src={featuredProject.image}
                alt="" className='rounded-lg object-cover shadow-2xl lg:grayscale duration-300 group-hover:grayscale-0'
              />
            </Button>
          </div>
        </Atropos>
      </div>
    </>
  );
}

export default FeaturedProject;