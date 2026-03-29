import React from 'react';
import { Award, BookOpen, Star, ArrowUpRight } from 'lucide-react';
import { certificates } from '../data/portfolioData';

const Certificate: React.FC = () => {
  const achievements = certificates.filter(c => c.category === 'achievement');
  const learnings = certificates.filter(c => c.category === 'learning');

  const CertCard = ({ cert }: { cert: any }) => (
    <div className="group flex flex-col transition-all duration-500 overflow-hidden">
      {/* 1. Image Display - ขยายใหญ่และคมชัด */}
      <div className="relative aspect-[16/10] overflow-hidden rounded-[2rem] shadow-md group-hover:shadow-2xl group-hover:-translate-y-2 transition-all duration-500">
        <img
          src={cert.image}
          alt={cert.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />

        {/* Hover Overlay - ปรากฏเมื่อเอาเมาส์วาง */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8">
            <div className="flex items-center gap-2 text-white font-medium">
                <span className="text-sm">View Full Certificate</span>
                <ArrowUpRight size={18} />
            </div>
        </div>
      </div>

      {/* 2. Simple & Clean Text Info */}
      <div className="mt-6 px-2">
        <div className="flex justify-between items-start mb-2">
            <p className="text-xs font-bold text-blue-600 uppercase tracking-[0.2em]">{cert.issuer}</p>
            <span className="text-[10px] font-mono text-slate-400">{cert.date}</span>
        </div>
        <h4 className="text-xl font-bold text-slate-800 leading-tight group-hover:text-blue-700 transition-colors">
          {cert.name}
        </h4>

        <div className="flex items-center gap-2 mt-4 text-slate-400">
            <div className="h-[1px] w-8 bg-slate-200"></div>
            <Award size={14} className="text-amber-500/60" />
            <p className="text-[11px] uppercase tracking-widest font-medium">Professional Credential</p>
        </div>
      </div>
    </div>
  );

  return (
    <section id="certs" className="py-24 space-y-32">
      {/* ส่วนที่ 1: Key Achievements */}
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col mb-16">
          <div className="flex items-center gap-3 mb-2">
             <Star size={24} className="text-amber-500 fill-amber-400" />
             <span className="text-sm font-bold text-slate-400 uppercase tracking-[0.3em]">Honors</span>
          </div>
          <h2 className="text-5xl font-black text-slate-900 tracking-tight">
            Key <span className="text-blue-600 italic">Achievements</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
          {achievements.map((cert, idx) => <CertCard key={idx} cert={cert} />)}
        </div>
      </div>

      {/* ส่วนที่ 2: Training Section (Minimal Style) */}
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center gap-6 mb-16">
            <div className="h-[2px] flex-1 bg-slate-100"></div>
            <div className="flex items-center gap-3 px-6 py-2 bg-slate-50 rounded-full border border-slate-100">
                <BookOpen size={20} className="text-blue-500" />
                <h2 className="text-lg font-bold text-slate-700 whitespace-nowrap uppercase tracking-widest">Training & Certs</h2>
            </div>
            <div className="h-[2px] flex-1 bg-slate-100"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {learnings.map((cert, idx) => <CertCard key={idx} cert={cert} />)}
        </div>
      </div>
    </section>
  );
};

export default Certificate;
