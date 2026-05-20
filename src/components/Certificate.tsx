import React, { useState } from "react";
import {
  BookOpen,
  ArrowUpRight,
  GraduationCap,
  ClipboardList,
  X,
} from "lucide-react";

export interface Certificate {
  name?: string;
  issuer: string;
  date: string;
  image: string;
  category: "grade" | "training" | "activity";
  gpax?: string;
  faculty?: string;
  department?: string;
}

export const certificates: Certificate[] = [
  {
    issuer: "University of Phayao",
    date: "2026",
    image: "Transcript.jpg",
    category: "grade",
    gpax: "3.22",
    faculty: "School of Information and Communication Technology",
    department: "Software Engineering",
  },
  {
    name: "ChatGPT for Developers",
    issuer: "Born to Dev",
    date: "2026",
    image: "/Certificate/ChatGPT for Developers.png",
    category: "training",
  },
  {
    name: "Command Prompt 101",
    issuer: "Born to Dev",
    date: "2026",
    image: "/Certificate/Command Prompt 101.png",
    category: "training",
  },
  {
    name: "Essential SQL for Everyone",
    issuer: "Born to Dev",
    date: "2026",
    image: "/Certificate/Essential SQL for Everyone.png",
    category: "training",
  },
  {
    name: "AI Intelligent Innovation and Application",
    issuer: "THAI MOOC",
    date: "2026",
    image: "/Certificate/AI Intelligent Innovation and Application.jpg",
    category: "training",
  },
  {
    name: "Cloud-native with Azure Container Apps",
    issuer: "THAI MOOC",
    date: "2026",
    image: "/Certificate/Cloud-native with Azure Container Apps.jpg",
    category: "training",
  },
  {
    name: "Prompt Engineering with GitHub Copilot",
    issuer: "THAI MOOC",
    date: "2026",
    image: "/Certificate/Prompt Engineering with GitHub Copilot.jpg",
    category: "training",
  },
  {
    name: "Active Board Member of Muslim Student Club, University of Phayao (Academic Year 2025)",
    issuer: "Student Leader",
    date: "2026",
    image:
      "/Certificate/ได้ปฎิบัติหน้าที่กรรมการบริหารชมรมนิสิตมุสลิม มหาวิทยาลัยพะเยา ประจำปีการศึกษา 2568.jpg",
    category: "activity",
  },
  {
    name: "Committee Member for 'San Sai Yai Nong Phi Thee Rak' Project",
    issuer: "Student Leader",
    date: "2026",
    image: "/Certificate/เป็นคณะกรรมการโครงการสานสายใยน้องพี่ที่รัก.jpg",
    category: "activity",
  },
  {
    name: "Organizing Committee Member for 'Assalamualaikum 2025' Project",
    issuer: "Student Leader",
    date: "2026",
    image:
      "/Certificate/เป็นคณะกรรมการดำเนินงานโครงการ Assalamualaikum 2025.jpg",
    category: "activity",
  },
];

const CertificateComponent: React.FC = () => {
  const [selectedImg, setSelectedImg] = useState<string | null>(null);

  const grades = certificates.filter((c) => c.category === "grade");
  const trainings = certificates.filter((c) => c.category === "training");
  const activities = certificates.filter((c) => c.category === "activity");

  const CertCard = ({
    cert,
    isLarge = false,
  }: {
    cert: Certificate;
    isLarge?: boolean;
  }) => (
    <div
      className="group bg-[#FFFDF6] border-4 border-slate-800 rounded-[2rem] p-6 shadow-[6px_6px_0px_0px_rgba(30,41,59,1)] hover:translate-y-[-4px] transition-all duration-300 cursor-pointer flex flex-col justify-between"
      onClick={() => setSelectedImg(cert.image)}
    >
      <div>
        <div
          className={`relative ${isLarge ? "aspect-auto" : "aspect-[16/10]"} overflow-hidden rounded-2xl border-4 border-slate-800 shadow-[3px_3px_0px_0px_rgba(30,41,59,1)]`}
        >
          <img
            src={cert.image}
            alt={cert.name || cert.issuer}
            className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-slate-900/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <div className="flex items-center gap-2 text-slate-900 font-black border-2 border-slate-900 bg-amber-400 px-4 py-2 rounded-xl shadow-md">
              <span className="text-xs">Click to View</span>
              <ArrowUpRight size={16} />
            </div>
          </div>
        </div>

        <div className="mt-4">
          <div className="flex justify-between items-center mb-2">
            <span className="px-2.5 py-0.5 bg-slate-100 border-2 border-slate-800 rounded-md text-[10px] font-black uppercase text-slate-700">
              {cert.issuer}
            </span>
            <span className="text-xs font-mono font-bold text-slate-500">
              {cert.date}
            </span>
          </div>

          {cert.name && (
            <h4 className="text-base font-black text-slate-800 leading-snug group-hover:text-amber-600 transition-colors">
              {cert.name}
            </h4>
          )}

          {cert.category === "grade" && (
            <div className="mt-4 bg-amber-50 border-2 border-slate-800 rounded-xl p-4 shadow-[2px_2px_0px_0px_rgba(30,41,59,1)]">
              <div className="flex items-center gap-2 mb-2">
                <span className="bg-slate-800 text-white text-xs font-black px-2.5 py-1 rounded-md border border-slate-900">
                  GPAX: {cert.gpax}
                </span>
              </div>
              <div className="space-y-1">
                <p className="text-base text-slate-800 font-black leading-tight">
                  {cert.faculty}
                </p>
                <p className="text-sm text-slate-600 font-bold italic">
                  {cert.department}
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );

  const SectionDivider = ({
    icon: Icon,
    title,
  }: {
    icon: any;
    title: string;
  }) => (
    <div className="flex items-center gap-4 mb-10">
      <div className="flex items-center gap-2 px-4 py-2 bg-slate-800 text-white rounded-xl border-2 border-slate-900 shadow-[3px_3px_0px_0px_rgba(251,191,36,1)]">
        <Icon size={18} />
        <h2 className="text-xs font-black uppercase tracking-wider whitespace-nowrap">
          {title}
        </h2>
      </div>
      <div className="h-1 flex-1 bg-slate-800 rounded-full"></div>
    </div>
  );

  return (
    <section id="certs" className="py-16 space-y-20">
      {selectedImg && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-900/80 backdrop-blur-sm p-4 md:p-10 cursor-zoom-out"
          onClick={() => setSelectedImg(null)}
        >
          <button className="absolute top-6 right-6 text-white bg-slate-800 border-2 border-white rounded-full p-2">
            <X size={24} />
          </button>
          <img
            src={selectedImg}
            className="max-w-full max-h-[90vh] rounded-2xl border-4 border-slate-800 shadow-2xl object-contain animate-in zoom-in-95 duration-200"
            alt="Certificate Full View"
          />
        </div>
      )}

      <div>
        <SectionDivider icon={GraduationCap} title="Academic & Grades" />
        <div className="flex justify-center">
          <div className="max-w-3xl w-full">
            {grades.map((cert, idx) => (
              <CertCard key={idx} cert={cert} isLarge={true} />
            ))}
          </div>
        </div>
      </div>

      <div>
        <SectionDivider icon={BookOpen} title="Training Certificates" />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {trainings.map((cert, idx) => (
            <CertCard key={idx} cert={cert} />
          ))}
        </div>
      </div>

      <div>
        <SectionDivider icon={ClipboardList} title="Activity Certificates" />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {activities.map((cert, idx) => (
            <CertCard key={idx} cert={cert} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificateComponent;
