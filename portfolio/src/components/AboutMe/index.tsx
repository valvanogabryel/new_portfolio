import { useState } from "react";

import SectionHeader from "../SectionHeader";
import AnimatedBorder from "../AnimatedBorder";
import AboutMeDescription from "./AboutMeDescription";
import AboutCard from "./AboutCard";

import { Fade } from "react-awesome-reveal";
import { motion } from "framer-motion";

const AboutMe = () => {
  const [selectedOption, setSelectedOption] = useState<string>("");

  function handleAboutMe(event: React.ChangeEvent<HTMLInputElement>) {
    setSelectedOption(event.target.value);
  }

  return (
    <section
      className="mt-40 text-neutral-800 dark:text-white lg:mb-40"
      id="about"
    >
      <SectionHeader title="Sobre mim" />

      <div className="flex flex-col items-center lg:flex-row lg:justify-center gap-10">
        <div className="py-10 after:h-[1px] after:w-screen after:max-w-full after:bg-white after:bg-opacity-5 after:inline-block  sm:w-96 md:w-full lg:w-[25rem]">
          <Fade triggerOnce cascade duration={500} damping={1.5}>
            <label
              htmlFor="resume"
              className={`flex gap-2 text-light_gray px-10 relative overflow-hidden duration-500 mx-auto my-4 w-11/12 ${
                selectedOption === "resume"
                  ? "py-4 text-white bg-background_color_darker"
                  : null
              }`}
            >
              {selectedOption.match("resume") && <AnimatedBorder />}
              <input
                type="radio"
                value="resume"
                checked={selectedOption === "resume"}
                onChange={handleAboutMe}
                name="resume"
                id="resume"
                className="scale-90 accent-primary"
              />
              <span>quero um resumo sobre você.</span>
            </label>

            <label
              htmlFor="paragraph"
              className={`flex gap-2 text-light_gray px-10 relative overflow-hidden duration-500 mx-auto my-4 w-11/12 ${
                selectedOption === "paragraph"
                  ? "py-4 text-white bg-background_color_darker"
                  : null
              }`}
            >
              {selectedOption.match("paragraph") && <AnimatedBorder />}
              <input
                type="radio"
                value="paragraph"
                checked={selectedOption === "paragraph"}
                onChange={handleAboutMe}
                name="paragraph"
                id="paragraph"
                className="scale-90 accent-primary"
              />
              <span>me conte um pouco mais sobre você.</span>
            </label>

            <label
              htmlFor="biography"
              className={`flex gap-2 text-light_gray px-10 relative overflow-hidden duration-500 mx-auto my-4 w-11/12 ${
                selectedOption === "biography"
                  ? "py-4 text-white bg-background_color_darker"
                  : null
              }`}
            >
              {selectedOption.match("biography") && <AnimatedBorder />}
              <input
                type="radio"
                value="biography"
                checked={selectedOption === "biography"}
                onChange={handleAboutMe}
                name="biography"
                id="biography"
                className="scale-90 accent-primary"
              />
              <span>me conte bastante sobre você.</span>
            </label>
          </Fade>
        </div>

        <div>
          <AboutMeDescription selected={selectedOption} />
        </div>
      </div>

      <div className="lg:grid lg:grid-cols-2 overflow-hidden">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          viewport={{ once: true }}
        >
          <AboutCard type={"Soft Skills"} />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          viewport={{ once: true }}
        >
          <AboutCard type={"Formação"} />
        </motion.div>
      </div>
    </section>
  );
};

export default AboutMe;
