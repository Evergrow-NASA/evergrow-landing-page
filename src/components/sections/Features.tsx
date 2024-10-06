"use client";
import React, { useRef, useState } from "react";
import Header from "../wrappers/Header";
import Card from "../ui/Card";
import FeatureItem from "../ui/FeatureItem";
import Image from "next/image";

import gsap from "gsap";

const Features = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  const features = [
    {
      icon: "/icons/humidity.svg",
      title: "Real-Time Insights",
      description: `Provide accurate, real-time weather information using <span class="font-bold">NASA satellite data</span> to assist farmers in their daily decisions.`,
    },
    {
      icon: "/icons/calendar.svg",
      title: "Risk Reduction",
      description: `Risk reduction: <span class="font-bold">Minimize uncertainty</span> with <span class="font-bold">accurate</span> weather and soil data.`,
    },
    {
      icon: "/icons/rain.svg",
      title: "User-friendly access",
      description: `User-friendly access: Be accessible and <span class="font-bold">easy to use</span> for farmers with different levels of technological skills.`,
    },
    {
      icon: "/icons/earth.svg",
      title: "Yield Optimization",
      description: `Yield optimization: <span class="font-bold">Maximize</span> the potential of your crops with <span class="font-bold">data-driven</span> decisions.`,
    },
  ];

  const handleMouseEnter = (index: number) => {
    setHoveredIndex(index);
    gsap.to(cardRefs.current[index], { scale: 1.1, duration: 0.5 }); // Animate card on hover
  };

  const handleMouseLeave = (index: number) => {
    setHoveredIndex(null);
    gsap.to(cardRefs.current[index], { scale: 1, duration: 0.5 }); // Reset animation
  };

  return (
    <div
      id="features"
      className="relative flex flex-col xl:flex-row justify-evenly items-center w-full py-[12%] xl:py-0 xl:h-screen xl:gap-x-20 bg-primary-white text-primary-black"
    >
      <div className="flex flex-col py-10 justify-center xl:justify-start items-center xl:items-start h-full xl:h-auto max-w-[32.8rem]">
        <h4 className="mb-5">What We Offer</h4>
        <Header className="mb-16" title="Features and Benefits" />
        <div className="flex flex-col gap-y-2.5 mx-7 xl:mx-0 w-full">
        {features.map((feature, index) => (
            <div
              key={index}
              ref={(el) => {
                cardRefs.current[index] = el;
              }}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={() => handleMouseLeave(index)}
            >
             {hoveredIndex === index ? (
                <Card
                  icon={feature.icon}
                  title={feature.title}
                  description={feature.description}
                />
              ) : (
                <FeatureItem icon={feature.icon} title={feature.title} />
              )}
            </div>
          ))}
        </div>
      </div>
      <div className="relative hidden xl:block">
        <Image
          src="/images/PlantGrowingOnSoil.png"
          alt="PlantGrowingOnSoil"
          width={504}
          height={464}
        />
        <div className="absolute top-[12.2rem] left-[2.3rem]">
          <Image
            src="/images/Dirt.jpg"
            alt="Dirt"
            width={100}
            height={100}
            objectPosition="cover"
            className="rounded-full h-[6.6rem] w-[6.6rem]"
          />
        </div>
      </div>
      <div className="xl:hidden">
        <Image src="/images/Plant.png" alt="Plant" width={315} height={315} />
      </div>
    </div>
  );
};

export default Features;
