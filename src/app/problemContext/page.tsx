"use client";

import Hero from "@/components/sections/problemContext/Hero";
import Problematic from "@/components/sections/problemContext/Problematic";
import Sustainability from "@/components/sections/problemContext/Sustainability";
import AltNavbar from "@/components/ui/AltNavbar";
import React, { useEffect } from "react";

const ProblemContextPage = () => {
  useEffect(() => {
    let locomotiveScroll: any;

    const initializeScroll = async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      locomotiveScroll = new LocomotiveScroll();
    };

    initializeScroll();

    // Cleanup on component unmount
    return () => {
      if (locomotiveScroll) locomotiveScroll.destroy();
    };
  }, []);

  return (
    <main className="flex flex-col">
      <AltNavbar />
      <Hero />
      <Problematic />
      <Sustainability />
    </main>
  );
};

export default ProblemContextPage;
