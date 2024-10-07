import Image from "next/image";
import React from "react";

function Hero() {
  return (
    <div className="relative w-full h-screen">
      <div className="w-full h-screen absolute">
        <Image
          src="/images/CaseStudies.png"
          alt="hero"
          fill={true}
          loading="lazy"
          style={{ objectFit: "cover", opacity: 0.7 }}
        />
      </div>
      <div
        data-scroll
        data-scroll-speed="0.7"
        className="relative flex flex-col xl:ml-40 top-1/3 xl:top-auto mt-0 xl:mt-[20%] mx-4 sm:mx-8 xl:mx-0 items-center xl:items-start text-center xl:text-left"
      >
        <p className="headline lg:w-[48rem]">Case Studies</p>
        <p className="subheadline w-[40rem] mt-6 hidden lg:flex">
          Discover how to tackle water-related challenges using advanced
          satellite data.{" "}
        </p>
      </div>
    </div>
  );
}

export default Hero;
