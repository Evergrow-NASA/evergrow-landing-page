import Image from "next/image";
import React from "react";
import Button from "../buttons/Button";
import { useRouter } from "next/navigation";

function Hero() {
  const router = useRouter();

  const onClickDownload = () => {
    router.push("#download");
  };

  return (
    <div className="relative w-full h-screen">
      <div className="w-full h-screen absolute">
        <Image
          src="/images/CropFieldBlur.png"
          alt="hero"
          fill={true}
          priority={true}
          style={{ objectFit: "cover" }}
        />
      </div>
      <div
        data-scroll
        data-scroll-speed="0.7"
        className="relative flex flex-col xl:ml-40 top-1/3 xl:top-auto mt-0 xl:mt-[12%] mx-4 sm:mx-8 xl:mx-0 items-center xl:items-start text-center xl:text-left"
      >
        <p className="headline lg:w-[48rem]">Cultivate Success, Cut Risks</p>
        <p className="subheadline w-[40rem] mt-6 hidden lg:flex">
          With real-time satellite data, our mobile app helps you optimize
          decisions to reduce risks and boost crop yields.
        </p>
        <Button
          className="mt-12"
          text="Try It For Free"
          style="PRIMARY"
          onClick={onClickDownload}
        />
      </div>
    </div>
  );
}

export default Hero;
