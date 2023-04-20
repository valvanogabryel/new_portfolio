import { useEffect, useState } from "react";

import Header from "./components/Header";
import NavBar from "./components/NavBar";
import Presentation from "./components/Presentation";
import Projects from "./components/Projects";
import Modal from "./components/Modal";
import { ProjectsProvider, useProjectsContext } from "./contexts/ProjectsContext";
import { IProject } from "./interfaces/IProject";

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
        <main className="container max-w-xs m-auto">
          <Presentation />
          <Projects onProjectClick={handleOpenModal} />

          <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
        </main>
      </ProjectsProvider>
    </>
  );
}

export default App;
