import React from "react";
import Header from "../wrappers/Header";
import Image from "next/image";
import PlantFrame from "../wrappers/PlantFrame";
import PhoneFrame from "../wrappers/PhoneFrame";

const Solution = () => {
  return (
    <div className="relative flex flex-col xl:flex-row justify-between w-full h-screen xl:gap-x-20 2xl:gap-x-40 bg-neutral-white text-primary-black px-[6%] 2xl:px-[12%]">
      <div className="relative hidden xl:block mt-[12%]">
        <div className="absolute inset-0 flex justify-center items-start mt-12 z-0">
          <div className="leaf-crop-left bg-secondary-green h-[335px] w-[365px]"></div>
        </div>
        <div className="relative flex justify-center items-center">
          <PlantFrame
            imageUrl="/images/PlantNoBg.png"
            imageAlt="Plant Frame"
            width={600}
            invertHorizontal={true}
          >
            <PhoneFrame media="/images/VideoScreen.png" type="image" />
          </PlantFrame>
        </div>
      </div>
      <div className="flex flex-col mt-[12%]">
        <h4 className="mb-5">Lorem Ipsum</h4>
        <Header title="Solution Context" />
        <div className="mt-14 w-auto mx-8 sm:mx-auto sm:w-[28rem]">
          <p className="mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <p>
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat.
          </p>
        </div>
        <p className="hidden xl:block font-bold mt-6">Get the App</p>
        <div className="flex flex-row mx-auto xl:mx-0 xl:justify-start gap-x-10 mt-2">
          <Image
            src="/images/AppleStore.png"
            alt="apple-store"
            width={150}
            height={50}
          />
          <Image
            src="/images/GooglePlay.png"
            alt="google-play"
            width={150}
            height={50}
          />
        </div>
      </div>
    </div>
  );
};

export default Solution;
