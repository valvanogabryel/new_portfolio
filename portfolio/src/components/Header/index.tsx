import { Link } from 'react-scroll';
import { Fade } from 'react-awesome-reveal';

import Logo from './Logo';

import useScrollDirection from '../../hooks/useScrollDirection';
import useScrollPosition from '../../hooks/useScrollPosition';

import DelayShow from '../../utils/DelayShow';

import cn from 'classnames';

const Header = () => {
  const scrollDirection = useScrollDirection();
  const scrollPosition = useScrollPosition();
  const show = DelayShow();

  return (
    <header className={cn('text-white z-50 flex justify-center md:justify-between p-10 items-center sticky transition-all duration-300 invisible', {
      'py-4 bg-background_color_darker backdrop-blur-sm shadow-2xl': scrollPosition >= 50,
      '-top-24': scrollDirection === 'down',
      'top-0': scrollDirection === 'up',
      '!visible': show
    })}>

      <Logo scrollPosition={scrollPosition} />

      <nav>
        <Fade
          direction='down'
          triggerOnce
          cascade
          duration={300}
          delay={1500}
        >
          <ul className="hidden md:flex gap-4">
            <li className='cursor-pointer xl:text-lg link relative after:h-[1px] after:w-0 after:inline-block after:bg-primary transition-all hover:text-primary hover:after:w-full after:absolute after:bottom-0 after:left-0 hover:after:duration-300'>
              <Link
                to='projects'
                smooth
                offset={-100}
              >
                Projetos
              </Link>
            </li>
            <li className='cursor-pointer xl:text-lg link relative after:h-[1px] after:w-0 after:inline-block after:bg-primary transition-all hover:text-primary hover:after:w-full after:absolute after:bottom-0 after:left-0 hover:after:duration-300'>
              <Link
                to='about'
                smooth
                offset={-100}
              >
                Sobre mim
              </Link>
            </li>
            <li className='cursor-pointer xl:text-lg link relative after:h-[1px] after:w-0 after:inline-block after:bg-primary transition-all hover:text-primary hover:after:w-full after:absolute after:bottom-0 after:left-0 hover:after:duration-300'>
              <Link
                to='contact'
                smooth
                offset={-100}
              >
                Contato
              </Link>
            </li>
            <li className='cursor-pointer'>

              <a
                href="https://docs.google.com/document/d/1cnQm4vp6bqOJxO4Iuc_SX67zS9Y9GdKDmQI1dW0SXNE/edit?usp=sharing"
                target='_blank'
              >
                <button className='text-primary border-[1px] w-full m-auto outline-none bg-transparent px-4 rounded-md border-primary duration-300 hover:-translate-x-[5px] hover:-translate-y-[5px] hover:shadow-[4px_4px_0] hover:shadow-primary relative'>
                  Currículo
                </button>
              </a>
            </li>
          </ul>
        </Fade>
      </nav>
    </header>
  );
}

export default Header;