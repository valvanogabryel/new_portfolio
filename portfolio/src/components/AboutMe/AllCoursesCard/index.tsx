import { motion } from 'framer-motion';

const AllCoursesCard = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      viewport={{ once: false }}
      className="flex flex-col gap-8 justify-center overflow-hidden items-center rounded-lg  border border-gray-400 m-auto shadow bg-white p-8 my-12 dark:bg-gray-800 dark:border-gray-500 md:w-full lg:w-6/12"
    >
      <h2 className="text-base text-center dark:text-gray-50 md:text-lg  lg:text-2xl">
        Para ver meu certificado completo na Alura
      </h2>

      <button className="text-primary text-xl border-[1px] w-1/2 m-auto outline-none bg-transparent p-2 rounded-md border-primary duration-300 hover:-translate-x-[5px] hover:-translate-y-[5px] hover:shadow-[4px_4px_0] hover:shadow-primary relative ease-[cubic-bezier(.47,2.5,.41,.8)] dark:border-red-400 dark:text-red-400 dark:hover:shadow-red-400">
        <a
          href="https://cursos.alura.com.br/user/valvanogabryel/fullCertificate/a9cc927a70c745a72fd423c6f0e94378"
          target="_blank"
          rel="noopener norefferer"
        >
          Clique aqui
        </a>
      </button>
    </motion.section>
  );
};

export default AllCoursesCard;
