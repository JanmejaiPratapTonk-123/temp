import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';

export const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const logoUrl = "https://lh3.googleusercontent.com/aida-public/AB6AXuA33_RBhk47Fj0FFol2zwARMoJ0r3QWdyFNCG-KqsMf6_77JO6fM8bOqrIjtRBbyzgs1BtVoNWSavMPtC2H5jTVC4o-mIb9-5z6ZfoNcBTwHBXH4PHV9936ppmOIHVVizGDa6Omk29yGJ5PMK3i8eUz7khjURVnFpvqhPI0rb6Jq_yyZhMBMgTKzur4CQlVaA_Im4-QaM9lW7XXWHWcXuPLObSfkGOYN71lFsOxAa3df4Xt8jEmi2AR";
  const userAvatarUrl = "https://lh3.googleusercontent.com/aida-public/AB6AXuBtWO13FG11yi1SzCiATIgzNgMYsZDySAvp3BF-A07q91gWm5c66mqvn0WMWipl7vtkdblNfs_ecF4PcYpOlVEF4j7nEDlK6-Ctvd6pJPWvm5XM4OOYbJ6QOEfNLfEqtOFhZVyaWbEzbx_CShnMAQUJf5dIr_uI0yp89ma0MxU7mjp-gLrgPR98349ZiHGa7Tnz-drG8NAMtEwVysw1PKFJ0BGlac1nBhvtueQpZheolFxa4dUh9NNn";

  return (
    <>
      <nav className="glass-header bg-surface/80 dark:bg-primary/80 backdrop-blur-md font-label-caps text-label-caps fixed top-0 w-full z-50 flex justify-between items-center px-margin-mobile md:px-margin-desktop py-4 max-w-container-max left-1/2 -translate-x-1/2">
        <Link to="/" className="font-display-lg text-headline-md text-primary dark:text-primary-fixed flex items-center gap-2 scale-95 active:scale-90 transition-transform">
          <img src={logoUrl} alt="Tvarita Logo" className="h-10 w-10 object-contain" />
          Tvarita
        </Link>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center gap-8">
          <NavLink
            to="/explore"
            className={({ isActive }) =>
              isActive
                ? "text-secondary dark:text-secondary-fixed-dim border-b-2 border-secondary pb-1 transition-colors duration-300"
                : "text-on-surface-variant dark:text-on-primary-container hover:text-secondary pb-1 transition-colors duration-300"
            }
          >
            Explore
          </NavLink>
          <NavLink
            to="/events"
            className={({ isActive }) =>
              isActive
                ? "text-secondary dark:text-secondary-fixed-dim border-b-2 border-secondary pb-1 transition-colors duration-300"
                : "text-on-surface-variant dark:text-on-primary-container hover:text-secondary pb-1 transition-colors duration-300"
            }
          >
            Events
          </NavLink>
          <NavLink
            to="/my-journey"
            className={({ isActive }) =>
              isActive
                ? "text-secondary dark:text-secondary-fixed-dim border-b-2 border-secondary pb-1 transition-colors duration-300"
                : "text-on-surface-variant dark:text-on-primary-container hover:text-secondary pb-1 transition-colors duration-300"
            }
          >
            My Journey
          </NavLink>
          <NavLink
            to="/suggest-art-form"
            className={({ isActive }) =>
              isActive
                ? "text-secondary dark:text-secondary-fixed-dim border-b-2 border-secondary pb-1 transition-colors duration-300"
                : "text-on-surface-variant dark:text-on-primary-container hover:text-secondary pb-1 transition-colors duration-300"
            }
          >
            Suggest Art Form
          </NavLink>
          <NavLink
            to="/admin"
            className={({ isActive }) =>
              isActive
                ? "text-secondary dark:text-secondary-fixed-dim border-b-2 border-secondary pb-1 transition-colors duration-300"
                : "text-on-surface-variant dark:text-on-primary-container hover:text-secondary pb-1 transition-colors duration-300"
            }
          >
            Admin
          </NavLink>
        </div>

        {/* Trailing Controls */}
        <div className="hidden md:flex items-center gap-4">
          <button title="Change Language" className="scale-95 active:scale-90 transition-transform text-on-surface-variant hover:text-secondary duration-300 p-1">
            <span className="material-symbols-outlined">language</span>
          </button>
          <Link to="/my-journey" className="scale-95 active:scale-90 transition-transform">
            <img src={userAvatarUrl} alt="User profile" className="h-8 w-8 rounded-full object-cover border border-outline-variant" />
          </Link>
        </div>

        {/* Mobile Toggle Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-primary p-2"
          aria-label="Toggle Navigation Menu"
        >
          <span className="material-symbols-outlined">{mobileMenuOpen ? 'close' : 'menu'}</span>
        </button>
      </nav>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 top-[72px] z-40 bg-surface/95 backdrop-blur-lg flex flex-col p-6 gap-6 md:hidden font-label-caps text-label-caps">
          <NavLink to="/explore" onClick={() => setMobileMenuOpen(false)} className="text-xl py-2 text-primary border-b border-surface-container">
            Explore
          </NavLink>
          <NavLink to="/events" onClick={() => setMobileMenuOpen(false)} className="text-xl py-2 text-primary border-b border-surface-container">
            Events
          </NavLink>
          <NavLink to="/my-journey" onClick={() => setMobileMenuOpen(false)} className="text-xl py-2 text-primary border-b border-surface-container">
            My Journey
          </NavLink>
          <NavLink to="/suggest-art-form" onClick={() => setMobileMenuOpen(false)} className="text-xl py-2 text-primary border-b border-surface-container">
            Suggest Art Form
          </NavLink>
          <NavLink to="/admin" onClick={() => setMobileMenuOpen(false)} className="text-xl py-2 text-primary border-b border-surface-container">
            Admin
          </NavLink>
        </div>
      )}
    </>
  );
};
