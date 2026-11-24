'use client';

import React from 'react';

export default function HeroPaintSplash({ className = '' }: { className?: string }) {
  return (
    <div className={`relative w-full h-full pointer-events-none select-none ${className}`}>
      {/* Ambient background glow behind the splash */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-tr from-cyan-600/30 via-sky-500/40 to-blue-600/20 rounded-full blur-[80px] -z-10" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-cyan-400/30 rounded-full blur-[50px] -z-10" />

      {/* SVG Layer with dynamic cyan & blue acrylic brush strokes and splatters */}
      <svg
        viewBox="0 0 800 700"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full drop-shadow-[0_0_35px_rgba(0,210,255,0.4)]"
      >
        <defs>
          <linearGradient id="cyanPaint1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#00d2ff" />
            <stop offset="45%" stopColor="#0099ff" />
            <stop offset="100%" stopColor="#0044cc" />
          </linearGradient>

          <linearGradient id="cyanPaint2" x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#38bdf8" />
            <stop offset="40%" stopColor="#0284c7" />
            <stop offset="85%" stopColor="#0369a1" />
            <stop offset="100%" stopColor="#082f49" />
          </linearGradient>

          <linearGradient id="brightHighlight" x1="20%" y1="20%" x2="80%" y2="80%">
            <stop offset="0%" stopColor="#a5f3fc" />
            <stop offset="50%" stopColor="#38bdf8" />
            <stop offset="100%" stopColor="#0284c7" />
          </linearGradient>

          <filter id="brushTexture" x="-10%" y="-10%" width="120%" height="120%">
            <feTurbulence type="fractalNoise" baseFrequency="0.04 0.09" numOctaves="3" result="noise" />
            <feDisplacementMap in="SourceGraphic" in2="noise" scale="12" xChannelSelector="R" yChannelSelector="G" />
          </filter>

          <filter id="splatterGlow">
            <feGaussianBlur stdDeviation="3" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Deep dark royal blue base strokes */}
        <g opacity="0.9" filter="url(#brushTexture)">
          <path
            d="M 140,360 C 180,240 280,210 420,230 C 560,250 670,290 710,390 C 740,460 690,540 550,560 C 390,580 240,560 160,510 C 110,480 110,420 140,360 Z"
            fill="url(#cyanPaint2)"
          />
          <path
            d="M 210,270 C 310,200 490,190 610,240 C 690,280 730,360 670,440 C 600,520 440,510 320,490 C 210,470 160,370 210,270 Z"
            fill="#0369a1"
            opacity="0.8"
          />
        </g>

        {/* Main electric cyan vibrant brush strokes */}
        <g filter="url(#brushTexture)">
          {/* Broad diagonal stroke from upper left to right */}
          <path
            d="M 120,380 C 160,300 240,240 370,260 C 490,280 610,260 680,310 C 730,345 740,410 690,460 C 620,530 480,510 360,520 C 230,530 140,490 110,440 C 95,415 105,395 120,380 Z"
            fill="url(#cyanPaint1)"
          />

          {/* Upper left sweeping stroke */}
          <path
            d="M 90,320 C 140,260 260,210 390,240 C 460,255 520,270 480,330 C 430,400 300,380 200,390 C 130,400 70,360 90,320 Z"
            fill="url(#brightHighlight)"
            opacity="0.9"
          />

          {/* Right wing splatter stroke */}
          <path
            d="M 430,230 C 530,210 650,220 730,280 C 770,320 780,390 730,440 C 680,480 600,470 540,440 C 480,410 470,310 430,230 Z"
            fill="url(#cyanPaint1)"
            opacity="0.85"
          />

          {/* Foreground bright cyan highlights */}
          <path
            d="M 180,330 C 250,280 380,270 500,300 C 600,320 650,370 590,410 C 510,460 380,430 270,440 C 190,450 150,390 180,330 Z"
            fill="url(#brightHighlight)"
            opacity="0.95"
          />
        </g>

        {/* Textured rough brush edges & paint bristles */}
        <g stroke="url(#brightHighlight)" strokeLinecap="round" opacity="0.85">
          <line x1="80" y1="360" x2="220" y2="280" strokeWidth="6" />
          <line x1="95" y1="390" x2="260" y2="310" strokeWidth="4" />
          <line x1="60" y1="410" x2="190" y2="380" strokeWidth="5" />
          <line x1="110" y1="330" x2="240" y2="240" strokeWidth="3" />
          <line x1="140" y1="290" x2="310" y2="220" strokeWidth="7" />
          <line x1="160" y1="260" x2="350" y2="200" strokeWidth="4" />

          {/* Right bristles */}
          <line x1="620" y1="270" x2="750" y2="330" strokeWidth="6" />
          <line x1="650" y1="300" x2="780" y2="380" strokeWidth="5" />
          <line x1="590" y1="240" x2="730" y2="290" strokeWidth="7" />
          <line x1="640" y1="380" x2="770" y2="440" strokeWidth="4" />
          <line x1="600" y1="430" x2="740" y2="470" strokeWidth="5" />
          <line x1="560" y1="480" x2="700" y2="520" strokeWidth="3" />
        </g>

        {/* Dynamic paint droplets and splatters (left side) */}
        <g fill="#00d2ff" filter="url(#splatterGlow)">
          <circle cx="70" cy="310" r="5" />
          <circle cx="50" cy="350" r="3.5" />
          <circle cx="40" cy="390" r="6" />
          <circle cx="65" cy="430" r="4" />
          <circle cx="85" cy="470" r="3" />
          <circle cx="110" cy="240" r="5" />
          <circle cx="130" cy="210" r="4" />
          <circle cx="160" cy="180" r="3" />
          <circle cx="190" cy="160" r="4.5" />
          <circle cx="230" cy="170" r="3" />
          <circle cx="280" cy="150" r="5" />

          {/* Tiny spray particles */}
          <circle cx="35" cy="330" r="2" opacity="0.8" />
          <circle cx="25" cy="370" r="2.5" opacity="0.7" />
          <circle cx="45" cy="410" r="1.5" opacity="0.9" />
          <circle cx="85" cy="270" r="2" opacity="0.8" />
          <circle cx="145" cy="160" r="2.5" opacity="0.8" />
          <circle cx="175" cy="140" r="1.5" opacity="0.6" />
          <circle cx="220" cy="130" r="2" opacity="0.7" />
          <circle cx="250" cy="140" r="1.5" opacity="0.6" />
        </g>

        {/* Dynamic paint droplets and splatters (right side) */}
        <g fill="#38bdf8" filter="url(#splatterGlow)">
          <circle cx="730" cy="250" r="4" />
          <circle cx="760" cy="290" r="5.5" />
          <circle cx="790" cy="340" r="4" />
          <circle cx="770" cy="400" r="6" />
          <circle cx="750" cy="460" r="3.5" />
          <circle cx="720" cy="510" r="5" />
          <circle cx="680" cy="540" r="3" />
          <circle cx="650" cy="570" r="4.5" />
          <circle cx="580" cy="590" r="3" />

          {/* Tiny spray particles */}
          <circle cx="740" cy="220" r="2" opacity="0.8" />
          <circle cx="780" cy="270" r="2.5" opacity="0.7" />
          <circle cx="810" cy="330" r="1.8" opacity="0.8" />
          <circle cx="795" cy="380" r="2.2" opacity="0.9" />
          <circle cx="765" cy="430" r="1.5" opacity="0.7" />
          <circle cx="740" cy="490" r="2" opacity="0.8" />
          <circle cx="700" cy="550" r="2.5" opacity="0.7" />
          <circle cx="630" cy="610" r="1.8" opacity="0.6" />
        </g>

        {/* Organic drip splashes */}
        <g fill="url(#cyanPaint1)">
          <path d="M 60,390 C 45,395 35,420 50,425 C 65,430 70,405 60,390 Z" />
          <path d="M 120,230 C 110,220 95,235 105,245 C 115,255 130,240 120,230 Z" />
          <path d="M 760,300 C 775,295 785,315 775,325 C 765,335 750,310 760,300 Z" />
          <path d="M 740,430 C 755,435 755,455 740,455 C 725,455 725,435 740,430 Z" />
        </g>
      </svg>
    </div>
  );
}
