
import {
  AiOutlineClose,
  AiFillGithub,
  AiOutlineRocket
} from 'react-icons/ai';

import AnimatedBorder from "../AnimatedBorder";
import { IProject } from "../../interfaces/IProject";
import Tag from "../Tag";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  project: IProject;
}

const Modal = ({ isOpen, onClose, project }: ModalProps) => (
  <>
    {isOpen && (
      <div className="fixed bg-black bg-opacity-50 z-[1000] top-0 left-0 right-0 bottom-0">

        <div className="flex flex-col bg-dark_gray relative select-none">
          <div
            className="absolute -right-2 -top-4 bg-slate-400 rounded-full p-3 z-50 cursor-pointer text-2xl duration-300 group"
            onClick={onClose}
          >
            <span className="bg-slate-500 fixed -right-2 -top-4 -z-50 rounded-full p-6 cursor-pointer group-hover:animate-ping"></span>
            <AiOutlineClose className="z-50" />
          </div>

          <div className="p-4 relative overflow-hidden bg-black bg-opacity-20 max-w-[18rem]">
            <AnimatedBorder />
            <img
              className=""
              src={project.image}
              alt=''
              aria-hidden="true"
            />
          </div>

          <div>
            <header className="p-4 border-b-[1px] border-light_gray">
              <h2>{project.name}</h2>
            </header>
          </div>

          <div className="p-4">
            <p className="text-gray-300 text-xs font-thin font-secondary-simple">{project.description}</p>
          </div>

          <div>
            <ul className="flex">
              {
                project.technologies.map((tech, i) => (
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
                  href={project.deploy}
                  target='_blank'
                >
                  <AiOutlineRocket />
                </a>
              </li>
              <li className='text-light_gray duration-300 transition-all hover:scale-110 hover:text-gray-400'>
                <a
                  href={project.repository}
                  target='_blank'
                >
                  <AiFillGithub />
                </a>
              </li>
            </ul>
          </div>
        </div>

      </div >




      // <div
      //   className="fixed bg-black bg-opacity-50 z-[1000] top-0 left-0 right-0 bottom-0"
      // >
      //   <div className="z-50 bg-dark_gray flex flex-col">
      //     <div className="p-4 relative overflow-hidden bg-black bg-opacity-20 max-w-[18rem]">
      //       <AnimatedBorder />
      //       <img
      //         className=""
      //         src={project.image}
      //         alt=''
      //         aria-hidden="true"
      //       />
      //     </div>
      //     <div className="p-4 border-b-[1px] border-light_gray">
      //       <h2>{project.name}</h2>
      //     </div>
      //     <div className="p-4 text-gray-300 text-xs font-thin font-secondary-simple">{project.description}</div>
      //     <div>
      //       <ul className="flex gap-4 overflow-x-scroll">
      //         {
      //           project.technologies.map((tech, i) => (
      //             <Tag
      //               key={i}
      //               technology={tech}
      //             />
      //           ))
      //         }
      //       </ul>
      //     </div>
      //   </div>
      // </div>
    )}
  </>
);

export default Modal;