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
    cssEase: 'linear',
    pauseOnHover: true
  }

  return (
    <>
      <section className="text-white">
        <div>
          <h2 className="text-4xl my-10 after:h-[1px] after:w-2/4 after:bg-primary flex items-center after:ml-6 after:grow">Projetos</h2>
        </div>
        <div className='w-4/5 m-auto max-w-xs'>
          <div>
            <Slider {...settings}>

              <Atropos>
                <div className='flex flex-col justify-center items-center h-40 w-80 bg-dark_gray text-center'>
                  placeholder
                </div>
              </Atropos>

              <Atropos>
                <div className='flex flex-col justify-center items-center h-40 w-80 bg-dark_gray text-center'>
                  placeholder2
                </div>
              </Atropos>

              <Atropos>
                <div className='flex flex-col justify-center items-center h-40 w-80 bg-dark_gray text-center'>
                  placeholder3
                </div>
              </Atropos>

              <Atropos>
                <div className='flex flex-col justify-center items-center h-40 w-80 bg-dark_gray text-center'>
                  placeholder4
                </div>
              </Atropos>

              <Atropos>
                <div className='flex flex-col justify-center items-center h-40 w-80 bg-dark_gray p-10 text-center'>
                  placeholder5
                </div>
              </Atropos>
            </Slider>
          </div>
        </div>
      </section>
    </>
  );
}

export default Projects;