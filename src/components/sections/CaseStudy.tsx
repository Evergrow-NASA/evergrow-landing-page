"use client";
import React, { useLayoutEffect, useRef } from "react";
import Header from "../wrappers/Header";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const CaseStudy = () => {
  const headerRef = useRef(null);
  const containerRef = useRef(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "restart none restart none",
        // markers: true,
      },
    });

    timeline
      .from(headerRef.current, {
        opacity: 0,
        y: 40,
        duration: 1.5,
      })
      .to(
        headerRef.current,
        {
          opacity: 1,
          y: 0,
          duration: 1.5,
        },
        0
      );
  }, []);

  return (
    <div
      ref={containerRef}
      className="flex flex-col xl:flex-row justify-between w-full xl:h-screen xl:gap-x-40"
    >
      <div
        ref={headerRef}
        className="flex flex-col py-20 xl:py-0 xl:ml-[6%] 3xl:ml-[4%] xl:mt-[12%] justify-center xl:justify-start items-center xl:items-start h-full xl:h-auto"
      >
        <h4 className="mb-5">Case Study</h4>
        <Header title="Satellite Innovation" />
        <div className="mt-14 w-auto mx-8 sm:mx-auto sm:w-[30rem]">
          <p className="mb-4">
            The use of satellite technology in Peru, led by the UK Space Agency
            and in collaboration with Peru’s Ministry of Agricultural
            Development and Irrigation (MIDAGRI), improved accuracy in rice
            production by providing real-time data, optimizing resources and
            crop management.
          </p>
        </div>
        <a className="mx-auto xl:mx-0 text-xl mt-6" href="#">
          Continue Reading
        </a>
      </div>
      <div className="relative">
        <Image
          src="/images/DetectionField.png"
          alt="detection field"
          className="slope-crop hidden xl:block"
          width={1000}
          height={500}
        />
        <Image
          src="/images/Field.png"
          alt="detection"
          className="block xl:hidden crop-cover"
          width={1000}
          height={500}
        />
        <div className="absolute top-1/2 left-1/2 transform -translate-y-1/2 xl:-translate-y-0 -translate-x-1/2 xl:-translate-x-0 xl:left-[-6rem] xl:top-36">
          <Image
            src="/images/Satelite.png"
            alt="satellite"
            className="w-[319px] auto xl:w-[206px] xl:h-[207px]"
            width={206}
            height={207}
          />
        </div>
      </div>
    </div>
  );
};

export default CaseStudy;
