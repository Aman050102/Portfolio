import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Experience from "./components/Experience";
import ProjectDashboard from "./components/ProjectDashboard";
import ProjectCard from "./components/ProjectCard";
import Certificate from "./components/Certificate";
import { projects } from "./data/portfolioData";
import { Terminal, ClipboardList } from "lucide-react";

function App() {
  // คง Logic เดิมของคุณไว้ทั้งหมด ไม่มีการตัดออก
  const otherProjects = projects.filter((p) => !p.title.includes("UP REG"));
  const upRegProject = projects.find((p) => p.title.includes("UP REG"));

  return (
    <div className="min-h-screen bg-[#FFFDF9] text-slate-800 font-sans pb-16 selection:bg-amber-200">
      <div className="pt-6">
        <Navbar />
      </div>

      <main className="max-w-5xl mx-auto px-4 mt-8">
        <Hero />
        <Experience />

        <section id="projects" className="py-16">
          <div className="mb-10 flex items-center gap-4">
            <div className="flex items-center gap-2 px-4 py-2 bg-slate-800 text-white rounded-xl border-2 border-slate-900 shadow-[3px_3px_0px_0px_rgba(251,191,36,1)]">
              <Terminal size={18} />
              <h2 className="text-xs font-black uppercase tracking-wider">
                Featured QA Automation Work 🛠️
              </h2>
            </div>
            <div className="h-1 flex-1 bg-slate-800 rounded-full"></div>
          </div>

          {/* แทรกกล่องแดชบอร์ดภาพรวมขนาดใหญ่ตรงนี้ เพื่ออธิบายภาพรวมโปรเจกต์ทั้งหมด */}
          <ProjectDashboard />

          {/* แสดงกล่อง Active Project ตัวหลัก (ถ้ามี) */}
          {upRegProject && (
            <div className="grid lg:grid-cols-2 gap-8 bg-[#FFFDF6] p-6 rounded-[2rem] border-4 border-slate-800 shadow-[8px_8px_0px_0px_rgba(30,41,59,1)] mb-12">
              <div className="space-y-5 flex flex-col justify-between">
                <div>
                  <div className="inline-flex items-center gap-2 bg-amber-400 border-2 border-slate-800 text-slate-900 text-[10px] font-black px-2.5 py-1 rounded-md shadow-sm mb-4">
                    CURRENT ACTIVE PROJECT 🚀
                  </div>
                  <h3 className="text-3xl font-black text-slate-800 tracking-tight">
                    {upRegProject.title}
                  </h3>
                  <p className="text-slate-600 font-medium leading-relaxed mt-3">
                    {upRegProject.description}
                  </p>
                </div>

                <div>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {upRegProject.tags.map((t) => (
                      <span
                        key={t}
                        className="text-xs font-bold text-slate-500"
                      >
                        #{t}
                      </span>
                    ))}
                  </div>
                  <a
                    href={upRegProject.link}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 bg-slate-800 text-white px-5 py-3 rounded-xl font-black text-sm border-2 border-slate-900 shadow-[3px_3px_0px_0px_rgba(30,41,59,1)] hover:translate-y-[-2px] transition-all"
                  >
                    <ClipboardList size={16} /> View Test Cases (Google Sheets)
                  </a>
                </div>
              </div>

              <div className="bg-slate-900 border-4 border-slate-800 rounded-2xl p-5 text-xs font-mono text-amber-200 shadow-[6px_6px_0px_0px_rgba(30,41,59,1)] relative overflow-hidden">
                <div className="flex gap-1.5 mb-4 border-b border-slate-700 pb-3">
                  <div className="w-3 h-3 rounded-full bg-rose-500 border border-slate-950"></div>
                  <div className="w-3 h-3 rounded-full bg-amber-500 border border-slate-950"></div>
                  <div className="w-3 h-3 rounded-full bg-emerald-500 border border-slate-950"></div>
                  <span className="text-[10px] text-slate-400 ml-2">
                    gpa_calculate.robot
                  </span>
                </div>
                <div className="space-y-1">
                  <p>
                    <span className="text-pink-400">*** Test Cases ***</span>
                  </p>
                  <p className="text-sky-300">TC-01: Maximum GPA (All A)</p>
                  <p className="pl-4 text-slate-400">
                    Input Multiple Grades A A A
                  </p>
                  <p className="pl-4 text-emerald-400">
                    Wait Until Page Contains 4.00
                  </p>
                  <br />
                  <p className="text-sky-300">TC-03: Minimum GPA (All F)</p>
                  <p className="pl-4 text-slate-400">
                    Input Multiple Grades F F F
                  </p>
                  <p className="pl-4 text-emerald-400">
                    Wait Until Page Contains 0.00
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* รายการกล่องเล็กรายฟีเจอร์อื่นๆ ที่เหลือทั้งหมด */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherProjects.map((p, i) => (
              <ProjectCard key={i} project={p} />
            ))}
          </div>
        </section>

        <Certificate />

        <footer className="mt-16 pt-8 border-t-4 border-slate-800 text-center text-slate-500 text-xs font-bold">
          <p>© 2026 Aman Alikae. Software Tester Portfolio</p>
        </footer>
      </main>
    </div>
  );
}

export default App;
