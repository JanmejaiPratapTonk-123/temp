import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Navbar } from '../../components/layout/Navbar';
import { Footer } from '../../components/layout/Footer';
import { useArtForm } from '../../context/ArtFormContext';

export const ArtFormDetailPage = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const { artForms, savedJourneyIds, toggleSaveJourney } = useArtForm();

  const artForm = artForms.find((af) => af.slug === slug) || artForms[0];
  const isSaved = savedJourneyIds.includes(artForm.id);

  return (
    <div className="bg-surface text-on-surface antialiased min-h-screen flex flex-col font-body-md">
      <Navbar />

      <main className="w-full pb-32 flex-grow">
        {/* Hero Section */}
        <section className="relative w-full h-[80vh] min-h-[600px] flex items-end pb-24">
          <div
            className="absolute inset-0 bg-cover bg-center w-full h-full z-0 after:content-[''] after:absolute after:inset-0 after:bg-gradient-to-t after:from-primary/90 after:via-primary/30 after:to-transparent"
            style={{ backgroundImage: `url('${artForm.heroImage || artForm.coverImage}')` }}
          ></div>
          <div className="relative z-10 w-full max-w-container-max mx-auto px-margin-desktop md:w-2/3">
            <div className="flex gap-2 mb-6">
              <span className="px-3 py-1 rounded-full border border-tertiary-fixed font-label-caps text-label-caps text-tertiary-fixed bg-primary/20 backdrop-blur-sm uppercase">
                {artForm.category}
              </span>
              <span className="px-3 py-1 rounded-full border border-tertiary-fixed font-label-caps text-label-caps text-tertiary-fixed bg-primary/20 backdrop-blur-sm uppercase">
                {artForm.state || artForm.region}
              </span>
            </div>
            <h1 className="font-display-lg text-display-lg text-on-primary mb-4">
              {artForm.title}
            </h1>
            <p className="font-body-lg text-body-lg text-surface-container-highest max-w-2xl">
              {artForm.subtitle}
            </p>
          </div>
        </section>

        <div className="max-w-container-max mx-auto px-margin-desktop mt-24">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter">
            {/* Left Column (Editorial Content) */}
            <div className="md:col-span-7 flex flex-col gap-24">
              {/* The Tradition */}
              <section>
                <h2 className="font-headline-md text-headline-md text-primary mb-8 border-b border-surface-variant pb-4">
                  The Tradition
                </h2>
                <div className="prose font-body-md text-body-md text-on-surface-variant max-w-none space-y-6">
                  <p>{artForm.description}</p>
                </div>
              </section>

              {/* The Story (Visual Rotated Image Block) */}
              <section className="relative mt-12">
                <div className="absolute -left-12 -top-12 w-64 h-64 bg-surface-container-lowest rounded-full -z-10 blur-3xl opacity-50"></div>
                <div className="flex flex-col md:flex-row gap-8 items-center">
                  <div className="w-full md:w-1/2 relative h-96">
                    <img
                      src={artForm.detailImages[0] || artForm.coverImage}
                      alt={artForm.title}
                      className="absolute inset-0 w-full h-full object-cover rounded-xl shadow-lg -rotate-2"
                    />
                    <div className="absolute -bottom-6 -right-6 bg-surface p-6 shadow-xl rounded-lg max-w-xs border border-surface-variant z-10 rotate-1">
                      <h3 className="font-headline-md text-body-lg text-primary mb-2">Master Craftsmanship</h3>
                      <p className="font-body-md text-label-caps text-on-surface-variant">Passed down through generations.</p>
                    </div>
                  </div>
                  <div className="w-full md:w-1/2">
                    <h2 className="font-headline-md text-headline-md text-primary mb-6">The Story</h2>
                    <p className="font-body-md text-body-md text-on-surface-variant mb-6">
                      {artForm.fullHistory}
                    </p>
                  </div>
                </div>
              </section>
            </div>

            {/* Right Column (Sidebar Actions, Artists, Related) */}
            <div className="md:col-span-4 md:col-start-9 flex flex-col gap-12">
              {/* Save / Bookmark Card */}
              <div className="bg-surface-container p-6 rounded-xl border border-outline-variant/20">
                <h3 className="font-headline-md text-[24px] text-primary mb-3">Save to Journey</h3>
                <p className="font-body-md text-sm text-on-surface-variant mb-6">
                  Add {artForm.title} to your personal cultural archive to track your learning journey.
                </p>
                <button
                  onClick={() => toggleSaveJourney(artForm.id)}
                  className={`w-full py-4 px-6 rounded font-button text-button transition-colors flex items-center justify-center gap-2 ${
                    isSaved
                      ? "bg-secondary text-on-secondary"
                      : "bg-primary text-on-primary hover:bg-primary-container"
                  }`}
                >
                  <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: isSaved ? "'FILL' 1" : "'FILL' 0" }}>
                    bookmark
                  </span>
                  {isSaved ? "Saved to Journey" : "Save Tradition"}
                </button>
              </div>

              {/* Key Artists */}
              {artForm.keyArtists && artForm.keyArtists.length > 0 && (
                <div className="bg-surface-container-low p-6 rounded-xl border border-outline-variant/20">
                  <h3 className="font-label-caps text-label-caps text-secondary uppercase tracking-widest mb-4">
                    Key Artists & Masters
                  </h3>
                  <div className="space-y-4">
                    {artForm.keyArtists.map((artist, idx) => (
                      <div key={idx} className="flex items-center gap-4">
                        <img src={artist.avatar} alt={artist.name} className="w-12 h-12 rounded-full object-cover" />
                        <div>
                          <h4 className="font-button text-button text-primary">{artist.name}</h4>
                          <p className="font-body-md text-xs text-on-surface-variant">{artist.role}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};
