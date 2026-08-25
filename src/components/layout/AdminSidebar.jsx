import React from 'react';
import { NavLink } from 'react-router-dom';

export const AdminSidebar = () => {
  const logoUrl = "https://lh3.googleusercontent.com/aida-public/AB6AXuA33_RBhk47Fj0FFol2zwARMoJ0r3QWdyFNCG-KqsMf6_77JO6fM8bOqrIjtRBbyzgs1BtVoNWSavMPtC2H5jTVC4o-mIb9-5z6ZfoNcBTwHBXH4PHV9936ppmOIHVVizGDa6Omk29yGJ5PMK3i8eUz7khjURVnFpvqhPI0rb6Jq_yyZhMBMgTKzur4CQlVaA_Im4-QaM9lW7XXWHWcXuPLObSfkGOYN71lFsOxAa3df4Xt8jEmi2AR";

  const navItems = [
    { label: "Overview", path: "/admin", icon: "dashboard" },
    { label: "Requests", path: "/admin/requests", icon: "draw" },
    { label: "Fairness", path: "/admin/exposure-fairness", icon: "balance" },
    { label: "Art Forms", path: "/explore", icon: "palette" },
    { label: "Events", path: "/events", icon: "event" },
  ];

  return (
    <nav className="bg-surface-container dark:bg-primary-container h-screen w-64 fixed left-0 top-0 shadow-sm flex flex-col gap-unit p-4 z-40 hidden md:flex border-r border-surface-container-low">
      {/* Header Profile Badge */}
      <div className="mb-6 px-4 py-5 flex items-center gap-4 bg-surface-container-low dark:bg-surface-container-lowest rounded-xl">
        <img
          src={logoUrl}
          alt="Tvarita Admin"
          className="w-10 h-10 rounded-full object-cover border border-outline-variant/30"
        />
        <div>
          <h2 className="font-headline-md text-headline-md text-primary dark:text-primary-fixed truncate text-base font-bold">
            Tvarita Admin
          </h2>
          <p className="font-body-md text-on-surface-variant text-xs">Cultural Curator</p>
        </div>
      </div>

      {/* Navigation Links */}
      <div className="flex-1 overflow-y-auto flex flex-col gap-2">
        {navItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            end={item.path === "/admin"}
            className={({ isActive }) =>
              `rounded-full flex items-center gap-3 px-4 py-3 font-button text-button transition-all duration-200 ${
                isActive
                  ? "bg-secondary text-on-secondary shadow-sm translate-x-1"
                  : "text-on-surface-variant dark:text-on-primary-container hover:bg-surface-container-highest dark:hover:bg-primary hover:translate-x-1"
              }`
            }
          >
            <span className="material-symbols-outlined">{item.icon}</span>
            {item.label}
          </NavLink>
        ))}
      </div>

      {/* Public Platform Quick Switch */}
      <div className="mt-auto pt-4 border-t border-outline-variant/20">
        <NavLink
          to="/"
          className="text-on-surface-variant dark:text-on-primary-container rounded-full flex items-center gap-3 px-4 py-3 font-button text-button hover:bg-surface-container-highest dark:hover:bg-primary transition-all duration-200"
        >
          <span className="material-symbols-outlined">public</span>
          Public Platform
        </NavLink>
      </div>
    </nav>
  );
};
