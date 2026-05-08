"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useAnimation } from "@/components/AnimationProvider";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export const useScrollSnap = () => {
  const { scrollSnap, reduceMotion } = useAnimation();

  useEffect(() => {
    if (!scrollSnap || reduceMotion || window.innerWidth < 1024) return;

    const sections = gsap.utils.toArray("section");
    
    const snapTrigger = ScrollTrigger.create({
      start: 0,
      end: "max",
      snap: {
        snapTo: 1 / (sections.length - 1),
        duration: { min: 0.5, max: 0.8 },
        delay: 0.1,
        ease: "power2.inOut",
      },
    });

    return () => snapTrigger.kill();
  }, [scrollSnap, reduceMotion]);
};
