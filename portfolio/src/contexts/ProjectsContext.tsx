import { createContext, useState } from 'react';
import { IProject } from '../interfaces/IProject';


const ProjectsContext = createContext({});

interface ProjectsContextProps {
  children: React.ReactNode;
}

export const ProjectsProvider = ({ children }: ProjectsContextProps) => {
  const [projects, setProjects] = useState<IProject[]>();

  return (
    <ProjectsContext.Provider value={{
      projects,
      setProjects
    }}>
      {children}
    </ProjectsContext.Provider>
  )
}