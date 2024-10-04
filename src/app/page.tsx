"use client";

import Hero from "@/components/sections/Hero";
import ProblemContext from "@/components/sections/ProblemContext";
import { useEffect, useRef } from "react";

export default function Home() {
  useEffect(() => {
    let locomotiveScroll: any;

    const initializeScroll = async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      locomotiveScroll = new LocomotiveScroll();
      console.log("LocomotiveScroll initialized:", locomotiveScroll);
    };

    initializeScroll();

    // Cleanup on component unmount
    return () => {
      if (locomotiveScroll) locomotiveScroll.destroy();
    };
  }, []);

  return (
    <main className="flex flex-col">
      <Hero />
      <ProblemContext />
    </main>
  );
}
