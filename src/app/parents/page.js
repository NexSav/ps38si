'use client';

import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

export default function ParentsCornerPage() {
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
              <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-accent">For Families</span>
            </div>
            <h1 className="mb-6 text-4xl font-black leading-tight tracking-tighter text-white sm:text-6xl lg:text-7xl">
              <span className="block italic font-serif text-accent drop-shadow-sm mb-4 text-3xl sm:text-4xl lg:text-5xl">Welcome to the</span>
              Parent's <span className="bg-gradient-to-r from-white via-white to-white/60 bg-clip-text text-transparent">Corner</span>
            </h1>
            <p className="mx-auto max-w-2xl text-lg font-medium leading-relaxed text-white/60 md:text-2xl">
              Resources, updates, and community connections for PS 38 families.
            </p>
          </div>

          {/* Wavy Section Divider */}
          <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0] transform rotate-180">
            <svg className="relative block w-full h-[80px]" viewBox="0 0 1200 120" preserveAspectRatio="none">
              <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" fill="#fdfaf6"></path>
            </svg>
          </div>
        </section>

        {/* PTA Section */}
        <section className="bg-warm-50 py-16 md:py-32 lg:py-48 relative overflow-hidden">
          {/* Subtle Motif */}
          <div className="absolute top-40 right-0 opacity-[0.03] pointer-events-none rotate-12 scale-150">
            <svg width="200" height="200" viewBox="0 0 100 100" fill="#00223a"><circle cx="50" cy="50" r="40" stroke="currentColor" strokeWidth="2" fill="none" strokeDasharray="10,5"/></svg>
          </div>

          <div className="mx-auto max-w-6xl px-6 relative z-10">
            <div className="grid gap-20 lg:grid-cols-2 lg:items-center lg:gap-32">
              <div className="group">
                <div className="mb-8 inline-flex items-center gap-2 rounded-full bg-primary/5 px-5 py-2 text-xs font-black uppercase tracking-wider text-primary">
                  Community Leadership
                </div>
                <h2 className="mb-10 text-4xl font-black tracking-tighter text-gray-900 md:text-6xl lg:text-7xl transition-all duration-500 group-hover:translate-x-2">
                  PTA <span className="italic font-serif text-accent">Board</span>
                </h2>
                <div className="mb-12 relative rounded-[3rem] bg-white p-12 shadow-xl ring-1 ring-gray-100 overflow-hidden">
                  <div className="absolute top-0 left-0 h-1 w-full bg-gradient-to-r from-accent via-primary to-accent"></div>
                  <h3 className="mb-8 text-xl font-black text-primary uppercase tracking-[0.3em]">2025-2026 Slate</h3>
                  <ul className="space-y-6">
                    {[
                      { role: "President", name: "Christine Paterno" },
                      { role: "Treasurer", name: "Nataly Jasso" },
                      { role: "PAC Chair", name: "Nataly Jasso" }
                    ].map((item, i) => (
                      <li key={i} className="flex flex-col sm:flex-row sm:justify-between sm:items-center border-b border-gray-100 pb-4 gap-2">
                        <span className="text-sm font-black uppercase tracking-widest text-gray-400">{item.role}</span>
                        <span className="text-2xl font-black text-gray-900">{item.name}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex flex-wrap gap-4">
                  <a href="https://echalk-slate-prod.s3.amazonaws.com/private/schools/1808/resources/6bdcdae8-fdb4-4439-a7a3-cc89d91a9ee5?AWSAccessKeyId=AKIAJSZKIBPXGFLSZTYQ&Expires=2072901981&Signature=RnniXH0ApBkujdHNkibr6iR%2BHtk%3D" target="_blank" rel="noopener noreferrer" className="group inline-flex items-center gap-4 rounded-[2rem] bg-[#001524] px-10 py-6 text-xl font-black uppercase tracking-widest text-white shadow-2xl transition-all duration-300 hover:scale-105">
                    Welcome Letter (PDF)
                    <svg className="h-6 w-6 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}><path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" /></svg>
                  </a>
                </div>
              </div>
              <div className="relative">
                <div className="absolute -inset-6 rounded-[4rem] border-4 border-dashed border-accent/20 rotate-2"></div>
                <div className="relative aspect-[4/3] overflow-hidden rounded-[3.5rem] bg-gray-100 shadow-3xl transition-transform duration-700 hover:rotate-1">
                  <img src="https://image.echalk.com/site/1809/rzS8aEoC6GEEWeMvKMoRIvzI5-p860qGGjvrfV2lO4YxwSNonHtkrTappN3EGLCKU32UiZlJE2AoiGKpWtxQwpG0v3VGBpp92v_cEA7pqfU" alt="Families and schools partners for success" className="h-full w-full object-cover transition-transform duration-700 hover:scale-110" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Portals Section */}
        <section className="relative overflow-hidden bg-[#001524] py-16 md:py-32 lg:py-48 text-white">
          {/* Wavy Divider */}
          <div className="absolute top-0 left-0 w-full overflow-hidden leading-[0]">
            <svg className="relative block w-full h-[80px]" viewBox="0 0 1200 120" preserveAspectRatio="none">
              <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" fill="#fdfaf6"></path>
            </svg>
          </div>

          <div className="mx-auto max-w-7xl px-6 relative z-10">
            <div className="mb-24 text-center">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/10 px-5 py-2 text-xs font-black uppercase tracking-wider text-accent">
                Digital Hub
              </div>
              <h2 className="text-4xl font-black tracking-tighter md:text-6xl lg:text-7xl">Essential <span className="italic font-serif text-accent">Portals</span></h2>
              <p className="mx-auto mt-8 max-w-2xl text-2xl text-white/60 font-medium">One-click access to student records and learning platforms.</p>
            </div>
            
            <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
              {[
                { title: "Google Classroom", desc: "TeachHub, iLearnNYC, and daily classroom assignments.", link: "https://www.schools.nyc.gov/learning/digital-learning/doe-student-accounts" },
                { title: "NYC Schools Account", desc: "Track progress from Pre-K to graduation. Monitor grades & attendance.", link: "https://www.schoolsaccount.nyc/" },
                { title: "Teach Hub", desc: "Student documents, report cards, and digital content hub.", link: "http://teachhub.schools.nyc/" },
                { title: "MySchools", desc: "Enrollment hub for middle and high school applications.", link: "https://myschools.nyc/en/" },
                { title: "DOE Accounts", desc: "Setup and help for official DOE student technology accounts.", link: "https://www.schools.nyc.gov/learning/digital-learning/doe-student-accounts" },
                { title: "Enrollment Info", desc: "Stay updated on the latest NYC school enrollment news.", link: "https://www.schools.nyc.gov/enrollment/enroll-grade-by-grade" }
              ].map((app, i) => (
                <div key={i} className="group relative flex flex-col rounded-[3rem] bg-white/5 p-12 ring-1 ring-white/10 backdrop-blur-md transition-all duration-500 hover:-translate-y-2 hover:bg-white/10">
                  <h3 className="mb-4 text-3xl font-black text-white group-hover:text-accent transition-colors">{app.title}</h3>
                  <p className="mb-10 text-xl text-white/50 leading-relaxed font-medium flex-grow">{app.desc}</p>
                  <a href={app.link} target="_blank" rel="noopener noreferrer" className="group/btn inline-flex items-center gap-3 text-lg font-black uppercase tracking-widest text-accent transition-all duration-300 hover:gap-5">
                    Launch Portal
                    <svg className="h-6 w-6 transform transition-transform group-hover/btn:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Support & Snacks Section */}
        <section className="relative overflow-hidden bg-white py-16 md:py-32 lg:py-48">
          {/* Wavy Divider */}
          <div className="absolute top-0 left-0 w-full overflow-hidden leading-[0]">
            <svg className="relative block w-full h-[80px]" viewBox="0 0 1200 120" preserveAspectRatio="none">
              <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" fill="#001524"></path>
            </svg>
          </div>

          <div className="mx-auto max-w-6xl px-6">
            <div className="grid gap-16 lg:grid-cols-2">
              <div className="relative rounded-[4rem] bg-warm-50 p-12 md:p-20 border-2 border-dashed border-gray-200 group overflow-hidden transition-all duration-500 hover:border-primary/30">
                <h3 className="mb-10 text-3xl font-black tracking-tighter text-gray-900 md:text-4xl lg:text-5xl transition-all duration-500 group-hover:translate-x-2">Tech <span className="italic font-serif text-primary">Support</span></h3>
                <p className="mb-12 text-2xl text-gray-500 leading-relaxed font-medium">Direct lines for technical assistance and device troubleshooting.</p>
                <div className="space-y-8">
                  <a href="tel:718-935-5100" className="group/call flex items-center gap-6 rounded-[2.5rem] bg-white p-8 shadow-sm ring-1 ring-gray-100 hover:shadow-2xl transition-all">
                    <div className="flex h-16 w-16 items-center justify-center rounded-[1.5rem] bg-accent text-white shadow-xl group-hover/call:rotate-12 transition-transform">
                      <PhoneIcon size={28} />
                    </div>
                    <div>
                      <div className="text-xs font-black uppercase tracking-[0.3em] text-gray-400">DOE Service Desk</div>
                      <div className="text-3xl font-black text-gray-900 tracking-tighter">(718) 935-5100</div>
                    </div>
                  </a>
                  <div className="grid gap-6 sm:grid-cols-2">
                    <a href="https://servicecenter.nycenet.edu/CherwellPortal/IT?_=72450b7e#0" target="_blank" rel="noopener noreferrer" className="rounded-2xl bg-white p-6 text-sm font-black uppercase tracking-widest text-primary hover:bg-primary hover:text-white transition-all text-center ring-1 ring-gray-100 shadow-sm">NYC Tech Help</a>
                    <a href="https://echalk-slate-prod.s3.amazonaws.com/private/schools/1808/resources/13ab9717-d3ff-4d40-ada0-a2a6656a91b7?AWSAccessKeyId=AKIAJSZKIBPXGFLSZTYQ&Expires=1917012338&Signature=cZfP2kgdAyiI4meTPQCvi4MOpIw%3D" target="_blank" rel="noopener noreferrer" className="rounded-2xl bg-white p-6 text-sm font-black uppercase tracking-widest text-primary hover:bg-primary hover:text-white transition-all text-center ring-1 ring-gray-100 shadow-sm">iPad Support</a>
                  </div>
                </div>
              </div>

              <div className="relative rounded-[4rem] bg-[#001524] p-12 md:p-20 text-white shadow-3xl overflow-hidden group">
                <div className="absolute -top-10 -right-10 h-64 w-64 rounded-full bg-accent/20 blur-[100px] animate-pulse"></div>
                <h3 className="mb-10 text-3xl font-black tracking-tighter md:text-4xl lg:text-5xl transition-all duration-500 group-hover:translate-x-2">Snack <span className="italic font-serif text-accent">Cart</span></h3>
                <div className="relative mb-12 overflow-hidden rounded-[2.5rem] shadow-2xl">
                  <img src="https://image.echalk.com/site/1809/xzyUr5naHVkXdLPFzGbADTLRMEDRTyCLxe8iVUrjXvqqLQagWWNaM5HnCITkYzIFzTMNUUVFUI0Q-Xsyg1HVGzwvyfjQ_ZECmWF0anhxdsc" alt="PS 38 Snack Cart" className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110" />
                </div>
                <ul className="space-y-6 mb-10">
                  {["Water & Juices - $1.00", "Gushers & Snacks - $1.00", "Oreos - 2 for $1.00"].map((item, i) => (
                    <li key={i} className="flex items-center gap-4 text-2xl font-black tracking-tight">
                      <div className="h-2 w-2 rounded-full bg-accent"></div>
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="p-6 rounded-2xl bg-white/5 border border-white/10 text-center">
                  <p className="text-lg font-bold text-white/60 italic">* All funds used for student activities.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Spirit & Guides Grid */}
        <section className="relative overflow-hidden bg-warm-50 py-16 md:py-32 lg:py-48">
          <div className="mx-auto max-w-6xl px-6 relative z-10">
            <h2 className="mb-20 text-center text-4xl font-black leading-tight tracking-tighter text-gray-900 md:text-6xl lg:text-7xl">
              School <span className="italic font-serif text-primary">Spirit</span> & Guides
            </h2>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {[
                { title: "NYCSA Flyer (Eng)", link: "https://echalk-slate-prod.s3.amazonaws.com/private/schools/1808/resources/cfa13f1a-b2e2-4db4-91be-5b960a5141f2" },
                { title: "NYCSA Flyer (Spa)", link: "https://echalk-slate-prod.s3.amazonaws.com/private/schools/1808/resources/d3121cca-4426-4e3f-a409-a72654773009" },
                { title: "504 Family Guide", link: "https://echalk-slate-prod.s3.amazonaws.com/private/schools/1808/resources/c98ccba6-d675-41e0-b4d7-a926dd74c6a8" },
                { title: "Behavior Guide", link: "https://www.schools.nyc.gov/DCode" },
                { title: "Grading Policy", link: "https://docs.google.com/document/d/1Nd7ImuD9si9ieUnyKtNmBw0PVsINeSXk/edit?usp=sharing" },
                { title: "Health & Safety", link: "https://www.schools.nyc.gov/school-life/health-and-wellness/covid-information/health-and-safety-in-our-schools" }
              ].map((item, i) => (
                <a key={i} href={item.link} target="_blank" rel="noopener noreferrer" className="group relative p-10 rounded-[3rem] bg-white border border-gray-100 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-3xl hover:border-primary/20">
                  <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-[1.25rem] bg-primary text-white shadow-xl transition-transform group-hover:rotate-12 group-hover:bg-accent group-hover:scale-110">
                    <span className="text-xs font-black">DOC</span>
                  </div>
                  <h4 className="text-2xl font-black text-gray-900 leading-tight mb-2">{item.title}</h4>
                  <span className="text-xs font-black uppercase tracking-widest text-primary opacity-0 group-hover:opacity-100 transition-opacity">Download Now →</span>
                </a>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

function PhoneIcon({ size = 20, className = '' }) {
  return (
    <svg className={className || 'h-5 w-5 text-primary'} width={size} height={size} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
    </svg>
  );
}
