import React from 'react';

export const MinimalInput = ({ label, id, required, placeholder, type = "text", value, onChange, className = "" }) => {
  return (
    <div className={`relative group ${className}`}>
      {label && (
        <label htmlFor={id} className="block font-label-caps text-label-caps text-on-surface-variant mb-2 uppercase tracking-wider transition-colors group-focus-within:text-secondary">
          {label} {required && '*'}
        </label>
      )}
      <input
        id={id}
        type={type}
        required={required}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="minimal-input w-full font-body-lg text-primary text-body-lg bg-transparent"
      />
    </div>
  );
};
