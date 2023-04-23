import { useState } from "react";
import SectionHeader from "../SectionHeader";

import Typing from 'react-typing-effect';
import AnimatedBorder from "../AnimatedBorder";

const AboutMe = () => {
  const [selectedOption, setSelectedOption] = useState<string>('resume');

  const aboutMeTexts = [
    'Olá, meu nome é Gabryel Valvano e este é um resumo sobre mim.',
    '',
    'Olá, meu nome é Gabryel Valvano e este é um resumo sobre mim.Olá, meu nome é Gabryel Valvano e este é um resumo sobre mim.Olá, meu nome é Gabryel Valvano e este é um resumo sobre mim.Olá, meu nome é Gabryel Valvano e este é um resumo sobre mim.'
  ];

  function handleAboutMe(event: React.ChangeEvent<HTMLInputElement>) {
    setSelectedOption(event.target.value);
  }

  return (
    <section className="mt-40 text-white">
      <SectionHeader title="Sobre mim" />

      <div className="flex flex-col items-center">

        <div className="py-10 after:h-[1px] after:w-screen after:max-w-full after:bg-white after:bg-opacity-5 after:inline-block">
          <label
            htmlFor="resume"
            className={`flex gap-2 text-light_gray px-10 relative overflow-hidden duration-500 mx-auto my-4 w-11/12 ${selectedOption === 'resume' ? 'py-4 text-white bg-background_color_darker' : null}`}
          >
            {selectedOption.match('resume') && <AnimatedBorder />}
            <input
              type="radio"
              value='resume'
              checked={selectedOption === 'resume'}
              onChange={handleAboutMe}
              name="resume"
              id="resume"
              className="scale-90 accent-primary"
            />
            <span>quero um resumo sobre você.</span>
          </label>

          <label
            htmlFor="paragraph"
            className={`flex gap-2 text-light_gray px-10 relative overflow-hidden duration-500 mx-auto my-4 w-11/12 ${selectedOption === 'paragraph' ? 'py-4 text-white bg-background_color_darker' : null}`}
          >
            {selectedOption.match('paragraph') && <AnimatedBorder />}
            <input
              type="radio"
              value='paragraph'
              checked={selectedOption === 'paragraph'}
              onChange={handleAboutMe}
              name="paragraph"
              id="paragraph"
              className="scale-90 accent-primary"
            />
            <span>me conte um pouco mais sobre você.</span>
          </label>

          <label
            htmlFor="biography"
            className={`flex gap-2 text-light_gray px-10 relative overflow-hidden duration-500 mx-auto my-4 w-11/12 ${selectedOption === 'biography' ? 'py-4 text-white bg-background_color_darker' : null}`}
          >
            {selectedOption.match('biography') && <AnimatedBorder />}
            <input
              type="radio"
              value='biography'
              checked={selectedOption === 'biography'}
              onChange={handleAboutMe}
              name="biography"
              id="biography"
              className="scale-90 accent-primary"
            />
            <span>me conte bastante sobre você.</span>
          </label>
        </div>

        <div>

          {
            selectedOption === 'resume' &&
            <Typing
              text={aboutMeTexts[0]}
              speed={50}
              typingDelay={0}
              eraseSpeed={20}
              className=""
            />
          }
          {
            selectedOption === 'paragraph' &&
            <Typing
              text={'Olá, meu nome é Gabryel Valvano e este é um resumo sobre mim.Olá, meu nome é Gabryel Valvano e este é um resumo sobre mim.'}
              speed={50}
              typingDelay={0}
              eraseSpeed={20}
              className=""
            />
          }
          {
            selectedOption === 'biography' &&
            <Typing
              text={aboutMeTexts[2]}
              speed={50}
              typingDelay={0}
              eraseSpeed={20}
              className=""
            />
          }
        </div>
      </div>


      <br /><br /><br /><br /><br /><br /><br /><br /><br />
    </section>
  );
}

export default AboutMe;