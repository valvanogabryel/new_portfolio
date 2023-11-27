import { AiFillGithub, AiOutlineRocket } from 'react-icons/ai';

import AnimatedBorder from '../AnimatedBorder';
import Tag from '../Tag';

import { IProject } from '../../interfaces/IProject';

import { motion } from 'framer-motion';
import ProjectGif from './ProjectGif';

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
        <div
          className="flex justify-center items-center backdrop-blur-[3px] fixed bg-black bg-opacity-75 h-screen w-screen z-[1000] top-0 left-0 right-0 bottom-0"
          onClick={onClose}
        >
          <motion.div
            className="flex flex-col overflow-hidden bg-gray-800 fixed select-none w-80 max-w-xs lg:w-3/4 lg:grid lg:grid-cols-2 lg:h-48rem lg:max-w-none xl:h-56rem"
            initial={{ opacity: 0, scale: 1.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: 'spring',
              stiffness: 500,
              damping: 30,
            }}
          >
            <AnimatedBorder />

            <header>
              <div className="p-4 mt-4 relative overflow-hidden m-auto bg-gray-900 bg-opacity-50 rounded-lg max-w-[18rem] lg:max-w-[40rem]">
                {!project?.gif ? (
                  <img
                    src={project?.image}
                    alt={`Capa do projeto ${project?.name}`}
                    aria-hidden="true"
                  />
                ) : (
                  <ProjectGif
                    gif={project.gif}
                    alt={`Gif do projeto ${project.name}`}
                  />
                )}
              </div>

              <div>
                <header className="p-4 border-b-[1px] border-light_gray lg:text-center lg:py-4 lg:border-none lg:mt-0">
                  <h2 className="lg:text-2xl text-gray-50">{project?.name}</h2>
                  {project?.inDevelopment && (
                    <span className="text-sm font-light text-gray-500">
                      Projeto em desenvolvimento
                    </span>
                  )}
                </header>
              </div>
            </header>

            <div className="p-4 lg:w-11/12 shadow-inner lg:shadow-none lg:m-auto lg:my-4 overflow-y-auto max-h-40 lg:max-h-64 xl:max-h-96">
              <p className="text-gray-300 text-xs font-thin font-secondary-simple lg:text-base xl:leading-relaxed 2xl:text-xl">
                {project?.description}
              </p>
            </div>

            <div>
              <motion.ul
                className="flex cursor-grab active:cursor-grabbing gap-2 pb-4 lg:gap-4 lg:px-8 lg:flex-wrap lg:justify-center lg:w-full lg:touch-pan-y"
                drag="x"
                dragConstraints={{ left: -150, right: 0 }}
              >
                {project?.technologies.map((tech) => (
                  <Tag key={tech} technology={tech} />
                ))}
              </motion.ul>
            </div>

            <div>
              <ul className="flex gap-2 lg:gap-4 text-3xl py-4 pl-2 lg:pb-8 lg:pt-16 lg:justify-end lg:pl-0 lg:pr-4 xl:pr-8">
                {project?.inDevelopment ? (
                  <div className="text-light_gray duration-300 transition-all border-[1px] rounded-full px-4 border-gray-400 lg:rounded-lg lg:px-2 lg:py-2 opacity-30 cursor-not-allowed">
                    <li className="flex items-center lg:mr-4 gap-px">
                      <AiOutlineRocket />
                      <span className="text-xs lg:text-sm lg:pt-1">Deploy</span>
                    </li>
                  </div>
                ) : (
                  <a
                    href={project?.deploy}
                    target="_blank"
                    className="text-gray-600 duration-300 transition-all hover:scale-110 outline outline-1 rounded-2xl px-4 border-gray-400 hover:bg-gray-400 hover:text-dark_gray lg:rounded-lg lg:py-2 lg:px-2"
                  >
                    <li className="flex items-center lg:mr-4 gap-px">
                      <AiOutlineRocket />
                      <span className="text-xs lg:text-sm lg:pt-1 2xl:text-base">
                        Deploy
                      </span>
                    </li>
                  </a>
                )}
                <a
                  href={project?.repository}
                  target="_blank"
                  className=" text-gray-600 duration-300 transition-all hover:scale-110 outline outline-1 rounded-2xl px-4 border-gray-400 hover:bg-gray-400 hover:text-dark_gray lg:rounded-lg lg:py-2 lg:px-2"
                >
                  <li className="flex items-center lg:mr-4 gap-px">
                    <AiFillGithub className="" />
                    <span className="text-xs lg:text-sm lg:pt-1 2xl:text-base">
                      Repositório
                    </span>
                  </li>
                </a>
              </ul>
            </div>
          </motion.div>
        </div>
      )}
    </>
  );
};

export default Modal;
