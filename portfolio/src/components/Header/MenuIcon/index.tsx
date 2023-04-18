import { HiMenu } from 'react-icons/hi';
import { IoMdClose } from 'react-icons/io';

interface MenuIconProps {
  isOpen: boolean;
  onClick: () => void;
}

const MenuIcon = ({ isOpen, onClick }: MenuIconProps) => {
  return (
    <button
      className='fixed top-3 right-3 z-10 bg-transparent border-none cursor-pointer focus:outline-none'
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