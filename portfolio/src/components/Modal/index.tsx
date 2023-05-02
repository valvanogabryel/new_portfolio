
import {
  AiFillGithub,
  AiOutlineRocket
} from 'react-icons/ai';

import AnimatedBorder from "../AnimatedBorder";
import Tag from "../Tag";

import { IProject } from "../../interfaces/IProject";


import cn from 'classnames';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  project: IProject | null;
}

const Modal = (
  {
    isOpen,
    onClose,
    project
  }: ModalProps) => {
  if (isOpen) {
    document.body.style.overflowY = 'hidden';
  } else {
    document.body.style.overflowY = 'scroll';
  }

  return (
    <>
      {isOpen && (
        <div className="flex justify-center items-center backdrop-blur-[3px] fixed bg-black bg-opacity-75 h-screen w-screen z-[1000] top-0 left-0 right-0 bottom-0"
          onClick={onClose}
        >
          <div className={cn("flex flex-col overflow-hidden bg-dark_gray fixed select-none w-80 max-w-xs lg:max-w-2xl lg:w-3/4", {
            'animate-fade_up': isOpen
          })}>
            <AnimatedBorder />

            <div className="p-4 mt-4 relative overflow-hidden m-auto bg-black bg-opacity-20 max-w-[18rem] lg:max-w-[40rem]">

              <img
                src={project?.image}
                alt={`Capa do projeto ${project?.name}`}
                aria-hidden="true"
              />
            </div>

            <div>
              <header className="p-4 border-b-[1px] border-light_gray lg:mt-4 lg:text-center">
                <h2 className='lg:text-2xl text-gray-200'>{project?.name}</h2>
              </header>
            </div>

            <div className="p-4 lg:w-11/12 lg:m-auto lg:my-4 overflow-y-auto max-h-40 lg:max-h-32">
              <p className="text-gray-300 text-xs font-thin font-secondary-simple lg:text-base">{project?.description}</p>
            </div>

            <div>
              <ul className="flex overflow-x-auto snap-x snap-mandatory scroll-smooth gap-2 pb-4 lg:gap-4 lg:w-11/12 lg:px-8" dir='ltr'>
                {
                  project?.technologies.map((tech, i) => (
                    <Tag
                      key={i}
                      technology={tech}
                    />
                  ))
                }
              </ul>
            </div>

            <div>
              <ul className='flex gap-2 text-3xl py-4 pl-1 lg:pl-10 lg:pb-8'>
                <a
                  href={project?.deploy}
                  target='_blank'
                  className='text-light_gray duration-300 transition-all hover:scale-110 border-[1px] rounded-full px-4 border-gray-400 hover:bg-gray-400 hover:text-dark_gray'
                >
                  <li className='flex items-center lg:mr-4 gap-px'>
                    <AiOutlineRocket />
                    <span className='text-xs lg:text-sm lg:pt-1'>Deploy</span>
                  </li>
                </a>
                <a
                  href={project?.repository}
                  target='_blank'
                  className=' text-light_gray duration-300 transition-all hover:scale-110 border-[1px] rounded-full px-4 border-gray-400 hover:bg-gray-400 hover:text-dark_gray'
                >
                  <li className='flex items-center lg:mr-4 gap-px'>
                    <AiFillGithub />
                    <span className='text-xs lg:text-sm lg:pt-1'>Repositório</span>
                  </li>
                </a>
              </ul>
            </div>
          </div>
        </div>
      )}
    </>
  )
};

export default Modal;