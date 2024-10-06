"use client";
import Hero from "@/components/sections/objectives/Hero";
import Intro from "@/components/sections/objectives/Intro";
import SDGs from "@/components/sections/objectives/SDGs";
import AltNavbar from "@/components/ui/AltNavbar";
import Footer from "@/components/ui/Footer";
import React, { useEffect } from "react";

const ObjectivesPage = () => {
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
      <Intro />
      <SDGs />
      <Footer />
    </main>
  );
};

export default ObjectivesPage;
