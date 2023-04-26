import { Link } from 'react-scroll';
import useScrollDirection from '../../hooks/useScrollDirection';
import useScrollPosition from '../../hooks/useScrollPosition';

import Logo from './Logo';

import cn from 'classnames';
import { Fade } from 'react-awesome-reveal';

const Header = () => {
  const scrollDirection = useScrollDirection();
  const scrollPosition = useScrollPosition();

  return (
    <header className={cn('text-white z-50 flex justify-center md:justify-between p-10 items-center sticky transition-all duration-300', {
      'py-4 bg-background_color_darker backdrop-blur-sm shadow-2xl': scrollPosition >= 50,
      '-top-24': scrollDirection === 'down',
      'top-0': scrollDirection === 'up'
    })}>

      <Logo scrollPosition={scrollPosition} />

      <nav>
        <Fade
          direction='down'
          triggerOnce
          cascade
          duration={300}
        >
          <ul className="hidden md:flex gap-4">
            <li className='cursor-pointer'>
              <Link
                to='projects'
                smooth
                offset={-100}
              >
                Projetos
              </Link>
            </li>
            <li className='cursor-pointer'>
              <Link
                to='about'
                smooth
                offset={-100}
              >
                Sobre mim
              </Link>
            </li>
            <li className='cursor-pointer'>
              <Link
                to='contact'
                smooth
                offset={-100}
              >
                Contato
              </Link>
            </li>
            <li className='cursor-pointer'>
              <button>Currículo</button>
            </li>
          </ul>
        </Fade>
      </nav>
    </header>
  );
}

export default Header;