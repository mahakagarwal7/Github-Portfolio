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
          duration: 1,
          ease: "power2.inOut",
          onComplete
        });
      }
    });

    tl.to(textRef.current, {
      opacity: 1,
      y: 0,
      duration: 1.5,
      ease: "power4.out",
    })
    .to(".pacman-dot", {
      opacity: 1,
      stagger: 0.2,
      duration: 0.5
    })
    .to(containerRef.current, { delay: 1 });

    return () => { tl.kill(); };
  }, [onComplete]);

  return (
    <div 
      ref={containerRef}
      className="fixed inset-0 z-[1000] bg-[#1d1d1d] flex flex-col items-center justify-center"
    >
      <div className="max-w-md w-full text-center">
        <h2 
          ref={textRef}
          className="text-white text-5xl font-black mb-12 opacity-0 translate-y-8 tracking-tighter"
        >
          MAHAK<span className="text-[#00ffa3]">.OS</span>
        </h2>
        
        {/* Simple CSS Pacman-style Loader */}
        <div className="flex justify-center items-center gap-4">
          <div className="w-8 h-8 border-4 border-[#00ffa3] border-r-transparent rounded-full animate-spin" />
          <div className="flex gap-2">
            {[1, 2, 3].map((i) => (
              <div key={i} className="pacman-dot w-2 h-2 bg-[#00ffa3] rounded-full opacity-0" />
            ))}
          </div>
        </div>
        
        <p className="mt-8 text-[10px] text-white/30 font-mono tracking-[0.5em] uppercase">
          Initializing Systems
        </p>
      </div>
    </div>
  );
}
