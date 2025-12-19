'use client';

import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-warm-50">
      <Navbar />

      <main id="main-content">
        {/* Hero Section */}
        <section className="relative flex min-h-[60vh] items-center justify-center overflow-hidden bg-[#001524] pt-20 pb-32">
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
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-accent">School Profile</span>
            </div>
            <h1 className="mb-6 text-6xl font-black leading-tight tracking-tighter text-white sm:text-8xl lg:text-9xl">
              <span className="block italic font-serif text-accent drop-shadow-sm mb-4 text-4xl sm:text-5xl lg:text-6xl">Discover</span>
              Our <span className="bg-gradient-to-r from-white via-white to-white/60 bg-clip-text text-transparent">School</span>
            </h1>
            <p className="mx-auto max-w-2xl text-xl font-medium leading-relaxed text-white/60 md:text-3xl">
              History, mission, and the heart of the PS 38 George Cromwell community.
            </p>
          </div>

          {/* Wavy Section Divider */}
          <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0] transform rotate-180">
            <svg className="relative block w-full h-[80px]" viewBox="0 0 1200 120" preserveAspectRatio="none">
              <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" fill="#fdfaf6"></path>
            </svg>
          </div>
        </section>

        {/* School Vision Section */}
        <section className="relative overflow-hidden bg-warm-50 py-32 md:py-48">
          <div className="mx-auto max-w-6xl px-6">
            <div className="mb-24 text-center">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-primary/5 px-5 py-2 text-xs font-black uppercase tracking-[0.2em] text-primary">
                Our Foundation
              </div>
              <h2 className="mb-6 text-6xl font-black leading-tight tracking-tighter text-gray-900 md:text-8xl">
                School <span className="italic font-serif text-accent">Vision</span>
              </h2>
              <p className="mx-auto max-w-3xl text-xl leading-relaxed text-gray-500 md:text-2xl">
                We are Unique Individuals who are NOT Defined by one color or one trait! 
                Education at PS 38 stems from:
              </p>
            </div>

            <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  title: "Life-Long Learners",
                  desc: "Believing in children, inspiring young minds, and nurturing their natural strengths and abilities.",
                  color: "text-orange-500",
                  bg: "bg-orange-50"
                },
                {
                  title: "Safe School Culture",
                  desc: "Built on trust through collaboration, communicating, and engaging in shared decision-making.",
                  color: "text-blue-500",
                  bg: "bg-blue-50"
                },
                {
                  title: "Habits of Heart & Mind",
                  desc: "Promoting inclusion and acceptance as we lead with love and kindness.",
                  color: "text-emerald-500",
                  bg: "bg-emerald-50"
                },
                {
                  title: "Meaningful Learning",
                  desc: "Equipping students with a toolbox of knowledge and strategies for the 21st century workplace.",
                  color: "text-indigo-500",
                  bg: "bg-indigo-50"
                },
                {
                  title: "Young Leaders",
                  desc: "Encouraging student voice and empowering students to make a positive impact on the community.",
                  color: "text-purple-500",
                  bg: "bg-purple-50"
                }
              ].map((item, i) => (
                <div key={i} className="group relative rounded-[3rem] border-2 border-dashed border-gray-100 bg-white p-10 transition-all duration-500 hover:-translate-y-2 hover:border-primary/20 hover:shadow-3xl">
                  <div className={`mb-8 flex h-16 w-16 items-center justify-center rounded-[1.5rem] ${item.bg} ${item.color} transition-transform duration-500 group-hover:rotate-12 group-hover:scale-110`}>
                    <span className="text-2xl font-black">{i + 1}</span>
                  </div>
                  <h3 className={`mb-4 text-3xl font-black leading-tight ${item.color}`}>
                    {item.title}
                  </h3>
                  <p className="text-xl leading-relaxed text-gray-500 font-medium">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Theory of Action Section */}
        <section className="relative overflow-hidden bg-[#001524] py-32 md:py-48 text-white">
          {/* Wavy Divider */}
          <div className="absolute top-0 left-0 w-full overflow-hidden leading-[0]">
            <svg className="relative block w-full h-[80px]" viewBox="0 0 1200 120" preserveAspectRatio="none">
              <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" fill="#fdfaf6"></path>
            </svg>
          </div>

          <div className="absolute top-0 right-0 h-full w-1/2 bg-gradient-to-l from-primary-light/20 to-transparent pointer-events-none"></div>
          
          <div className="relative z-10 mx-auto max-w-6xl px-6">
            <div className="mb-24 text-center">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/10 px-5 py-2 text-xs font-black uppercase tracking-wider text-accent">
                Our Strategy
              </div>
              <h2 className="text-6xl font-black tracking-tighter md:text-8xl">Theory of <span className="italic font-serif text-accent">Action</span></h2>
            </div>

            <div className="grid gap-12 lg:grid-cols-3">
              {[
                { 
                  stage: "IF", 
                  who: "School Leaders", 
                  text: "provide inclusive professional development and RELAY coaching through bi-weekly planning and weekly data meetings...", 
                  accent: "text-accent"
                },
                { 
                  stage: "THEN", 
                  who: "Teachers", 
                  text: "will effectively engage students in cognitively demanding tasks in alignment with NYC Reads Literacy and Math shifts...", 
                  accent: "text-primary-lighter"
                },
                { 
                  stage: "SO", 
                  who: "All Students", 
                  text: "are immersed in rigorous academic opportunities and inclusion-first instruction yielding positive outcomes.", 
                  accent: "text-emerald-400"
                }
              ].map((item, i) => (
                <div key={i} className="relative flex flex-col rounded-[3.5rem] bg-white/5 p-12 ring-1 ring-white/10 backdrop-blur-md transition-all duration-500 hover:-translate-y-2 hover:bg-white/10">
                  <div className={`mb-8 text-xs font-black uppercase tracking-[0.4em] ${item.accent}`}>Stage {i + 1}</div>
                  <div className="mb-6 flex items-baseline gap-3">
                    <span className="text-5xl font-black italic opacity-20">{item.stage}</span>
                    <h3 className="text-3xl font-black">{item.who}</h3>
                  </div>
                  <p className="text-xl leading-relaxed text-white/60 font-medium">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Equity Values Section */}
        <section className="relative overflow-hidden bg-white py-32 md:py-48">
          {/* Wavy Divider */}
          <div className="absolute top-0 left-0 w-full overflow-hidden leading-[0]">
            <svg className="relative block w-full h-[80px]" viewBox="0 0 1200 120" preserveAspectRatio="none">
              <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" fill="#001524"></path>
            </svg>
          </div>

          <div className="mx-auto max-w-6xl px-6">
            <div className="grid gap-20 lg:grid-cols-2 lg:items-center lg:gap-32">
              <div>
                <div className="mb-8 inline-flex items-center gap-2 rounded-full bg-primary/5 px-5 py-2 text-xs font-black uppercase tracking-wider text-primary">
                  Core Principles
                </div>
                <h2 className="mb-12 text-6xl font-black tracking-tighter text-gray-900 md:text-8xl">Equity <span className="italic font-serif text-accent">Values</span></h2>
                
                <div className="space-y-12">
                  {[
                    { title: "Collective Responsibility", desc: "Diverse learners are the collective responsibility of the whole community." },
                    { title: "Inclusive PD", desc: "All staff receive the support and training needed to effectively support learners." },
                    { title: "Rigorous Opportunities", desc: "Every student is given the chance to achieve success on grade level content." },
                    { title: "Inclusion-First", desc: "Diverse learners receive primary instruction in a meaningful, inclusive setting." }
                  ].map((value, i) => (
                    <div key={i} className="group flex gap-8 transition-all duration-300 hover:translate-x-2">
                      <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-[1rem] border-2 border-primary/20 text-sm font-black text-primary transition-all duration-300 group-hover:border-primary group-hover:bg-primary group-hover:text-white group-hover:rotate-12">
                        {i + 1}
                      </div>
                      <div>
                        <h4 className="mb-2 text-2xl font-black text-gray-900">{value.title}</h4>
                        <p className="text-xl text-gray-500 font-medium leading-relaxed">{value.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="relative">
                <div className="absolute -inset-10 rounded-[4rem] border-4 border-dashed border-accent/20 rotate-2"></div>
                <div className="relative overflow-hidden rounded-[3.5rem] bg-[#001524] p-16 shadow-3xl text-white">
                  <div className="mb-10 flex h-20 w-20 items-center justify-center rounded-[1.5rem] bg-white/10 text-accent transition-transform duration-500 hover:rotate-12">
                    <svg className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <h3 className="mb-8 text-4xl font-black tracking-tight">Our Commitment</h3>
                  <p className="text-2xl leading-relaxed text-white/70 font-medium italic">
                    "Equity isn't just a value—it's the lens through which we view every decision, every lesson, and every interaction."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stay Connected Section */}
        <section className="relative overflow-hidden bg-warm-100 py-32 md:py-48">
          {/* Wavy Divider */}
          <div className="absolute top-0 left-0 w-full overflow-hidden leading-[0]">
            <svg className="relative block w-full h-[80px]" viewBox="0 0 1200 120" preserveAspectRatio="none">
              <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" fill="#ffffff"></path>
            </svg>
          </div>

          <div className="mx-auto max-w-4xl px-6 text-center relative z-10">
            <div className="mb-8 inline-flex items-center gap-2 rounded-full bg-accent/10 px-6 py-2 text-xs font-black uppercase tracking-wider text-accent">
              Stay Connected
            </div>
            <h2 className="mb-10 text-6xl font-black leading-tight tracking-tighter text-gray-900 md:text-8xl">
              eChalk <span className="italic font-serif text-primary">Notify</span> App
            </h2>
            <p className="mb-16 text-2xl leading-relaxed text-gray-500 font-medium">
              Get real-time school updates on your mobile device. <br />Connect with code <span className="font-black text-primary underline decoration-accent decoration-4">U9BZHQ</span> to get instant alerts.
            </p>
            
            <div className="flex flex-wrap justify-center gap-8">
              <a 
                href="https://play.google.com/store/apps/details?id=com.echalk.SlateMobile" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group flex items-center gap-4 rounded-3xl bg-white px-10 py-6 shadow-xl transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl active:scale-95"
              >
                <div className="text-left">
                  <div className="text-[10px] font-black uppercase tracking-widest text-gray-400">Get it on</div>
                  <div className="text-2xl font-black text-gray-900">Google Play</div>
                </div>
              </a>
              <a 
                href="https://itunes.apple.com/us/app/echalk-notify/id1412392735" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group flex items-center gap-4 rounded-3xl bg-[#001524] px-10 py-6 shadow-xl transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl active:scale-95"
              >
                <div className="text-left text-white">
                  <div className="text-[10px] font-black uppercase tracking-widest text-white/40">Download on the</div>
                  <div className="text-2xl font-black">App Store</div>
                </div>
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
