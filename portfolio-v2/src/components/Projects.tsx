"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiFolder, FiExternalLink, FiGithub, FiStar, FiZap } from "react-icons/fi";
import { PROJECTS, Project } from "@/data/portfolio";
import { Container } from "./ui/Container";
import { Card } from "./ui/Card";
import { Button } from "./ui/Button";
import ProjectModal from "./ui/ProjectModal";
import TextReveal from "./TextReveal";

const CATEGORIES = ["All", "AI Research", "DevOps", "Full Stack", "EdTech", "Distributed Systems"];

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects = useMemo(() => {
    if (activeFilter === "All") return PROJECTS;
    return PROJECTS.filter((project) => project.category === activeFilter);
  }, [activeFilter]);

  return (
    <section id="projects" className="py-32 relative perspective-[2000px] overflow-hidden">
      <Container>
        <div className="mb-20 layer-content">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tighter">
            Startup <span className="text-primary italic"><TextReveal text="Portfolios" delay={0.3} /></span>
          </h2>
          <p className="text-text-secondary max-w-2xl">
            Presenting my engineering work as a series of high-impact technical pitches, 
            optimized for scalability and research fidelity.
          </p>

          {/* Filter Chips */}
          <div className="flex flex-wrap gap-3 mt-10">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-5 py-2 rounded-full text-[10px] font-bold tracking-[0.2em] uppercase transition-all duration-300 border ${
                  activeFilter === cat
                    ? "bg-primary border-primary text-bg"
                    : "border-white/10 text-text-secondary hover:border-primary/50 hover:text-primary"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, idx) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="group h-full"
              >
                <Card 
                  onClick={() => setSelectedProject(project)}
                  className="h-full flex flex-col p-8 md:p-12 cursor-pointer bg-surface/30 backdrop-blur-xl border-white/5 hover:border-primary/30 transition-all duration-700 relative overflow-hidden group/card shadow-2xl"
                >
                  <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-[100px] opacity-0 group-hover/card:opacity-100 transition-opacity" />
                  
                  {/* Top Bar */}
                  <div className="flex justify-between items-start mb-10 relative z-10">
                    <div className="flex flex-col gap-1">
                      <div className="flex items-center gap-3">
                        <div className="p-3 bg-primary/10 rounded-2xl text-primary">
                          <FiFolder size={24} />
                        </div>
                        {project.badge && (
                          <span className="px-3 py-1 bg-primary/10 border border-primary/20 rounded-full text-[9px] font-bold text-primary uppercase tracking-[0.2em]">
                            {project.badge}
                          </span>
                        )}
                        {project.liveUrl && (
                          <span className="flex items-center gap-1.5 px-3 py-1 bg-white/5 border border-white/10 rounded-full text-[9px] font-bold text-white uppercase tracking-[0.2em]">
                            <span className="w-1 h-1 bg-green-500 rounded-full animate-pulse" /> Live Demo
                          </span>
                        )}
                      </div>
                    </div>
                    <div className="flex gap-4 text-text-secondary opacity-0 group-hover/card:opacity-100 transition-all translate-y-2 group-hover/card:translate-y-0">
                      <FiGithub size={24} className="hover:text-primary transition-colors" />
                      <FiExternalLink size={24} className="hover:text-primary transition-colors" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="relative z-10 flex-grow">
                    <h3 className="text-sm font-bold text-primary tracking-[0.4em] uppercase mb-4">{project.category}</h3>
                    <h4 className="text-3xl md:text-4xl font-black text-white mb-6 tracking-tight leading-none group-hover/card:text-primary transition-colors">
                      {project.name}
                    </h4>
                    
                    <p className="text-lg font-bold text-white/90 mb-8 leading-tight italic">
                      "{project.impact}"
                    </p>

                    <ul className="space-y-4 mb-12">
                      {project.bullets?.map((bullet, i) => (
                        <li key={i} className="flex items-start gap-3 text-sm text-text-secondary leading-relaxed group-hover/card:text-white/80 transition-colors">
                          <span className="mt-1.5 w-1.5 h-1.5 bg-primary/40 rounded-full flex-shrink-0" />
                          {bullet}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Footer */}
                  <div className="relative z-10 pt-10 border-t border-white/5 flex flex-wrap items-center justify-between gap-6">
                    <div className="flex flex-wrap gap-2">
                      {project.techStack.map(tag => (
                        <span key={tag} className="text-[9px] font-bold text-white/40 uppercase tracking-widest bg-white/5 px-2 py-1 rounded-md border border-white/5 group-hover/card:border-primary/20 group-hover/card:text-primary/70 transition-all">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="flex items-center gap-4 text-[10px] font-bold uppercase tracking-widest text-text-secondary">
                      <div className="flex items-center gap-1.5">
                        <FiStar className="text-yellow-500" /> {project.stars} Stars
                      </div>
                      <div className="flex items-center gap-1.5">
                        <FiZap className="text-primary" /> pitch view
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        <div className="mt-24 text-center">
          <Button 
            variant="outline" 
            size="lg" 
            className="gap-4 px-10 group border-white/10 hover:border-primary transition-all"
            onClick={() => window.open('https://github.com/mahakagarwal7', '_blank')}
          >
            <FiGithub className="text-xl" /> EXPLORE ARCHIVE PROTOCOLS
          </Button>
        </div>
      </Container>

      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </section>
  );
}
