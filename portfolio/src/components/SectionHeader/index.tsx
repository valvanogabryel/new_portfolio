import { Parallax } from "react-scroll-parallax";

interface SectionHeaderProps {
  title: string;
}

const SectionHeader = ({ title }: SectionHeaderProps) => {
  return (
    // <Parallax scale={[0.9, 1.1]}>
    <header className="text-gray-600 dark:text-white select-none">
      <h2 className="text-4xl mt-10 mb-4 after:h-[1px] after:w-2/4 after:bg-primary flex items-center after:ml-6 after:grow lg:text-5xl lg:after:w-full">
        {title}
      </h2>
    </header>
    // </Parallax>
  );
};

export default SectionHeader;
