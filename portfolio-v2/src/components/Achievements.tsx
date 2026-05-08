"use client";

import { motion } from "framer-motion";
import { ACHIEVEMENTS } from "@/data/portfolio";
import { Container } from "./ui/Container";
import { FiAward, FiStar, FiTerminal, FiGlobe, FiZap } from "react-icons/fi";
import Magnetic from "./ui/Magnetic";

const getIcon = (title: string) => {
  if (title.includes("Hackathon")) return <FiTerminal />;
  if (title.includes("Global") || title.includes("International")) return <FiGlobe />;
  if (title.includes("Star") || title.includes("Award")) return <FiStar />;
  return <FiAward />;
};

export default function Achievements() {
  return (
    <section id="achievements" className="py-32 relative overflow-hidden bg-bg">
      {/* Decorative Background Icons */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-[0.02]">
        <motion.div 
          animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute -top-20 -left-20"
        >
          <FiAward size={600} />
        </motion.div>
      </div>

      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* Left Side: Cinematic Hero */}
          <div className="lg:col-span-5 sticky top-32 space-y-12">
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="inline-flex items-center gap-3 px-4 py-2 bg-primary/10 border border-primary/20 rounded-xl"
              >
                <FiZap className="text-primary animate-pulse" />
                <span className="text-[10px] font-black text-primary uppercase tracking-[0.2em]">Hall of Fame</span>
              </motion.div>
              <h2 className="text-5xl md:text-7xl font-black text-white uppercase tracking-tighter leading-none">
                Key <span className="text-primary italic">Milestones</span>
              </h2>
              <p className="text-lg text-text-secondary leading-relaxed uppercase font-bold tracking-wider max-w-sm">
                Recognition, awards, and contributions to the global developer ecosystem.
              </p>
            </div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              className="relative aspect-square rounded-[3rem] overflow-hidden border border-white/5 group shadow-2xl"
            >
              <img 
                src="/images/milestones.png" 
                alt="Key Milestones"
                className="w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-bg via-transparent to-transparent" />
              
              <div className="absolute bottom-8 left-8 right-8 p-6 bg-black/40 backdrop-blur-xl border border-white/10 rounded-2xl">
                <div className="flex items-center justify-between">
                  <div className="flex flex-col">
                    <span className="text-[10px] font-black text-white/40 uppercase tracking-widest">Global Rank</span>
                    <span className="text-xl font-black text-white italic">Elite Tier</span>
                  </div>
                  <FiAward className="text-primary text-3xl animate-bounce" />
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Side: Achievement Cards with Connection Line */}
          <div className="lg:col-span-7 relative pl-8 md:pl-12">
            {/* Connection Line */}
            <div className="absolute left-0 top-0 bottom-0 w-[1px] bg-gradient-to-b from-primary via-primary/20 to-transparent" />

            <div className="space-y-8">
              {ACHIEVEMENTS.map((ach, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Magnetic>
                    <div className="relative p-8 bg-surface/50 backdrop-blur-3xl border border-white/5 rounded-[2.5rem] group hover:border-primary/40 transition-all flex flex-col sm:flex-row gap-8 shadow-xl">
                      {/* Timeline Dot Indicator */}
                      <div className="absolute -left-[37px] md:-left-[53px] top-10 w-4 h-4 rounded-full bg-bg border-2 border-primary shadow-[0_0_10px_#00ffa3] z-10 group-hover:scale-150 transition-transform" />
                      
                      <div className="p-5 h-fit bg-primary/10 rounded-2xl text-primary text-2xl group-hover:bg-primary group-hover:text-bg transition-all shrink-0">
                        {getIcon(ach.title)}
                      </div>
                      
                      <div className="space-y-4">
                        <div className="space-y-1">
                          <h3 className="text-xl font-black text-white uppercase tracking-tight group-hover:text-primary transition-colors">
                            {ach.title}
                          </h3>
                          <div className="h-0.5 w-12 bg-primary/30 group-hover:w-24 transition-all" />
                        </div>
                        <p className="text-sm text-white/50 leading-relaxed group-hover:text-white/80 transition-colors italic">
                          {ach.description}
                        </p>
                      </div>
                    </div>
                  </Magnetic>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </Container>
    </section>
  );
}
