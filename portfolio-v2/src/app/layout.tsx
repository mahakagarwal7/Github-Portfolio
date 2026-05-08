import type { Metadata } from "next";
import "./globals.css";
import Navigation from "@/components/Navigation";
import FloatingBar from "@/components/FloatingBar";
import AnalyticsTracker from "@/components/AnalyticsTracker";
import { AnimationProvider } from "@/components/AnimationProvider";
import { ToastProvider } from "@/components/Toast";

// Using system font stack to avoid network issues with Google Fonts
const inter = { className: "font-sans" };

export const metadata: Metadata = {
  title: "Mahak Agarwal | AI Systems Engineer & Research Builder",
  description: "Authentic portfolio of Mahak Agarwal, specializing in Reinforcement Learning, Generative AI infrastructure, and Scalable Systems.",
  keywords: ["AI Engineer", "Reinforcement Learning", "Machine Learning", "BITS Pilani", "Scaler School of Technology"],
};

import Scene from "@/components/3d/Scene";
import ScrollRing from "@/components/3d/ScrollRing";
import TechIconBackground from "@/components/TechIconBackground";
import CommandPalette from "@/components/CommandPalette";
import SystemHUD from "@/components/SystemHUD";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className={`${inter.className} bg-bg text-white selection:bg-primary selection:text-bg overflow-x-hidden`}>
        <ToastProvider>
          <AnimationProvider>
            <div className="fixed inset-0 pointer-events-none z-0">
              <div className="noise-overlay" />
              <TechIconBackground />
              <Scene />
            </div>
            
            <Navigation />
            
            <main className="relative z-10">
              {children}
            </main>

            <CommandPalette />
            <SystemHUD />
            <ScrollRing />
            <FloatingBar />
            <AnalyticsTracker />
          </AnimationProvider>
        </ToastProvider>
      </body>
    </html>
  );
}
