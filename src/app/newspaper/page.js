'use client';

import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

export default function NewspaperPage() {
  return (
    <div className="min-h-screen bg-warm-50">
      <Navbar />

      <main id="main-content">
        {/* Hero Section */}
        <section className="relative flex min-h-[50vh] items-center justify-center overflow-hidden bg-[#001524] pt-20 pb-32">
          <div className="absolute inset-0 z-0 overflow-hidden">
            <div className="absolute -top-[10%] -right-[10%] h-[600px] w-[600px] animate-pulse rounded-full bg-primary-light/20 blur-[120px]"></div>
            <div className="absolute -bottom-[10%] -left-[10%] h-[600px] w-[600px] animate-pulse rounded-full bg-accent/5 blur-[120px]" style={{ animationDelay: '1s' }}></div>
          </div>
          
          <div className="absolute inset-0 z-1 bg-gradient-to-b from-transparent via-[#001524]/50 to-[#001524]" />

          <div className="relative z-10 mx-auto max-w-5xl px-6 py-20 text-center">
            <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-5 py-2 backdrop-blur-md">
              <div className="flex h-6 w-6 items-center justify-center overflow-hidden rounded-full bg-white">
                <img src="/assets/images/PS38 School Logo.jpg" alt="PS 38 Logo" className="h-full w-full object-cover" />
              </div>
              <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-accent">Student Voice</span>
            </div>
            <h1 className="mb-6 text-4xl font-black leading-tight tracking-tighter text-white sm:text-6xl lg:text-7xl">
              <span className="block italic font-serif text-accent drop-shadow-sm mb-4 text-3xl sm:text-4xl lg:text-5xl">The Dolphin</span>
              School <span className="bg-gradient-to-r from-white via-white to-white/60 bg-clip-text text-transparent">Times</span>
            </h1>
            <p className="mx-auto max-w-2xl text-lg font-medium leading-relaxed text-white/60 md:text-2xl">
              PS 38's very own school newspaper. Extra! Extra! Read all about it!
            </p>
          </div>

          {/* Wavy Section Divider */}
          <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0] transform rotate-180">
            <svg className="relative block w-full h-[80px]" viewBox="0 0 1200 120" preserveAspectRatio="none">
              <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" fill="#fdfaf6"></path>
            </svg>
          </div>
        </section>

        {/* Latest Issue Section */}
        <section className="bg-warm-50 py-16 md:py-32 lg:py-48 relative overflow-hidden">
          {/* Playful Motif */}
          <div className="absolute top-20 right-10 opacity-[0.05] pointer-events-none scale-150 rotate-45">
            <svg width="100" height="100" viewBox="0 0 100 100" fill="currentColor" className="text-accent"><path d="M50,10 L90,90 L10,90 Z" stroke="currentColor" strokeWidth="2" fill="none" strokeDasharray="5,5"/></svg>
          </div>

          <div className="mx-auto max-w-6xl px-6 relative z-10">
            <div className="grid gap-20 lg:grid-cols-2 lg:items-center lg:gap-32">
              <div className="group">
                <div className="mb-8 inline-flex items-center gap-2 rounded-full bg-primary/5 px-5 py-2 text-xs font-black uppercase tracking-wider text-primary">
                  Latest Issue
                </div>
                <h2 className="mb-10 text-4xl font-black leading-[1] tracking-tighter text-gray-900 md:text-6xl lg:text-7xl transition-all duration-500 group-hover:translate-x-2">
                  January / <br />
                  <span className="relative inline-block text-primary">
                    February <span className="italic font-serif text-accent">2024</span>
                    <svg className="absolute -bottom-4 left-0 w-full h-4 text-accent/30" viewBox="0 0 100 20" preserveAspectRatio="none">
                      <path d="M0,10 Q50,20 100,10 T200,10" stroke="currentColor" strokeWidth="4" fill="none" />
                    </svg>
                  </span>
                </h2>
                <p className="mb-12 text-lg md:text-xl text-gray-500 font-medium leading-relaxed">
                  Stay updated with stories, student achievements, and community events shared by our very own Dolphin journalists.
                </p>
                <a href="https://echalk-slate-prod.s3.amazonaws.com/private/schools/1808/resources/f70cbf7d-2606-4fab-bda1-f014303ab64e?AWSAccessKeyId=AKIAJSZKIBPXGFLSZTYQ&Expires=2025609231&response-cache-control=private%2C%20max-age%3D31536000&response-content-disposition=%3Bfilename%3D%22dolphins-24_svc8172.pdf%22&response-content-type=application%2Fpdf&Signature=CJxbAKiO3VQR4PQVU8%2BppmVmKOA%3D" target="_blank" rel="noopener noreferrer" className="group inline-flex items-center gap-6 rounded-[2.5rem] bg-primary px-12 py-8 text-2xl font-black uppercase tracking-widest text-white shadow-2xl transition-all duration-300 hover:scale-105 active:scale-95 hover:bg-accent">
                  Read Full Issue (PDF)
                  <svg className="h-8 w-8 transition-transform duration-300 group-hover:translate-x-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}><path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" /></svg>
                </a>
              </div>
              
              <div className="relative">
                <div className="absolute -inset-10 rounded-[4rem] border-4 border-dashed border-primary/20 -rotate-2"></div>
                <div className="relative aspect-[3/4] overflow-hidden rounded-[3.5rem] bg-gray-100 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.3)] transition-transform duration-700 hover:scale-105 hover:rotate-1">
                  <img src="https://image.echalk.com/site/1809/XZ3f6s2IN7lAzPqEWpkTG43DfjWBPNpd0zeiLSSTa0NezT5aHUrn17BuALQW2k57VtR_Z8Vqj5os9vbrMzFsFVxPOfj4q7UK28rLTB096is" alt="The Dolphin Times Newspaper Cover" className="h-full w-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
                <div className="absolute -top-16 -right-12 h-48 w-48 animate-bounce-slow pointer-events-none">
                  <div className="relative h-full w-full">
                    <div className="absolute inset-0 bg-accent rounded-full blur-2xl opacity-20"></div>
                    <img src="/assets/images/PS38 School Logo.jpg" alt="PS 38 Logo Decoration" className="relative rounded-full shadow-3xl border-8 border-white" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Newspaper Mission */}
        <section className="relative overflow-hidden bg-white py-32 md:py-48 text-center">
          {/* Wavy Divider */}
          <div className="absolute top-0 left-0 w-full overflow-hidden leading-[0]">
            <svg className="relative block w-full h-[80px]" viewBox="0 0 1200 120" preserveAspectRatio="none">
              <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" fill="#fdfaf6"></path>
            </svg>
          </div>

          <div className="mx-auto max-w-4xl px-6 relative z-10">
            <div className="mb-10 inline-flex items-center gap-2 rounded-full bg-accent/10 px-6 py-2 text-xs font-black uppercase tracking-wider text-accent">
              Student Journalism
            </div>
            <h2 className="mb-12 text-4xl font-black tracking-tighter text-gray-900 md:text-6xl lg:text-7xl">
              Empowering Student <span className="italic font-serif text-primary">Voice</span>
            </h2>
            <div className="relative">
              <span className="absolute -top-10 -left-10 text-7xl md:text-9xl font-serif text-accent opacity-20">"</span>
              <p className="text-xl md:text-2xl font-medium leading-relaxed text-gray-500 italic max-w-2xl mx-auto">
                The Dolphin Times is a platform for our students to explore their creativity, 
                develop journalism skills, and share their unique perspectives.
              </p>
              <span className="absolute -bottom-20 -right-10 text-9xl font-serif text-accent opacity-20 rotate-180">“</span>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
