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

          {/* Activity / Link */}
          <div className="flex flex-col justify-center items-center p-12 bg-surface/30 border border-white/5 rounded-[40px] text-center space-y-8">
            <div className="p-8 bg-primary/10 rounded-full">
              <FiActivity size={64} className="text-primary animate-pulse" />
            </div>
            <div className="space-y-4">
              <h3 className="text-3xl font-black text-white uppercase tracking-tighter">mahakagarwal7</h3>
              <p className="text-sm text-text-secondary max-w-xs mx-auto">
                Explore the full development history, commit logs, and research artifacts on GitHub.
              </p>
            </div>
            <a 
              href="https://github.com/mahakagarwal7"
              target="_blank"
              rel="noopener noreferrer"
              className="px-10 py-4 bg-primary text-bg font-black uppercase text-xs tracking-[0.2em] rounded-full hover:scale-105 transition-transform"
            >
              Go to Profile
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}
