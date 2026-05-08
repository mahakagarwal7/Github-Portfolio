"use client";

import { motion } from "framer-motion";
import { SKILLS } from "@/data/portfolio";

export default function Skills() {
  return (
    <section id="skills" className="relative min-h-screen py-20 px-8 md:px-12 lg:px-24 max-w-7xl mx-auto w-full flex flex-col justify-center">
      <div className="w-full relative">
        <span className="tags h1-tag-top hidden md:block" style={{ top: '-1rem', left: '1rem' }}>&lt;h2&gt;</span>
        <h1 className="mb-12 text-white">Skills</h1>
        <span className="tags h1-tag-bottom hidden md:block" style={{ bottom: '-1rem', left: '1rem' }}>&lt;h2/&gt;</span>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mt-12">
          {SKILLS.map((group, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: idx * 0.2, duration: 0.7, ease: "easeOut" }}
              className="group bg-[#020617]/40 backdrop-blur-md border border-[#00ffa3]/10 rounded-[30px] p-8 hover:border-[#00ffa3]/50 transition-all duration-500 hover:shadow-[0_0_30px_rgba(0,255,163,0.15)] relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#00ffa3] opacity-0 group-hover:opacity-[0.05] rounded-full blur-3xl transition-opacity duration-500" />
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-[2px] bg-[#00ffa3] origin-left scale-x-50 group-hover:scale-x-100 transition-transform duration-300" />
                <h3 className="text-[#00ffa3] font-bold text-sm tracking-[0.3em] uppercase">
                  {group.category}
                </h3>
              </div>

              <div className="flex flex-wrap gap-x-4 gap-y-4">
                {group.items.map((item, i) => (
                  <motion.div 
                    key={i} 
                    className="relative flex flex-col"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  >
                    <span className="text-gray-300 font-medium text-lg tracking-tight px-4 py-2 bg-white/[0.03] rounded-lg border border-white/5 hover:border-[#00ffa3]/30 hover:text-[#00ffa3] hover:bg-[#00ffa3]/5 transition-all duration-300 cursor-default shadow-sm">
                      {item}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
