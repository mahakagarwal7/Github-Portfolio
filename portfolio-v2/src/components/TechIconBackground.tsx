"use client";

import { motion } from "framer-motion";
import { 
  SiPython, SiReact, SiNextdotjs, SiTypescript, 
  SiDocker, SiPytorch, SiFastapi, SiPostgresql,
  SiJavascript, SiTailwindcss, SiNodedotjs, SiGit
} from "react-icons/si";
import { useEffect, useState } from "react";

const ICONS = [
  SiPython, SiReact, SiNextdotjs, SiTypescript, 
  SiDocker, SiPytorch, SiFastapi, SiPostgresql,
  SiJavascript, SiTailwindcss, SiNodedotjs, SiGit
];

export default function TechIconBackground() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden opacity-20">
      {[...Array(20)].map((_, i) => {
        const Icon = ICONS[i % ICONS.length];
        const size = Math.random() * 40 + 20;
        const left = Math.random() * 100;
        const top = Math.random() * 100;
        const duration = Math.random() * 20 + 10;
        const delay = Math.random() * -20;

        return (
          <motion.div
            key={i}
            className="absolute text-white/40"
            style={{ left: `${left}%`, top: `${top}%` }}
            animate={{
              y: [0, -100, 0],
              x: [0, Math.random() * 50 - 25, 0],
              rotate: [0, 360],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration,
              repeat: Infinity,
              delay,
              ease: "linear",
            }}
          >
            <Icon size={size} />
          </motion.div>
        );
      })}
    </div>
  );
}
