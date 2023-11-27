import { BsSun as SunIcon, BsMoon as MoonIcon } from 'react-icons/bs';

import { useTheme } from '../../hooks/useTheme';
import useScrollDirection from '../../hooks/useScrollDirection';

import { motion } from 'framer-motion';

const ThemeChanger = () => {
  const { theme, setTheme } = useTheme();

  const scrollDirection = useScrollDirection();

  const isScrollingDown = scrollDirection === 'down';

  const exitAnimation = {
    x: isScrollingDown ? -100 : 0,
    opacity: isScrollingDown ? 0 : 1,
  };

  return (
    <motion.div
      className={`fixed bottom-24 sm:bottom-auto sm:top-1/2 bg-opacity-50 dark:bg-opacity-90 sm:-translate-y-1/2 pl-1 transition-all bg-black pr-1 py-1 rounded-r-full hover:pl-4 hover:bg-opacity-100 dark:hover:bg-opacity-100 dark:bg-white`}
      initial={{ opacity: 0, x: -100 }}
      animate={exitAnimation}
      transition={{
        duration: 0.1,
      }}
    >
      {theme === 'light' ? (
        <MoonIcon
          className="text-slate-900 cursor-pointer"
          onClick={() => setTheme('dark')}
          size={20}
          color="white"
          aria-label="Mudar para tema escuro"
        >
          Mudar para tema escuro
        </MoonIcon>
      ) : (
        <SunIcon
          className="text-slate-400 cursor-pointer"
          onClick={() => setTheme('light')}
          size={20}
          color="black"
          aria-label="Mudar para tema claro"
        >
          Mudar para tema claro
        </SunIcon>
      )}
    </motion.div>
  );
};

export default ThemeChanger;
