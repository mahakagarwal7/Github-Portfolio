"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { useAnimation } from "@/components/AnimationProvider";

export const useOptimizedAnimation = (
  callback: (context: gsap.Context) => void,
  dependencies: any[] = []
) => {
  const { reduceMotion, isLowEnd } = useAnimation();
  const contextRef = useRef<gsap.Context | null>(null);

  useLayoutEffect(() => {
    if (reduceMotion || isLowEnd) return;

    const ctx = gsap.context(callback);
    contextRef.current = ctx;

    return () => ctx.revert();
  }, [reduceMotion, isLowEnd, ...dependencies]);

  return contextRef;
};
