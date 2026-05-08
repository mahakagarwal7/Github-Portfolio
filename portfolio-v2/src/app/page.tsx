"use client";

import { useState } from "react";
import Scene from "@/components/Scene";
import Hero from "@/components/Hero";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Navigation from "@/components/Navigation";
import LoadingScreen from "@/components/LoadingScreen";

export default function Home() {
  const [loading, setLoading] = useState(true);

  return (
    <>
      {loading && <LoadingScreen onComplete={() => setLoading(false)} />}
      
      {!loading && (
        <div className="relative w-full">
          <Scene />
          
          <Hero />
          
          <About />
          
          <Experience />
          
          <Projects />
          
          <Skills />
          
          <Contact />

          <footer className="py-10 text-center border-t border-white/5 bg-[#020617]">
            <p className="text-gray-500 text-xs tracking-[0.2em] font-light uppercase">
              &copy; {new Date().getFullYear()} Mahak Agarwal. Engineered for Excellence.
            </p>
          </footer>
        </div>
      )}
    </>
  );
}
