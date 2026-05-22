import { TestTube, Code, Search } from "lucide-react";
import type { Project } from "../data/portfolioData";

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
  const Icon =
    project.type === "Automation"
      ? TestTube
      : project.type === "Manual"
        ? Search
        : Code;

  const badgeColor =
    project.type === "Automation"
      ? "bg-emerald-600"
      : project.type === "Manual"
        ? "bg-amber-500 text-slate-900"
        : "bg-blue-600";

  return (
    <div className="group bg-[#FFFDF6] border-4 border-slate-800 rounded-2xl p-5 shadow-[5px_5px_0px_0px_rgba(30,41,59,1)] hover:translate-y-[-4px] transition-all flex flex-col justify-between h-full">
      <div>
        <div className="flex justify-between items-center mb-3">
          <div className="p-2 bg-amber-100 border-2 border-slate-800 rounded-lg shadow-[1.5px_1.5px_0px_0px_rgba(30,41,59,1)]">
            <Icon size={18} className="text-slate-800" />
          </div>
          <span
            className={`text-[9px] uppercase font-black px-2 py-0.5 border-2 border-slate-800 rounded-md text-white ${badgeColor}`}
          >
            {project.type}
          </span>
        </div>

        <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">
          📁 {project.systemName}
        </div>

        <h3 className="text-lg font-black mb-2 text-slate-800 tracking-tight leading-snug">
          {project.title}
        </h3>

        <p className="text-slate-600 text-xs font-medium mb-4 leading-relaxed line-clamp-3">
          {project.description}
        </p>
      </div>

      <div>
        <div className="flex flex-wrap gap-1 mb-4">
          {project.tags.map((tag) => (
            <span key={tag} className="text-[10px] font-bold text-amber-600">
              #{tag}
            </span>
          ))}
        </div>

        <div className="border-t-2 border-dashed border-slate-200 pt-3 flex flex-wrap gap-2 justify-end">
          {project.testCaseLink && project.testCaseLink !== "#" && (
            <a
              href={project.testCaseLink}
              target="_blank"
              rel="noreferrer"
              className="px-2 py-1 bg-amber-400 hover:bg-amber-500 border-2 border-slate-800 rounded-md text-[10px] font-black text-slate-900 inline-flex items-center gap-1 transition-colors shadow-[1px_1px_0px_0px_rgba(30,41,59,1)]"
            >
              Test Case
            </a>
          )}

          {project.robotLink && project.robotLink !== "#" && (
            <a
              href={project.robotLink}
              target="_blank"
              rel="noreferrer"
              className="px-2 py-1 bg-slate-800 hover:bg-slate-900 border-2 border-slate-800 rounded-md text-[10px] font-black text-white inline-flex items-center gap-1 transition-colors shadow-[1px_1px_0px_0px_rgba(30,41,59,1)]"
            >
              {project.type === "Development" ? "Source Code " : "Robot Code "}
            </a>
          )}

          {/* ปุ่มแสดงลิงก์ Production จริงบน Vercel สำหรับงานฝั่ง Development/Web App */}
          {project.productionLink && project.productionLink !== "#" && (
            <a
              href={project.productionLink}
              target="_blank"
              rel="noreferrer"
              className="px-2 py-1 bg-sky-400 hover:bg-sky-500 border-2 border-slate-800 rounded-md text-[10px] font-black text-slate-900 inline-flex items-center gap-1 transition-colors shadow-[1px_1px_0px_0px_rgba(30,41,59,1)]"
            >
              Live Site
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
