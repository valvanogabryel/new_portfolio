import { Fade } from "react-awesome-reveal";
import SectionHeader from "../SectionHeader";

const Contact = () => {
  return (
    <section className="text-white text-center h-64 mt-40" id="contact">
      <SectionHeader title="Contato" />

      <div className="flex flex-col items-center gap-6">
        <h2 className="text-3xl font-bold text-gray-500 w-2/3 dark:text-gray-300 mt-8 lg:w-2/5 lg:text-5xl">
          Estou buscando por oportunidades.
        </h2>
        <Fade
          cascade
          duration={100}
          delay={300}
          className="text-md font-thin text-gray-800 dark:text-gray-200 lg:text-lg"
        >
          Caso queira meus serviços
        </Fade>
        <button className="text-primary border-[1px] w-1/2 m-auto outline-none bg-transparent p-2 rounded-md border-primary duration-300 hover:-translate-x-[5px] hover:-translate-y-[5px] hover:shadow-[4px_4px_0] hover:shadow-primary relative lg:w-1/5 2xl:w-[13%] ease-[cubic-bezier(.47,2.5,.41,.8)]">
          <a
            href="mailto:valvanogabryel@gmail.com"
            target="_blank"
            rel="noopener norefferer"
          >
            Entre em contato
          </a>
        </button>
      </div>
    </section>
  );
};

export default Contact;
