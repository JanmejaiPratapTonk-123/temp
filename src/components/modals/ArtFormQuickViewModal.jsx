import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export const ArtFormQuickViewModal = ({ artForm, onClose }) => {
  const navigate = useNavigate();

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!artForm) return null;

  const handleLearnMore = () => {
    onClose();
    navigate(`/art-form/${artForm.slug}`);
  };

  return (
    <div className="fixed inset-0 z-50 bg-surface-container/40 backdrop-blur-[4px] transition-opacity duration-300 flex items-center justify-center p-margin-mobile md:p-margin-desktop">
      <article className="glass-panel w-full max-w-2xl rounded-xl shadow-[0_12px_48px_rgba(3,22,50,0.12)] relative overflow-hidden border border-surface-container-high z-50 flex flex-col md:flex-row animate-in fade-in zoom-in-95 duration-300">
        {/* Left Image Column */}
        <div className="w-full md:w-5/12 h-64 md:h-auto bg-surface-container relative overflow-hidden">
          <img
            src={artForm.coverImage}
            alt={artForm.title}
            className="w-full h-full object-cover object-center absolute inset-0"
          />
          <div className="absolute top-4 left-4 z-10">
            <span className="inline-flex items-center px-3 py-1 rounded-full border border-secondary/20 bg-surface/80 backdrop-blur-sm font-label-caps text-label-caps text-secondary uppercase tracking-widest">
              {artForm.category || 'Art Form'}
            </span>
          </div>
        </div>

        {/* Right Content Column */}
        <div className="w-full md:w-7/12 p-8 md:p-12 flex flex-col justify-between relative">
          {/* Close Button */}
          <button
            aria-label="Close popup"
            onClick={onClose}
            type="button"
            className="absolute top-4 right-4 p-2 text-on-surface-variant hover:text-primary transition-colors rounded-full hover:bg-surface-container-highest"
          >
            <span className="material-symbols-outlined">close</span>
          </button>

          <div>
            <div className="flex items-center gap-2 text-on-surface-variant font-label-caps text-label-caps mb-4 uppercase tracking-widest">
              <span className="material-symbols-outlined text-[14px]">location_on</span>
              <span>{artForm.region}</span>
            </div>

            <h2 className="font-display-lg text-headline-lg-mobile md:text-headline-lg text-primary mb-4 uppercase">
              {artForm.title}
            </h2>

            <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
              {artForm.subtitle || artForm.description}
            </p>
          </div>

          <div className="mt-8 flex flex-col sm:flex-row items-center gap-4">
            <button
              onClick={handleLearnMore}
              type="button"
              className="w-full sm:w-auto inline-flex justify-center items-center gap-2 bg-primary text-on-primary px-6 py-4 rounded font-button text-button hover:bg-primary-container transition-colors shadow-sm"
            >
              Learn about {artForm.title}
              <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
            </button>
            <button
              onClick={onClose}
              type="button"
              className="w-full sm:w-auto inline-flex justify-center items-center px-6 py-4 font-button text-button text-on-surface-variant hover:text-primary border-b border-transparent hover:border-outline transition-all"
            >
              Close
            </button>
          </div>
        </div>
      </article>
    </div>
  );
};
