"use client";

import React, { useEffect, useState } from "react";
import { FaHome, FaBriefcase, FaCode, FaEnvelope, FaGithub, FaLinkedinIn } from "react-icons/fa";
import { motion } from "framer-motion";

const navItems = [
  { id: "home", icon: <FaHome />, label: "Home" },
  { id: "projects", icon: <FaBriefcase />, label: "Projects" },
  { id: "education", icon: <FaBriefcase />, label: "Academic" },
  { id: "skills", icon: <FaCode />, label: "Skills" },
  { id: "achievements", icon: <FaCode />, label: "Achievements" },
  { id: "github", icon: <FaGithub />, label: "GitHub" },
  { id: "contact", icon: <FaEnvelope />, label: "Contact" },
];

export default function Navigation() {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 200;

      sections.forEach(section => {
        if (section) {
          const sectionTop = section.offsetTop;
          const sectionHeight = section.offsetHeight;
          if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            setActiveSection(section.id);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = window.innerWidth < 768 ? 80 : 0;
      window.scrollTo({
        top: element.offsetTop - offset,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      {/* Desktop Sidebar */}
      <nav className="fixed left-0 top-0 h-screen w-20 hidden md:flex flex-col items-center justify-between py-10 bg-bg/50 backdrop-blur-md border-r border-white/5 z-[100]">
        <div className="text-primary font-black text-2xl tracking-tighter">MA</div>

        <div className="flex flex-col gap-8">
          {navItems.map((item) => (
            <a
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`relative p-3 rounded-xl transition-all duration-300 cursor-pointer group ${
                activeSection === item.id ? "text-primary bg-white/5" : "text-text-secondary hover:text-white"
              }`}
            >
              <div className="text-xl group-hover:scale-125 transition-transform">{item.icon}</div>
              
              {/* Tooltip */}
              <span className="absolute left-16 top-1/2 -translate-y-1/2 px-3 py-1 bg-primary text-bg text-[10px] font-bold rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap uppercase tracking-widest">
                {item.label}
              </span>

              {/* Active Indicator Line */}
              {activeSection === item.id && (
                <motion.div
                  layoutId="activeNav"
                  className="absolute -left-[21px] top-1/2 -translate-y-1/2 w-[3px] h-6 bg-primary rounded-r-full shadow-[0_0_10px_#00ffa3]"
                />
              )}
            </a>
          ))}
        </div>

        <div className="flex flex-col gap-6 items-center">
          <a 
            href="https://github.com/mahakagarwal7" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-text-secondary hover:text-primary transition-all hover:scale-125"
          >
            <FaGithub size={18} />
          </a>
          <a 
            href="https://linkedin.com/in/mahakagarwal" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-text-secondary hover:text-primary transition-all hover:scale-125"
          >
            <FaLinkedinIn size={18} />
          </a>
        </div>
      </nav>

      {/* Mobile Bottom Bar */}
      <nav className="fixed bottom-0 left-0 right-0 h-16 md:hidden flex items-center justify-around bg-bg/80 backdrop-blur-lg border-t border-white/5 z-[100] px-4">
        {navItems.slice(0, 5).map((item) => (
          <a
            key={item.id}
            onClick={() => scrollToSection(item.id)}
            className={`relative p-2 transition-all duration-300 ${
              activeSection === item.id ? "text-primary" : "text-text-secondary"
            }`}
          >
            <div className="text-lg">{item.icon}</div>
            {activeSection === item.id && (
              <motion.div
                layoutId="activeNavMobile"
                className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-1 h-1 bg-primary rounded-full shadow-[0_0_5px_#00ffa3]"
              />
            )}
          </a>
        ))}
      </nav>
    </>
  );
}
