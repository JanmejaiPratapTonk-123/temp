import React from 'react';

export const EventCard = ({ event, isLarge = false, onRequestAttend }) => {
  const colSpan = isLarge ? "md:col-span-8" : "md:col-span-4";
  const imgHeight = isLarge ? "h-96" : "h-64";

  return (
    <article className={`${colSpan} group relative flex flex-col rounded-xl overflow-hidden shadow-sm bg-surface-container-lowest`}>
      <div className={`relative ${imgHeight} w-full overflow-hidden`}>
        <img
          src={event.image}
          alt={event.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute top-4 left-4">
          <span className="font-label-caps text-label-caps px-3 py-1 bg-tertiary-fixed-dim/90 text-on-tertiary-container backdrop-blur-sm rounded-full border border-tertiary-fixed">
            {event.category}
          </span>
        </div>
      </div>
      <div className="p-8 flex flex-col justify-between flex-grow">
        <div>
          <h2 className="font-headline-md text-headline-md text-primary mb-2">
            {event.title}
          </h2>
          <p className="font-body-md text-body-md text-on-surface-variant mb-4">
            {event.subtitle}
          </p>
          <div className="flex items-center gap-4 text-on-surface-variant mb-6 text-sm">
            <span className="flex items-center gap-1">
              <span className="material-symbols-outlined text-[18px]">calendar_today</span>
              {event.date}
            </span>
            <span className="flex items-center gap-1">
              <span className="material-symbols-outlined text-[18px]">location_on</span>
              {event.location}
            </span>
          </div>
        </div>
        <button
          onClick={() => onRequestAttend(event)}
          className="self-start text-secondary font-button text-button border-b border-transparent hover:border-secondary transition-all pb-1 flex items-center gap-2"
        >
          Request to attend <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
        </button>
      </div>
    </article>
  );
};
