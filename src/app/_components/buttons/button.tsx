import React, { MouseEventHandler, ReactNode } from "react";

export interface ButtonProps {
  children: ReactNode;
  className?: string;
  disabled?: boolean;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

const Button: React.FC<ButtonProps> = ({
  children,
  className = "",
  disabled = false,
  onClick,
}: ButtonProps) => (
  <button
    className={`bg-blue-500 text-white font-bold py-2 px-4 h-min rounded-lg shadow-md hover:bg-blue-600 disabled:opacity-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition duration-150 ease-in-out ${
      disabled ? "cursor-not-allowed" : ""
    } ${className}`}
    disabled={disabled}
    onClick={onClick}
  >
    {children}
  </button>
);

export default Button;
