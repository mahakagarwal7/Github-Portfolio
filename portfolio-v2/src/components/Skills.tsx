"use client";

import { motion } from "framer-motion";
import { SKILLS } from "@/data/portfolio";

export default function Skills() {
  return (
    <section id="skills" className="page-container skills-page">
      <div className="text-zone">
        <h1>
          <span className="h1-tag-top">&lt;h2&gt;</span>
          Skills
          <span className="h1-tag-bottom">&lt;h2/&gt;</span>
        </h1>
        
        <div className="mt-12 space-y-8">
          <p>
            I am a systems-focused AI Engineer specializing in building scalable architectures 
            and autonomous intelligent systems. 
          </p>
          <p>
            I create successful production-ready products that are fast, resilient, and built 
            with modern best practices. 
          </p>
        </div>

        <div className="mt-12 flex flex-col gap-8">
          {SKILLS.map((group, idx) => (
            <div key={idx} className="group border-b border-[#333] pb-6">
              <h3 className="text-white font-bold text-sm tracking-[0.4em] uppercase mb-4 group-hover:text-[#00ffa3] transition-colors">
                {group.category}
              </h3>
              <div className="flex flex-wrap gap-4">
                {group.items.map((item, i) => (
                  <span 
                    key={i}
                    className="text-[#8d8d8d] text-sm font-medium hover:text-white transition-colors"
                  >
                    {item} {i < group.items.length - 1 && <span className="text-[#444] mx-2">/</span>}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
