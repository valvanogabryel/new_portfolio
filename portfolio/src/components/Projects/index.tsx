import { Fade } from "react-awesome-reveal";
import FeaturedProject from "./FeaturedProject";
import ProjectsCarousel from "./ProjectsCarousel";

import projects from './projects.json';

const Projects = () => {
  const [featuredProject] = projects.filter(project => project.featured);
  const projectsDefault = projects.filter(project => !project.featured);

  return (
    <section className="text-white">
      <header>
        <h2 className="text-4xl mt-10 mb-4 after:h-[1px] after:w-2/4 after:bg-primary flex items-center after:ml-6 after:grow">Projetos</h2>
      </header>
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
          <FeaturedProject featuredProject={featuredProject} />
        </Fade>

        <div className=''>
          <ProjectsCarousel projects={projectsDefault} />
        </div>
      </div>
    </section>
  );
}

export default Projects;