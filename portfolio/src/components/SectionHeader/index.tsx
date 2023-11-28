interface SectionHeaderProps {
  title: string;
}

const SectionHeader = ({ title }: SectionHeaderProps) => {
  return (
    <header className="text-gray-900 dark:text-gray-50 select-none">
      <h2 className="text-4xl text-end mt-10 mb-4 after:h-[1px] after:w-2/4 after:bg-primary flex items-center after:ml-6 after:grow lg:text-5xl lg:after:w-full">
        {title}
      </h2>
    </header>
  );
};

export default SectionHeader;
