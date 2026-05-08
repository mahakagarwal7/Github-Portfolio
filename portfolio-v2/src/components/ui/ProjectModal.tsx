"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import { Project } from "@/data/portfolio";
import ScrollRevealImage from "../ScrollRevealImage";
import BeforeAfterSlider from "../BeforeAfterSlider";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  return (
    <AnimatePresence>
      {project && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 md:p-8">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-bg/80 backdrop-blur-md"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative w-full max-w-4xl bg-surface border border-white/10 rounded-3xl overflow-hidden shadow-2xl"
          >
            <button
              onClick={onClose}
              className="absolute top-6 right-6 p-2 bg-white/5 hover:bg-white/10 rounded-full transition-colors z-10 group"
            >
              <X className="group-hover:rotate-90 transition-transform duration-300" />
            </button>

            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="aspect-video md:aspect-auto bg-white/5 relative overflow-hidden">
                {project.id === "cogni" ? ( // Example check for before/after comparison
                  <BeforeAfterSlider 
                    beforeSrc="/images/cogni-v1.jpg" 
                    afterSrc={project.image} 
                    className="w-full h-full"
                  />
                ) : (
                  <ScrollRevealImage
                    src={project.image}
                    alt={project.name}
                    type="wipe"
                    className="w-full h-full"
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-surface to-transparent" />
              </div>

              <div className="p-8 md:p-12 flex flex-col">
                <div className="mb-8">
                  <span className="text-[10px] font-mono text-primary uppercase tracking-[0.3em] mb-2 block">
                    {project.category}
                  </span>
                  <h2 className="text-3xl font-bold mb-4">{project.name}</h2>
                  <p className="text-text-secondary leading-relaxed">
                    {project.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2 mb-10">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-white/5 border border-white/5 rounded-full text-[10px] font-mono text-text-secondary"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="mt-auto flex gap-4">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 py-4 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl font-bold text-sm transition-all"
                  >
                    <FiGithub /> REPOSITORY
                  </a>
                  {project.liveUrl && project.liveUrl !== "#" && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 py-4 bg-primary text-bg rounded-xl font-bold text-sm transition-all hover:scale-105"
                    >
                      <FiExternalLink /> LIVE DEMO
                    </a>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
