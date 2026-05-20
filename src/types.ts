// src/types.ts
export interface Project {
  title: string;
  description: string;
  tags: string[];
  link: string;
  type: "Automation" | "Manual" | "Development";
  githubLink?: string;
  testCases?: any[];
}

export interface Certificate {
  name: string;
  issuer: string;
  date: string;
  image: string;
  category: "achievement" | "learning";
}
