import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Experience from './components/Experience';
import ProjectCard from './components/ProjectCard';
import Certificate from './components/Certificate';
import { projects } from './data/portfolioData'; // ดึงแค่ข้อมูล projects ออกมาใช้
import { Terminal, ClipboardList } from 'lucide-react';

function App() {
  // กรองเอาเฉพาะโปรเจกต์อื่นๆ ที่ไม่ใช่ตัวหลัก UP REG มาแสดงด้านล่าง
  const otherProjects = projects.filter(p => !p.title.includes("UP REG"));
  const upRegProject = projects.find(p => p.title.includes("UP REG"));

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-900 selection:bg-blue-100">
      <Navbar />

      <main className="max-w-6xl mx-auto px-6">
        <Hero />
        <Experience />

        <section id="projects" className="py-20 border-b border-slate-200">
          <div className="mb-12">
            <h2 className="text-3xl font-extrabold flex items-center gap-3 text-slate-800">
              <Terminal size={32} className="text-blue-600" />
              Featured QA Automation Work
            </h2>
          </div>

          {upRegProject && (
            <div className="grid lg:grid-cols-2 gap-12 bg-white p-8 rounded-[2rem] border border-slate-200 shadow-sm mb-12">
              <div className="space-y-6">
                <div className="flex items-center gap-2 text-blue-600 font-bold uppercase tracking-widest text-xs">
                  <span className="w-8 h-[2px] bg-blue-600"></span> Current Active Project
                </div>
                <h3 className="text-3xl font-bold text-slate-900">{upRegProject.title}</h3>
                <p className="text-slate-600 leading-relaxed">{upRegProject.description}</p>
                <div className="flex flex-wrap gap-3">
                  <a href={upRegProject.link} target="_blank" rel="noreferrer" className="flex items-center gap-2 bg-slate-900 text-white px-6 py-3 rounded-xl font-bold text-sm hover:scale-105 transition">
                    <ClipboardList size={18} /> View Test Cases (Google Sheets)
                  </a>
                </div>
              </div>

              <div className="bg-slate-900 rounded-2xl p-6 text-sm font-mono text-blue-300 shadow-2xl relative overflow-hidden">
                <div className="flex gap-2 mb-4 border-b border-slate-700 pb-2">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  <span className="text-[10px] text-slate-500 ml-2">gpa_calculate.robot</span>
                </div>
                <div className="space-y-1">
                  <p><span className="text-pink-400">*** Test Cases ***</span></p>
                  <p>TC-01: Maximum GPA (All A)</p>
                  <p className="pl-4 text-slate-500">Input Multiple Grades  A  A  A</p>
                  <p className="pl-4 text-green-400">Wait Until Page Contains  4.00</p>
                  <br />
                  <p>TC-03: Minimum GPA (All F)</p>
                  <p className="pl-4 text-slate-500">Input Multiple Grades  F  F  F</p>
                  <p className="pl-4 text-green-400">Wait Until Page Contains  0.00</p>
                </div>
              </div>
            </div>
          )}

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {otherProjects.map((p, i) => <ProjectCard key={i} project={p} />)}
          </div>
        </section>

        <Certificate />

        <footer className="py-20 border-t border-slate-200 text-center text-slate-400 text-xs">
          <p>© 2026 Your Name. Software Tester Portfolio</p>
        </footer>
      </main>
    </div>
  );
}

export default App;
