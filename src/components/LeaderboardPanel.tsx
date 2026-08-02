import React, { useState } from 'react';
import {
  Trophy,
  Award,
  Zap,
  Flame,
  Star,
  Target,
  Sparkles,
  TrendingUp,
  ShieldCheck,
  Crown,
  Medal,
  Users,
  ChevronRight,
  CheckCircle2,
  Lock,
  Layers
} from 'lucide-react';
import { UserProfile, Badge, Milestone } from '../types';

export interface LeaderboardUser {
  rank: number;
  id: string;
  name: string;
  avatarUrl: string;
  role: string;
  xpPoints: number;
  level: number;
  streakDays: number;
  badgesCount: number;
  topSkill: string;
  isCurrentUser?: boolean;
}

interface LeaderboardPanelProps {
  user: UserProfile;
}

export const LeaderboardPanel: React.FC<LeaderboardPanelProps> = ({ user }) => {
  const [timeframe, setTimeframe] = useState<'weekly' | 'monthly' | 'allTime'>('weekly');
  const [activeTab, setActiveTab] = useState<'leaderboard' | 'badges' | 'pointsSystem'>('leaderboard');

  // Academy Leaderboard Data
  const leaderboardUsers: LeaderboardUser[] = [
    {
      rank: 1,
      id: 'usr-1',
      name: 'Dr. Elena Rostova',
      avatarUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&auto=format&fit=crop',
      role: 'Graduate Researcher',
      xpPoints: 4850,
      level: 5,
      streakDays: 28,
      badgesCount: 12,
      topSkill: 'Distributed Consensus'
    },
    {
      rank: 2,
      id: 'usr-2',
      name: 'David Chen',
      avatarUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop',
      role: 'AI Engineer',
      xpPoints: 4120,
      level: 4,
      streakDays: 21,
      badgesCount: 9,
      topSkill: 'WebGPU Compute Shaders'
    },
    {
      rank: 3,
      id: 'usr-3',
      name: user.name || 'Alex Mercer',
      avatarUrl: user.avatarUrl || 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop',
      role: 'Scholar (You)',
      xpPoints: user.xpPoints || 2710,
      level: user.level || 3,
      streakDays: user.streakDays || 14,
      badgesCount: (user.badges || []).length || 6,
      topSkill: 'Agentic Architect',
      isCurrentUser: true
    },
    {
      rank: 4,
      id: 'usr-4',
      name: 'Prof. Marcus Vance',
      avatarUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop',
      role: 'Lead Chair',
      xpPoints: 2450,
      level: 3,
      streakDays: 12,
      badgesCount: 8,
      topSkill: 'Fault Tolerance'
    },
    {
      rank: 5,
      id: 'usr-5',
      name: 'Sarah Jenkins',
      avatarUrl: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150&auto=format&fit=crop',
      role: 'Student',
      xpPoints: 1980,
      level: 2,
      streakDays: 9,
      badgesCount: 5,
      topSkill: 'Quantum Computing'
    }
  ];

  // Badges Data
  const allBadges: Badge[] = [
    {
      id: 'b1',
      name: 'AI Architect',
      icon: '🤖',
      description: 'Mastered 3 Gemini & Edge Agentic Course Modules',
      category: 'ai',
      dateUnlocked: 'Unlocked'
    },
    {
      id: 'b2',
      name: '14-Day Streak Master',
      icon: '🔥',
      description: 'Maintained 14 consecutive days of active academic study',
      category: 'streak',
      dateUnlocked: 'Unlocked'
    },
    {
      id: 'b3',
      name: 'Consensus Defender',
      icon: '🛡️',
      description: 'Achieved 100% quiz score on Raft & Paxos Distributed Systems',
      category: 'mastery',
      dateUnlocked: 'Unlocked'
    },
    {
      id: 'b4',
      name: 'WebGPU Shader Expert',
      icon: '⚡',
      description: 'Executed client WGSL compute shader matrix evaluation',
      category: 'learning',
      dateUnlocked: 'In Progress (80%)'
    },
    {
      id: 'b5',
      name: 'Socratic Scholar',
      icon: '🎓',
      description: 'Asked 20 pedagogical questions in the AI Tutor & Q&A Portal',
      category: 'ai',
      dateUnlocked: 'Locked'
    },
    {
      id: 'b6',
      name: 'Peer Forum Legend',
      icon: '💬',
      description: 'Received 50 upvotes on course discussion forum answers',
      category: 'mastery',
      dateUnlocked: 'Locked'
    }
  ];

  return (
    <div className="rounded-3xl bg-[#0c1a24] border border-[#1b3b4a] p-6 md:p-8 space-y-6 text-white shadow-2xl">
      {/* Top Banner */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-[#183646] pb-6">
        <div>
          <div className="flex items-center gap-2">
            <span className="px-3 py-1 rounded-full bg-amber-500/15 border border-amber-500/30 text-amber-300 text-xs font-bold uppercase tracking-wider flex items-center gap-1.5">
              <Trophy className="w-3.5 h-3.5 text-amber-400" />
              Academic Gamification Hub
            </span>
            <span className="text-xs text-[#789cae]">XP Leaderboard & Mastery Badges</span>
          </div>
          <h2 className="text-xl md:text-2xl font-black text-white mt-1">
            Global Scholar Leaderboard & Skill Badges
          </h2>
        </div>

        {/* User Rank Quick Card */}
        <div className="p-3.5 rounded-2xl bg-[#08151c] border border-amber-500/30 flex items-center gap-4 shadow-lg">
          <div className="p-2.5 rounded-xl bg-amber-500/10 text-amber-400 shrink-0">
            <Crown className="w-6 h-6" />
          </div>
          <div>
            <div className="text-[10px] text-[#789cae] uppercase font-bold">Your Academy Rank</div>
            <div className="text-base font-black text-white flex items-center gap-2">
              <span>Rank #3</span>
              <span className="text-xs font-semibold text-amber-300 font-mono">
                ({user.xpPoints || 2710} XP)
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#183646] pb-4">
        <div className="flex items-center gap-2">
          <button
            onClick={() => setActiveTab('leaderboard')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-2 ${
              activeTab === 'leaderboard'
                ? 'bg-amber-400 text-slate-950 font-black shadow'
                : 'bg-[#08151c] text-[#789cae] border border-[#1b3b4a] hover:text-white'
            }`}
          >
            <Trophy className="w-4 h-4" />
            <span>Leaderboard</span>
          </button>

          <button
            onClick={() => setActiveTab('badges')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-2 ${
              activeTab === 'badges'
                ? 'bg-cyan-500 text-slate-950 font-black shadow'
                : 'bg-[#08151c] text-[#789cae] border border-[#1b3b4a] hover:text-white'
            }`}
          >
            <Award className="w-4 h-4" />
            <span>Mastery Badges ({allBadges.length})</span>
          </button>

          <button
            onClick={() => setActiveTab('pointsSystem')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-2 ${
              activeTab === 'pointsSystem'
                ? 'bg-emerald-400 text-slate-950 font-black shadow'
                : 'bg-[#08151c] text-[#789cae] border border-[#1b3b4a] hover:text-white'
            }`}
          >
            <Zap className="w-4 h-4" />
            <span>Point System Rules</span>
          </button>
        </div>

        {/* Timeframe Selector for Leaderboard */}
        {activeTab === 'leaderboard' && (
          <div className="flex items-center gap-1 bg-[#08151c] p-1 rounded-xl border border-[#1b3b4a]">
            {(['weekly', 'monthly', 'allTime'] as const).map((tf) => (
              <button
                key={tf}
                onClick={() => setTimeframe(tf)}
                className={`px-3 py-1 rounded-lg text-xs font-bold capitalize transition-all ${
                  timeframe === tf
                    ? 'bg-amber-400 text-slate-950 font-black shadow'
                    : 'text-[#789cae] hover:text-white'
                }`}
              >
                {tf === 'allTime' ? 'All-Time' : tf}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* TAB 1: LEADERBOARD */}
      {activeTab === 'leaderboard' && (
        <div className="space-y-4">
          <div className="space-y-2.5">
            {leaderboardUsers.map((u) => {
              const isTop3 = u.rank <= 3;
              return (
                <div
                  key={u.id}
                  className={`p-4 rounded-2xl border transition-all flex items-center justify-between gap-4 shadow-lg ${
                    u.isCurrentUser
                      ? 'bg-gradient-to-r from-[#0e2736] to-[#0a1f2b] border-cyan-400 ring-1 ring-cyan-400/40'
                      : isTop3
                      ? 'bg-[#081720] border-amber-500/30'
                      : 'bg-[#08151c] border-[#1b3b4a]'
                  }`}
                >
                  <div className="flex items-center gap-4">
                    {/* Rank Badge */}
                    <div
                      className={`w-9 h-9 rounded-xl flex items-center justify-center font-black text-sm shrink-0 ${
                        u.rank === 1
                          ? 'bg-amber-400 text-slate-950 shadow-lg shadow-amber-500/40'
                          : u.rank === 2
                          ? 'bg-slate-300 text-slate-950 shadow-md'
                          : u.rank === 3
                          ? 'bg-amber-700 text-white'
                          : 'bg-[#122a36] text-[#789cae]'
                      }`}
                    >
                      {u.rank === 1 ? <Crown className="w-5 h-5 fill-current" /> : `#${u.rank}`}
                    </div>

                    {/* Avatar & User Details */}
                    <div className="flex items-center gap-3">
                      <img
                        src={u.avatarUrl}
                        alt={u.name}
                        referrerPolicy="no-referrer"
                        className="w-10 h-10 rounded-xl object-cover border border-cyan-400/40 shrink-0"
                      />
                      <div>
                        <h3 className="font-bold text-sm text-white flex items-center gap-2">
                          <span>{u.name}</span>
                          {u.isCurrentUser && (
                            <span className="px-2 py-0.2 rounded bg-cyan-500/20 text-cyan-300 text-[10px] font-bold border border-cyan-500/30">
                              YOU
                            </span>
                          )}
                        </h3>
                        <div className="text-[11px] text-[#789cae] flex items-center gap-2">
                          <span>{u.role}</span>
                          <span>•</span>
                          <span className="text-cyan-300 font-medium">Top: {u.topSkill}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* XP & Stats Right */}
                  <div className="flex items-center gap-6 text-right">
                    <div className="hidden sm:block">
                      <div className="text-xs font-bold text-rose-400 flex items-center gap-1 justify-end">
                        <Flame className="w-3.5 h-3.5 fill-current" />
                        <span>{u.streakDays} Days</span>
                      </div>
                      <div className="text-[10px] text-[#789cae]">Study Streak</div>
                    </div>

                    <div className="hidden sm:block">
                      <div className="text-xs font-bold text-cyan-300 flex items-center gap-1 justify-end">
                        <Award className="w-3.5 h-3.5" />
                        <span>{u.badgesCount} Badges</span>
                      </div>
                      <div className="text-[10px] text-[#789cae]">Unlocked</div>
                    </div>

                    <div className="bg-[#051117] border border-[#183a4c] px-4 py-2 rounded-xl text-center shrink-0">
                      <div className="text-sm font-black text-amber-300 font-mono">
                        {u.xpPoints.toLocaleString()} XP
                      </div>
                      <div className="text-[9px] text-[#638799] uppercase font-bold">Level {u.level}</div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* TAB 2: MASTERY BADGES LOCKER */}
      {activeTab === 'badges' && (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {allBadges.map((badge) => {
            const isUnlocked = badge.dateUnlocked === 'Unlocked';
            return (
              <div
                key={badge.id}
                className={`p-5 rounded-2xl border space-y-3 flex flex-col justify-between transition-all shadow-lg ${
                  isUnlocked
                    ? 'bg-[#081720] border-amber-500/40 hover:border-amber-400'
                    : 'bg-[#08151c] border-[#1b3b4a] opacity-75'
                }`}
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-3xl">{badge.icon}</span>
                    <span
                      className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold border ${
                        isUnlocked
                          ? 'bg-amber-500/20 text-amber-300 border-amber-500/40'
                          : 'bg-slate-800 text-slate-400 border-slate-700'
                      }`}
                    >
                      {badge.dateUnlocked}
                    </span>
                  </div>

                  <h3 className="font-bold text-sm text-white">{badge.name}</h3>
                  <p className="text-xs text-[#789cae] leading-relaxed">{badge.description}</p>
                </div>

                <div className="pt-2 border-t border-[#183646] flex items-center justify-between text-[11px] text-cyan-300">
                  <span className="capitalize font-mono">Category: {badge.category}</span>
                  {isUnlocked ? (
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  ) : (
                    <Lock className="w-4 h-4 text-slate-500" />
                  )}
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* TAB 3: POINT SYSTEM RULES */}
      {activeTab === 'pointsSystem' && (
        <div className="space-y-4">
          <div className="p-6 rounded-2xl bg-[#08151c] border border-[#1b3b4a] space-y-4">
            <h3 className="text-base font-bold text-white flex items-center gap-2">
              <Zap className="w-5 h-5 text-amber-400 fill-amber-400" />
              <span>How Points (XP) & Skill Mastery Work</span>
            </h3>

            <p className="text-xs text-[#789cae] leading-relaxed">
              Earn XP points by actively learning, passing adaptive quizzes, participating in social study forums, and maintaining daily study streaks. Higher XP unlocks scholar levels and badges!
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-[#0c1f2a] border border-[#1b3b4a] space-y-1 text-center">
                <div className="text-lg font-black text-cyan-300">+100 XP</div>
                <div className="text-xs font-bold text-white">Complete Lesson</div>
                <div className="text-[10px] text-[#6d91a2]">Finish reading & listening</div>
              </div>

              <div className="p-4 rounded-xl bg-[#0c1f2a] border border-[#1b3b4a] space-y-1 text-center">
                <div className="text-lg font-black text-emerald-300">+50 XP</div>
                <div className="text-xs font-bold text-white">Pass Quiz</div>
                <div className="text-[10px] text-[#6d91a2]">Per correct adaptive question</div>
              </div>

              <div className="p-4 rounded-xl bg-[#0c1f2a] border border-[#1b3b4a] space-y-1 text-center">
                <div className="text-lg font-black text-purple-300">+30 XP</div>
                <div className="text-xs font-bold text-white">Ask / Reply Q&A</div>
                <div className="text-[10px] text-[#6d91a2]">In course discussion forums</div>
              </div>

              <div className="p-4 rounded-xl bg-[#0c1f2a] border border-[#1b3b4a] space-y-1 text-center">
                <div className="text-lg font-black text-rose-400">+20 XP</div>
                <div className="text-xs font-bold text-white">Daily Streak</div>
                <div className="text-[10px] text-[#6d91a2]">Daily study goal check-in</div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
