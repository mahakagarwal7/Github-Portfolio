"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiDownload, FiMail, FiShare2, FiGithub, FiLinkedin, FiLayers } from "react-icons/fi";
import { GREETING, SOCIAL_LINKS } from "@/data/portfolio";
import { useToast } from "@/components/Toast";

export default function FloatingBar() {
  const { showToast } = useToast();
  const [isVisible, setIsVisible] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > 300) {
        setIsVisible(currentScrollY < lastScrollY);
      } else {
        setIsVisible(false);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const copyEmail = () => {
    navigator.clipboard.writeText(SOCIAL_LINKS.email);
    showToast("Email copied to clipboard!", "success");
  };

  const sharePortfolio = () => {
    navigator.clipboard.writeText(window.location.href);
    showToast("Portfolio link copied!", "success");
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0, x: "-50%" }}
          animate={{ y: 0, opacity: 1, x: "-50%" }}
          exit={{ y: 100, opacity: 0, x: "-50%" }}
          className="fixed bottom-8 left-1/2 z-[100] flex items-center gap-2 p-2 bg-surface/80 backdrop-blur-2xl border border-white/10 rounded-full shadow-2xl"
        >
          <BarItem icon={FiDownload} label="Resume" onClick={() => window.open(GREETING.resumeLink, "_blank")} />
          <BarItem icon={FiMail} label="Email" onClick={copyEmail} />
          <BarItem icon={FiShare2} label="Share" onClick={sharePortfolio} />
          <div className="w-px h-6 bg-white/10 mx-1" />
          <BarItem icon={FiGithub} label="GitHub" onClick={() => window.open(SOCIAL_LINKS.github, "_blank")} />
          <BarItem icon={FiLinkedin} label="LinkedIn" onClick={() => window.open(SOCIAL_LINKS.linkedin, "_blank")} />
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function BarItem({ icon: Icon, label, onClick }: { icon: any; label: string; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className="group relative flex items-center justify-center p-3 rounded-full hover:bg-primary transition-all duration-500"
    >
      <Icon className="text-white group-hover:text-bg transition-colors text-lg" />
      
      {/* Tooltip */}
      <div className="absolute bottom-full mb-3 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
        <div className="bg-bg border border-white/10 px-3 py-1.5 rounded-xl whitespace-nowrap shadow-xl">
          <span className="text-[10px] font-bold text-white tracking-[0.2em] uppercase">{label}</span>
        </div>
        {/* Tooltip Triangle */}
        <div className="w-2 h-2 bg-bg border-r border-b border-white/10 rotate-45 mx-auto -mt-1" />
      </div>
    </button>
  );
}
