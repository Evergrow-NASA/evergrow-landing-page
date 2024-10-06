import Header from "@/components/wrappers/Header";
import React from "react";

const Intro = () => {
  return (
    <div className="flex flex-col px-8 md:px-40 xl:px-60 py-20">
      <Header
        className="text-center xl:text-left"
        title="Sustainable Development Goals"
      />
      <p className="mt-8">
        <span className="evergrow-text">Evergrow</span> aligns with the
        Sustainable Development Goals (SDGs) by offering technological solutions
        to critical agricultural challenges. By integrating real-time satellite
        data and advanced technological tools,{" "}
        <span className="evergrow-text">Evergrow</span> helps farmers optimize
        their resources, improve productivity, manage water efficiently, and
        enhance their resilience to climate change. This holistic approach not
        only benefits individual farmers but also contributes to global efforts
        toward a sustainable and resilient agricultural future.
      </p>
    </div>
  );
};

export default Intro;
