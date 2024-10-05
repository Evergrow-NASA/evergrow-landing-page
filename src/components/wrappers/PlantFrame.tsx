import Image from "next/image";
import React, { ReactNode } from "react";

interface PlantFrameProps {
  imageUrl: string;
  imageAlt: string;
  width: number;
  children: ReactNode;
  invertVertical?: boolean;
  invertHorizontal?: boolean;
}

const PlantFrame: React.FC<PlantFrameProps> = ({
  imageUrl,
  imageAlt,
  width,
  children,
  invertVertical = false,
  invertHorizontal = false
}) => {
  return (
    <div className="relative" style={{ width: `${width}px` }}>
      <div className="flex justify-center items-center h-full">
        <Image
          src={imageUrl}
          alt={imageAlt}
          layout="responsive"
          width={width}
          height={0}
          objectFit="cover"
          className={`z-10 ${invertVertical ? 'scale-y-[-1]' : ''} ${invertHorizontal ? 'scale-x-[-1]' : ''}`}
        />
      </div>
      <div className="absolute inset-0 z-20 flex items-center justify-center">
        {children}
      </div>
    </div>
  );
};

export default PlantFrame;
