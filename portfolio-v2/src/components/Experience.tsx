"use client";

import { motion } from "framer-motion";
import { EXPERIENCE } from "@/data/portfolio";

export default function Experience() {
  return (
    <section id="experience" className="relative min-h-screen flex items-center py-20 px-8 md:px-12 lg:px-24 max-w-7xl mx-auto w-full">
      <div className="w-full relative">
        <span className="tags h1-tag-top hidden md:block" style={{ top: '-1rem', left: '1rem' }}>&lt;h2&gt;</span>
        <h1 className="mb-12 text-white">Experience</h1>
        <span className="tags h1-tag-bottom hidden md:block" style={{ bottom: '-1rem', left: '1rem' }}>&lt;h2/&gt;</span>

        <div className="mt-16 space-y-24">
          {EXPERIENCE.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative pl-12 border-l border-white/10 max-w-4xl group"
            >
              {/* Animated Timeline Dot */}
              <div className="absolute left-[-5px] top-0 w-[10px] h-[10px] bg-[#00ffa3] rounded-full shadow-[0_0_15px_#00ffa3] group-hover:scale-150 transition-transform duration-500" />
              
              <div className="flex flex-col">
                <div className="flex items-center gap-6 mb-4">
                   <span className="text-[#00ffa3] font-mono text-xs tracking-[0.3em] uppercase">
                    {exp.date}
                  </span>
                  <div className="h-[1px] w-12 bg-white/10" />
                  <span className="text-[#fd2155] font-bold uppercase tracking-[0.2em] text-[10px]">
                    {exp.company}
                  </span>
                </div>

                <h3 className="text-4xl md:text-5xl font-black text-white mb-6 group-hover:text-[#00ffa3] transition-colors duration-500">
                  {exp.role}
                </h3>
                
                <p className="text-text-grey text-lg leading-relaxed mb-8 max-w-2xl font-light">
                  {exp.desc}
                </p>
                
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4">
                  {exp.bullets.map((bullet, i) => (
                    <li key={i} className="flex gap-4 text-white/50 text-sm leading-relaxed group/item">
                      <span className="text-[#00ffa3] mt-1 group-hover/item:translate-x-1 transition-transform">▹</span>
                      <span className="group-hover/item:text-white transition-colors">{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
