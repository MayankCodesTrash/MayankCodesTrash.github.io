"use client";

import React from 'react';
import { cn } from '@/lib/utils';

interface HistoryCardProps {
  imageSrc: string;
  title: string;
  description: string;
  className?: string;
}

const HistoryCard: React.FC<HistoryCardProps> = ({ imageSrc, title, description, className }) => {
  return (
    <div className={cn(
      "bg-card/90 backdrop-blur-sm rounded-xl shadow-lg border border-border overflow-hidden",
      "transform transition-all duration-500 ease-in-out hover:scale-[1.02] hover:shadow-2xl",
      className
    )}>
      <img
        src={imageSrc}
        alt={title}
        className="w-full h-48 object-cover object-center rounded-t-xl"
      />
      <div className="p-6">
        <h3 className="text-2xl font-serif text-primary mb-3 leading-tight">
          {title}
        </h3>
        <p className="font-sans text-foreground text-base">
          {description}
        </p>
      </div>
    </div>
  );
};

export default HistoryCard;