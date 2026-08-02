import React, { useState } from 'react';
import { UserProfile, UserRole } from '../types';
import {
  ChevronLeft,
  ChevronRight,
  ChevronDown,
  LayoutGrid,
  GraduationCap,
  BookOpen,
  Calendar,
  FolderSync,
  FileText,
  Shield,
  Heart,
  ShieldCheck,
  Users,
  Folder,
  Database,
  BarChart2,
  Award,
  Settings,
  Zap,
  MessageSquare,
  Sparkles,
  Trophy
} from 'lucide-react';
import { LMDproLogo } from './LMDproLogo';

interface SidebarProps {
  isOpen: boolean;
  onToggle: () => void;
  activeTab: string;
  setActiveTab: (tab: string) => void;
  userRole: UserRole;
  onOpenAuthModal: () => void;
  onOpenSettings?: () => void;
  onOpenProfile?: () => void;
  user: UserProfile;
  xpPoints: number;
  level: number;
  onOpenAITutor?: () => void;
  onOpenLegalModal?: () => void;
}

export const Sidebar: React.FC<SidebarProps> = ({
  isOpen,
  onToggle,
  activeTab,
  setActiveTab,
  onOpenSettings,
  onOpenProfile,
  onOpenLegalModal,
  user,
  xpPoints,
  level,
}) => {
  const [clickedId, setClickedId] = useState<string | null>(null);
  const [isLibraryOpen, setIsLibraryOpen] = useState(true);
  const [isResearchOpen, setIsResearchOpen] = useState(true);

  const handleItemClick = (id: string, action?: () => void) => {
    setClickedId(id);
    setTimeout(() => setClickedId(null), 300);
    if (window.innerWidth < 1024 && isOpen) {
      onToggle();
    }
    if (action) {
      action();
    } else {
      setActiveTab(id);
    }
  };

  const handleLogoClick = () => {
    setActiveTab('dashboard');
  };

  const mainItems = [
    {
      id: 'dashboard',
      label: 'Learning Hub',
      icon: LayoutGrid,
      color: 'text-[#2dd4bf]'
    },
    {
      id: 'degrees',
      label: 'Degree Programs',
      icon: GraduationCap,
      color: 'text-[#38bdf8]'
    },
    {
      id: 'catalog',
      label: 'Course Catalog',
      icon: BookOpen,
      color: 'text-[#60a5fa]'
    },
    {
      id: 'planner',
      label: 'Study Schedule',
      icon: Calendar,
      color: 'text-emerald-400 font-semibold'
    },
  ];

  const libraryItems = [
    {
      id: 'social_forums',
      label: 'Social Forums & Q&A',
      icon: MessageSquare,
      color: 'text-purple-300'
    },
    {
      id: 'leaderboard',
      label: 'Leaderboard & Points',
      icon: Trophy,
      color: 'text-amber-400'
    },
    {
      id: 'study_rooms',
      label: 'Study Rooms & Voice',
      icon: Users,
      color: 'text-teal-300'
    },
    {
      id: 'achievements',
      label: 'Badges & Certificates',
      icon: Award,
      color: 'text-amber-300'
    }
  ];

  const researchItems = [
    {
      id: 'knowledge_base',
      label: 'Knowledge Base & Drive',
      icon: FolderSync,
      color: 'text-cyan-300'
    },
    {
      id: 'analytics',
      label: 'Learning Analytics',
      icon: BarChart2,
      color: 'text-purple-300'
    },
    {
      id: 'api_engine',
      label: 'Developer API Engine',
      icon: Database,
      color: 'text-emerald-300'
    }
  ];

  return (
    <>
      {/* Mobile Backdrop Overlay when sidebar is open */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/60 z-30 lg:hidden backdrop-blur-sm transition-opacity"
          onClick={onToggle}
        />
      )}

      {/* Retractable Sidebar */}
      <aside
        className={`fixed top-0 left-0 bottom-0 z-40 bg-[#08151c]/98 dark:bg-[#08151c]/98 backdrop-blur-xl border-r border-[#1b3b4a] transition-all duration-300 flex flex-col ${
          isOpen
            ? 'translate-x-0 w-64 shadow-2xl'
            : '-translate-x-full lg:translate-x-0 lg:w-16'
        }`}
      >
        {/* Top Header Logo & Toggle: Show logo only when expanded (or always on mobile when open) */}
        {isOpen ? (
          <div className="h-14 flex items-center justify-between shrink-0 px-3 border-b border-[#1b3b4a]">
            <LMDproLogo size={28} onClick={handleLogoClick} showText={true} />
            <button
              onClick={onToggle}
              className="p-1 rounded-md bg-[#0c1a24] hover:bg-[#153342] border border-[#1b3b4a] text-[#82a3b2] hover:text-white transition-all transform active:scale-90"
              title="Collapse Sidebar"
            >
              <ChevronLeft className="w-3.5 h-3.5" />
            </button>
          </div>
        ) : (
          <div className="h-14 hidden lg:flex items-center justify-center shrink-0 border-b border-[#1b3b4a]">
            <button
              onClick={onToggle}
              className="p-1.5 rounded-md bg-[#0c1a24] hover:bg-[#153342] border border-[#1b3b4a] text-[#82a3b2] hover:text-white transition-all transform active:scale-90"
              title="Expand Sidebar"
            >
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>
        )}

        {/* Menu Navigation Items */}
        <div className="flex-1 overflow-y-auto py-2 px-2 space-y-3">
          {/* Main Items */}
          <div className="space-y-1">
            {mainItems.map((item) => {
              const isActive = activeTab === item.id;
              const isClicked = clickedId === item.id;
              const Icon = item.icon;

              return (
                <button
                  key={item.id}
                  onClick={() => handleItemClick(item.id)}
                  className={`w-full flex items-center gap-3 px-2.5 py-2 rounded-xl transition-all duration-150 transform active:scale-95 ${
                    isClicked
                      ? 'bg-cyan-500/30 text-cyan-200 border border-cyan-400 scale-95 shadow-[0_0_15px_rgba(34,211,238,0.5)]'
                      : isActive
                      ? 'bg-[#122e3d] text-white font-semibold border border-cyan-500/40 shadow-sm'
                      : 'text-[#82a3b2] hover:text-white hover:bg-white/5'
                  }`}
                  title={item.label}
                >
                  <Icon className={`w-4 h-4 shrink-0 transition-transform ${isClicked ? 'scale-110' : ''} ${item.color}`} />
                  {isOpen && <span className="text-xs truncate flex-1 text-left">{item.label}</span>}
                </button>
              );
            })}
          </div>

          {/* Library Folder Section */}
          <div className="pt-2 border-t border-[#1b3b4a]">
            {isOpen && (
              <button
                onClick={() => setIsLibraryOpen(!isLibraryOpen)}
                className="w-full flex items-center justify-between px-2.5 py-1.5 text-[11px] font-bold text-[#6e92a4] uppercase tracking-wider hover:text-white"
              >
                <div className="flex items-center gap-2">
                  <Folder className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Library</span>
                </div>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform ${isLibraryOpen ? '' : '-rotate-90'}`} />
              </button>
            )}

            {(!isOpen || isLibraryOpen) && (
              <div className={`space-y-1 ${isOpen ? 'mt-1 pl-2' : 'mt-1'}`}>
                {libraryItems.map((item) => {
                  const isActive = activeTab === item.id;
                  const Icon = item.icon;
                  return (
                    <button
                      key={item.id}
                      onClick={() => handleItemClick(item.id)}
                      className={`w-full flex items-center gap-3 px-2.5 py-1.5 rounded-xl transition-all ${
                        isActive ? 'bg-[#122e3d] text-white font-semibold border border-cyan-500/30' : 'text-[#7e9fae] hover:text-white hover:bg-white/5'
                      }`}
                      title={item.label}
                    >
                      <Icon className={`w-3.5 h-3.5 shrink-0 ${item.color}`} />
                      {isOpen && <span className="text-xs truncate text-left">{item.label}</span>}
                    </button>
                  );
                })}
              </div>
            )}
          </div>

          {/* Research Center Folder Section */}
          <div className="pt-2 border-t border-[#1b3b4a]">
            {isOpen && (
              <button
                onClick={() => setIsResearchOpen(!isResearchOpen)}
                className="w-full flex items-center justify-between px-2.5 py-1.5 text-[11px] font-bold text-[#6e92a4] uppercase tracking-wider hover:text-white"
              >
                <div className="flex items-center gap-2">
                  <Database className="w-3.5 h-3.5 text-teal-400" />
                  <span>Research Center</span>
                </div>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform ${isResearchOpen ? '' : '-rotate-90'}`} />
              </button>
            )}

            {(!isOpen || isResearchOpen) && (
              <div className={`space-y-1 ${isOpen ? 'mt-1 pl-2' : 'mt-1'}`}>
                {researchItems.map((item) => {
                  const isActive = activeTab === item.id;
                  const Icon = item.icon;
                  return (
                    <button
                      key={item.id}
                      onClick={() => handleItemClick(item.id)}
                      className={`w-full flex items-center gap-3 px-2.5 py-1.5 rounded-xl transition-all ${
                        isActive ? 'bg-[#122e3d] text-white font-semibold border border-cyan-500/30' : 'text-[#7e9fae] hover:text-white hover:bg-white/5'
                      }`}
                      title={item.label}
                    >
                      <Icon className={`w-3.5 h-3.5 shrink-0 ${item.color}`} />
                      {isOpen && <span className="text-xs truncate text-left">{item.label}</span>}
                    </button>
                  );
                })}
              </div>
            )}
          </div>
        </div>

        {/* Bottom Section: Profile, Settings & Donate */}
        <div className="p-2.5 border-t border-[#1b3b4a] shrink-0 space-y-2 bg-[#08151c]/99">
          {/* User Profile Card with Level & Avatar */}
          <button
            onClick={onOpenProfile}
            className={`w-full flex items-center gap-2.5 p-2 rounded-xl bg-[#0c1a24] hover:bg-[#153342] border border-[#1b3b4a] transition-all group shadow-sm text-left ${
              isOpen ? 'justify-start' : 'justify-center'
            }`}
            title="View Profile & Scholar Level"
          >
            <div className="relative shrink-0">
              <img
                src={user.avatarUrl}
                alt={user.name}
                referrerPolicy="no-referrer"
                className="w-8 h-8 rounded-full border border-cyan-500/30 object-cover group-hover:border-cyan-400 transition-all"
              />
              <span className="absolute -bottom-1 -right-1 px-1 py-0.2 rounded-full bg-cyan-500 text-[9px] font-bold text-black border border-[#0c1a24]">
                L{level || 2}
              </span>
            </div>
            {isOpen && (
              <div className="overflow-hidden flex-1">
                <div className="text-xs font-bold text-white truncate">{user.name}</div>
                <div className="text-[10px] text-amber-300 font-mono flex items-center gap-1">
                  <Zap className="w-2.5 h-2.5 fill-amber-300 text-amber-300 shrink-0" />
                  <span>{xpPoints || 1450} XP</span>
                </div>
              </div>
            )}
          </button>

          <div className="w-full">
            {/* Settings & Keys Button */}
            <button
              onClick={onOpenSettings}
              className={`w-full flex items-center gap-2 p-2.5 rounded-xl bg-[#0c1a24] hover:bg-[#153342] border border-[#1b3b4a] text-white transition-all transform active:scale-95 text-xs justify-center`}
              title="Platform Settings & API Keys"
            >
              <Settings className="w-4 h-4 text-cyan-400 shrink-0" />
              {isOpen && <span className="font-bold truncate text-[11px]">Settings</span>}
            </button>
          </div>

          {/* Very Small Privacy & Terms Links at Bottom */}
          <div className="pt-1 text-center flex items-center justify-center gap-2 text-[10px] text-[#5b7d8d]">
            {isOpen && (
              <>
                <button
                  onClick={() => handleItemClick('legal', onOpenLegalModal)}
                  className="hover:text-cyan-300 transition-colors flex items-center gap-1"
                >
                  <ShieldCheck className="w-3 h-3 text-emerald-400" />
                  <span>Privacy & Terms</span>
                </button>
                <span>•</span>
                <a
                  href="https://lmdpro.app/"
                  target="_self"
                  className="hover:text-cyan-300 transition-colors"
                >
                  lmdpro.app
                </a>
              </>
            )}
          </div>
        </div>
      </aside>
    </>
  );
};
