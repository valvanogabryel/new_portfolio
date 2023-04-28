interface TagProps {
  technology: string;
}

const Tag = ({ technology }: TagProps) => {
  return (
    <li className="text-xs snap-start scroll-ps-6 snap-x text-center px-2 text-primary bg-red-800 bg-opacity-10 min-w-max py-1 rounded-full duration-300 hover:ring-1 hover:ring-primary hover:ring-opacity-50 lg:text-base lg:px-4">
      {technology}
    </li>
  );
}

export default Tag;