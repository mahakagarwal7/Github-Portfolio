"use client";

import { motion } from "framer-motion";
import { ACHIEVEMENTS } from "@/data/portfolio";
import { Container } from "./ui/Container";
import { FiAward, FiStar, FiTerminal, FiGlobe } from "react-icons/fi";

const getIcon = (title: string) => {
  if (title.includes("Hackathon")) return <FiTerminal />;
  if (title.includes("Global") || title.includes("International")) return <FiGlobe />;
  if (title.includes("Star") || title.includes("Award")) return <FiStar />;
  return <FiAward />;
};

export default function Achievements() {
  return (
    <section id="achievements" className="py-32 relative overflow-hidden bg-bg">
      <Container>
        <div className="mb-20 space-y-4">
          <h2 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tighter">
            Key <span className="text-primary italic">Milestones</span>
          </h2>
          <p className="text-text-secondary max-w-xl">
            Recognition, awards, and contributions to the global developer community.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {ACHIEVEMENTS.map((ach, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.05 }}
              viewport={{ once: true }}
              className="p-8 bg-surface border border-white/5 rounded-[32px] group hover:border-primary/20 transition-all flex gap-6"
            >
              <div className="p-4 h-fit bg-primary/10 rounded-2xl text-primary text-xl group-hover:bg-primary group-hover:text-bg transition-all">
                {getIcon(ach.title)}
              </div>
              <div className="space-y-2">
                <h3 className="text-lg font-bold text-white uppercase tracking-tight">
                  {ach.title}
                </h3>
                <p className="text-sm text-text-secondary leading-relaxed">
                  {ach.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
