'use client';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <main id="main-content">
        {/* Hero Section */}
        <HeroSection />

        {/* Quick Access Row */}
        <QuickAccessSection />

        {/* About / Mission */}
        <AboutSection />

        {/* Values & Statistics */}
        <ValuesStatsSection />

        {/* Leadership Spotlights */}
        <LeadershipSection />

        {/* News & Announcements */}
        <NewsSection />

        {/* Events */}
        <EventsSection />

        {/* Community Invite */}
        <CommunityInviteSection />
      </main>

      <Footer />
    </div>
  );
}

// ============================================================================
// HERO SECTION
// ============================================================================
function HeroSection() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#001524]">
      {/* Dynamic Background Elements - More organic/flowing */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute -top-[10%] -right-[10%] h-[800px] w-[800px] animate-pulse rounded-full bg-primary-light/30 blur-[150px]"></div>
        <div className="absolute -bottom-[10%] -left-[10%] h-[800px] w-[800px] animate-pulse rounded-full bg-accent/10 blur-[150px]" style={{ animationDelay: '1.5s' }}></div>
        {/* Subtle Dolphin Silhouette in BG */}
        <div className="absolute top-1/4 left-1/4 opacity-[0.03] scale-150 rotate-12 pointer-events-none">
          <svg width="400" height="200" viewBox="0 0 400 200" fill="white">
            <path d="M10,100 Q100,20 200,100 T390,100" stroke="white" strokeWidth="2" fill="none" />
          </svg>
        </div>
      </div>

      {/* Video Background */}
      <video
        autoPlay
        muted
        loop
        playsInline
        poster="/hero-poster.jpg"
        className="absolute inset-0 h-full w-full object-cover opacity-25"
        aria-hidden="true"
        data-temp="true"
      >
        <source src="/hero-video.mp4" type="video/mp4" />
        <source src="/hero-video.webm" type="video/webm" />
      </video>

      {/* Sophisticated Warm Gradient Overlay */}
      <div className="absolute inset-0 z-1 bg-gradient-to-b from-transparent via-[#001524]/40 to-warm-50" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-5xl px-6 pt-20 pb-32 text-center md:pt-32 md:pb-40">
        <div className="mb-10 inline-flex items-center gap-3 rounded-full border border-white/20 bg-white/10 px-5 py-2 backdrop-blur-md">
          <div className="flex h-7 w-7 items-center justify-center overflow-hidden rounded-full bg-white shadow-lg ring-2 ring-white/20">
            <img 
              src="/assets/images/PS38 School Logo.jpg" 
              alt="PS 38 Logo" 
              className="h-full w-full object-cover"
            />
          </div>
          <span className="text-xs font-black uppercase tracking-[0.25em] text-white">Home of the Dolphins</span>
        </div>

        <h1 className="mb-10 text-6xl font-black leading-[1.05] tracking-tighter text-white sm:text-8xl lg:text-9xl">
          <span className="block italic font-serif text-accent drop-shadow-sm">Welcome to</span>
          PS 38 <span className="bg-gradient-to-r from-white via-white to-white/60 bg-clip-text text-transparent">Cromwell</span>
        </h1>
        
        <p className="mx-auto mb-16 max-w-2xl text-xl font-medium leading-relaxed text-white/70 md:text-3xl">
          Where every child is a star and{' '}
          <span className="relative inline-block text-white font-bold">
            Together is Better
            <svg className="absolute -bottom-2 left-0 w-full h-2 text-accent/60" viewBox="0 0 100 10" preserveAspectRatio="none">
              <path d="M0,5 Q50,10 100,5" stroke="currentColor" strokeWidth="4" fill="none" />
            </svg>
          </span>
        </p>

        <div className="flex flex-col items-center justify-center gap-6 sm:flex-row">
          <button className="group relative inline-flex min-w-[220px] items-center justify-center gap-3 overflow-hidden rounded-3xl bg-accent px-10 py-6 text-lg font-black uppercase tracking-widest text-white shadow-2xl transition-all duration-300 hover:scale-105 active:scale-95">
            <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
            Enroll Now
            <svg className="h-6 w-6 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}><path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
          </button>
          <button className="inline-flex min-w-[220px] items-center justify-center gap-2 rounded-3xl border-2 border-white/30 bg-white/5 px-10 py-6 text-lg font-black uppercase tracking-widest text-white backdrop-blur-md transition-all duration-300 hover:bg-white hover:text-primary">
            Explore More
          </button>
        </div>
      </div>

      {/* Wavy Section Divider */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0] transform rotate-180">
        <svg className="relative block w-full h-[100px]" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" fill="#fdfaf6"></path>
        </svg>
        </div>

      <style jsx>{`
        @keyframes scroll-down {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(200%); }
        }
      `}</style>
    </section>
  );
}

// ============================================================================
// QUICK ACCESS SECTION
// ============================================================================
function QuickAccessSection() {
  const quickLinks = [
    { name: 'Calendar', icon: CalendarIcon, href: '/events', color: 'bg-orange-500' },
    { name: 'ClassDojo', icon: BookIcon, href: 'https://drive.google.com/file/d/17jcO1J0gkSZUl79HtSZyvIi2roGf2rX4/view', color: 'bg-emerald-500' },
    { name: 'Lunch Menu', icon: FoodIcon, href: '/menu', color: 'bg-sky-500' },
    { name: 'Supply Lists', icon: ListIcon, href: '#supply-lists', color: 'bg-purple-500' },
    { name: 'Tech Support', icon: PhoneIcon, href: 'http://schools.nyc.gov/techsupport', color: 'bg-indigo-500' },
    { name: 'Contact Us', icon: MailIcon, href: '#contact', color: 'bg-rose-500' },
  ];

  return (
    <section className="relative z-20 bg-warm-50 py-16">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-wrap items-center justify-center gap-6">
          {quickLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              target={link.href.startsWith('http') ? '_blank' : undefined}
              rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              className="group flex flex-col items-center gap-4 transition-all duration-300 hover:-translate-y-2"
            >
              <div className={`flex h-20 w-20 items-center justify-center rounded-[2rem] ${link.color} text-white shadow-xl transition-all duration-500 group-hover:rotate-12 group-hover:rounded-2xl group-hover:shadow-2xl`}>
                <link.icon className="h-8 w-8" />
              </div>
              <span className="text-sm font-black uppercase tracking-wider text-gray-600 group-hover:text-primary transition-colors">{link.name}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

// ============================================================================
// ABOUT SECTION
// ============================================================================
function AboutSection() {
  return (
    <section id="about" className="relative overflow-hidden bg-warm-50 py-32 md:py-48">
      {/* Playful Background Motifs */}
      <div className="absolute top-20 right-10 opacity-[0.05] pointer-events-none">
        <svg width="200" height="200" viewBox="0 0 100 100" fill="currentColor" className="text-primary">
          <circle cx="50" cy="50" r="40" stroke="currentColor" strokeWidth="2" fill="none" strokeDasharray="5,5" />
        </svg>
      </div>

      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-20 md:grid-cols-2 md:items-center lg:gap-32">
          {/* Image with Schoolish Frame */}
          <div className="relative order-2 md:order-1">
            <div className="absolute -inset-4 rounded-[3rem] border-4 border-dashed border-accent/20"></div>
            <div className="relative group aspect-[4/5] overflow-hidden rounded-[2.5rem] bg-gray-100 shadow-2xl transition-all duration-700 hover:rotate-1">
              <img
                src="/placeholder-school.jpg"
                alt="PS 38 school community"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/40 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"></div>
            </div>
            {/* Playful Floating Badge */}
            <div className="absolute -right-10 -bottom-10 h-40 w-40 animate-bounce-slow">
              <div className="flex h-full w-full items-center justify-center rounded-full bg-accent p-4 text-center text-white shadow-2xl ring-8 ring-warm-50">
                <div>
                  <div className="text-3xl font-black tracking-tighter">PreK-5</div>
                  <div className="text-[10px] font-bold uppercase tracking-widest leading-tight">Grade Levels</div>
                </div>
              </div>
            </div>
          </div>

          {/* Text */}
          <div className="order-1 md:order-2">
            <div className="mb-8 inline-flex items-center gap-2 rounded-full bg-accent/10 px-5 py-2 text-xs font-black uppercase tracking-[0.2em] text-accent">
              Our Mission
            </div>
            <h2 className="mb-10 text-6xl font-black leading-[1] tracking-tighter text-gray-900 md:text-7xl lg:text-8xl">
              Welcome to <br />
              <span className="relative inline-block text-primary">
                PS 38 Cromwell
                <svg className="absolute -bottom-4 left-0 w-full h-4 text-accent/30" viewBox="0 0 100 20" preserveAspectRatio="none">
                  <path d="M0,10 Q50,20 100,10 T200,10" stroke="currentColor" strokeWidth="4" fill="none" />
                </svg>
              </span>
            </h2>
            <div className="space-y-8 text-xl leading-relaxed text-gray-600">
              <p className="font-medium">
              At PS 38, we believe in the power of working together – because{' '}
                <span className="relative inline-block px-2">
                  <span className="relative z-10 text-primary font-black italic">Together is Better</span>
                  <span className="absolute inset-0 bg-accent/20 -rotate-1 rounded-sm"></span>
                </span>
                .
              </p>
              <p>
              Our dedicated teachers and staff focus on building strong academic
              foundations while also emphasizing kindness, collaboration, and
              student voice. We serve students from PreK through 5th grade,
              creating a nurturing community for young learners to grow.
            </p>
              </div>
            <div className="mt-16">
              <button className="group inline-flex items-center gap-4 text-2xl font-black text-primary transition-all duration-300 hover:gap-6">
                Discover our values
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-white shadow-lg transition-transform group-hover:rotate-12 group-hover:scale-110">
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ============================================================================
// VALUES & STATS SECTION
// ============================================================================
function ValuesStatsSection() {
  const values = [
    {
      icon: HeartIcon,
      title: 'Community',
      description: 'We foster a warm, inclusive environment where every family feels welcome and valued.',
      color: 'text-rose-500',
      bg: 'bg-rose-50'
    },
    {
      icon: BookIcon,
      title: 'Excellence',
      description: 'Our dedicated educators are committed to academic excellence and lifelong learning.',
      color: 'text-sky-500',
      bg: 'bg-sky-50'
    },
    {
      icon: HandshakeIcon,
      title: 'Collaboration',
      description: 'Together is better – we partner with families to support student success.',
      color: 'text-emerald-500',
      bg: 'bg-emerald-50'
    },
  ];

  return (
    <section className="relative overflow-hidden bg-white py-32 md:py-48">
      {/* Decorative Wavy Background */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-[0]">
        <svg className="relative block w-full h-[80px]" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" fill="#fdfaf6"></path>
        </svg>
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-6">
        <div className="mb-24 text-center">
          <h2 className="mb-6 text-6xl font-black leading-tight tracking-tighter text-gray-900 md:text-8xl">
            Our <span className="italic font-serif text-accent">Values</span>
          </h2>
          <p className="mx-auto max-w-2xl text-xl leading-relaxed text-gray-500 md:text-2xl">
            What makes PS 38 a special place to learn and grow for every student
          </p>
        </div>

        <div className="grid gap-10 md:grid-cols-3">
          {values.map((value) => (
            <div
              key={value.title}
              className="group relative rounded-[3rem] border-2 border-dashed border-gray-100 bg-warm-50 p-12 transition-all duration-500 hover:-translate-y-2 hover:border-primary/20 hover:bg-white hover:shadow-3xl"
            >
              <div className={`mb-10 flex h-20 w-20 items-center justify-center rounded-[2rem] ${value.bg} ${value.color} transition-all duration-500 group-hover:rotate-6 group-hover:rounded-2xl`}>
                <value.icon size={36} />
              </div>
              <h3 className="mb-6 text-3xl font-black leading-tight text-gray-900">
                  {value.title}
                </h3>
              <p className="text-xl leading-relaxed text-gray-500">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ============================================================================
// LEADERSHIP SECTION
// ============================================================================
function LeadershipSection() {
  const leaders = [
    {
      name: 'Dr. Jason Cotto',
      role: 'Principal',
      image: 'https://image.echalk.com/site/1809/0wHKVNRJNE76NI_EAqCnlextdOw12FUMFngUF-FcEu0GSDXhJFTIl4FtoEZgviqIrgsEyBXS6Gpn_yhYOIboh1by1LY_OvAMCj6D3554_zw',
      email: 'jcotto@schools.nyc.gov',
    },
    {
      name: 'Mrs. Mary Frisz',
      role: 'Assistant Principal',
      image: 'https://image.echalk.com/site/1809/XM6r_kbUXTrDHB2JTypHLowHoDer8wdCpnc4oE1dA7v2EblXi2kZRgMA3li2sXiQMo79n9AOWNZmGhDmA39IWcHiM48CtWrB9F-759glix4',
      email: null,
    },
  ];

  return (
    <section id="leadership" className="relative overflow-hidden bg-warm-50 py-32 md:py-48">
      {/* Wavy Section Divider (Top) */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-[0]">
        <svg className="relative block w-full h-[80px]" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" fill="#ffffff"></path>
        </svg>
      </div>

      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-24 text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-primary/5 px-5 py-2 text-xs font-black uppercase tracking-[0.2em] text-primary">
            Our Team
          </div>
          <h2 className="mb-6 text-6xl font-black leading-tight tracking-tighter text-gray-900 md:text-8xl">
            School <span className="italic font-serif text-accent">Leadership</span>
          </h2>
          <p className="mx-auto max-w-2xl text-xl leading-relaxed text-gray-500">
            Meet the dedicated educators guiding our school community with passion and excellence
          </p>
        </div>

        <div className="grid gap-20 md:grid-cols-2">
          {leaders.map((leader) => (
            <div
              key={leader.name}
              className="group flex flex-col items-center text-center"
            >
              <div className="relative mb-10 h-96 w-72 flex-shrink-0">
                <div className="absolute -inset-4 rounded-[3rem] border-4 border-dashed border-accent/20 transition-transform group-hover:rotate-3"></div>
                <div className="relative h-full w-full overflow-hidden rounded-[2.5rem] bg-gray-100 shadow-2xl transition-all duration-500 group-hover:-translate-y-2">
                  <img
                    src={leader.image}
                    alt={`${leader.name}, ${leader.role}`}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent"></div>
                </div>
              </div>
              <div className="flex flex-col items-center justify-center min-w-0">
                <h3 className="mb-3 text-4xl font-black leading-tight text-gray-900 break-words">
                  {leader.name}
                </h3>
                <p className="mb-8 text-sm font-black uppercase tracking-[0.3em] text-accent">
                  {leader.role}
                </p>
                {leader.email && (
                  <a
                    href={`mailto:${leader.email}`}
                    className="group/email inline-flex items-center gap-4 text-lg font-bold text-gray-400 transition-all duration-300 hover:text-primary"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-[1.25rem] bg-white shadow-sm ring-1 ring-gray-100 transition-all duration-300 group-hover/email:bg-primary group-hover/email:text-white group-hover/email:rotate-12">
                      <MailIcon size={20} />
                    </div>
                    <span className="truncate">{leader.email}</span>
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* School Leadership Team - Warmer Banner */}
        <div className="mt-32 relative overflow-hidden rounded-[3.5rem] bg-[#001524] p-12 text-white shadow-3xl md:p-24">
          <div className="absolute top-0 right-0 h-full w-1/2 bg-gradient-to-l from-primary-light/20 to-transparent pointer-events-none"></div>
          <div className="relative z-10 grid gap-16 md:grid-cols-2 md:items-center">
            <div>
              <h3 className="mb-8 text-5xl font-black leading-tight tracking-tight md:text-6xl">
                School <br />
                <span className="italic font-serif text-accent">Leadership</span> Team
          </h3>
              <p className="text-xl leading-relaxed text-white/60">
            Our School Leadership Team (SLT) serves as a voice and choice for
            our children, families, and the school community. We meet monthly
            to share school data and celebrate achievements.
          </p>
            </div>
            <div className="flex flex-col items-center justify-center rounded-[2.5rem] bg-white/5 p-12 text-center backdrop-blur-md ring-1 ring-white/10">
              <div className="mb-8 text-xs font-black uppercase tracking-[0.3em] text-accent">Get Involved</div>
              <p className="mb-10 text-xl text-white/80">Interested in joining? <br />Contact us today.</p>
            <a
              href="tel:718-351-1225"
                className="group inline-flex items-center gap-4 rounded-2xl bg-white px-10 py-5 text-xl font-black text-primary transition-all duration-300 hover:bg-accent hover:text-white hover:scale-105"
            >
              (718) 351-1225
                <svg className="h-6 w-6 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
            </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ============================================================================
// NEWS SECTION
// ============================================================================
function NewsSection() {
  const newsItems = [
    {
      title: "Welcome Back to School - Principal's Message",
      date: 'September 4, 2025',
      excerpt:
        "Welcome back to a brand new school year at P.S. 38 – The Home of the Dolphins! Whether you are returning or new to our school community, we are so happy to welcome you to the 2025–2026 school year.",
      link: '#principals-corner',
    },
    {
      title: 'Daily School Attendance: Every Day Counts',
      date: 'September 2025',
      excerpt:
        'Consistent attendance is one of the most important factors in a student\'s ability to learn, grow, and thrive in school. Regular attendance builds essential skills and important relationships.',
      link: '#attendance',
    },
    {
      title: 'Important School Information for 2025-2026',
      date: 'September 2025',
      excerpt:
        'Remember that our school day starts at 7:45 am. Children who arrive later than 7:55 will be marked late. Drop-off and pickup information varies by grade level.',
      link: '#important-info',
    },
  ];

  return (
    <section id="news" className="relative overflow-hidden bg-white py-32 md:py-48">
      {/* Playful Dot Pattern */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, #00223a 1px, transparent 0)', backgroundSize: '32px 32px' }}></div>

      <div className="relative z-10 mx-auto max-w-6xl px-6">
        <div className="mb-24 flex flex-col items-start justify-between gap-12 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-accent/10 px-5 py-2 text-xs font-black uppercase tracking-[0.2em] text-accent">
              Updates
            </div>
            <h2 className="mb-6 text-6xl font-black leading-tight tracking-tighter text-gray-900 md:text-8xl">
              Latest <span className="italic font-serif text-primary">News</span>
            </h2>
            <p className="text-xl leading-relaxed text-gray-500">
              Stay informed with the latest stories and updates from our school
            </p>
          </div>
          <a
            href="#all-news"
            className="group flex items-center gap-4 text-2xl font-black text-primary transition-all duration-300 hover:gap-6 hover:text-accent"
          >
            View all posts
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/5 transition-colors group-hover:bg-accent group-hover:text-white">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}><path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
            </div>
          </a>
        </div>

        {newsItems.length > 0 ? (
          <div className="grid gap-10 md:grid-cols-3">
            {newsItems.map((item, index) => (
              <article
                key={index}
                className="group flex flex-col rounded-[3.5rem] border-2 border-dashed border-gray-100 bg-warm-50 p-12 transition-all duration-500 hover:-translate-y-2 hover:border-primary/20 hover:bg-white hover:shadow-3xl"
              >
                <time className="mb-8 block text-xs font-black uppercase tracking-[0.3em] text-primary/40">
                  {item.date}
                </time>
                <h3 className="mb-6 text-3xl font-black leading-tight text-gray-900 transition-colors duration-300 group-hover:text-primary">
                  {item.title}
                </h3>
                <p className="mb-12 line-clamp-3 flex-grow text-xl leading-relaxed text-gray-500">
                  {item.excerpt}
                </p>
                <a
                  href={item.link}
                  className="inline-flex items-center gap-3 text-lg font-black text-primary transition-all duration-300 hover:gap-5 hover:text-accent"
                >
                  Read full story
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
                </a>
              </article>
            ))}
          </div>
        ) : (
          <EmptyState
            icon={BookIcon}
            message="No announcements at this time. Check back soon!"
          />
        )}
      </div>
    </section>
  );
}

function EventsSection() {
  const events = [
    {
      date: 'Sep 25',
      title: 'School Leadership Team Meeting',
      time: '2:30 PM',
      location: 'Main Office',
    },
  ];

  return (
    <section id="events" className="relative overflow-hidden bg-warm-50 py-32 md:py-48">
      {/* Wavy Section Divider (Top) */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-[0]">
        <svg className="relative block w-full h-[80px]" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" fill="#ffffff"></path>
        </svg>
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-6">
        <div className="mb-24 flex flex-col items-start justify-between gap-12 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-accent/10 px-5 py-2 text-xs font-black uppercase tracking-[0.2em] text-accent">
              Calendar
            </div>
            <h2 className="mb-6 text-6xl font-black leading-tight tracking-tighter text-gray-900 md:text-8xl">
              Upcoming <span className="italic font-serif text-primary">Events</span>
            </h2>
            <p className="text-xl leading-relaxed text-gray-500">
              Mark your calendar for these important school community dates
            </p>
          </div>
          <a
            href="https://echalk-slate-prod.s3.amazonaws.com/private/schools/1808/resources/88fc60d6-8a26-40cb-b9bd-b7875aed877f"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-4 text-2xl font-black text-primary transition-all duration-300 hover:gap-6 hover:text-accent"
          >
            Full calendar
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/5 transition-colors group-hover:bg-accent group-hover:text-white">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}><path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
            </div>
          </a>
        </div>

        {events.length > 0 ? (
          <div className="space-y-8">
            {events.map((event, index) => (
              <div
                key={index}
                className="group flex flex-col items-stretch gap-10 rounded-[3.5rem] border-2 border-dashed border-gray-200 bg-white p-10 transition-all duration-500 hover:border-primary/20 hover:shadow-3xl md:flex-row md:items-center"
              >
                <div className="flex h-40 w-40 flex-shrink-0 flex-col items-center justify-center rounded-[2.5rem] bg-primary text-white shadow-2xl transition-all duration-500 group-hover:rotate-3 group-hover:scale-105">
                  <span className="text-sm font-black uppercase tracking-[0.3em] text-white/40">
                    {event.date.split(' ')[0]}
                  </span>
                  <span className="text-6xl font-black tracking-tighter">
                    {event.date.split(' ')[1]}
                  </span>
                </div>
                <div className="flex-grow">
                  <h3 className="mb-6 text-4xl font-black leading-tight text-gray-900 group-hover:text-primary transition-colors">
                    {event.title}
                  </h3>
                  <div className="flex flex-wrap gap-10 text-lg font-bold text-gray-400">
                    <span className="flex items-center gap-4">
                      <div className="flex h-10 w-10 items-center justify-center rounded-[1.25rem] bg-warm-50 text-primary shadow-sm ring-1 ring-gray-100">
                        <ClockIcon size={20} />
                      </div>
                      {event.time}
                    </span>
                    <span className="flex items-center gap-4">
                      <div className="flex h-10 w-10 items-center justify-center rounded-[1.25rem] bg-warm-50 text-primary shadow-sm ring-1 ring-gray-100">
                        <MapPinIcon size={20} />
                      </div>
                      {event.location}
                    </span>
                  </div>
                </div>
                <button className="rounded-2xl border-2 border-primary/10 px-8 py-4 text-lg font-black text-primary transition-all duration-300 hover:border-primary hover:bg-primary hover:text-white hover:-rotate-2">
                  Add to Calendar
                </button>
              </div>
            ))}
          </div>
        ) : (
          <EmptyState
            icon={CalendarIcon}
            message="No upcoming events scheduled. View the full calendar."
            ctaText="View Calendar"
            ctaHref="https://echalk-slate-prod.s3.amazonaws.com/private/schools/1808/resources/88fc60d6-8a26-40cb-b9bd-b7875aed877f"
          />
        )}

        {/* Important Times */}
        <div className="mt-32 grid gap-10 md:grid-cols-3">
          {[
            { label: 'School Starts', time: '7:45 AM', sub: 'Late after 7:55 AM', color: 'text-primary' },
            { label: 'Breakfast Starts', time: '7:15 AM', sub: 'Free for all students', color: 'text-accent' },
            { label: 'Dismissal', time: '1:55 PM', sub: 'Varies by grade level', color: 'text-primary-light' },
          ].map((item, i) => (
            <div
              key={i}
              className="group relative overflow-hidden rounded-[3.5rem] bg-white p-16 text-center shadow-sm ring-1 ring-gray-100 transition-all duration-500 hover:-translate-y-2 hover:shadow-3xl"
            >
              <div className="absolute top-0 left-0 h-2 w-full bg-gradient-to-r from-transparent via-primary/10 to-transparent"></div>
              <div className="mb-6 text-[10px] font-black uppercase tracking-[0.4em] text-gray-400">{item.label}</div>
              <div className={`mb-6 text-6xl font-black tracking-tighter ${item.color}`}>
                {item.time}
            </div>
              <div className="text-sm font-bold uppercase tracking-widest text-gray-400">{item.sub}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ============================================================================
// COMMUNITY INVITE SECTION
// ============================================================================
function CommunityInviteSection() {
  return (
    <section className="relative overflow-hidden bg-[#001524] py-32 md:py-48 text-white">
      {/* Playful Wave Divider (Top) */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-[0]">
        <svg className="relative block w-full h-[80px]" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" fill="#fdfaf6"></path>
        </svg>
      </div>

      <div className="absolute inset-0 z-0 opacity-30">
        <div className="absolute -top-[20%] -right-[10%] h-[800px] w-[800px] rounded-full bg-accent/20 blur-[150px] animate-pulse"></div>
        <div className="absolute -bottom-[20%] -left-[10%] h-[800px] w-[800px] rounded-full bg-primary-light/30 blur-[150px]"></div>
      </div>

      <div className="relative z-10 mx-auto max-w-5xl px-6 text-center">
        <div className="mb-10 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-6 py-2.5 backdrop-blur-md">
          <span className="text-xs font-black uppercase tracking-[0.3em] text-accent">Join Our Family</span>
        </div>
        
        <h2 className="mb-12 text-6xl font-black leading-[1.05] tracking-tighter sm:text-8xl lg:text-9xl">
          <span className="block italic font-serif text-accent drop-shadow-sm mb-4">You belong</span>
          here at <span className="bg-gradient-to-r from-white via-white to-white/60 bg-clip-text text-transparent">PS 38</span>
        </h2>
        
        <p className="mx-auto mb-20 max-w-2xl text-2xl font-medium leading-relaxed text-white/70 md:text-4xl">
          Join our vibrant community where every Dolphin thrives and <br />
          <span className="italic text-white">futures are built together.</span>
        </p>

        <div className="flex flex-col items-center justify-center gap-8 sm:flex-row">
          <button className="group relative inline-flex min-w-[260px] items-center justify-center gap-4 overflow-hidden rounded-[2.5rem] bg-white px-12 py-7 text-xl font-black uppercase tracking-widest text-primary shadow-2xl transition-all duration-300 hover:scale-105">
            Schedule a Visit
            <svg className="h-6 w-6 transition-transform duration-300 group-hover:rotate-12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </button>
          <button className="group inline-flex min-w-[260px] items-center justify-center gap-4 rounded-[2.5rem] border-2 border-white/30 bg-white/5 px-12 py-7 text-xl font-black uppercase tracking-widest text-white backdrop-blur-md transition-all duration-300 hover:bg-white hover:text-primary hover:scale-105">
            Enroll Now
            <svg className="h-6 w-6 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}

// ============================================================================
// HELPER COMPONENTS
// ============================================================================
function EmptyState({ icon: Icon, message, ctaText, ctaHref }) {
  return (
    <div className="flex flex-col items-center justify-center rounded-2xl border-2 border-dashed border-gray-200 bg-neutral-50 px-8 py-20 text-center">
      <Icon className="mb-5 text-gray-400" size={48} />
      <p className="mb-6 text-base leading-relaxed text-gray-600">{message}</p>
      {ctaText && ctaHref && (
        <a
          href={ctaHref}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full border-2 border-primary bg-white px-6 py-2.5 text-sm font-semibold text-primary transition-all duration-200 ease-out hover:bg-primary hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
        >
          {ctaText}
          <svg
            className="h-4 w-4 transition-transform duration-200"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13 7l5 5m0 0l-5 5m5-5H6"
            />
          </svg>
        </a>
      )}
    </div>
  );
}

// ============================================================================
// ICON COMPONENTS (Inline SVG, No External Dependencies)
// ============================================================================
function CalendarIcon({ size = 20, className = '' }) {
  return (
    <svg
      className={className || 'h-5 w-5 text-primary'}
      width={size}
      height={size}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={1.5}
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
      />
    </svg>
  );
}

function BookIcon({ size = 20, className = '' }) {
  return (
    <svg
      className={className || 'h-5 w-5 text-primary'}
      width={size}
      height={size}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={1.5}
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
      />
    </svg>
  );
}

function FoodIcon({ size = 20, className = '' }) {
  return (
    <svg
      className={className || 'h-5 w-5 text-primary'}
      width={size}
      height={size}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={1.5}
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
      />
    </svg>
  );
}

function ListIcon({ size = 20, className = '' }) {
  return (
    <svg
      className={className || 'h-5 w-5 text-primary'}
      width={size}
      height={size}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={1.5}
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
      />
    </svg>
  );
}

function PhoneIcon({ size = 20, className = '' }) {
  return (
    <svg
      className={className || 'h-5 w-5 text-primary'}
      width={size}
      height={size}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={1.5}
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
      />
    </svg>
  );
}

function MailIcon({ size = 20, className = '' }) {
  return (
    <svg
      className={className || 'h-5 w-5 text-primary'}
      width={size}
      height={size}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={1.5}
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
      />
    </svg>
  );
}

function MapPinIcon({ size = 20, className = '' }) {
  return (
    <svg
      className={className || 'h-5 w-5 text-primary'}
      width={size}
      height={size}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={1.5}
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
      />
    </svg>
  );
}

function HeartIcon({ size = 20, className = '' }) {
  return (
    <svg
      className={className || 'h-5 w-5 text-primary'}
      width={size}
      height={size}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={1.5}
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
      />
    </svg>
  );
}

function HandshakeIcon({ size = 20, className = '' }) {
  return (
    <svg
      className={className || 'h-5 w-5 text-primary'}
      width={size}
      height={size}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={1.5}
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M7 11.5V14m0-2.5v-6a1.5 1.5 0 113 0m-3 6a1.5 1.5 0 00-3 0v2a7.5 7.5 0 0015 0v-5a1.5 1.5 0 00-3 0m-6-3V11m0-5.5v-1a1.5 1.5 0 013 0v1m0 0V11m0-5.5a1.5 1.5 0 013 0v3m0 0V11"
      />
    </svg>
  );
}

function ClockIcon({ size = 16, className = '' }) {
  return (
    <svg
      className={className || 'h-4 w-4'}
      width={size}
      height={size}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={1.5}
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    </svg>
  );
}
