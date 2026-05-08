"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { FiActivity, FiCpu, FiShield, FiDatabase } from "react-icons/fi";

const LOG_MESSAGES = [
  "Initializing AI Infrastructure...",
  "Analyzing Reinforcement Learning rewards...",
  "DiffuCat: Tensor operations optimized.",
  "Secure handshake established with GitHub API.",
  "Caching layer: 40% latency reduction achieved.",
  "System: All protocols operational.",
  "Deploying multi-agent environment...",
  "Monitoring Datadog metric streams...",
  "Optimizing GNN weights for catalyst discovery...",
  "Database: PostgreSQL connection healthy."
];

export default function SystemHUD() {
  const [logs, setLogs] = useState<{ id: number; text: string }[]>([]);
  const [activeMetric, setActiveMetric] = useState(0);

  useEffect(() => {
    const logInterval = setInterval(() => {
      const randomMsg = LOG_MESSAGES[Math.floor(Math.random() * LOG_MESSAGES.length)];
      setLogs(prev => [{ id: Date.now(), text: randomMsg }, ...prev].slice(0, 3));
    }, 4000);

    const metricInterval = setInterval(() => {
      setActiveMetric(Math.floor(Math.random() * 10) + 90);
    }, 2000);

    return () => {
      clearInterval(logInterval);
      clearInterval(metricInterval);
    };
  }, []);

  return (
    <div className="fixed bottom-10 left-32 z-50 hidden lg:block pointer-events-none">
      <div className="flex flex-col gap-4">
        {/* Metric Cards */}
        <div className="flex gap-3">
          <div className="px-4 py-2 bg-black/40 backdrop-blur-md border border-white/5 rounded-xl flex items-center gap-3">
            <FiActivity className="text-primary animate-pulse" />
            <div className="flex flex-col">
              <span className="text-[8px] font-black text-white/40 uppercase tracking-widest">Efficiency</span>
              <span className="text-xs font-black text-white">{activeMetric}%</span>
            </div>
          </div>
          <div className="px-4 py-2 bg-black/40 backdrop-blur-md border border-white/5 rounded-xl flex items-center gap-3">
            <FiCpu className="text-primary" />
            <div className="flex flex-col">
              <span className="text-[8px] font-black text-white/40 uppercase tracking-widest">Protocol</span>
              <span className="text-xs font-black text-white italic">AI.01</span>
            </div>
          </div>
        </div>

        {/* Live Logs */}
        <div className="space-y-1.5">
          <AnimatePresence mode="popLayout">
            {logs.map((log, i) => (
              <motion.div
                key={log.id}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, scale: 0.8 }}
                className="flex items-center gap-2 text-[9px] font-bold uppercase tracking-widest"
                style={{ opacity: 1 - i * 0.3 }}
              >
                <span className="text-primary tracking-tighter">[SYS]:</span>
                <span className="text-white/60">{log.text}</span>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
