interface TagProps {
  technology: string;
}

const Tag = ({ technology }: TagProps) => {
  return (
    <li className="text-xs text-center px-2 text-primary bg-red-800 bg-opacity-10 min-w-max py-1 rounded-full duration-300 hover:ring-1 hover:ring-primary hover:ring-opacity-50">
      {technology}
    </li>
  );
}

export default Tag;