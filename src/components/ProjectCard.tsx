import React from 'react';
import { ChevronRight, TestTube, Code, Search } from 'lucide-react';
// ใช้ import type เพื่อความชัวร์
import type { Project } from '../data/portfolioData';

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
  const Icon = project.type === 'Automation' ? TestTube : project.type === 'Manual' ? Search : Code;

  return (
    <div className="group bg-white border border-slate-200 rounded-2xl p-6 hover:border-blue-500 hover:shadow-xl hover:shadow-blue-500/5 transition-all flex flex-col justify-between h-full">
      <div>
        <div className="flex justify-between items-start mb-4">
          <div className="p-2 bg-slate-50 rounded-lg group-hover:bg-blue-50 transition">
            <Icon size={20} className="text-slate-400 group-hover:text-blue-600" />
          </div>
          <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">
            {project.type}
          </span>
        </div>
        <h3 className="text-xl font-bold mb-2 text-slate-800 leading-tight group-hover:text-blue-600 transition">{project.title}</h3>
        <p className="text-slate-500 text-sm mb-6 leading-relaxed line-clamp-3">{project.description}</p>
      </div>

      <div>
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tags.map(tag => (
            <span key={tag} className="text-[10px] font-semibold text-slate-400 uppercase tracking-tighter italic">#{tag}</span>
          ))}
        </div>
        <a href={project.link} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-sm font-bold text-slate-900 group-hover:text-blue-600 transition">
          View Work <ChevronRight size={16} className="group-hover:ml-1 transition-all" />
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
