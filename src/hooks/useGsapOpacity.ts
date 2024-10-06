import { useLayoutEffect, RefObject } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const useGsapOpacity = (
  triggerRef: RefObject<HTMLElement>,
  targetRef: RefObject<HTMLElement>,
  start: string = "top 80%",
  end: string = "bottom 20%",
  toggleActions: string = "restart none restart none"
): void => {
  useLayoutEffect(() => {
    if (!triggerRef.current || !targetRef.current) return;

    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: triggerRef.current,
        start,
        end,
        toggleActions,
        // markers: true, // Optional: use this for debugging
      },
    });

    timeline
      .from(targetRef.current, {
        opacity: 0,
        y: 40,
        duration: 1.5,
      })
      .to(
        targetRef.current,
        {
          opacity: 1,
          y: 0,
          duration: 1.5,
        },
        0
      );
  }, [triggerRef, targetRef, start, end, toggleActions]);
};
