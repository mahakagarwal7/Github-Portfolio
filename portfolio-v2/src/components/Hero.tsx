"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FiArrowRight, FiDownload, FiMapPin, FiGlobe } from "react-icons/fi";
import { Container } from "./ui/Container";
import { Button } from "./ui/Button";
import { GREETING } from "@/data/portfolio";
import ScrollIndicator from "./ScrollIndicator";

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex flex-col items-center justify-center pt-20 pb-20 overflow-hidden z-10">
      <Container>
        <div className="flex flex-col items-center text-center space-y-8 max-w-3xl mx-auto">
          
          {/* Profile Photo Wrapper */}
          <div className="relative">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              whileHover={{ scale: 1.02 }}
              className="relative group"
            >
              {/* Status Ring */}
              <div className="status-ring" />
              
              {/* Pulsing Glow Border */}
              <div className="absolute inset-0 rounded-full bg-primary/20 blur-xl group-hover:bg-primary/40 transition-all duration-500 animate-pulse" />
              
              <div className="relative w-[140px] h-[140px] md:w-[200px] md:h-[200px] rounded-full border-4 border-primary p-1 shadow-[0_0_30px_rgba(0,255,163,0.3)] bg-bg overflow-hidden flex items-center justify-center">
                <Image
                  src="/images/mahak-portfolio.jpg"
                  alt="Mahak Agarwal"
                  fill
                  priority
                  className="object-cover rounded-full grayscale hover:grayscale-0 transition-all duration-700"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    const parent = target.parentElement;
                    if (parent) {
                      const initials = document.createElement('div');
                      initials.className = "text-4xl font-bold text-white";
                      initials.innerText = "MA";
                      parent.appendChild(initials);
                    }
                  }}
                />
              </div>
            </motion.div>

            {/* Availability Badge */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.5 }}
              className="absolute -bottom-6 left-1/2 -translate-x-1/2 whitespace-nowrap"
            >
              <div className="status-badge">
                <span className="status-dot" />
                SUMMER 2026 INTERNSHIPS
              </div>
            </motion.div>
          </div>

          {/* Name & Title */}
          <div className="space-y-4 pt-4">
            <motion.h1 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tighter text-white"
            >
              {GREETING.name}
            </motion.h1>
            
            <motion.p 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-lg md:text-xl font-medium text-text-secondary"
            >
              {GREETING.tagline || "AI Systems Engineer & Research-Oriented Builder"}
            </motion.p>

            {/* Location Badge */}
            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-[10px] md:text-xs font-bold tracking-[0.2em] text-white/60 uppercase"
            >
              <FiGlobe className="text-primary" />
              Bangalore, India
            </motion.div>
          </div>

          {/* Pitch Subheadline */}
          <motion.p 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-white/60 text-sm md:text-base max-w-2xl leading-relaxed"
          >
            {GREETING.subTitle || "Engineering high-performance AI systems and research-oriented architectures. Specializing in Reinforcement Learning and Scalable Infrastructure."}
          </motion.p>

          {/* CTAs */}
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
          >
            <Button 
              variant="primary" 
              size="lg" 
              className="gap-3 w-full sm:w-auto px-10 shadow-[0_0_30px_rgba(0,255,163,0.3)]"
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            >
              VIEW PROJECTS <FiArrowRight className="text-lg" />
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="gap-3 w-full sm:w-auto px-10 hover:bg-white/5"
              onClick={() => window.open(GREETING.resumeLink, '_blank')}
            >
              DOWNLOAD RESUME <FiDownload className="text-lg" />
            </Button>
          </motion.div>

        </div>
      </Container>
      <ScrollIndicator />
    </section>
  );
}
