import React from 'react';

export const ImageUploadZone = ({ label = "Optional Image Upload", onUpload }) => {
  return (
    <div className="pt-4">
      {label && <label className="block font-label-caps text-label-caps text-on-surface-variant mb-4 uppercase tracking-wider">{label}</label>}
      <div className="border border-dashed border-outline-variant rounded-xl p-8 text-center hover:bg-surface-container transition-colors cursor-pointer group flex flex-col items-center justify-center gap-3">
        <span className="material-symbols-outlined text-[32px] text-outline group-hover:text-secondary transition-colors">cloud_upload</span>
        <span className="font-button text-button text-on-surface-variant group-hover:text-primary transition-colors">Click to upload or drag & drop</span>
        <span className="font-body-md text-[13px] text-outline">JPG, PNG or WEBP (max. 5MB)</span>
      </div>
    </div>
  );
};
