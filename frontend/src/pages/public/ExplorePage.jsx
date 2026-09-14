import React, { useState, useMemo } from 'react';
import { Navbar } from '../../components/layout/Navbar';
import { Footer } from '../../components/layout/Footer';
import { SearchBar } from '../../components/common/SearchBar';
import { CategoryPills } from '../../components/common/CategoryPills';
import { BentoCard } from '../../components/cards/BentoCard';
import { useArtForm } from '../../context/ArtFormContext';

export const ExplorePage = () => {
  const { artForms, openQuickView } = useArtForm();
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedRegion, setSelectedRegion] = useState('');

  const categories = ['All', 'Dance', 'Music', 'Craft', 'Theatre', 'Ritual'];

  const filteredArtForms = useMemo(() => {
    return artForms.filter((af) => {
      const matchesSearch =
        af.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        af.region.toLowerCase().includes(searchTerm.toLowerCase()) ||
        af.description.toLowerCase().includes(searchTerm.toLowerCase());

      const matchesCategory =
        activeCategory === 'All' || af.category.toLowerCase() === activeCategory.toLowerCase();

      const matchesRegion =
        !selectedRegion || af.region.toLowerCase().includes(selectedRegion.toLowerCase());

      return matchesSearch && matchesCategory && matchesRegion;
    });
  }, [artForms, searchTerm, activeCategory, selectedRegion]);

  const handleSelectRegion = () => {
    if (!selectedRegion) {
      setSelectedRegion('Odisha');
    } else if (selectedRegion === 'Odisha') {
      setSelectedRegion('West Bengal');
    } else {
      setSelectedRegion('');
    }
  };

  return (
    <div className="bg-background text-on-surface antialiased min-h-screen flex flex-col font-body-md">
      <Navbar />

      <main className="flex-grow pt-24 md:pt-32 pb-24 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto w-full">
        {/* Header Section */}
        <header className="mb-16 md:w-3/4 lg:w-2/3">
          <h1 className="font-display-lg text-display-lg text-primary mb-4 hidden md:block">Explore</h1>
          <h1 className="font-headline-lg-mobile text-headline-lg-mobile text-primary mb-2 md:hidden">Explore</h1>
          <p class="font-body-lg text-body-lg text-on-surface-variant">Find a tradition worth discovering.</p>
        </header>

        {/* Search & Filter Bar */}
        <section className="mb-16 flex flex-col gap-8">
          <SearchBar
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search traditions, artists, regions..."
          />

          <CategoryPills
            categories={categories}
            activeCategory={activeCategory}
            onSelectCategory={setActiveCategory}
            selectedRegion={selectedRegion}
            onSelectRegion={handleSelectRegion}
          />
        </section>

        {/* Dynamic Discovery Grid (Bento Grid) */}
        <section className="grid grid-cols-12 gap-gutter auto-rows-[340px]">
          {filteredArtForms.length > 0 ? (
            filteredArtForms.map((af, idx) => {
              let span = "medium";
              if (idx % 5 === 0) span = "large";
              else if (idx % 5 === 1) span = "small";
              else if (idx % 5 === 3) span = "small";

              return (
                <BentoCard
                  key={af.id}
                  artForm={af}
                  span={span}
                  onClick={openQuickView}
                />
              );
            })
          ) : (
            <div className="col-span-12 py-24 text-center text-on-surface-variant">
              <span className="material-symbols-outlined text-5xl mb-4 block text-outline">search_off</span>
              <h3 className="font-headline-md text-headline-md text-primary mb-2">No traditions found</h3>
              <p className="font-body-md text-body-md">Try searching for a different keyword or category.</p>
            </div>
          )}
        </section>
      </main>

      <Footer />
    </div>
  );
};
