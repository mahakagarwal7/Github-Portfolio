"use client";

import React, { useEffect, useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const [readingTime, setReadingTime] = useState(0);

  useEffect(() => {
    const text = document.body.innerText;
    const wordsPerMinute = 200;
    const words = text.split(/\s+/g).length;
    const time = Math.ceil(words / wordsPerMinute);
    setReadingTime(time);
  }, []);

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-primary origin-left z-[1000]"
        style={{ scaleX }}
      />
      <div className="fixed bottom-10 right-10 z-[100] hidden md:block">
        <div className="bg-surface/80 backdrop-blur-md border border-white/10 px-4 py-2 rounded-full text-[10px] font-bold text-text-secondary uppercase tracking-[0.2em]">
          {readingTime} MIN READ
        </div>
      </div>
    </>
  );
}
