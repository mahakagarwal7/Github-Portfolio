"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useAnimation } from "./AnimationProvider";

const SECTIONS = ["home", "about", "experience", "projects", "skills", "contact"];

export default function SectionDots() {
  const { scrollSnap } = useAnimation();
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sectionElements = SECTIONS.map(id => document.getElementById(id));
      const scrollPos = window.scrollY + window.innerHeight / 2;

      sectionElements.forEach((el, idx) => {
        if (el && scrollPos >= el.offsetTop && scrollPos < el.offsetTop + el.offsetHeight) {
          setActiveSection(SECTIONS[idx]);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!scrollSnap) return null;

  return (
    <div className="fixed right-10 top-1/2 -translate-y-1/2 z-[100] hidden lg:flex flex-col gap-4">
      {SECTIONS.map((id) => (
        <button
          key={id}
          onClick={() => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })}
          className="group relative flex items-center justify-end"
          aria-label={`Scroll to ${id}`}
        >
          <span className="absolute right-8 text-[10px] font-bold tracking-[0.3em] uppercase text-primary opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
            {id}
          </span>
          <div 
            className={`w-2 h-2 rounded-full border border-primary transition-all duration-300 ${
              activeSection === id ? "bg-primary scale-150 shadow-[0_0_10px_rgba(0,255,163,0.8)]" : "bg-transparent scale-100"
            }`}
          />
        </button>
      ))}
    </div>
  );
}
