import { HiMenu } from 'react-icons/hi';
import { IoMdClose } from 'react-icons/io';

interface MenuIconProps {
  isOpen: boolean;
  onClick: () => void;
  isAnimated: boolean;
}

const MenuIcon = ({ isOpen, onClick, isAnimated }: MenuIconProps) => {
  return (
    <button
      className={`z-10 bg-transparent border-none cursor-pointer focus:outline-none ${isAnimated ? 'animate-spin' : ''}`}
      onClick={onClick}
      aria-label={isOpen ? 'Fechar menu' : 'Abrir menu'}
    >
      {
        isOpen ?
          <IoMdClose size={40} /> :
          <HiMenu size={40} />
      }
    </button>
  );
}

export default MenuIcon;