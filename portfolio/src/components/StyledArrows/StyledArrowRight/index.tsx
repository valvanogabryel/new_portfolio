import { BsArrowRightShort as ArrowRight } from "react-icons/bs";

const StyledArrowRight = ({ onClick }: any) => {
  return (
    <div
      className="absolute -right-8 top-[50%] -translate-y-[50%]"
      onClick={onClick}
    >
      <ArrowRight
        className="ring-2 transition-all duration-300 ring-primary dark:ring-white text-primary dark:text-white rounded h-12 dark:hover:bg-white dark:hover:text-background_color hover:translate-x-1 hover:h-36 active:scale-95"
        size={40}
      />
    </div>
  );
};

export default StyledArrowRight;
