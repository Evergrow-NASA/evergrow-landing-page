import React, { useLayoutEffect, useRef } from "react";
import Header from "../ui/Header";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const ProblemContext = () => {
  const headerRef = useRef(null);
  const containerRef = useRef(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 80%",
        end: "bottom 20%",
        markers: true,
      },
    });

    timeline
      .from(headerRef.current, {
        opacity: 0,
        y: 50,
        duration: 2,
      })
      .to(
        headerRef.current,
        {
          opacity: 1,
          y: 0,
          duration: 2,
        },
        0
      );
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative flex flex-row justify-between w-full h-screen gap-x-10"
    >
      <div ref={headerRef} className="flex flex-col ml-[10%] mt-[12%]">
        <h4 className="mb-5">Lorem Ipsum</h4>
        <Header title="Problem Context" />
        <p className="mb-4 mt-14 w-[28rem]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <p className="w-[28rem]">
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
          nisi ut aliquip ex ea commodo consequat.
        </p>
        <a className="text-xl mt-6" href="#">
          Learn More
        </a>
      </div>
      <div>
        <Image
          src="/images/Weather.jpg"
          alt="crops"
          className="slope-crop h-screen"
          width={1000}
          height={500}
        />
      </div>
    </div>
  );
};

export default ProblemContext;
