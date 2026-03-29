// 1. Interfaces สำหรับโครงสร้างข้อมูล (Type Safety)
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

// 2. ข้อมูล Projects (ส่วนที่ทำให้เกิด Error ก่อนหน้านี้)
export const projects: Project[] = [
  {
    title: "UP REG - Academic Tracking",
    description: "ระบบคำนวณเกรดเฉลี่ย (GPA) อัตโนมัติ โดยใช้ Robot Framework ในการทดสอบความถูกต้องของ Logic การคำนวณ และความถูกต้องของข้อมูลผ่านเว็บบราวเซอร์",
    link: "https://docs.google.com/spreadsheets/d/your-google-sheet-link",
    type: "Automation",
    tags: ["Robot Framework", "Selenium", "Python", "E2E Testing"]
  },
  {
    title: "API Testing with Postman",
    description: "การทดสอบ API และสร้าง Automation Script สำหรับตรวจสอบ Response Status, Schema และ Data Validation เพื่อความมั่นใจในคุณภาพของ Backend",
    link: "#",
    type: "Automation",
    tags: ["Postman", "API Testing", "JavaScript", "JSON"]
  },
  {
    title: "Manual Test Plan for E-Commerce",
    description: "ออกแบบ Test Case, Test Scenario และทำ Bug Report สำหรับระบบตะกร้าสินค้า โดยครอบคลุมทั้ง Positive และ Negative Test",
    link: "#",
    type: "Manual",
    tags: ["Manual Testing", "Jira", "Test Plan", "Bug Report"]
  }
];

// 3. ข้อมูล Certificates (รวมทุกใบไว้ในที่เดียว)
export const certificates: Certificate[] = [
  {
    name: "Software Quality Assurance Distinction",
    issuer: "University of Phayao",
    date: "2026",
    image: "/Certificate/ChatGPT for Developers.png", // แนะนำ: ตรวจสอบ path รูปภาพอีกครั้ง
    category: "achievement"
  },
  {
    name: "ChatGPT for Developers",
    issuer: "Developer Academy",
    date: "2026",
    image: "/Certificate/ChatGPT for Developers.png",
    category: "learning"
  },
  {
    name: "Command Prompt 101",
    issuer: "Tech Skills",
    date: "2026",
    image: "/Certificate/Command Prompt 101.png",
    category: "learning"
  },
  {
    name: "Essential SQL for Everyone",
    issuer: "Data School",
    date: "2026",
    image: "/Certificate/Essential SQL for Everyone.png",
    category: "learning"
  },
    {
    name: "AI Intelligent Innovation and Application",
    issuer: "Data School",
    date: "2026",
    image: "/Certificate/AI Intelligent Innovation and Application.jpg",
    category: "learning"
  },
    {
    name: "Cloud-native with Azure Container Apps",
    issuer: "Data School",
    date: "2026",
    image: "/Certificate/Cloud-native with Azure Container Apps.jpg",
    category: "learning"
  },
    {
    name: "Prompt Engineering with GitHub Copilot",
    issuer: "Data School",
    date: "2026",
    image: "/Certificate/Prompt Engineering with GitHub Copilot.jpg",
    category: "learning"
  },
    {
    name: "Creating a Basic Web Page with HTML and CSS",
    issuer: "Data School",
    date: "2026",
    image: "/Certificate/Creating a Basic Web Page with HTML and CSS.jpg",
    category: "learning"
  },
];
