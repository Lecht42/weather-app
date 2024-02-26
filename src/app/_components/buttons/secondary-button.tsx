import React, { MouseEventHandler, ReactNode } from "react";
import { ButtonProps } from "./button";

const SecondaryButton: React.FC<ButtonProps> = ({
  children,
  className = "",
  disabled = false,
  onClick,
}: ButtonProps) => (
  <button
    className={`bg-green-400 text-white font-bold py-2 px-4 h-min rounded-md hover:bg-green-500 disabled:opacity-50 disabled:bg-slate-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50 transition duration-150 ease-in-out ${
      disabled && "cursor-not-allowed"
    } ${className}`}
    disabled={disabled}
    onClick={onClick}
  >
    {children}
  </button>
);

export default SecondaryButton;
