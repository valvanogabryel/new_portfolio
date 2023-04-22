import { Fade } from "react-awesome-reveal";
import FeaturedProject from "./FeaturedProject";
import ProjectsCarousel from "./ProjectsCarousel";
import { useProjectsContext } from "../../contexts/ProjectsContext";
import { IProject } from "../../interfaces/IProject";
import SectionHeader from "../SectionHeader";

interface ProjectsProps {
  onProjectClick: (project: IProject) => void;
}

const Projects = ({ onProjectClick }: ProjectsProps) => {
  const projects = useProjectsContext();

  const [featuredProject] = projects.filter(project => project.featured);
  const projectsDefault = projects.filter(project => !project.featured);

  return (
    <section className="text-white">

      <SectionHeader title="Projetos" />

      <div className='w-4/5 m-auto max-w-xs'>

        <Fade
          cascade
          duration={100}
          className="text-center -mt-10 mb-10 text-light_gray m-auto"
        >
          em destaque:
        </Fade>

        <Fade
          direction="up"
          triggerOnce
        >
          <FeaturedProject
            featuredProject={featuredProject}
            onProjectClick={onProjectClick}

          />
        </Fade>

        <Fade
          cascade
          duration={100}
          className="text-center mt-20 mb-10 text-light_gray mx-auto"
        >
          todos os projetos:
        </Fade>

        <Fade
          direction="up"
          triggerOnce
        >
          <div className='-my-4'>
            <ProjectsCarousel
              projects={projectsDefault}
              onProjectClick={onProjectClick}
            />
          </div>
        </Fade>
      </div>
    </section>
  );
}

export default Projects;