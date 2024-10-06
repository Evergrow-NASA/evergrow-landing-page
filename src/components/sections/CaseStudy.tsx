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
      className="relative flex flex-col xl:flex-row justify-between w-full h-screen xl:gap-x-20"
    >
      <div
        ref={headerRef}
        className="flex flex-col py-10 sm:py-0 xl:ml-[6%] 3xl:ml-[4%] xl:mt-[12%] justify-center xl:justify-start items-center xl:items-start h-full xl:h-auto"
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
      <div>
        <Image
          src="/images/DetectionField.png"
          alt="crops"
          className="slope-crop"
          width={1000}
          height={500}
        />
      </div>
    </div>
  );
};

export default CaseStudy;
