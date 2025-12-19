'use client';

import React, { useState } from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

const events = [
  { id: 1, title: "New Year's Day", date: new Date(2025, 0, 1), category: 'holiday', description: 'School Closed' },
  { id: 2, title: "Dr. Martin Luther King Jr. Day", date: new Date(2025, 0, 20), category: 'holiday', description: 'School Closed' },
  { id: 3, title: "Washington's Birthday", date: new Date(2025, 1, 17), category: 'holiday', description: 'School Closed' },
  { id: 4, title: "Memorial Day", date: new Date(2025, 4, 26), category: 'holiday', description: 'School Closed' },
  { id: 5, title: "Juneteenth", date: new Date(2025, 5, 19), category: 'holiday', description: 'School Closed' },
  { id: 6, title: "Independence Day", date: new Date(2025, 6, 4), category: 'holiday', description: 'School Closed' },
  { id: 7, title: "Labor Day", date: new Date(2025, 8, 1), category: 'holiday', description: 'School Closed' },
  { id: 8, title: "Columbus Day", date: new Date(2025, 9, 13), category: 'holiday', description: 'School Closed' },
  { id: 9, title: "Veterans Day", date: new Date(2025, 10, 11), category: 'holiday', description: 'School Closed' },
  { id: 10, title: "Thanksgiving Day", date: new Date(2025, 10, 27), category: 'holiday', description: 'School Closed' },
  { id: 11, title: "Christmas Day", date: new Date(2025, 11, 25), category: 'holiday', description: 'School Closed' },
];

export default function CalendarPage() {
  const [currentView, setCurrentView] = useState('month');
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
  const [language, setLanguage] = useState('en');
  const [currentWeekOffset, setCurrentWeekOffset] = useState(0);
  const [selectedFilters, setSelectedFilters] = useState({
    holiday: true,
    academic: true,
    earlyDismissal: true,
    testing: true,
    pta: true,
    afterSchool: true
  });
  const [selectedEvent, setSelectedEvent] = useState(null);

  const monthNames = ["January","February","March","April","May","June","July","August","September","October","November","December"];

  const getDaysInMonth = (month, year) => {
    const date = new Date(year, month, 1);
    const days = [];
    const firstDay = new Date(year, month, 1).getDay();
    for (let i = 0; i < firstDay; i++) days.push(null);
    while (date.getMonth() === month) {
      days.push(new Date(date));
      date.setDate(date.getDate() + 1);
    }
    return days;
  };

  const getStartOfWeek = (date) => {
    const d = new Date(date);
    const day = d.getDay();
    d.setDate(d.getDate() - day);
    d.setHours(0, 0, 0, 0);
    return d;
  };

  const getWeekDays = () => {
    const base = new Date(currentYear, currentMonth, 1);
    const start = getStartOfWeek(base);
    const weekStart = new Date(start);
    weekStart.setDate(start.getDate() + currentWeekOffset * 7);
    const days = [];
    for (let i = 0; i < 7; i++) {
      const d = new Date(weekStart);
      d.setDate(weekStart.getDate() + i);
      days.push(d);
    }
    return { weekStart, days };
  };

  const getFilteredEvents = () => {
    return events.filter(event => selectedFilters[event.category]);
  };

  const prevMonth = () => {
    if (currentView === 'week') { setCurrentWeekOffset(currentWeekOffset - 1); return; }
    if (currentMonth === 0) { setCurrentMonth(11); setCurrentYear(currentYear - 1); } 
    else { setCurrentMonth(currentMonth - 1); }
  };

  const nextMonth = () => {
    if (currentView === 'week') { setCurrentWeekOffset(currentWeekOffset + 1); return; }
    if (currentMonth === 11) { setCurrentMonth(0); setCurrentYear(currentYear + 1); } 
    else { setCurrentMonth(currentMonth + 1); }
  };

  const toggleFilter = (filter) => setSelectedFilters({ ...selectedFilters, [filter]: !selectedFilters[filter] });

  const getEventsForDay = (day) => {
    return events.filter(event => {
      const eventDate = new Date(event.date);
      return eventDate.getDate() === day.getDate() &&
             eventDate.getMonth() === day.getMonth() &&
             eventDate.getFullYear() === day.getFullYear() &&
             (selectedFilters[event.category]);
    });
  };

  const days = getDaysInMonth(currentMonth, currentYear);
  const upcomingEvents = getFilteredEvents()
    .filter(event => event.date >= new Date())
    .sort((a, b) => a.date - b.date)
    .slice(0, 5);

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
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-accent">Dates & Deadlines</span>
            </div>
            <h1 className="mb-6 text-6xl font-black leading-tight tracking-tighter text-white sm:text-8xl lg:text-9xl">
              <span className="block italic font-serif text-accent drop-shadow-sm mb-4 text-4xl sm:text-5xl lg:text-6xl">School</span>
              Official <span className="bg-gradient-to-r from-white via-white to-white/60 bg-clip-text text-transparent">Calendar</span>
            </h1>
            <p className="mx-auto max-w-2xl text-xl font-medium leading-relaxed text-white/60 md:text-3xl">
              Stay informed about important school events and academic dates.
            </p>
          </div>

          {/* Wavy Section Divider */}
          <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0] transform rotate-180">
            <svg className="relative block w-full h-[80px]" viewBox="0 0 1200 120" preserveAspectRatio="none">
              <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" fill="#fdfaf6"></path>
            </svg>
          </div>
        </section>

        {/* Calendar Section */}
        <section className="bg-warm-50 py-24">
          <div className="mx-auto max-w-7xl px-6">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
              
              {/* Sidebar Filters & Controls */}
              <div className="lg:col-span-1 space-y-8">
                {/* View Options */}
                <div className="bg-white rounded-[2.5rem] p-8 shadow-xl ring-1 ring-gray-100">
                  <h3 className="text-xl font-black tracking-tighter text-gray-900 mb-6 uppercase tracking-widest">View</h3>
                  <div className="flex flex-col gap-3">
                    {['month', 'week', 'list'].map((view) => (
                      <button
                        key={view}
                        onClick={() => { setCurrentView(view); setCurrentWeekOffset(0); }}
                        className={`px-6 py-3 text-xs font-black uppercase tracking-widest rounded-2xl transition-all duration-300 ${currentView === view ? 'bg-primary text-white shadow-lg shadow-primary/20' : 'bg-gray-50 text-gray-500 hover:bg-gray-100'}`}
                      >
                        {view}
                      </button>
                    ))}
                    <button
                      onClick={() => { setCurrentMonth(new Date().getMonth()); setCurrentYear(new Date().getFullYear()); setCurrentWeekOffset(0); }}
                      className="mt-2 w-full py-3 border-2 border-primary/10 text-primary rounded-2xl hover:bg-primary hover:text-white transition-all duration-300 font-black text-xs uppercase tracking-widest"
                    >
                      Today
                    </button>
                  </div>
                </div>

                {/* Filter Events */}
                <div className="bg-white rounded-[2.5rem] p-8 shadow-xl ring-1 ring-gray-100">
                  <h3 className="text-xl font-black tracking-tighter text-gray-900 mb-6 uppercase tracking-widest">Filter</h3>
                  <div className="space-y-3">
                    {[
                      { key: 'holiday', label: 'Holidays', color: 'bg-rose-500' },
                      { key: 'academic', label: 'Academic', color: 'bg-sky-500' },
                      { key: 'earlyDismissal', label: 'Early Dismissal', color: 'bg-orange-500' },
                      { key: 'testing', label: 'Testing', color: 'bg-purple-500' },
                      { key: 'pta', label: 'PTA Events', color: 'bg-amber-500' },
                      { key: 'afterSchool', label: 'After-School', color: 'bg-emerald-500' },
                    ].map((filter) => (
                      <button
                        key={filter.key}
                        onClick={() => toggleFilter(filter.key)}
                        className={`flex items-center w-full gap-4 p-3 rounded-xl transition-all duration-300 ${selectedFilters[filter.key] ? 'bg-warm-50' : 'opacity-30 grayscale'}`}
                      >
                        <div className={`h-3 w-3 rounded-full ${filter.color}`}></div>
                        <span className="text-[10px] font-black uppercase tracking-widest text-gray-700">{filter.label}</span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Language Selector */}
                <div className="bg-white rounded-[2.5rem] p-8 shadow-xl ring-1 ring-gray-100">
                  <h3 className="text-xl font-black tracking-tighter text-gray-900 mb-6 uppercase tracking-widest">Language</h3>
                  <div className="flex gap-2 p-1 bg-gray-50 rounded-2xl">
                    {['en', 'es'].map((lang) => (
                      <button
                        key={lang}
                        onClick={() => setLanguage(lang)}
                        className={`flex-1 py-2 text-xs font-black uppercase rounded-xl transition-all duration-300 ${language === lang ? 'bg-white text-primary shadow-sm' : 'text-gray-400 hover:text-gray-600'}`}
                      >
                        {lang}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Upcoming Events */}
                <div className="rounded-[2.5rem] bg-primary p-8 text-white shadow-3xl overflow-hidden relative">
                  <div className="absolute top-0 right-0 h-24 w-24 rounded-full bg-white/5 -mr-12 -mt-12"></div>
                  <h3 className="text-xl font-black tracking-tight mb-6 uppercase tracking-widest">Upcoming</h3>
                  <div className="space-y-6 relative z-10">
                    {upcomingEvents.length > 0 ? (
                      upcomingEvents.map((event) => (
                        <div key={event.id} className="border-l-2 border-accent/40 pl-4 py-1 group cursor-pointer" onClick={() => setSelectedEvent(event)}>
                          <div className="text-[10px] font-black uppercase tracking-widest text-white/40 mb-1">{event.date.toLocaleDateString(language === 'es' ? 'es-ES' : 'en-US', { month: 'short', day: 'numeric' })}</div>
                          <div className="font-bold text-sm leading-tight group-hover:text-accent transition-colors">{language === 'es' && event.titleES ? event.titleES : event.title}</div>
                        </div>
                      ))
                    ) : (
                      <p className="text-white/40 italic text-xs">No events found.</p>
                    )}
                  </div>
                </div>
              </div>

              {/* Main Calendar Area */}
              <div className="lg:col-span-3">
                <div className="bg-white rounded-[3.5rem] shadow-3xl overflow-hidden border border-gray-100">
                  {/* Calendar Header */}
                  <div className="bg-[#001524] px-10 py-10 flex items-center justify-between">
                    <div>
                      {currentView === 'week' ? (
                        (() => {
                          const { days } = getWeekDays();
                          const startLabel = `${days[0].toLocaleString(language === 'es' ? 'es-ES' : 'en-US', { month: 'short' })} ${days[0].getDate()}`;
                          const endLabel = `${days[6].toLocaleString(language === 'es' ? 'es-ES' : 'en-US', { month: 'short' })} ${days[6].getDate()}, ${days[6].getFullYear()}`;
                          return <h2 className="text-3xl font-black text-white tracking-tighter">Week of {startLabel} – {endLabel}</h2>;
                        })()
                      ) : (
                        <h2 className="text-4xl font-black text-white tracking-tighter">
                          {monthNames[currentMonth]} <span className="text-accent italic font-serif ml-2">{currentYear}</span>
                        </h2>
                      )}
                    </div>
                    <div className="flex gap-4">
                      <button onClick={prevMonth} className="h-14 w-14 flex items-center justify-center rounded-2xl bg-white/5 text-white hover:bg-accent transition-all active:scale-90">
                        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}><path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" /></svg>
                      </button>
                      <button onClick={nextMonth} className="h-14 w-14 flex items-center justify-center rounded-2xl bg-white/5 text-white hover:bg-accent transition-all active:scale-90">
                        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
                      </button>
                    </div>
                  </div>

                  {/* Calendar Views */}
                  {currentView !== 'list' && (
                    <div className="grid grid-cols-7 border-b border-gray-100 bg-gray-50/50">
                      {['Sun','Mon','Tue','Wed','Thu','Fri','Sat'].map((day) => (
                        <div key={day} className="py-6 text-center text-[10px] font-black uppercase tracking-[0.4em] text-gray-400">{day}</div>
                      ))}
                    </div>
                  )}

                  {currentView === 'month' && (
                    <div className="grid grid-cols-7 auto-rows-fr">
                      {days.map((day, i) => {
                        const dayEvents = day ? getEventsForDay(day) : [];
                        const isToday = day && day.toDateString() === new Date().toDateString();
                        
                        return (
                          <div 
                            key={i} 
                            className={`min-h-[160px] p-4 border-r border-b border-gray-50 last:border-r-0 transition-colors ${day ? 'bg-white hover:bg-warm-50/30' : 'bg-gray-50/50'}`}
                          >
                            {day && (
                              <>
                                <div className={`text-right text-xl font-black tracking-tighter mb-4 ${isToday ? 'text-accent' : 'text-gray-200'}`}>
                                  {day.getDate()}
                                </div>
                                <div className="space-y-2">
                                  {dayEvents.map(event => (
                                    <div 
                                      key={event.id}
                                      onClick={() => setSelectedEvent(event)}
                                      className={`px-3 py-2 rounded-xl text-[9px] font-black uppercase tracking-wider text-white cursor-pointer transition-all hover:scale-105 shadow-md truncate ${event.category === 'holiday' ? 'bg-rose-500' : event.category === 'academic' ? 'bg-sky-500' : event.category === 'earlyDismissal' ? 'bg-orange-500' : event.category === 'testing' ? 'bg-purple-500' : event.category === 'pta' ? 'bg-amber-500' : 'bg-emerald-500'}`}
                                    >
                                      {language === 'es' && event.titleES ? event.titleES : event.title}
                                    </div>
                                  ))}
                                </div>
                              </>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  )}

                  {currentView === 'week' && (() => {
                    const { days: weekDays } = getWeekDays();
                    return (
                      <div className="grid grid-cols-7 auto-rows-fr min-h-[500px]">
                        {weekDays.map((day, i) => {
                          const dayEvents = getEventsForDay(day);
                          const isToday = day.toDateString() === new Date().toDateString();
                          return (
                            <div key={i} className={`p-6 border-r border-gray-50 last:border-r-0 transition-colors ${isToday ? 'bg-warm-50/50' : 'bg-white'}`}>
                              <div className={`text-right text-2xl font-black tracking-tighter mb-6 ${isToday ? 'text-accent' : 'text-gray-200'}`}>{day.getDate()}</div>
                              <div className="space-y-3">
                                {dayEvents.map(event => (
                                  <div 
                                    key={event.id}
                                    onClick={() => setSelectedEvent(event)}
                                    className={`p-4 rounded-2xl text-[10px] font-black uppercase tracking-widest text-white cursor-pointer transition-all hover:scale-105 shadow-lg ${event.category === 'holiday' ? 'bg-rose-500' : event.category === 'academic' ? 'bg-sky-500' : event.category === 'earlyDismissal' ? 'bg-orange-500' : event.category === 'testing' ? 'bg-purple-500' : event.category === 'pta' ? 'bg-amber-500' : 'bg-emerald-500'}`}
                                  >
                                    {language === 'es' && event.titleES ? event.titleES : event.title}
                                  </div>
                                ))}
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    );
                  })()}

                  {currentView === 'list' && (
                    <div className="p-12 space-y-6">
                      {getFilteredEvents()
                        .filter(event => event.date.getMonth() === currentMonth && event.date.getFullYear() === currentYear)
                        .sort((a, b) => a.date - b.date)
                        .map(event => (
                          <div 
                            key={event.id}
                            onClick={() => setSelectedEvent(event)}
                            className="flex flex-col md:flex-row md:items-center gap-8 p-8 rounded-[2.5rem] bg-gray-50 border-2 border-dashed border-gray-200 transition-all duration-500 hover:bg-white hover:shadow-3xl hover:border-primary/20 cursor-pointer"
                          >
                            <div className="flex h-24 w-24 flex-shrink-0 flex-col items-center justify-center rounded-[2rem] bg-primary text-white shadow-xl">
                              <span className="text-xs font-black uppercase tracking-widest text-white/40">{event.date.toLocaleString(language === 'es' ? 'es-ES' : 'en-US', { month: 'short' })}</span>
                              <span className="text-4xl font-black tracking-tighter">{event.date.getDate()}</span>
                            </div>
                            <div className="flex-grow">
                              <div className="mb-2 flex items-center gap-3">
                                <span className={`h-2 w-2 rounded-full ${event.category === 'holiday' ? 'bg-rose-500' : 'bg-sky-500'}`}></span>
                                <span className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-400">{event.category}</span>
                              </div>
                              <h3 className="text-3xl font-black text-gray-900 tracking-tight">{language === 'es' && event.titleES ? event.titleES : event.title}</h3>
                            </div>
                            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-sm ring-1 ring-gray-100">
                              <svg className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
                            </div>
                          </div>
                        ))}
                    </div>
                  )}
                </div>
              </div>

            </div>
          </div>
        </section>
      </main>

      {/* Event Modal */}
      {selectedEvent && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-[#001524]/90 backdrop-blur-xl">
          <div className="relative w-full max-w-2xl overflow-hidden rounded-[3.5rem] bg-white shadow-3xl animate-in fade-in zoom-in duration-300">
            <div className={`h-4 w-full ${selectedEvent.category === 'holiday' ? 'bg-rose-500' : 'bg-sky-500'}`}></div>
            <div className="p-12 md:p-16 text-center">
              <button onClick={() => setSelectedEvent(null)} className="absolute top-8 right-8 h-12 w-12 flex items-center justify-center rounded-2xl bg-gray-50 text-gray-400 hover:text-primary transition-colors">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
              </button>
              <div className="mb-8 inline-flex items-center gap-2 rounded-full bg-primary/5 px-5 py-2 text-[10px] font-black uppercase tracking-widest text-primary">
                {selectedEvent.category}
              </div>
              <h3 className="mb-4 text-5xl font-black tracking-tighter text-gray-900 leading-[1.1]">{language === 'es' && selectedEvent.titleES ? selectedEvent.titleES : selectedEvent.title}</h3>
              <p className="mb-10 text-2xl font-medium text-gray-500 font-serif italic border-b border-gray-100 pb-8">
                {selectedEvent.date.toLocaleDateString(language === 'es' ? 'es-ES' : 'en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
              </p>
              <div className="p-10 rounded-[2.5rem] bg-warm-50 border-2 border-dashed border-gray-200">
                <p className="text-xl text-gray-600 font-medium leading-relaxed italic">"{selectedEvent.description || 'Join us for this school event.'}"</p>
              </div>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}

function ClockIcon({ size = 20 }) {
  return (
    <svg width={size} height={size} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  );
}

function MapPinIcon({ size = 20 }) {
  return (
    <svg width={size} height={size} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  );
}
