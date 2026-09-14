import React from 'react';
import { Link } from 'react-router-dom';

export const AdminHeader = ({ title = "Dashboard" }) => {
  return (
    <header className="sticky top-0 z-30 bg-surface/80 backdrop-blur-md px-margin-mobile md:px-margin-desktop py-4 flex justify-between items-center border-b border-surface-container-high">
      <div className="flex items-center gap-4">
        <h1 className="font-display-lg text-headline-md md:text-headline-lg text-primary font-bold tracking-tight">
          {title}
        </h1>
      </div>
      <div className="flex items-center gap-4">
        <button title="Notifications" className="p-2 rounded-full text-on-surface-variant hover:bg-surface-container transition-colors relative">
          <span className="material-symbols-outlined">notifications</span>
          <span className="absolute top-2 right-2 w-2 h-2 bg-error rounded-full border border-surface"></span>
        </button>
        <Link to="/" className="text-xs font-button text-secondary hover:underline flex items-center gap-1">
          Exit Admin <span className="material-symbols-outlined text-[14px]">arrow_outward</span>
        </Link>
      </div>
    </header>
  );
};
