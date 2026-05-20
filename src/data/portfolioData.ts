export interface Project {
  title: string;       // ชื่อฟีเจอร์ย่อย/ระบบย่อย เช่น "ระบบ Login & MFA"
  systemName: string;  // ชื่อระบบหลักภาพรวม เช่น "UP REG - Academic Tracking"
  description: string; // รายละเอียดสั้นๆ ของฟีเจอร์นี้
  type: "Automation" | "Manual" | "Development";
  tags: string[];      // สแต็กที่ใช้ในฟีเจอร์นี้ เช่น ["Robot Framework", "Selenium"]
  testCaseLink?: string; // ลิงก์ไปดู Sheet Test Case (ถ้ามี)
  robotLink?: string;    // ลิงก์ไปดูโค้ด Robot หรือ GitHub โค้ด (ถ้ามี)
}

export interface Certificate {
  name: string;
  issuer: string;
  date: string;
  image: string;
  category: "achievement" | "learning";
}

// ข้อมูลกล่องเล็กๆ แยกรายฟีเจอร์ย่อย โดยเน้นหนักไปทางงาน Testing
export const projects: Project[] = [
  {
    title: "Login & MFA Authentication",
    systemName: "UP REG - Academic Tracking System",
    description: "Validates Microsoft SSO integration, including Positive/Negative login cases and Multi-Factor Authentication (MFA) approval.",
    type: "Automation",
    tags: ["Robot Framework", "Selenium", "E2E Testing", "Dialogs"],
    testCaseLink: "https://docs.google.com/spreadsheets/d/18X8hNndFs7OYBJRG1Q1WZmRr457E2QPYohVV3G75sU0/edit?usp=sharing",
    robotLink: "https://github.com/Aman050102/Login-MFA.git"
  },
  {
    title: "GPA Calculation Logic",
    systemName: "UP REG - Academic Tracking System",
    description: "Verifies the GPA calculation engine across various boundary values (Max GPA, Min GPA, and Mixed Grade distributions).",
    type: "Automation",
    tags: ["Robot Framework", "Selenium", "Collections", "Data Integrity"],
    testCaseLink: "https://docs.google.com/spreadsheets/d/1PI5PB_qJK06HG-TZDDuOzKIEWRTdMhn-X37I489Y1M8/edit?usp=sharing",
    robotLink: "https://github.com/Aman050102/Grade-Point-Average.git"
  },
  {
    title: "API Login Response & Schema",
    systemName: "UP REG - Academic Tracking System",
    description: "Created Postman collections to validate API status codes, response data structures, and schemas.",
    type: "Automation",
    tags: ["Postman", "API Testing", "JSON Schema"],
    testCaseLink: "https://docs.google.com/spreadsheets/d/18X8hNndFs7OYBJRG1Q1WZmRr457E2QPYohVV3G75sU0/edit?usp=sharing",
    robotLink: "https://github.com/Aman050102/Portfolio"
  },
  {
    title: "Dormitory Ticket Creation Flow",
    systemName: "UP - Maintenance Control System (UP-MCS)",
    description: "Designed robust automated scenarios covering positive and negative lines for reporting issues.",
    type: "Automation",
    tags: ["Robot Framework", "Web Testing", "Regression"],
    testCaseLink: "#",
    robotLink: "#"
  },
  {
    title: "Figma UI/UX Test Cases",
    systemName: "Salon Booking Web App",
    description: "Manual functionality inspection for back-office admin dashboard and repair job distribution.",
    type: "Manual",
    tags: ["Manual Testing", "UI/UX", "Figma" ,"Test Case Design"],
    testCaseLink: "https://docs.google.com/spreadsheets/d/1067UhR6k_uH7_LH7gSv303TsIluVToiYk4QLqLNUC90/edit?usp=sharing"
  },
  {
    title: "Equipment Inventory Tracking",
    systemName: "UP - Sports Facility Management System",
    description: "Executed black-box user acceptance testing (UAT) for real-time sports gear stock management.",
    type: "Manual",
    tags: ["Manual Testing", "UAT", "Test Case Design"],
    testCaseLink: "#"
  },
  {
    title: "Booking & Time-slot Allocation",
    systemName: "UP - Sports Facility Management System",
    description: "Verified calendar slot conflicts, reservation overlaps, and edge-case boundary testing vectors.",
    type: "Manual",
    tags: ["Manual Testing", "Boundary Value", "Jira"],
    testCaseLink: "#"
  },
{
    title: "Fall detection Web",
    systemName: "Machine Learning",
    description: "uses AI and computer vision to detect human falls in real-time. It sends immediate alerts to caregivers to ensure quick assistance for high-risk individuals.",
    type: "Development",
    tags: ["React", "TypeScript", "CSS", "Vite", "JavaScript", "opencv.js"],
    robotLink: "https://github.com/Aman050102/fall-detection-web.git",
    productionLink: "https://fall-detection-web-tawny.vercel.app/"
  },
{
    title: "UP - Sports Facility Management System",
    systemName: "Web App",
    description: "UP-SFMS is a digital platform for University of Phayao sports facilities that streamlines usage tracking and equipment management. It enables student assistants to record data easily while providing admins with real-time analytics and automated PDF/CSV reporting.",
    type: "Development",
    tags: ["React", "TypeScript", "Tailwind CSS", "Vite", "JavaScript"],
    robotLink: "https://github.com/Aman050102/fall-detection-web.git",
    productionLink: "http://32.236.37.136"
  },
{
    title: "Buddy Nest",
    systemName: "Web App",
    description: "It is a website that offers various pet-related services, such as pet boarding, bathing, grooming, and transportation, to provide convenience for pet owners.",
    type: "Development",
    tags: ["HTML", "CSS", "JavaScript"],
    robotLink: "https://github.com/Aman050102/UP_FMS-Web.git",
    productionLink: "https://buddy-nest-web-project.vercel.app/"
  },
{
    title: "Pocket",
    systemName: "Web App",
    description: "A personal finance web application designed to help users efficiently track, manage, and optimize their daily expenses. The platform offers intuitive tools for income and expense logging, budget planning, and financial goal tracking, making money management simple and accessible for everyone.",
    type: "Development",
    tags: ["HTML", "CSS", "JavaScript"],
    robotLink: "https://github.com/Aman050102/Pocket.git",
    productionLink: "https://pocket-pearl.vercel.app/"
  },

];






export const certificates: Certificate[] = [
  {
    name: "Software Quality Assurance Distinction",
    issuer: "University of Phayao",
    date: "2026",
    image: "/Certificate/ChatGPT for Developers.png",
    category: "achievement",
  },
  {
    name: "ChatGPT for Developers",
    issuer: "Born to Dev",
    date: "2026",
    image: "/Certificate/ChatGPT for Developers.png",
    category: "learning",
  },
  {
    name: "Command Prompt 101",
    issuer: "Born to Dev",
    date: "2026",
    image: "/Certificate/Command Prompt 101.png",
    category: "learning",
  },
  {
    name: "Essential SQL for Everyone",
    issuer: "Born to Dev",
    date: "2026",
    image: "/Certificate/Essential SQL for Everyone.png",
    category: "learning",
  },
  {
    name: "AI Intelligent Innovation and Application",
    issuer: "THAI MOOC",
    date: "2026",
    image: "/Certificate/AI Intelligent Innovation and Application.jpg",
    category: "learning",
  },
  {
    name: "Cloud-native with Azure Container Apps",
    issuer: "THAI MOOC",
    date: "2026",
    image: "/Certificate/Cloud-native with Azure Container Apps.jpg",
    category: "learning",
  },
  {
    name: "Prompt Engineering with GitHub Copilot",
    issuer: "THAI MOOC",
    date: "2026",
    image: "/Certificate/Prompt Engineering with GitHub Copilot.jpg",
    category: "learning",
  },
  {
    name: "Creating a Basic Web Page with HTML and CSS",
    issuer: "THAI MOOC",
    date: "2026",
    image: "/Certificate/Creating a Basic Web Page with HTML and CSS.jpg",
    category: "learning",
  },
];
