import React from "react";
import Header from "../wrappers/Header";
import Image from "next/image";
import ObjectiveItem from "../ui/ObjectiveItem";

const Objectives = () => {
  return (
    <div id="objectives" className="flex flex-col py-[12%] w-full bg-primary-white text-primary-black gap-y-4 xl:gap-y-20 px-4">
      <div className="flex flex-col xl:flex-row justify-evenly items-center xl:gap-x-20 h-full">
        <div className="flex flex-col justify-center xl:justify-start items-center xl:items-start h-full xl:h-auto max-w-[28rem] mb-8 xl:mb-0">
          <h4 className="mb-5">Based on SDGs</h4>
          <Header className="mb-16" title="Our Objectives" />
          <div className="relative flex flex-col gap-y-8">
            <ObjectiveItem
              number={1}
              title="Food Security"
              description={`Provide <span class="font-bold">real-time</span> satellite data to help farmers boost productivity and ensure stable food supply.`}
            />
            <ObjectiveItem
              number={2}
              title="Water Efficiency"
              description={`Optimize water use through <span class="font-bold">precise climate data</span>, reducing waste and enhancing irrigation.`}
            />
            <div className="absolute top-[3.75rem] left-5">
              <svg
                className="hidden xl:block"
                width="1"
                height="110"
                viewBox="0 0 1 110"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0.5 0L0.500005 110"
                  stroke="#0C0C20"
                  strokeDasharray="4 4"
                />
              </svg>
            </div>
          </div>
        </div>
        <Image
          src="/images/Grandma.png"
          alt="Grandma"
          width={504}
          height={464}
        />
      </div>
      <div className="flex flex-col-reverse xl:flex-row justify-evenly items-center xl:gap-x-20 h-full">
        <Image
          src="/images/SateliteSpace.png"
          alt="Grandma"
          width={504}
          height={464}
        />
        <div className="flex flex-col justify-center xl:justify-start items-center xl:items-start h-full xl:h-auto max-w-[28rem] mb-8 xl:mb-0">
          <div className="relative flex flex-col gap-y-8">
            <ObjectiveItem
              number={3}
              title="Agricultural Innovation"
              description={`Integrate NASA satellite data into farming practices, promoting <span class="font-bold">sustainable and tech-driven agriculture</span>.`}
            />
            <ObjectiveItem
              number={4}
              title="Climate Resilience"
              description={`Equip farmers with real-time <span class="font-bold">weather insights</span> to adapt to changing climate conditions and protect crops.`}
            />
            <div className="absolute top-[3.75rem] left-5">
              <svg
                width="1"
                height="110"
                viewBox="0 0 1 110"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="hidden xl:block"
              >
                <path
                  d="M0.5 0L0.500005 110"
                  stroke="#0C0C20"
                  strokeDasharray="4 4"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Objectives;
