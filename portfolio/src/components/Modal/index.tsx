
import {
  AiFillGithub,
  AiOutlineRocket
} from 'react-icons/ai';

import AnimatedBorder from "../AnimatedBorder";
import { IProject } from "../../interfaces/IProject";
import Tag from "../Tag";

import cn from 'classnames';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  project: IProject | null;
}

const Modal = ({ isOpen, onClose, project }: ModalProps) => {
  if (isOpen) {
    document.body.style.overflowY = 'hidden';
  } else {
    document.body.style.overflowY = 'scroll';
  }

  return (
    <>
      {isOpen && (
        <div className="flex justify-center items-center backdrop-blur-[3px] fixed bg-black bg-opacity-75 h-screen w-screen z-[1000] top-0 left-0 right-0 bottom-0 "
          onClick={onClose}
        >

          <div className={cn("flex flex-col overflow-hidden bg-dark_gray fixed select-none w-80 max-w-xs", {
            'animate-fade_up': isOpen,
            'animate-fade_down': !isOpen,
          })}>
            <AnimatedBorder />

            <div className="p-4 mt-4 relative overflow-hidden m-auto bg-black bg-opacity-20 max-w-[18rem]">

              <img
                className=""
                src={project?.image}
                alt=''
                aria-hidden="true"
              />
            </div>

            <div>
              <header className="p-4 border-b-[1px] border-light_gray text-gray-200">
                <h2>{project?.name}</h2>
              </header>
            </div>

            <div className="p-4">
              <p className="text-gray-300 text-xs font-thin font-secondary-simple">{project?.description}</p>
            </div>

            <div>
              <ul className="flex overflow-x-auto snap-x snap-mandatory scroll-smooth gap-2 pb-4" dir='ltr'>
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
              <ul className='flex gap-2 text-3xl py-4 pl-4'>
                <li className='text-light_gray duration-300 transition-all hover:scale-110  hover:text-gray-400'>
                  <a
                    href={project?.deploy}
                    target='_blank'
                  >
                    <AiOutlineRocket />
                  </a>
                </li>
                <li className='text-light_gray duration-300 transition-all hover:scale-110 hover:text-gray-400'>
                  <a
                    href={project?.repository}
                    target='_blank'
                  >
                    <AiFillGithub />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </>
  )
};

export default Modal;