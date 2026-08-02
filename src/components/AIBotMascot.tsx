import React, { useState } from 'react';
import { Bot, Sparkles, CheckCircle2, Shield } from 'lucide-react';

interface AIBotMascotProps {
  onSelectMascot?: (mascotId: string) => void;
}

export const AIBotMascot: React.FC<AIBotMascotProps> = ({ onSelectMascot }) => {
  const [selectedBot, setSelectedBot] = useState<string>('nashmi_classic');

  const bots = [
    {
      id: 'nashmi_classic',
      name: 'NASHMI Alpha',
      role: 'Autonomous Study Companion',
      description: 'Spherical Robot Ball wearing the iconic Red/White Jordanian Hatta (Shemagh). Expert in autonomous RAG indexing and quantum learning.',
      color: 'from-red-600 to-cyan-500',
      badge: 'NASHMI • Jordanian Hatta'
    },
    {
      id: 'nashmi_cyber',
      name: 'NASHMI Cyber',
      role: 'Quantitative Trading & Neural Agent',
      description: 'Streamlined spherical chassis with neon red-white Jordanian pattern projection and deep neural sync.',
      color: 'from-cyan-500 to-emerald-500',
      badge: 'Quantum Neural'
    }
  ];

  const handleSelect = (id: string) => {
    setSelectedBot(id);
    if (onSelectMascot) {
      onSelectMascot(id);
    }
  };

  return (
    <div className="p-4 rounded-2xl bg-[#0b1820] border border-cyan-500/30 shadow-xl space-y-4 text-white relative overflow-hidden">
      {/* Background geometric pattern */}
      <div className="absolute right-0 top-0 w-48 h-48 opacity-10 pointer-events-none">
        <svg viewBox="0 0 200 200" className="w-full h-full text-red-500 fill-none stroke-current animate-pulse">
          <circle cx="100" cy="100" r="80" strokeWidth="2" strokeDasharray="10 5" />
          <path d="M40,100 L160,100 M100,40 L100,160" strokeWidth="1.5" />
        </svg>
      </div>

      <div className="flex items-center justify-between border-b border-[#1b3a4a] pb-3 relative z-10">
        <div className="flex items-center gap-2.5">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-red-600/30 to-cyan-500/30 border border-red-500/40 flex items-center justify-center text-red-400 font-bold shadow-lg">
            🤖
          </div>
          <div>
            <h3 className="text-sm font-black flex items-center gap-2">
              <span>NASHMI • Autonomous Robot Mascot</span>
              <span className="px-2 py-0.5 rounded-full bg-red-500/20 text-red-300 text-[10px] border border-red-500/30">Jordanian Hatta</span>
            </h3>
            <p className="text-[11px] text-[#789cae]">Choose your spherical companion for permanent autonomous parse and study sync</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 relative z-10">
        {bots.map((bot) => {
          const isSelected = selectedBot === bot.id;
          return (
            <div
              key={bot.id}
              onClick={() => handleSelect(bot.id)}
              className={`p-4 rounded-xl border transition-all cursor-pointer flex flex-col justify-between ${
                isSelected
                  ? 'bg-[#122e3d] border-cyan-400 shadow-[0_0_20px_rgba(34,211,238,0.25)]'
                  : 'bg-[#061118] border-[#163444] hover:border-cyan-500/50'
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-red-500/20 to-cyan-500/20 border border-red-500/40 flex items-center justify-center text-xl shadow-md relative">
                    🔴⚪
                    <span className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-red-500 animate-ping" />
                  </div>
                  <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${
                    isSelected ? 'bg-cyan-500 text-black' : 'bg-[#1b3a4a] text-cyan-300'
                  }`}>
                    {bot.badge}
                  </span>
                </div>
                <h4 className="text-xs font-bold text-white mb-1">{bot.name}</h4>
                <p className="text-[11px] text-gray-300 mb-2">{bot.description}</p>
              </div>

              <div className="pt-2 border-t border-[#1b3a4a] flex items-center justify-between text-[11px]">
                <span className="text-cyan-400 font-mono">{bot.role}</span>
                {isSelected ? (
                  <span className="flex items-center gap-1 text-emerald-400 font-bold">
                    <CheckCircle2 className="w-3.5 h-3.5" /> Active Companion
                  </span>
                ) : (
                  <span className="text-gray-400 hover:text-white">Select Companion</span>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
