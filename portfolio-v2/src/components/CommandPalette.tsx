"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiSearch, FiCommand, FiHome, FiBriefcase, FiCode, FiAward, FiGithub, FiFileText } from "react-icons/fi";
import { useRouter } from "next/navigation";
import { PROJECTS } from "@/data/portfolio";

export default function CommandPalette() {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState("");
  const router = useRouter();

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setIsOpen((open) => !open);
      }
      if (e.key === "Escape") {
        setIsOpen(false);
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  const actions = [
    { id: "home", label: "Jump to Home", icon: <FiHome />, section: "Navigation" },
    { id: "projects", label: "Jump to Projects", icon: <FiBriefcase />, section: "Navigation" },
    { id: "skills", label: "Jump to Skills", icon: <FiCode />, section: "Navigation" },
    { id: "achievements", label: "Jump to Achievements", icon: <FiAward />, section: "Navigation" },
    { id: "resume", label: "Download Resume", icon: <FiFileText />, section: "Quick Actions" },
    { id: "github", label: "Open GitHub", icon: <FiGithub />, section: "External" },
    ...PROJECTS.map(p => ({ id: `project-${p.id}`, label: `View ${p.name}`, icon: <FiBriefcase />, section: "Projects", project: p }))
  ];

  const filteredActions = actions.filter(a => 
    a.label.toLowerCase().includes(query.toLowerCase())
  );

  const handleAction = (action: any) => {
    if (action.id === "resume") {
      window.open("/Resume.pdf", "_blank");
    } else if (action.id === "github") {
      window.open("https://github.com/mahakagarwal7", "_blank");
    } else if (action.id.startsWith("project-")) {
      document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
    } else {
      document.getElementById(action.id)?.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
    setQuery("");
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[3000] flex items-start justify-center pt-[15vh] px-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="absolute inset-0 bg-black/60 backdrop-blur-md"
          />

          {/* Palette */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            className="relative w-full max-w-2xl bg-surface/80 border border-white/10 rounded-2xl overflow-hidden shadow-2xl backdrop-blur-2xl"
          >
            {/* Search Input */}
            <div className="flex items-center px-6 py-5 border-b border-white/5 gap-4">
              <FiSearch className="text-primary text-xl" />
              <input
                autoFocus
                placeholder="Type a command or search projects..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="w-full bg-transparent border-none outline-none text-white placeholder:text-white/20 font-medium"
              />
              <div className="flex items-center gap-1.5 px-2 py-1 bg-white/5 border border-white/10 rounded text-[10px] font-bold text-white/40 uppercase">
                <FiCommand size={10} /> K
              </div>
            </div>

            {/* Results */}
            <div className="max-h-[60vh] overflow-y-auto p-3 custom-scrollbar">
              {filteredActions.length > 0 ? (
                Object.entries(
                  filteredActions.reduce((acc: any, curr) => {
                    (acc[curr.section] = acc[curr.section] || []).push(curr);
                    return acc;
                  }, {})
                ).map(([section, items]: [any, any]) => (
                  <div key={section} className="mb-4 last:mb-0">
                    <h3 className="px-3 mb-2 text-[9px] font-black text-white/20 uppercase tracking-[0.2em]">
                      {section}
                    </h3>
                    <div className="space-y-1">
                      {items.map((item: any) => (
                        <button
                          key={item.id}
                          onClick={() => handleAction(item)}
                          className="w-full flex items-center gap-4 px-3 py-3 rounded-xl hover:bg-primary/10 hover:text-primary text-white/60 transition-all text-left group"
                        >
                          <div className="p-2 bg-white/5 rounded-lg group-hover:bg-primary group-hover:text-bg transition-all">
                            {item.icon}
                          </div>
                          <span className="text-sm font-bold uppercase tracking-tight">{item.label}</span>
                        </button>
                      ))}
                    </div>
                  </div>
                ))
              ) : (
                <div className="py-12 text-center space-y-2">
                  <p className="text-white/40 text-sm italic">No matching protocols found.</p>
                </div>
              )}
            </div>

            {/* Footer */}
            <div className="px-6 py-4 bg-white/[0.02] border-t border-white/5 flex items-center justify-between text-[9px] font-bold text-white/20 uppercase tracking-widest">
              <div className="flex gap-4">
                <span>↑↓ Navigate</span>
                <span>↵ Select</span>
              </div>
              <span>ESC Close</span>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
