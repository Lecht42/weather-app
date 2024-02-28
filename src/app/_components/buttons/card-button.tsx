import React, { MouseEventHandler, ReactNode } from "react";
import { ButtonProps } from "./button";

const SecondaryButton: React.FC<ButtonProps> = ({
  children,
  className = "",
  disabled,
  onClick,
}: ButtonProps) => (
  <button
    className={`bg-blue-400 text-white font-bold py-2 px-4 h-min rounded-md hover:bg-blue-500 disabled:opacity-50 disabled:bg-blue-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 transition duration-150 ease-in-out shadow-md ${
      disabled ? "cursor-not-allowed" : ""
    } ${className}`}
    disabled={disabled}
    onClick={onClick}
  >
    {children}
  </button>
);

export default SecondaryButton;
