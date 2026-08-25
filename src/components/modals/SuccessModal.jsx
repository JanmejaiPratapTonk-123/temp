import React from 'react';

export const SuccessModal = ({ title = "Suggestion received ✦", message, onReturn }) => {
  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center p-8 bg-surface-container-lowest/95 backdrop-blur-md">
      <div className="max-w-md w-full text-center flex flex-col items-center">
        <div className="w-16 h-16 rounded-full bg-secondary-fixed flex items-center justify-center mb-6">
          <span className="material-symbols-outlined text-on-secondary-fixed-variant text-[32px]">check_circle</span>
        </div>
        <h3 className="font-headline-md text-headline-md text-primary mb-4">{title}</h3>
        <p className="font-body-lg text-body-lg text-on-surface-variant mb-8">
          {message || "The Tvarita team will review it before it becomes part of the platform. Thank you for contributing to New Heritage."}
        </p>
        <button
          onClick={onReturn}
          className="border-[1.5px] border-outline text-primary font-button text-button px-8 py-3 rounded-full hover:border-secondary hover:text-secondary transition-colors"
        >
          Return to Explore
        </button>
      </div>
    </div>
  );
};
