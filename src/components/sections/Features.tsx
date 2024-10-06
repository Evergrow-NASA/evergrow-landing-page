import React from "react";
import Header from "../wrappers/Header";
import Card from "../ui/Card";
import FeatureItem from "../ui/FeatureItem";
import Image from "next/image";

const Features = () => {
  return (
    <div id="features" className="relative flex flex-col xl:flex-row justify-evenly items-center w-full py-[12%] xl:py-0 xl:h-screen xl:gap-x-20 bg-primary-white text-primary-black">
      <div className="flex flex-col py-10 justify-center xl:justify-start items-center xl:items-start h-full xl:h-auto max-w-[32.8rem]">
        <h4 className="mb-5">What We Offer</h4>
        <Header className="mb-16" title="Features and Benefits" />
        <div className="flex flex-col gap-y-2.5 mx-7 xl:mx-0">
          <Card
            icon="/icons/humidity.svg"
            title="Real-Time Insights"
            description={`Provide accurate, real-time weather information using <span class="font-bold">NASA satellite data</span> to assist farmers in their daily decisions.`}

          />
          <FeatureItem icon="/icons/calendar.svg" title="Risk Reduction" />
          <FeatureItem icon="/icons/rain.svg" title="User-friendly access" />
          <FeatureItem icon="/icons/earth.svg" title="Yield Optimization" />
        </div>
      </div>
      <div className="relative hidden xl:block">
        <Image
          src="/images/PlantGrowingOnSoil.png"
          alt="PlantGrowingOnSoil"
          width={504}
          height={464}
        />
        <div className="absolute top-[10.3rem] left-[0.3rem]">
          <Image src="/images/Dirt.png" alt="Dirt" width={100} height={100} objectPosition="cover" className="rounded-full h-28 w-28"/>
        </div>
      </div>
      <div className="xl:hidden">
        <Image src="/images/Plant.png" alt="Plant" width={315} height={315} />
      </div>
    </div>
  );
};

export default Features;
