import React from 'react';

export const MinimalTextarea = ({ label, id, required, placeholder, rows = 4, value, onChange, className = "" }) => {
  return (
    <div className={`relative group ${className}`}>
      {label && (
        <label htmlFor={id} className="block font-label-caps text-label-caps text-on-surface-variant mb-2 uppercase tracking-wider transition-colors group-focus-within:text-secondary">
          {label} {required && '*'}
        </label>
      )}
      <textarea
        id={id}
        required={required}
        rows={rows}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="minimal-input w-full font-body-md text-primary text-body-md bg-transparent resize-y"
      />
    </div>
  );
};
