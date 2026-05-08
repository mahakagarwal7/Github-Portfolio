"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useState } from "react";

export default function ScrollIndicator() {
  const { scrollY } = useScroll();
  const [isVisible, setIsVisible] = useState(true);

  // Hide after scrolling past hero (approx 400px)
  const opacity = useTransform(scrollY, [0, 400], [1, 0]);

  const scrollToNext = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.button
      style={{ opacity }}
      onClick={scrollToNext}
      className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 cursor-pointer group"
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 1.2, duration: 0.8 }}
    >
      <div className="w-[26px] h-[42px] border-2 border-white/20 rounded-full flex justify-center p-2 group-hover:border-primary/50 transition-colors">
        <motion.div
          animate={{
            y: [0, 12, 0],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="w-1 h-2 bg-primary rounded-full shadow-[0_0_8px_var(--color-primary)]"
        />
      </div>
      <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-white/30 group-hover:text-primary/70 transition-colors">
        Scroll
      </span>
    </motion.button>
  );
}
