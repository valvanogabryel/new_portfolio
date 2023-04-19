import cn from 'classnames';
import useScrollPosition from '../../../hooks/useScrollPosition';

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
    <div
      className='text-4xl font-logo select-none'
      onClick={scrollToTop}
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
    </div>
  );
}

export default Logo;