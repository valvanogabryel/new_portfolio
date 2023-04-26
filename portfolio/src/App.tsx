import { useEffect, useState } from "react";

import Header from "./components/Header";
import NavBar from "./components/NavBar";
import Presentation from "./components/Presentation";
import Projects from "./components/Projects";
import Modal from "./components/Modal";
import { ProjectsProvider, useProjectsContext } from "./contexts/ProjectsContext";
import { IProject } from "./interfaces/IProject";
import AboutMe from "./components/AboutMe";
import Contact from "./components/Contact";
import Technologies from "./components/Technologies";
import Footer from "./components/Footer";

const App = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<IProject | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  function handleOpenModal(project: IProject) {
    setIsOpen(true);
    setSelectedProject(project);
  }

  function handleCloseModal() {
    setIsOpen(false);
    setSelectedProject(null);
  }

  return (
    <>
      <ProjectsProvider>
        <Modal
          isOpen={isOpen}
          onClose={handleCloseModal}
          project={selectedProject}
        />
        <Header />
        <NavBar />
        <main className="container max-w-xs m-auto sm:max-w-sm md:max-w-md lg:max-w-4xl xl:max-w-5xl 2xl:max-w-7xl">
          <Presentation />
          <Projects onProjectClick={handleOpenModal} />
          <Technologies />
          <AboutMe />
          <Contact />
        </main>
      </ProjectsProvider>
      <Footer />
    </>
  );
}

export default App;
