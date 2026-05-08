"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";

interface BeforeAfterSliderProps {
  beforeSrc: string;
  afterSrc: string;
  className?: string;
}

export default function BeforeAfterSlider({ beforeSrc, afterSrc, className = "" }: BeforeAfterSliderProps) {
  const [sliderPos, setSliderPos] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = (e: React.MouseEvent | React.TouchEvent) => {
    if (!containerRef.current) return;
    
    const rect = containerRef.current.getBoundingClientRect();
    const x = ("touches" in e ? e.touches[0].clientX : (e as React.MouseEvent).clientX) - rect.left;
    const pos = (x / rect.width) * 100;
    
    setSliderPos(Math.min(Math.max(pos, 0), 100));
  };

  return (
    <div 
      ref={containerRef}
      onMouseMove={handleMove}
      onTouchMove={handleMove}
      className={`relative overflow-hidden cursor-ew-resize select-none ${className}`}
    >
      {/* After Image (Background) */}
      <img src={afterSrc} alt="After" className="w-full h-full object-cover" />

      {/* Before Image (Overlay) */}
      <div 
        className="absolute inset-0 overflow-hidden"
        style={{ width: `${sliderPos}%` }}
      >
        <img 
          src={beforeSrc} 
          alt="Before" 
          className="absolute inset-0 w-full h-full object-cover"
          style={{ width: `${10000 / sliderPos}%` }} // Keeps image from scaling
        />
      </div>

      {/* Slider Line */}
      <div 
        className="absolute inset-y-0 w-0.5 bg-primary shadow-[0_0_10px_rgba(0,255,163,0.8)] z-10"
        style={{ left: `${sliderPos}%` }}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-surface border-2 border-primary rounded-full flex items-center justify-center">
          <div className="flex gap-1">
            <div className="w-1 h-1 bg-primary rounded-full" />
            <div className="w-1 h-1 bg-primary rounded-full" />
          </div>
        </div>
      </div>
    </div>
  );
}
