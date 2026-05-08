import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import Navigation from "@/components/Navigation";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Mahak Agarwal | Elite Developer Portfolio",
  description: "Systems-focused AI Engineer and Full-Stack Architect building the future of autonomous systems.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable}`}>
      <body className="antialiased selection:bg-accent-cyan selection:text-black">
        <SmoothScroll>
          <Navigation />
          <div className="page-container relative overflow-hidden">
            <span className="tags top-tags">&lt;html&gt;</span>
            <span className="tags body-tag">&lt;body&gt;</span>
            
            {children}
            
            <span className="tags body-tag-bottom">&lt;/body&gt;</span>
            <span className="tags bottom-tags">&lt;/html&gt;</span>
          </div>
        </SmoothScroll>
      </body>
    </html>
  );
}
