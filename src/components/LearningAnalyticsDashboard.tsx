import React, { useState } from 'react';
import { UserProfile } from '../types';
import {
  AreaChart,
  Area,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend
} from 'recharts';
import {
  TrendingUp,
  Clock,
  Award,
  BookOpen,
  Calendar,
  Sparkles,
  Zap,
  Target,
  CheckCircle2,
  ArrowUpRight
} from 'lucide-react';

interface LearningAnalyticsDashboardProps {
  user: UserProfile;
  onNavigateTab?: (tab: string) => void;
}

const XP_GROWTH_DATA = [
  { date: 'Mon', xp: 220, focus: 35 },
  { date: 'Tue', xp: 340, focus: 45 },
  { date: 'Wed', xp: 480, focus: 60 },
  { date: 'Thu', xp: 610, focus: 50 },
  { date: 'Fri', xp: 850, focus: 90 },
  { date: 'Sat', xp: 1100, focus: 110 },
  { date: 'Sun', xp: 1450, focus: 125 },
];

const COURSE_PROGRESS_DATA = [
  { name: 'Computer Science (B.Sc)', completion: 68, color: '#22d3ee' },
  { name: 'Quantum Machine Learning', completion: 42, color: '#38bdf8' },
  { name: 'Neural Networks & Deep AI', completion: 85, color: '#34d399' },
  { name: 'Cloud Architecture & DevOps', completion: 30, color: '#f59e0b' },
];

const SKILL_MASTERY_DATA = [
  { subject: 'AI & ML', score: 88, fill: '#22d3ee' },
  { subject: 'Algorithms', score: 75, fill: '#34d399' },
  { subject: 'Systems', score: 62, fill: '#f59e0b' },
  { subject: 'Mathematics', score: 80, fill: '#a855f7' },
];

export const LearningAnalyticsDashboard: React.FC<LearningAnalyticsDashboardProps> = ({ user, onNavigateTab }) => {
  const [timeRange, setTimeRange] = useState<'week' | 'month' | 'year'>('week');

  const COLORS = ['#22d3ee', '#34d399', '#f59e0b', '#a855f7'];

  return (
    <div className="space-y-6 animate-fade-in pb-12">
      {/* Header Banner */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-[#0e212b] via-[#102733] to-[#09151c] border border-[#1e3e4f] p-6 md:p-8 shadow-2xl">
        <div className="absolute top-0 right-0 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-2 max-w-xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-xs font-bold">
              <TrendingUp className="w-3.5 h-3.5 text-cyan-400" />
              <span>Real-Time Learning Telemetry</span>
            </div>
            <h1 className="text-2xl md:text-3xl font-extrabold text-white tracking-tight">
              Learning Analytics & Performance Studio
            </h1>
            <p className="text-sm text-[#82a3b2]">
              Track your XP velocity, daily focus metrics, and skill mastery milestones across accredited degree tracks.
            </p>
          </div>

          <div className="flex items-center gap-2 p-1.5 rounded-2xl bg-[#061217] border border-[#163445]">
            {(['week', 'month', 'year'] as const).map((range) => (
              <button
                key={range}
                onClick={() => setTimeRange(range)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-bold capitalize transition-all ${
                  timeRange === range
                    ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 shadow-sm'
                    : 'text-[#7193a2] hover:text-white'
                }`}
              >
                {range}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Metric Cards Row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="p-5 rounded-2xl bg-[#0e212b] border border-[#1e3e4f] space-y-2 relative overflow-hidden">
          <div className="flex items-center justify-between text-[#82a3b2]">
            <span className="text-xs font-semibold uppercase tracking-wider">Total Experience</span>
            <div className="p-2 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-400">
              <Zap className="w-4 h-4" />
            </div>
          </div>
          <div className="text-2xl font-black text-white">{user.xp || 1450} <span className="text-xs text-amber-400 font-normal">XP</span></div>
          <p className="text-[11px] text-[#7193a2] flex items-center gap-1">
            <span className="text-emerald-400 font-bold">+18%</span> from last week
          </p>
        </div>

        <div className="p-5 rounded-2xl bg-[#0e212b] border border-[#1e3e4f] space-y-2 relative overflow-hidden">
          <div className="flex items-center justify-between text-[#82a3b2]">
            <span className="text-xs font-semibold uppercase tracking-wider">Total Focus Time</span>
            <div className="p-2 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400">
              <Clock className="w-4 h-4" />
            </div>
          </div>
          <div className="text-2xl font-black text-white">{user.totalFocusMinutes || 125} <span className="text-xs text-cyan-400 font-normal">mins</span></div>
          <p className="text-[11px] text-[#7193a2] flex items-center gap-1">
            <span className="text-emerald-400 font-bold">5 Pomodoro</span> sessions completed
          </p>
        </div>

        <div className="p-5 rounded-2xl bg-[#0e212b] border border-[#1e3e4f] space-y-2 relative overflow-hidden">
          <div className="flex items-center justify-between text-[#82a3b2]">
            <span className="text-xs font-semibold uppercase tracking-wider">Current Streak</span>
            <div className="p-2 rounded-xl bg-rose-500/10 border border-rose-500/20 text-rose-400">
              <Sparkles className="w-4 h-4" />
            </div>
          </div>
          <div className="text-2xl font-black text-white">7 <span className="text-xs text-rose-400 font-normal">Days</span></div>
          <p className="text-[11px] text-[#7193a2] flex items-center gap-1">
            <span className="text-emerald-400 font-bold">Active</span> daily learning
          </p>
        </div>

        <div className="p-5 rounded-2xl bg-[#0e212b] border border-[#1e3e4f] space-y-2 relative overflow-hidden">
          <div className="flex items-center justify-between text-[#82a3b2]">
            <span className="text-xs font-semibold uppercase tracking-wider">Academic Level</span>
            <div className="p-2 rounded-xl bg-purple-500/10 border border-purple-500/20 text-purple-400">
              <Award className="w-4 h-4" />
            </div>
          </div>
          <div className="text-2xl font-black text-white">Level {user.level || 2} <span className="text-xs text-purple-400 font-normal">Scholar</span></div>
          <p className="text-[11px] text-[#7193a2] flex items-center gap-1">
            Next Tier at 2,000 XP
          </p>
        </div>
      </div>

      {/* Main Charts Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Chart 1: XP Velocity & Growth */}
        <div className="p-6 rounded-3xl bg-[#0e212b] border border-[#1e3e4f] space-y-4 shadow-xl">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-bold text-white text-base flex items-center gap-2">
                <TrendingUp className="w-4 h-4 text-cyan-400" />
                XP Growth Trajectory
              </h3>
              <p className="text-xs text-[#82a3b2]">Cumulative experience points gained over time</p>
            </div>
            <span className="text-xs font-bold text-cyan-300 bg-cyan-500/10 px-2.5 py-1 rounded-lg border border-cyan-500/20">
              +1,450 XP Total
            </span>
          </div>

          <div className="h-64 w-full pt-4">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={XP_GROWTH_DATA}>
                <defs>
                  <linearGradient id="colorXp" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#22d3ee" stopOpacity={0.4} />
                    <stop offset="95%" stopColor="#22d3ee" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#1b3d4f" />
                <XAxis dataKey="date" stroke="#638797" fontSize={11} />
                <YAxis stroke="#638797" fontSize={11} />
                <Tooltip
                  contentStyle={{
                    backgroundColor: '#09151c',
                    borderColor: '#1d4052',
                    borderRadius: '12px',
                    color: '#fff',
                    fontSize: '12px',
                  }}
                />
                <Area type="monotone" dataKey="xp" stroke="#22d3ee" strokeWidth={3} fillOpacity={1} fill="url(#colorXp)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Chart 2: Daily Focus Minutes */}
        <div className="p-6 rounded-3xl bg-[#0e212b] border border-[#1e3e4f] space-y-4 shadow-xl">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-bold text-white text-base flex items-center gap-2">
                <Clock className="w-4 h-4 text-emerald-400" />
                Daily Focus Hours
              </h3>
              <p className="text-xs text-[#82a3b2]">Focus minutes logged via Pomodoro studio</p>
            </div>
            <span className="text-xs font-bold text-emerald-300 bg-emerald-500/10 px-2.5 py-1 rounded-lg border border-emerald-500/20">
              Avg 45m / day
            </span>
          </div>

          <div className="h-64 w-full pt-4">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={XP_GROWTH_DATA}>
                <CartesianGrid strokeDasharray="3 3" stroke="#1b3d4f" />
                <XAxis dataKey="date" stroke="#638797" fontSize={11} />
                <YAxis stroke="#638797" fontSize={11} />
                <Tooltip
                  contentStyle={{
                    backgroundColor: '#09151c',
                    borderColor: '#1d4052',
                    borderRadius: '12px',
                    color: '#fff',
                    fontSize: '12px',
                  }}
                />
                <Bar dataKey="focus" fill="#34d399" radius={[6, 6, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* Course Completion Breakdown & Skill Radar */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 p-6 rounded-3xl bg-[#0e212b] border border-[#1e3e4f] space-y-4 shadow-xl">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-bold text-white text-base flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-purple-400" />
                Enrolled Pathway Completion Rates
              </h3>
              <p className="text-xs text-[#82a3b2]">Progress percentage across active degree programs</p>
            </div>
            <button
              onClick={() => onNavigateTab && onNavigateTab('catalog')}
              className="text-xs font-semibold text-cyan-300 hover:underline flex items-center gap-1"
            >
              <span>Explore Catalog</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="space-y-3 pt-2">
            {COURSE_PROGRESS_DATA.map((course) => (
              <div key={course.name} className="p-3.5 rounded-2xl bg-[#09151c] border border-[#1a3848] space-y-2">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-bold text-white">{course.name}</span>
                  <span className="font-mono font-bold text-cyan-300">{course.completion}%</span>
                </div>
                <div className="w-full h-2 rounded-full bg-[#102733] overflow-hidden">
                  <div
                    className="h-full rounded-full transition-all duration-1000"
                    style={{ width: `${course.completion}%`, backgroundColor: course.color }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Skill Mastery Breakdown */}
        <div className="p-6 rounded-3xl bg-[#0e212b] border border-[#1e3e4f] space-y-4 shadow-xl flex flex-col justify-between">
          <div>
            <h3 className="font-bold text-white text-base flex items-center gap-2">
              <Target className="w-4 h-4 text-amber-400" />
              Domain Competency Index
            </h3>
            <p className="text-xs text-[#82a3b2]">Mastery rating by academic field</p>

            <div className="space-y-3 pt-4">
              {SKILL_MASTERY_DATA.map((skill) => (
                <div key={skill.subject} className="flex items-center justify-between p-3 rounded-xl bg-[#09151c] border border-[#1a3848]">
                  <span className="text-xs font-medium text-white">{skill.subject}</span>
                  <div className="flex items-center gap-2">
                    <div className="w-20 h-1.5 rounded-full bg-[#102733] overflow-hidden">
                      <div className="h-full rounded-full" style={{ width: `${skill.score}%`, backgroundColor: skill.fill }} />
                    </div>
                    <span className="text-xs font-mono font-bold text-cyan-300">{skill.score}%</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="p-3 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 text-xs text-cyan-300 flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 shrink-0 text-cyan-400" />
            <span>AI Tutor recommends 30m of Systems & Architecture study to balance skills.</span>
          </div>
        </div>
      </div>
    </div>
  );
};
