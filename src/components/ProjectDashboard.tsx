import React from 'react';
import { projects } from '../data/portfolioData';
import { ShieldCheck, Terminal, Award, Layers } from 'lucide-react';

const ProjectDashboard: React.FC = () => {
  // คำนวณสถิติจากข้อมูลจริงใน portfolioData
  const totalFeatures = projects.length;
  const automationCount = projects.filter(p => p.type === 'Automation').length;
  const manualCount = projects.filter(p => p.type === 'Manual').length;
  const devCount = projects.filter(p => p.type === 'Development').length;

  const totalTestJobs = automationCount + manualCount;
  const testerPercentage = totalFeatures > 0 ? Math.round((totalTestJobs / totalFeatures) * 100) : 0;

  return (
    <div className="w-full bg-[#FFFDF6] border-4 border-slate-800 rounded-[2rem] p-6 md:p-8 shadow-[8px_8px_0px_0px_rgba(30,41,59,1)] mb-12">

      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b-4 border-dashed border-slate-800 pb-6 mb-6">
        <div>
          <span className="bg-amber-400 text-slate-900 text-xs font-black px-3 py-1 border-2 border-slate-800 rounded-lg shadow-[2px_2px_0px_0px_rgba(30,41,59,1)] uppercase">
            Project Overview & Analytics
          </span>
          <h2 className="text-3xl font-black text-slate-800 tracking-tight mt-2">
            Quality Assurance Dashboard
          </h2>
        </div>
        <div className="flex items-center gap-2 bg-slate-800 text-white px-4 py-2 rounded-xl border-2 border-slate-900">
          <Award size={18} className="text-amber-400" />
          <span className="text-xs font-black tracking-wider uppercase">Primary: QA Software Tester</span>
        </div>
      </div>

      {/* Metrics Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <div className="bg-white border-2 border-slate-800 rounded-xl p-4 shadow-[3px_3px_0px_0px_rgba(30,41,59,1)] flex items-center gap-3">
          <div className="p-2.5 bg-blue-100 border-2 border-slate-800 rounded-lg">
            <Layers size={20} className="text-slate-800" />
          </div>
          <div>
            <p className="text-[10px] font-black uppercase text-slate-400">Total Features</p>
            <p className="text-xl font-black text-slate-800">{totalFeatures} Items</p>
          </div>
        </div>

        <div className="bg-white border-2 border-slate-800 rounded-xl p-4 shadow-[3px_3px_0px_0px_rgba(30,41,59,1)] flex items-center gap-3">
          <div className="p-2.5 bg-emerald-100 border-2 border-slate-800 rounded-lg">
            <ShieldCheck size={20} className="text-slate-800" />
          </div>
          <div>
            <p className="text-[10px] font-black uppercase text-slate-400">Automation</p>
            <p className="text-xl font-black text-slate-800">{automationCount} Scenarios</p>
          </div>
        </div>

        <div className="bg-white border-2 border-slate-800 rounded-xl p-4 shadow-[3px_3px_0px_0px_rgba(30,41,59,1)] flex items-center gap-3">
          <div className="p-2.5 bg-amber-100 border-2 border-slate-800 rounded-lg">
            <ShieldCheck size={20} className="text-slate-800" />
          </div>
          <div>
            <p className="text-[10px] font-black uppercase text-slate-400">Manual Test</p>
            <p className="text-xl font-black text-slate-800">{manualCount} Cases</p>
          </div>
        </div>

        <div className="bg-white border-2 border-slate-800 rounded-xl p-4 shadow-[3px_3px_0px_0px_rgba(30,41,59,1)] flex items-center gap-3">
          <div className="p-2.5 bg-purple-100 border-2 border-slate-800 rounded-lg">
            <Terminal size={20} className="text-slate-800" />
          </div>
          <div>
            <p className="text-[10px] font-black uppercase text-slate-400">Development</p>
            <p className="text-xl font-black text-slate-800">{devCount} Modules</p>
          </div>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="bg-white border-4 border-slate-800 rounded-2xl p-5 shadow-[4px_4px_0px_0px_rgba(30,41,59,1)]">
        <div className="flex justify-between items-center mb-3">
          <h3 className="text-xs font-black uppercase tracking-wider text-slate-700">
            📊 Portfolio Workload Distribution (Focusing on Testing)
          </h3>
          <span className="text-xs font-black text-slate-800 bg-amber-400 border-2 border-slate-800 px-2 py-0.5 rounded">
            {testerPercentage}% Testing Bias
          </span>
        </div>

        <div className="w-full h-8 bg-slate-100 border-2 border-slate-800 rounded-xl overflow-hidden flex">
          <div
            className="h-full bg-emerald-400 border-r-2 border-slate-800 flex items-center justify-center font-black text-[10px] text-slate-900 transition-all duration-500"
            style={{ width: totalFeatures > 0 ? `${(automationCount / totalFeatures) * 100}%` : '0%' }}
          >
            {automationCount > 0 && `Automation (${Math.round((automationCount / totalFeatures) * 100)}%)`}
          </div>
          <div
            className="h-full bg-amber-400 border-r-2 border-slate-800 flex items-center justify-center font-black text-[10px] text-slate-900 transition-all duration-500"
            style={{ width: totalFeatures > 0 ? `${(manualCount / totalFeatures) * 100}%` : '0%' }}
          >
            {manualCount > 0 && `Manual (${Math.round((manualCount / totalFeatures) * 100)}%)`}
          </div>
          <div
            className="h-full bg-blue-400 flex items-center justify-center font-black text-[10px] text-slate-900 transition-all duration-500"
            style={{ width: totalFeatures > 0 ? `${(devCount / totalFeatures) * 100}%` : '0%' }}
          >
            {devCount > 0 && `Dev (${Math.round((devCount / totalFeatures) * 100)}%)`}
          </div>
        </div>

        <div className="flex flex-wrap gap-4 mt-3 text-[11px] font-bold text-slate-500">
          <div className="flex items-center gap-1.5">
            <div className="w-3 h-3 bg-emerald-400 border border-slate-800 rounded"></div>
            <span>E2E Test Scripts & Robot Suites</span>
          </div>
          <div className="flex items-center gap-1.5">
            <div className="w-3 h-3 bg-amber-400 border border-slate-800 rounded"></div>
            <span>Manual Scenarios & Bug Reports</span>
          </div>
          <div className="flex items-center gap-1.5">
            <div className="w-3 h-3 bg-blue-400 border border-slate-800 rounded"></div>
            <span>Full-Stack App Architectures</span>
          </div>
        </div>
      </div>

    </div>
  );
};

export default ProjectDashboard;
