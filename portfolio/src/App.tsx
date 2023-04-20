import { useEffect, useState } from "react";

import Header from "./components/Header";
import NavBar from "./components/NavBar";
import Presentation from "./components/Presentation";
import Projects from "./components/Projects";
import Modal from "./components/Modal";
import { ProjectsProvider } from "./contexts/ProjectsContext";

const App = () => {
  const [isOpen, setIsOpen] = useState(true);

  useEffect(() => {


    window.scrollTo(0, 0);
  }, []);

  function handleOpenModal() {
    setIsOpen(true);
  }

  function handleCloseModal() {
    setIsOpen(false);
  }

  return (
    <>
      <ProjectsProvider>
        <Modal
          isOpen={isOpen}
          onClose={handleCloseModal}
        />
        <Header />
        <NavBar />
        <main className="container max-w-xs m-auto">
          <Presentation />
          <Projects />

          <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
        </main>
      </ProjectsProvider>
    </>
  );
}

export default App;
