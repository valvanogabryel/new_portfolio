import { BsArrowLeftShort as ArrowLeft } from "react-icons/bs";

const StyledArrowLeft = ({ onClick }: any) => {
  return (
    <div
      className="absolute -left-8 top-[50%] -translate-y-[50%] z-30"
      onClick={onClick}
    >
      <ArrowLeft
        size={40}
        className="ring-2 transition-all duration-300 ring-primary dark:ring-white text-primary dark:text-white rounded h-12 dark:hover:bg-white dark:hover:text-background_color hover:-translate-x-1 hover:h-36 active:scale-95"
      />
    </div>
  );
};

export default StyledArrowLeft;
