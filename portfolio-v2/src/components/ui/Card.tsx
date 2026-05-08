"use client";

import React from "react";
import { motion } from "framer-motion";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hoverEffect?: boolean;
  onClick?: () => void;
}

export const Card = ({ children, className = "", hoverEffect = true, onClick }: CardProps) => {
  return (
    <motion.div
      whileHover={hoverEffect ? { y: -8, scale: 1.02 } : {}}
      onClick={onClick}
      className={`glass ${hoverEffect ? "glass-hover" : ""} p-8 rounded-2xl ${className}`}
    >
      {children}
    </motion.div>
  );
};
