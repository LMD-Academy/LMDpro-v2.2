import React, { useState } from 'react';
import { HelpCircle, X } from 'lucide-react';

export const KeyboardShortcuts: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const shortcuts = [
    { key: 'Ctrl+K', label: 'Search' },
    { key: 'Ctrl+T', label: 'Socratic Tutor' },
    { key: 'Ctrl+S', label: 'Settings' },
    { key: 'Ctrl+L', label: 'Toggle Layout' },
  ];

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-1.5 rounded-full bg-[#1b3b4a]/50 text-[#82a3b2] hover:text-white hover:bg-[#1b3b4a] transition-all"
        title="Keyboard Shortcuts"
      >
        <HelpCircle className="w-4 h-4" />
      </button>

      {isOpen && (
        <div className="absolute bottom-full left-0 mb-2 w-48 bg-[#08151c] border border-[#1b3b4a] rounded-xl shadow-2xl p-3 z-50">
          <div className="flex items-center justify-between mb-2">
            <h4 className="text-[11px] font-bold text-white uppercase tracking-wider">Shortcuts</h4>
            <button onClick={() => setIsOpen(false)} className="text-[#82a3b2] hover:text-white">
              <X className="w-3 h-3" />
            </button>
          </div>
          <div className="space-y-1.5">
            {shortcuts.map((s) => (
              <div key={s.key} className="flex justify-between text-[10px] text-[#82a3b2]">
                <span>{s.label}</span>
                <span className="font-mono text-cyan-300">{s.key}</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
