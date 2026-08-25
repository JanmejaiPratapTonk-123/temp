import React from 'react';

export const StoryCard = ({ artForm, onClick }) => {
  return (
    <div
      onClick={() => onClick(artForm)}
      className="min-w-[300px] md:min-w-[400px] flex-shrink-0 snap-start group cursor-pointer"
    >
      <div className="w-full h-[450px] overflow-hidden rounded-lg mb-6 relative">
        <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors z-10 duration-500"></div>
        <img
          src={artForm.coverImage}
          alt={artForm.title}
          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
        />
        <div className="absolute top-4 left-4 z-20 flex gap-2">
          <span className="bg-surface/90 backdrop-blur-md px-3 py-1 rounded-full font-label-caps text-label-caps text-primary shadow-sm border border-surface-variant">
            {artForm.category}
          </span>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <h3 className="font-headline-md text-headline-md text-primary group-hover:text-secondary transition-colors text-[24px]">
          {artForm.title}
        </h3>
        <p className="font-body-md text-body-md text-on-surface-variant line-clamp-2">
          {artForm.subtitle}
        </p>
        <span className="font-button text-button text-on-surface-variant border-b border-transparent group-hover:border-on-surface-variant inline-block w-fit mt-2 pb-1 transition-all">
          Discover story
        </span>
      </div>
    </div>
  );
};
