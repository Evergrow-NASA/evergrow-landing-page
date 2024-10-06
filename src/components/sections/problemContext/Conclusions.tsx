import Header from "@/components/wrappers/Header";
import React from "react";

const Conclusions = () => {
  return (
    <div className="flex flex-col px-8 md:px-40 xl:px-60 py-20 bg-primary-white text-primary-black">
      <Header className="text-center xl:text-left" title="Conclusions" />
      <p className="mt-8">
        <b>Climate change</b> has fundamentally altered <b>agriculture</b>,
        exposing farmers to increasingly complex <b>risks</b>. <b>Efficient</b>{" "}
        water management, rainfall forecasting and informed decision making have
        become crucial.
      </p>
      <p className="mt-8">
        Technologies such as <span className="evergrow-text">Evergrow</span> can
        make the difference between a crop failure and a more resilient{" "}
        <b>future</b> for agriculture.
      </p>
    </div>
  );
};

export default Conclusions;
