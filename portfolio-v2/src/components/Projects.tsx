"use client";

import { motion } from "framer-motion";
import { PROJECTS } from "@/data/portfolio";
import { useState } from "react";

const CATEGORIES = [
  "All",
  "Backend Development",
  "Frontend Development",
  "AI/ML",
  "Scientific Computing",
  "Desktop Application",
  "Data Visualization",
  "Blockchain Development",
  "DevOps",
  "Full Stack Development",
];

export default function Projects() {
  const [filter, setFilter] = useState("All");

  const filteredProjects = PROJECTS.filter((project) => {
    if (filter === "All") return true;
    // Check if any tag matches the category or if the category is part of the tags
    return project.tags.some(tag => tag.toLowerCase().includes(filter.toLowerCase())) || 
           (filter === "Scientific Computing" && project.name.includes("Model"));
  });

  return (
    <section id="projects" className="py-48 relative min-h-screen">
      {/* Decorative Music Tag */}
      <div className="absolute top-10 right-10 flex flex-col items-end gap-1 opacity-60">
        <span className="text-[#00ffa3] font-cursive text-sm">&lt;music&gt;</span>
        <div className="flex gap-1 h-4 items-end">
          {[0.4, 0.8, 0.5, 0.9, 0.6].map((h, i) => (
            <motion.div 
              key={i}
              animate={{ height: [`${h*100}%`, `${(1-h)*100}%`, `${h*100}%`] }}
              transition={{ repeat: Infinity, duration: 1, delay: i * 0.1 }}
              className="w-[3px] bg-[#00ffa3] rounded-full"
            />
          ))}
        </div>
        <span className="text-[#00ffa3] font-cursive text-sm">&lt;/music&gt;</span>
      </div>

      <div className="z-10">
        <span className="section-tag">&lt;h1&gt;</span>
        <h1 className="text-[#00ffa3] drop-shadow-[0_0_15px_rgba(0,255,163,0.4)] mb-4">
          Projects
        </h1>
        <span className="section-tag">&lt;/h1&gt;</span>

        <p className="mt-8 text-text-grey max-w-2xl text-lg leading-relaxed font-light">
          A showcase of my technical projects spanning various domains, including backend development, 
          data visualization, blockchain, and DevOps. Each project represents a solution to real-world challenges.
        </p>

        {/* Filter Chips - Two rows if needed */}
        <div className="flex flex-wrap gap-3 mt-12 mb-20 max-w-4xl">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-6 py-2 rounded-full border text-[13px] font-bold tracking-tight transition-all duration-300 ${
                filter === cat
                  ? "bg-[#00ffa3] border-[#00ffa3] text-black shadow-[0_0_20px_rgba(0,255,163,0.5)]"
                  : "border-[#00ffa3]/20 text-[#00ffa3] hover:bg-[#00ffa3]/10 hover:border-[#00ffa3]/40"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid with Horizontal Scroll Vibe or Responsive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 mt-12 pr-4">
          {filteredProjects.map((project, idx) => (
            <motion.div
              key={idx}
              layout
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-[#111111]/60 backdrop-blur-xl border border-[#00ffa3]/10 rounded-[2rem] p-10 hover:border-[#00ffa3]/40 transition-all duration-500 group relative flex flex-col h-full"
            >
              {/* Category & Year */}
              <div className="flex justify-between items-center mb-8">
                <div className="flex gap-3">
                  <span className="bg-[#00ffa3]/5 text-[#00ffa3] px-4 py-1.5 rounded-full text-[11px] font-bold uppercase tracking-widest border border-[#00ffa3]/10">
                    {project.tags[0] || "SYSTEMS"}
                  </span>
                  <span className="bg-orange-500/5 text-orange-400 px-4 py-1.5 rounded-full text-[11px] font-bold uppercase tracking-widest border border-orange-500/10">
                    2024
                  </span>
                </div>
                <div className="flex items-center gap-2">
                   <span className="w-2 h-2 bg-[#00ffa3] rounded-full animate-pulse" />
                   <span className="text-[#00ffa3] text-[11px] font-bold uppercase tracking-widest">
                    COMPLETED
                  </span>
                </div>
              </div>

              {/* Title & Organization */}
              <h3 className="text-3xl font-extrabold text-white mb-2 group-hover:text-[#00ffa3] transition-colors leading-tight">
                {project.name}
              </h3>
              <p className="text-[#00ffa3]/80 text-sm font-bold mb-8 uppercase tracking-[0.2em]">
                {project.name === "DiffuCat" ? "Independent Research" : "DRDO / Scaler Lab"}
              </p>

              {/* Description */}
              <p className="text-text-grey text-[15px] mb-10 leading-relaxed font-light">
                {project.description}
              </p>

              {/* Key Features */}
              <div className="mb-10 flex-grow">
                <h4 className="text-white font-bold text-[11px] uppercase tracking-[0.3em] mb-6">Key Features:</h4>
                <ul className="space-y-4">
                  {[
                    "High-performance execution pipeline",
                    "Real-time data synchronization",
                    "Advanced mathematical modeling",
                    "Scalable cloud architecture"
                  ].map((feature, fidx) => (
                    <li key={fidx} className="flex items-start gap-4 text-text-grey text-[14px]">
                      <span className="mt-1.5 w-1.5 h-1.5 bg-[#00ffa3] rounded-full shadow-[0_0_8px_#00ffa3] flex-shrink-0" />
                      <span className="leading-snug">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tech Stack Pills */}
              <div className="flex flex-wrap gap-2.5 mb-10">
                {project.tags.map((tag) => (
                  <span key={tag} className="px-4 py-1.5 bg-[#1a1a1a] text-text-grey text-[11px] font-bold rounded-full border border-white/5 transition-colors hover:border-[#00ffa3]/30 hover:text-white">
                    {tag}
                  </span>
                ))}
              </div>

              {/* Footer Repository Label */}
              <div className="mt-auto pt-6 border-t border-[#222] flex items-center justify-between">
                <div className="flex items-center gap-3 text-text-grey/40 text-[11px] font-bold uppercase tracking-widest">
                  <span className="text-lg">/</span>
                  <span>Private Project</span>
                </div>
                <a 
                  href={project.link} 
                  target="_blank"
                  className="text-[#00ffa3] text-sm hover:scale-110 transition-transform"
                >
                  ↗
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-32 text-center">
          <a 
            href="https://github.com/mahakagarwal7" 
            target="_blank"
            className="group relative inline-flex items-center gap-4 px-12 py-4 bg-[#00ffa3] text-black font-black text-sm uppercase tracking-[0.3em] rounded-full hover:scale-105 transition-all shadow-[0_0_30px_rgba(0,255,163,0.3)]"
          >
            See more on GitHub
            <span className="text-xl group-hover:translate-x-2 transition-transform">▹</span>
          </a>
        </div>
      </div>

      {/* Vertical Progress Bar Decoration */}
      <div className="absolute top-1/4 right-0 w-1.5 h-64 bg-white/5 rounded-full overflow-hidden hidden xl:block">
        <motion.div 
          className="w-full bg-[#00ffa3] shadow-[0_0_15px_#00ffa3]"
          animate={{ height: ["20%", "80%", "20%"] }}
          transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
        />
      </div>
    </section>
  );
}
