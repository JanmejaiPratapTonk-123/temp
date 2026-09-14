import React from 'react';
import { Navbar } from '../../components/layout/Navbar';
import { Footer } from '../../components/layout/Footer';
import { TimelineCard } from '../../components/cards/TimelineCard';
import { useArtForm } from '../../context/ArtFormContext';
import { initialJourneyTimeline, initialJourneyStats } from '../../data/mockJourney';

export const MyJourneyPage = () => {
  const { savedJourneyIds, artForms } = useArtForm();

  const savedArtForms = artForms.filter((af) => savedJourneyIds.includes(af.id));
  const dynamicStats = {
    traditions: Math.max(initialJourneyStats.traditions, savedArtForms.length),
    regions: initialJourneyStats.regions,
    events: initialJourneyStats.events,
    artists: initialJourneyStats.artists
  };

  return (
    <div className="bg-surface text-on-surface font-body-md antialiased min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-grow pt-32 pb-24 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto w-full">
        {/* Header Section */}
        <div className="mb-24 flex flex-col items-center text-center">
          <h1 className="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg text-primary mb-6 max-w-3xl">
            My Cultural Journey
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mb-12">
            A personal archive of your explorations across time, space, and tradition. Curated moments reflecting your engagement with New Heritage.
          </p>

          {/* Stats Bento Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-unit w-full max-w-4xl">
            <div className="bg-surface-container p-6 rounded-lg border border-surface-container-high flex flex-col items-center justify-center text-center group hover:bg-surface-container-highest transition-colors">
              <span className="font-display-lg text-display-lg text-secondary mb-2 group-hover:scale-105 transition-transform">
                {dynamicStats.traditions}
              </span>
              <span className="font-label-caps text-label-caps text-on-surface-variant uppercase tracking-widest">
                Traditions
              </span>
            </div>
            <div className="bg-surface-container p-6 rounded-lg border border-surface-container-high flex flex-col items-center justify-center text-center group hover:bg-surface-container-highest transition-colors">
              <span className="font-display-lg text-display-lg text-primary mb-2 group-hover:scale-105 transition-transform">
                {dynamicStats.regions}
              </span>
              <span className="font-label-caps text-label-caps text-on-surface-variant uppercase tracking-widest">
                Regions
              </span>
            </div>
            <div className="bg-surface-container p-6 rounded-lg border border-surface-container-high flex flex-col items-center justify-center text-center group hover:bg-surface-container-highest transition-colors">
              <span className="font-display-lg text-display-lg text-tertiary-container mb-2 group-hover:scale-105 transition-transform">
                {dynamicStats.events}
              </span>
              <span className="font-label-caps text-label-caps text-on-surface-variant uppercase tracking-widest">
                Events
              </span>
            </div>
            <div className="bg-surface-container p-6 rounded-lg border border-surface-container-high flex flex-col items-center justify-center text-center group hover:bg-surface-container-highest transition-colors">
              <span className="font-display-lg text-display-lg text-primary-container mb-2 group-hover:scale-105 transition-transform">
                {dynamicStats.artists}
              </span>
              <span className="font-label-caps text-label-caps text-on-surface-variant uppercase tracking-widest">
                Artists
              </span>
            </div>
          </div>
        </div>

        {/* Visual Timeline */}
        <div className="relative w-full max-w-5xl mx-auto">
          <div className="absolute left-[24px] md:left-1/2 top-0 bottom-0 w-px bg-outline-variant -translate-x-1/2 opacity-50 z-0"></div>

          {initialJourneyTimeline.map((item, idx) => (
            <TimelineCard key={item.id} item={item} isReverse={idx % 2 === 1} />
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
};
