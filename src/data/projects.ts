export interface Project {
  id: string;
  title: string;
  description: string;
  techStack: string[];
  githubUrl?: string;
  demoUrl?: string;
}

export interface Agent {
  id: string;
  name: string;
  description: string;
  architectureDescription: string;
}

export interface Tech {
  name: string;
  category: "Languages" | "Frameworks" | "AI/ML" | "Tools";
}

export const projects: Project[] = [
  {
    id: "1",
    title: "Autonomous Reasoning System",
    description: "Multi-agent architecture focused on complex chain-of-thought reasoning for research tasks.",
    techStack: ["Python", "LangGraph", "LLaMA 3", "MongoDB"],
    githubUrl: "https://github.com/kiruthik-kumar/reasoning-system",
    demoUrl: "#"
  },
  {
    id: "2",
    title: "Intelligent Data Pipeline",
    description: "Large-scale information pipeline for structuring unstructured geopolitical research data.",
    techStack: ["Next.js", "Docker", "Playwright", "PostgreSQL"],
    githubUrl: "https://github.com/kiruthik-kumar/data-pipeline",
    demoUrl: "#"
  }
];

export const agents: Agent[] = [
  {
    id: "agent-1",
    name: "Web Crawling Agent",
    description: "Autonomous agent capable of navigating complex websites to extract research-grade data.",
    architectureDescription: "Uses Playwright for browser orchestration and LLaMA for semantic parsing."
  },
  {
    id: "agent-2",
    name: "Geopolitical Research Agent",
    description: "Specialized intelligence agent that monitors international news and synthesizes risk reports.",
    architectureDescription: "Multi-agent swarm architecture using LangGraph for state management."
  }
];

export const techStack: Tech[] = [
  { name: "Python", category: "Languages" },
  { name: "TypeScript", category: "Languages" },
  { name: "Next.js", category: "Frameworks" },
  { name: "LangGraph", category: "AI/ML" },
  { name: "LLaMA", category: "AI/ML" },
  { name: "Docker", category: "Tools" },
  { name: "MongoDB", category: "Tools" }
];
