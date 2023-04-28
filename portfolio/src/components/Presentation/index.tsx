import cn from 'classnames';
import {
  Fade,
  JackInTheBox
} from 'react-awesome-reveal';

import { AiFillLinkedin } from 'react-icons/ai';

import {
  FaGithub
} from 'react-icons/fa';
import DelayShow from '../../utils/DelayShow';
import { Parallax } from 'react-scroll-parallax';



const Presentation = () => {
  const show = DelayShow();

  return (
    <section className={cn("flex flex-col min-h-screen justify-center items-start -mt-24 transition-all duration-500 select-none p-4 border-b-[1px] border-slate-500 border-opacity-20 2xl:-mt-40 xl:mb-40 lg:border-b-0 lg:max-w-full lg:pl-10 invisible", {
      '!visible': show
    })
    }>
      <Fade
        cascade
        direction='up'
        duration={300}
        triggerOnce
        delay={2000}
      >
        <div className="text-primary bg-red-800 bg-opacity-10 w-auto px-4 py-2 rounded-full duration-150 hover:ring-1 hover:ring-primary hover:ring-opacity-50 mb-4">
          <h1 className="text-md">👋 Olá, mundo! Meu nome é</h1>
        </div>

        <div className="text-gray-400 m-0">
          <h2 className="text-3xl font-bold md:text-5xl xl:text-6xl 2xl:text-7xl">Gabryel Valvano.</h2>
        </div>

        <div className="text-gray-500">
          <h3 className="text-2xl font-bold md:text-4xl xl:text-5xl 2xl:text-6xl 2xl:mb-5">Desenvolvedor Front-End.</h3>
        </div>

        <Parallax translate={'yes'}>
          <div className="text-gray-500 text-xs font-secondary-simple md:text-md xl:text-lg 2xl:text-xl">
            <Fade cascade damping={0.1} duration={500} delay={1500}>
              grandes coisas começam como pequenas ideias...
            </Fade>
          </div>
        </Parallax>
      </Fade>
      <div>
        <ul className='flex gap-36 justify-end text-3xl text-slate-400 items-center -ml-10 md:hidden'>
          <Fade
            delay={2000}
            triggerOnce
            direction='left'
          >
            <li className="duration-500 transition-all hover:shadow-2xl text-sm min-w-fit ml-10">
              <a
                href="https://docs.google.com/document/d/1cnQm4vp6bqOJxO4Iuc_SX67zS9Y9GdKDmQI1dW0SXNE/edit?usp=sharing"
                className='px-4 py-2 border-[1px] border-gray-400 rounded-md transition-all duration-300 hover:ring-4 hover:ring-background_color_darker hover:bg-gray-400 hover:text-background_color'
              >
                Ver CV
              </a>
            </li>
          </Fade>
          <div className='flex gap-2 ml-auto'>
            <JackInTheBox
              cascade
              delay={1800}
              triggerOnce
            >

              <li className="py-4 duration-500 transition-all hover:-mt-0.5 hover:shadow-2xl">
                <a href="https://www.linkedin.com/in/gabryel-valvano-94338a204/" target='_blank'>
                  <AiFillLinkedin />
                </a>
              </li>
              <li className="py-4 duration-500 transition-all hover:-mt-0.5 hover:shadow-2xl">
                <a href="https://github.com/valvanogabryel" target='_blank'>
                  <FaGithub />
                </a>
              </li>
            </JackInTheBox>
          </div>
        </ul>
      </div>
    </section>
  );
}

export default Presentation;