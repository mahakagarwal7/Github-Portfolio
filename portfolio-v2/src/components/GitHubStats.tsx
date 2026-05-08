"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Container } from "./ui/Container";
import { FiGithub, FiStar, FiActivity, FiCode } from "react-icons/fi";

interface Repo {
  name: string;
  description: string;
  language: string;
  stargazers_count: number;
  html_url: string;
}

export default function GitHubStats() {
  const [repos, setRepos] = useState<Repo[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchRepos() {
      try {
        const response = await fetch("https://api.github.com/users/mahakagarwal7/repos?sort=updated&per_page=6");
        const data = await response.json();
        if (Array.isArray(data)) {
          setRepos(data.filter(r => !r.fork).slice(0, 5));
        }
      } catch (error) {
        console.error("Error fetching GitHub repos:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchRepos();
  }, []);

  return (
    <section id="github" className="py-32 relative overflow-hidden bg-bg">
      <Container>
        <div className="mb-20 space-y-4">
          <div className="flex items-center gap-4">
            <FiGithub size={32} className="text-primary" />
            <h2 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tighter">
              Open Source <span className="text-primary italic">Protocol</span>
            </h2>
          </div>
          <p className="text-text-secondary max-w-xl">
            Active contributions to the ecosystem. Tracking development velocity and technical depth.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Top Repos */}
          <div className="space-y-6">
            <h3 className="text-xs font-black text-white/40 uppercase tracking-[0.3em] flex items-center gap-3">
              <FiCode className="text-primary" /> Top Repositories
            </h3>
            <div className="space-y-4">
              {loading ? (
                [1, 2, 3].map(i => <div key={i} className="h-24 bg-white/5 animate-pulse rounded-3xl" />)
              ) : (
                repos.map((repo, idx) => (
                  <motion.a
                    key={repo.name}
                    href={repo.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    className="block p-6 bg-surface border border-white/5 rounded-3xl hover:border-primary/30 transition-all group"
                  >
                    <div className="flex justify-between items-start">
                      <h4 className="text-white font-bold group-hover:text-primary transition-colors truncate">{repo.name}</h4>
                      <div className="flex items-center gap-2 text-white/40 text-xs">
                        <FiStar className="text-primary" /> {repo.stargazers_count}
                      </div>
                    </div>
                    <p className="text-xs text-text-secondary mt-2 line-clamp-1">{repo.description}</p>
                    <div className="text-[10px] font-bold text-primary mt-3 uppercase tracking-widest">{repo.language}</div>
                  </motion.a>
                ))
              )}
            </div>
          </div>

          {/* Profile Hero Card */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="relative flex flex-col justify-end p-12 bg-surface/30 border border-white/5 rounded-[3rem] overflow-hidden group min-h-[500px]"
          >
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
              <img 
                src="/images/open_source.png" 
                alt="Open Source Protocol"
                className="w-full h-full object-cover opacity-40 group-hover:opacity-60 group-hover:scale-110 transition-all duration-1000 grayscale-[0.3] group-hover:grayscale-0"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/40 to-transparent" />
            </div>

            <div className="relative z-10 space-y-8">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-3 px-4 py-2 bg-primary/10 border border-primary/20 rounded-xl">
                  <div className="w-2 h-2 bg-primary rounded-full animate-ping" />
                  <span className="text-[10px] font-black text-primary uppercase tracking-[0.2em]">Live Connection</span>
                </div>
                <h3 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tighter leading-none">
                  mahak<span className="text-primary italic">agarwal7</span>
                </h3>
                <p className="text-sm text-text-secondary max-w-sm leading-relaxed uppercase font-bold tracking-wider">
                  Explore the full development history, commit logs, and research artifacts on the global open-source grid.
                </p>
              </div>

              <a 
                href="https://github.com/mahakagarwal7"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex px-10 py-5 bg-primary text-bg font-black uppercase text-xs tracking-[0.3em] rounded-2xl hover:bg-white transition-all hover:gap-8 group/btn items-center gap-6"
              >
                Go to Profile <FiGithub size={20} className="group-hover/btn:rotate-12 transition-transform" />
              </a>
            </div>

            {/* Decorative Corner Stats */}
            <div className="absolute top-10 right-10 flex flex-col items-end opacity-20">
              <span className="text-[10px] font-black text-white uppercase tracking-[0.5em]">Network.Status</span>
              <span className="text-2xl font-black text-primary italic uppercase tracking-tighter">Encrypted</span>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
