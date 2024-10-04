import React from "react";

interface HeaderProps {
  title: string;
}

const Header: React.FC<HeaderProps> = ({ title }) => {
  return (
    <div>
      <h2>{title}</h2>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="236"
        height="5"
        viewBox="0 0 236 5"
        fill="none"
      >
        <path d="M1.66197 0H236L234.338 5H0L1.66197 0Z" fill="#447055" />
      </svg>
    </div>
  );
};

export default Header;
