import React from 'react';

interface ButtonProps {
  type?: "button" | "submit" | "reset";
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  className?: string;
  variant?: string;
  size?: string;
  padding?: string;
  margin?: string;
  position?: string;
  layout_width?: string;
  children?: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  type = "button",
  onClick,
  className = "",
  layout_width = "flex-1",
  children
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`bg-[#f0542e] hover:bg-[#f0542e]/90 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition duration-300 ease-in-out ${className} ${layout_width}`}
    >
      {children || "Submit Form"}
    </button>
  );
};

export default Button;
