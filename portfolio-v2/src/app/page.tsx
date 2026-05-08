"use client";

import { useState, Suspense, lazy } from "react";
import dynamic from "next/dynamic";
import LoadingScreen from "@/components/LoadingScreen";
import Hero from "@/components/Hero";
import { ErrorBoundary } from "@/components/ErrorBoundary";

// Dynamic imports for performance
const Scene = dynamic(() => import("@/components/Scene"), { ssr: false });
const About = lazy(() => import("@/components/About"));
const Experience = lazy(() => import("@/components/Experience"));
const ResearchSection = lazy(() => import("@/components/ResearchSection"));
const Achievements = lazy(() => import("@/components/Achievements"));
const GitHubStats = lazy(() => import("@/components/GitHubStats"));
const Projects = lazy(() => import("@/components/Projects"));
const Skills = lazy(() => import("@/components/Skills"));
const Contact = lazy(() => import("@/components/Contact"));

import { useScrollSnap } from "@/hooks/useScrollSnap";

export default function Home() {
  const [loading, setLoading] = useState(true);
  useScrollSnap();

  return (
    <>
      {loading && <LoadingScreen onComplete={() => setLoading(false)} />}
      
      {!loading && (
        <div className="relative w-full">
          {/* 3D Scene - Wrapped in ErrorBoundary */}
          <ErrorBoundary>
            <Suspense fallback={null}>
              <Scene />
            </Suspense>
          </ErrorBoundary>
          
          <Hero />
          
          <Suspense fallback={<SectionLoader />}>
            <About />
          </Suspense>
          <Suspense fallback={<SectionLoader />}>
            <Experience />
          </Suspense>
          <Suspense fallback={<SectionLoader />}>
            <ResearchSection />
          </Suspense>
          <Suspense fallback={<SectionLoader />}>
            <Achievements />
          </Suspense>
          <Suspense fallback={<SectionLoader />}>
            <Projects />
          </Suspense>
          <Suspense fallback={<SectionLoader />}>
            <GitHubStats />
          </Suspense>
          <Suspense fallback={<SectionLoader />}>
            <Skills />
          </Suspense>
          <Suspense fallback={<SectionLoader />}>
            <Contact />
          </Suspense>

          <footer className="py-12 text-center border-t border-white/5 bg-[#050505]">
            <p className="text-text-secondary text-[10px] tracking-[0.3em] font-medium uppercase">
              &copy; {new Date().getFullYear()} Mahak Agarwal. Built for Scale.
            </p>
          </footer>
        </div>
      )}
    </>
  );
}

function SectionLoader() {
  return (
    <div className="h-96 flex items-center justify-center">
      <div className="w-8 h-8 border-2 border-primary/20 border-t-primary rounded-full animate-spin" />
    </div>
  );
}
