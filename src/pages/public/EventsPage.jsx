import React, { useState } from 'react';
import { Navbar } from '../../components/layout/Navbar';
import { Footer } from '../../components/layout/Footer';
import { EventCard } from '../../components/cards/EventCard';
import { initialEvents } from '../../data/mockEvents';

export const EventsPage = () => {
  const [attendSuccessMessage, setAttendSuccessMessage] = useState(null);

  const handleRequestAttend = (event) => {
    setAttendSuccessMessage(`Request to attend "${event.title}" sent! Check your email for pass confirmation.`);
    setTimeout(() => setAttendSuccessMessage(null), 4000);
  };

  const logoUrl = "https://lh3.googleusercontent.com/aida-public/AB6AXuA33_RBhk47Fj0FFol2zwARMoJ0r3QWdyFNCG-KqsMf6_77JO6fM8bOqrIjtRBbyzgs1BtVoNWSavMPtC2H5jTVC4o-mIb9-5z6ZfoNcBTwHBXH4PHV9936ppmOIHVVizGDa6Omk29yGJ5PMK3i8eUz7khjURVnFpvqhPI0rb6Jq_yyZhMBMgTKzur4CQlVaA_Im4-QaM9lW7XXWHWcXuPLObSfkGOYN71lFsOxAa3df4Xt8jEmi2AR";

  return (
    <div className="bg-surface text-on-surface min-h-screen flex flex-col font-body-md">
      <Navbar />

      <main className="flex-grow pt-[120px] pb-16 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto w-full">
        <header className="mb-16 md:mb-24 flex flex-col md:flex-row gap-8 items-end justify-between">
          <div className="max-w-2xl">
            <h1 className="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg text-primary mb-4">
              Experience it IRL.
            </h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant">
              Connect with traditions through live performances and workshops.
            </p>
          </div>
          <div className="w-24 h-24 hidden md:block">
            <img src={logoUrl} alt="Tvarita Watermark" className="w-full h-full object-contain mix-blend-multiply opacity-80" />
          </div>
        </header>

        {attendSuccessMessage && (
          <div className="mb-8 p-4 bg-secondary-fixed text-on-secondary-fixed-variant rounded-lg font-button text-sm flex items-center justify-between animate-in fade-in duration-300">
            <span>{attendSuccessMessage}</span>
            <button onClick={() => setAttendSuccessMessage(null)}>✕</button>
          </div>
        )}

        {/* Bento Grid Events */}
        <section className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-32">
          {initialEvents.map((evt, idx) => (
            <EventCard
              key={evt.id}
              event={evt}
              isLarge={idx === 0}
              onRequestAttend={handleRequestAttend}
            />
          ))}
        </section>
      </main>

      <Footer />
    </div>
  );
};
