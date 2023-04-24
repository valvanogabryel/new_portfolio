import Slider from 'react-slick';
import useTechnologies from '../../hooks/useTechnologies';
import InvisibleArrows from '../InvisibleArrows';

const Technologies = () => {
  const settings = {
    infinite: true,
    speed: 200,
    dots: true,
    appendDots: (dots: any) => (
      <ul className='slick-dots my-4'>
        {
          dots.map((dot: any) => (
            <li key={dot.key} className="inline-block mx-1">
              {dot.props.children}
            </li>
          ))
        }
      </ul>
    ),
    autoplay: true,
    autoplaySpeed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
    cssEase: 'ease-in-out',
    pauseOnHover: true,
    prevArrow: <InvisibleArrows />,
    nextArrow: <InvisibleArrows />
  };

  const techs = useTechnologies();

  return (
    <section className='text-white text-center my-10 mt-40 border-b-[1px] border-b-slate-300 border-opacity-20 h-96'>
      <h2 className='flex flex-grow items-center gap-8 before:h-[1px] before:w-1/6 before:bg-primary before:flex before:flex-grow after:h-[1px] after:w-1/6 after:flex after:bg-primary after:flex-grow text-2xl text-neutral-300'>Minhas Skills</h2>
      <ul className=''>
        <Slider
          {...settings}
          className='m-auto p-4'
        >
          {
            techs.map(tech => (
              <li
                key={tech.id}
                className=''
              >
                <div className={`text-[100px] relative left-[5.9rem] mt-4 mb-2 ${tech.className}`}>
                  {tech.badge}
                </div>
                <div className='flex flex-col'>
                  <span className='text-sm font-main-simple text-light_gray font-bold'>
                    {tech.name}
                  </span>

                  <span className='text-xs text-jutify font-secondary-simple text-gray-500 text-opacity-80 mt-4 font-bold'>
                    {tech.description}
                  </span>
                </div>
              </li>
            ))
          }

        </Slider>
      </ul>
    </section>
  );
}

export default Technologies;