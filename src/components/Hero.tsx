import React from "react";
import { Github, Linkedin, Mail } from "lucide-react";

const Hero: React.FC = () => (
  <section
    id="about"
    className="py-16 grid md:grid-cols-[1fr_320px] gap-12 items-center"
  >
    <div className="bg-[#FFFDF6] border-4 border-slate-800 rounded-[2rem] p-8 shadow-[8px_8px_0px_0px_rgba(30,41,59,1)]">
      <span className="inline-block bg-amber-400 text-slate-900 font-black uppercase text-xs tracking-widest px-3 py-1 border-2 border-slate-800 rounded-lg shadow-[2px_2px_0px_0px_rgba(30,41,59,1)]">
        Software Tester / QA Engineer
      </span>
      <h1 className="text-5xl font-black mt-4 text-slate-800 tracking-tight">
        Aman Alikae
      </h1>
      <p className="mt-6 text-base font-medium text-slate-600 leading-relaxed">
        A Software Engineering student from the University of Phayao with a
        strong passion for Software Quality Assurance. Dedicated to ensuring
        system reliability and peak performance through rigorous analytical
        testing. I excel at identifying defects and implementing preventive
        measures to deliver a seamless, high-quality user experience.
      </p>

      <div className="flex gap-4 mt-8">
        <a
          href="https://github.com/Aman050102"
          target="_blank"
          rel="noreferrer"
          className="p-3 bg-white text-slate-800 border-4 border-slate-800 rounded-xl shadow-[3px_3px_0px_0px_rgba(30,41,59,1)] hover:translate-y-[-2px] hover:shadow-[5px_5px_0px_0px_rgba(30,41,59,1)] transition-all"
        >
          <Github size={22} />
        </a>
        <a
          href="https://www.linkedin.com/in/aman-alikae/?trk=public-profile-join-page"
          target="_blank"
          rel="noreferrer"
          className="p-3 bg-white text-slate-800 border-4 border-slate-800 rounded-xl shadow-[3px_3px_0px_0px_rgba(30,41,59,1)] hover:translate-y-[-2px] hover:shadow-[5px_5px_0px_0px_rgba(30,41,59,1)] transition-all"
        >
          <Linkedin size={22} />
        </a>
        <a
          href="mailto:aman.aleekae@gmail.com"
          className="p-3 bg-white text-slate-800 border-4 border-slate-800 rounded-xl shadow-[3px_3px_0px_0px_rgba(30,41,59,1)] hover:translate-y-[-2px] hover:shadow-[5px_5px_0px_0px_rgba(30,41,59,1)] transition-all"
        >
          <Mail size={22} />
        </a>
      </div>
    </div>

    <div className="flex justify-center">
      <div className="relative rotate-3 hover:rotate-0 transition-transform duration-300">
        <div className="w-72 h-72 bg-white border-4 border-slate-800 rounded-[2rem] overflow-hidden shadow-[8px_8px_0px_0px_rgba(30,41,59,1)]">
          <img
            src="/Profile.JPG"
            alt="Profile"
            className="object-cover w-full h-full"
            onError={(e) => {
              e.currentTarget.src = "https://placehold.co/400?text=Profile";
            }}
          />
        </div>
        <div className="absolute -bottom-3 -right-3 bg-amber-400 border-2 border-slate-800 text-slate-900 text-xs font-black px-3 py-1 rounded-md shadow-md">
          HI THERE!
        </div>
      </div>
    </div>
  </section>
);

export default Hero;
