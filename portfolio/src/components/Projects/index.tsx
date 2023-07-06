import { Fade } from "react-awesome-reveal";
import FeaturedProject from "./FeaturedProject";
import ProjectsCarousel from "./ProjectsCarousel";
import { useProjectsContext } from "../../contexts/ProjectsContext";
import { IProject } from "../../interfaces/IProject";
import SectionHeader from "../SectionHeader";
import { motion } from "framer-motion";

interface ProjectsProps {
  onProjectClick: (project: IProject) => void;
}

const Projects = ({ onProjectClick }: ProjectsProps) => {
  const projects = useProjectsContext();

  const [featuredProject] = projects.filter((project) => project.featured);
  const projectsDefault = projects.filter((project) => !project.featured);

  return (
    <section className="text-white" id="projects">
      <SectionHeader title="Projetos" />

      <div className="w-4/5 m-auto sm:w-5/6">
        <div>
          <Fade
            cascade
            duration={100}
            className="text-center -mt-10 mb-10 text-light_gray m-auto md:text-lg xl:text-xl 2xl:text-2xl"
            delay={300}
          >
            em destaque:
          </Fade>

          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 1 }}
            viewport={{ once: true }}
          >
            <FeaturedProject
              featuredProject={featuredProject}
              onProjectClick={onProjectClick}
            />
          </motion.div>
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

          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
            viewport={{ once: true }}
          >
            <div className="-my-4">
              <ProjectsCarousel
                projects={projectsDefault}
                onProjectClick={onProjectClick}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
