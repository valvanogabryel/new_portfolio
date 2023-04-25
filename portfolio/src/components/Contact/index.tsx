import SectionHeader from "../SectionHeader";

const Contact = () => {
  return (
    <section className="text-white text-center h-80">
      <SectionHeader title="Contato" />
      <div className="flex flex-col items-center gap-6">
        <h2 className="text-3xl font-bold w-2/3 text-gray-300">Estou buscando por oportunidades.</h2>
        <p className="text-md font-thin text-gray-200">Caso queira meus serviços</p>
        <button className="text-primary border-[1px] w-1/2 m-auto outline-none bg-transparent p-2 rounded-md border-primary duration-300 hover:-translate-x-[5px] hover:-translate-y-[5px] hover:shadow-[4px_4px_0] hover:shadow-primary">
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
}

export default Contact;