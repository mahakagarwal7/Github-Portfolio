"use client";

import React from "react";
import { useParallax } from "@/hooks/useParallax";

interface ParallaxLayerProps {
  children?: React.ReactNode;
  speed?: number;
  className?: string;
}

export default function ParallaxLayer({ children, speed = 0.2, className = "" }: ParallaxLayerProps) {
  const ref = useParallax(speed);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
