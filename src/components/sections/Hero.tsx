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
        className="relative flex flex-col xl:ml-40 top-40 sm:top-1/3 xl:top-auto mt-0 xl:mt-[12%] mx-4 sm:mx-8 xl:mx-0 items-center xl:items-start text-center xl:text-left"
      >
        <p className="headline lg:w-[52rem]">Lorem ipsum dolor sit amet.</p>
        <p className="subheadline w-[40rem] mt-6 hidden lg:flex">
          Tackle water-related challenges using NASA's advanced satellite data.
        </p>
        <Button className="mt-12" text="Learn More" style="PRIMARY" />
      </div>
    </div>
  );
}

export default Hero;
