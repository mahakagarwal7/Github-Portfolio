"use client";

import { motion } from "framer-motion";
import { SKILLS, GREETING } from "@/data/portfolio";
import { useScrollAnimations } from "@/hooks/useScrollAnimations";
import { Container } from "./ui/Container";
import ParallaxLayer from "./ParallaxLayer";
import TextReveal from "./TextReveal";
import { FiDownload, FiBookOpen, FiActivity, FiLayers, FiCpu, FiGlobe } from "react-icons/fi";
import { Button } from "./ui/Button";

export default function Skills() {
  useScrollAnimations();

  return (
    <section id="skills" className="relative py-32 overflow-hidden perspective-[1000px]">
      <Container>
        {/* Header & Download CTA */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8 layer-content">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tighter">
              Technical <span className="text-primary italic"><TextReveal text="Arsenal" delay={0.3} /></span>
            </h2>
            <p className="text-text-secondary">
              A comprehensive bento-grid overview of my expertise in AI research, 
              scalable backend architectures, and production DevOps.
            </p>
          </div>
          <Button 
            variant="outline" 
            size="sm" 
            className="gap-2 self-start md:self-auto group border-primary/20 hover:border-primary transition-all"
            onClick={() => window.open(GREETING.resumeLink, '_blank')}
          >
            <FiDownload className="group-hover:translate-y-0.5 transition-transform" /> 
            DOWNLOAD SKILLS PDF
          </Button>
        </div>
        
        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {SKILLS.map((group, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className={`p-8 rounded-[40px] bg-surface/30 backdrop-blur-xl border border-white/5 relative overflow-hidden group hover:border-primary/20 transition-all duration-500 shadow-2xl ${
                idx === 0 ? "md:col-span-2 lg:col-span-3" : 
                idx === 1 ? "md:col-span-2 lg:col-span-3" :
                idx === 2 ? "md:col-span-2 lg:col-span-2" :
                "md:col-span-2 lg:col-span-4"
              }`}
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
              
              <div className="flex items-center gap-3 mb-10">
                <div className="p-2 bg-primary/10 rounded-lg text-primary">
                  {idx === 0 && <FiCpu />}
                  {idx === 1 && <FiLayers />}
                  {idx === 2 && <FiGlobe />}
                  {idx === 3 && <FiActivity />}
                </div>
                <h3 className="text-primary font-bold text-xs tracking-[0.3em] uppercase">
                  {group.category}
                </h3>
              </div>

              <div className="space-y-8">
                {group.items.map((skill: any, i: number) => (
                  <div key={i} className="group/skill">
                    <div className="flex justify-between items-end mb-2">
                      <div className="flex items-center gap-2">
                        <span className="text-white font-medium text-sm group-hover/skill:text-primary transition-colors">
                          {skill.name}
                        </span>
                        {skill.learning && (
                          <span className="flex items-center gap-1 px-2 py-0.5 bg-yellow-500/10 text-yellow-500 text-[8px] font-bold rounded-full uppercase tracking-tighter">
                            <FiBookOpen size={8} /> Learning
                          </span>
                        )}
                      </div>
                      <span className="text-[10px] text-text-secondary font-mono">{skill.level}%</span>
                    </div>
                    {/* Proficiency Bar */}
                    <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: 0.5 + (i * 0.1) }}
                        viewport={{ once: true }}
                        className={`h-full rounded-full ${skill.learning ? 'bg-yellow-500/50' : 'bg-primary'}`}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}

          {/* Currently Learning Bento Box */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="md:col-span-2 lg:col-span-2 p-8 rounded-[40px] bg-primary/5 border border-primary/20 flex flex-col justify-between group hover:bg-primary/10 transition-all duration-500"
          >
            <div>
              <FiBookOpen className="text-primary text-2xl mb-4" />
              <h3 className="text-lg font-bold text-white mb-2 tracking-tight">Active Research</h3>
              <p className="text-xs text-text-secondary leading-relaxed mb-6">
                Exploring large-scale distributed training and sub-graph isomorphism in GNNs.
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              {['Kubernetes', 'Vector DBs', 'GraphQL'].map(tag => (
                <span key={tag} className="px-3 py-1 bg-primary/10 rounded-full text-[9px] font-bold text-primary uppercase tracking-widest">
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
