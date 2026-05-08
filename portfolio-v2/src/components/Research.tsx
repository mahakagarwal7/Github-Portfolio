"use client";

import { motion } from "framer-motion";
import { Container } from "./ui/Container";
import { FiBookOpen, FiActivity, FiCpu, FiSearch, FiLayers } from "react-icons/fi";
import Magnetic from "./ui/Magnetic";

const RESEARCH_AREAS = [
  {
    title: "Molecular Discovery & Green Chemistry",
    description: "Developing GNN-diffusion pipelines (DiffuCat) to accelerate catalyst discovery for carbon capture, bridging the gap between computational models and laboratory validation.",
    icon: <FiCpu />,
    tags: ["GNNs", "Diffusion", "Chemistry"]
  },
  {
    title: "Reinforcement Learning for System Safety",
    description: "Exploring multi-agent RL environments (Rollout Guardian) for autonomous failure detection in large-scale deployments, focusing on safety-first reward engineering.",
    icon: <FiActivity />,
    tags: ["RL", "System Safety", "Observability"]
  },
  {
    title: "Metacognitive Intelligence",
    description: "Investigating persistent memory systems and Hindsight-based pattern recognition in AI learning companions (Cogni) to improve long-term user adaptation.",
    icon: <FiLayers />,
    tags: ["Memory", "NLP", "Cognition"]
  }
];

export default function Research() {
  return (
    <section id="research" className="py-32 relative overflow-hidden bg-bg">
      {/* Cinematic Background Illustration (CSS-based) */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-20">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-primary/10 rounded-full blur-[100px]" />
      </div>

      <Container>
        <div className="flex flex-col lg:grid lg:grid-cols-12 gap-12 lg:gap-32 items-start">
          
          {/* Left Side: Narrative */}
          <div className="lg:col-span-4 space-y-12">
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="inline-flex items-center gap-3 px-4 py-2 bg-primary/10 border border-primary/20 rounded-xl"
              >
                <FiSearch className="text-primary" />
                <span className="text-[10px] font-black text-primary uppercase tracking-[0.2em]">Research Frontier</span>
              </motion.div>
              <h2 className="text-4xl md:text-6xl lg:text-[5.5rem] font-black text-white uppercase tracking-tighter leading-[0.85] relative z-10 overflow-visible pr-8">
                Applied <span className="text-primary italic">Intelligence</span>
              </h2>
              
              {/* Cinematic Research Hero (CSS Pattern) */}
              <div className="relative h-48 rounded-3xl overflow-hidden border border-white/5 bg-surface/50 group">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#00ffa305_1px,transparent_1px)] bg-[size:20px_20px]" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <FiSearch size={120} className="text-primary/5 group-hover:scale-125 transition-transform duration-1000" />
                </div>
                <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between">
                  <div className="flex flex-col">
                    <span className="text-[10px] font-black text-white/40 uppercase tracking-widest leading-none">Scholarship Recognition</span>
                    <span className="text-sm font-black text-white uppercase tracking-tight">Dr. APJ Abdul Kalam Program</span>
                  </div>
                  <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center">
                    <div className="w-2 h-2 bg-primary rounded-full animate-ping" />
                  </div>
                </div>
              </div>

              <div className="space-y-6 text-lg text-text-secondary leading-relaxed font-medium">
                <p>
                  My engineering work is deeply rooted in <span className="text-white font-black">Applied Research</span>. I believe that building production-grade systems requires a fundamental understanding of the underlying architectures.
                </p>
                <p>
                  From carbon-capture molecular generation to safety-first RL environments, I am <span className="text-primary font-black italic underline decoration-2 underline-offset-4">still exploring</span> the boundaries of how AI can solve high-impact industrial challenges.
                </p>
              </div>
            </div>

            <Magnetic>
              <a 
                href="#projects"
                className="inline-flex px-10 py-5 bg-white text-bg font-black uppercase text-xs tracking-[0.3em] rounded-2xl hover:bg-primary transition-all items-center gap-6 group"
              >
                Explore Lab Work <FiBookOpen className="group-hover:rotate-12 transition-transform" />
              </a>
            </Magnetic>
          </div>

          {/* Right Side: Focus Areas (Bento-like cards) */}
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-6 lg:mt-24">
            {RESEARCH_AREAS.map((area, idx) => (
              <motion.div
                key={area.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className={`p-8 bg-surface/50 backdrop-blur-3xl border border-white/5 rounded-[2.5rem] group hover:border-primary/40 transition-all ${
                  idx === 0 ? "md:col-start-2" : ""
                }`}
              >
                <div className="flex flex-col h-full justify-between gap-8">
                  <div className="space-y-4">
                    <div className="p-4 w-fit bg-primary/10 rounded-2xl text-primary text-xl group-hover:bg-primary group-hover:text-bg transition-all">
                      {area.icon}
                    </div>
                    <h3 className="text-xl font-black text-white uppercase tracking-tight group-hover:text-primary transition-colors leading-tight">
                      {area.title}
                    </h3>
                    <p className="text-sm text-white/50 leading-relaxed italic">
                      {area.description}
                    </p>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {area.tags.map(tag => (
                      <span key={tag} className="px-3 py-1 bg-white/5 border border-white/10 rounded-lg text-[9px] font-black text-white/40 uppercase tracking-widest">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </Container>
    </section>
  );
}
