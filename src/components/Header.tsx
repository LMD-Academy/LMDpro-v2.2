import React, { useState, useRef, useEffect } from 'react';
import { UserProfile, UserRole, LanguageCode, Course } from '../types';
import {
  Search,
  Settings,
  X,
  BookOpen,
  ArrowRight,
  Zap,
  Award,
  Flame,
  CheckCircle2,
  Star,
  Menu,
  LayoutGrid,
  Calculator,
  Globe,
  StickyNote,
  Code2,
  PenTool,
  Clock,
  Cpu,
  HelpCircle,
  Network,
  Database,
  FolderGit2
} from 'lucide-react';
import { getTranslation } from '../services/localization';
import { ToolType } from './ToolModalOverlay';

interface HeaderProps {
  user: UserProfile;
  courses?: Course[];
  onSelectCourse?: (course: Course) => void;
  onRoleChange: (role: UserRole) => void;
  onLanguageChange: (lang: LanguageCode) => void;
  isOffline: boolean;
  onToggleOffline: () => void;
  onOpenCourseGenerator: () => void;
  onOpenAITutor: () => void;
  onOpenClassroomModal: () => void;
  onOpenAgentInspector?: () => void;
  onOpenRagIndexer?: () => void;
  onOpenProfile: () => void;
  onOpenSettings: () => void;
  onOpenSearch: () => void;
  onOpenLegalModal?: () => void;
  activeTab: string;
  setActiveTab: (tab: string) => void;
  onToggleSidebar?: () => void;
  onOpenTool?: (tool: ToolType) => void;
  onOpenQuickKeyModal?: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  user,
  courses = [],
  onSelectCourse,
  onOpenProfile,
  onOpenSettings,
  onToggleSidebar,
  onOpenTool,
  onOpenQuickKeyModal,
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const [showLevelModal, setShowLevelModal] = useState(false);
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);
  const profileDropdownRef = useRef<HTMLDivElement>(null);
  const t = getTranslation(user.language);

  // Auto-complete suggestions logic
  const filteredCourses = searchQuery.trim() === ''
    ? []
    : courses.filter((c) =>
        c.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        c.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (c.tags && c.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase())))
      ).slice(0, 5);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsSearchFocused(false);
      }
      if (profileDropdownRef.current && !profileDropdownRef.current.contains(event.target as Node)) {
        setIsProfileDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleCourseClick = (course: Course) => {
    if (onSelectCourse) {
      onSelectCourse(course);
    }
    setSearchQuery('');
    setIsSearchFocused(false);
  };

  return (
    <header className="sticky top-0 z-30 h-12 bg-[#000000]/98 dark:bg-[#000000]/98 backdrop-blur-xl border-b border-[#1f1f1f] px-2 md:px-5 flex items-center justify-between transition-all gap-3">
      {/* Mobile Hamburger Button */}
      {onToggleSidebar && (
        <button
          onClick={onToggleSidebar}
          className="lg:hidden p-1.5 rounded-xl bg-[#0a0a0a] hover:bg-[#1f1f1f] border border-[#222222] text-cyan-400 hover:text-white flex items-center justify-center w-8 h-8 shadow-sm shrink-0"
          title="Toggle Navigation Menu"
        >
          <Menu className="w-4 h-4" />
        </button>
      )}

      {/* Permanently Expanded Search Bar */}
      <div
        className="relative flex-1 max-w-xl mx-1 md:mx-3 flex items-center"
        ref={searchRef}
      >
        <div className="relative w-full">
          <div className="relative flex items-center">
            <Search className="w-3.5 h-3.5 text-cyan-400/70 absolute left-3 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setIsSearchFocused(true);
              }}
              onFocus={() => setIsSearchFocused(true)}
              placeholder="Search courses, vector cache, skills, research... (Ctrl+K)"
              className="w-full pl-9 pr-8 py-1.5 rounded-xl bg-[#0a0a0a] border border-[#222222] text-xs text-white placeholder-[#777777] focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400/30 transition-all shadow-inner"
            />
            {searchQuery && (
              <button
                onClick={() => {
                  setSearchQuery('');
                  setIsSearchFocused(false);
                }}
                className="absolute right-2.5 text-[#777777] hover:text-white"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>

          {/* Auto-complete Dropdown */}
          {isSearchFocused && filteredCourses.length > 0 && (
            <div className="absolute left-0 top-full mt-1.5 w-full bg-[#0d1f29] border border-[#1b3e50] rounded-2xl shadow-2xl overflow-hidden z-50 animate-fade-in p-1.5 space-y-1">
              <div className="px-3 py-1 text-[10px] font-bold text-cyan-400 uppercase tracking-wider border-b border-[#163647]">
                Matching Courses ({filteredCourses.length})
              </div>
              {filteredCourses.map((course) => (
                <button
                  key={course.id}
                  onClick={() => handleCourseClick(course)}
                  className="w-full text-left p-2 rounded-xl hover:bg-[#163647] flex items-center justify-between gap-2 group transition-all"
                >
                  <div className="flex items-center gap-2.5 overflow-hidden">
                    <div className="w-8 h-8 rounded-lg bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center shrink-0">
                      <BookOpen className="w-4 h-4 text-cyan-300" />
                    </div>
                    <div className="truncate">
                      <div className="text-xs font-bold text-white group-hover:text-cyan-300 transition-colors truncate">
                        {course.title}
                      </div>
                      <div className="text-[10px] text-[#789cae] truncate">
                        {course.category} • {course.level}
                      </div>
                    </div>
                  </div>
                  <ArrowRight className="w-3.5 h-3.5 text-[#527788] group-hover:text-cyan-300 group-hover:translate-x-0.5 transition-all shrink-0" />
                </button>
              ))}
            </div>
          )}

          {isSearchFocused && searchQuery.trim() !== '' && filteredCourses.length === 0 && (
            <div className="absolute left-0 top-full mt-1.5 w-full bg-[#0d1f29] border border-[#1b3e50] rounded-2xl shadow-2xl p-3 z-50 text-center text-xs text-[#6e90a1]">
              No matching courses found for "{searchQuery}".
            </div>
          )}
        </div>
      </div>

      {/* Right Controls Structure: Minimal / Clean as requested */}
      <div className="flex items-center gap-2" role="toolbar" aria-label="Header Tools and Controls">
        {/* Quick-Key Overlay Toggle Button */}
        <button
          onClick={onOpenQuickKeyModal}
          className="flex items-center justify-center w-8 h-8 rounded-xl bg-[#0c1a24] hover:bg-[#163647] border border-[#1b3b4a] text-cyan-300 hover:text-white transition-all shadow-sm"
          title="Quick-Key Keyboard Shortcuts Overlay (?)"
          aria-label="Open Keyboard Shortcuts Overlay"
        >
          <HelpCircle className="w-4 h-4" />
        </button>

        {/* Tools Menu */}
        <div className="relative" ref={profileDropdownRef}>
          <button
            onClick={() => setIsProfileDropdownOpen(!isProfileDropdownOpen)}
            className="flex items-center justify-center w-8 h-8 rounded-xl bg-[#0c1a24] hover:bg-[#163647] border border-[#1b3b4a] transition-all"
            title="Tools Menu"
            aria-label="Open Study Tools Menu"
            aria-haspopup="menu"
            aria-expanded={isProfileDropdownOpen}
          >
            <LayoutGrid className="w-4 h-4 text-cyan-300" />
          </button>
          
          {isProfileDropdownOpen && (
            <div
              className="absolute right-0 top-full mt-2 w-52 bg-[#0d1f29] border border-[#1b3e50] rounded-2xl shadow-2xl overflow-hidden z-50 animate-fade-in p-1.5 space-y-1 text-xs"
              role="menu"
              aria-label="Study Tools Dropdown"
            >
              {[
                { id: 'obsidian', label: 'Knowledge Graph Vault', icon: Network, color: 'text-purple-400' },
                { id: 'office', label: 'Structured Database Connector', icon: Database, color: 'text-blue-400' },
                { id: 'workspace', label: 'Workspace Document Sync', icon: FolderGit2, color: 'text-emerald-400' },
                { id: 'calculator', label: 'Computation Engine', icon: Calculator, color: 'text-cyan-400' },
                { id: 'browser', label: 'Integrated Web Sandbox', icon: Globe, color: 'text-emerald-400' },
                { id: 'notes', label: 'Active Sketchpad', icon: StickyNote, color: 'text-amber-400' },
                { id: 'code', label: 'Interactive Code Compiler', icon: Code2, color: 'text-purple-400' },
                { id: 'whiteboard', label: 'Visual Canvas Board', icon: PenTool, color: 'text-rose-400' },
                { id: 'pomodoro', label: 'Temporal Rhythm Sequencer', icon: Clock, color: 'text-teal-400' },
              ].map((tool) => {
                const IconComp = tool.icon;
                return (
                  <button
                    key={tool.id}
                    role="menuitem"
                    aria-label={`Open ${tool.label} Tool`}
                    onClick={() => {
                      setIsProfileDropdownOpen(false);
                      if (onOpenTool) {
                        onOpenTool(tool.id as ToolType);
                      }
                    }}
                    className="w-full text-left p-2 rounded-xl hover:bg-[#163647] text-white transition-all flex items-center gap-2.5"
                  >
                    <IconComp className={`w-4 h-4 ${tool.color}`} />
                    <span className="font-medium text-xs text-[#d3e5ef]">{tool.label}</span>
                  </button>
                );
              })}
            </div>
          )}
        </div>
      </div>

      {/* Level Breakdown Modal */}
      {showLevelModal && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-md z-50 flex items-center justify-center p-4 animate-fade-in">
          <div className="bg-[#0b1b24] border border-[#1b3e50] rounded-3xl p-6 max-w-md w-full shadow-2xl space-y-6 relative">
            <button
              onClick={() => setShowLevelModal(false)}
              className="absolute top-4 right-4 p-1.5 rounded-xl bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white transition-colors"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-purple-500 to-cyan-500 flex items-center justify-center shadow-lg shadow-cyan-500/20">
                <Award className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">Scholar Level Roadmap</h3>
                <p className="text-xs text-[#789cae]">Current: Level {user.level || 2} • {user.xp || 1450} XP Earned</p>
              </div>
            </div>

            <div className="space-y-3">
              {[
                { level: 1, title: 'Novice Explorer', xpRequired: '0 - 999 XP', current: (user.level || 2) === 1, unlocked: true },
                { level: 2, title: 'Advanced Agentic Scholar', xpRequired: '1,000 - 2,499 XP', current: (user.level || 2) === 2, unlocked: true },
                { level: 3, title: 'Autonomous Master', xpRequired: '2,500 - 4,999 XP', current: (user.level || 2) === 3, unlocked: (user.level || 2) >= 3 },
                { level: 4, title: 'Principal Systems Architect', xpRequired: '5,000+ XP', current: (user.level || 2) >= 4, unlocked: (user.level || 2) >= 4 },
              ].map((lvl) => (
                <div
                  key={lvl.level}
                  className={`p-3.5 rounded-2xl border flex items-center justify-between transition-all ${
                    lvl.current
                      ? 'bg-cyan-500/10 border-cyan-400/50 shadow-md shadow-cyan-500/10'
                      : lvl.unlocked
                      ? 'bg-[#0f2430] border-[#1d4257]'
                      : 'bg-[#061118] border-[#132c3a] opacity-60'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className={`w-8 h-8 rounded-xl flex items-center justify-center font-bold text-xs ${
                      lvl.unlocked ? 'bg-cyan-500 text-black' : 'bg-gray-800 text-gray-400'
                    }`}>
                      {lvl.level}
                    </div>
                    <div>
                      <div className="text-xs font-bold text-white flex items-center gap-1.5">
                        <span>{lvl.title}</span>
                        {lvl.current && <span className="text-[9px] px-1.5 py-0.5 rounded bg-cyan-500/20 text-cyan-300 font-mono">Current</span>}
                      </div>
                      <div className="text-[10px] text-[#789cae]">{lvl.xpRequired}</div>
                    </div>
                  </div>
                  {lvl.unlocked && <CheckCircle2 className="w-4 h-4 text-emerald-400" />}
                </div>
              ))}
            </div>

            <div className="p-3.5 rounded-2xl bg-[#061118] border border-[#163647] flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Flame className="w-4 h-4 text-amber-400" />
                <span className="text-xs text-gray-300 font-medium">Daily Study Streak</span>
              </div>
              <span className="text-xs font-bold text-cyan-300">7 Days Active 🔥</span>
            </div>

            <button
              onClick={() => setShowLevelModal(false)}
              className="w-full py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-teal-500 hover:from-cyan-400 hover:to-teal-400 text-black text-xs font-bold shadow-lg transition-all"
            >
              Close Level Matrix
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
