"use client";

import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { SKILLS } from "@/data/portfolio";
import { Container } from "./ui/Container";
import {
  SiPython, SiTypescript, SiJavascript, SiCplusplus, SiPostgresql,
  SiSupabase, SiDocker, SiGithub, SiGit, SiReact, SiNextdotjs,
  SiFastapi, SiNodedotjs, SiPytorch, SiTensorflow, SiMongodb,
  SiRedis, SiVite, SiTailwindcss, SiFirebase, SiLinux, SiDatadog,
  SiVercel, SiNetlify, SiCloudinary, SiSlack
} from "react-icons/si";
import {
  FiCode, FiCpu, FiServer, FiLayout, FiDatabase, FiSettings, FiTerminal, FiBox
} from "react-icons/fi";

const CATEGORY_ICON_MAP: Record<string, any> = {
  "Languages": FiCode,
  "AI/ML": FiCpu,
  "Backend & APIs": FiServer,
  "Frontend": FiLayout,
  "Databases": FiDatabase,
  "DevOps & Tools": FiSettings,
  "Core CS": FiTerminal,
};

const CATEGORY_IMAGE_MAP: Record<string, string> = {
  "Languages": "/skills/languages.png",
  "AI/ML": "/skills/ai_ml.png",
  "Backend & APIs": "/skills/backend.png",
  "Frontend": "/skills/frontend.png",
  "Databases": "/skills/databases.png",
  "DevOps & Tools": "/skills/devops.png",
  "Core CS": "/skills/core_cs.png",
};

const SKILL_ICON_MAP: Record<string, any> = {
  "Python": SiPython,
  "TypeScript": SiTypescript,
  "JavaScript": SiJavascript,
  "C++": SiCplusplus,
  "PostgreSQL": SiPostgresql,
  "Supabase": SiSupabase,
  "Docker": SiDocker,
  "GitHub": SiGithub,
  "Git": SiGit,
  "React.js": SiReact,
  "Next.js": SiNextdotjs,
  "FastAPI": SiFastapi,
  "Node.js": SiNodedotjs,
  "PyTorch": SiPytorch,
  "NoSQL": SiMongodb,
  "Vite": SiVite,
  "Tailwind CSS": SiTailwindcss,
  "Firebase": SiFirebase,
  "Linux CLI": SiLinux,
  "Datadog": SiDatadog,
  "Cloudinary": SiCloudinary,
  "Slack": SiSlack,
  "Vercel": SiVercel,
  "Netlify": SiNetlify,
};

export default function Skills() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const lineHeight = useSpring(useTransform(scrollYProgress, [0, 0.8], ["0%", "100%"]), {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <section id="skills" ref={containerRef} className="py-32 relative overflow-hidden bg-bg">
      <Container>
        <div className="space-y-32">
          {/* Header */}
          <div className="space-y-6 text-center">
            <h2 className="text-5xl md:text-8xl font-black text-white uppercase tracking-tighter">
              Technical <span className="text-primary italic">Arsenal</span>
            </h2>
            <p className="text-white/40 max-w-2xl mx-auto text-lg uppercase font-bold tracking-[0.2em]">
              Architecting the future with a world-class technology stack.
            </p>
          </div>

          <div className="relative max-w-6xl mx-auto px-4 sm:px-10">
            {/* Central Vertical Line */}
            <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-[2px] bg-white/5 hidden md:block">
              <motion.div
                style={{ height: lineHeight }}
                className="w-full bg-gradient-to-b from-primary via-primary to-transparent shadow-[0_0_20px_rgba(0,255,163,0.5)]"
              />
            </div>

            {/* Timeline Items */}
            <div className="space-y-24">
              {SKILLS.map((category, idx) => {
                const CategoryIcon = CATEGORY_ICON_MAP[category.category] || FiBox;
                const isEven = idx % 2 === 0;

                return (
                  <div key={category.category} className={`flex flex-col md:flex-row items-center gap-12 ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                    {/* Card Content */}
                    <motion.div
                      initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: "-100px" }}
                      transition={{ duration: 0.8, ease: "easeOut" }}
                      className="w-full md:w-[calc(50%-48px)] group"
                    >
                      <div className="relative p-1 rounded-[2.5rem] bg-gradient-to-br from-white/10 to-transparent hover:from-primary/20 transition-all duration-700 overflow-hidden">
                        <div className="h-full bg-surface/90 backdrop-blur-3xl rounded-[2.4rem] border border-white/5 overflow-hidden">
                          {/* Category Image Header */}
                          <div className="h-40 relative overflow-hidden">
                            <Image
                              src={CATEGORY_IMAGE_MAP[category.category] || "/skills/default.png"}
                              alt={category.category}
                              fill
                              className="object-cover opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all duration-1000"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-surface to-transparent" />
                            <div className="absolute bottom-6 left-8 flex items-center gap-4">
                              <div className="p-3 bg-black/50 backdrop-blur-md rounded-2xl text-primary border border-white/10">
                                <CategoryIcon className="text-2xl" />
                              </div>
                              <h3 className="text-xl font-black text-white uppercase tracking-tight">
                                {category.category}
                              </h3>
                            </div>
                          </div>

                          {/* Skill List */}
                          <div className="p-8">
                            <div className="flex flex-wrap gap-2.5">
                              {category.items.map((skill) => {
                                const SkillIcon = SKILL_ICON_MAP[skill];
                                return (
                                  <div 
                                    key={skill}
                                    className="flex items-center gap-2.5 px-4 py-2 bg-white/5 border border-white/10 rounded-xl text-[11px] font-black text-white uppercase tracking-widest hover:text-bg hover:bg-primary hover:border-primary transition-all duration-300 cursor-default group/skill shadow-lg"
                                  >
                                    {SkillIcon && <SkillIcon className="text-sm text-primary group-hover/skill:text-bg group-hover/skill:scale-110 transition-all" />}
                                    {skill}
                                  </div>
                                );
                              })}
                            </div>
                          </div>
                        </div>
                      </div>
                    </motion.div>

                    {/* Central Indicator Dot */}
                    <div className="relative z-10 hidden md:block">
                      <motion.div
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        className="w-6 h-6 rounded-full bg-bg border-4 border-primary shadow-[0_0_20px_rgba(0,255,163,0.5)]"
                      />
                    </div>

                    {/* Spacer for non-card side */}
                    <div className="hidden md:block w-[calc(50%-48px)]" />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
