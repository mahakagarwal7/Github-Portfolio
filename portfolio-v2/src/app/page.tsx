"use client";

import { useState, Suspense, lazy } from "react";
import Hero from "@/components/Hero";
import Loading3D from "@/components/Loading3D";
import { useScroll, useSpring, motion, AnimatePresence } from "framer-motion";

// Lazy load non-critical sections
const Projects = lazy(() => import("@/components/Projects"));
const Research = lazy(() => import("@/components/Research"));
const Education = lazy(() => import("@/components/Education"));
const Achievements = lazy(() => import("@/components/Achievements"));
const Skills = lazy(() => import("@/components/Skills"));
const GitHubStats = lazy(() => import("@/components/GitHubStats"));
const Contact = lazy(() => import("@/components/Contact"));
const SectionDivider = lazy(() => import("@/components/3d/SectionDivider"));

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading && (
          <Loading3D key="loader" onComplete={() => setIsLoading(false)} />
        )}
      </AnimatePresence>
      
      {!isLoading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          {/* Scroll Progress Bar */}
          <motion.div 
            className="fixed top-0 left-0 right-0 h-1 bg-primary z-[100] origin-left"
            style={{ scaleX }}
          />

          <Hero />
      
      <Suspense fallback={<SectionSkeleton />}>
        <Projects />
      </Suspense>

      <Suspense fallback={<SectionSkeleton />}>
        <SectionDivider />
        <Research />
      </Suspense>

      <Suspense fallback={<SectionSkeleton />}>
        <SectionDivider />
        <Education />
      </Suspense>

      <Suspense fallback={<SectionSkeleton />}>
        <SectionDivider />
        <Skills />
      </Suspense>

      <Suspense fallback={<SectionSkeleton />}>
        <SectionDivider />
        <Achievements />
      </Suspense>

      <Suspense fallback={<SectionSkeleton />}>
        <SectionDivider />
        <GitHubStats />
      </Suspense>

      <Suspense fallback={<SectionSkeleton />}>
        <SectionDivider />
        <Contact />
      </Suspense>

      <footer className="py-12 border-t border-white/5 bg-bg text-center">
        <p className="text-[10px] font-black text-white/20 uppercase tracking-[0.5em]">
          Built with Next.js & TypeScript • Mahak Agarwal © 2024
        </p>
      </footer>
    </motion.div>
  )}
</>
  );
}

function SectionSkeleton() {
  return <div className="h-screen w-full bg-bg animate-pulse" />;
}
