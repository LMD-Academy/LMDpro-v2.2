import React, { useState, useEffect } from 'react';
import { Target, Plus, CheckCircle2 } from 'lucide-react';

export const DailyGoalsWidget: React.FC = () => {
  const [goal, setGoal] = useState(4); // hours
  const [progress, setProgress] = useState(2.5); // hours

  const percent = Math.min((progress / goal) * 100, 100);

  return (
    <div className="p-6 rounded-3xl bg-[#08151c] border border-[#1b3b4a] shadow-inner space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="font-bold text-sm text-white flex items-center gap-2">
          <Target className="w-4 h-4 text-amber-400" />
          Daily Learning Goal
        </h3>
        <span className="text-xs text-[#789cae]">{progress} / {goal} hrs</span>
      </div>

      <div className="h-3 rounded-full bg-[#040e13] overflow-hidden border border-[#1b3b4a]">
        <div
          className="h-full bg-gradient-to-r from-amber-400 to-amber-600 transition-all duration-500"
          style={{ width: `${percent}%` }}
        />
      </div>

      <button className="w-full py-2 rounded-xl bg-[#0c202d] hover:bg-[#153447] text-amber-300 border border-amber-500/30 text-xs font-bold flex items-center justify-center gap-2 transition-all">
        <Plus className="w-3.5 h-3.5" />
        Adjust Daily Objective
      </button>
    </div>
  );
};
