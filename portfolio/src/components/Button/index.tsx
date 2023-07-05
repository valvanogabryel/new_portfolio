interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
}

const Button = ({ children, onClick }: ButtonProps) => {
  return (
    <button onClick={onClick} className="h-full hover:outline-none">
      {children}
    </button>
  );
};

export default Button;
