import Slider from 'react-slick';
import InvisibleArrows from '../../InvisibleArrows';
import useSoftSkills from '../../../hooks/useSoftSkills';
import useTraining from '../../../hooks/useTraining';
import { ISkill } from '../../../interfaces/ISkill';
import { ITraining } from '../../../interfaces/ITraining';

import { PiCertificateBold } from 'react-icons/pi';

interface AboutCardProps {
  type: string;
}

const AboutCard = ({ type }: AboutCardProps) => {
  const softSkill: ISkill[] | undefined =
    type === 'Soft Skills' ? useSoftSkills() : undefined;
  const training: ITraining[] | undefined =
    type === 'Formação' ? useTraining() : undefined;

  const settings = {
    infinite: true,
    dots: true,
    centerMode: false,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    cssEase: 'ease-in-out',
    pauseOnHover: true,
    prevArrow: <InvisibleArrows />,
    nextArrow: <InvisibleArrows />,
  };

  return (
    <div className="bg-transparent shadow-lg items-center relative text-center pb-16 my-10 w-full m-auto dark:shadow-2xl rounded-lg min-h-[30rem] slick-wrapper lg:w-4/6 2xl:w-3/5 dark:bg-dark_gray">
      <header className="text-gray-900 dark:text-gray-200 border-b border-gray-300 py-4 mb-6 dark:border-none dark:bg-gray-900 dark:bg-opacity-30">
        <h3 className="text-3xl font-secondary-simple font-bold">{type}</h3>
      </header>
      <Slider {...settings}>
        {type === 'Soft Skills'
          ? softSkill?.map((info) => (
              <div key={info.id}>
                <div className="flex flex-col items-center gap-2">
                  <div className="text-4xl text-gray-900 dark:text-gray-300">
                    {info.icon}
                  </div>
                  <h4 className="text-2xl text-gray-800 dark:text-gray-300 pb-4 w-full dark:border-opacity-[5%] dark:border-b-gray-200">
                    {info.title}
                  </h4>
                </div>
                <div className="text-gray-600 dark:text-gray-400 text-center w-4/5 m-auto min-h-[12rem]">
                  {info.text}
                </div>
              </div>
            ))
          : training?.map((info) => (
              <div key={info.id}>
                <div className="flex flex-col items-center">
                  <h4 className="text-2xl dark:text-gray-300 border-opacity-[5%] w-11/12 m-auto">
                    {info.course} -{' '}
                    <span className="text-gray-900 pt-4 dark:text-gray-300 text-2xl font-bold font-secondary-simple">
                      {info.platform}
                    </span>
                  </h4>
                  <div>
                    <span className="text-xs font-light text-gray-700 dark:text-gray-400 w-screen">
                      ({info.duration} horas)
                    </span>
                  </div>
                </div>
                <div className="flex flex-col justify-end gap-4 items-center py-8">
                  {info.certificate ? (
                    <a
                      href={info.certificate}
                      target="_blank"
                      className="text-lg certificate text-gray-500 bg-gray-300 rounded-lg px-4 py-2 w-2/4 mx-4 font-bold inline-block duration-100 hover:ring ring-gray-400 dark:text-gray-800 dark:bg-gray-500 dark:hover:ring-gray-700"
                    >
                      <div className="flex items-center gap-2 justify-center">
                        <PiCertificateBold className="h-6 w-6 stroke-current" />
                        <span>Certificado</span>
                      </div>
                    </a>
                  ) : (
                    <a
                      href={info.link}
                      target="_blank"
                      className="text-xs inline-block w-4/5 duration-300 mt-10"
                    >
                      <div className="text-2xl">
                        <span className="text-xs font-thin text-gray-900 dark:text-gray-200 w-screen hover:underline">
                          Nenhum certificado emitido
                        </span>
                      </div>
                    </a>
                  )}
                  {info.link ===
                    'https://cursos.alura.com.br/vitrinedev/valvanogabryel' && (
                    <a
                      href={info.link}
                      target="_blank"
                      className="text-lg text-gray-500 rounded-lg p-2 w-9/12 mx-4 font-bold inline-block duration-100  hover:bg-gray-300 dark:text-gray-100 dark:hover:bg-gray-900 dark:hover:bg-opacity-20 mb-10"
                    >
                      Veja os cursos feitos
                    </a>
                  )}
                </div>
              </div>
            ))}
      </Slider>
    </div>
  );
};

export default AboutCard;
