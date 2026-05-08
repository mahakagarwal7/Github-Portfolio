"use client";

import { motion } from "framer-motion";
import { Cpu, Code, Globe, Database, Terminal, Layers } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="relative min-h-screen flex items-center py-20 px-8 md:px-12 lg:px-24 max-w-7xl mx-auto w-full">
      <div className="relative z-10 w-full flex justify-between items-center">
        
        {/* Left Side: Text */}
        <div className="max-w-2xl">
          <motion.h1 
            className="relative text-5xl md:text-7xl font-black mb-12 text-white"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <span className="tags h1-tag-top text-[#4d4d4e] font-normal text-lg absolute -top-8 -left-4">&lt;h1&gt;</span>
          About <span className="text-[#00ffa3]">Me</span>
          <span className="tags h1-tag-bottom text-[#4d4d4e] font-normal text-lg absolute -bottom-8 -left-4">&lt;h1/&gt;</span>
        </motion.h1>
        
        <div className="gap-6 flex flex-col font-light text-gray-300 text-lg tracking-wide leading-relaxed">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            I’m a DevOps and Full Stack Engineer with over 2 years of experience, specializing in 
            automating workflows, optimizing CI/CD pipelines, and deploying intelligent systems.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            I'm a problem solver with high attention to detail. 
            Fan of MMA, outdoor activities, TV series and recently, research-oriented AI Systems.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Interested in the entire frontend/backend spectrum and working on ambitious projects with 
            positive people.
          </motion.p>
        </div>
        </div>

      {/* 3D Floating Icons Decoration - Right Side */}
      <div className="hidden lg:flex absolute right-16 top-1/2 -translate-y-1/2 w-1/2 h-[600px] items-center justify-center pointer-events-none">
        <div className="relative w-full h-full">
          {[
            { Icon: Cpu, color: "#fd2155", delay: 0, x: "20%", y: "20%" },
            { Icon: Code, color: "#00ffa3", delay: 1, x: "70%", y: "30%" },
            { Icon: Globe, color: "#4facfe", delay: 2, x: "40%", y: "50%" },
            { Icon: Database, color: "#ffb86c", delay: 0.5, x: "80%", y: "70%" },
            { Icon: Terminal, color: "#a18cd1", delay: 1.5, x: "30%", y: "80%" },
            { Icon: Layers, color: "#fbd786", delay: 2.5, x: "60%", y: "15%" },
          ].map((item, idx) => (
            <motion.div
              key={idx}
              className="absolute drop-shadow-[0_0_15px_rgba(255,255,255,0.1)]"
              style={{ left: item.x, top: item.y }}
              animate={{ 
                y: ["-20px", "20px", "-20px"],
                x: ["-10px", "10px", "-10px"],
                rotate: [0, 10, -10, 0]
              }}
              transition={{ 
                duration: 6 + (idx % 3), 
                repeat: Infinity, 
                ease: "easeInOut",
                delay: item.delay
              }}
            >
              <item.Icon size={64 + (idx * 8)} color={item.color} strokeWidth={1} className="opacity-40" />
            </motion.div>
          ))}
          {/* Central connecting glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-[#00ffa3] rounded-full mix-blend-screen filter blur-[100px] opacity-10 animate-pulse" />
        </div>
      </div>
      </div>
    </section>
  );
}
