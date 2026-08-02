import React, { useState } from 'react';
import {
  Code2,
  Cpu,
  Brain,
  Globe,
  Database,
  Layers,
  Sparkles,
  BookOpen,
  Zap,
  Terminal,
  ShieldCheck,
  Compass
} from 'lucide-react';

interface ThemedCourseImageProps {
  src?: string;
  alt: string;
  category?: string;
  className?: string;
}

export const ThemedCourseImage: React.FC<ThemedCourseImageProps> = ({
  src,
  alt,
  category = 'Computer Science',
  className = 'w-full h-full object-cover'
}) => {
  const [imageError, setImageError] = useState(false);

  // Map category to a themed vector icon
  const getCategoryIcon = () => {
    const cat = category.toLowerCase();
    if (cat.includes('ai') || cat.includes('machine') || cat.includes('neural')) return Brain;
    if (cat.includes('data') || cat.includes('database')) return Database;
    if (cat.includes('cyber') || cat.includes('security')) return ShieldCheck;
    if (cat.includes('system') || cat.includes('hardware')) return Cpu;
    if (cat.includes('web') || cat.includes('cloud')) return Globe;
    return Code2;
  };

  const IconComponent = getCategoryIcon();

  if (src && !imageError) {
    return (
      <img
        src={src}
        alt={alt}
        referrerPolicy="no-referrer"
        onError={() => setImageError(true)}
        className={className}
      />
    );
  }

  // Fallback to a themed vector artwork matching LMDpro dark slate/cyan/emerald aesthetic
  return (
    <div className={`relative overflow-hidden bg-gradient-to-br from-[#050c11] via-[#091822] to-[#02070a] flex flex-col items-center justify-center p-4 border border-cyan-500/20 ${className}`}>
      
      {/* Decorative background grid and glowing circles */}
      <div className="absolute inset-0 bg-[radial-gradient(#22d3ee_1px,transparent_1px)] [background-size:24px_24px] opacity-10 pointer-events-none" />
      
      {/* Intricate Degrees Header Geometry Lines */}
      <svg className="absolute inset-0 w-full h-full text-cyan-500/10 pointer-events-none" viewBox="0 0 200 120" preserveAspectRatio="none">
        <line x1="0" y1="0" x2="200" y2="120" stroke="currentColor" strokeWidth="0.5" />
        <line x1="200" y1="0" x2="0" y2="120" stroke="currentColor" strokeWidth="0.5" />
        <circle cx="100" cy="60" r="40" stroke="currentColor" strokeWidth="0.5" fill="none" strokeDasharray="3 3" />
        <circle cx="100" cy="60" r="60" stroke="currentColor" strokeWidth="0.5" fill="none" />
        <path d="M 0,20 Q 100,0 200,20" stroke="currentColor" strokeWidth="0.5" fill="none" />
        <path d="M 0,100 Q 100,120 200,100" stroke="currentColor" strokeWidth="0.5" fill="none" />
      </svg>

      <div className="absolute -top-10 -right-10 w-32 h-32 bg-cyan-400/5 rounded-full blur-2xl pointer-events-none" />
      <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-emerald-400/5 rounded-full blur-2xl pointer-events-none" />

      {/* Center Vector Badge */}
      <div className="relative z-10 flex flex-col items-center text-center space-y-2">
        <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-[#22d3ee] via-[#34d399] to-[#f59e0b] p-0.5 shadow-lg shadow-cyan-900/50">
          <div className="w-full h-full bg-[#050c11] rounded-[14px] flex items-center justify-center text-cyan-300">
            <IconComponent className="w-5 h-5" />
          </div>
        </div>
        <span className="text-xs font-extrabold text-white tracking-tight line-clamp-1 px-2">
          {alt}
        </span>
        <span className="text-[9px] font-bold text-cyan-400/80 uppercase tracking-widest font-mono">
          LMDpro Core Pathway
        </span>
      </div>
    </div>
  );
};
