import Image from "next/image";
import React from "react";

interface PhoneFrameProps {
  type: "video" | "image";
  media: string; 
}

const PhoneFrame: React.FC<PhoneFrameProps> = ({ type, media }) => {
  return (
    <div className="relative phone-container">
      <Image
        src="/images/Phone.png"
        alt="phone"
        className="phone-frame"
        width={255}
        height={500}
      />

      <div className="absolute top-[4px] left-[6px] phone-screen-container">
        {type === "image" ? (
          <img src={media} alt="phone screen content" className="phone-screen" />
        ) : (
          <video src={media} className="phone-screen" autoPlay loop muted />
        )}
      </div>
    </div>
  );
};

export default PhoneFrame;
