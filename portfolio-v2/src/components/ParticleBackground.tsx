"use client";

import React, { useEffect, useRef } from "react";
import { useMousePosition } from "@/hooks/useMousePosition";

export default function ParticleBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouse = useMousePosition();
  const particles = useRef<Particle[]>([]);
  const animationFrameId = useRef<number>(0);

  class Particle {
    x: number;
    y: number;
    size: number;
    speedX: number;
    speedY: number;
    color: string;

    constructor(canvas: HTMLCanvasElement) {
      this.x = Math.random() * canvas.width;
      this.y = Math.random() * canvas.height;
      this.size = Math.random() * 2 + 1;
      this.speedX = Math.random() * 1 - 0.5;
      this.speedY = Math.random() * 1 - 0.5;
      this.color = "#00ffa3";
    }

    update(canvas: HTMLCanvasElement, mouse: { x: number, y: number }) {
      this.x += this.speedX;
      this.y += this.speedY;

      if (this.x > canvas.width) this.x = 0;
      else if (this.x < 0) this.x = canvas.width;
      if (this.y > canvas.height) this.y = 0;
      else if (this.y < 0) this.y = canvas.height;

      // Mouse attraction
      const dx = mouse.x - this.x;
      const dy = mouse.y - this.y;
      const distance = Math.sqrt(dx * dx + dy * dy);
      if (distance < 150) {
        this.x += dx * 0.01;
        this.y += dy * 0.01;
      }
    }

    draw(ctx: CanvasRenderingContext2D) {
      ctx.fillStyle = this.color;
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      ctx.fill();
    }
  }

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    // Init particles
    particles.current = Array.from({ length: 30 }, () => new Particle(canvas));

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Update color based on scroll
      const scrollPercent = window.scrollY / (document.documentElement.scrollHeight - window.innerHeight);
      const color = scrollPercent < 0.4 ? "#00ffa3" : scrollPercent < 0.7 ? "#fd2155" : "#00ffa3";

      particles.current.forEach((p) => {
        p.color = color;
        p.update(canvas, mouse);
        p.draw(ctx);
      });

      animationFrameId.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId.current);
    };
  }, [mouse]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-[1]"
      style={{ mixBlendMode: "screen", opacity: 0.5 }}
    />
  );
}
