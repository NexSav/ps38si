'use client';

import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

const disciplineCodeLinks = [
  { lang: 'English', href: 'https://echalk-slate-prod.s3.amazonaws.com/private/schools/1808/resources/e3b80ba9-677d-44a0-85c7-1493ecb671f9?AWSAccessKeyId=AKIAJSZKIBPXGFLSZTYQ&Expires=1951841461&response-cache-control=private%2C%20max-age%3D31536000&response-content-disposition=%3Bfilename%3D%22discipline-code-kindergarten-grade-5-English.pdf%22&response-content-type=application%2Fpdf&Signature=PWjc1XiGK4aH30%2FN4grOut1i0zM%3D' },
  { lang: 'Spanish', href: 'https://echalk-slate-prod.s3.amazonaws.com/private/schools/1808/resources/e7858a65-8cff-440a-8778-0f5e76c7bc7a?AWSAccessKeyId=AKIAJSZKIBPXGFLSZTYQ&Expires=1951841461&response-cache-control=private%2C%20max-age%3D31536000&response-content-disposition=%3Bfilename%3D%22discipline-code-kindergarten-grade-5-Spanish.pdf%22&response-content-type=application%2Fpdf&Signature=tdmbRR6o0oGt0%2FazqnIbJgJz8Bk%3D' },
  { lang: 'Chinese', href: 'https://echalk-slate-prod.s3.amazonaws.com/private/schools/1808/resources/e9b9a2c3-5782-4a59-9990-f048ab337553?AWSAccessKeyId=AKIAJSZKIBPXGFLSZTYQ&Expires=1951841461&response-cache-control=private%2C%20max-age%3D31536000&response-content-disposition=%3Bfilename%3D%22discipline-code-kindergarten-grade-5-Chinese.pdf%22&response-content-type=application%2Fpdf&Signature=FuZj3O6pytEZxIvDE3VkkDJ3P%2BI%3D' },
  { lang: 'Russian', href: 'https://echalk-slate-prod.s3.amazonaws.com/private/schools/1808/resources/d6b3d2b1-9d4c-4364-b69a-664ad3d77b6d?AWSAccessKeyId=AKIAJSZKIBPXGFLSZTYQ&Expires=1951841461&response-cache-control=private%2C%20max-age%3D31536000&response-content-disposition=%3Bfilename%3D%22discipline-code-kindergarten-grade-5-Russian.pdf%22&response-content-type=application%2Fpdf&Signature=aIwha%2BN02A%2BcPwv%2B3vVNBnfiDpE%3D' },
  { lang: 'Arabic', href: 'https://echalk-slate-prod.s3.amazonaws.com/private/schools/1808/resources/ae6b4e53-d99b-4b57-9a5e-958ac308499a?AWSAccessKeyId=AKIAJSZKIBPXGFLSZTYQ&Expires=1951841461&response-cache-control=private%2C%20max-age%3D31536000&response-content-disposition=%3Bfilename%3D%22discipline-code-kindergarten-grade-5-Arabic.pdf%22&response-content-type=application%2Fpdf&Signature=S3a3pb7danqfv6QKSo7J4tlOGJo%3D' },
  { lang: 'Korean', href: 'https://echalk-slate-prod.s3.amazonaws.com/private/schools/1808/resources/dee7d174-baf3-4988-8e6f-6b813f105f23?AWSAccessKeyId=AKIAJSZKIBPXGFLSZTYQ&Expires=1951841461&response-cache-control=private%2C%20max-age%3D31536000&response-content-disposition=%3Bfilename%3D%22discipline-code-kindergarten-grade-5-Korean.pdf%22&response-content-type=application%2Fpdf&Signature=vjNLUnFSIQZ18fygmzBy302vcy8%3D' },
];

export default function PoliciesPage() {
  return (
    <div className="min-h-screen bg-warm-50">
      <Navbar />

      <main id="main-content">
        {/* Hero Section */}
        <section className="relative flex min-h-[50vh] items-center justify-center overflow-hidden bg-[#001524] pt-20 pb-32">
          <div className="absolute inset-0 z-0 overflow-hidden">
            <div className="absolute -top-[10%] -left-[10%] h-[600px] w-[600px] animate-pulse rounded-full bg-primary-light/20 blur-[120px]"></div>
            <div className="absolute -bottom-[10%] -right-[10%] h-[600px] w-[600px] animate-pulse rounded-full bg-accent/5 blur-[120px]" style={{ animationDelay: '1s' }}></div>
          </div>
          
          <div className="absolute inset-0 z-1 bg-gradient-to-b from-transparent via-[#001524]/50 to-[#001524]" />

          <div className="relative z-10 mx-auto max-w-5xl px-6 py-20 text-center">
            <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-5 py-2 backdrop-blur-md">
              <div className="flex h-6 w-6 items-center justify-center overflow-hidden rounded-full bg-white">
                <img src="/assets/images/PS38 School Logo.jpg" alt="PS 38 Logo" className="h-full w-full object-cover" />
              </div>
              <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-accent">School Guidelines</span>
            </div>
            <h1 className="mb-6 text-6xl font-black leading-tight tracking-tighter text-white sm:text-8xl lg:text-9xl">
              <span className="block italic font-serif text-accent drop-shadow-sm mb-4 text-4xl sm:text-5xl lg:text-6xl">Rules &</span>
              School <span className="bg-gradient-to-r from-white via-white to-white/60 bg-clip-text text-transparent">Policies</span>
            </h1>
            <p className="mx-auto max-w-2xl text-xl font-medium leading-relaxed text-white/60 md:text-3xl">
              Standards ensuring a safe, respectful, and productive learning environment.
            </p>
          </div>

          {/* Wavy Section Divider */}
          <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0] transform rotate-180">
            <svg className="relative block w-full h-[80px]" viewBox="0 0 1200 120" preserveAspectRatio="none">
              <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" fill="#fdfaf6"></path>
            </svg>
          </div>
        </section>

        {/* Content Section */}
        <section className="bg-warm-50 py-32 md:py-48">
          <div className="mx-auto max-w-5xl px-6">
            
            {/* Cell Phone Policy */}
            <div className="mb-48 group">
              <div className="mb-8 inline-flex items-center gap-2 rounded-full bg-accent/10 px-5 py-2 text-xs font-black uppercase tracking-wider text-accent">
                Updated for 2025-2026
              </div>
              <h2 className="mb-12 text-6xl font-black tracking-tighter text-gray-900 md:text-8xl transition-all duration-500 group-hover:translate-x-2">
                Cell Phone <span className="italic font-serif text-primary">Policy</span>
              </h2>
              
              <div className="relative rounded-[3.5rem] bg-white p-12 md:p-20 shadow-xl ring-1 ring-gray-100 overflow-hidden group-hover:shadow-3xl transition-all duration-500">
                <div className="absolute top-0 right-0 h-full w-1 bg-accent/40"></div>
                <div className="prose prose-2xl max-w-none text-gray-600 font-medium">
                  <p className="mb-8 text-2xl leading-relaxed">
                    Effective August 1, 2025, all New York State schools are required to adopt a policy that prohibits the use of personal internet-enabled devices during the school day.
                  </p>
                  <p className="mb-12 text-xl leading-relaxed opacity-80">
                    This includes smartphones, smartwatches, laptops, tablets, and portable entertainment systems. Our goal is to minimize distractions and ensure the safety and focus of every student.
                  </p>
                  <a 
                    href="https://docs.google.com/document/d/1pRCIAusnUAWQHuAcdA0DMJdEs00HA8OZ/edit?usp=sharing" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-4 rounded-[2rem] bg-accent px-10 py-6 text-xl font-black uppercase tracking-widest text-white shadow-2xl transition-all duration-300 hover:scale-105 active:scale-95"
                  >
                    Read Full Notice
                    <svg className="h-6 w-6 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}><path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Discipline Code */}
            <div className="relative rounded-[4rem] bg-[#001524] p-12 md:p-24 text-white shadow-3xl overflow-hidden group">
              <div className="absolute top-0 right-0 h-full w-1/2 bg-gradient-to-l from-primary-light/20 to-transparent pointer-events-none"></div>
              
              <div className="relative z-10 text-center md:text-left">
                <h2 className="mb-8 text-6xl font-black leading-tight tracking-tighter md:text-8xl transition-all duration-500 group-hover:translate-x-2">
                  NYC <span className="italic font-serif text-accent">Discipline</span> Code
                </h2>
                <p className="mb-16 text-2xl text-white/60 font-medium max-w-2xl">
                  Access official New York City Department of Education guidelines in multiple languages.
                </p>

                <div className="mb-16">
                  <a 
                    href="https://echalk-slate-prod.s3.amazonaws.com/private/schools/1808/resources/4cc04e25-b4e5-44c1-b333-bc21a1fcf258?AWSAccessKeyId=AKIAJSZKIBPXGFLSZTYQ&Expires=1951841461&Signature=Tm%2FAth3l9dtok1htARsx4amUFgQ%3D" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-4 rounded-2xl bg-white px-10 py-5 text-xl font-black uppercase tracking-widest text-primary transition-all duration-300 hover:bg-accent hover:text-white hover:scale-105"
                  >
                    Parent Letter (PDF)
                    <svg className="h-6 w-6 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}><path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a2 2 0 002 2h12a2 2 0 002-2v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
                  </a>
                </div>
                
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {disciplineCodeLinks.map((link) => (
                    <a 
                      key={link.lang} 
                      href={link.href}
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="group flex items-center justify-between rounded-2xl bg-white/5 p-8 transition-all duration-300 hover:bg-white/10 ring-1 ring-white/10 hover:ring-accent/40"
                    >
                      <span className="text-xl font-black text-white/90">{link.lang}</span>
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-accent text-white opacity-0 transition-all duration-300 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 group-hover:rotate-12">
                        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}><path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" /></svg>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
