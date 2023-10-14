type ButtonProps = {
  children: React.ReactNode;
  onClick?: () => void
};

const Button = ({ children }: ButtonProps) => {
  return <button>{children}</button>;
};

export default Button;
