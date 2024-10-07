import Image from "next/image";
import React from "react";

interface PhoneFrameProps {
  type: "video" | "image";
  media: string;
  hasShadow?: boolean;
  className?: string;
}

const PhoneFrame: React.FC<PhoneFrameProps> = ({
  type,
  media,
  hasShadow = false,
  className,
}) => {
  return (
    <div
      className={`relative phone-container ${
        hasShadow ? "phone-screen-shadow" : ""
      } ${className}`}
    >
      <Image
        src="/images/Phone.png"
        alt="phone"
        className="phone-frame"
        width={255}
        height={500}
        loading="lazy"
      />

      <div className="absolute top-1/2 transform -translate-y-1/2 ml-1.5 phone-screen-container">
        {type === "image" ? (
          <img
            src={media}
            alt="phone screen content"
            className="phone-screen"
          />
        ) : (
          <video src={media} className="phone-screen" autoPlay loop muted />
        )}
      </div>
    </div>
  );
};

export default PhoneFrame;
