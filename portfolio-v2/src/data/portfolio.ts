export const GREETING = {
  name: "Mahak Agarwal",
  title: "Mahak Agarwal",
  tagline: "Building Autonomous AI & Scalable Systems",
  subTitle: "Systems-focused AI Engineer and Full-Stack Architect specializing in Reinforcement Learning, Generative Modeling, and Production-Grade Infrastructure.",
  resumeLink: "https://github.com/mahakagarwal7/mahakagarwal7/raw/main/Resume.pdf",
};

export const SOCIAL_LINKS = {
  github: "https://github.com/mahakagarwal7",
  linkedin: "https://www.linkedin.com/in/mahakagarwal",
  email: "mahakagrwl07@gmail.com",
};

export const SKILLS = [
  {
    category: "AI/ML",
    items: ["Reinforcement Learning", "Generative AI", "Diffusion Models", "GNNs", "NLP"],
  },
  {
    category: "Backend & Systems",
    items: ["FastAPI", "Node.js", "Microservices", "PostgreSQL", "Scalable Architectures"],
  },
  {
    category: "DevOps & Tools",
    items: ["Docker", "Kubernetes", "CI/CD", "MLflow", "DVC", "Git"],
  },
];

export const EXPERIENCE = [
  {
    role: "Research & Engineering — DiffuCat",
    company: "Independent Research",
    date: "2024 – Present",
    desc: "Designing uncertainty-aware molecular generation pipelines combining GNNs and diffusion models for catalyst discovery.",
    bullets: [
      "Built SchNet property predictors with Monte Carlo Dropout for uncertainty estimation.",
      "Implemented experiment tracking with MLflow and data versioning via DVC.",
    ],
  },
  {
    role: "Engineer — AI Feature Rollout Guardian",
    company: "Open Research",
    date: "2023 – 2024",
    desc: "Developed RL-based intelligent deployment systems for automated rollout/rollback decisions.",
    bullets: [
      "Designed simulated multi-phase rollout environments for RL policy training.",
      "Integrated observability hooks with Datadog and real-time alerts via Slack.",
    ],
  },
  {
    role: "Founder / Full-Stack Engineer — GenZenith",
    company: "GenZenith",
    date: "2022 – 2024",
    desc: "Built an AI-powered crisis-response platform converting unstructured data into actionable workflows.",
    bullets: [
      "Implemented OCR + NLP pipelines using Google Vision API and spaCy.",
      "Developed volunteer-matching algorithms and real-time dashboards with Supabase.",
    ],
  },
];

export const PROJECTS = [
  {
    name: "DiffuCat",
    description: "Uncertainty-aware AI platform for catalyst discovery using GNNs + Diffusion Models.",
    link: "https://github.com/mahakagarwal7/DiffuCat",
    tags: ["Python", "PyTorch", "FastAPI", "GNN"],
    image: "/projects/diffucat.webp",
  },
  {
    name: "AI Feature Rollout Guardian",
    description: "RL-based intelligent deployment system for autonomous rollout and incident response.",
    link: "https://github.com/mahakagarwal7/AI-Feature-Rollout-Guardian",
    tags: ["RL", "Python", "DevOps", "Datadog"],
    image: "/projects/guardian.webp",
  },
  {
    name: "GenZenith",
    description: "AI-driven NGO crisis response platform with OCR and NLP intelligence.",
    link: "https://github.com/mahakagarwal7/GenZenith",
    tags: ["TypeScript", "Supabase", "NLP", "OCR"],
    image: "/projects/zenith.webp",
  },
  {
    name: "Cogni",
    description: "Metacognitive AI study companion with persistent memory and learning analytics.",
    link: "https://github.com/mahakagarwal7/Cogni",
    tags: ["Next.js", "FastAPI", "LLM", "Memory"],
    image: "/projects/cogni.webp",
  },
  {
    name: "BharatVidya",
    description: "Text-to-video educational generator for low-connectivity environments.",
    link: "https://github.com/mahakagarwal7/BharatVidya",
    tags: ["Python", "FastAPI", "TTS", "VideoGen"],
    image: "/projects/bharatvidya.webp",
  },
  {
    name: "Scalable Social Backend",
    description: "Distributed backend system focused on feed generation and high-concurrency architecture.",
    link: "https://github.com/mahakagarwal7/twitter-backend",
    tags: ["Node.js", "PostgreSQL", "Redis", "Distributed"],
    image: "/projects/social.webp",
  },
  {
    name: "Intelligent Multimodal Storage",
    description: "AI-powered storage system with semantic indexing and multimodal classification.",
    link: "https://github.com/mahakagarwal7/multimodal-storage",
    tags: ["Python", "Cloudinary", "ML", "Storage"],
    image: "/projects/storage.webp",
  },
];

export const EDUCATION = [
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
