import React from 'react';

export const TimelineCard = ({ item, isReverse = false }) => {
  const flexDirection = isReverse ? "md:flex-row-reverse" : "md:flex-row";
  const textAlignment = isReverse ? "text-left pl-16 justify-start" : "text-right pr-16 justify-end";
  const paddingSides = isReverse ? "pl-16 md:pr-16 md:pl-0" : "pl-16 md:pl-16";

  return (
    <div className={`relative z-10 flex flex-col ${flexDirection} items-start mb-32 group`}>
      {/* Desktop Text Column */}
      <div className={`hidden md:flex w-1/2 ${textAlignment} items-center`}>
        <div>
          <span className="inline-block px-3 py-1 mb-4 border border-outline text-on-surface-variant rounded-full font-label-caps text-label-caps bg-surface/50">
            {item.type}
          </span>
          <h3 className="font-headline-md text-headline-md text-primary mb-2">
            {item.title}
          </h3>
          <p className="font-body-md text-body-md text-on-surface-variant max-w-md">
            {item.description}
          </p>
        </div>
      </div>

      {/* Central Node Dot */}
      <div className="absolute left-[24px] md:left-1/2 w-4 h-4 rounded-full border-2 border-secondary bg-surface -translate-x-1/2 mt-8 z-20 group-hover:bg-secondary transition-colors duration-300"></div>

      {/* Image Column */}
      <div className={`w-full md:w-1/2 ${paddingSides}`}>
        <div className="relative w-full aspect-[4/3] rounded-lg overflow-hidden border border-surface-container-high shadow-sm group-hover:shadow-md transition-shadow">
          <img
            src={item.image}
            alt={item.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
          />
          {/* Mobile Overlay Text */}
          <div className="md:hidden absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-primary/90 to-transparent">
            <span className="inline-block px-3 py-1 mb-2 border border-surface-container/30 text-surface-container rounded-full font-label-caps text-label-caps backdrop-blur-sm">
              {item.type}
            </span>
            <h3 className="font-headline-md text-headline-md text-surface-container">
              {item.title}
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};
