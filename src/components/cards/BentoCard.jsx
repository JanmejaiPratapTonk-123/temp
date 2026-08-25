import React from 'react';

export const BentoCard = ({ artForm, span = "medium", onClick }) => {
  let spanClasses = "col-span-12 md:col-span-6 h-[380px]";
  if (span === "large") {
    spanClasses = "col-span-12 md:col-span-8 h-[480px]";
  } else if (span === "small") {
    spanClasses = "col-span-12 md:col-span-4 h-[380px]";
  } else if (span === "full") {
    spanClasses = "col-span-12 h-[500px]";
  }

  return (
    <article
      onClick={() => onClick(artForm)}
      className={`relative group cursor-pointer overflow-hidden rounded-xl bg-surface-container-low transition-all duration-300 hover:shadow-lg ${spanClasses}`}
    >
      <img
        src={artForm.coverImage}
        alt={artForm.title}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
      />
      <div className="absolute inset-0 story-card-overlay"></div>
      <div className="absolute bottom-0 left-0 p-8 w-full z-10 flex flex-col justify-end">
        <div className="mb-3">
          <span className="inline-block px-3 py-1 bg-surface/20 backdrop-blur-sm border border-surface/30 rounded-full font-label-caps text-label-caps text-on-primary uppercase">
            {artForm.category}
          </span>
        </div>
        <h2 className="font-display-lg text-headline-lg md:text-[36px] text-on-primary mb-2 leading-tight">
          {artForm.title}
        </h2>
        <p className="font-body-md text-surface-variant text-sm line-clamp-2 opacity-90 mb-2">
          {artForm.subtitle}
        </p>
        <div className="flex items-center gap-4 text-primary-fixed-dim font-body-md text-sm mt-1 opacity-90">
          <span className="flex items-center gap-1">
            <span className="material-symbols-outlined text-[18px]">location_on</span>
            {artForm.region}
          </span>
          {artForm.readTime && (
            <span className="flex items-center gap-1">
              <span className="material-symbols-outlined text-[18px]">schedule</span>
              {artForm.readTime}
            </span>
          )}
        </div>
      </div>
    </article>
  );
};
