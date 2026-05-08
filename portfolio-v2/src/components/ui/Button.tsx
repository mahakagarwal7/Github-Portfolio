"use client";

import React from "react";
import { motion } from "framer-motion";

interface ButtonProps extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "onAnimationStart" | "onDrag" | "onDragEnd" | "onDragStart" | "style"> {
  variant?: "primary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
}

export const Button = ({ 
  variant = "primary", 
  size = "md", 
  children, 
  className = "", 
  ...props 
}: ButtonProps) => {
  const baseStyles = "relative inline-flex items-center justify-center font-bold tracking-tight rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary/50 disabled:opacity-50 disabled:pointer-events-none";
  
  const variants = {
    primary: "bg-primary text-bg hover:shadow-[0_0_20px_rgba(0,255,163,0.4)] hover:scale-[1.02]",
    outline: "border-2 border-primary text-primary bg-transparent hover:bg-primary/10 hover:scale-[1.02]",
    ghost: "text-text-secondary hover:text-primary hover:bg-white/5",
  };

  const sizes = {
    sm: "px-4 py-2 text-xs",
    md: "px-6 py-3 text-sm",
    lg: "px-8 py-4 text-base",
  };

  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </motion.button>
  );
};
