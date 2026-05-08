"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { FiMail, FiLinkedin, FiGithub, FiDownload, FiCheck, FiCopy, FiClock, FiCoffee } from "react-icons/fi";
import { GREETING, SOCIAL_LINKS } from "@/data/portfolio";
import { Container } from "./ui/Container";
import { Button } from "./ui/Button";
import { useToast } from "@/components/Toast";
import TextReveal from "./TextReveal";

export default function Contact() {
  const { showToast } = useToast();
  const [copied, setCopied] = useState<string | null>(null);
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    org: "",
    message: "",
    discovery: "",
    honeypot: ""
  });

  const handleCopy = (text: string, type: string) => {
    navigator.clipboard.writeText(text);
    setCopied(type);
    showToast(`${type} copied to clipboard!`, "success");
    setTimeout(() => setCopied(null), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formState.honeypot) return; // Anti-spam
    showToast("Transmission sent! I'll get back to you shortly.", "success");
    setFormState({ name: "", email: "", org: "", message: "", discovery: "", honeypot: "" });
  };

  return (
    <section id="contact" className="py-32 relative overflow-hidden bg-white/[0.01]">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Left: Info & Outreach */}
          <div className="lg:col-span-5 space-y-12">
            <div className="layer-content">
              <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tighter">
                Direct <span className="text-primary italic"><TextReveal text="Outreach" delay={0.3} /></span>
              </h2>
              <p className="text-text-secondary max-w-sm">
                Optimized for recruiters, venture capital, and research collaborators. 
                Average response time: 24h.
              </p>
            </div>

            {/* Availability Badge */}
            <div className="p-6 bg-primary/5 border border-primary/20 rounded-3xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-4">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-primary"></span>
                </span>
              </div>
              <h4 className="text-xs font-bold text-primary tracking-[0.2em] uppercase mb-2">Availability Protocol</h4>
              <p className="text-lg font-black text-white leading-tight">
                {GREETING.availability}
              </p>
              <div className="mt-4 flex items-center gap-2 text-[10px] text-text-secondary font-bold uppercase tracking-widest">
                <FiClock className="text-primary" /> Current Zone: {GREETING.location}
              </div>
            </div>

            {/* Quick Contact Buttons */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <button 
                onClick={() => handleCopy(SOCIAL_LINKS.email, "Email")}
                className="flex items-center justify-between p-4 bg-white/5 border border-white/10 rounded-2xl hover:border-primary/50 transition-all group"
              >
                <div className="flex items-center gap-3">
                  <FiMail className="text-primary" />
                  <span className="text-xs font-bold text-white/80">EMAIL</span>
                </div>
                {copied === "Email" ? <FiCheck className="text-primary" /> : <FiCopy className="text-white/20 group-hover:text-primary transition-colors" />}
              </button>
              <button 
                onClick={() => window.open(SOCIAL_LINKS.linkedin, "_blank")}
                className="flex items-center justify-between p-4 bg-white/5 border border-white/10 rounded-2xl hover:border-primary/50 transition-all group"
              >
                <div className="flex items-center gap-3">
                  <FiLinkedin className="text-primary" />
                  <span className="text-xs font-bold text-white/80">LINKEDIN</span>
                </div>
                <FiExternalLink className="text-white/20 group-hover:text-primary transition-colors" />
              </button>
            </div>

            {/* Preferred Methods */}
            <div className="space-y-4">
              <div className="flex items-center gap-4 text-[10px] font-bold text-text-secondary uppercase tracking-[0.3em]">
                <span className="text-primary">01</span> Priority Outreach: Email (24h)
              </div>
              <div className="flex items-center gap-4 text-[10px] font-bold text-text-secondary uppercase tracking-[0.3em]">
                <span className="text-primary">02</span> Professional Networking: LinkedIn (48h)
              </div>
            </div>

            {/* Coffee Chat */}
            <div className="pt-8 border-t border-white/5">
              <Button 
                variant="outline" 
                className="w-full gap-3 py-6 rounded-2xl border-primary/20 hover:border-primary group"
                onClick={() => showToast("Calendly integration coming soon!", "info")}
              >
                <FiCoffee className="text-primary group-hover:rotate-12 transition-transform" /> 
                SCHEDULE A 15-MIN COFFEE CHAT
              </Button>
            </div>
          </div>

          {/* Right: Minimalist Form */}
          <div className="lg:col-span-7">
            <form onSubmit={handleSubmit} className="p-8 md:p-12 bg-surface/30 backdrop-blur-xl border border-white/5 rounded-[40px] space-y-8 relative overflow-hidden shadow-2xl">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-[10px] font-bold text-primary tracking-[0.2em] uppercase ml-1">Identity</label>
                  <input 
                    required
                    type="text" 
                    placeholder="Name / Alias"
                    className="w-full bg-bg/50 border border-white/10 rounded-2xl px-6 py-4 text-sm focus:border-primary outline-none transition-all"
                    value={formState.name}
                    onChange={e => setFormState({...formState, name: e.target.value})}
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold text-primary tracking-[0.2em] uppercase ml-1">Transmission Port</label>
                  <input 
                    required
                    type="email" 
                    placeholder="Email Address"
                    className="w-full bg-bg/50 border border-white/10 rounded-2xl px-6 py-4 text-sm focus:border-primary outline-none transition-all"
                    value={formState.email}
                    onChange={e => setFormState({...formState, email: e.target.value})}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-bold text-primary tracking-[0.2em] uppercase ml-1">Affiliation (Optional)</label>
                <input 
                  type="text" 
                  placeholder="Company / University / Lab"
                  className="w-full bg-bg/50 border border-white/10 rounded-2xl px-6 py-4 text-sm focus:border-primary outline-none transition-all"
                  value={formState.org}
                  onChange={e => setFormState({...formState, org: e.target.value})}
                />
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-bold text-primary tracking-[0.2em] uppercase ml-1">Encrypted Message</label>
                <textarea 
                  required
                  rows={4}
                  placeholder="Tell me about your project, research, or role..."
                  className="w-full bg-bg/50 border border-white/10 rounded-2xl px-6 py-4 text-sm focus:border-primary outline-none transition-all resize-none"
                  value={formState.message}
                  onChange={e => setFormState({...formState, message: e.target.value})}
                />
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-bold text-primary tracking-[0.2em] uppercase ml-1">Discovery Route</label>
                <select 
                  className="w-full bg-bg/50 border border-white/10 rounded-2xl px-6 py-4 text-sm focus:border-primary outline-none transition-all appearance-none"
                  value={formState.discovery}
                  onChange={e => setFormState({...formState, discovery: e.target.value})}
                >
                  <option value="" disabled>How did you find me?</option>
                  <option value="linkedin">LinkedIn</option>
                  <option value="github">GitHub</option>
                  <option value="research">Research Publication</option>
                  <option value="bits">BITS Pilani / Scaler</option>
                  <option value="other">Other</option>
                </select>
              </div>

              {/* Honeypot Anti-Spam */}
              <input 
                type="text" 
                className="hidden" 
                value={formState.honeypot} 
                onChange={e => setFormState({...formState, honeypot: e.target.value})} 
              />

              <Button type="submit" variant="primary" className="w-full py-8 text-lg font-black tracking-widest shadow-[0_0_40px_rgba(0,255,163,0.2)]">
                INITIALIZE TRANSMISSION
              </Button>
            </form>
          </div>
        </div>

        {/* Social Proof Strip */}
        <div className="mt-32 pt-20 border-t border-white/5 flex flex-wrap justify-center gap-12 grayscale opacity-30">
          <span className="text-xl font-black text-white tracking-tighter">BITS PILANI</span>
          <span className="text-xl font-black text-white tracking-tighter">SCALER</span>
          <span className="text-xl font-black text-white tracking-tighter">INSPIRE</span>
          <span className="text-xl font-black text-white tracking-tighter">GSSoC</span>
        </div>
      </Container>
    </section>
  );
}

function FiExternalLink(props: any) {
  return (
    <svg 
      stroke="currentColor" 
      fill="none" 
      strokeWidth="2" 
      viewBox="0 0 24 24" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      height="1em" 
      width="1em" 
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
      <polyline points="15 3 21 3 21 9"></polyline>
      <line x1="10" y1="14" x2="21" y2="3"></line>
    </svg>
  );
}
