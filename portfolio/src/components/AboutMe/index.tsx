import { useState } from "react";
import SectionHeader from "../SectionHeader";

import Typing from 'react-typing-effect';
import AnimatedBorder from "../AnimatedBorder";

const AboutMe = () => {
  const [selectedOption, setSelectedOption] = useState<string>('resume');

  const aboutMeTexts = {
    resume: 'Sou apaixonado por tecnologia desde a infância e me encontrei na programação, buscando conquistar meu sonho de trabalhar como desenvolvedor Front-end. Tenho 1 ano e 4 meses de experiência em projetos pessoais, freelancing e cursos, sempre buscando evoluir e aprender novas tecnologias.',

    paragraph: 'Desde criança, sempre tive fascínio pela tecnologia e sua capacidade de transformar o mundo. Quando me deparei com a programação, percebi que havia encontrado uma área que me permitiria participar ativamente dessa transformação. Desde então, tenho me dedicado incansavelmente para me tornar um desenvolvedor Front-end de excelência. Apesar de ter apenas 1 ano e 4 meses de experiência, tenho adquirido conhecimentos valiosos em projetos pessoais, freelancing e cursos. Sempre coloco em prática tudo que aprendo, para garantir que estou evoluindo como um desenvolvedor completo e preparado para os desafios do mercado. Tenho me concentrado nas principais tecnologias Front-end do mercado, como ReactJS, JavaScript, TypeScript, TailwindCSS, entre outros. Com isso, tenho certeza que sou capaz de desenvolver soluções inovadoras e de alta qualidade para os meus clientes e/ou empresas que eu venha a trabalhar. Meu próximo passo é expandir meus conhecimentos e aprender novas tecnologias Back-end.',

    biography: 'Desde a infância, a tecnologia sempre me fascinou. Passava horas estudando computadores, celulares, videogames e outras tecnologias, imaginando como elas funcionavam e como poderiam ser usadas para transformar o mundo. Essa curiosidade me acompanhou durante toda a vida, e me levou a buscar uma área que de fato iria me interessar dentro desse meio. Finalmente, encontrei essa paixão na programação.Foi amor à primeira vista! A possibilidade de criar soluções inovadoras a partir de linhas de código me cativou completamente, e desde então tenho me dedicado incansavelmente para me tornar um desenvolvedor Front- end de excelência. Com apenas 1 ano e 4 meses de experiência, tenho conquistado resultados expressivos em projetos pessoais, freelancing e cursos.Em cada oportunidade que tive, busquei aprender e evoluir, colocando em prática tudo o que aprendi.Acredito que essa abordagem tem sido fundamental para meu desenvolvimento como um profissional completo e preparado para os desafios do mercado. Entre as tecnologias que tenho focado, estão o ReactJS, JavaScript, TypeScript e TailwindCSS.Tenho estudado essas e outras tecnologias Front - end do mercado com afinco, buscando me tornar um especialista na área e estar preparado para as demandas mais complexas. Além disso, tenho consciência de que a tecnologia não para de evoluir, e que é preciso estar sempre atualizado e disposto a aprender.Por isso, pretendo eventualmente expandir meus conhecimentos e aprender novas tecnologias Back - end, como NodeJS e bancos de dados. Estou determinado a alcançar meu sonho de conseguir o primeiro emprego como desenvolvedor Front - end, e tenho certeza de que estou no caminho certo.Com a'
  };

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
              text={aboutMeTexts.resume}
              speed={50}
              typingDelay={0}
              eraseSpeed={20}
              className=""
            />
          }
          {
            selectedOption === 'paragraph' &&
            <Typing
              text={aboutMeTexts.paragraph}
              speed={50}
              typingDelay={0}
              eraseSpeed={20}
              className=""
            />
          }
          {
            selectedOption === 'biography' &&
            <Typing
              text={aboutMeTexts.biography}
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