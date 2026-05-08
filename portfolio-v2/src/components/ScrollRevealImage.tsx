"use client";

import React from "react";
import { motion } from "framer-motion";
import { useLazyLoad } from "@/hooks/useLazyLoad";

interface ScrollRevealImageProps {
  src: string;
  alt: string;
  className?: string;
  type?: "mask" | "wipe" | "expand";
}

export default function ScrollRevealImage({ 
  src, 
  alt, 
  className = "", 
  type = "expand" 
}: ScrollRevealImageProps) {
  const [ref, isVisible] = useLazyLoad({ threshold: 0.2, once: true });

  const variants: any = {
    expand: {
      hidden: { scale: 0.8, opacity: 0 },
      visible: { scale: 1, opacity: 1, transition: { duration: 0.8, ease: "easeOut" } }
    },
    mask: {
      hidden: { clipPath: "circle(0% at 50% 50%)" },
      visible: { clipPath: "circle(100% at 50% 50%)", transition: { duration: 1, ease: "easeInOut" } }
    },
    wipe: {
      hidden: { clipPath: "polygon(0 0, 0 0, 0 100%, 0% 100%)" },
      visible: { clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)", transition: { duration: 1.2, ease: "circOut" } }
    }
  };

  return (
    <div ref={ref} className={`relative overflow-hidden ${className}`}>
      {/* Skeleton / Placeholder */}
      <div className={`absolute inset-0 bg-white/5 animate-pulse ${isVisible ? "hidden" : "block"}`} />
      
      {isVisible && (
        <motion.img
          src={src}
          alt={alt}
          initial="hidden"
          animate="visible"
          variants={variants[type]}
          className="w-full h-full object-cover"
          loading="lazy"
        />
      )}
    </div>
  );
}
