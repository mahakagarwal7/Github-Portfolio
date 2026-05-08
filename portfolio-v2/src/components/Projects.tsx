"use client";

import { motion, Variants } from "framer-motion";
import Image from "next/image";
import { PROJECTS } from "@/data/portfolio";
import { Container } from "./ui/Container";
import { FiGithub, FiArrowUpRight } from "react-icons/fi";
import TiltCard from "./3d/TiltCard";

export default function Projects() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  return (
    <section id="projects" className="py-32 relative overflow-hidden bg-bg/50">
      <Container>
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={containerVariants}
          className="space-y-24"
        >
          {/* Header */}
          <motion.div variants={itemVariants} className="space-y-6 text-center max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter">
              Featured <span className="text-primary italic">Projects</span>
            </h2>
            <div className="h-1 w-24 bg-primary mx-auto rounded-full" />
            <p className="text-text-secondary text-lg">
              Architecting production-grade AI systems and scalable distributed architectures.
            </p>
          </motion.div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {PROJECTS.map((project, idx) => (
              <motion.div key={project.id} variants={itemVariants}>
                <TiltCard>
                  <div className="h-full bg-surface/40 backdrop-blur-xl border border-white/10 rounded-[2.5rem] overflow-hidden group hover:border-primary/50 transition-all duration-700 shadow-2xl relative">
                    {/* Background Glow */}
                    <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity blur-2xl" />
                    
                    {/* Project Image */}
                    <div className="h-64 relative overflow-hidden">
                      <Image 
                        src={project.image} 
                        alt={project.name}
                        fill
                        className="object-cover transform group-hover:scale-110 transition-transform duration-1000 grayscale-[0.5] group-hover:grayscale-0"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent opacity-90" />
                      
                      {/* Floating Badge */}
                      <div className="absolute top-6 left-6 px-4 py-2 bg-black/80 backdrop-blur-md border border-white/10 rounded-xl">
                        <span className="text-[10px] font-black text-primary uppercase tracking-[0.3em]">
                          Protocol {idx + 1}
                        </span>
                      </div>
                    </div>

                    <div className="p-8 space-y-8 relative">
                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <h3 className="text-2xl font-black text-white uppercase tracking-tight group-hover:text-primary transition-colors">
                            {project.name}
                          </h3>
                          <FiArrowUpRight className="text-white/20 group-hover:text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                        </div>
                        <p className="text-sm text-white/50 leading-relaxed line-clamp-3 group-hover:text-white/80 transition-colors">
                          {project.description}
                        </p>
                      </div>

                      {/* Tech Stack */}
                      <div className="flex flex-wrap gap-2">
                        {project.techStack.slice(0, 4).map(tech => (
                          <span 
                            key={tech}
                            className="px-3 py-1.5 bg-white/5 border border-white/5 rounded-lg text-[9px] font-bold text-white/40 uppercase tracking-widest hover:text-primary hover:border-primary/30 transition-all cursor-default"
                          >
                            {tech}
                          </span>
                        ))}
                        {project.techStack.length > 4 && (
                          <span className="px-3 py-1.5 text-[9px] font-bold text-white/20 uppercase tracking-widest">
                            +{project.techStack.length - 4} More
                          </span>
                        )}
                      </div>

                      <div className="pt-4 border-t border-white/5">
                        <a 
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-3 text-[11px] font-black text-primary uppercase tracking-[0.3em] hover:gap-5 transition-all group/link"
                        >
                          Source Code <FiGithub className="text-lg group-hover/link:rotate-12 transition-transform" />
                        </a>
                      </div>
                    </div>
                  </div>
                </TiltCard>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
