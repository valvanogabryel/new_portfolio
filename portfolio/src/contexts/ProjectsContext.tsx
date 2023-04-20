import { createContext, useState, useContext } from 'react';
import { IProject } from '../interfaces/IProject';

import projectsAPI from '../../projects.json';

export const ProjectsContext = createContext<IProject[]>(projectsAPI);
ProjectsContext.displayName = 'Projects';

interface ProjectsContextProps {
  children: React.ReactNode;
}

export const ProjectsProvider = ({ children }: ProjectsContextProps) => {
  const projects = projectsAPI;

  return (
    <ProjectsContext.Provider value={projects}>
      {children}
    </ProjectsContext.Provider>
  )
}

export const useProjectsContext = () => {
  const projects = useContext(ProjectsContext);
  return projects;
}

