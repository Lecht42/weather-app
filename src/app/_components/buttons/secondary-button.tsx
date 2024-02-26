import React, { MouseEventHandler, ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  className?: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

const SecondaryButton: React.FC<ButtonProps> = ({
  children,
  className = "",
  onClick,
}: ButtonProps) => {
  return (
    <button
      className={`bg-green-400 text-white font-bold py-2 px-4 h-min rounded-lg hover:bg-green-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50 transition duration-150 ease-in-out ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default SecondaryButton;
