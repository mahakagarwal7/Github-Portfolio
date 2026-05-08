import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import FloatingBar from "@/components/FloatingBar";
import AnalyticsTracker from "@/components/AnalyticsTracker";
import BackgroundCanvas from "@/components/BackgroundCanvas";
import FloatingIcons from "@/components/FloatingIcons";
import { AnimationProvider } from "@/components/AnimationProvider";
import { ToastProvider } from "@/components/Toast";
import ParticleBackground from "@/components/ParticleBackground";
import SectionDots from "@/components/SectionDots";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mahak Agarwal | AI Systems Engineer & Research Builder",
  description: "Pitch-deck portfolio of Mahak Agarwal, specializing in Reinforcement Learning, Generative AI infrastructure, and Scalable Systems. Top 4 in India (APJ Kalam Scholar).",
  keywords: ["AI Engineer", "Reinforcement Learning", "Machine Learning", "Research Builder", "BITS Pilani", "Scaler School of Technology"],
  openGraph: {
    title: "Mahak Agarwal | AI Systems Engineer",
    description: "Building AI Systems That Scale. Research-oriented engineering showcase.",
    url: "https://mahakagarwal.com",
    siteName: "Mahak Agarwal Portfolio",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mahak Agarwal | AI Systems Engineer",
    description: "Building AI Systems That Scale. Research-oriented engineering showcase.",
    images: ["/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className={`${inter.className} bg-bg text-text selection:bg-primary selection:text-bg overflow-x-hidden`}>
        <ToastProvider>
          <AnimationProvider>
            <div className="fixed inset-0 pointer-events-none z-[-1]">
              <div className="noise-overlay" />
              <BackgroundCanvas />
              <FloatingIcons />
            </div>
            
            <SectionDots />
            <Navigation />
            
            <main className="relative z-10">
              {children}
            </main>

            <FloatingBar />
            <AnalyticsTracker />
          </AnimationProvider>
        </ToastProvider>
      </body>
    </html>
  );
}
