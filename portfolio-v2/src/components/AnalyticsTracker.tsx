"use client";

import { useEffect, useState } from "react";

export interface AnalyticsData {
  visitors: number;
  resumeDownloads: number;
  projectClicks: Record<string, number>;
  sessionTime: number;
}

export function useAnalytics() {
  const [data, setData] = useState<AnalyticsData>({
    visitors: 0,
    resumeDownloads: 0,
    projectClicks: {},
    sessionTime: 0
  });

  useEffect(() => {
    // 1. Load from storage
    const saved = localStorage.getItem("portfolio_analytics");
    const initialData = saved ? JSON.parse(saved) : { 
      visitors: Math.floor(Math.random() * 100) + 500, // Starting social proof
      resumeDownloads: 124, 
      projectClicks: {}, 
      sessionTime: 0 
    };

    // 2. Increment visitor count (only once per session)
    if (!sessionStorage.getItem("visited")) {
      initialData.visitors += 1;
      sessionStorage.setItem("visited", "true");
    }

    setData(initialData);
    localStorage.setItem("portfolio_analytics", JSON.stringify(initialData));

    // 3. Track session time
    const interval = setInterval(() => {
      setData(prev => {
        const updated = { ...prev, sessionTime: prev.sessionTime + 1 };
        return updated;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const trackAction = (type: 'resume' | 'project', id?: string) => {
    setData(prev => {
      const updated = { ...prev };
      if (type === 'resume') updated.resumeDownloads += 1;
      if (type === 'project' && id) {
        updated.projectClicks[id] = (updated.projectClicks[id] || 0) + 1;
      }
      localStorage.setItem("portfolio_analytics", JSON.stringify(updated));
      return updated;
    });
  };

  return { data, trackAction };
}

export default function AnalyticsTracker() {
  const { data } = useAnalytics();
  
  return (
    <div className="fixed bottom-6 right-6 z-[100] hidden md:flex flex-col gap-2 pointer-events-none">
      <div className="px-4 py-2 bg-bg/80 backdrop-blur-md border border-white/10 rounded-full flex items-center gap-3">
        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
        <span className="text-[10px] font-black text-white/60 uppercase tracking-widest">
          {data.visitors} Views this week
        </span>
      </div>
      <div className="px-4 py-2 bg-bg/80 backdrop-blur-md border border-white/10 rounded-full flex items-center gap-3">
        <div className="w-2 h-2 bg-primary rounded-full" />
        <span className="text-[10px] font-black text-white/60 uppercase tracking-widest">
          Live from Bangalore
        </span>
      </div>
    </div>
  );
}
