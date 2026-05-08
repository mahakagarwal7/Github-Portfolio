"use client";

import { motion } from "framer-motion";
import { Cpu, Code, Globe, Database, CpuIcon, Terminal } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="page-container about-page">
      <div className="text-zone">
        <h1 className="relative">
          <span className="h1-tag-top">&lt;h1&gt;</span>
          About Me
          <span className="h1-tag-bottom">&lt;h1/&gt;</span>
        </h1>
        
        <p>
          I’m a DevOps and Full Stack Engineer with over 2 years of experience, specializing in 
          automating workflows, optimizing CI/CD pipelines, and deploying intelligent systems.
        </p>
        <p>
          I'm a problem solver with high attention to detail. 
          Fan of MMA, outdoor activities, TV series and recently, research-oriented AI Systems.
        </p>
        <p>
          Interested in the entire frontend/backend spectrum and working on ambitious projects with 
          positive people.
        </p>
      </div>

      {/* 1:1 Cube Spinner Decoration */}
      <div className="stage-cube-cont">
        <div className="cubespinner">
          <div className="face1"><Cpu size={120} /></div>
          <div className="face2"><Code size={120} /></div>
          <div className="face3"><Globe size={120} /></div>
          <div className="face4"><Database size={120} /></div>
          <div className="face5"><CpuIcon size={120} /></div>
          <div className="face6"><Terminal size={120} /></div>
        </div>
      </div>
    </section>
  );
}
