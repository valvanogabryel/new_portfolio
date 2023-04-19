import useScrollDirection from '../../hooks/useScrollDirection';
import useScrollPosition from '../../hooks/useScrollPosition';

import Logo from './Logo';

import cn from 'classnames';

const Header = () => {
  const scrollDirection = useScrollDirection();
  const scrollPosition = useScrollPosition();

  return (
    <header className={cn('text-white flex justify-center md:justify-between p-10 items-center sticky transition-all duration-300', {
      'py-4 bg-background_color_darker backdrop-blur-sm shadow-xl': scrollPosition >= 100,
      '-top-24': scrollDirection === 'down',
      'top-0': scrollDirection === 'up'
    })}>

      <Logo scrollPosition={scrollPosition} />

      <nav>
        <ul className="hidden md:flex gap-4">
          <li>
            Projetos
          </li>
          <li>
            Sobre mim
          </li>
          <li>

          </li>
          <li>
            <button>Currículo</button>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;