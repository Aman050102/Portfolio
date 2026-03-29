import React from 'react';

const Navbar: React.FC = () => (
  <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
    <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
      <span className="font-bold text-xl tracking-tight">QA.PORTFOLIO</span>
      <div className="hidden md:flex gap-8 text-sm font-medium text-slate-600">
        <a href="#about" className="hover:text-blue-600">About</a>
        <a href="#projects" className="hover:text-blue-600">Projects</a>
        <a href="#certs" className="hover:text-blue-600">Certificates</a>
      </div>
    </div>
  </nav>
);

export default Navbar;
