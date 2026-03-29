import React from 'react';
import {
  ShieldCheck, Layout, Terminal, Cloud,
  Sparkles, Users, Database, Cpu
} from 'lucide-react';

const Experience: React.FC = () => {
  const skillGroups = [
    {
      title: "AI & Intelligence",
      icon: <Sparkles size={16} />,
      skills: ["Gemini", "ChatGPT", "Claude", "DeepSeek", "YOLO", "OpenCV", "Train Model"]
    },
    {
      title: "QA & Automation",
      icon: <ShieldCheck size={16} />,
      skills: ["Robot Framework", "Selenium", "Postman", "Jira", "E2E Testing", "Requirement"]
    },
    {
      title: "Systems & CMD",
      icon: <Cpu size={16} />,
      skills: ["Linux CLI", "Bash Script", "Terminal", "Ngrok", "SSH", "Git Command"]
    },
    {
      title: "Front-end Architecture",
      icon: <Layout size={16} />,
      skills: ["Next.js", "React", "TypeScript", "HTML5", "CSS3", "Tailwind CSS", "Figma"]
    },
    {
      title: "Back-end & Cloud",
      icon: <Terminal size={16} />,
      skills: ["Node.js", "Hono", "Laravel", "Python", "MySQL", "AWS", "Vercel"]
    },
    {
      title: "Automation & Flow",
      icon: <Database size={16} />,
      skills: ["n8n", "CI/CD Pipeline", "JSON", "OAuth 2.0", "Cloudflare", "SonarCloud"]
    }
  ];

  return (
    <section className="py-28 bg-[#030303] text-white rounded-[4rem] px-8 md:px-16 my-20 relative overflow-hidden">
      {/* Subtle Glow Background */}
      <div className="absolute top-0 left-1/4 w-[400px] h-[400px] bg-blue-600/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto">
        <header className="mb-24">
          <h2 className="text-[10px] uppercase tracking-[0.5em] text-blue-500 font-black mb-4">Technical Proficiency</h2>
          <h1 className="text-5xl md:text-6xl font-extralight tracking-tighter text-white">
            Skill <span className="font-serif italic text-slate-500">Inventory</span>
          </h1>
        </header>

        {/* --- Skills Grid --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-16 gap-y-20">
          {skillGroups.map((group, idx) => (
            <div key={idx} className="group flex flex-col">
              <div className="flex items-center gap-3 mb-8 border-b border-slate-900 pb-4 group-hover:border-blue-500/30 transition-all duration-500">
                <span className="text-blue-500/80">{group.icon}</span>
                <h3 className="text-xs font-bold tracking-[0.2em] uppercase text-slate-200">{group.title}</h3>
              </div>

              <div className="flex flex-wrap gap-x-6 gap-y-4">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="text-[13px] text-slate-500 font-light hover:text-blue-400 transition-colors duration-300 cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* --- Footer Section: Soft Skills & Key Metrics --- */}
        <div className="mt-40 pt-16 border-t border-slate-900 grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <h4 className="text-[10px] uppercase tracking-[0.3em] text-slate-600 font-bold">Interpersonal Attributes</h4>
            <div className="flex flex-wrap gap-x-8 gap-y-4">
              {["Problem Solving", "Critical Thinking", "Team Collaboration", "Attention to Detail" , "Time Management", "Teamwork", "Adaptability", "Positive Attitude", "Communication Skills"
              ].map(s => (
                <span key={s} className="text-[14px] text-slate-400 font-extralight italic">
                  — {s}
                </span>
              ))}
            </div>
          </div>

          {/* Metrics Section: นี่คือส่วนที่คุณถามถึงครับ */}
          <div className="flex justify-between md:justify-end gap-16">
            {[
              { label: "Testing", val: "Automation" },
              { label: "Systems", val: "Linux" },
              { label: "Logic", val: "Clean Code" }
            ].map((item, i) => (
              <div key={i} className="text-right">
                <div className="text-3xl font-extralight text-white mb-2 tracking-tighter hover:text-blue-500 transition-colors">
                  {item.val}
                </div>
                <div className="text-[9px] uppercase tracking-[0.3em] text-slate-600 font-black">
                  {item.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
