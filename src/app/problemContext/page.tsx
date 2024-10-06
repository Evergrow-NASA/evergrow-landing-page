"use client";

import Conclusions from "@/components/sections/problemContext/Conclusions";
import Hero from "@/components/sections/problemContext/Hero";
import Problematic from "@/components/sections/problemContext/Problematic";
import Technology from "@/components/sections/problemContext/Technology";
import AltNavbar from "@/components/ui/AltNavbar";
import Footer from "@/components/ui/Footer";
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
      <Technology/>
      <Conclusions />
      <Footer />
    </main>
  );
};

export default ProblemContextPage;
