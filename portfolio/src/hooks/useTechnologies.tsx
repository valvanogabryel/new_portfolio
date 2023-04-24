import { FaReact } from 'react-icons/fa';
import {
  SiTypescript,
  SiTailwindcss
} from 'react-icons/si';

const useTechnologies = () => {
  const techs = [
    {
      id: 1,
      badge: <FaReact />,
      name: "React",
      className: 'text-[#61dafb]',
      description: 'Uma biblioteca JavaScript de código aberto. Útil para criar interfaces de usuário (UI).'
    },
    {
      id: 2,
      badge: <SiTypescript />,
      name: "TypeScript",
      className: 'text-[#007acc]',
      description: 'Uma linguagem de programação de código aberto desenvolvida pela Microsoft. Um superset (ou super-conjunto) do Javascript, que adiciona uma tipagem estática à linguagem.'
    },
    {
      id: 3,
      badge: <SiTailwindcss />,
      name: "TailwindCSS",
      className: 'text-[#06B6D4]',
      description: 'uma biblioteca de classes CSS prontas para uso, projetada para ajudar os desenvolvedores a criar interfaces de usuário rapidamente.'
    }
  ];


  return techs;
}

export default useTechnologies;