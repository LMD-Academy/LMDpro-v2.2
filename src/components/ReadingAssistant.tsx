import React, { useState } from 'react';
import { Settings, Maximize2, Minimize2 } from 'lucide-react';
import { ReadingPreferences } from '../types';

interface ReadingAssistantProps {
  preferences: ReadingPreferences;
  onUpdate: (prefs: ReadingPreferences) => void;
}

export const ReadingAssistant: React.FC<ReadingAssistantProps> = ({ preferences, onUpdate }) => {
  const [minimized, setMinimized] = useState(false);

  if (minimized) {
    return (
      <button 
        onClick={() => setMinimized(false)}
        className="fixed bottom-6 right-6 w-3 h-3 rounded-full bg-emerald-500 shadow-xl z-50 hover:scale-150 transition-transform"
      />
    );
  }

  return (
    <div className="fixed bottom-6 right-6 p-3 bg-[#0c1a24] border border-[#1b3b4a] rounded-3xl shadow-2xl z-50 space-y-3 w-48">
      <div className="flex items-center justify-between">
        <h3 className="font-bold text-white text-[10px] flex items-center gap-1.5"><Settings className="w-3.5 h-3.5"/> Assistant</h3>
        <button onClick={() => setMinimized(true)} className="text-[#789cae] hover:text-white"><Minimize2 className="w-3.5 h-3.5"/></button>
      </div>
      <div className="space-y-1">
        <label className="text-[9px] text-[#789cae] uppercase">Font Size</label>
        <select value={preferences.fontSize} onChange={(e) => onUpdate({...preferences, fontSize: e.target.value as any})} className="w-full bg-[#08151c] text-white text-[10px] p-1.5 rounded-lg border border-[#1b3b4a]">
          <option value="small">Small</option>
          <option value="medium">Medium</option>
          <option value="large">Large</option>
        </select>
      </div>
    </div>
  );
};
