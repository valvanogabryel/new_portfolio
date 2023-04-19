import useScrollDirection from "../../hooks/useScrollDirection";

import { DiCode } from 'react-icons/di';
import { VscPerson } from 'react-icons/vsc';
import { AiOutlinePhone } from 'react-icons/ai';
import { HiDocumentText } from 'react-icons/hi';

import cn from 'classnames';
import { useState } from "react";

const NavBar = () => {
  const [active, setActive] = useState(0);

  const scrollDirection = useScrollDirection();

  const Menus: {
    name: string;
    icon: JSX.Element;
    dis: string;
    to?: string;
  }[] = [
      {
        name: "Projetos",
        icon: <DiCode />,
        dis: 'translate-x-0',
        // to: '#projetos'
      },
      {
        name: "Sobre",
        icon: <VscPerson />,
        dis: 'translate-x-[4.9rem]',
        // to: '#sobre'
      },
      {
        name: "Contato",
        icon: <AiOutlinePhone />,
        dis: 'translate-x-[9.8rem]',
        // to: '#contato'
      },
      {
        name: "Currículo",
        icon: <HiDocumentText />,
        dis: 'translate-x-[14.7rem]',
        to: 'https://docs.google.com/document/d/1cnQm4vp6bqOJxO4Iuc_SX67zS9Y9GdKDmQI1dW0SXNE/edit?usp=sharing'
      }
    ];

  return (
    <div className={cn('fixed max-h-[4.4rem] -bottom-24 px-6 bg-background_color border-t-[1px] border-t-dark_gray text-white w-screen md:hidden duration-150 transition-all', {
      '-bottom-24': scrollDirection === 'up',
      '!bottom-0': scrollDirection === 'down'
    })}>
      <ul className="flex relative">
        <span className={`bg-primary border-4 border-background_color h-16 w-16 absolute -top-5 rounded-full transition-all duration-500 -z-10 left-[0.4rem] ${Menus[active].dis}`}>

        </span>
        {
          Menus.map((menu, i) => (
            <li
              key={i}
              className="w-16 m-auto"
            >
              <a
                href={menu.to}
                target={menu.name === 'Currículo' ? '_blank' : '_parent'}
                className="flex flex-col text-center pt-6"
                onClick={() => setActive(i)}
              >
                <span className={`mx-auto text-white text-2xl duration-500
                ${i === active && '-mt-11'}`
                }>
                  <i>{menu.icon}</i>
                </span>
                <span className={`${active === i ?
                  'translate-y-4 duration-300 opacity-100' :
                  'opacity-0 translate-y-10'}`}>{menu.name}</span>
              </a>
            </li>
          ))
        }
      </ul>
    </div >
  );
}

export default NavBar;