"use client";

import React from 'react';

const HeroSection = () => {
  return (
    <div
      className="relative h-screen w-full bg-cover bg-center bg-fixed flex items-center justify-center text-center"
      style={{ backgroundImage: "url('/Beyond The Fields.png')" }}
    >
      <div className="absolute inset-0 bg-black opacity-20"></div> {/* Subtle overlay for contrast */}
      <div className="relative z-10 p-4">
        {/* The image itself contains the title, so no need to add text here directly */}
      </div>
    </div>
  );
};

export default HeroSection;