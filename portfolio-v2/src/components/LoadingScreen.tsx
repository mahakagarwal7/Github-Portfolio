"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function LoadingScreen({ onComplete }: { onComplete: () => void }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({
      onComplete: () => {
        gsap.to(containerRef.current, {
          opacity: 0,
          duration: 0.8,
          ease: "power2.inOut",
          onComplete
        });
      }
    });

    tl.to(textRef.current, {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: "power4.out",
    })
    .to(".loading-bar", {
      scaleX: 1,
      duration: 1.5,
      ease: "power2.inOut"
    })
    .to(containerRef.current, { delay: 0.5 });

    return () => { tl.kill(); };
  }, [onComplete]);

  return (
    <div 
      ref={containerRef}
      className="fixed inset-0 z-[1000] bg-[#0a0a0a] flex flex-col items-center justify-center p-6"
    >
      <div className="max-w-xs w-full">
        <div className="overflow-hidden mb-4">
          <h2 
            ref={textRef}
            className="text-white text-3xl font-black opacity-0 translate-y-full tracking-tighter"
          >
            MAHAK <span className="text-primary italic">AGARWAL</span>
          </h2>
        </div>
        
        {/* Modern Progress Bar */}
        <div className="w-full h-[2px] bg-white/5 relative rounded-full overflow-hidden">
          <div className="loading-bar absolute inset-0 bg-primary origin-left scale-x-0" />
        </div>
        
        <div className="mt-4 flex justify-between items-center font-mono text-[10px] text-white/20 uppercase tracking-[0.2em]">
          <span>INITIALIZING RESEARCH PROTOCOL</span>
          <span className="animate-pulse text-primary/50">OPERATIONAL</span>
        </div>
      </div>
    </div>
  );
}
