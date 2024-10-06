import React from "react";
import Header from "../wrappers/Header";
import PhoneFrame from "../wrappers/PhoneFrame";
import GoogleButton from "../buttons/GoogleButton";
import AppleButton from "../buttons/AppleButton";

const Download = () => {
  return (
    <div id="download" className="relative w-full h-screen astronaut-bg">
      <div className="flex flex-col xl:flex-row justify-evenly items-center xl:gap-x-20 h-full">
        <div className="grid xl:grid-cols-2 gap-x-10 h-full">
          <PhoneFrame
            className="place-content-center hidden xl:block xl:mb-20"
            type={"image"}
            media="/images/VideoScreen.png"
          />
          <PhoneFrame
            className="place-content-center xl:mt-60"
            type={"image"}
            media="/images/VideoScreen.png"
          />
        </div>
        <div className="flex flex-col justify-start items-center xl:items-start h-full xl:h-auto max-w-[28rem]">
          <h4 className="mb-5">What are you waiting for?</h4>
          <Header className="mb-16" title="Try It Yourself" />
          <p className="mb-4 mx-4 md:mx-0">
            Experience the power of <span className="evergrow-text">Evergrow</span>’s real-time data—get started in
            seconds!
          </p>
          <p className="hidden xl:block font-bold mt-6">Get the App</p>
          <div className="flex flex-row mx-auto xl:mx-0 xl:justify-start gap-x-2 md:gap-x-10 mt-2">
            <GoogleButton />
            <AppleButton />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Download;
