import Atropos from 'atropos/react';
import 'atropos/atropos.css';


const FeaturedProject = () => {
  const settings = Atropos({
    el: 'hightlight',
    shadow: false,
    rotateXMax: 10,
    rotateYMax: 10
  });
  return (
    <Atropos {...settings}>
      <header>
        <h2>Projeto Destaque</h2>
      </header>




    </Atropos>
  );
}

export default FeaturedProject;