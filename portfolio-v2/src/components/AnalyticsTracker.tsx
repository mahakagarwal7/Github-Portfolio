"use client";

import { useEffect, useState } from "react";
import { analytics } from "@/lib/analytics";
import { FiUsers, FiActivity, FiClock } from "react-icons/fi";

const CITIES = ["Bangalore", "San Francisco", "London", "New York", "Singapore", "Berlin", "Mumbai", "Tokyo"];

export default function AnalyticsTracker() {
  const [visits, setVisits] = useState(0);
  const [timeOnPage, setTimeOnPage] = useState(0);
  const [activeCity, setActiveCity] = useState(CITIES[0]);

  useEffect(() => {
    analytics.incrementVisits();
    setVisits(analytics.getVisits());

    // Timer
    const timer = setInterval(() => {
      setTimeOnPage(prev => prev + 1);
    }, 60000); // Minutes

    // Active City Simulator
    const cityInterval = setInterval(() => {
      setActiveCity(CITIES[Math.floor(Math.random() * CITIES.length)]);
    }, 10000);

    return () => {
      clearInterval(timer);
      clearInterval(cityInterval);
    };
  }, []);

  return (
    <div className="fixed bottom-8 left-8 z-[100] hidden xl:flex flex-col gap-4">
      {/* Visitor Counter */}
      <div className="flex items-center gap-3 px-4 py-2 bg-surface/50 backdrop-blur-xl border border-white/5 rounded-full">
        <FiUsers className="text-primary" size={14} />
        <span className="text-[10px] font-bold text-white tracking-widest uppercase">{visits} VIEWS</span>
      </div>

      {/* Live Activity */}
      <div className="flex items-center gap-3 px-4 py-2 bg-surface/50 backdrop-blur-xl border border-white/5 rounded-full">
        <FiActivity className="text-primary animate-pulse" size={14} />
        <span className="text-[10px] font-bold text-white tracking-widest uppercase">LIVE FROM {activeCity}</span>
      </div>

      {/* Time Tracker */}
      {timeOnPage > 0 && (
        <div className="flex items-center gap-3 px-4 py-2 bg-primary/10 backdrop-blur-xl border border-primary/20 rounded-full animate-fade-in">
          <FiClock className="text-primary" size={14} />
          <span className="text-[10px] font-bold text-white tracking-widest uppercase">{timeOnPage}M ELAPSED</span>
        </div>
      )}
    </div>
  );
}
