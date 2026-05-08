"use client";

import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const followerRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(/iPhone|iPad|iPod|Android/i.test(navigator.userAgent));

    if (isMobile) return;

    const moveCursor = (e: MouseEvent) => {
      gsap.to(cursorRef.current, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.1,
      });
      gsap.to(followerRef.current, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.3,
      });
    };

    const handleHover = () => {
      gsap.to(cursorRef.current, { scale: 2, duration: 0.3 });
      gsap.to(followerRef.current, { scale: 1.5, opacity: 0.3, duration: 0.3 });
    };

    const handleUnhover = () => {
      gsap.to(cursorRef.current, { scale: 1, duration: 0.3 });
      gsap.to(followerRef.current, { scale: 1, opacity: 0.6, duration: 0.3 });
    };

    window.addEventListener("mousemove", moveCursor);
    
    const clickables = document.querySelectorAll("a, button, .cursor-pointer");
    clickables.forEach((el) => {
      el.addEventListener("mouseenter", handleHover);
      el.addEventListener("mouseleave", handleUnhover);
    });

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      clickables.forEach((el) => {
        el.removeEventListener("mouseenter", handleHover);
        el.removeEventListener("mouseleave", handleUnhover);
      });
    };
  }, [isMobile]);

  if (isMobile) return null;

  return (
    <>
      <div
        ref={cursorRef}
        className="fixed top-0 left-0 w-4 h-4 bg-primary rounded-full pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2"
      />
      <div
        ref={followerRef}
        className="fixed top-0 left-0 w-8 h-8 border border-primary rounded-full pointer-events-none z-[9998] opacity-60 -translate-x-1/2 -translate-y-1/2"
      />
    </>
  );
}
