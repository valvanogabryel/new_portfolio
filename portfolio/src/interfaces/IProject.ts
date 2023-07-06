export interface IProject {
  id: number;
  name: string;
  description: string;
  image: string;
  deploy: string;
  repository: string;
  technologies: string[];
  featured?: boolean;
  inDevelopment?: boolean;
  gif?: string;
}
