"use client";

import { useEffect, useRef } from "react";

export default function BackgroundCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = window.innerWidth;
    let height = window.innerHeight;

    const handleResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    // Code snippets for Option A
    const codeSnippets = [
      "def solve():", "import torch", "interface API", "const deploy = ()",
      "model.train()", "async def main():", "std::vector<int>", "SELECT * FROM",
      "npm run dev", "git commit -m", "docker-compose up"
    ];

    const snippets = codeSnippets.map(() => ({
      text: codeSnippets[Math.floor(Math.random() * codeSnippets.length)],
      x: Math.random() * width,
      y: Math.random() * height,
      speed: 0.2 + Math.random() * 0.5,
      opacity: 0.02 + Math.random() * 0.04
    }));

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      // --- Option B: Technical Grid System ---
      ctx.strokeStyle = "rgba(0, 255, 163, 0.05)";
      ctx.lineWidth = 1;

      const gridSize = 50;
      const perspectiveShift = Math.sin(Date.now() * 0.0005) * 10;

      // Vertical lines
      for (let x = 0; x <= width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x + perspectiveShift, height);
        ctx.stroke();
      }

      // Horizontal lines
      for (let y = 0; y <= height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }

      // Radial fade mask
      const gradient = ctx.createRadialGradient(
        width / 2, height / 2, 0,
        width / 2, height / 2, width / 1.5
      );
      gradient.addColorStop(0, "rgba(5, 5, 5, 0)");
      gradient.addColorStop(1, "rgba(5, 5, 5, 1)");
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, width, height);

      // --- Option A: Drifting Code Snippets ---
      if (width > 768) { // Only on desktop
        ctx.font = "12px monospace";
        snippets.forEach(s => {
          ctx.fillStyle = `rgba(255, 255, 255, ${s.opacity})`;
          ctx.fillText(s.text, s.x, s.y);
          
          s.y -= s.speed;
          if (s.y < -20) {
            s.y = height + 20;
            s.x = Math.random() * width;
          }
        });
      }

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-[-2] pointer-events-none bg-[#050505]"
      style={{ background: "radial-gradient(circle at center, #0a0a0a 0%, #050505 100%)" }}
    />
  );
}
