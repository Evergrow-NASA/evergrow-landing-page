import React from "react";
import Header from "../wrappers/Header";
import PhoneFrame from "../wrappers/PhoneFrame";
import Image from "next/image";
import PlantFrame from "../wrappers/PlantFrame";

const Solution = () => {
  return (
    <div className="rrelative flex flex-col xl:flex-row justify-between w-full h-screen xl:gap-x-40 bg-neutral-white text-primary-black px-[14%] 2xl:px-[18%]">
      <div className="hidden xl:block mt-[12%]">
        <PlantFrame imageUrl="/images/PlantNoBg.png" imageAlt="Plant Frame" width={600} height={400}>
          <PhoneFrame media="/images/VideoScreen.png" type="image" />
        </PlantFrame>
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
