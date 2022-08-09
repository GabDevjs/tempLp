interface ButtonProps {
  name: string;
  onClick: () => void;
  children: React.ReactNode;
}

export const Button = (props: ButtonProps) => {
  const { children, name, onClick, ...rest } = props;

  return (
    <button
      type="button"
      className="bg-white p-1 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      onClick={onClick}
    >
      <span className="sr-only">{name}</span>
      {children}
    </button>
  );
};
