import { Fade } from 'react-awesome-reveal';

import cn from 'classnames';

import { motion } from 'framer-motion';

interface LogoProps {
  scrollPosition: number;
}

const Logo = ({ scrollPosition }: LogoProps) => {
  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }

  return (
    <Fade
      direction='down'
      triggerOnce
      cascade
      delay={1000}
      duration={300}
    >
      <motion.div
        className='text-4xl font-logo select-none cursor-pointer'
        onClick={scrollToTop}
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 1.1 }}
        drag="x"
        dragConstraints={{ left: -10, right: 10 }}
      >
        <span className='text-primary'>G</span>

        <span className={cn('transition-all inline-block duration-300', {
          'opacity-0 w-0': scrollPosition >= 200
        })}
        >a</span>

        <span className="text-primary">b</span>

        <span className={cn('transition-all  inline-block duration-300', {
          'opacity-0 w-0': scrollPosition >= 210
        })}>r</span>

        <span className={cn('transition-all inline-block duration-300', {
          'opacity-0 w-0': scrollPosition >= 220
        })}>y</span>

        <span className={cn('transition-all inline-block duration-300', {
          'opacity-0 w-0': scrollPosition >= 230
        })}>e</span>

        <span className={cn('transition-all inline-block duration-300', {
          'opacity-0 w-0': scrollPosition >= 240
        })}>l</span>

        <span className={`${scrollPosition > 200 ? 'text-primary' : ''}`}>.</span>
      </motion.div>
    </Fade>
  );
}

export default Logo;