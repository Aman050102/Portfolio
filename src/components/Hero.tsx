import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const Hero: React.FC = () => (
  <section id="about" className="py-20 grid md:grid-cols-[1fr_300px] gap-12 items-center">
    <div>
      <span className="text-blue-600 font-semibold uppercase text-sm tracking-widest">QA & Software Tester</span>
      <h1 className="text-5xl font-extrabold mt-4 text-slate-900 leading-tight">Aman Alikae</h1>
      <p className="mt-6 text-lg text-slate-600 leading-relaxed max-w-xl">
        เชี่ยวชาญการทำ Automation Test และมีความเข้าใจใน Software Development Life Cycle อย่างลึกซึ้ง
        พร้อมส่งมอบซอฟต์แวร์ที่มีคุณภาพสูงสุด
      </p>
      <div className="flex gap-4 mt-8">
        <a href="https://github.com/Aman050102" className="p-3 text-slate-400 hover:text-slate-900 border border-slate-200 rounded-xl transition"><Github /></a>
        <a href="https://www.linkedin.com/in/aman-alikae/?trk=public-profile-join-page" className="p-3 text-slate-400 hover:text-slate-900 border border-slate-200 rounded-xl transition"><Linkedin /></a>
        <a href="mailto:aman.aleekae@gmail.com" className="p-3 text-slate-400 hover:text-slate-900 border border-slate-200 rounded-xl transition"><Mail /></a>
      </div>
    </div>
    <div className="hidden md:block w-72 h-72 bg-slate-100 rounded-[2.5rem] overflow-hidden shadow-xl border-8 border-white">
      <img
        src="/public/Profile.jpg"
        alt="Profile"
        className="object-cover w-full h-full"
        onError={(e) => { e.currentTarget.src = "https://placehold.co/400?text=Profile"; }}
      />
    </div>
  </section>
);

export default Hero;
