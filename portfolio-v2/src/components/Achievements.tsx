"use client";

import React from "react";
import { Container } from "./ui/Container";
import { AnimatedCounter, ProgressCircle, AchievementCard } from "./StatsComponents";
import { FiGithub, FiAward, FiZap, FiCode } from "react-icons/fi";
import { motion } from "framer-motion";
import TextReveal from "./TextReveal";

export default function Achievements() {
  return (
    <section className="py-32 relative overflow-hidden bg-white/[0.01]">
      <Container>
        <div className="mb-20">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tighter">
            Engineering <span className="text-primary italic"><TextReveal text="Milestones" delay={0.3} /></span>
          </h2>
          <p className="text-text-secondary max-w-2xl">
            Quantitative metrics of my journey in building scalable systems and 
            researching next-generation AI architectures.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
          <AchievementCard 
            icon={FiCode}
            title="Projects Delivered"
            value="6+"
            sub="End-to-end full stack & AI systems"
          />
          <AchievementCard 
            icon={FiAward}
            title="Global Rank"
            value="AIR-4"
            sub="Competitive programming excellence"
          />
          <AchievementCard 
            icon={FiGithub}
            title="GitHub Stars"
            value="250+"
            sub="Community recognized open-source"
          />
          <AchievementCard 
            icon={FiZap}
            title="Learning Velocity"
            value="Top 1%"
            sub="Rapid adaptation to new tech stacks"
          />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 pt-12 border-t border-white/5">
          <ProgressCircle percentage={95} label="Optimization Rate" />
          <ProgressCircle percentage={88} label="Deployment Uptime" />
          <ProgressCircle percentage={92} label="Code Efficiency" />
          <ProgressCircle percentage={85} label="System Scalability" />
        </div>

        <div className="mt-24 p-12 bg-primary/5 rounded-[40px] border border-primary/10 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold mb-2">Ready to scale your next big idea?</h3>
            <p className="text-text-secondary">Leverage elite engineering for high-impact systems.</p>
          </div>
          <div className="flex items-center gap-12">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-1">
                <AnimatedCounter target={100} suffix="%" />
              </div>
              <div className="text-[10px] text-text-secondary uppercase tracking-widest">Commitment</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-1">
                <AnimatedCounter target={24} suffix="/7" />
              </div>
              <div className="text-[10px] text-text-secondary uppercase tracking-widest">Monitoring</div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
