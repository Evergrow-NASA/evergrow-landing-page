import React from "react";

interface CardProps {
  icon: string;
  title: string;
  description: string;
}

const Card: React.FC<CardProps> = ({ icon, title, description }) => {
  return (
    <div className="bg-muted-green p-8 card-shadow">
      <div className="flex items-center mb-4">
        <img src={icon} alt={title} />
        <p className="ml-2.5 font-bold text-2xl">{title}</p>
      </div>
      <p>{description}</p>
    </div>
  );
};

export default Card;
