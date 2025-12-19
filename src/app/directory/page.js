'use client';

import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

const faculty = [
  { name: 'Christine Agnello', role: 'Secretary', category: 'Staff' },
  { name: 'Ermina Avdiu', role: 'Teacher', category: 'Teacher' },
  { name: 'Kimberly Bottalico', role: 'Parent Coordinator', category: 'Staff' },
  { name: 'Helen DeBiase', role: 'Teacher', category: 'Teacher' },
  { name: 'Matthew DeTiberiis', role: 'Teacher', category: 'Teacher' },
  { name: 'Rachel Divirgillo', role: 'Guidance Counselor', category: 'Staff' },
  { name: 'Amy Federico', role: 'Teacher', category: 'Teacher' },
  { name: 'Derya Figaro', role: 'Teacher', category: 'Teacher' },
  { name: 'Mary Frisz', role: 'Assistant Principal', category: 'Administrator' },
  { name: 'Amirah Girgis', role: 'Teacher', category: 'Teacher' },
  { name: 'Leidona Gjoni', role: 'Teacher', category: 'Teacher' },
  { name: 'Maureen Hurley', role: 'Teacher', category: 'Teacher' },
  { name: 'Lisa Jichetti', role: 'Teacher', category: 'Teacher' },
  { name: 'Jerry Kane', role: 'Teacher', category: 'Teacher' },
  { name: 'Danielle Kotas', role: 'Teacher', category: 'Teacher' },
  { name: 'Angela Liotta', role: 'Teacher', category: 'Teacher' },
  { name: 'Skylar Mattarella', role: 'Teacher', category: 'Teacher' },
  { name: 'Delta McKeon', role: 'Teacher', category: 'Teacher' },
  { name: 'Phyllis McMahon', role: 'Teacher', category: 'Teacher' },
  { name: 'Linda Mooney', role: 'Nurse', category: 'Staff' },
  { name: 'Gina Moore', role: 'Social Worker', category: 'Staff' },
  { name: 'Meaghan Mulea', role: 'Teacher', category: 'Teacher' },
  { name: 'Jayshri Patel', role: 'PT', category: 'Staff' },
  { name: 'Andrea Pesantez-Moskowitz', role: 'Teacher', category: 'Teacher' },
  { name: 'Bonnie Pitera', role: 'Teacher', category: 'Teacher' },
  { name: 'Allison Regan', role: 'Teacher', category: 'Teacher' },
  { name: 'Vanessa Santangelo', role: 'Teacher', category: 'Teacher' },
  { name: 'Leandra Tirro', role: 'Teacher', category: 'Teacher' },
  { name: 'Jennifer Tutrone', role: 'Teacher', category: 'Teacher' },
  { name: 'Nicole Vierno', role: 'Teacher', category: 'Teacher' },
  { name: 'Nataliya Vinokur', role: 'OT', category: 'Staff' },
  { name: 'Andrea Wyne', role: 'Teacher', category: 'Teacher' },
];

export default function DirectoryPage() {
  const administrators = faculty.filter(f => f.category === 'Administrator');
  const teachers = faculty.filter(f => f.category === 'Teacher');
  const staff = faculty.filter(f => f.category === 'Staff');

  return (
    <div className="min-h-screen bg-warm-50">
      <Navbar />

      <main id="main-content">
        {/* Hero Section */}
        <section className="relative flex min-h-[50vh] items-center justify-center overflow-hidden bg-[#001524] pt-20 pb-32">
          <div className="absolute inset-0 z-0 overflow-hidden">
            <div className="absolute top-[10%] right-[10%] h-[500px] w-[500px] animate-pulse rounded-full bg-primary-light/20 blur-[100px]"></div>
            <div className="absolute bottom-[10%] left-[10%] h-[500px] w-[500px] animate-pulse rounded-full bg-accent/5 blur-[100px]" style={{ animationDelay: '1s' }}></div>
          </div>
          <div className="absolute inset-0 z-1 bg-gradient-to-b from-transparent via-[#001524]/50 to-[#001524]" />

          <div className="relative z-10 mx-auto max-w-5xl px-6 py-20 text-center">
            <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-5 py-2 backdrop-blur-md">
              <div className="flex h-6 w-6 items-center justify-center overflow-hidden rounded-full bg-white">
                <img src="/assets/images/PS38 School Logo.jpg" alt="PS 38 Logo" className="h-full w-full object-cover" />
              </div>
              <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-accent">Our Team</span>
            </div>
            <h1 className="mb-6 text-6xl font-black leading-tight tracking-tighter text-white sm:text-8xl lg:text-9xl">
              <span className="block italic font-serif text-accent drop-shadow-sm mb-4 text-4xl sm:text-5xl lg:text-6xl">Meet Our</span>
              Faculty & <span className="bg-gradient-to-r from-white via-white to-white/60 bg-clip-text text-transparent">Staff</span>
            </h1>
            <p className="mx-auto max-w-2xl text-xl font-medium leading-relaxed text-white/60 md:text-3xl">
              Our dedicated team of educators and support staff committed to excellence.
            </p>
          </div>

          {/* Wavy Section Divider */}
          <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0] transform rotate-180">
            <svg className="relative block w-full h-[80px]" viewBox="0 0 1200 120" preserveAspectRatio="none">
              <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" fill="#fdfaf6"></path>
            </svg>
          </div>
        </section>

        {/* Directory Sections */}
        <section className="bg-warm-50 py-32">
          <div className="mx-auto max-w-7xl px-6">
            
            {/* Administrators */}
            <div className="mb-32">
              <div className="mb-16 flex items-center gap-8">
                <h2 className="text-5xl font-black tracking-tighter text-gray-900 md:text-6xl">Administration</h2>
                <div className="h-[2px] flex-grow bg-gradient-to-r from-accent/40 to-transparent"></div>
              </div>
              <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
                {administrators.map((person) => (
                  <StaffCard key={person.name} person={person} />
                ))}
              </div>
            </div>

            {/* Teachers */}
            <div className="mb-32">
              <div className="mb-16 flex items-center gap-8">
                <h2 className="text-5xl font-black tracking-tighter text-gray-900 md:text-6xl">Teachers</h2>
                <div className="h-[2px] flex-grow bg-gradient-to-r from-primary/40 to-transparent"></div>
              </div>
              <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {teachers.map((person) => (
                  <StaffCard key={person.name} person={person} />
                ))}
              </div>
            </div>

            {/* Staff */}
            <div>
              <div className="mb-16 flex items-center gap-8">
                <h2 className="text-5xl font-black tracking-tighter text-gray-900 md:text-6xl">Support Staff</h2>
                <div className="h-[2px] flex-grow bg-gradient-to-r from-gray-300 to-transparent"></div>
              </div>
              <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {staff.map((person) => (
                  <StaffCard key={person.name} person={person} />
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

function StaffCard({ person }) {
  return (
    <div className="group relative transition-all duration-500 hover:-translate-y-2">
      {/* Dashed schoolish frame */}
      <div className="absolute -inset-2 rounded-[2.5rem] border-2 border-dashed border-accent/20 transition-transform group-hover:rotate-2"></div>
      
      <div className="relative overflow-hidden rounded-[2rem] border border-gray-100 bg-white p-10 shadow-sm transition-all duration-500 group-hover:shadow-3xl">
        <div className="relative z-10 flex flex-col items-center text-center">
          <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-[1.5rem] bg-warm-100 text-primary transition-all duration-500 group-hover:bg-primary group-hover:text-white group-hover:rotate-12 group-hover:scale-110">
            <span className="text-3xl font-black">{person.name.charAt(0)}</span>
          </div>
          <h3 className="mb-2 text-2xl font-black text-gray-900 leading-tight">
            {person.name}
          </h3>
          <p className="text-xs font-black uppercase tracking-[0.2em] text-accent">
            {person.role}
          </p>
        </div>
      </div>
    </div>
  );
}
