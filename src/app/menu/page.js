'use client';

import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

export default function MenuPage() {
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
              <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-accent">Daily Dining</span>
            </div>
            <h1 className="mb-6 text-6xl font-black leading-tight tracking-tighter text-white sm:text-8xl lg:text-9xl">
              <span className="block italic font-serif text-accent drop-shadow-sm mb-4 text-4xl sm:text-5xl lg:text-6xl">Healthy</span>
              Daily <span className="bg-gradient-to-r from-white via-white to-white/60 bg-clip-text text-transparent">Dining</span>
            </h1>
            <p className="mx-auto max-w-2xl text-xl font-medium leading-relaxed text-white/60 md:text-3xl">
              Fresh breakfast and lunch menus for our growing learners.
            </p>
          </div>

          {/* Wavy Section Divider */}
          <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0] transform rotate-180">
            <svg className="relative block w-full h-[80px]" viewBox="0 0 1200 120" preserveAspectRatio="none">
              <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" fill="#fdfaf6"></path>
            </svg>
          </div>
        </section>

        {/* Meal Times Section */}
        <section className="bg-warm-50 py-32 md:py-48 relative overflow-hidden">
          <div className="mx-auto max-w-6xl px-6 relative z-10">
            <div className="grid gap-16 md:grid-cols-2">
              <div className="group relative">
                <div className="absolute -inset-4 rounded-[4rem] border-4 border-dashed border-accent/20 transition-transform group-hover:rotate-2"></div>
                <div className="relative rounded-[3.5rem] bg-white p-12 shadow-xl ring-1 ring-gray-100 transition-all duration-500 group-hover:shadow-3xl overflow-hidden">
                  <div className="mb-10 overflow-hidden rounded-[2.5rem] shadow-2xl">
                    <img src="https://image.echalk.com/site/1809/9n7F671MFJd2GhpAJ6k9wM4QJQYuKoF-RYALfimacNLqFmur0vucX1i0egZ-ksyujFM3LribmFt5Zf1_SEvvKn6is2MgmOD3dw3s7RD-d6M" alt="School Breakfast" className="w-full h-72 object-cover transition-transform duration-700 group-hover:scale-110" />
                  </div>
                  <h3 className="mb-6 text-5xl font-black text-gray-900 tracking-tighter">Breakfast</h3>
                  <p className="mb-10 text-2xl text-gray-500 leading-relaxed font-medium">Served daily starting at <span className="text-primary font-black">7:15 AM</span> until 7:40 AM.</p>
                  <div className="rounded-3xl bg-accent/10 p-8 border-2 border-dashed border-accent/30">
                    <div className="text-xs font-black uppercase tracking-widest text-accent mb-3">Important Reminder</div>
                    <p className="text-xl font-black text-primary leading-tight">Students should be in school by 7:30 AM to enjoy breakfast.</p>
                  </div>
                </div>
              </div>

              <div className="group relative">
                <div className="absolute -inset-4 rounded-[4rem] border-4 border-dashed border-primary/20 transition-transform group-hover:-rotate-2"></div>
                <div className="relative rounded-[3.5rem] bg-[#001524] p-12 text-white shadow-3xl transition-all duration-500 group-hover:shadow-primary/20 overflow-hidden">
                  <div className="absolute top-0 right-0 h-full w-1/2 bg-gradient-to-l from-primary-light/20 to-transparent pointer-events-none"></div>
                  <div className="mb-10 overflow-hidden rounded-[2.5rem] shadow-2xl">
                    <img src="https://image.echalk.com/site/1809/1CQJ8ue6dKiQcgn5PRYqfujYbi81avwK3DKt-KNsSrsMVw0kWRmExTuuyn3_E-HhmLffikHD6XIpl-VsL58Amq-3csrBmA3JIqvmPH6JKXo" alt="School Lunch" className="w-full h-72 object-cover transition-transform duration-700 group-hover:scale-110" />
                  </div>
                  <h3 className="mb-6 text-5xl font-black tracking-tighter text-white">Lunch</h3>
                  <p className="mb-10 text-2xl text-white/60 leading-relaxed font-medium">Nutritious meals for all students. Milk and fresh water provided.</p>
                  <a href="https://www.schools.nyc.gov/school-life/food/menus" target="_blank" rel="noopener noreferrer" className="group/btn inline-flex items-center gap-4 rounded-[2rem] bg-accent px-10 py-6 text-xl font-black uppercase tracking-widest text-white transition-all duration-300 hover:scale-105 active:scale-95 shadow-xl">
                    View Today's Menu
                    <svg className="h-6 w-6 transition-transform duration-300 group-hover/btn:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}><path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Guidelines Section */}
        <section className="relative overflow-hidden bg-white py-32 md:py-48">
          {/* Wavy Divider */}
          <div className="absolute top-0 left-0 w-full overflow-hidden leading-[0]">
            <svg className="relative block w-full h-[80px]" viewBox="0 0 1200 120" preserveAspectRatio="none">
              <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" fill="#fdfaf6"></path>
            </svg>
          </div>

          <div className="mx-auto max-w-5xl px-6 relative z-10 text-center">
            <h2 className="mb-16 text-6xl font-black tracking-tighter text-gray-900 md:text-8xl">Lunch from <span className="italic font-serif text-primary">Home</span></h2>
            
            <div className="relative p-12 md:p-24 rounded-[4rem] bg-warm-50 border-2 border-dashed border-accent/20 group">
              <div className="absolute -top-10 -right-10 h-40 w-40 animate-bounce-slow opacity-20 pointer-events-none">
                <svg viewBox="0 0 100 100" fill="currentColor" className="text-accent"><circle cx="50" cy="50" r="40" /></svg>
              </div>
              
              <p className="mb-16 text-3xl text-gray-500 leading-relaxed font-medium italic">
                "We welcome family-prepared meals and ask for your partnership in keeping our school safe."
              </p>
              
              <div className="grid gap-8 md:grid-cols-2 text-left">
                {[
                  "No glass jars or bottles",
                  "No soda of any kind",
                  "No candy, chocolate, or gum",
                  "No large/bulk bags of chips",
                  "Peanut-Free Zone: No nuts",
                  "Label all water bottles"
                ].map((rule, i) => (
                  <div key={i} className="flex items-center gap-6 p-6 rounded-3xl bg-white shadow-sm ring-1 ring-gray-100 transition-all duration-300 hover:translate-x-2">
                    <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-rose-50 text-rose-500">
                      <span className="text-xl font-black">✕</span>
                    </div>
                    <span className="text-xl font-black text-gray-700">{rule}</span>
                  </div>
                ))}
              </div>

              <div className="mt-20 p-10 rounded-[2.5rem] bg-[#001524] text-white shadow-2xl">
                <p className="text-2xl font-black tracking-tight leading-relaxed">
                  Reminder: <span className="text-accent italic">Chips and cookies</span> are considered a snack, not a complete lunch.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
