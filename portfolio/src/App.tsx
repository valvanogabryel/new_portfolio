import { useEffect, useState } from 'react';

import LoadingScreen from './components/LoadingScreen';
import Header from './components/Header';
import NavBar from './components/NavBar';
import Presentation from './components/Presentation';
import Projects from './components/Projects';
import Modal from './components/Modal';
import AboutMe from './components/AboutMe';
import Technologies from './components/Technologies';
import Contact from './components/Contact';
import Footer from './components/Footer';
import PhoneSide from './components/PhoneSide';
import SocialMediasSide from './components/SocialMediasSide';

import ScrollSpy from 'react-ui-scrollspy';

import { IProject } from './interfaces/IProject';

import { ProjectsProvider } from './contexts/ProjectsContext';

import ThemeChanger from './components/ThemeChanger';

const sectionIds = ['projects', 'about', 'contact'];

const App = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<IProject | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [activeSectionIndex, setActiveSectionIndex] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  function handleOpenModal(project: IProject) {
    setIsOpen(true);
    setSelectedProject(project);
  }

  function handleCloseModal() {
    setIsOpen(false);
    setSelectedProject(null);
  }

  function handleSectionUpdate(sectionId: string) {
    const newIndex = sectionIds.indexOf(sectionId);

    if (newIndex !== -1) setActiveSectionIndex(newIndex);
  }

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <>
      <ProjectsProvider>
        <ThemeChanger />
        <Modal
          isOpen={isOpen}
          onClose={handleCloseModal}
          project={selectedProject}
        />
        <Header />
        <NavBar active={activeSectionIndex} />
        <main className="container max-w-xs m-auto sm:max-w-sm md:max-w-md lg:max-w-4xl xl:max-w-5xl 2xl:max-w-7xl">
          <Presentation />
          <ScrollSpy onUpdateCallback={handleSectionUpdate}>
            <Projects onProjectClick={handleOpenModal} />
            <Technologies />
            <AboutMe />
            <Contact />
          </ScrollSpy>
        </main>
      </ProjectsProvider>
      <SocialMediasSide />
      <PhoneSide />
      <Footer />
    </>
  );
};

export default App;
