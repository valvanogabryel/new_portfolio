import FeaturedProject from "./FeaturedProject";
import ProjectsCarousel from "./ProjectsCarousel";

const Projects = () => {
  return (
    <section className="text-white">
      <header>
        <h2 className="text-4xl my-10 after:h-[1px] after:w-2/4 after:bg-primary flex items-center after:ml-6 after:grow">Projetos</h2>
      </header>
      <div className='w-4/5 m-auto max-w-xs'>

        <FeaturedProject />

        <div className=''>
          <ProjectsCarousel />
        </div>
      </div>
    </section>
  );
}

export default Projects;