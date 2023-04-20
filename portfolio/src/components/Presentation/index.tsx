import { useState } from 'react';
import { Fade, JackInTheBox } from 'react-awesome-reveal';

import { AiFillLinkedin } from 'react-icons/ai';

import {
  FaGithub
} from 'react-icons/fa';

const Presentation = () => {
  return (
    <section className="flex flex-col min-h-screen h-screen justify-center items-start -mt-24 transition-all duration-500 select-none p-4 border-b-[1px] border-slate-500 border-opacity-20">
      <Fade
        cascade
        direction='up'
        duration={700}
        triggerOnce
      >
        <div className="text-primary my-4 bg-red-800 bg-opacity-10 w-auto px-4 py-2 rounded-full duration-150 hover:ring-1 hover:ring-primary hover:ring-opacity-50">
          <h1 className="text-md">👋 Olá, mundo! Meu nome é</h1>
        </div>
        <div className="text-gray-400 m-0">
          <h2 className="text-3xl font-bold">Gabryel Valvano.</h2>
        </div>
        <div className="text-dark_gray">
          <h3 className="text-2xl font-bold">Desenvolvedor Front-End.</h3>
        </div>
        <div className="text-gray-500 text-xs font-secondary-simple">
          <Fade cascade damping={0.1} duration={500}>
            grandes coisas começam como pequenas ideias...
          </Fade>
        </div>
      </Fade>
      <div>
        <ul className='flex gap-32 justify-end text-3xl text-slate-400 items-center'>
          <Fade
            delay={1000}
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
              delay={1000}
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