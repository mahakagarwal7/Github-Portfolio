export interface GitHubStats {
  username: string;
  totalStars: number;
  totalCommits: number;
  totalPRs: number;
  totalIssues: number;
  streak: number;
  followers: number;
  lastUpdated: string;
  contributions: { date: string; count: number; level: number }[];
  recentActivity: { type: string; repo: string; date: string; link: string }[];
}

const GITHUB_USERNAME = "mahakagarwal7";
const CACHE_KEY = "github_stats_cache";
const CACHE_EXPIRY = 60 * 60 * 1000; // 1 hour

export async function fetchGitHubStats(): Promise<GitHubStats | null> {
  // 1. Check Cache
  const cached = localStorage.getItem(CACHE_KEY);
  if (cached) {
    const { data, timestamp } = JSON.parse(cached);
    if (Date.now() - timestamp < CACHE_EXPIRY) return data;
  }

  try {
    // Note: In a real production app, use a server-side route to hide the token.
    // For this portfolio, we'll use public API endpoints or environment variables.
    const token = process.env.NEXT_PUBLIC_GITHUB_TOKEN;
    const headers: Record<string, string> = token ? { Authorization: `token ${token}` } : {};

    // 2. Fetch Base Stats (REST)
    const userRes = await fetch(`https://api.github.com/users/${GITHUB_USERNAME}`, { headers });
    const userData = await userRes.json();

    const reposRes = await fetch(`https://api.github.com/users/${GITHUB_USERNAME}/repos?per_page=100`, { headers });
    const reposData = await reposRes.json();

    const totalStars = reposData.reduce((acc: number, repo: any) => acc + repo.stargazers_count, 0);

    // 3. Fetch Activity Feed (REST)
    const eventsRes = await fetch(`https://api.github.com/users/${GITHUB_USERNAME}/events/public?per_page=5`, { headers });
    const eventsData = await eventsRes.json();
    const recentActivity = eventsData.map((event: any) => ({
      type: event.type.replace("Event", ""),
      repo: event.repo.name,
      date: event.created_at,
      link: `https://github.com/${event.repo.name}`
    }));

    // 4. Fetch Contributions (Mocked if no Token, otherwise GraphQL)
    // GraphQL is needed for real heatmap data across all years/repos.
    let contributions = generateMockContributions();
    
    if (token) {
      try {
        const query = `
          query($username: String!) {
            user(login: $username) {
              contributionsCollection {
                contributionCalendar {
                  weeks {
                    contributionDays {
                      date
                      contributionCount
                      color
                    }
                  }
                }
              }
            }
          }
        `;
        const gqlRes = await fetch("https://api.github.com/graphql", {
          method: "POST",
          headers: { ...headers, "Content-Type": "application/json" },
          body: JSON.stringify({ query, variables: { username: GITHUB_USERNAME } })
        });
        const gqlData = await gqlRes.json();
        const weeks = gqlData.data.user.contributionsCollection.contributionCalendar.weeks;
        contributions = weeks.flatMap((w: any) => w.contributionDays.map((d: any) => ({
          date: d.date,
          count: d.contributionCount,
          level: d.contributionCount > 0 ? (d.contributionCount > 5 ? 4 : d.contributionCount > 2 ? 2 : 1) : 0
        })));
      } catch (e) {
        console.warn("GraphQL failed, using mock heatmap", e);
      }
    }

    const stats: GitHubStats = {
      username: GITHUB_USERNAME,
      totalStars,
      totalCommits: 843, // Approximate or fetch via GraphQL
      totalPRs: 24,
      totalIssues: 12,
      streak: 15,
      followers: userData.followers,
      lastUpdated: new Date().toISOString(),
      contributions,
      recentActivity
    };

    // 5. Cache Data
    localStorage.setItem(CACHE_KEY, JSON.stringify({ data: stats, timestamp: Date.now() }));
    return stats;

  } catch (error) {
    console.error("GitHub Fetch Error:", error);
    return null;
  }
}

function generateMockContributions() {
  const days = 365;
  return Array.from({ length: days }, (_, i) => {
    const date = new Date();
    date.setDate(date.getDate() - (days - i));
    const count = Math.random() > 0.8 ? Math.floor(Math.random() * 10) : 0;
    return {
      date: date.toISOString().split("T")[0],
      count,
      level: count > 0 ? (count > 5 ? 4 : count > 2 ? 2 : 1) : 0
    };
  });
}
