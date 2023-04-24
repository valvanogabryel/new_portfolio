import { FaReact } from 'react-icons/fa';
import {
  SiTypescript,
  SiTailwindcss
} from 'react-icons/si';
import Slider from 'react-slick';

const Arrows = () => {
  return (
    <span className='hidden'></span>
  )
}


const Technologies = () => {
  const settings = {
    infinite: true,
    speed: 200,
    dots: true,
    autoplay: true,
    autoplaySpeed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
    cssEase: 'ease-in-out',
    pauseOnHover: true,
    prevArrow: <Arrows />,
    nextArrow: <Arrows />
  }

  const techs = [
    {
      id: 1,
      badge: <FaReact />,
      name: "React",
      className: 'text-[#61dafb]',
      description: 'Uma biblioteca JavaScript de código aberto. Útil para criar interfaces de usuário (UI).'
    },
    {
      id: 2,
      badge: <SiTypescript />,
      name: "TypeScript",
      className: 'text-[#007acc]',
      description: 'Uma linguagem de programação de código aberto desenvolvida pela Microsoft. Um superset (ou super-conjunto) do Javascript, que adiciona uma tipagem estática à linguagem.'
    },
    {
      id: 3,
      badge: <SiTailwindcss />,
      name: "TailwindCSS",
      className: 'text-[#06B6D4]',
      description: 'uma biblioteca de classes CSS prontas para uso, projetada para ajudar os desenvolvedores a criar interfaces de usuário rapidamente.'
    }
  ];

  return (
    <section className='text-white text-center my-10 mt-40 border-b-[1px] border-b-slate-300 border-opacity-20 h-80'>
      <h2 className='flex flex-grow items-center gap-8 before:h-[1px] before:w-1/6 before:bg-red-400 before:flex before:flex-grow after:h-[1px] after:w-1/6 after:flex after:bg-red-400 after:flex-grow text-2xl text-neutral-300'>Minhas Skills</h2>
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