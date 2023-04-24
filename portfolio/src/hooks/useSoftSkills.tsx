
import { FaCalendarCheck } from 'react-icons/fa';

import { BiCodeCurly } from 'react-icons/bi';

import { AiOutlineBulb } from 'react-icons/ai';

import { IoBookSharp } from 'react-icons/io5';

import { MdOutlineReportProblem } from 'react-icons/md';

import { ISkill } from "../interfaces/ISkill";

const useSoftSkills = () => {
  const softSkills: ISkill[] = [
    {
      id: 1,
      icon: <AiOutlineBulb />,
      title: 'Criatividade',
      text: 'Minha criatividade é uma habilidade essencial como programador front-end, permitindo que eu encontre soluções inovadoras e eficazes para os desafios do desenvolvimento de projetos.'
    },
    {
      id: 2,
      icon: <IoBookSharp />,
      title: 'Fácil aprendizagem',
      text: 'Tenho a capacidade de absorver rapidamente novas tecnologias, linguagens de programação e ferramentas, o que me permite manter-me atualizado em um campo em constante evolução.'
    },
    {
      id: 3,
      icon: <MdOutlineReportProblem />,
      title: 'Resolução de problemas',
      text: 'Tenho a capacidade de identificar rapidamente problemas técnicos e encontrar soluções eficazes para eles, o que me permite manter os projetos em andamento e entregar resultados de alta qualidade no prazo.'
    },
    {
      id: 4,
      icon: <FaCalendarCheck />,
      title: 'Assiduidade',
      text: 'Tenho o compromisso de cumprir prazos e metas estabelecidas, e sempre me esforço para entregar resultados de alta qualidade de maneira oportuna e eficiente.'
    },
    {
      id: 5,
      icon: <BiCodeCurly />,
      title: 'Autodidatismo',
      text: 'Sempre tive a capacidade de aprender de forma independente, pesquisando e experimentando novas tecnologias, linguagens de programação e ferramentas.'
    },
  ];

  return softSkills;
}

export default useSoftSkills;