import React from "react";

const ButtonStyles = {
  PRIMARY: "bg-primary-white text-primary-black hover:bg-hover-primary-white rounded-lg",
  DOWNLOAD: "bg-primary-green text-primary-white hover:bg-hover-primary-green rounded-full",
};

interface ButtonProps {
  text: string;
  style: keyof typeof ButtonStyles;
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({
  text,
  style,
  onClick,
  disabled,
  className,
}) => {
  return (
    <button
      className={`p-4 min-w-40 transition duration-500 font-bold ${ButtonStyles[style]} ${className}  ${
        disabled ? "opacity-50 cursor-not-allowed" : ""
      }`}
      onClick={onClick}
      disabled={disabled}
    >
      {text}
    </button>
  );
};

export default Button;
