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
    <main className="relative">
      {loading && <LoadingScreen onComplete={() => setLoading(false)} />}
      
      {!loading && (
        <>
          <Scene />
          <Navigation />
          
          <div id="home">
            <Hero />
          </div>
          
          <About />
          
          <Experience />
          
          <Projects />
          
          <Skills />
          
          <Contact />

          <footer className="py-10 text-center border-t border-white/5 bg-black">
            <p className="text-gray-500 text-sm font-space tracking-widest uppercase">
              &copy; {new Date().getFullYear()} Mahak Agarwal. Engineered for Excellence.
            </p>
          </footer>
        </>
      )}
    </main>
  );
}
