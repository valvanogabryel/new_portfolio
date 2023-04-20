import Atropos from 'atropos/react';
import 'atropos/atropos.css';

import { IProject } from '../../../interfaces/IProject';

interface featuredProjectProps {
  featuredProject: IProject
}

const FeaturedProject = ({ featuredProject }: featuredProjectProps) => {
  const settings = {
    el: 'hightlight',
    shadow: false,
    rotateXMax: 10,
    rotateYMax: 10
  };

  return (
    <div className='flex flex-col items-center p-4 overflow-hidden shadow-2xl relative bg-dark_gray w-full m-auto bg-opacity-75 scale-125'>

      <span className='absolute top-0 left-0 bg-gradient-to-r from-transparent to-primary w-full h-[1px] animate-border_top_spin'>
      </span>

      <span className='absolute top-0 right-0 bg-gradient-to-b from-transparent to-primary w-[1px] h-full animate-border_left_spin'>
      </span>

      <span className='absolute bottom-0 left-0 bg-gradient-to-l from-transparent to-primary w-full h-[1px] animate-border_bottom_spin'>
      </span>

      <span className='absolute top-0 left-0 bg-gradient-to-t from-transparent to-primary w-[1px] h-full animate-border_right_spin'>
      </span>

      <Atropos {...settings}>
        <div className='h-28 group'>
          <button className='hover:outline-none'>
            <h2 className='absolute bg-slate-500 w-full bg-opacity-50 z-30 text-white py-2 font-bold font-secondary-simple top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>{featuredProject.name}</h2>
            <img src={featuredProject.image} alt="" className='rounded-lg object-cover shadow-2xl lg:grayscale duration-300 group-hover:grayscale-0' />
          </button>
        </div>
      </Atropos>

    </div>
  );
}

export default FeaturedProject;