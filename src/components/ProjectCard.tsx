import React from 'react';
import { ChevronRight, TestTube, Code, Search } from 'lucide-react';
import type { Project } from '../data/portfolioData';

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
  const Icon = project.type === 'Automation' ? TestTube : project.type === 'Manual' ? Search : Code;

  return (
    <div className="group bg-[#FFFDF6] border-4 border-slate-800 rounded-2xl p-6 shadow-[6px_6px_0px_0px_rgba(30,41,59,1)] hover:translate-y-[-4px] transition-all flex flex-col justify-between h-full">
      <div>
        <div className="flex justify-between items-start mb-4">
          <div className="p-2.5 bg-amber-100 border-2 border-slate-800 rounded-xl shadow-[2px_2px_0px_0px_rgba(30,41,59,1)]">
            <Icon size={20} className="text-slate-800" />
          </div>
          <span className="bg-slate-800 text-white text-[10px] uppercase font-black px-2.5 py-1 border-2 border-slate-800 rounded-md">
            {project.type}
          </span>
        </div>
        <h3 className="text-xl font-black mb-2 text-slate-800 tracking-tight">{project.title}</h3>
        <p className="text-slate-600 text-sm font-medium mb-6 leading-relaxed line-clamp-3">{project.description}</p>
      </div>

      <div>
        <div className="flex flex-wrap gap-1.5 mb-6">
          {project.tags.map(tag => (
            <span key={tag} className="text-[11px] font-bold text-amber-600">#{tag}</span>
          ))}
        </div>
        <a href={project.link} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 text-sm font-black text-slate-800 hover:text-amber-500 transition-colors">
          View Work <ChevronRight size={16} />
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
