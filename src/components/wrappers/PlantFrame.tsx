import Image from "next/image";
import React, { ReactNode } from "react";

interface PlantFrameProps {
    imageUrl: string;
    imageAlt: string;
    width: number;
    height: number;
    children: ReactNode;
  }

const PlantFrame: React.FC<PlantFrameProps> = ({ imageUrl, imageAlt, width, height, children }) => {
  return (
    <div className="relative" style={{ width: `${width}px`, height: `${height}px` }}>
    <Image
      src={imageUrl}
      alt={imageAlt}
      layout="fill"
      objectFit="cover"
      className="z-10"
      priority
    />
    
    {/* Child component above the image */}
    <div className="absolute inset-0 z-20">
      {children}
    </div>
  </div>
  );
};

export default PlantFrame;
