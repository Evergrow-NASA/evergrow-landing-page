import React from "react";
import Header from "../wrappers/Header";
import Image from "next/image";
import PlantFrame from "../wrappers/PlantFrame";
import PhoneFrame from "../wrappers/PhoneFrame";
import AppleButton from "../buttons/AppleButton";
import GoogleButton from "../buttons/GoogleButton";

const Solution = () => {
  return (
    <div
      id="solution"
      className="relative flex flex-col xl:flex-row justify-between w-full xl:h-screen xl:gap-x-20 2xl:gap-x-40 bg-primary-white text-primary-black px-[6%] 2xl:px-[12%] py-[20%] md:py-[10%] xl:py-0"
    >
      <div className="relative hidden xl:block mt-56">
        <div className="absolute inset-0 flex justify-center mt-8 z-0">
          <div className="leaf-crop-left bg-secondary-green h-[335px] w-[365px]"></div>
        </div>
        <div className="relative flex justify-center items-center">
          <PlantFrame
            imageUrl="/images/PlantNoBg.png"
            imageAlt="Plant Frame"
            width={580}
            invertHorizontal={true}
          >
            <PhoneFrame
              media="/images/VideoScreen.png"
              type="image"
              hasShadow
            />
          </PlantFrame>
        </div>
      </div>
      <div className="flex flex-col xl:mt-56">
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
            By using satellite data, <span className="evergrow-text">Evergrow</span> empowers <span className="font-bold">farmers</span> to protect crops
            and ensure sustainability against climate uncertainty.
          </p>
        </div>
        <p className="hidden xl:block font-bold mt-6">Get the App</p>
        <div className="relative block xl:hidden pb-24 pt-28">
          <div className="absolute inset-0 flex justify-center items-center z-0">
            <div className="leaf-crop-left bg-secondary-green w-[251px] h-[231px]"></div>
          </div>
          <div className="relative flex justify-center items-center">
            <PlantFrame
              imageUrl="/images/PlantNoBg.png"
              imageAlt="Plant Frame"
              width={315}
              invertHorizontal={true}
            >
              <PhoneFrame
                media="/images/VideoScreen.png"
                type="image"
                hasShadow
              />
            </PlantFrame>
          </div>
        </div>
        <div className="flex flex-row mx-auto xl:mx-0 xl:justify-start gap-x-2 md:gap-x-10 mt-2">
          <GoogleButton />
          <AppleButton />
        </div>
      </div>
    </div>
  );
};

export default Solution;
