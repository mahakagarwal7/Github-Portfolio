"use client";

import { motion } from "framer-motion";
import { EXPERIENCE } from "@/data/portfolio";

export default function Experience() {
  return (
    <section id="experience" className="page-container experience-page">
      <div className="text-zone !max-h-none !overflow-visible py-20">
        <h1>
          <span className="h1-tag-top">&lt;h2&gt;</span>
          Experience
          <span className="h1-tag-bottom">&lt;h2/&gt;</span>
        </h1>

        <div className="mt-20 space-y-24">
          {EXPERIENCE.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative pl-10 border-l-2 border-[#333]"
            >
              <div className="absolute left-[-9px] top-0 w-4 h-4 bg-[#00ffa3] rounded-full shadow-[0_0_10px_#00ffa3]" />
              
              <div className="flex flex-col mb-4">
                <span className="text-[#00ffa3] font-mono text-xs tracking-widest mb-2 uppercase">
                  {exp.date}
                </span>
                <h3 className="text-3xl font-black text-white mb-1">
                  {exp.role}
                </h3>
                <span className="text-[#fd2155] font-bold uppercase tracking-[0.3em] text-[10px]">
                  {exp.company}
                </span>
              </div>
              
              <p className="text-[#8d8d8d] leading-relaxed mt-6 italic">
                {exp.desc}
              </p>
              
              <ul className="mt-6 space-y-4">
                {exp.bullets.map((bullet, i) => (
                  <li key={i} className="flex gap-4 text-[#8d8d8d] text-sm leading-relaxed">
                    <span className="text-[#00ffa3] mt-1">▹</span>
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
