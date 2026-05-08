"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FiGithub, FiStar, FiGitBranch, FiUsers, FiActivity } from "react-icons/fi";
import { fetchGitHubStats, GitHubData } from "@/lib/github";
import { Container } from "./ui/Container";

export default function GitHubStats() {
  const [data, setData] = useState<GitHubData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchGitHubStats().then(stats => {
      setData(stats);
      setLoading(false);
    });
  }, []);

  if (loading || !data) return <GitHubSkeleton />;

  return (
    <section className="py-32 relative overflow-hidden bg-white/[0.01]">
      <Container>
        <div className="mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tighter">
            Developer <span className="text-primary italic">Dashboard</span>
          </h2>
          <p className="text-text-secondary max-w-2xl">
            Real-time synchronization with GitHub to track engineering activity, 
            open-source contributions, and language distribution.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <StatCard icon={FiActivity} label="Contributions" value={data.stats.contributions} color="text-primary" />
          <StatCard icon={FiStar} label="Stars Earned" value={data.stats.stars} color="text-yellow-500" />
          <StatCard icon={FiGitBranch} label="Forks" value={data.stats.forks} color="text-blue-500" />
          <StatCard icon={FiUsers} label="Followers" value={data.stats.followers} color="text-purple-500" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Heatmap & Activity */}
          <div className="lg:col-span-2 space-y-12">
            <div className="p-8 bg-surface/30 backdrop-blur-xl border border-white/5 rounded-[40px]">
              <div className="flex items-center justify-between mb-8">
                <h3 className="text-sm font-bold tracking-[0.3em] uppercase text-white/50">Commit Velocity</h3>
                <span className="text-[10px] text-primary font-bold">Last 52 Weeks</span>
              </div>
              <div className="flex flex-wrap gap-1">
                {data.heatmap.map((val, i) => (
                  <div 
                    key={i} 
                    className={`w-3 h-3 rounded-sm transition-colors duration-500 ${
                      val === 0 ? "bg-white/5" : 
                      val === 1 ? "bg-primary/20" :
                      val === 2 ? "bg-primary/40" :
                      val === 3 ? "bg-primary/60" : "bg-primary"
                    }`} 
                    title={`${val} contributions`}
                  />
                ))}
              </div>
            </div>

            <div className="p-8 bg-surface/30 backdrop-blur-xl border border-white/5 rounded-[40px]">
              <h3 className="text-sm font-bold tracking-[0.3em] uppercase text-white/50 mb-8">Transmission Log</h3>
              <div className="space-y-6">
                {data.activity.map((act, i) => (
                  <div key={i} className="flex items-start gap-4 group">
                    <div className="mt-1 p-2 bg-white/5 rounded-lg text-primary group-hover:bg-primary group-hover:text-bg transition-all">
                      <FiActivity size={14} />
                    </div>
                    <div>
                      <div className="text-sm font-bold text-white group-hover:text-primary transition-colors">
                        {act.action} in <span className="text-primary/70">{act.repo}</span>
                      </div>
                      <div className="text-[10px] text-text-secondary uppercase tracking-widest mt-1">{act.date}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Languages */}
          <div className="p-8 bg-surface/30 backdrop-blur-xl border border-white/5 rounded-[40px] flex flex-col">
            <h3 className="text-sm font-bold tracking-[0.3em] uppercase text-white/50 mb-10">Language Protocol</h3>
            <div className="space-y-8 flex-grow">
              {data.languages.map((lang, i) => (
                <div key={i}>
                  <div className="flex justify-between text-xs font-bold mb-3 uppercase tracking-widest">
                    <span>{lang.name}</span>
                    <span className="text-primary">{lang.percentage}%</span>
                  </div>
                  <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      animate={{ width: `${lang.percentage}%` }}
                      transition={{ duration: 1, delay: i * 0.1 }}
                      className="h-full bg-primary rounded-full shadow-[0_0_10px_rgba(0,255,163,0.5)]"
                    />
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-12 pt-12 border-t border-white/5 text-center">
              <button 
                onClick={() => window.open('https://github.com/mahakagarwal7', '_blank')}
                className="text-[10px] font-bold tracking-[0.3em] uppercase text-primary hover:text-white transition-colors"
              >
                OPEN SECURE PROFILE →
              </button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

function StatCard({ icon: Icon, label, value, color }: any) {
  return (
    <div className="p-6 bg-surface/30 backdrop-blur-xl border border-white/5 rounded-3xl group hover:border-primary/20 transition-all">
      <div className={`mb-4 p-3 bg-white/5 rounded-2xl w-fit ${color} group-hover:scale-110 transition-transform`}>
        <Icon size={20} />
      </div>
      <div className="text-2xl font-black text-white mb-1">{value}</div>
      <div className="text-[10px] text-text-secondary uppercase tracking-widest font-bold">{label}</div>
    </div>
  );
}

function GitHubSkeleton() {
  return (
    <section className="py-32 opacity-50">
      <Container>
        <div className="h-8 w-64 bg-white/5 rounded-lg mb-4 animate-pulse" />
        <div className="h-4 w-96 bg-white/5 rounded-lg mb-16 animate-pulse" />
        <div className="grid grid-cols-4 gap-6 mb-12">
          {[1,2,3,4].map(i => <div key={i} className="h-32 bg-white/5 rounded-3xl animate-pulse" />)}
        </div>
      </Container>
    </section>
  );
}
