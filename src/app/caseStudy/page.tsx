"use client";

import Hero from "@/components/sections/caseStudies/Hero";
import CaseStudyRice from "@/components/sections/caseStudies/CaseStudyRice";
import CaseStudyAspargus from "@/components/sections/caseStudies/CaseStudyAsparagus";
import AltNavbar from "@/components/ui/AltNavbar";
import React, { useEffect } from "react";

const CaseStudyPage = () => {
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
      <CaseStudyRice />
      <CaseStudyAspargus />
    </main>
  );
};

export default CaseStudyPage;
