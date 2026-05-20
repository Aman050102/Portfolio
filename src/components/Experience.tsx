import React from "react";
import {
  ShieldCheck,
  Layout,
  Terminal,
  Sparkles,
  Database,
  Cpu,
  ArrowUpRight,
} from "lucide-react";

const Experience: React.FC = () => {
  const skillGroups = [
    {
      title: "AI & Intelligence",
      icon: <Sparkles className="text-amber-500" size={20} />,
      skills: [
        "Gemini",
        "ChatGPT",
        "Claude",
        "DeepSeek",
        "YOLO",
        "OpenCV",
        "Train Model",
      ],
      color: "bg-amber-50",
    },
    {
      title: "QA & Automation",
      icon: <ShieldCheck className="text-sky-500" size={20} />,
      skills: [
        "Robot Framework",
        "Selenium",
        "Postman",
        "Jira",
        "E2E Testing",
        "Test Planning",
        "UAT",
        "SDLC / V-Model",
        "Scrum",
        "White & Black Box",
      ],
      color: "bg-sky-50",
    },
    {
      title: "Systems & CMD",
      icon: <Cpu className="text-emerald-500" size={20} />,
      skills: [
        "Linux CLI",
        "Bash Script",
        "Terminal",
        "Ngrok",
        "SSH",
        "Git Command",
      ],
      color: "bg-emerald-50",
    },
    {
      title: "Front-end Architecture",
      icon: <Layout className="text-rose-500" size={20} />,
      skills: [
        "Next.js",
        "React",
        "TypeScript",
        "HTML5",
        "CSS3",
        "Tailwind CSS",
        "Figma",
      ],
      color: "bg-rose-50",
    },
    {
      title: "Back-end & Cloud",
      icon: <Terminal className="text-indigo-500" size={20} />,
      skills: [
        "Node.js",
        "Hono",
        "Laravel",
        "Python",
        "MySQL",
        "AWS",
        "Vercel",
      ],
      color: "bg-indigo-50",
    },
    {
      title: "Automation & Flow",
      icon: <Database className="text-purple-500" size={20} />,
      skills: [
        "n8n",
        "CI/CD Pipeline",
        "JSON",
        "OAuth 2.0",
        "Cloudflare",
        "SonarCloud",
      ],
      color: "bg-purple-50",
    },
  ];

  return (
    <section id="skills" className="py-16 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <header className="mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-xl bg-slate-800 text-white border-2 border-slate-900 shadow-[3px_3px_0px_0px_rgba(251,191,36,1)]">
            <span className="text-xs uppercase font-black tracking-widest">
              Technical Proficiency
            </span>
          </div>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillGroups.map((group, idx) => (
            <div
              key={idx}
              className="bg-[#FFFDF6] border-4 border-slate-800 rounded-3xl p-6 shadow-[6px_6px_0px_0px_rgba(30,41,59,1)] hover:translate-y-[-4px] transition-all duration-300"
            >
              <div className="flex items-center justify-between mb-6">
                <div
                  className={`p-3 rounded-2xl border-2 border-slate-800 shadow-[2px_2px_0px_0px_rgba(30,41,59,1)] ${group.color}`}
                >
                  {group.icon}
                </div>
                <ArrowUpRight className="text-slate-400" size={20} />
              </div>

              <h3 className="text-sm font-black tracking-wider uppercase text-slate-800 mb-4">
                {group.title}
              </h3>

              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 text-xs bg-white border-2 border-slate-800 rounded-lg text-slate-700 font-bold shadow-[2px_2px_0px_0px_rgba(30,41,59,1)] hover:bg-amber-400 hover:text-slate-950 transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 p-8 bg-[#FFF9E6] border-4 border-slate-800 rounded-3xl shadow-[6px_6px_0px_0px_rgba(30,41,59,1)]">
          <h4 className="text-xs uppercase tracking-widest text-slate-800 font-black mb-6">
            Interpersonal Attributes 
          </h4>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              "Problem Solving",
              "Critical Thinking",
              "Team Collaboration",
              "Attention to Detail",
              "Time Management",
              "Adaptability",
            ].map((s) => (
              <div
                key={s}
                className="bg-white border-2 border-slate-800 px-4 py-2.5 rounded-xl text-center shadow-[2px_2px_0px_0px_rgba(30,41,59,1)]"
              >
                <span className="text-xs text-slate-700 font-black tracking-tight">
                  {s}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
