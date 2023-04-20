interface TagProps {
  technology: string;
}

const Tag = ({ technology }: TagProps) => {
  return (
    <li className="text-primary bg-red-800 bg-opacity-10 w-auto py-1 rounded-full duration-300 hover:ring-1 hover:ring-primary hover:ring-opacity-50">
      {technology}
    </li>
  );
}

export default Tag;