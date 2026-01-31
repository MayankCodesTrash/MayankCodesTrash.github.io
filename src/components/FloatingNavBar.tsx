"use client";

import React from 'react';
import { NavLink } from 'react-router-dom';
import { cn } from '@/lib/utils';

const navItems = [
  { name: 'Home', path: '/' },
  { name: 'History', path: '/history' },
  { name: 'About', path: '/about' },
  { name: 'Contact', path: '/contact' },
];

const FloatingNavBar = () => {
  return (
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-50">
      <div className="flex items-center justify-center gap-4 p-2 px-6 bg-card/80 backdrop-blur-sm rounded-full shadow-lg border border-border">
        {navItems.map((item) => (
          <NavLink
            key={item.name}
            to={item.path}
            className={({ isActive }) =>
              cn(
                "relative px-4 py-2 text-lg font-serif text-foreground rounded-full transition-all duration-300 ease-in-out",
                "hover:scale-105 hover:bg-secondary/70 hover:shadow-md",
                isActive ? "bg-secondary scale-105 shadow-md" : ""
              )
            }
          >
            {item.name}
          </NavLink>
        ))}
      </div>
    </nav>
  );
};

export default FloatingNavBar;