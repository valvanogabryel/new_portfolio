import Atropos from 'atropos/react';
import 'atropos/atropos.css';
import { IProject } from '../../../interfaces/IProject';

interface featuredProjectProps {
  featuredProject: IProject
}

const FeaturedProject = ({ featuredProject }: featuredProjectProps) => {
  const settings = {
    el: 'hightlight',
    shadow: false,
    rotateXMax: 30,
    rotateYMax: 30
  };

  return (
    <div>
      <header>
        <h2>{featuredProject.name}</h2>
      </header>
      <Atropos {...settings}>
        <div>
          <button><img src={featuredProject.image} alt="" /></button>
        </div>
      </Atropos>
    </div>
  );
}

export default FeaturedProject;