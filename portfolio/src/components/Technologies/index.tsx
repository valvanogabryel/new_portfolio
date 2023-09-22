import Slider from "react-slick";
import useTechnologies from "../../hooks/useTechnologies";
import InvisibleArrows from "../InvisibleArrows";
import { Fade } from "react-awesome-reveal";
import { ITech } from "../../interfaces/ITech";
import { motion } from "framer-motion";

const Technologies = () => {
  const dots = (dots: any) => (
    <ul className="slick-dots my-4">
      {dots.map((dot: any) => (
        <li key={dot.key} className="inline-block mx-1">
          {dot.props.children}
        </li>
      ))}
    </ul>
  );

  const settings = {
    infinite: true,
    speed: 200,
    dots: true,
    appendDots: dots,
    autoplay: true,
    autoplaySpeed: 5000,
    slidesToShow: 5,
    slidesToScroll: 5,
    cssEase: "ease-in-out",
    pauseOnHover: true,
    prevArrow: <InvisibleArrows />,
    nextArrow: <InvisibleArrows />,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1536,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
    ],
  };

  const techs: ITech[] = useTechnologies();

  return (
    <section
      className="text-white overflow-hidden text-center my-10 mt-40 border-b-[1px] border-b-slate-600 dark:border-b-slate-300 border-opacity-20 dark:border-opacity-20 h-96 2xl:h-[28rem]"
      id="skills"
    >
      <motion.header
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.3, duration: 1 }}
        viewport={{ once: true }}
      >
        <h2 className="flex flex-grow items-center gap-8 before:h-[1px] before:w-1/6 before:bg-primary before:flex before:flex-grow after:h-[1px] after:w-1/6 after:flex after:bg-primary after:flex-grow text-2xl text-neutral-600 dark:text-neutral-300 md:text-3xl select-none">
          Minhas Skills
        </h2>
        <Fade
          cascade
          duration={100}
          className="text-xs text-gray-700 dark:text-gray-400 text-opacity-50 absolute left-[50%] -translate-x-[50%] md:text-mds lg:!hidden"
        >
          (aperte no ícone para parar a rolagem automática)
        </Fade>
      </motion.header>
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        viewport={{ once: true }}
      >
        <ul>
          <Slider {...settings} className="m-auto p-4">
            {techs.map((tech) => (
              <li key={tech.id} className="">
                <div
                  className={`text-[100px] relative left-[5.9rem] mt-4 mb-2 ${tech.className} hover:-translate-y-2 duration-300 sm:left-[7.9rem] md:left-[9.9rem] lg:left-[5.9rem] xl:left-[7.2rem] 2xl:left-[4.7rem]`}
                >
                  {tech.badge}
                </div>
                <div className="flex flex-col">
                  <span className="text-sm font-main-simple text-light_gray font-bold md:text-lg">
                    {tech.name}
                  </span>

                  <span className="text-xs text-jutify font-secondary-simple text-gray-500 text-opacity-80 mt-4 font-bold md:text-md lg:w-4/5 lg:m-auto">
                    {tech.description}
                  </span>
                </div>
              </li>
            ))}
          </Slider>
        </ul>
      </motion.div>
    </section>
  );
};

export default Technologies;
