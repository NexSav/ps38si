'use client';

import { useState, useEffect } from 'react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      
      // Calculate scroll progress
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-lg focus:bg-primary focus:px-4 focus:py-2 focus:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2"
      >
        Skip to content
      </a>

      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <nav
          className={`relative mt-6 transition-all duration-500 ease-in-out ${
            isScrolled
              ? 'bg-white/80 shadow-2xl backdrop-blur-md'
              : 'bg-white/40 shadow-sm backdrop-blur-lg'
          } rounded-[2rem] border border-white/20 px-2`}
          aria-label="Primary navigation"
          data-scrolled={isScrolled}
        >
          {/* Unique Floating Accent */}
          <div className={`absolute -top-3 left-1/2 -translate-x-1/2 h-6 w-32 bg-primary rounded-full transition-all duration-500 ${isScrolled ? 'opacity-100' : 'opacity-0 scale-90'}`}>
            <div className="flex h-full w-full items-center justify-center">
              <div className="h-1 w-8 rounded-full bg-white/30"></div>
            </div>
          </div>

          <div className="flex items-center justify-between px-4 py-3">
            {/* Logo & School Name */}
            <div className="flex items-center gap-4">
              <div className="relative group">
                <div className="absolute -inset-1 rounded-2xl bg-gradient-to-tr from-accent to-primary opacity-0 blur-md transition-all duration-500 group-hover:opacity-40"></div>
                <div className="relative flex h-12 w-12 items-center justify-center overflow-hidden rounded-2xl bg-white shadow-xl ring-1 ring-black/5 transition-all duration-300 group-hover:scale-110">
                  <img 
                    src="/assets/images/PS38 School Logo.jpg" 
                    alt="PS 38 Logo" 
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
              <div className="hidden sm:block">
                <div className="text-base font-black leading-none tracking-tighter text-primary">PS 38</div>
                <div className="mt-1 flex items-center gap-2">
                  <span className="h-1 w-1 rounded-full bg-accent"></span>
                  <span className="text-[9px] font-black uppercase tracking-[0.25em] text-gray-500">George Cromwell</span>
                </div>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden items-center gap-1 lg:flex bg-gray-900/5 rounded-full p-1.5 backdrop-blur-sm">
              <NavLink href="/">Home</NavLink>
              
              <NavDropdown title="About">
                <DropdownLink href="/about">About The School</DropdownLink>
                <DropdownLink href="/directory">Staff Directory</DropdownLink>
                <DropdownLink href="/policies">Policies/Rules</DropdownLink>
              </NavDropdown>

              <NavLink href="/events">Calendar</NavLink>
              <NavLink href="/parents">Parents</NavLink>
              <NavLink href="/menu">Menu</NavLink>
              <NavLink href="/games">Games</NavLink>

              <NavDropdown title="More">
                <DropdownLink href="/newspaper">Dolphin Times</DropdownLink>
                <DropdownLink href="https://app.echalk.com/#/login" target="_blank" rel="noopener noreferrer">Login</DropdownLink>
              </NavDropdown>
            </div>

            {/* CTA Button */}
            <div className="flex items-center gap-4">
              <button className="hidden items-center justify-center rounded-2xl bg-primary px-6 py-3 text-xs font-black uppercase tracking-[0.1em] text-white shadow-xl transition-all duration-300 ease-out hover:bg-accent hover:shadow-accent/20 hover:-translate-y-0.5 focus:outline-none focus-visible:ring-4 focus-visible:ring-primary/20 md:inline-flex">
                Enroll Now
              </button>

              {/* Mobile Menu Button */}
              <button
                className="inline-flex items-center justify-center rounded-2xl bg-white/50 p-2.5 text-gray-700 shadow-sm ring-1 ring-black/5 transition-all duration-300 hover:bg-white hover:scale-105 lg:hidden"
                aria-label="Open menu"
              >
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>

          {/* Elegant Scroll Progress */}
          <div className="absolute bottom-0 left-8 right-8 h-[2px] overflow-hidden rounded-full bg-gray-950/5">
            <div 
              className="h-full bg-gradient-to-r from-accent via-primary to-accent transition-all duration-300 ease-out"
              style={{ width: `${scrollProgress}%` }}
            ></div>
          </div>
        </nav>
      </div>
    </header>
  );
}

function NavLink({ href, children }) {
  return (
    <a
      href={href}
      className="relative rounded-full px-4 py-2 text-xs font-black uppercase tracking-wider text-gray-600 transition-all duration-300 ease-out hover:text-primary hover:bg-white hover:shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/50"
    >
      {children}
    </a>
  );
}

function NavDropdown({ title, children }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div 
      className="relative"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <button
        className={`flex items-center gap-1 rounded-full px-4 py-2 text-xs font-black uppercase tracking-wider transition-all duration-300 ease-out focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 ${
          isOpen ? 'bg-white text-primary shadow-sm' : 'text-gray-600 hover:text-primary hover:bg-white hover:shadow-sm'
        }`}
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        {title}
        <svg
          className={`h-3 w-3 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={3}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {/* Dropdown Menu */}
      <div
        className={`absolute left-0 top-full pt-3 transition-all duration-500 ${
          isOpen ? 'visible translate-y-0 opacity-100' : 'invisible translate-y-4 opacity-0'
        }`}
      >
        <div className="w-64 overflow-hidden rounded-[2rem] border border-white/40 bg-white/80 p-2 shadow-2xl backdrop-blur-2xl ring-1 ring-black/5">
          <div className="flex flex-col gap-1">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}

function DropdownLink({ href, children, ...props }) {
  return (
    <a
      href={href}
      className="rounded-2xl px-4 py-3 text-xs font-black uppercase tracking-wider text-gray-500 transition-all duration-300 hover:bg-primary/5 hover:text-primary focus:outline-none focus:bg-primary/5 focus:text-primary"
      {...props}
    >
      {children}
    </a>
  );
}
