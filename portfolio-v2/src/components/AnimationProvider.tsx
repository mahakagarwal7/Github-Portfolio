"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

interface AnimationContextType {
  reduceMotion: boolean;
  scrollSnap: boolean;
  setScrollSnap: (val: boolean) => void;
  isLowEnd: boolean;
}

const AnimationContext = createContext<AnimationContextType | undefined>(undefined);

export const AnimationProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [reduceMotion, setReduceMotion] = useState(false);
  const [scrollSnap, setScrollSnap] = useState(false);
  const [isLowEnd, setIsLowEnd] = useState(false);

  useEffect(() => {
    // Check for prefers-reduced-motion
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduceMotion(mediaQuery.matches);
    
    const handleChange = () => setReduceMotion(mediaQuery.matches);
    mediaQuery.addEventListener("change", handleChange);

    // Simple low-end device detection
    const cores = navigator.hardwareConcurrency || 4;
    const memory = (navigator as any).deviceMemory || 4;
    if (cores < 4 || memory < 4) setIsLowEnd(true);

    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  return (
    <AnimationContext.Provider value={{ reduceMotion, scrollSnap, setScrollSnap, isLowEnd }}>
      {children}
    </AnimationContext.Provider>
  );
};

export const useAnimation = () => {
  const context = useContext(AnimationContext);
  if (!context) throw new Error("useAnimation must be used within AnimationProvider");
  return context;
};
