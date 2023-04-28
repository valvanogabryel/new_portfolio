import { Fade } from "react-awesome-reveal";

const PhoneSide = () => {
  return (
    <Fade
      className="w-[4%] after:inline-block after:h-[90px] after:w-[1px] after:bg-light_gray after:animate-grow_up after:mt-2 hidden md:flex md:flex-col md:items-center md:gap-2 md:w-[4%] md:fixed md:bottom-0 md:right-0 md:pr-4 lg:scale-110 xl:pr-10 2xl:scale-105 md:text-gray-400 md:text-xs"
      triggerOnce
      delay={5000}
      duration={200}
      cascade
    >
      <a
        href="https://wa.me/5521986010370"
        target="_blank"
      >
        <div className="flex flex-col items-center pl-1 cursor-pointer">
          <span className="rotate-90 h-2">(</span>
          <span className="rotate-90 h-2">2</span>
          <span className="rotate-90 h-2">1</span>
          <span className="rotate-90 h-2">)</span>
          <span className="rotate-90 h-2">9</span>
          <span className="rotate-90 h-2">8</span>
          <span className="rotate-90 h-2">6</span>
          <span className="rotate-90 h-2">0</span>
          <span className="rotate-90 h-2">1</span>
          <span className="rotate-90 h-2">-</span>
          <span className="rotate-90 h-2">0</span>
          <span className="rotate-90 h-2">3</span>
          <span className="rotate-90 h-2">7</span>
          <span className="rotate-90 h-2">0</span>
        </div>
      </a>
    </Fade>
  );
}

export default PhoneSide;