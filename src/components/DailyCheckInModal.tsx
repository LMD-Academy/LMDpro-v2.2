import React, { useState } from 'react';
import { Target, Sparkles, CheckCircle, Zap, Clock, BookOpen, X } from 'lucide-react';
import { UserProfile } from '../types';

interface DailyCheckInModalProps {
  isOpen: boolean;
  onClose: () => void;
  user: UserProfile;
  onSaveGoal: (goalText: string, targetXp: number) => void;
}

const SUGGESTED_GOALS = [
  { text: 'Complete 2 lessons in Artificial Intelligence', icon: BookOpen, targetXp: 100 },
  { text: '45 minutes of Deep Focus in Pomodoro Studio', icon: Clock, targetXp: 150 },
  { text: 'Solve 3 Socratic coding exercises in Workbench', icon: Zap, targetXp: 120 },
  { text: 'Review Quantum Machine Learning course notes', icon: Target, targetXp: 80 },
];

export const DailyCheckInModal: React.FC<DailyCheckInModalProps> = ({
  isOpen,
  onClose,
  user,
  onSaveGoal
}) => {
  const [customGoal, setCustomGoal] = useState('');
  const [selectedGoal, setSelectedGoal] = useState(SUGGESTED_GOALS[0].text);
  const [targetXp, setTargetXp] = useState<number>(100);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const finalGoal = customGoal.trim() || selectedGoal;
    onSaveGoal(finalGoal, targetXp);
    
    // Mark today's date as checked-in
    const todayStr = new Date().toISOString().split('T')[0];
    localStorage.setItem('lmdpro_daily_checkin_date', todayStr);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-fade-in">
      <div className="relative w-full max-w-lg overflow-hidden rounded-3xl bg-gradient-to-b from-[#0e212b] to-[#09151c] border border-[#1e3e4f] shadow-2xl p-6 md:p-8 space-y-6 text-white">
        {/* Top Header */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="p-2.5 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400">
              <Target className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-lg font-bold text-white">Daily Learning Check-In</h2>
              <p className="text-xs text-[#82a3b2]">Welcome back, {user.name}! Set your target for today.</p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl text-[#7193a2] hover:text-white hover:bg-white/10 transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Suggested Goals */}
        <div className="space-y-3">
          <label className="text-xs font-semibold text-[#82a3b2] uppercase tracking-wider block">
            Select Today's Primary Focus
          </label>
          <div className="space-y-2">
            {SUGGESTED_GOALS.map((goal) => {
              const Icon = goal.icon;
              const isSelected = selectedGoal === goal.text && !customGoal;
              return (
                <button
                  type="button"
                  key={goal.text}
                  onClick={() => {
                    setSelectedGoal(goal.text);
                    setTargetXp(goal.targetXp);
                    setCustomGoal('');
                  }}
                  className={`w-full flex items-center justify-between p-3.5 rounded-2xl border text-left text-xs transition-all transform active:scale-98 ${
                    isSelected
                      ? 'bg-cyan-500/15 border-cyan-400 text-white font-semibold shadow-md'
                      : 'bg-[#061217] border-[#163445] text-[#82a3b2] hover:text-white hover:border-[#1d4052]'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <Icon className={`w-4 h-4 ${isSelected ? 'text-cyan-400' : 'text-[#638797]'}`} />
                    <span>{goal.text}</span>
                  </div>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-amber-500/10 text-amber-300 border border-amber-500/20">
                    +{goal.targetXp} XP
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Custom Goal Input */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="text-xs font-semibold text-[#82a3b2] block mb-1">Or write a custom goal:</label>
            <input
              type="text"
              value={customGoal}
              onChange={(e) => setCustomGoal(e.target.value)}
              placeholder="e.g. Master React 19 Server Components"
              className="w-full px-4 py-3 rounded-2xl bg-[#061217] border border-[#163445] text-white text-xs placeholder-[#517282] focus:outline-none focus:border-cyan-400 transition-all"
            />
          </div>

          <button
            type="submit"
            className="w-full py-3.5 px-4 rounded-2xl bg-gradient-to-r from-cyan-500 to-teal-400 hover:brightness-110 text-slate-950 font-extrabold text-xs transition-all shadow-lg shadow-cyan-500/20 flex items-center justify-center gap-2"
          >
            <Sparkles className="w-4 h-4 fill-current" />
            <span>Lock In Today's Goal</span>
          </button>
        </form>
      </div>
    </div>
  );
};
