"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

/**
 * useParallax
 * @param speed - Scroll speed multiplier. 
 *                Positive moves in scroll direction, Negative moves opposite (counter-scroll).
 *                0.2 = moves 20% slower than content.
 */
export const useParallax = (speed: number = 0.2) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || window.innerWidth < 768) return;

    const yMove = speed * 100;

    gsap.fromTo(el, 
      { y: 0 },
      {
        y: yMove,
        ease: "none",
        scrollTrigger: {
          trigger: el,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, [speed]);

  return ref;
};
