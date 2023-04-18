import { useState } from 'react';
import MenuIcon from './MenuIcon';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [iconAnimation, setIconAnimation] = useState(false);

  function handleMenu() {
    setIsMenuOpen(!isMenuOpen);
    setIconAnimation(true);
    setTimeout(() => {
      setIconAnimation(false);
    }, 1000);
  }

  return (
    <header className="text-white flex justify-between p-10">
      <div className="text-4xl font-logo select-none">
        <span className="text-primary">G</span>
        <span>a</span>
        <span className="text-primary">b</span>
        <span>r</span>
        <span>y</span>
        <span>e</span>
        <span>l</span>
        <span>.</span>
      </div>

      <nav className="">

        <div className='md:hidden'>
          <MenuIcon isOpen={isMenuOpen} onClick={handleMenu} />
        </div>
        {
          isMenuOpen &&
          <ul>
            <li>Projetos</li>
            <li>Sobre mim</li>
            <li>Currículo</li>
          </ul>
        }

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