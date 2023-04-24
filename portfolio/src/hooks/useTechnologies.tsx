import {
  FaReact,
  FaSass,
} from 'react-icons/fa';
import {
  SiTypescript,
  SiTailwindcss,
  SiStyledcomponents,
  SiJavascript,
  SiGit,
  SiGithub,
  SiApollographql,
  SiBootstrap,
  SiCss3,
  SiHtml5,
} from 'react-icons/si';

import { ITech } from '../interfaces/ITech';

const useTechnologies = () => {
  const techs: ITech[] = [
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
      description: 'Uma biblioteca de classes CSS prontas para uso, projetada para ajudar os desenvolvedores a criar interfaces de usuário rapidamente.'
    },
    {
      id: 4,
      badge: <SiStyledcomponents />,
      name: "StyledComponents",
      className: 'text-[#DB7093]',
      description: 'Uma biblioteca para estilização de componentes em aplicações React que utiliza CSS-in-JS, ou seja, permite escrever estilos em JavaScript de forma modular, encapsulada e reutilizável.'
    },
    {
      id: 5,
      badge: <SiJavascript />,
      name: "JavaScript",
      className: 'text-[#F7DF1E]',
      description: 'Uma linguagem de programação que, juntamente com HTML e CSS, fornece ao usuário uma experiência mais agradável, com interações e animações dinâmicas.'
    },
    {
      id: 6,
      badge: <FaSass />,
      name: "SASS (SCSS)",
      className: 'text-[#CC6699]',
      description: 'Uma "linguagem de extensão das folhas de estilo". Serve para potencializar o CSS.'
    },
    {
      id: 7,
      badge: <SiGit />,
      name: "Git",
      className: 'text-[#F05032]',
      description: 'Git é o sistema de controle de versão open source mais usado no mundo atualmente. Utilizado para controlar o histórico de alterações de arquivos e projetos em desenvolvimento.'
    },
    {
      id: 8,
      badge: <SiGithub />,
      name: "GitHub",
      className: 'text-[#b9bbbd]',
      description: 'Uma plataforma de hospedagem de código-fonte e arquivos na nuvem.'
    },
    {
      id: 9,
      badge: <SiApollographql />,
      name: "Apollo GraphQL",
      className: 'text-[#311C87]',
      description: 'Uma biblioteca de gerenciamento de estado de gerenciamento de dados para aplicativos baseados em GraphQL. Com ele, é mais fácil realizar consultas, mutações e gerenciar dados no lado do cliente.'
    },
    {
      id: 10,
      badge: <SiBootstrap />,
      name: "Bootstrap",
      className: 'text-[#7011f5]',
      description: 'Um framework web que facilita a criação de sites amigáveis e responsivos. Usa HTML, CSS e JavaScript. Útil para aumentar a velocidade de produção.'
    },
    {
      id: 11,
      badge: <SiCss3 />,
      name: "CSS",
      className: 'text-[#264de4]',
      description: 'Cascading Style Sheets (Folha de Estilo em Cascata) é o mecanismo que dá estilo e beleza ao site.'
    },
    {
      id: 12,
      badge: <SiHtml5 />,
      name: "HTML",
      className: 'text-[#E44D26]',
      description: 'Cascading Style Sheets (Folha de Estilo em Cascata) é o mecanismo que dá estilo e beleza ao site.'
    }
  ];

  return techs;
}

export default useTechnologies;