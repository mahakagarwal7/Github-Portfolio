/* 
  Mahak Agarwal | Portfolio Configuration
  Software Engineer | AI Builder | Full Stack Developer | Systems Engineer
*/

import emoji from "react-easy-emoji";

const greeting = {
  username: "Mahak Agarwal",
  title: "Mahak Agarwal",
  subTitle: emoji("Software Engineer | AI Builder | Full Stack Developer | Systems Engineer — Building scalable AI systems, backend architectures, and production-grade applications."),
  resumeLink: "https://github.com/mahakagarwal7/mahakagarwal7/raw/main/Resume.pdf",
  displayGreeting: true
};

const socialMediaLinks = {
  github: "https://github.com/mahakagarwal7",
  linkedin: "https://www.linkedin.com/in/mahakagarwal",
  twitter: "",
  gmail: "mahakagrwl07@gmail.com",
  display: true
};

const skillsSection = {
  title: "Technical Skills",
  subTitle: "Languages, frameworks and systems I use to build scalable AI & backend products",
  skills: [
    emoji("⚡ AI/ML: Reinforcement Learning, Generative AI, Diffusion Models, GNNs, NLP"),
    emoji("⚡ Backend & APIs: FastAPI, Node.js, REST, Microservices, Authentication"),
    emoji("⚡ Systems: Docker, Kubernetes, CI/CD, MLflow, DVC, Scalable architectures")
  ],
  softwareSkills: [
    { skillName: "Python", fontAwesomeClassname: "fab fa-python" },
    { skillName: "TypeScript", fontAwesomeClassname: "fab fa-js" },
    { skillName: "JavaScript", fontAwesomeClassname: "fab fa-js-square" },
    { skillName: "Java", fontAwesomeClassname: "fab fa-java" },
    { skillName: "C++", fontAwesomeClassname: "fas fa-code" },
    { skillName: "React", fontAwesomeClassname: "fab fa-react" },
    { skillName: "Node.js", fontAwesomeClassname: "fab fa-node-js" },
    { skillName: "FastAPI", fontAwesomeClassname: "fas fa-bolt" },
    { skillName: "PostgreSQL", fontAwesomeClassname: "fas fa-database" },
    { skillName: "MongoDB", fontAwesomeClassname: "fas fa-database" },
    { skillName: "Redis", fontAwesomeClassname: "fas fa-server" },
    { skillName: "Docker", fontAwesomeClassname: "fab fa-docker" },
    { skillName: "Kubernetes", fontAwesomeClassname: "fas fa-project-diagram" },
    { skillName: "AWS", fontAwesomeClassname: "fab fa-aws" }
  ],
  display: true
};

const techStack = {
  viewSkillBars: true,
  experience: [
    { Stack: "Python & ML", progressPercentage: "95%" },
    { Stack: "Backend & APIs", progressPercentage: "90%" },
    { Stack: "Distributed Systems", progressPercentage: "85%" },
    { Stack: "DevOps / Infra", progressPercentage: "80%" }
  ],
  display: true
};

const workExperiences = {
  display: true,
  experience: [
    {
      role: "Research & Engineering — DiffuCat",
      company: "Independent / Research Collaborations",
      companylogo: "/diffucat-logo.png",
      date: "2024 – Present",
      desc: "Designing end-to-end molecular generation and uncertainty estimation pipelines combining GNNs and diffusion models. Building scalable inference and experiment tracking.",
      descBullets: [
        "Built SchNet-style property predictors with Monte Carlo Dropout for uncertainty.",
        "Implemented model tracking with MLflow and dataset versioning via DVC."
      ]
    },
    {
      role: "Engineer — AI Feature Rollout Guardian",
      company: "Independent / Open Research",
      companylogo: "/guardian-logo.png",
      date: "2023 – 2024",
      desc: "Developed RL-based intelligent deployment system that integrates telemetry and orchestration to make automated rollout/rollback decisions.",
      descBullets: [
        "Designed simulated multi-phase rollout environments for policy training.",
        "Integrated observability hooks (Datadog) and notification flows (Slack)."
      ]
    },
    {
      role: "Founder / Full-Stack Engineer — GenZenith",
      company: "GenZenith",
      companylogo: "/zenith-logo.png",
      date: "2022 – 2024",
      desc: "Built an AI-powered crisis-response platform that converts WhatsApp messages and images into structured workflows for NGOs and volunteers.",
      descBullets: [
        "Implemented OCR + NLP pipelines using Google Vision API and spaCy.",
        "Built volunteer-matching algorithms and realtime dashboards using Firebase and Supabase."
      ]
    }
  ]
};


const educationInfo = {
  display: true,
  schools: [
    {
      schoolName: "BITS Pilani",
      subHeader: "B.Sc. Computer Science",
      duration: "2025 — 2029",
      desc: "Core coursework: Data Structures, OS, DBMS, System Design, Networks, Software Engineering.",
      descBullets: [
        "Active in research projects on scalable ML and GNNs.",
        "Member of OSC Club focusing on backend and distributed systems."
      ]
    },
    {
      schoolName: "Scaler School of Technology",
      subHeader: "CS & Artificial Intelligence",
      duration: "2025 — 2029",
      desc: "Applied AI and systems engineering coursework and projects.",
      descBullets: [
        "Capstone projects on RL-based deployment automation and NGO crisis-intelligence.",
        "Hands-on training in production ML infra and system design."
      ]
    }
  ]
};

const bigProjects = {
  title: "Featured Projects",
  subtitle: "Selected projects demonstrating research and production readiness.",
  projects: [
    {
      image: "/diffucat.png",
      projectName: "DiffuCat",
      projectDesc: "Uncertainty-aware AI platform for catalyst discovery (GNNs + Diffusion Models).",
      footerLink: [{ name: "View on GitHub", url: "https://github.com/mahakagarwal7/DiffuCat" }]
    },
    {
      image: "/guardian.png",
      projectName: "AI Feature Rollout Guardian",
      projectDesc: "RL-based intelligent deployment system for safe rollouts and automated incident response.",
      footerLink: [{ name: "View on GitHub", url: "https://github.com/mahakagarwal7/AI-Feature-Rollout-Guardian" }]
    },
    {
      image: "/zenith.png",
      projectName: "GenZenith",
      projectDesc: "AI-driven NGO crisis response and volunteer intelligence platform (WhatsApp + OCR + NLP).",
      footerLink: [{ name: "View on GitHub", url: "https://github.com/mahakagarwal7/GenZenith" }]
    },
    {
      image: "/cogni.png",
      projectName: "Cogni",
      projectDesc: "AI study companion with persistent memory and personalized learning analytics.",
      footerLink: [{ name: "View on GitHub", url: "https://github.com/mahakagarwal7/Cogni" }]
    },
    {
      image: "/bharatvidya.png",
      projectName: "BharatVidya",
      projectDesc: "Text-to-video educational content generator optimized for low-connectivity environments.",
      footerLink: [{ name: "View on GitHub", url: "https://github.com/mahakagarwal7/BharatVidya" }]
    },
    {
      image: "/twitter-backend.png",
      projectName: "Twitter-Style Backend",
      projectDesc: "Scalable social media backend focusing on feed generation, caching, and service boundaries.",
      footerLink: [{ name: "View on GitHub", url: "https://github.com/mahakagarwal7/twitter-backend" }]
    },
    {
      image: "/multimodal-storage.png",
      projectName: "Intelligent Multimodal Storage",
      projectDesc: "AI-powered multimodal storage system with semantic indexing and Cloudinary integration.",
      footerLink: [{ name: "View on GitHub", url: "https://github.com/mahakagarwal7/multimodal-storage" }]
    }
  ],
  display: true
};

const achievementSection = {
  title: emoji("Honors & Awards 🏆"),
  subtitle: "Selected recognition for research, prototypes, and open-source contributions.",
  achievementsCards: [
    {
      title: "INSPIRE Awards – MANAK",
      subtitle: "Selected for innovation with prototype development funding.",
      image: "/inspire.webp",
      footerLink: [{ name: "Award Details", url: "#" }]
    },
    {
      title: "Top 4 — Abdul Kalam Scholarship Research Competition",
      subtitle: "Recognized nationally for a research article and placed top-4.",
      image: "/scholarship.webp",
      footerLink: [{ name: "Publication", url: "#" }]
    },
    {
      title: "AI for Bharat — Prototype Round",
      subtitle: "BharatVidya selected for prototype development in AI for Bharat hackathon.",
      image: "/bharatvidya.webp",
      footerLink: [{ name: "Hackathon", url: "#" }]
    },
    {
      title: "Open-source Contributions",
      subtitle: "Multiple merged PRs (Hacktoberfest & community projects).",
      image: "/opensource.webp",
      footerLink: [{ name: "PRs", url: "#" }]
    }
  ],
  display: true
};


const blogSection = {
  title: "Technical Writing",
  subtitle: "Short deep-dives on ML infra, GNNs, and system design.",
  displayMediumBlogs: "true",
  blogs: [
    {
      url: "https://medium.com/@mahakagarwal/scaling-gnns",
      title: "Scaling GNNs for Molecular Discovery",
      description: "How we optimized inference for millions of catalyst structures."
    }
  ],
  display: true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle: "Discuss research, collaborations, or opportunities — my inbox is open.",
  number: "+91 9006518958",
  email_address: "mahakagrwl07@gmail.com",
  location: "Bangalore, India"
};

export {
  greeting,
  socialMediaLinks,
  skillsSection,
  techStack,
  workExperiences,
  educationInfo,
  bigProjects,
  achievementSection,
  blogSection,
  contactInfo
};
