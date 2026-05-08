"use client";

// Simple persistent analytics using localStorage
// In a real production app, this would send data to Vercel KV, Supabase, or Plausible.

export const analytics = {
  // Visitor counting
  getVisits: () => {
    if (typeof window === "undefined") return 0;
    const count = localStorage.getItem("portfolio_visits") || "1248"; // Seed with base
    return parseInt(count);
  },

  incrementVisits: () => {
    if (typeof window === "undefined") return;
    const sessionKey = "portfolio_session_active";
    if (!sessionStorage.getItem(sessionKey)) {
      const current = analytics.getVisits();
      localStorage.setItem("portfolio_visits", (current + 1).toString());
      sessionStorage.setItem(sessionKey, "true");
    }
  },

  // Engagement tracking
  trackSection: (section: string) => {
    // Console log for demo purposes, could be a fetch call
    console.log(`[Analytics] View Section: ${section}`);
  },

  trackDownload: (file: string) => {
    const count = localStorage.getItem(`download_${file}`) || "0";
    localStorage.setItem(`download_${file}`, (parseInt(count) + 1).toString());
    console.log(`[Analytics] Download: ${file}`);
  },

  getDownloads: (file: string) => {
    if (typeof window === "undefined") return 0;
    return parseInt(localStorage.getItem(`download_${file}`) || "42"); // Seed
  }
};
