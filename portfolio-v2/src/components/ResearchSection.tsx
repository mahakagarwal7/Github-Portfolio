"use client";

import { motion } from "framer-motion";
import { RESEARCH_DATA, LEARNING_JOURNEY } from "@/data/portfolio";
import { Container } from "./ui/Container";
import { FiBook, FiCpu, FiActivity, FiLayers, FiMap, FiAward, FiMail } from "react-icons/fi";
import * as Icons from "react-icons/fi";
import TextReveal from "./TextReveal";

export default function ResearchSection() {
  return (
    <section id="research" className="py-32 relative overflow-hidden bg-white/[0.01]">
      <Container>
        <div className="mb-20 layer-content">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tighter">
            Research & <span className="text-primary italic"><TextReveal text="Curiosity" delay={0.3} /></span>
          </h2>
          <p className="text-text-secondary max-w-2xl">
            Beyond engineering, I am deeply committed to the theoretical foundations of AI systems 
            and the development of robust, scalable research architectures.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Left Column: Learning Roadmap */}
          <div className="lg:col-span-4">
            <h3 className="text-sm font-bold tracking-[0.3em] uppercase text-white/50 mb-12 flex items-center gap-2">
              <FiMap className="text-primary" /> Roadmap Protocol
            </h3>
            <div className="relative border-l border-white/5 pl-8 space-y-12">
              {LEARNING_JOURNEY.map((step, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  className="relative"
                >
                  <div className="absolute -left-[41px] top-0 w-5 h-5 bg-bg border-2 border-primary rounded-full" />
                  <div className="text-[10px] font-bold text-primary mb-1 uppercase tracking-widest">{step.year}</div>
                  <h4 className="text-lg font-black text-white mb-2">{step.title}</h4>
                  <p className="text-xs text-text-secondary leading-relaxed">{step.desc}</p>
                </motion.div>
              ))}
            </div>

            <div className="mt-16 p-8 rounded-3xl bg-primary/5 border border-primary/20">
              <h4 className="text-sm font-bold text-white mb-4">Subscribe to Research Updates</h4>
              <p className="text-[10px] text-text-secondary mb-6 leading-relaxed">
                Get notified when I publish new research papers or technical deep-dives.
              </p>
              <div className="relative">
                <input 
                  type="email" 
                  placeholder="researcher@bits-pilani.ac.in" 
                  className="w-full bg-bg border border-white/10 rounded-xl px-4 py-3 text-xs focus:border-primary outline-none transition-all"
                />
                <button className="absolute right-2 top-2 p-1.5 bg-primary rounded-lg text-bg hover:scale-105 transition-transform">
                  <FiMail size={14} />
                </button>
              </div>
            </div>
          </div>

          {/* Right Column: Reading List & Interests */}
          <div className="lg:col-span-8 space-y-12">
            {/* Research Interests Hex Grid (Simulated with Flex) */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {RESEARCH_DATA.interests.map((interest, idx) => {
                const Icon = (Icons as any)[interest.icon] || FiCpu;
                return (
                  <motion.div 
                    key={idx}
                    whileHover={{ y: -5 }}
                    className="p-8 bg-surface/30 backdrop-blur-xl border border-white/5 rounded-[40px] group hover:border-primary/20 transition-all text-center"
                  >
                    <div className="inline-flex p-4 bg-primary/10 rounded-2xl text-primary mb-6 group-hover:scale-110 transition-transform">
                      <Icon size={24} />
                    </div>
                    <h4 className="text-sm font-bold text-white leading-tight">{interest.title}</h4>
                  </motion.div>
                );
              })}
            </div>

            {/* Reading List */}
            <div className="p-8 bg-surface/30 backdrop-blur-xl border border-white/5 rounded-[40px]">
              <h3 className="text-xs font-bold tracking-[0.3em] uppercase text-white/50 mb-10 flex items-center gap-2">
                <FiBook className="text-primary" /> Library of Thought
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {RESEARCH_DATA.readingList.map((item, idx) => (
                  <div key={idx} className="flex gap-4 group">
                    <div className="w-12 h-16 bg-white/5 border border-white/10 rounded-lg flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-bg transition-all">
                      <FiBook size={20} />
                    </div>
                    <div>
                      <div className="text-[10px] font-bold text-primary mb-1 uppercase tracking-tighter">{item.type}</div>
                      <h4 className="text-sm font-bold text-white group-hover:text-primary transition-colors">{item.title}</h4>
                      <div className="text-[10px] text-text-secondary uppercase tracking-widest mt-1">{item.author}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Future Goals */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {RESEARCH_DATA.goals.map((goal, idx) => (
                <div key={idx} className="p-8 bg-primary/5 border border-primary/10 rounded-[40px] group hover:bg-primary/10 transition-all">
                  <FiAward className="text-primary text-2xl mb-4 group-hover:scale-110 transition-transform" />
                  <h4 className="text-lg font-black text-white mb-2">{goal.title}</h4>
                  <p className="text-xs text-text-secondary leading-relaxed">{goal.desc}</p>
                </div>
              ))}
            </div>
            
            {/* Coursework & Influences */}
            <div className="flex flex-wrap gap-4 pt-8 border-t border-white/5">
              <span className="text-[10px] font-bold tracking-widest text-white/30 uppercase mr-4">Influences:</span>
              {RESEARCH_DATA.influences.map(inf => (
                <span key={inf} className="text-[10px] font-bold text-primary/70 uppercase tracking-widest">{inf}</span>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
