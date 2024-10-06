import Image from "next/image";
import React from "react";

function Hero() {
  return (
    <div className="relative w-full h-screen">
      <div className="w-full h-screen absolute">
        <Image
          src="/images/SdgBg.jpg"
          alt="hero"
          fill={true}
          priority={true}
          style={{ objectFit: "cover", opacity: 0.15 }}
        />
      </div>
      <div
        data-scroll
        data-scroll-speed="0.7"
        className="relative flex flex-col xl:ml-40 top-1/3 xl:top-auto mt-0 xl:mt-[20%] mx-4 sm:mx-8 xl:mx-0 items-center xl:items-start text-center xl:text-left"
      >
        <p className="headline lg:w-[48rem]">Our Objectives</p>
        <p className="subheadline w-[40rem] mt-6 hidden lg:flex">
          Empowering the SDGs Through Our Technology
        </p>
      </div>
    </div>
  );
}

export default Hero;
