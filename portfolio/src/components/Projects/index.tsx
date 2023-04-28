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
    <section className="text-white" id="projects">

      <SectionHeader title="Projetos" />

      <div className='w-4/5 m-auto sm:w-5/6'>

        <div>
          <Fade
            cascade
            duration={100}
            className="text-center -mt-10 mb-10 text-light_gray m-auto md:text-lg xl:text-xl 2xl:text-2xl"
            delay={300}
          >
            em destaque:
          </Fade>

          <Fade
            direction="up"
            triggerOnce
            delay={1e2}
          >
            <FeaturedProject
              featuredProject={featuredProject}
              onProjectClick={onProjectClick}
            />
          </Fade>
        </div>


        <div>
          <Fade
            cascade
            duration={100}
            delay={600}
            className="text-center mt-20 mb-10 text-light_gray mx-auto md:text-lg 2xl:text-2xl"
          >
            todos os projetos:
          </Fade>

          <Fade
            direction="up"
            triggerOnce
            delay={1e3}
          >
            <div className='-my-4'>
              <ProjectsCarousel
                projects={projectsDefault}
                onProjectClick={onProjectClick}
              />
            </div>
          </Fade>
        </div>
      </div>
    </section>
  );
}

export default Projects;