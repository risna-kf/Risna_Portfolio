'use client';

import React from 'react';

interface DeveloperPortraitProps {
  imageSrc?: string;
  alt?: string;
}

export default function DeveloperPortrait({
  imageSrc = '/images/fathima-risna.png',
  alt = 'Fathima Risna - Software Engineer & Full Stack Developer'
}: DeveloperPortraitProps) {
  return (
    <div className="relative w-full max-w-[480px] lg:max-w-[520px] flex items-end justify-center select-none">
      <img
        src={imageSrc}
        alt={alt}
        className="w-full h-auto max-h-[640px] object-contain select-none pointer-events-none"
        style={{
          WebkitMaskImage:
            'linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 92%, rgba(0,0,0,0) 100%)',
          maskImage:
            'linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 92%, rgba(0,0,0,0) 100%)'
        }}
      />
    </div>
  );
}
