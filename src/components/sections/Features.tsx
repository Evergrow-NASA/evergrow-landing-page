import React from "react";
import Header from "../wrappers/Header";
import Card from "../ui/Card";
import FeatureItem from "../ui/FeatureItem";
import Image from "next/image";

const Features = () => {
  return (
    <div className="relative flex flex-col xl:flex-row justify-evenly items-center w-full py-[12%] xl:py-0 xl:h-screen xl:gap-x-20 bg-primary-white text-primary-black">
      <div className="flex flex-col py-10 justify-center xl:justify-start items-center xl:items-start h-full xl:h-auto max-w-[32.8rem]">
        <h4 className="mb-5">Lorem Ipsum</h4>
        <Header className="mb-16" title="Features and Benefits" />
        <div className="flex flex-col gap-y-2.5 mx-7 xl:mx-0">
          <Card
            icon="/icons/humidity.svg"
            title="Feature 1"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          />
          <FeatureItem icon="/icons/calendar.svg" title="Feature 2" />
          <FeatureItem icon="/icons/rain.svg" title="Feature 3" />
          <FeatureItem icon="/icons/earth.svg" title="Feature 4" />
        </div>
      </div>
      <div className="hidden xl:block">
        <Image
          src="/images/PlantGrowingOnSoil.png"
          alt="PlantGrowingOnSoil"
          width={504}
          height={464}
        />
      </div>
      <div className="block xl:hidden">
        <Image src="/images/Plant.png" alt="Plant" width={315} height={315} />
      </div>
    </div>
  );
};

export default Features;
