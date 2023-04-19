import Atropos from 'atropos/react';
import 'atropos/atropos.css';

import Slider from 'react-slick';

const Projects = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: 'linear'
  }

  return (
    <>
      <section className="text-white">
        <div>
          <h2 className="text-4xl my-10 after:h-[1px] after:w-2/4 after:bg-primary flex items-center after:ml-6 after:grow">Projetos</h2>
        </div>
        <div className='w-4/5 m-auto max-w-xs'>
          <Slider {...settings}>
            <div>teste</div>
            <div>teste2</div>
            <div>teste3</div>
            <div>teste4</div>
            <div>teste5</div>
          </Slider>
        </div>
      </section>
    </>
  );
}

export default Projects;