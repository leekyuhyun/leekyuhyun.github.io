import type { StaticImageData } from "next/image";

export interface ProjectFeature {
  title: string;
  description: string;
}

export interface ProjectContribution {
  title: string;
  situation: string;
  solution: string;
  result: string;
}

export interface ProjectLink {
  label: string;
  url: string;
}

export interface ProjectAiUsage {
  tools: string[];
  task: string;
  validation: string;
  outcome: string;
}

export interface Project {
  title: string;
  category: string;
  award?: string;
  subtitle?: string;
  description: string;
  overview?: string;
  features?: ProjectFeature[];
  image?: StaticImageData | string;
  github?: ProjectLink[];
  period?: string;
  team?: string;
  role?: string;
  tags: string[];
  contributions?: ProjectContribution[];
  aiUsage?: ProjectAiUsage;
}
