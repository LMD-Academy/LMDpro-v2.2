import React from 'react';

interface LMDproLogoProps {
  className?: string;
  size?: number;
  onClick?: () => void;
  showText?: boolean;
}

export const LMDproLogo: React.FC<LMDproLogoProps> = ({ className = '', size = 32, onClick, showText = false }) => {
  return (
    <div
      onClick={onClick}
      className={`inline-flex items-center gap-2.5 cursor-pointer select-none group ${className}`}
      title="LMDpro Academic Hub"
    >
      {/* Icon Squircle */}
      <svg
        width={size}
        height={size}
        viewBox="0 0 512 512"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="rounded-xl shadow-md transition-transform duration-200 group-hover:scale-105 shrink-0"
      >
        <defs>
          <linearGradient id="lmdpro-accent-grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#22d3ee" />
            <stop offset="50%" stopColor="#34d399" />
            <stop offset="100%" stopColor="#f59e0b" />
          </linearGradient>
          <radialGradient id="liquid-glow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#1b3b4a" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#08151c" stopOpacity="1" />
          </radialGradient>
        </defs>
        
        {/* Background Dark Liquid Glass Base */}
        <rect width="512" height="512" rx="140" fill="url(#liquid-glow)" stroke="url(#lmdpro-accent-grad)" strokeWidth="16" />
        
        {/* Intricate Geometric Lines Design representing degrees image header design language */}
        <g stroke="#22d3ee" strokeWidth="6" strokeLinecap="round" opacity="0.4">
          <circle cx="256" cy="256" r="180" strokeDasharray="12 12" />
          <circle cx="256" cy="256" r="120" />
          <line x1="76" y1="256" x2="436" y2="256" />
          <line x1="256" y1="76" x2="256" y2="436" />
          <line x1="128" y1="128" x2="384" y2="384" strokeWidth="3" />
          <line x1="128" y1="384" x2="384" y2="128" strokeWidth="3" />
        </g>

        {/* Dynamic Inner core */}
        <circle cx="256" cy="256" r="40" fill="url(#lmdpro-accent-grad)" />
      </svg>

      {showText && (
        <div className="flex flex-col">
          <span className="text-sm font-black tracking-widest text-white uppercase font-sans">
            LMD<span className="text-cyan-400">pro</span>
          </span>
          <span className="text-[9px] text-emerald-400 font-bold tracking-wider uppercase font-mono">
            ZALAMATI CORE
          </span>
        </div>
      )}
    </div>
  );
};
