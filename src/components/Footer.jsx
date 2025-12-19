export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-gray-950 pt-32 pb-16 text-white">
      {/* Subtle background element */}
      <div className="absolute top-0 left-0 h-[500px] w-[500px] rounded-full bg-primary/20 blur-[120px]"></div>

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="grid gap-16 lg:grid-cols-12">
          {/* Logo & Tagline */}
          <div className="lg:col-span-4">
            <div className="mb-10 flex items-center gap-4">
              <div className="flex h-14 w-14 items-center justify-center overflow-hidden rounded-[1.25rem] bg-white text-primary shadow-xl">
                <img 
                  src="/assets/images/PS38 School Logo.jpg" 
                  alt="PS 38 Logo" 
                  className="h-full w-full object-cover"
                />
              </div>
              <div>
                <div className="text-2xl font-bold leading-none tracking-tight">PS 38</div>
                <div className="mt-1 text-xs font-bold uppercase tracking-[0.2em] text-white/40">George Cromwell</div>
              </div>
            </div>
            <p className="mb-10 max-w-sm text-lg leading-relaxed text-white/50">
              Building a supportive and inclusive community where every child thrives through collaboration and excellence.
            </p>
            <div className="text-2xl font-bold italic tracking-tight text-accent">Together is Better</div>
          </div>

          {/* Links Groups */}
          <div className="grid grid-cols-2 gap-10 sm:grid-cols-3 lg:col-span-8">
            {/* Quick Links */}
            <div>
              <h3 className="mb-8 text-sm font-bold uppercase tracking-[0.2em] text-white/30">
                Quick Links
              </h3>
              <ul className="space-y-4">
                <FooterLink href="#about">About Us</FooterLink>
                <FooterLink href="#leadership">Leadership</FooterLink>
                <FooterLink href="#news">News</FooterLink>
                <FooterLink href="#events">Calendar</FooterLink>
              </ul>
            </div>

            {/* Parents */}
            <div>
              <h3 className="mb-8 text-sm font-bold uppercase tracking-[0.2em] text-white/30">
                For Parents
              </h3>
              <ul className="space-y-4">
                <FooterLink href="https://drive.google.com/file/d/17jcO1J0gkSZUl79HtSZyvIi2roGf2rX4/view">
                  ClassDojo
                </FooterLink>
                <FooterLink href="https://www.schools.nyc.gov/school-life/food/menus/school-lunch-meals?value=s8">
                  Lunch Menu
                </FooterLink>
                <FooterLink href="http://schools.nyc.gov/techsupport">
                  Tech Support
                </FooterLink>
                <FooterLink href="https://www.schools.nyc.gov/">
                  NYC DOE
                </FooterLink>
              </ul>
            </div>

            {/* Contact */}
            <div className="col-span-2 sm:col-span-1">
              <h3 className="mb-8 text-sm font-bold uppercase tracking-[0.2em] text-white/30">
                Contact
              </h3>
              <ul className="space-y-6">
                <li className="group flex items-start gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/5 text-accent transition-all duration-300 group-hover:bg-accent group-hover:text-white">
                    <PhoneIcon size={18} />
                  </div>
                  <div>
                    <div className="text-[10px] font-bold uppercase tracking-wider text-white/30">Phone</div>
                    <a href="tel:718-351-1225" className="font-bold text-white/80 transition-colors hover:text-white">(718) 351-1225</a>
                  </div>
                </li>
                <li className="group flex items-start gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/5 text-accent transition-all duration-300 group-hover:bg-accent group-hover:text-white">
                    <MailIcon size={18} />
                  </div>
                  <div>
                    <div className="text-[10px] font-bold uppercase tracking-wider text-white/30">Email</div>
                    <a href="mailto:jcotto@schools.nyc.gov" className="font-bold text-white/80 transition-colors hover:text-white">jcotto@schools.nyc.gov</a>
                  </div>
                </li>
                <li className="group flex items-start gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/5 text-accent transition-all duration-300 group-hover:bg-accent group-hover:text-white">
                    <MapPinIcon size={18} />
                  </div>
                  <div>
                    <div className="text-[10px] font-bold uppercase tracking-wider text-white/30">Location</div>
                    <span className="font-bold text-white/80">Staten Island, NY</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-24 border-t border-white/5 pt-12">
          <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
            <p className="text-sm font-bold text-white/30">
              © {new Date().getFullYear()} PS 38 George Cromwell Elementary School.
            </p>
            <div className="flex gap-8 text-xs font-bold uppercase tracking-widest text-white/30">
              <a href="#" className="transition-colors hover:text-white">Privacy Policy</a>
              <a href="#" className="transition-colors hover:text-white">FERPA Notice</a>
              <a href="#" className="transition-colors hover:text-white">Accessibility</a>
            </div>
          </div>

          {/* NexSav Credit */}
          <div className="mt-8 pt-8 border-t border-white/5">
            <a
              href="https://nexsav.net"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center justify-center gap-3 text-white/40 hover:text-white/80 transition-all duration-300 group"
            >
              <img
                src="https://nexsav.net/static/media/logo.7ef8f9a8ca3ec946bd31.png"
                alt="NexSav Logo"
                className="h-6 opacity-40 group-hover:opacity-100 transition-opacity duration-300 brightness-0 invert"
              />
              <span className="text-[10px] font-black uppercase tracking-[0.2em]">
                Website designed & developed by <span className="text-accent">NexSav</span>
              </span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

// Helper Components
function FooterLink({ href, children }) {
  const isExternal = href.startsWith('http');

  return (
    <li>
      <a
        href={href}
        target={isExternal ? '_blank' : undefined}
        rel={isExternal ? 'noopener noreferrer' : undefined}
        className="group flex items-center text-base font-bold text-white/50 transition-all duration-300 hover:text-white hover:translate-x-2"
      >
        <span className="h-1.5 w-1.5 rounded-full bg-accent opacity-0 transition-all duration-300 -ml-4 group-hover:opacity-100 group-hover:ml-0 group-hover:mr-3"></span>
        {children}
      </a>
    </li>
  );
}

// Icon Components
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
