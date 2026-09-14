import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Navbar } from '../../components/layout/Navbar';
import { Footer } from '../../components/layout/Footer';
import { StoryCard } from '../../components/cards/StoryCard';
import { useArtForm } from '../../context/ArtFormContext';

export const HomePage = () => {
  const navigate = useNavigate();
  const { artForms, openQuickView } = useArtForm();

  const featuredRail = artForms.filter((af) => af.isFeatured).slice(0, 3);
  const roganArt = artForms.find((af) => af.slug === 'rogan-art') || artForms[0];
  const hebbevu = artForms.find((af) => af.slug === 'hebbevu-theater') || artForms[1];

  const handleSurpriseMe = () => {
    const randomArtForm = artForms[Math.floor(Math.random() * artForms.length)];
    openQuickView(randomArtForm);
  };

  return (
    <div className="bg-surface text-on-surface antialiased min-h-screen flex flex-col">
      <Navbar />

      <main className="pt-32 pb-24 max-w-container-max mx-auto overflow-hidden w-full flex-grow">
        {/* Hero Section (Immersive, asymmetric layout) */}
        <section className="px-margin-mobile md:px-margin-desktop mb-32">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter items-center">
            <div className="md:col-span-5 flex flex-col gap-8 z-10">
              <h1 className="font-display-lg text-headline-lg-mobile md:text-display-lg text-primary leading-tight">
                Discover something you didn’t know existed.
              </h1>
              <p className="font-body-lg text-body-lg text-on-surface-variant max-w-md">
                Explore India’s living traditions, the artists behind them, and the stories that deserve to be seen.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mt-4">
                <button
                  onClick={() => navigate('/explore')}
                  className="bg-primary text-on-primary font-button text-button px-6 py-4 rounded hover:bg-primary-container transition-colors duration-300 shadow-sm flex items-center justify-center gap-2"
                >
                  Explore traditions <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </button>
                <button
                  onClick={handleSurpriseMe}
                  className="bg-transparent border-[1.5px] border-on-surface text-on-surface font-button text-button px-6 py-4 rounded hover:bg-surface-container transition-colors duration-300 flex items-center justify-center gap-2"
                >
                  ✦ Surprise me
                </button>
              </div>
            </div>

            <div className="md:col-span-7 relative h-[600px] w-full mt-12 md:mt-0">
              {/* Layered Imagery */}
              <div className="absolute top-0 right-0 w-3/4 h-5/6 overflow-hidden rounded-lg image-zoom-hover shadow-xl">
                <img
                  className="w-full h-full object-cover"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAWg_2TNe6AGyzcHl8fS124OdGE9JAFzfrICLgExWmtnvR2TB84gDeKIEh4h3m_e-gXbd89hogbDCCkL4qsgUlF5AXRKczYrDjH-L91HJ953lfy3k8sPC8kRjBPOu0ZPlC8QkLPvqOVj_ZVfzYyo8kPXO23-Ju2b50ZEWZ395pMm444H_zSuNdv__rG1TBl_DpX2MHLtrgb790gKjMpJyRB04Xpa3KJgbJ8OqrLGR_lYQtCdMD74Yz2"
                  alt="Chhau Dancer in full ornate mask"
                />
              </div>
              <div className="absolute bottom-0 left-0 w-1/2 h-2/3 overflow-hidden rounded-lg border-4 border-surface image-zoom-hover shadow-2xl z-20 text-offset-overlap md:ml-0 md:mt-0 md:-left-12 md:-bottom-12">
                <img
                  className="w-full h-full object-cover"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuA3wegRlqrWV2TIpMebYAXSE1Hy5l7IR_EXSWjyeMYDwrlOAllWdeA6Xwn29vAwk9JgL40CoK-RPvO5YRr4LFf3vifr_MBzMmTdO_BdC6aZGNmFRMTMlG1EKejocKPFWJ4ola-zvkWNv5Q8SYVYxPe8bV31WRq4xWsxVJwFcmwIXJix16W415TpaEFxqO4SG5LJtspDQU7DwsqEhxpDLSg2DGQEHYexnbfbBbrLEk0UuMB1ogDEupv2"
                  alt="Artisans painting Kalamkari"
                />
                <div className="absolute bottom-4 left-4 bg-surface/90 backdrop-blur-sm px-3 py-1 rounded font-label-caps text-label-caps text-secondary">
                  Artisans at work
                </div>
              </div>
              {/* Decorative cultural pill */}
              <div className="absolute top-12 right-12 z-30 bg-tertiary-fixed-dim/20 backdrop-blur-md border border-tertiary-fixed-dim text-on-tertiary-fixed-variant font-label-caps text-[10px] px-3 py-1.5 rounded-full flex items-center gap-1 shadow-sm">
                <span className="material-symbols-outlined text-[14px]">palette</span> Ritual Arts
              </div>
            </div>
          </div>
        </section>

        {/* Keep Exploring Section (Horizontal Discovery Rail) */}
        <section className="mb-32">
          <div className="px-margin-mobile md:px-margin-desktop flex justify-between items-end mb-8">
            <div>
              <span className="font-label-caps text-label-caps text-secondary tracking-widest uppercase block mb-2">Curated Collections</span>
              <h2 className="font-headline-md text-headline-md text-primary">Keep Exploring</h2>
            </div>
            <Link
              to="/explore"
              className="hidden md:flex font-button text-button text-on-surface-variant hover:text-primary border-b border-on-surface-variant pb-1 items-center gap-1 transition-all hover:gap-2"
            >
              View all collections <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </Link>
          </div>

          <div className="flex overflow-x-auto no-scrollbar gap-gutter px-margin-mobile md:px-margin-desktop pb-8 snap-x snap-mandatory">
            {featuredRail.map((af) => (
              <StoryCard key={af.id} artForm={af} onClick={openQuickView} />
            ))}
          </div>
        </section>

        {/* Beyond the Familiar Section (Asymmetric Bento Grid) */}
        <section className="px-margin-mobile md:px-margin-desktop mb-32">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="font-label-caps text-label-caps text-secondary tracking-widest uppercase block mb-4">Rare Archives</span>
            <h2 className="font-headline-md text-headline-md text-primary mb-6">Beyond the Familiar</h2>
            <p className="font-body-md text-body-md text-on-surface-variant">
              Venture into the esoteric. These are traditions practiced by a dwindling few, preserved in remote corners, and waiting to be understood by a modern audience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter h-auto md:h-[600px]">
            {/* Large Feature (Left) */}
            <div
              onClick={() => openQuickView(roganArt)}
              className="md:col-span-7 relative rounded-xl overflow-hidden group cursor-pointer h-[400px] md:h-full"
            >
              <img
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                src={roganArt.coverImage}
                alt={roganArt.title}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/40 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-8 flex flex-col justify-end h-full w-full">
                <div className="mb-4">
                  <span className="bg-surface/20 text-surface backdrop-blur-md px-3 py-1 rounded border border-surface/30 font-label-caps text-[10px] uppercase tracking-wider">
                    {roganArt.region}
                  </span>
                </div>
                <h3 className="font-display-lg text-[36px] md:text-[48px] text-surface mb-2 leading-tight">
                  {roganArt.title}
                </h3>
                <p className="font-body-md text-surface-variant max-w-md mb-6 opacity-90">
                  {roganArt.subtitle}
                </p>
                <div className="flex items-center text-surface font-button text-button group-hover:text-tertiary-fixed-dim transition-colors">
                  Read the archive <span className="material-symbols-outlined ml-2 text-sm transform group-hover:translate-x-1 transition-transform">arrow_forward</span>
                </div>
              </div>
            </div>

            {/* Right Stack */}
            <div className="md:col-span-5 flex flex-col gap-gutter h-full">
              {/* Top Small Card */}
              <div
                onClick={() => openQuickView(hebbevu)}
                className="flex-1 relative rounded-xl overflow-hidden group cursor-pointer h-[300px] md:h-auto bg-surface-container"
              >
                <div className="absolute inset-0 w-full h-1/2 md:h-full md:w-1/2 right-0 overflow-hidden">
                  <img
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    src={hebbevu.coverImage}
                    alt={hebbevu.title}
                  />
                </div>
                <div className="absolute inset-0 md:bg-gradient-to-r md:from-surface-container md:via-surface-container/90 md:to-transparent bg-gradient-to-t from-surface-container via-surface-container/90 to-transparent flex flex-col justify-end md:justify-center p-6 w-full md:w-2/3">
                  <div className="mb-3">
                    <span className="text-secondary font-label-caps text-[10px] uppercase tracking-wider">
                      {hebbevu.region}
                    </span>
                  </div>
                  <h3 className="font-headline-md text-[24px] text-primary mb-2">{hebbevu.title}</h3>
                  <p className="font-body-md text-on-surface-variant text-sm line-clamp-2">{hebbevu.subtitle}</p>
                </div>
              </div>

              {/* Bottom Small Card (Text heavy) */}
              <div
                onClick={() => navigate('/suggest-art-form')}
                className="flex-1 rounded-xl bg-primary-container text-on-primary-container p-8 flex flex-col justify-between group cursor-pointer hover:bg-primary transition-colors duration-300"
              >
                <div>
                  <span className="material-symbols-outlined text-secondary-fixed-dim text-4xl mb-4 block" style={{ fontVariationSettings: "'FILL' 1" }}>
                    auto_awesome
                  </span>
                  <h3 className="font-headline-md text-[28px] text-primary-fixed mb-4">The Lost Crafts Initiative</h3>
                  <p className="font-body-md text-sm opacity-80 leading-relaxed">
                    Join our effort to digitally preserve techniques and narratives before they vanish. Contribute field notes or support artisan communities.
                  </p>
                </div>
                <div className="mt-6 font-button text-button text-secondary-fixed-dim flex items-center group-hover:text-secondary-fixed transition-colors">
                  Suggest an art form <span className="material-symbols-outlined ml-2 text-sm">arrow_outward</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};
