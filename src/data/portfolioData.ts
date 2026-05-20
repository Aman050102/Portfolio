export interface Project {
  title: string;
  description: string;
  link: string;
  type: 'Automation' | 'Manual' | 'Development';
  tags: string[];
}

export interface Certificate {
  name: string;
  issuer: string;
  date: string;
  image: string;
  category: 'achievement' | 'learning';
}

export const projects: Project[] = [
  {
    title: "UP REG - Academic Tracking",
    description: "Automated GPA calculation tracking system. Utilizing Robot Framework to validate calculation logic accuracy and end-to-end data integrity via browser automation.",
    link: "https://docs.google.com/spreadsheets/d/your-google-sheet-link",
    type: "Automation",
    tags: ["Robot Framework", "Selenium", "Python", "E2E Testing"]
  },
  {
    title: "API Testing with Postman",
    description: "API testing implementation and automation script creation to validate response statuses, schemas, and payload data, ensuring robust backend quality assurance.",
    link: "#",
    type: "Automation",
    tags: ["Postman", "API Testing", "JavaScript", "JSON"]
  },
  {
    title: "Manual Test Plan for E-Commerce",
    description: "Designed comprehensive test cases, execution scenarios, and bug reporting flows for a shopping cart system, covering both positive and negative testing vectors.",
    link: "#",
    type: "Manual",
    tags: ["Manual Testing", "Jira", "Test Plan", "Bug Report"]
  }
];

export const certificates: Certificate[] = [
  {
    name: "Software Quality Assurance Distinction",
    issuer: "University of Phayao",
    date: "2026",
    image: "/Certificate/ChatGPT for Developers.png",
    category: "achievement"
  },
  {
    name: "ChatGPT for Developers",
    issuer: "Born to Dev",
    date: "2026",
    image: "/Certificate/ChatGPT for Developers.png",
    category: "learning"
  },
  {
    name: "Command Prompt 101",
    issuer: "Born to Dev",
    date: "2026",
    image: "/Certificate/Command Prompt 101.png",
    category: "learning"
  },
  {
    name: "Essential SQL for Everyone",
    issuer: "Born to Dev",
    date: "2026",
    image: "/Certificate/Essential SQL for Everyone.png",
    category: "learning"
  },
  {
    name: "AI Intelligent Innovation and Application",
    issuer: "THAI MOOC",
    date: "2026",
    image: "/Certificate/AI Intelligent Innovation and Application.jpg",
    category: "learning"
  },
  {
    name: "Cloud-native with Azure Container Apps",
    issuer: "THAI MOOC",
    date: "2026",
    image: "/Certificate/Cloud-native with Azure Container Apps.jpg",
    category: "learning"
  },
  {
    name: "Prompt Engineering with GitHub Copilot",
    issuer: "THAI MOOC",
    date: "2026",
    image: "/Certificate/Prompt Engineering with GitHub Copilot.jpg",
    category: "learning"
  },
  {
    name: "Creating a Basic Web Page with HTML and CSS",
    issuer: "THAI MOOC",
    date: "2026",
    image: "/Certificate/Creating a Basic Web Page with HTML and CSS.jpg",
    category: "learning"
  }
];
