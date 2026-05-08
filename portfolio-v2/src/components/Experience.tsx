"use client";

import { motion } from "framer-motion";
import { EDUCATION, ACHIEVEMENTS, HACKATHONS } from "@/data/portfolio";
import { Container } from "./ui/Container";
import { FiActivity } from "react-icons/fi";
import * as Icons from "react-icons/fi";
import TextReveal from "./TextReveal";
import { ProgressCircle } from "./StatsComponents";

export default function Experience() {
  return (
    <section id="experience" className="py-32 relative overflow-hidden bg-white/[0.01]">
      <Container>
        <div className="mb-20 layer-content">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tighter">
            Hired <span className="text-primary italic"><TextReveal text="Talent" delay={0.3} /></span>
          </h2>
          <p className="text-text-secondary max-w-2xl">
            A track record of high-performance engineering, dual-degree academic focus, 
            and national-level research achievements.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Left: Education Timeline */}
          <div className="lg:col-span-5">
            <h3 className="text-sm font-bold tracking-[0.3em] uppercase text-white/50 mb-12">Academic Protocol</h3>
            <div className="relative border-l border-white/5 pl-8 space-y-16">
              {EDUCATION.map((edu, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  className="relative"
                >
                  <div className="absolute -left-[41px] top-0 w-5 h-5 bg-bg border-2 border-primary rounded-full shadow-[0_0_10px_rgba(0,255,163,0.5)]" />
                  <div className="text-xs font-bold text-primary mb-2 uppercase tracking-widest">{edu.duration}</div>
                  <h4 className="text-2xl font-black text-white mb-1">{edu.school}</h4>
                  <div className="text-lg font-medium text-white/80 mb-4 italic">{edu.degree}</div>
                  <p className="text-sm text-text-secondary leading-relaxed max-w-sm">
                    {edu.details}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right: Achievements Grid */}
          <div className="lg:col-span-7">
            <h3 className="text-sm font-bold tracking-[0.3em] uppercase text-white/50 mb-12">Milestone Grid</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {ACHIEVEMENTS.map((ach, idx) => {
                const Icon = (Icons as any)[ach.icon] || Icons.FiAward;
                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: idx * 0.1 }}
                    viewport={{ once: true }}
                    className="p-8 bg-surface/30 backdrop-blur-xl border border-white/5 rounded-[40px] group hover:border-primary/20 transition-all duration-500 shadow-2xl relative overflow-hidden"
                  >
                    <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
                    <div className="flex justify-between items-start mb-8">
                      <div className="p-4 bg-primary/10 rounded-2xl text-primary group-hover:bg-primary group-hover:text-bg transition-all">
                        <Icon size={24} />
                      </div>
                      <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-[9px] font-bold text-text-secondary uppercase tracking-[0.2em] group-hover:text-primary transition-colors">
                        {ach.tag}
                      </span>
                    </div>
                    <h4 className="text-xl font-bold text-white mb-2 group-hover:text-primary transition-colors">{ach.title}</h4>
                    <p className="text-xs text-text-secondary leading-relaxed">{ach.description}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Hackathon Strip / Marquee */}
        <div className="mt-32 pt-20 border-t border-white/5">
          <h3 className="text-[10px] font-bold tracking-[0.5em] uppercase text-white/30 text-center mb-12">Combat Record / Hackathon History</h3>
          <div className="relative flex overflow-x-hidden">
            <div className="flex animate-marquee whitespace-nowrap gap-12 py-4">
              {[...HACKATHONS, ...HACKATHONS].map((h, i) => (
                <div key={i} className="flex items-center gap-4 text-sm font-bold text-white/40 uppercase tracking-[0.2em] hover:text-primary transition-colors cursor-default">
                  <FiActivity className="text-primary/40" /> {h}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Metrics Visualization */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mt-32">
          <div className="flex flex-col items-center gap-4">
            <ProgressCircle percentage={100} label="Hackathon Success Rate" />
          </div>
          <div className="flex flex-col items-center gap-4">
            <ProgressCircle percentage={99} label="Learning Velocity" />
          </div>
          <div className="flex flex-col items-center gap-4 text-center">
            <div className="text-4xl font-black text-primary mb-2">4+</div>
            <span className="text-[10px] text-text-secondary uppercase tracking-widest font-bold">Hackathons Won/Finalist</span>
          </div>
          <div className="flex flex-col items-center gap-4 text-center">
            <div className="text-4xl font-black text-primary mb-2">AIR-4</div>
            <span className="text-[10px] text-text-secondary uppercase tracking-widest font-bold">National Research Rank</span>
          </div>
        </div>
      </Container>
    </section>
  );
}
