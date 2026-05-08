"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { EDUCATION } from "@/data/portfolio";
import { Container } from "./ui/Container";
import { FiMapPin, FiCalendar } from "react-icons/fi";

export default function Education() {
  return (
    <section id="education" className="py-32 relative overflow-hidden bg-bg">
      <Container>
        <div className="mb-20 space-y-4">
          <h2 className="text-4xl md:text-7xl font-black text-white uppercase tracking-tighter">
            Academic <span className="text-primary italic">Trajectory</span>
          </h2>
          <div className="h-1.5 w-24 bg-primary rounded-full" />
          <p className="text-text-secondary max-w-xl text-lg">
            Dual-degree pursuit in Computer Science and Artificial Intelligence.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {EDUCATION.map((edu, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="p-10 bg-surface/30 backdrop-blur-3xl border border-white/10 rounded-[3rem] relative overflow-hidden group hover:border-primary/40 transition-all duration-500 shadow-2xl"
            >
              <div className="relative z-10 space-y-8">
                <div className="flex justify-between items-start">
                  <div className="space-y-4">
                    <div className="relative w-16 h-16 mb-4 p-2 bg-white rounded-2xl overflow-hidden shadow-[0_0_20px_rgba(255,255,255,0.1)] group-hover:scale-110 transition-transform duration-500">
                      <Image 
                        src={edu.logo} 
                        alt={edu.school}
                        fill
                        className="object-contain p-2"
                      />
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-3xl font-black text-white uppercase tracking-tighter leading-none group-hover:text-primary transition-colors">
                        {edu.school}
                      </h3>
                      <p className="text-lg font-bold text-primary/80 italic">{edu.degree}</p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap gap-6 text-sm font-bold text-white/40 uppercase tracking-widest">
                   <div className="flex items-center gap-2">
                     <FiCalendar className="text-primary" /> {edu.duration}
                   </div>
                   <div className="flex items-center gap-2">
                     <FiMapPin className="text-primary" /> {edu.location}
                   </div>
                </div>

                <div className="space-y-4">
                  <p className="text-xs font-black text-white/20 uppercase tracking-[0.3em]">Core Competencies</p>
                  <div className="flex flex-wrap gap-3">
                    {edu.highlights.map(item => (
                      <span key={item} className="px-4 py-2 bg-white/5 border border-white/5 rounded-2xl text-xs font-bold text-white/60">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Decorative Accent */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
