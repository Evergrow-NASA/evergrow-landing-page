"use client";

import CaseStudy from "@/components/sections/CaseStudy";
import Download from "@/components/sections/Download";
import Features from "@/components/sections/Features";
import Hero from "@/components/sections/Hero";
import Objectives from "@/components/sections/Objectives";
import Problem from "@/components/sections/Problem";
import Solution from "@/components/sections/Solution";
import Footer from "@/components/ui/Footer";
import Navbar from "@/components/ui/Navbar";
import { useEffect } from "react";

export default function Home() {
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
      <Navbar />
      <Hero />
      <Problem />
      <Solution />
      <Features />
      <Objectives />
      <CaseStudy />
      <Download />
      <Footer />
    </main>
  );
}
