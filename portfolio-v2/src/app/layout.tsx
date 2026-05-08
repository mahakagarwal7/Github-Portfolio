import type { Metadata } from "next";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Starfield from "@/components/Starfield";
import SmoothScroll from "@/components/SmoothScroll";

export const metadata: Metadata = {
  title: "Mahak Agarwal | Elite Developer Portfolio",
  description: "DevOps and Full Stack Engineer specializing in AI Systems and Scalable Architectures.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <SmoothScroll>
          <Starfield />
          <Navigation />
          <main className="page-container relative overflow-x-hidden">
            <span className="tags top-tags hidden md:block">&lt;html&gt;</span>
            <span className="tags body-tag hidden md:block">&lt;body&gt;</span>
            
            {children}
            
            <span className="tags body-tag-bottom hidden md:block">&lt;/body&gt;</span>
            <span className="tags bottom-tags hidden md:block">&lt;/html&gt;</span>
          </main>
        </SmoothScroll>
      </body>
    </html>
  );
}
