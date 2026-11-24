'use client';

import React from 'react';

interface SignatureLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  useImage?: boolean;
}

export default function SignatureLogo({
  className = '',
  size = 'md',
  useImage = true
}: SignatureLogoProps) {
  const sizeMap = {
    sm: 'h-8 md:h-9',
    md: 'h-11 md:h-14',
    lg: 'h-16 md:h-20',
    xl: 'h-22 md:h-28'
  };

  if (useImage) {
    return (
      <div className={`relative inline-flex items-center select-none ${className}`}>
        <img
          src="/images/fathima-risna-signature.png"
          alt="Fathima Risna"
          className={`${sizeMap[size]} w-auto object-contain drop-shadow-[0_2px_12px_rgba(255,255,255,0.35)]`}
        />
      </div>
    );
  }

  return (
    <div className={`relative inline-flex items-center select-none ${className}`}>
      <svg
        viewBox="0 0 340 90"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`${sizeMap[size]} w-auto drop-shadow-[0_2px_12px_rgba(255,255,255,0.35)]`}
      >
        <defs>
          <style>
            {`
              @import url('https://fonts.googleapis.com/css2?family=Caveat:wght@600;700&family=Great+Vibes&display=swap');
              .fathima-signature {
                font-family: 'Caveat', 'Great Vibes', 'Allura', 'Dancing Script', 'Segoe Script', 'Brush Script MT', cursive;
                font-weight: 700;
                font-style: italic;
              }
            `}
          </style>

          <linearGradient id="signatureWhiteGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="60%" stopColor="#f8fafc" />
            <stop offset="100%" stopColor="#e0f2fe" />
          </linearGradient>

          <filter id="softPenGlow" x="-10%" y="-10%" width="120%" height="120%">
            <feGaussianBlur stdDeviation="0.8" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        <g transform="rotate(-3.5, 170, 45)" filter="url(#softPenGlow)">
          <text
            x="14"
            y="54"
            fill="url(#signatureWhiteGrad)"
            className="fathima-signature"
            fontSize="52"
            letterSpacing="0.8px"
          >
            Fathima Risna
          </text>

          <path
            d="M 18,65 C 50,68 95,64 140,61 C 170,59 205,58.5 235,59.5 C 242,59.8 225,62.5 200,64 C 150,67.5 85,69.5 24,67 C 19,66.7 16,65.5 18,65 Z"
            fill="url(#signatureWhiteGrad)"
            opacity="0.95"
          />

          <path
            d="M 230,59.5 Q 248,58.8 262,56.5"
            stroke="#ffffff"
            strokeWidth="2.2"
            strokeLinecap="round"
            opacity="0.9"
          />
        </g>
      </svg>
    </div>
  );
}
