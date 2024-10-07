"use client";
import React, { useRef } from "react";
import Header from "../wrappers/Header";
import Image from "next/image";
import PhoneFrame from "../wrappers/PhoneFrame";
import AppleButton from "../buttons/AppleButton";
import GoogleButton from "../buttons/GoogleButton";
import { useGsapOpacity } from "@/hooks/useGsapOpacity";

const Solution = () => {
  const divRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useGsapOpacity(containerRef, divRef);

  return (
    <div
      id="solution"
      ref={containerRef}
      className="relative flex flex-col xl:flex-row justify-between w-full xl:h-screen xl:gap-x-20 2xl:gap-x-40 bg-primary-white text-primary-black px-[6%] 2xl:px-[12%] py-[20%] md:py-[10%] xl:py-0"
    >
      <div className="relative hidden xl:block mt-56">
        <div className="relative flex justify-center">
          <Image
            src="/images/PlantFrame.png"
            alt="plantframe"
            width={571}
            height={403}
            className="mr-10"
            data-scroll
            data-scroll-speed="-.1"
            loading="lazy"
          />
          <div className="absolute top-1/2 transform -translate-y-1/2 mt-8">
            <PhoneFrame
              media="/videos/AppShowcase.mp4"
              type="video"
              hasShadow
            />
          </div>
        </div>
      </div>
      <div ref={divRef} className="flex flex-col xl:mt-56">
        <h4 className="mb-5">Our Solution</h4>
        <Header title="Evergrow" />
        <div className="mt-14 w-auto mx-8 sm:mx-auto sm:w-[28rem]">
          <p className="mb-4">
            <span className="evergrow-text">Evergrow</span> is a mobile app
            offering real-time weather data for fast decisions on irrigation and
            crop protection. It’s <span className="font-bold">simple</span> and
            <span className="font-bold"> user-friendly</span>.
          </p>
          <p>
            By using satellite data,{" "}
            <span className="evergrow-text">Evergrow</span> empowers{" "}
            <span className="font-bold">farmers</span> to protect crops and
            ensure sustainability against climate uncertainty.
          </p>
        </div>
        <p className="hidden xl:block font-bold mt-6">Get the App</p>
        <div className="relative block xl:hidden pb-24 pt-28">
          <div className="relative flex justify-center">
            <Image
              src="/images/PlantFrame.png"
              alt="plantframe"
              width={315}
              height={278}
              className="mr-7"
              data-scroll
              data-scroll-speed="-.1"
              loading="lazy"
            />
            <div className="absolute top-1/2 transform -translate-y-1/2">
              <PhoneFrame
                media="/videos/AppShowcase.mp4"
                type="video"
                hasShadow
              />
            </div>
          </div>
        </div>
        <div className="flex flex-row mx-auto xl:mx-0 xl:justify-start gap-x-2 md:gap-x-10 mt-4">
          <GoogleButton />
          <AppleButton />
        </div>
      </div>
    </div>
  );
};

export default Solution;
