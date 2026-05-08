"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { GREETING } from "@/data/portfolio";
import { Container } from "./ui/Container";
import { Button } from "./ui/Button";
import { FiArrowRight, FiFileText } from "react-icons/fi";

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 pb-32 overflow-hidden bg-bg">
      {/* Cinematic Grid Floor */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
        <div 
          className="absolute bottom-0 left-0 right-0 h-[50vh] bg-[linear-gradient(to_right,#00ffa30a_1px,transparent_1px),linear-gradient(to_bottom,#00ffa30a_1px,transparent_1px)] bg-[size:60px_60px] [transform:perspective(1000px)_rotateX(60deg)_translateY(50px)_scale(2)] [mask-image:linear-gradient(to_top,black,transparent)] animate-[grid-scroll_20s_linear_infinite]" 
        />
      </div>

      <Container>
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto space-y-12">
          
          {/* Profile Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative"
          >
            <div className="w-40 h-40 md:w-56 md:h-56 rounded-full overflow-hidden border-4 border-primary/20 p-1 bg-surface ring-8 ring-primary/5 shadow-2xl relative z-10">
              <Image 
                src="/mahak.png"
                alt={GREETING.name}
                width={224}
                height={224}
                className="w-full h-full object-cover rounded-full"
                priority
              />
            </div>
            {/* Ambient Glow */}
            <div className="absolute inset-0 bg-primary/20 blur-[80px] rounded-full z-0 animate-pulse" />
          </motion.div>

          {/* Text Content */}
          <div className="space-y-6 relative z-10">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-5xl md:text-7xl font-black text-white tracking-tighter uppercase"
            >
              {GREETING.name}
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-xl md:text-2xl font-bold text-primary italic tracking-tight"
            >
              {GREETING.title}
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-text-secondary text-sm md:text-lg leading-relaxed max-w-3xl mx-auto uppercase font-bold tracking-wider"
            >
              {GREETING.summary}
            </motion.p>
          </div>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 items-center"
          >
            <Button 
              variant="primary" 
              size="lg" 
              className="gap-3 group px-8"
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            >
              VIEW PROJECTS <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="gap-3 px-8"
              onClick={() => window.open(GREETING.resumeLink, '_blank')}
            >
              RESUME <FiFileText />
            </Button>
          </motion.div>
        </div>
      </Container>

    </section>
  );
}
