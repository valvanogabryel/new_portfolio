import Slider from "react-slick";
import InvisibleArrows from "../../InvisibleArrows";
import useSoftSkills from "../../../hooks/useSoftSkills";
import useTraining from "../../../hooks/useTraining";
import { ISkill } from "../../../interfaces/ISkill";
import { ITraining } from "../../../interfaces/ITraining";

import { GrCertificate } from "react-icons/gr";
import { motion } from "framer-motion";

interface AboutCardProps {
  type: string;
}

const AboutCard = ({ type }: AboutCardProps) => {
  const softSkill: ISkill[] | undefined =
    type === "Soft Skills" ? useSoftSkills() : undefined;
  const training: ITraining[] | undefined =
    type === "Formação" ? useTraining() : undefined;

  const settings = {
    infinite: true,
    dots: true,
    centerMode: false,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 10000,
    cssEase: "ease-in-out",
    pauseOnHover: true,
    prevArrow: <InvisibleArrows />,
    nextArrow: <InvisibleArrows />,
  };

  return (
    <div className="bg-transparent shadow-lg items-center text-center my-10 w-11/12 m-auto dark:shadow-2xl rounded-md min-h-[30rem] slick-wrapper lg:w-4/6 2xl:w-3/5 dark:bg-dark_gray">
      <header className=" border-b py-4 mb-4 dark:border-none dark:bg-gray-900 dark:bg-opacity-30">
        <h3 className="text-3xl font-secondary-simple font-bold">{type}</h3>
      </header>
      <Slider {...settings}>
        {type.match("Soft Skills")
          ? softSkill?.map((info) => (
              <div key={info.id}>
                <div className="flex flex-col items-center gap-4">
                  <div className="text-4xl">{info.icon}</div>
                  <h4 className="text-2xl text-gray-400 pb-4 mb-10 border-b-0  w-full dark:border-opacity-[5%] dark:border-b-gray-200  dark:border-b">
                    {info.title}
                  </h4>
                </div>
                <div className="text-md text-center w-4/5 m-auto min-h-[12rem]">
                  {info.text}
                </div>
              </div>
            ))
          : training?.map((info) => (
              <div key={info.id}>
                <div className="flex flex-col items-center">
                  <div className="text-2xl font-bold font-secondary-simple">
                    {info.platform}
                  </div>
                  <div>
                    <span className="text-xs font-thin text-gray-900 dark:text-gray-200 w-screen">
                      ({info.duration} horas)
                    </span>
                    <h4 className="text-2xl text-gray-400 pb-4 mb-10 border-b-[1px] border-opacity-[5%] border-b-gray-200 w-11/12 m-auto">
                      {info.course}
                    </h4>
                  </div>
                </div>
                <div className="min-h-[9.9rem]">
                  {info.link ===
                    "https://cursos.alura.com.br/vitrinedev/valvanogabryel" && (
                    <a
                      href={info.link}
                      target="_blank"
                      className="text-xs inline-block w-4/5 text-gray-400 duration-300 dark:hover:text-white hover:underline mt-10 animate-pulse"
                    >
                      Clique aqui para ver todos os cursos que fiz na Alura
                    </a>
                  )}
                  {info.certificate ? (
                    <a
                      href={info.certificate}
                      target="_blank"
                      className="text-xs inline-block w-4/5 duration-300 mt-10"
                    >
                      <div className="text-2xl certificate">
                        <GrCertificate />
                      </div>
                    </a>
                  ) : (
                    <a
                      href={info.link}
                      target="_blank"
                      className="text-xs inline-block w-4/5 duration-300 mt-10"
                    >
                      <div className="text-2xl certificate">
                        <span className="text-xs font-thin text-gray-900 dark:text-gray-200 w-screen hover:underline">
                          Nenhum certificado emitido
                        </span>
                      </div>
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
