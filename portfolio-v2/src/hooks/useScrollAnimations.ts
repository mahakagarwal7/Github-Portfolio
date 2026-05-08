"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export const useScrollAnimations = () => {
  useEffect(() => {
    const mm = gsap.matchMedia();

    mm.add("(min-width: 768px)", () => {
      // Reveal animations for sections
      const sections = document.querySelectorAll("section");
      sections.forEach((section) => {
        const title = section.querySelector("h2");
        const content = section.querySelectorAll(".animate-item");

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: section,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        });

        if (title) {
          tl.fromTo(
            title,
            { opacity: 0, x: -30 },
            { opacity: 1, x: 0, duration: 0.8, ease: "power3.out" }
          );
        }

        if (content.length > 0) {
          tl.fromTo(
            content,
            { opacity: 0, y: 50 },
            { 
              opacity: 1, 
              y: 0, 
              duration: 0.8, 
              stagger: 0.1, 
              ease: "power3.out",
              clearProps: "all"
            },
            "-=0.4"
          );
        }
      });

      // Stats counter animation
      const stats = document.querySelectorAll(".stat-counter");
      stats.forEach((stat) => {
        const target = parseInt(stat.getAttribute("data-target") || "0");
        ScrollTrigger.create({
          trigger: stat,
          start: "top 90%",
          onEnter: () => {
            gsap.to({ val: 0 }, {
              val: target,
              duration: 1.5,
              ease: "power2.out",
              onUpdate: function() {
                stat.textContent = Math.floor(this.targets()[0].val).toString();
              }
            });
          }
        });
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);
};
