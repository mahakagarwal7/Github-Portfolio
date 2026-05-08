export interface Project {
  id: string;
  name: string;
  description: string;
  techStack: string[];
  githubUrl: string;
  image: string;
  problem?: string;
  solution?: string;
  impact?: string[];
}

export interface Achievement {
  title: string;
  description: string;
  date?: string;
}

export interface Education {
  school: string;
  degree: string;
  duration: string;
  location: string;
  highlights: string[];
  logo: string;
}

export const GREETING = {
  name: "Mahak Agarwal",
  title: "AI Systems Engineer & Research-Oriented Builder",
  summary: "CS & AI undergraduate at BITS Pilani and Scaler. Building production-grade AI systems across RL, Generative AI, and scalable infrastructure. Focused on developing research-oriented platforms and intelligent automation.",
  resumeLink: "/Resume.pdf", // Ensure this exists in public folder
  profilePic: "/mahak.png", // Corrected path
};

export const SOCIAL_LINKS = {
  github: "https://github.com/mahakagarwal7",
  linkedin: "https://linkedin.com/in/mahakagarwal",
  email: "mahakagrwl07@gmail.com",
  phone: "+91 9006518958"
};

export const EDUCATION: Education[] = [
  {
    school: "BITS Pilani",
    degree: "Bachelor of Science in Computer Science",
    duration: "2025 - 2029",
    location: "Pilani, India",
    highlights: ["Data Structures & Algorithms", "DBMS", "Operating Systems", "System Design", "Computer Networks", "Software Engineering", "Discrete Mathematics", "Data Analytics"],
    logo: "https://upload.wikimedia.org/wikipedia/en/d/d3/BITS_Pilani-Logo.svg"
  },
  {
    school: "Scaler School of Technology",
    degree: "Computer Science & Artificial Intelligence",
    duration: "2025 - 2029",
    location: "Bangalore, India",
    highlights: ["AI Systems", "Applied AI Research", "Scalable Architectures"],
    logo: "https://scaler.com/favicon.ico"
  }
];

export const SKILLS = [
  {
    category: "Languages",
    items: ["Python", "TypeScript", "JavaScript", "Java", "C++", "SQL"]
  },
  {
    category: "AI/ML",
    items: ["Reinforcement Learning", "Generative AI", "NLP", "Graph Neural Networks (GNNs)", "Diffusion Models", "LLM Pipelines", "Predictive Analytics"]
  },
  {
    category: "Backend & APIs",
    items: ["FastAPI", "Node.js", "REST APIs", "Microservices", "Authentication Systems"]
  },
  {
    category: "Frontend",
    items: ["React.js", "Next.js", "TypeScript", "HTML", "CSS", "Vite"]
  },
  {
    category: "Databases",
    items: ["PostgreSQL", "Supabase", "NoSQL", "Vector Databases", "Cloudinary", "JSON-based Storage"]
  },
  {
    category: "DevOps & Tools",
    items: ["Git", "GitHub", "Docker", "CI/CD", "Firebase", "MLflow", "DVC", "Linux CLI"]
  },
  {
    category: "Core CS",
    items: ["System Design", "DBMS", "Operating Systems", "Computer Networks", "Scalable Architectures"]
  }
];

export const PROJECTS: Project[] = [
  {
    id: "diffucat",
    name: "DiffuCat",
    description: "End-to-end molecular generation pipeline combining Graph Neural Networks and diffusion models for carbon capture and green chemistry. Implemented parallel inference and optimized tensor operations for 40% latency reduction.",
    techStack: ["Python", "FastAPI", "PyTorch Geometric", "GNNs", "Diffusion Models", "React", "PostgreSQL"],
    githubUrl: "https://github.com/mahakagarwal7/DiffuCat",
    image: "/projects/diffucat.png",
    problem: "Molecular discovery for carbon capture is bottlenecked by slow laboratory validation and high-latency simulation models, making rapid iteration impossible.",
    solution: "A hybrid GNN-diffusion pipeline that designs and ranks catalyst structures in parallel. Optimized using custom CUDA kernels and batching for real-time discovery.",
    impact: ["40% inference latency reduction via tensor optimization", "Pareto ranking for high-stability catalyst structures", "Automated discovery pipeline for green chemistry"]
  },
  {
    id: "rollout-guardian",
    name: "AI Feature Rollout Guardian",
    description: "Multi-agent RL environment capable of observing live deployment metrics and autonomously deciding rollout, rollback, pause, or escalation actions. Designed with safety-first reward functions for production environments.",
    techStack: ["Python", "Reinforcement Learning", "FastAPI", "GitHub APIs", "Datadog", "Slack"],
    githubUrl: "https://github.com/mahakagarwal7/ai-rollout-guardian",
    image: "/projects/rollout_guardian.png",
    problem: "Production rollouts of AI models often lack the millisecond-level reaction times needed to prevent catastrophic failures during unexpected metric spikes.",
    solution: "A multi-agent Reinforcement Learning system that monitors live Datadog streams and autonomously manages feature flags with safety-first reward functions.",
    impact: ["Autonomous rollback triggered in <500ms", "99.99% system availability during experimental rollouts", "Reduced engineering pager-duty fatigue by 60%"]
  },
  {
    id: "genzenith",
    name: "GenZenith",
    description: "Built and deployed live MVP converting unstructured NGO crisis data (WhatsApp messages, images, forms) into structured emergency response workflows. OCR and NLP pipelines achieved 92% extraction accuracy.",
    techStack: ["React", "TypeScript", "Firebase", "Supabase", "Google Vision API", "spaCy NLP", "Twilio"],
    githubUrl: "https://github.com/mahakagarwal7/GenZenith",
    image: "/projects/genzenith.png"
  },
  {
    id: "cogni",
    name: "Cogni",
    description: "Metacognitive AI learning companion tracking user learning patterns and generating personalized study insights using persistent memory systems. Optimized for low-latency RAG-based query responses.",
    techStack: ["Next.js", "FastAPI", "Hindsight", "Groq"],
    githubUrl: "https://github.com/mahakagarwal7/Cogni",
    image: "/projects/cogni.png"
  },
  {
    id: "storage-system",
    name: "Intelligent Multimodal Storage System",
    description: "AI-powered storage system capable of processing and organizing multimodal data (text, images, audio). Machine learning algorithms for automatic content tagging and intelligent retrieval.",
    techStack: ["Python", "AI/ML", "Data Processing", "Cloudinary"],
    githubUrl: "https://github.com/mahakagarwal7/intelligent-storage",
    image: "/projects/storage.png"
  },
  {
    id: "bharatvidya",
    name: "BharatVidya",
    description: "Text-to-video educational platform optimized for low-connectivity and rural environments. Multilingual TTS and automated video generation pipelines for rapid curriculum digitization.",
    techStack: ["Python", "FastAPI", "Ollama", "Phi-3 Mini", "Edge-TTS", "MoviePy"],
    githubUrl: "https://github.com/mahakagarwal7/BharatVidya",
    image: "/projects/bharatvidya.png"
  },
  {
    id: "backend-social",
    name: "Twitter-style Scalable Social Media Backend",
    description: "Scalable backend for account management, authentication, and real-time interaction features. Implemented distributed caching and message queues for high-concurrency handling.",
    techStack: ["Node.js", "Express", "MongoDB", "Redis", "Kafka", "Docker"],
    githubUrl: "https://github.com/mahakagarwal7/social-backend",
    image: "/projects/backend.png"
  }
];

export const ACHIEVEMENTS: Achievement[] = [
  {
    title: "INSPIRE Awards - MANAK",
    description: "Selected for innovation; awarded cash prize grant for prototype development."
  },
  {
    title: "Top 4 in India",
    description: "Dr. APJ Abdul Kalam Scholarship Program Research Article Competition; article featured on official platform."
  },
  {
    title: "AI for Bharat Hackathon",
    description: "Selected for Prototype Development Round (BharatVidya)."
  },
  {
    title: "Hackathon Competitions",
    description: "Participated in Vector Global Hackathon, Meta OpenEnv Hackathon, and multiple AI and system-design competitions."
  },
  {
    title: "Hacktoberfest & OSC Club",
    description: "Completed Hacktoberfest with 4 merged open-source pull requests. Active OSC Club member contributing to backend systems and scalable architectures."
  },
  {
    title: "GSSoC '26 (GirlScript Summer of Code)",
    description: "Selected as open-source contributor for the 2026 cohort."
  },
  {
    title: "AI Agent Olympics",
    description: "Selected and competed in international hackathon focused on autonomous AI agents."
  },
  {
    title: "VC-focused Innovation Hackathon",
    description: "Participated in VC-focused innovation hackathon, developing scalable AI-driven product concepts."
  }
];
