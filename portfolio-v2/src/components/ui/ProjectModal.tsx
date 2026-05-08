"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Project } from "@/data/portfolio";
import { FiX, FiGithub, FiExternalLink, FiTarget, FiZap, FiCpu } from "react-icons/fi";
import Image from "next/image";

interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function ProjectModal({ project, isOpen, onClose }: ProjectModalProps) {
  if (!project) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[2000] flex items-center justify-center p-4 md:p-10">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/90 backdrop-blur-xl"
          />

          {/* Modal Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative w-full max-w-5xl max-h-[90vh] bg-surface/40 border border-white/10 rounded-[3rem] overflow-hidden shadow-2xl flex flex-col md:flex-row"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-6 right-6 z-50 p-3 bg-black/50 hover:bg-primary/20 text-white hover:text-primary rounded-full backdrop-blur-md border border-white/10 transition-all"
            >
              <FiX size={24} />
            </button>

            {/* Visual Side (Left) */}
            <div className="w-full md:w-2/5 relative h-64 md:h-auto border-b md:border-b-0 md:border-r border-white/10">
              <Image
                src={project.image}
                alt={project.name}
                fill
                className="object-cover grayscale-[0.3] hover:grayscale-0 transition-all duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
              
              <div className="absolute bottom-10 left-10 right-10 space-y-4">
                <h2 className="text-4xl font-black text-white uppercase tracking-tighter">
                  {project.name}
                </h2>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map(tech => (
                    <span key={tech} className="px-3 py-1 bg-primary/20 border border-primary/30 rounded-lg text-[9px] font-bold text-primary uppercase tracking-widest">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Info Side (Right) */}
            <div className="w-full md:w-3/5 overflow-y-auto p-8 md:p-12 bg-surface/50 backdrop-blur-3xl custom-scrollbar">
              <div className="space-y-12">
                {/* Problem Section */}
                <section className="space-y-4">
                  <div className="flex items-center gap-3 text-white/40 uppercase tracking-[0.2em] text-[10px] font-black">
                    <FiTarget className="text-primary" /> The Challenge
                  </div>
                  <p className="text-lg text-white/80 leading-relaxed font-medium">
                    {project.problem || project.description}
                  </p>
                </section>

                {/* Solution Section */}
                <section className="space-y-4">
                  <div className="flex items-center gap-3 text-white/40 uppercase tracking-[0.2em] text-[10px] font-black">
                    <FiCpu className="text-primary" /> Technical Solution
                  </div>
                  <p className="text-white/60 leading-relaxed italic border-l-2 border-primary/30 pl-6">
                    {project.solution || "Implementation details categorized under internal protocol."}
                  </p>
                </section>

                {/* Impact/Metrics Section */}
                {project.impact && (
                  <section className="space-y-6">
                    <div className="flex items-center gap-3 text-white/40 uppercase tracking-[0.2em] text-[10px] font-black">
                      <FiZap className="text-primary" /> Performance Metrics
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {project.impact.map((stat, i) => (
                        <div key={i} className="p-4 bg-white/5 border border-white/5 rounded-2xl flex items-center gap-4 group/stat hover:border-primary/30 transition-all">
                          <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                          <span className="text-xs font-bold text-white/80 uppercase tracking-wide group-hover/stat:text-white">
                            {stat}
                          </span>
                        </div>
                      ))}
                    </div>
                  </section>
                )}

                {/* Actions */}
                <div className="flex flex-col sm:flex-row gap-4 pt-6">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    className="flex-1 px-8 py-4 bg-primary text-black font-black uppercase tracking-widest text-[11px] rounded-2xl hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-3"
                  >
                    <FiGithub size={18} /> Protocol Repository
                  </a>
                  <button className="px-8 py-4 bg-white/5 border border-white/10 text-white font-black uppercase tracking-widest text-[11px] rounded-2xl hover:bg-white/10 transition-all flex items-center justify-center gap-3 group">
                    Live Demo <FiExternalLink size={18} className="group-hover:text-primary" />
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
