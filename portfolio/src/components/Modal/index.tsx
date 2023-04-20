import { IProject } from "../../interfaces/IProject";

import { AiOutlineClose } from 'react-icons/ai';
import AnimatedBorder from "../AnimatedBorder";
import Tag from "../Tag";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  project: IProject;
}

const Modal = ({ isOpen, onClose, project }: ModalProps) => (
  <>
    {isOpen && (
      <div
        className="fixed bg-black bg-opacity-50 z-[1000] top-0 left-0 right-0 bottom-0"
      >
        <div className="z-50 bg-dark_gray flex flex-col">
          <div className="p-4 relative overflow-hidden bg-black bg-opacity-20 max-w-[18rem]">
            <AnimatedBorder />
            <img
              className=""
              src={project.image}
              alt=''
              aria-hidden="true"
            />
          </div>
          <div className="p-4 border-b-[1px] border-light_gray">
            <h2>{project.name}</h2>
          </div>
          <div className="p-4 text-gray-300 text-xs font-thin font-secondary-simple">{project.description}</div>
          <div>
            <ul className="flex gap-4 overflow-x-scroll">
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
        </div>
      </div>
    )}
  </>
);

export default Modal;