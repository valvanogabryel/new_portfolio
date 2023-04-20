import { useState } from 'react';

import Atropos from 'atropos/react';
import 'atropos/atropos.css';

import { IProject } from '../../../interfaces/IProject';
import AnimatedBorder from '../../AnimatedBorder';
import Button from '../../Button';
import Modal from '../../Modal';

interface featuredProjectProps {
  featuredProject: IProject;
}

// import imagem from '../assets/cover/featuredProject.png';

const FeaturedProject = ({ featuredProject }: featuredProjectProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const settings = {
    el: 'hightlight',
    shadow: false,
    rotateXMax: 10,
    rotateYMax: 10
  };

  function handleOpenModal() {
    setIsOpen(true);
  }

  function handleCloseModal() {
    setIsOpen(false);
  }

  return (
    <>
      <div className='flex flex-col items-center p-4 overflow-hidden shadow-2xl relative bg-dark_gray w-full m-auto bg-opacity-75 scale-125'>

        <AnimatedBorder />

        <Atropos {...settings}>
          <div className='h-28 group'>
            <Button onClick={handleOpenModal}>
              <h2 className='absolute bg-slate-500 w-full bg-opacity-50 z-30 text-white py-2 font-bold font-secondary-simple top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>{featuredProject.name}</h2>
              <img src={featuredProject.image} alt="" className='rounded-lg object-cover shadow-2xl lg:grayscale duration-300 group-hover:grayscale-0' />
            </Button>
          </div>
        </Atropos>
      </div>
      <Modal
        isOpen={isOpen}
        onClose={handleCloseModal}
        project={featuredProject}
      />
    </>
  );
}

export default FeaturedProject;