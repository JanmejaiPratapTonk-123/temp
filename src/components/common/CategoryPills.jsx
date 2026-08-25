import React from 'react';

export const CategoryPills = ({ categories, activeCategory, onSelectCategory, selectedRegion, onSelectRegion }) => {
  return (
    <div className="flex flex-wrap gap-3">
      {categories.map((cat) => {
        const isActive = activeCategory === cat;
        return (
          <button
            key={cat}
            onClick={() => onSelectCategory(cat)}
            className={`px-4 py-2 rounded-full font-label-caps text-label-caps transition-all ${
              isActive
                ? "bg-secondary text-on-secondary border border-secondary"
                : "bg-surface border border-outline-variant text-on-surface-variant hover:border-secondary hover:text-secondary"
            }`}
          >
            {cat}
          </button>
        );
      })}

      <button
        onClick={onSelectRegion}
        className="px-4 py-2 rounded-full font-label-caps text-label-caps bg-surface border border-outline-variant text-on-surface-variant hover:border-secondary hover:text-secondary transition-all flex items-center gap-1"
      >
        Region {selectedRegion ? `: ${selectedRegion}` : ''} <span className="material-symbols-outlined text-[16px]">arrow_drop_down</span>
      </button>
    </div>
  );
};
