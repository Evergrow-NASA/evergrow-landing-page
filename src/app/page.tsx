"use client";

import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      const locomotiveScroll = new LocomotiveScroll();
    };
  }, []);

  return (
    <main className="flex flex-col gap-8">
      <div></div>
      <div></div>
      <div></div>
    </main>
  );
}
