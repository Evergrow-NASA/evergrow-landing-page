import Image from "next/image";
import React from "react";
import Button from "../ui/Button";

function Hero() {
  return (
    <div className="relative w-full h-screen">
      <div className="w-full h-screen absolute">
        <Image
          src="/images/CropFieldBlur.png"
          alt="hero"
          fill={true}
          priority={true}
          style={{ objectFit: "cover" }}
        />
      </div>
      <div
        data-scroll
        data-scroll-speed="0.7"
        className="flex flex-col ml-40 mt-[12%] relative"
      >
        <p className="headline w-[52rem]">Lorem ipsum dolor sit amet.</p>
        <p className="subheadline w-[40rem] mt-6 mb-12">
          Tackle water-related challenges using NASA's advanced satellite data.
        </p>
        <Button text="Learn More" style="PRIMARY" />
      </div>
    </div>
  );
}

export default Hero;
