"use client";

import { motion } from "framer-motion";
import { SOCIAL_LINKS } from "@/data/portfolio";
import { Container } from "./ui/Container";
import { FiMail, FiLinkedin, FiGithub, FiCopy, FiSend } from "react-icons/fi";
import { useState } from "react";

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(SOCIAL_LINKS.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="py-32 relative overflow-hidden bg-bg">
      {/* Decorative Background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-[0.03]">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] rotate-12">
          <div className="w-full h-full border-[1px] border-dashed border-white/20 rounded-full animate-[spin_60s_linear_infinite]" />
          <div className="absolute inset-20 border-[1px] border-dashed border-white/10 rounded-full animate-[spin_40s_linear_infinite_reverse]" />
          <div className="absolute inset-40 border-[1px] border-dashed border-white/5 rounded-full animate-[spin_80s_linear_infinite]" />
        </div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#00ffa3_0.5px,transparent_0.5px)] bg-[size:100px_100px]" />
      </div>

      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          
          {/* Left: Info */}
          <div className="space-y-12">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tighter">
                Initiate <span className="text-primary italic">Contact</span>
              </h2>
              <p className="text-text-secondary max-w-xl">
                Ready for collaborations in AI systems, research engineering, and scalable infrastructure.
              </p>
            </div>

            <div className="space-y-6">
              <button 
                onClick={copyEmail}
                className="flex items-center gap-6 p-6 bg-surface border border-white/5 hover:border-primary/30 rounded-3xl transition-all group w-full text-left"
              >
                <div className="p-4 bg-primary/10 rounded-2xl text-primary">
                  <FiMail size={24} />
                </div>
                <div className="flex-1">
                  <div className="text-[10px] font-black text-white/40 uppercase tracking-widest mb-1">Email Protocol</div>
                  <div className="text-lg font-bold text-white group-hover:text-primary transition-colors">{SOCIAL_LINKS.email}</div>
                </div>
                <FiCopy className={`transition-opacity ${copied ? 'opacity-100' : 'opacity-20'}`} />
              </button>

              <div className="grid grid-cols-2 gap-4">
                <a 
                  href={SOCIAL_LINKS.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col gap-4 p-6 bg-surface border border-white/5 hover:border-primary/30 rounded-3xl transition-all group"
                >
                  <FiLinkedin size={24} className="text-primary" />
                  <div className="text-[10px] font-black text-white/40 uppercase tracking-widest">LinkedIn</div>
                </a>
                <a 
                  href={SOCIAL_LINKS.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col gap-4 p-6 bg-surface border border-white/5 hover:border-primary/30 rounded-3xl transition-all group"
                >
                  <FiGithub size={24} className="text-primary" />
                  <div className="text-[10px] font-black text-white/40 uppercase tracking-widest">GitHub</div>
                </a>
              </div>
            </div>
          </div>

          {/* Right: Form */}
          <div className="p-10 bg-surface border border-white/10 rounded-[40px] shadow-2xl">
            <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
              <div className="space-y-2">
                <label className="text-[10px] font-black text-white/40 uppercase tracking-widest ml-1">Identity</label>
                <input 
                  type="text" 
                  placeholder="Your Name" 
                  className="w-full bg-bg border border-white/5 rounded-2xl px-6 py-4 text-sm focus:border-primary outline-none transition-all" 
                />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black text-white/40 uppercase tracking-widest ml-1">Email Address</label>
                <input 
                  type="email" 
                  placeholder="email@example.com" 
                  className="w-full bg-bg border border-white/5 rounded-2xl px-6 py-4 text-sm focus:border-primary outline-none transition-all" 
                />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black text-white/40 uppercase tracking-widest ml-1">Transmission</label>
                <textarea 
                  rows={4} 
                  placeholder="Your message..." 
                  className="w-full bg-bg border border-white/5 rounded-2xl px-6 py-4 text-sm focus:border-primary outline-none transition-all resize-none" 
                />
              </div>
              
              <button 
                className="w-full py-4 bg-primary text-bg font-black uppercase text-xs tracking-[0.2em] rounded-2xl hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-3"
              >
                Send Message <FiSend />
              </button>
            </form>
          </div>

        </div>
      </Container>
    </section>
  );
}
