'use client';

import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

export default function GamesPage() {
  const fieldTrips = [
    { name: "Wildlife Conservation Zoo", link: "https://bronxzoo.com/virtual-zoo" },
    { name: "Met Museum for Kids", link: "https://www.metmuseum.org/art/online-features/metkids/" },
    { name: "Museum of Natural History", link: "https://artsandculture.google.com/partner/american-museum-of-natural-history" },
    { name: "Intrepid Sea, Air & Space", link: "https://artsandculture.google.com/partner/intrepid-sea-air-and-space-museum" },
    { name: "Empire State Building", link: "https://www.esbnyc.com/earthcam-empire-state-building" },
    { name: "Guggenheim Museum", link: "https://artsandculture.google.com/streetview/solomon-r-guggenheim-museum-interior-streetview/jAHfbv3JGM2KaQ" }
  ];

  const learningLinks = [
    { name: "ABCya", desc: "Interactive games for PreK-6 students.", link: "https://www.abcya.com/", color: "bg-orange-500" },
    { name: "PBS Kids", desc: "Educational videos and learning games.", link: "https://pbskids.org/", color: "bg-emerald-500" },
    { name: "BrainPOP", desc: "Animated lessons across every subject.", link: "https://www.brainpop.com/", color: "bg-sky-500" },
    { name: "Starfall", desc: "Phonics and early reading fun.", link: "https://www.starfall.com/h/", color: "bg-rose-500" },
    { name: "CoolMath", desc: "Logic, strategy, and math games.", link: "https://www.coolmath.com/", color: "bg-indigo-500" },
    { name: "IXL Learning", desc: "Comprehensive skill-building portal.", link: "https://www.ixl.com/", color: "bg-amber-500" }
  ];

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
              <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-accent">Student Zone</span>
            </div>
            <h1 className="mb-6 text-6xl font-black leading-tight tracking-tighter text-white sm:text-8xl lg:text-9xl">
              <span className="block italic font-serif text-accent drop-shadow-sm mb-4 text-4xl sm:text-5xl lg:text-6xl">Learning Is</span>
              Fun & <span className="bg-gradient-to-r from-white via-white to-white/60 bg-clip-text text-transparent">Games</span>
            </h1>
            <p className="mx-auto max-w-2xl text-xl font-medium leading-relaxed text-white/60 md:text-3xl">
              Digital adventures, educational portals, and creative stations.
            </p>
          </div>

          {/* Wavy Section Divider */}
          <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0] transform rotate-180">
            <svg className="relative block w-full h-[80px]" viewBox="0 0 1200 120" preserveAspectRatio="none">
              <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" fill="#fdfaf6"></path>
            </svg>
          </div>
        </section>

        {/* Learning Hub Grid */}
        <section className="bg-warm-50 py-32 md:py-48 relative overflow-hidden">
          {/* Background Detail */}
          <div className="absolute top-20 left-10 opacity-[0.03] pointer-events-none scale-150">
            <svg width="100" height="100" viewBox="0 0 100 100" fill="currentColor" className="text-primary"><rect x="10" y="10" width="80" height="80" rx="20" stroke="currentColor" strokeWidth="2" fill="none" strokeDasharray="10,5"/></svg>
          </div>

          <div className="mx-auto max-w-7xl px-6 relative z-10">
            <div className="mb-24 text-center">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-primary/5 px-5 py-2 text-xs font-black uppercase tracking-wider text-primary">
                Educational Portals
              </div>
              <h2 className="text-6xl font-black tracking-tighter text-gray-900 md:text-8xl">Explore the <span className="italic font-serif text-accent">Web</span></h2>
              <p className="mx-auto mt-8 max-w-2xl text-2xl text-gray-500 font-medium leading-relaxed">Trusted learning resources used by George Cromwell students every day.</p>
            </div>
            
            <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
              {learningLinks.map((site, i) => (
                <a key={i} href={site.link} target="_blank" rel="noopener noreferrer" className="group relative transition-all duration-500 hover:-translate-y-3">
                  <div className="absolute -inset-2 rounded-[3.5rem] border-2 border-dashed border-accent/20 transition-transform group-hover:rotate-2"></div>
                  <div className="relative p-12 rounded-[3rem] border border-gray-100 bg-white shadow-sm group-hover:shadow-3xl transition-all duration-500">
                    <div className={`mb-10 flex h-20 w-20 items-center justify-center rounded-[1.5rem] ${site.color} text-white shadow-xl transition-transform duration-500 group-hover:rotate-12 group-hover:scale-110`}>
                      <span className="text-3xl font-black">{site.name.charAt(0)}</span>
                    </div>
                    <h3 className="mb-4 text-3xl font-black text-gray-900 group-hover:text-primary transition-colors">{site.name}</h3>
                    <p className="text-xl text-gray-500 font-medium leading-relaxed mb-8">{site.desc}</p>
                    <span className="inline-flex items-center gap-3 text-sm font-black uppercase tracking-widest text-primary">Visit Website <svg className="h-5 w-5 transition-transform group-hover:translate-x-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg></span>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Digital Field Trips */}
        <section className="relative overflow-hidden bg-[#001524] py-32 md:py-48 text-white">
          {/* Wavy Divider */}
          <div className="absolute top-0 left-0 w-full overflow-hidden leading-[0]">
            <svg className="relative block w-full h-[80px]" viewBox="0 0 1200 120" preserveAspectRatio="none">
              <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" fill="#fdfaf6"></path>
            </svg>
          </div>

          <div className="absolute top-0 right-0 h-full w-1/2 bg-gradient-to-l from-primary-light/20 to-transparent pointer-events-none"></div>
          
          <div className="relative z-10 mx-auto max-w-6xl px-6">
            <div className="mb-24 text-center lg:text-left">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/10 px-5 py-2 text-xs font-black uppercase tracking-wider text-accent">
                Digital Field Trips
              </div>
              <h2 className="text-6xl font-black tracking-tighter md:text-8xl">Explore the <span className="italic font-serif text-accent">World</span></h2>
              <p className="mt-8 text-2xl text-white/60 font-medium max-w-2xl">Journey across museums and landmarks from your classroom or home.</p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {fieldTrips.map((trip, i) => (
                <a key={i} href={trip.link} target="_blank" rel="noopener noreferrer" className="group flex items-center justify-between p-10 rounded-[2rem] bg-white/5 border border-white/10 transition-all duration-300 hover:bg-white/10 hover:border-accent shadow-xl active:scale-95">
                  <span className="font-black text-2xl tracking-tight">{trip.name}</span>
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent text-white opacity-0 transition-all duration-300 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 group-hover:rotate-12">
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}><path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Ms Gina's Station */}
        <section className="relative overflow-hidden bg-white py-32 md:py-48">
          {/* Wavy Divider */}
          <div className="absolute top-0 left-0 w-full overflow-hidden leading-[0]">
            <svg className="relative block w-full h-[80px]" viewBox="0 0 1200 120" preserveAspectRatio="none">
              <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" fill="#001524"></path>
            </svg>
          </div>

          <div className="mx-auto max-w-5xl px-6 relative z-10 text-center">
            <h2 className="mb-16 text-6xl font-black tracking-tighter text-gray-900 md:text-8xl">Gina's <span className="italic font-serif text-primary">Station</span></h2>
            <div className="relative rounded-[4rem] bg-warm-50 p-12 md:p-24 border-2 border-dashed border-primary/20">
              <div className="grid gap-8 md:grid-cols-2">
                {[
                  { title: "35 Virtual Camps", link: "https://echalk-slate-prod.s3.amazonaws.com/private/schools/1808/resources/e8ae6003-95dc-4c0e-86e6-f25bc57db1a0" },
                  { title: "Summer Camp Catalog", link: "https://www.varsitytutors.com/virtual-summer-camp-catalog" },
                  { title: "Fun Summer Crafts", link: "https://www.bhg.com/crafts/kids/outdoor-projects/outdoor-summer-kids-crafts/" },
                  { title: "Lawn Game Guides", link: "https://www.bhg.com/health-family/activities/family-friendly-lawn-games/" }
                ].map((item, i) => (
                  <a key={i} href={item.link} target="_blank" rel="noopener noreferrer" className="group flex items-center justify-center p-10 rounded-[2.5rem] bg-white shadow-xl ring-1 ring-gray-100 font-black text-2xl text-gray-700 hover:text-primary transition-all hover:scale-105 active:scale-95">
                    {item.title}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
