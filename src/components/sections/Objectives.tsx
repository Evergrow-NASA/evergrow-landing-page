import React from "react";
import Header from "../wrappers/Header";
import Image from "next/image";
import ObjectiveItem from "../ui/ObjectiveItem";

const Objectives = () => {
  return (
    <div className="flex flex-col py-[12%] xl:py-0 w-full xl:h-screen bg-primary-white text-primary-black">
      <div className="flex flex-col xl:flex-row justify-evenly items-center xl:gap-x-20 h-full">
        <div className="flex flex-col justify-center xl:justify-start items-center xl:items-start h-full xl:h-auto max-w-[32.8rem]">
          <h4 className="mb-5">Lorem Ipsum</h4>
          <Header className="mb-16" title="Our Objectives" />
          <div className="flex flex-col gap-y-8">
            <ObjectiveItem
              number={1}
              title="Real-time insights"
              description="Provide accurate, real-time weather information using NASA satellite data to assist farmers in their daily decisions."
            />
            <ObjectiveItem
              number={2}
              title="Swift decisions"
              description="Facilitate quick decisions on water management, crop protection and resource optimization."
            />
          </div>
        </div>
          <Image
            src="/images/Grandma.png"
            alt="Grandma"
            width={504}
            height={464}
          />
      </div>
    </div>
  );
};

export default Objectives;
