import React from 'react';
import { Link } from 'react-router-dom';

export const Footer = () => {
  return (
    <footer className="bg-surface dark:bg-primary text-primary dark:text-primary-fixed font-body-md text-body-md w-full py-16 border-t border-surface-container-high dark:border-surface-container mt-auto">
      <div className="max-w-container-max mx-auto px-margin-desktop flex flex-col md:flex-row justify-between items-start gap-gutter">
        <div className="flex flex-col gap-4">
          <Link to="/" className="font-display-lg text-headline-lg text-primary dark:text-primary-fixed">
            Tvarita
          </Link>
          <p className="text-on-surface-variant text-sm">
            © 2024 Tvarita Cultural Foundation. Preserving New Heritage.
          </p>
        </div>
        <div className="flex flex-wrap gap-8 md:gap-12 mt-8 md:mt-0 font-button text-button">
          <Link to="/explore" className="text-on-surface-variant hover:underline decoration-secondary transition-all opacity-80 hover:opacity-100">
            Archives
          </Link>
          <Link to="/suggest-art-form" className="text-on-surface-variant hover:underline decoration-secondary transition-all opacity-80 hover:opacity-100">
            Contribute
          </Link>
          <a href="#" className="text-on-surface-variant hover:underline decoration-secondary transition-all opacity-80 hover:opacity-100">
            Legal
          </a>
          <a href="#" className="text-on-surface-variant hover:underline decoration-secondary transition-all opacity-80 hover:opacity-100">
            Press
          </a>
        </div>
      </div>
    </footer>
  );
};
