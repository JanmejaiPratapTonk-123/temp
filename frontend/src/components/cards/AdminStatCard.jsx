import React from 'react';

export const AdminStatCard = ({ icon, value, label, colorClass = "text-primary", bgClass = "bg-surface-container", onClick }) => {
  return (
    <div
      onClick={onClick}
      className={`${bgClass} rounded-xl p-6 border border-outline-variant/10 flex flex-col justify-between hover:bg-surface-container-high transition-colors group cursor-pointer shadow-[0_4px_24px_rgba(26,43,72,0.02)]`}
    >
      <div className="flex justify-between items-start mb-4">
        <div className={`bg-surface p-3 rounded-full shadow-sm ${colorClass} group-hover:scale-110 transition-transform`}>
          <span className="material-symbols-outlined">{icon}</span>
        </div>
      </div>
      <div>
        <p className="font-display-lg text-headline-lg text-primary mb-1">{value}</p>
        <p className="font-label-caps text-label-caps text-on-surface-variant uppercase tracking-wider">{label}</p>
      </div>
    </div>
  );
};
