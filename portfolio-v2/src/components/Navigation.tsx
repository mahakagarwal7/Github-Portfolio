"use client";

import { motion } from "framer-motion";
import { Home, User, Briefcase, Code, Mail, Cpu, Globe } from "lucide-react";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
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
      {/* Top Logo */}
      <div className="hidden md:flex flex-col items-center mt-4">
        <div className="relative group cursor-pointer flex flex-col items-center">
          <div className="relative">
            <span className="text-[#fd2155] font-black text-5xl italic leading-none font-serif relative z-10 transition-all duration-300 group-hover:scale-110 shadow-neon">M</span>
            <span className="absolute inset-0 text-[#00ffa3] font-black text-5xl italic leading-none translate-x-[2px] translate-y-[2px] opacity-40 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform font-serif z-0 animate-pulse">M</span>
          </div>
          <span className="text-[0.65rem] text-white font-black tracking-[0.2rem] mt-2 group-hover:text-[#00ffa3] transition-colors duration-300">MAHAK</span>
        </div>
      </div>

      {/* Center Nav */}
      <div className="flex flex-row md:flex-col gap-4 md:gap-8 w-full md:w-auto justify-evenly md:justify-center">
        {navItems.map((item) => (
          <a
            key={item.label}
            href={item.href}
            onClick={() => setActive(item.label)}
            className={`group relative flex items-center justify-center p-2 transition-all duration-300 ${
              active === item.label ? "text-[#00ffa3] drop-shadow-[0_0_10px_#00ffa3]" : "text-[#4d4d4e] hover:text-[#00ffa3]"
            }`}
          >
            <div className={`transition-all duration-300 ${active === item.label ? "scale-125" : "group-hover:scale-110"}`}>
              {item.icon}
            </div>
            {/* Tooltip */}
            <span className="hidden md:block absolute left-16 px-4 py-2 bg-[#00ffa3] text-black text-xs font-black rounded-sm opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none uppercase tracking-tighter whitespace-nowrap z-50">
              {item.label}
            </span>
          </a>
        ))}
      </div>

      {/* Bottom Socials */}
      <div className="hidden md:flex flex-col gap-6 mb-6 items-center">
        <a href="https://linkedin.com/in/mahakagarwal" target="_blank" className="text-[#4d4d4e] hover:text-[#00ffa3] transition-colors">
          <FaLinkedinIn size={20} />
        </a>
        <a href="https://github.com/mahakagarwal7" target="_blank" className="text-[#4d4d4e] hover:text-[#00ffa3] transition-colors">
          <FaGithub size={20} />
        </a>
      </div>
    </nav>
  );
}
