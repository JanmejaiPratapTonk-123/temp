import React from 'react';

export const SearchBar = ({ value, onChange, placeholder = "Search traditions, artists, regions..." }) => {
  return (
    <div className="relative w-full max-w-2xl group">
      <input
        type="text"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full bg-transparent border-0 border-b border-on-surface-variant/30 text-body-lg py-4 pl-0 pr-12 focus:ring-0 focus:border-secondary transition-colors outline-none placeholder:text-on-surface-variant/50"
      />
      <button type="button" className="absolute right-0 top-1/2 -translate-y-1/2 text-on-surface-variant group-hover:text-secondary transition-colors">
        <span className="material-symbols-outlined text-2xl">search</span>
      </button>
    </div>
  );
};
