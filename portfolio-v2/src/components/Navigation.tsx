"use client";

import { motion } from "framer-motion";
import { Home, User, Briefcase, Code, Mail, Globe, Cpu } from "lucide-react";
import { useState } from "react";

const navItems = [
  { icon: <Home size={22} />, label: "HOME", href: "#home" },
  { icon: <User size={22} />, label: "ABOUT", href: "#about" },
  { icon: <Cpu size={22} />, label: "SKILLS", href: "#skills" },
  { icon: <Briefcase size={22} />, label: "EXPERIENCE", href: "#experience" },
  { icon: <Code size={22} />, label: "PROJECTS", href: "#projects" },
  { icon: <Mail size={22} />, label: "CONTACT", href: "#contact" },
];

export default function Navigation() {
  const [active, setActive] = useState("HOME");

  return (
    <nav className="sidebar">
      {/* Top Logo - Sudip style but with M */}
      <div className="flex flex-col items-center">
        <div className="relative group cursor-pointer">
          <span className="text-[#fd2155] font-black text-5xl italic">M</span>
          <div className="absolute inset-0 text-[#00ffa3] font-black text-5xl italic translate-x-[2px] translate-y-[2px] opacity-40 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform">M</div>
        </div>
        <span className="text-[10px] text-white font-bold tracking-widest mt-2">MAHAK</span>
      </div>

      {/* Center Nav */}
      <div className="flex flex-col gap-6">
        {navItems.map((item) => (
          <a
            key={item.label}
            href={item.href}
            onClick={() => setActive(item.label)}
            className={`group relative flex items-center justify-center p-2 transition-all duration-300 ${
              active === item.label ? "text-[#00ffa3]" : "text-[#4d4d4e] hover:text-[#00ffa3]"
            }`}
          >
            <div className={`transition-transform duration-300 ${active === item.label ? "scale-125" : "group-hover:scale-110"}`}>
              {item.icon}
            </div>
            <span className="absolute left-[65px] px-3 py-1 bg-[#00ffa3] text-black text-[10px] font-black rounded-sm opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none uppercase tracking-tighter whitespace-nowrap z-50">
              {item.label}
            </span>
          </a>
        ))}
      </div>

      {/* Bottom Icons */}
      <div className="flex flex-col gap-4 mb-4">
        <a href="https://linkedin.com/in/mahakagarwal" target="_blank" className="text-[#4d4d4e] hover:text-[#00ffa3] transition-colors">
          <Globe size={18} />
        </a>
        <a href="https://github.com/mahakagarwal7" target="_blank" className="text-[#4d4d4e] hover:text-[#00ffa3] transition-colors">
          <Code size={18} />
        </a>
      </div>
    </nav>
  );
}
