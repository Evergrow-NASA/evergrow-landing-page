import React, { useRef } from "react";
import Header from "../wrappers/Header";
import Image from "next/image";
import { useGsapOpacity } from "@/hooks/useGsapOpacity";

const Problem = () => {
  const divRef = useRef(null);
  const containerRef = useRef(null);

  useGsapOpacity(containerRef, divRef);

  return (
    <div
      ref={containerRef}
      className="relative flex flex-col xl:flex-row justify-between w-full h-screen xl:gap-x-40"
      id="context"
    >
      <div
        ref={divRef}
        className="flex flex-col py-10 sm:py-0 xl:ml-[6%] 3xl:ml-[4%] xl:mt-[12%] justify-center xl:justify-start items-center xl:items-start h-full xl:h-auto"
      >
        <h4 className="mb-5">Problem Context</h4>
        <Header title="Chaotic Climate" />
        <div className="mt-14 w-auto mx-8 sm:mx-auto sm:w-[30rem]">
          <p className="mb-4">
            Farmers face increasing climatic instability that threatens their
            crops and livelihoods. Extreme droughts and rains hamper
            agricultural production.
          </p>
          <p>
            Between 2008 and 2018,
            <span className="font-bold"> 26% of climate disaster damage </span>
            affected agriculture, with drought responsible for more than
            <span className="font-bold"> 80% of those losses </span> (FAO,
            2021).
          </p>
        </div>
        <a className="mx-auto xl:mx-0 text-xl mt-6" href="/problemContext">
          Learn More
        </a>
      </div>
      <div>
        <Image
          src="/images/Weather.webp"
          alt="crops"
          className="slope-crop"
          loading="lazy"
          width={1000}
          height={500}
        />
      </div>
    </div>
  );
};

export default Problem;
