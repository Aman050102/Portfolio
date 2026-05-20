import React from 'react';

const Navbar: React.FC = () => (
  <nav className="sticky top-4 z-50 max-w-5xl mx-auto px-4">
    <div className="bg-[#FFFDF6] border-4 border-slate-800 rounded-2xl shadow-[4px_4px_0px_0px_rgba(30,41,59,1)] px-6 h-16 flex items-center justify-between">
      <span className="font-black text-xl tracking-wider text-slate-800">PORTFOLIO</span>
      <div className="hidden md:flex gap-6 text-sm font-bold text-slate-700">
        <a href="#about" className="hover:text-amber-500 transition-colors">About</a>
        <a href="#skills" className="hover:text-amber-500 transition-colors">Skills</a>
        <a href="#projects" className="hover:text-amber-500 transition-colors">Projects</a>
        <a href="#certs" className="hover:text-amber-500 transition-colors">Certificates</a>
      </div>
    </div>
  </nav>
);

export default Navbar;
