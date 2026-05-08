export interface Project {
  id: string;
  name: string;
  description: string;
  impact: string; // one-line impact statement
  category: 'AI Research' | 'DevOps' | 'Full Stack' | 'EdTech' | 'Distributed Systems';
  techStack: string[];
  githubUrl?: string;
  liveUrl?: string;
  featured: boolean;
  achievements?: string[]; // hackathon selections, awards
  year: number;
  ongoing?: boolean;
  bullets?: string[];
  image: string;
  stars?: number;
  badge?: string;
}

export interface Achievement {
  title: string;
  description: string;
  icon: string; // emoji or lucide icon name
  date: string;
  tag: string;
  link?: string;
}

export interface Skill {
  category: string;
  items: { name: string; proficiency?: number; learning?: boolean }[];
}

export interface Education {
  school: string;
  degree: string;
  duration: string;
  details: string;
}

export interface GitHubStats {
  username: string;
  totalStars: number;
  totalCommits: number;
  totalPRs: number;
  totalIssues: number;
  streak: number;
  contributions2025: number;
  topLanguages: { name: string; percentage: number; color: string }[];
  contributions: number[];
}

export const GREETING = {
  name: "Mahak Agarwal",
  title: "Building AI Systems That Scale",
  pitch: "First-year @ BITS Pilani & Scaler | INSPIRE Awardee | APJ Kalam Scholar (AIR-4)",
  tagline: "AI Systems Engineer • Research Builder • Top 4 in India",
  subTitle: "Engineering high-performance AI systems and research-oriented architectures. Specializing in Reinforcement Learning, Generative Modeling, and Scalable Infrastructure.",
  resumeLink: "https://github.com/mahakagarwal7/mahakagarwal7/raw/main/Resume.pdf",
  availability: "Open for Summer 2026 Internships",
  location: "Bangalore (IST)",
};

export const BADGES = [
  { label: "INSPIRE Awardee", icon: "🏆" },
  { label: "Top 4 in India (APJ Kalam)", icon: "📜" },
  { label: "AI for Bharat Finalist", icon: "🚀" },
  { label: "GSSoC '26 Contributor", icon: "🌟" },
];

export const QUICK_STATS = [
  { label: "Production AI Projects", value: "7+" },
  { label: "Open Source PRs", value: "4" },
  { label: "Hackathon Selections", value: "3" },
];

export const SOCIAL_LINKS = {
  github: "https://github.com/mahakagarwal7",
  linkedin: "https://www.linkedin.com/in/mahakagarwal",
  email: "mahakagrwl07@gmail.com",
  phone: "+91 9006518958",
};

export const PROJECTS: Project[] = [
  {
    id: "diffucat",
    name: "DiffuCat",
    description: "GNN + Diffusion for carbon capture catalyst discovery. Uncertainty-aware molecular generation using PyTorch Geometric.",
    impact: "Revolutionizing material discovery through uncertainty-aware generative modeling.",
    category: "AI Research",
    techStack: ["PyTorch Geometric", "FastAPI", "GNN", "Diffusion"],
    githubUrl: "https://github.com/mahakagarwal7/DiffuCat",
    liveUrl: "https://diffucat.vercel.app",
    featured: true,
    year: 2024,
    ongoing: true,
    bullets: [
      "Designed SchNet property predictors with Monte Carlo Dropout.",
      "Implemented molecular diffusion pipelines for catalyst generation.",
      "Achieved 20% reduction in inference latency via batch optimization."
    ],
    image: "/projects/diffucat.webp",
    stars: 12,
  },
  {
    id: "guardian",
    name: "Rollout Guardian",
    description: "Multi-agent RL for autonomous deployment decisions. Intelligent rollout/rollback system with observability hooks.",
    impact: "Ensuring zero-downtime deployments via autonomous RL agents.",
    category: "DevOps",
    techStack: ["Python", "RLlib", "DevOps", "Datadog"],
    githubUrl: "https://github.com/mahakagarwal7/AI-Feature-Rollout-Guardian",
    featured: true,
    year: 2023,
    bullets: [
      "Simulated multi-phase rollout environments for RL training.",
      "Integrated real-time observability with Datadog and Slack.",
      "Reduced incident response time by 40% in simulated environments."
    ],
    image: "/projects/guardian.webp",
    stars: 8,
  },
  {
    id: "genzenith",
    name: "GenZenith",
    description: "Live MVP helping NGOs process crisis data. Converts unstructured field reports into actionable aid workflows.",
    impact: "Converting chaos into order for humanitarian aid response.",
    category: "Full Stack",
    techStack: ["React", "Supabase", "Google Vision", "NLP"],
    githubUrl: "https://github.com/mahakagarwal7/GenZenith",
    liveUrl: "https://genzenith.com",
    featured: true,
    year: 2022,
    bullets: [
      "Implemented OCR + NLP pipelines for field data extraction.",
      "Built volunteer-matching algorithms with real-time scaling.",
      "Processed 500+ reports during initial pilot testing."
    ],
    image: "/projects/zenith.webp",
    stars: 15,
  },
  {
    id: "cogni",
    name: "Cogni",
    description: "Metacognitive AI study companion with persistent memory and learning analytics.",
    impact: "Personalizing education through metacognitive AI memory.",
    category: "EdTech",
    techStack: ["Next.js", "FastAPI", "Groq", "Hindsight"],
    githubUrl: "https://github.com/mahakagarwal7/Cogni",
    featured: false,
    year: 2024,
    bullets: [
      "Developed hindsight memory systems for learning persistence.",
      "Integrated Groq for low-latency inference during study sessions.",
      "Implemented visual learning analytics for progress tracking."
    ],
    image: "/projects/cogni.webp",
    stars: 5,
  },
  {
    id: "bharatvidya",
    name: "BharatVidya",
    description: "Text-to-video educational generator for low-connectivity environments using Edge AI.",
    impact: "Democratizing education via low-bandwidth video synthesis.",
    category: "EdTech",
    techStack: ["Python", "Ollama", "MoviePy", "TTS"],
    githubUrl: "https://github.com/mahakagarwal7/BharatVidya",
    featured: false,
    year: 2023,
    badge: "Finalist",
    achievements: ["AI for Bharat Hackathon Finalist"],
    bullets: [
      "Optimized text-to-speech for local Indian languages.",
      "Edge-AI deployment for offline educational access."
    ],
    image: "/projects/bharatvidya.webp",
    stars: 7,
  },
  {
    id: "social-backend",
    name: "Scalable Social Backend",
    description: "Distributed backend system focused on feed generation and high-concurrency architecture.",
    impact: "Building the backbone of high-concurrency social platforms.",
    category: "Distributed Systems",
    techStack: ["Node.js", "Redis", "PostgreSQL", "Distributed"],
    githubUrl: "https://github.com/mahakagarwal7/twitter-backend",
    featured: false,
    year: 2024,
    ongoing: true,
    badge: "OSC Club",
    bullets: [
      "Implemented Redis-based caching for sub-100ms feed delivery.",
      "Optimized PostgreSQL schema for billion-row scalability."
    ],
    image: "/projects/social.webp",
    stars: 9,
  },
  {
    id: "multimodal-storage",
    name: "Multimodal Storage",
    description: "AI-powered storage system with semantic indexing and multimodal classification.",
    impact: "Semantic indexing for complex multimodal datasets.",
    category: "Full Stack",
    techStack: ["Python", "Cloudinary", "ML", "Storage"],
    githubUrl: "https://github.com/mahakagarwal7/multimodal-storage",
    featured: false,
    year: 2023,
    bullets: [
      "Integrated Cloudinary for robust media management.",
      "Implemented ML-based classification for storage optimization."
    ],
    image: "/projects/storage.webp",
    stars: 4,
  },
];

export const ACHIEVEMENTS: Achievement[] = [
  {
    title: "Top 4 in India",
    description: "APJ Abdul Kalam Scholarship. Research article ranked AIR-4 nationally.",
    icon: "FiAward",
    date: "March 2024",
    tag: "APJ Kalam",
    link: "#"
  },
  {
    title: "INSPIRE Awardee",
    description: "MANAK National-level innovation grant from Govt. of India.",
    icon: "FiTrophy",
    date: "Dec 2023",
    tag: "Govt. of India",
    link: "#"
  },
  {
    title: "AI for Bharat",
    description: "Prototype Development Round finalist in national-level hackathon.",
    icon: "FiRocket",
    date: "Nov 2023",
    tag: "Finalist",
    link: "#"
  },
  {
    title: "GSSoC '26",
    description: "Selected Contributor for Google Summer of Code 2026.",
    icon: "FiCode",
    date: "Feb 2026",
    tag: "Selected",
    link: "#"
  },
  {
    title: "Hacktoberfest",
    description: "4 merged PRs across various open-source AI and DevOps projects.",
    icon: "FiGitPullRequest",
    date: "Oct 2023",
    tag: "4 Merged",
    link: "#"
  },
];

export const SKILLS: Skill[] = [
  {
    category: "AI Research",
    items: [
      { name: "Reinforcement Learning", proficiency: 85 },
      { name: "Generative AI", proficiency: 90 },
      { name: "GNNs", proficiency: 80 },
      { name: "Diffusion Models", proficiency: 85 },
      { name: "NLP & LLM Pipelines", proficiency: 90 },
    ],
  },
  {
    category: "Backend Systems",
    items: [
      { name: "FastAPI", proficiency: 90 },
      { name: "Node.js", proficiency: 85 },
      { name: "PostgreSQL", proficiency: 80 },
      { name: "Vector DBs", proficiency: 75, learning: true },
      { name: "System Design", proficiency: 80 },
    ],
  },
  {
    category: "Frontend",
    items: [
      { name: "React", proficiency: 90 },
      { name: "Next.js", proficiency: 90 },
      { name: "TypeScript", proficiency: 85 },
    ],
  },
  {
    category: "DevOps & Tools",
    items: [
      { name: "Docker", proficiency: 85 },
      { name: "Kubernetes", proficiency: 70, learning: true },
      { name: "CI/CD", proficiency: 80 },
      { name: "MLflow", proficiency: 85 },
      { name: "DVC", proficiency: 80 },
    ],
  },
];

export const GITHUB_STATS: GitHubStats = {
  username: "mahakagarwal7",
  totalStars: 42,
  totalCommits: 843,
  totalPRs: 24,
  totalIssues: 12,
  streak: 15,
  contributions2025: 124,
  topLanguages: [
    { name: "Python", percentage: 45, color: "#3572A5" },
    { name: "TypeScript", percentage: 30, color: "#3178C6" },
    { name: "JavaScript", percentage: 15, color: "#F1E05A" },
    { name: "Rust", percentage: 10, color: "#DEA584" },
  ],
  contributions: Array.from({ length: 52 * 7 }, () => Math.floor(Math.random() * 5)),
};

export const EDUCATION: Education[] = [
  {
    school: "BITS Pilani",
    degree: "B.Sc. Computer Science",
    duration: "2025 — 2029",
    details: "Core focus on Data Structures, OS, DBMS, and System Design.",
  },
  {
    school: "Scaler School of Technology",
    degree: "CS & Artificial Intelligence",
    duration: "2025 — 2029",
    details: "Applied AI, Reinforcement Learning, and Production Infrastructure.",
  },
];

export const HACKATHONS = [
  "Vector Global Hackathon",
  "Meta OpenEnv Hackathon",
  "AI Agent Olympics",
  "VC Innovation Hackathon",
  "NASSCOM AI Gamechanger",
  "Smart India Hackathon"
];

export const RESEARCH_DATA = {
  interests: [
    { title: "RL for Systems Optimization", icon: "FiCpu" },
    { title: "Generative Models for Science", icon: "FiActivity" },
    { title: "Scalable AI Infrastructure", icon: "FiLayers" },
  ],
  readingList: [
    { title: "Attention is All You Need", author: "Vaswani et al.", type: "Paper" },
    { title: "Designing Data-Intensive Applications", author: "Martin Kleppmann", type: "Book" },
    { title: "Fast.ai Deep Learning", author: "Jeremy Howard", type: "Course" },
  ],
  goals: [
    { title: "NeurIPS / ICML Publication", desc: "Planning to publish research on uncertainty-aware RL." },
    { title: "Uncertainty-aware RL", desc: "Researching robust policy optimization under data shifts." },
  ],
  coursework: ["DSA", "DBMS", "OS", "System Design", "Computer Networks"],
  influences: ["Lex Fridman", "Andrej Karpathy", "Yannic Kilcher"],
};

export const LEARNING_JOURNEY = [
  { year: "2024", title: "Reinforcement Learning", desc: "Mastering Markov Decision Processes and Q-Learning pipelines." },
  { year: "2025", title: "Generative AI Systems", desc: "Scaling diffusion models and GNNs for scientific discovery." },
  { year: "Future", title: "Autonomous Research Agents", desc: "Developing AI that conducts scientific experiments autonomously." },
];
