"use client";

import React, { useEffect, useState, useRef } from "react";
import { motion, useSpring, useTransform, animate } from "framer-motion";
import { useInView } from "framer-motion";

/**
 * AnimatedCounter
 */
export const AnimatedCounter = ({ target, duration = 2, suffix = "" }: { target: number, duration?: number, suffix?: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      const controls = animate(0, target, {
        duration,
        onUpdate: (value) => setCount(Math.floor(value)),
        ease: "easeOut"
      });
      return () => controls.stop();
    }
  }, [target, isInView, duration]);

  return <span ref={ref}>{count}{suffix}</span>;
};

/**
 * ProgressCircle
 */
export const ProgressCircle = ({ percentage, label }: { percentage: number, label: string }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [offset, setOffset] = useState(251.2); // Circumference for r=40

  useEffect(() => {
    if (isInView) {
      const targetOffset = 251.2 - (251.2 * percentage) / 100;
      const controls = animate(251.2, targetOffset, {
        duration: 1.5,
        onUpdate: (value) => setOffset(value),
        ease: "circOut"
      });
      return () => controls.stop();
    }
  }, [percentage, isInView]);

  return (
    <div ref={ref} className="flex flex-col items-center gap-4">
      <div className="relative w-24 h-24">
        <svg className="w-full h-full -rotate-90">
          <circle cx="48" cy="48" r="40" stroke="currentColor" strokeWidth="8" fill="transparent" className="text-white/5" />
          <circle 
            cx="48" cy="48" r="40" stroke="currentColor" strokeWidth="8" fill="transparent" 
            strokeDasharray="251.2" strokeDashoffset={offset}
            className="text-primary transition-colors duration-500"
            style={{ strokeLinecap: "round" }}
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center font-mono font-bold text-lg">
          {percentage}%
        </div>
      </div>
      <span className="text-[10px] text-text-secondary uppercase tracking-[0.3em] font-bold">{label}</span>
    </div>
  );
};

/**
 * AchievementCard
 */
export const AchievementCard = ({ icon: Icon, title, value, sub }: { icon: any, title: string, value: string, sub: string }) => {
  return (
    <motion.div
      whileHover={{ rotateY: 15, rotateX: -5, scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="p-8 bg-surface/30 backdrop-blur-xl border border-white/5 rounded-3xl group relative overflow-hidden"
    >
      <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
      <div className="text-primary text-3xl mb-6 group-hover:scale-110 transition-transform inline-block">
        <Icon />
      </div>
      <h3 className="text-[10px] text-text-secondary uppercase tracking-[0.3em] font-bold mb-2">{title}</h3>
      <div className="text-3xl font-bold mb-1 text-white">{value}</div>
      <div className="text-sm text-text-secondary">{sub}</div>
    </motion.div>
  );
};
