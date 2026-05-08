"use client";

import { motion } from "framer-motion";

export default function SectionDivider() {
  return (
    <div className="w-full flex justify-center py-24 overflow-hidden">
      <motion.div
        initial={{ width: "0%", opacity: 0 }}
        whileInView={{ width: "80%", opacity: 1 }}
        exit={{ width: "0%", opacity: 0 }}
        viewport={{ once: false, amount: 0.5 }}
        transition={{ 
          duration: 0.8, 
          ease: [0.4, 0, 0.2, 1],
          opacity: { duration: 0.4 }
        }}
        className="h-[2px] bg-primary relative"
        style={{
          boxShadow: "0 0 12px #00ffa3, 0 0 4px #00ffa3",
          filter: "blur(0.5px)"
        }}
      >
        {/* Glow Spread */}
        <div className="absolute inset-0 blur-[8px] bg-primary opacity-50" />
      </motion.div>
    </div>
  );
}
