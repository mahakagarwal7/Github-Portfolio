"use client";

import { motion } from "framer-motion";
import { 
  SiPython, SiPytorch, SiFastapi, SiReact, 
  SiTypescript, SiDocker, SiPostgresql, SiGit 
} from "react-icons/si";

const icons = [
  { icon: SiPython, x: "10%", y: "20%", delay: 0 },
  { icon: SiPytorch, x: "85%", y: "15%", delay: 2 },
  { icon: SiFastapi, x: "75%", y: "70%", delay: 4 },
  { icon: SiReact, x: "15%", y: "80%", delay: 1 },
  { icon: SiTypescript, x: "25%", y: "40%", delay: 3 },
  { icon: SiDocker, x: "80%", y: "40%", delay: 5 },
  { icon: SiPostgresql, x: "40%", y: "85%", delay: 2 },
  { icon: SiGit, x: "60%", y: "10%", delay: 6 },
];

export default function FloatingIcons() {
  return (
    <div className="fixed inset-0 pointer-events-none z-[-1] hidden lg:block overflow-hidden">
      {icons.map((item, idx) => (
        <motion.div
          key={idx}
          initial={{ opacity: 0 }}
          animate={{ 
            opacity: [0.03, 0.08, 0.03],
            x: ["-10px", "10px", "-10px"],
            y: ["-10px", "10px", "-10px"],
            rotate: [0, 5, 0]
          }}
          transition={{
            duration: 10 + Math.random() * 5,
            repeat: Infinity,
            delay: item.delay,
            ease: "easeInOut"
          }}
          style={{
            position: "absolute",
            left: item.x,
            top: item.y,
            fontSize: "40px",
            color: "white"
          }}
        >
          <item.icon />
        </motion.div>
      ))}
    </div>
  );
}
