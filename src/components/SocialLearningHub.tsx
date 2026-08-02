import React, { useState } from 'react';
import {
  MessageSquare,
  Users,
  HelpCircle,
  Plus,
  ThumbsUp,
  MessageCircle,
  CheckCircle2,
  Sparkles,
  Search,
  Filter,
  Send,
  Calendar,
  Clock,
  Video,
  Award,
  BookOpen,
  Share2,
  Tag,
  ChevronRight,
  ExternalLink,
  Zap,
  Radio
} from 'lucide-react';
import { UserProfile, Course } from '../types';
import { ApiService } from '../services/api';

export interface ForumThread {
  id: string;
  courseCode: string;
  courseTitle: string;
  title: string;
  authorName: string;
  authorAvatar: string;
  authorRole: string;
  createdAt: string;
  tags: string[];
  upvotes: number;
  replyCount: number;
  isSolved: boolean;
  content: string;
  replies: {
    id: string;
    authorName: string;
    authorAvatar: string;
    authorRole: string;
    text: string;
    createdAt: string;
    isAiTutor?: boolean;
    upvotes: number;
  }[];
}

export interface VirtualStudyGroup {
  id: string;
  title: string;
  courseCode: string;
  description: string;
  memberCount: number;
  maxMembers: number;
  nextMeetingTime: string;
  targetGoal: string;
  isJoined?: boolean;
  tags: string[];
  members: { name: string; avatar: string; role: string }[];
}

export interface QnAQuestion {
  id: string;
  courseTitle: string;
  questionText: string;
  askedBy: string;
  authorAvatar: string;
  createdAt: string;
  upvotes: number;
  isAnswered: boolean;
  aiAnswer?: {
    text: string;
    confidence: string;
    answeredAt: string;
  };
}

interface SocialLearningHubProps {
  user: UserProfile;
  courses?: Course[];
  onOpenAITutor?: () => void;
}

export const SocialLearningHub: React.FC<SocialLearningHubProps> = ({
  user,
  courses = []
}) => {
  const [activeTab, setActiveTab] = useState<'forums' | 'groups' | 'qna'>('forums');
  const [selectedCourseFilter, setSelectedCourseFilter] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');

  // 1. Forum Threads State
  const [threads, setThreads] = useState<ForumThread[]>([
    {
      id: 'thread-1',
      courseCode: 'CS101',
      courseTitle: 'Distributed Systems',
      title: 'How does Raft handle split-vote scenarios during election timeouts?',
      authorName: 'Alex Mercer',
      authorAvatar: user?.avatarUrl || 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop',
      authorRole: 'Scholar',
      createdAt: '2 hours ago',
      tags: ['Raft', 'Consensus', 'Leader Election'],
      upvotes: 24,
      replyCount: 3,
      isSolved: true,
      content: 'When two candidate nodes request votes simultaneously and split the votes evenly, how does the randomized election timer guarantee eventual leader election without deadlock?',
      replies: [
        {
          id: 'rep-1',
          authorName: 'Zalamati AI Tutor',
          authorAvatar: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=150&auto=format&fit=crop',
          authorRole: 'AI Agent Engine',
          text: 'Raft solves split votes by randomizing election timeouts (typically 150ms-300ms) for each follower node. This ensures one candidate node almost always times out first and requests votes before rivals can restart.',
          createdAt: '1 hour ago',
          isAiTutor: true,
          upvotes: 18
        },
        {
          id: 'rep-2',
          authorName: 'Elena Rostova',
          authorAvatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&auto=format&fit=crop',
          authorRole: 'Graduate Researcher',
          text: 'Exactly! The randomized interval scatters candidate requests across time, preventing repeated split votes.',
          createdAt: '45 mins ago',
          upvotes: 6
        }
      ]
    },
    {
      id: 'thread-2',
      courseCode: 'AI301',
      courseTitle: 'Edge AI Architecture',
      title: 'Optimizing WGSL compute shader buffers for Gemini 3.1 Flash-Lite',
      authorName: 'David Chen',
      authorAvatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop',
      authorRole: 'AI Engineer',
      createdAt: '5 hours ago',
      tags: ['WebGPU', 'WGSL', 'Compute Shaders'],
      upvotes: 15,
      replyCount: 1,
      isSolved: false,
      content: 'What is the optimal workgroup size (64 vs 128) when running matrix multiplication on integrated mobile GPUs?',
      replies: [
        {
          id: 'rep-3',
          authorName: 'Zalamati AI Tutor',
          authorAvatar: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=150&auto=format&fit=crop',
          authorRole: 'AI Agent Engine',
          text: 'For mobile integrated GPUs, workgroup sizes of (8, 8, 1) or (16, 16, 1) providing 64 or 256 threads yield optimal register allocation and cache hits.',
          createdAt: '3 hours ago',
          isAiTutor: true,
          upvotes: 12
        }
      ]
    }
  ]);

  // Selected thread modal state
  const [activeThread, setActiveThread] = useState<ForumThread | null>(null);
  const [replyInput, setReplyInput] = useState('');
  const [showNewThreadModal, setShowNewThreadModal] = useState(false);
  const [newThreadTitle, setNewThreadTitle] = useState('');
  const [newThreadContent, setNewThreadContent] = useState('');
  const [newThreadCourse, setNewThreadCourse] = useState('CS101');

  // 2. Study Groups State
  const [studyGroups, setStudyGroups] = useState<VirtualStudyGroup[]>([
    {
      id: 'grp-1',
      title: 'Distributed Systems Capstone Defense Prep',
      courseCode: 'CS101',
      description: 'Weekly peer review group practicing capstone defense questions on consensus, fault tolerance, and replication.',
      memberCount: 6,
      maxMembers: 10,
      nextMeetingTime: 'Tomorrow @ 4:00 PM EST',
      targetGoal: 'Master Raft & Paxos mathematical proofs',
      isJoined: true,
      tags: ['Capstone', 'Defense', 'Raft'],
      members: [
        { name: user?.name || 'Alex Mercer', avatar: user?.avatarUrl || 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop', role: 'Student' },
        { name: 'Elena Rostova', avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&auto=format&fit=crop', role: 'Group Leader' },
        { name: 'David Chen', avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop', role: 'Member' }
      ]
    },
    {
      id: 'grp-2',
      title: 'AI Multi-Agent Swarms & LangChain Workshop',
      courseCode: 'AI301',
      description: 'Building custom multi-agent execution graphs using Gemini 3.1 Pro and client WebGPU models.',
      memberCount: 8,
      maxMembers: 12,
      nextMeetingTime: 'Friday @ 6:30 PM EST',
      targetGoal: 'Deploy 3 multi-agent swarms',
      isJoined: false,
      tags: ['Multi-Agent', 'Swarms', 'Gemini'],
      members: [
        { name: 'Marcus Vance', avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop', role: 'Instructor' }
      ]
    }
  ]);

  // 3. Q&A Real-time AI State
  const [qnAs, setQnAs] = useState<QnAQuestion[]>([
    {
      id: 'qna-1',
      courseTitle: 'Distributed Systems CS101',
      questionText: 'What is the key structural difference between Raft and Multi-Paxos?',
      askedBy: 'Sarah Jenkins',
      authorAvatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&auto=format&fit=crop',
      createdAt: '1 hour ago',
      upvotes: 19,
      isAnswered: true,
      aiAnswer: {
        text: 'Multi-Paxos permits log entries to be chosen out of order and filled later with no-ops, whereas Raft strictly enforces in-order log entries and stronger leader invariants, making Raft significantly easier to reason about and implement.',
        confidence: '99.4% AI Verified',
        answeredAt: 'Instant Real-Time'
      }
    }
  ]);

  const [qnaInput, setQnaInput] = useState('');
  const [isAskingAi, setIsAskingAi] = useState(false);

  // Ask AI Q&A Handler
  const handleAskQnA = async () => {
    if (!qnaInput.trim()) return;
    setIsAskingAi(true);

    const questionText = qnaInput;
    setQnaInput('');

    try {
      const aiReply = await ApiService.queryAITutor(questionText, 'Social Learning Q&A Portal');

      const newQnA: QnAQuestion = {
        id: `qna-${Date.now()}`,
        courseTitle: 'General Curriculum & AI',
        questionText,
        askedBy: user?.name || 'Alex Mercer',
        authorAvatar: user?.avatarUrl || 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop',
        createdAt: 'Just now',
        upvotes: 1,
        isAnswered: true,
        aiAnswer: {
          text: aiReply,
          confidence: '99.8% Real-Time AI Tutor',
          answeredAt: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        }
      };

      setQnAs((prev) => [newQnA, ...prev]);
    } catch (e) {
      console.warn('Q&A error:', e);
    } finally {
      setIsAskingAi(false);
    }
  };

  const handlePostReply = () => {
    if (!replyInput.trim() || !activeThread) return;

    const newReply = {
      id: `rep-${Date.now()}`,
      authorName: user?.name || 'Alex Mercer',
      authorAvatar: user?.avatarUrl || 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop',
      authorRole: 'Scholar',
      text: replyInput,
      createdAt: 'Just now',
      upvotes: 0
    };

    const updated = {
      ...activeThread,
      replyCount: activeThread.replyCount + 1,
      replies: [...activeThread.replies, newReply]
    };

    setActiveThread(updated);
    setThreads((list) => list.map((t) => (t.id === activeThread.id ? updated : t)));
    setReplyInput('');
  };

  const handleCreateThread = () => {
    if (!newThreadTitle.trim() || !newThreadContent.trim()) return;

    const created: ForumThread = {
      id: `thread-${Date.now()}`,
      courseCode: newThreadCourse,
      courseTitle: newThreadCourse === 'CS101' ? 'Distributed Systems' : 'Edge AI Architecture',
      title: newThreadTitle,
      authorName: user?.name || 'Alex Mercer',
      authorAvatar: user?.avatarUrl || 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop',
      authorRole: 'Scholar',
      createdAt: 'Just now',
      tags: [newThreadCourse, 'Discussion', 'Community'],
      upvotes: 1,
      replyCount: 0,
      isSolved: false,
      content: newThreadContent,
      replies: []
    };

    setThreads((prev) => [created, ...prev]);
    setShowNewThreadModal(false);
    setNewThreadTitle('');
    setNewThreadContent('');
  };

  const toggleGroupJoin = (groupId: string) => {
    setStudyGroups((list) =>
      list.map((g) => {
        if (g.id === groupId) {
          const nextJoined = !g.isJoined;
          return {
            ...g,
            isJoined: nextJoined,
            memberCount: g.memberCount + (nextJoined ? 1 : -1)
          };
        }
        return g;
      })
    );
  };

  return (
    <div className="rounded-3xl bg-[#0c1a24] border border-[#1b3b4a] p-6 md:p-8 space-y-6 text-white shadow-2xl">
      {/* Top Banner */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-[#183646] pb-6">
        <div>
          <div className="flex items-center gap-2">
            <span className="px-3 py-1 rounded-full bg-cyan-500/15 border border-cyan-500/30 text-cyan-300 text-xs font-bold uppercase tracking-wider flex items-center gap-1.5">
              <Users className="w-3.5 h-3.5 text-cyan-400" />
              Social Learning Hub
            </span>
            <span className="text-xs text-[#789cae]">Collaborative Knowledge Mesh</span>
          </div>
          <h2 className="text-xl md:text-2xl font-black text-white mt-1">
            Course Forums, Virtual Study Groups & Real-Time AI Q&A
          </h2>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => setShowNewThreadModal(true)}
            className="px-4 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-teal-400 hover:from-cyan-400 hover:to-teal-300 text-slate-950 font-black text-xs shadow-lg flex items-center gap-2 transition-all active:scale-95"
          >
            <Plus className="w-4 h-4" />
            <span>New Discussion Thread</span>
          </button>
        </div>
      </div>

      {/* Main Switcher Tabs */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#183646] pb-4">
        <div className="flex items-center gap-2">
          <button
            onClick={() => setActiveTab('forums')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-2 ${
              activeTab === 'forums'
                ? 'bg-cyan-500 text-slate-950 font-black shadow'
                : 'bg-[#08151c] text-[#789cae] border border-[#1b3b4a] hover:text-white'
            }`}
          >
            <MessageSquare className="w-4 h-4" />
            <span>Course Discussion Forums ({threads.length})</span>
          </button>

          <button
            onClick={() => setActiveTab('groups')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-2 ${
              activeTab === 'groups'
                ? 'bg-emerald-400 text-slate-950 font-black shadow'
                : 'bg-[#08151c] text-[#789cae] border border-[#1b3b4a] hover:text-white'
            }`}
          >
            <Users className="w-4 h-4" />
            <span>Virtual Study Groups ({studyGroups.length})</span>
          </button>

          <button
            onClick={() => setActiveTab('qna')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-2 ${
              activeTab === 'qna'
                ? 'bg-purple-400 text-slate-950 font-black shadow'
                : 'bg-[#08151c] text-[#789cae] border border-[#1b3b4a] hover:text-white'
            }`}
          >
            <Sparkles className="w-4 h-4" />
            <span>Real-Time AI Q&A ({qnAs.length})</span>
          </button>
        </div>

        {/* Search & Filter */}
        <div className="flex items-center gap-2">
          <div className="relative">
            <Search className="w-3.5 h-3.5 text-[#638799] absolute left-3 top-2.5" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search discussions & topics..."
              className="pl-8 pr-3 py-1.5 rounded-xl bg-[#08151c] border border-[#1b3b4a] text-xs text-white placeholder-[#5a7d8e] focus:outline-none focus:border-cyan-400 w-48 sm:w-64"
            />
          </div>
        </div>
      </div>

      {/* TAB 1: COURSE DISCUSSION FORUMS */}
      {activeTab === 'forums' && (
        <div className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {threads.map((thread) => (
              <div
                key={thread.id}
                onClick={() => setActiveThread(thread)}
                className="p-5 rounded-2xl bg-[#08151c] border border-[#1b3b4a] hover:border-cyan-500/50 cursor-pointer transition-all duration-300 space-y-3 flex flex-col justify-between group shadow-lg"
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between gap-2">
                    <span className="px-2.5 py-0.5 rounded bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-[10px] font-mono font-bold">
                      {thread.courseCode} • {thread.courseTitle}
                    </span>

                    {thread.isSolved && (
                      <span className="px-2 py-0.5 rounded-full bg-emerald-950 text-emerald-300 border border-emerald-500/30 text-[10px] font-bold flex items-center gap-1">
                        <CheckCircle2 className="w-3 h-3 text-emerald-400" /> Solved
                      </span>
                    )}
                  </div>

                  <h3 className="font-bold text-sm text-white group-hover:text-cyan-300 transition-colors line-clamp-2">
                    {thread.title}
                  </h3>

                  <p className="text-xs text-[#789cae] line-clamp-2 leading-relaxed">
                    {thread.content}
                  </p>
                </div>

                <div className="pt-3 border-t border-[#183646] flex items-center justify-between text-xs text-[#789cae]">
                  <div className="flex items-center gap-2">
                    <img
                      src={thread.authorAvatar}
                      alt={thread.authorName}
                      referrerPolicy="no-referrer"
                      className="w-6 h-6 rounded-full object-cover border border-cyan-400/30"
                    />
                    <span className="text-[11px] font-semibold text-white">{thread.authorName}</span>
                    <span className="text-[10px] text-[#5c8193]">• {thread.createdAt}</span>
                  </div>

                  <div className="flex items-center gap-3">
                    <span className="flex items-center gap-1 text-[11px]">
                      <ThumbsUp className="w-3 h-3 text-cyan-400" />
                      {thread.upvotes}
                    </span>
                    <span className="flex items-center gap-1 text-[11px]">
                      <MessageCircle className="w-3 h-3 text-emerald-400" />
                      {thread.replyCount}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* TAB 2: VIRTUAL STUDY GROUPS */}
      {activeTab === 'groups' && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {studyGroups.map((group) => (
              <div
                key={group.id}
                className="p-5 rounded-2xl bg-[#08151c] border border-[#1b3b4a] space-y-4 flex flex-col justify-between shadow-lg hover:border-emerald-500/40 transition-all"
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="px-2.5 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-[10px] font-mono font-bold">
                      {group.courseCode} Group
                    </span>
                    <span className="text-xs text-[#789cae] font-mono">
                      {group.memberCount}/{group.maxMembers} Members
                    </span>
                  </div>

                  <h3 className="font-bold text-sm text-white">{group.title}</h3>
                  <p className="text-xs text-[#789cae] leading-relaxed">{group.description}</p>

                  <div className="p-3 rounded-xl bg-[#0c1e28] border border-[#1a3848] text-xs text-cyan-300 space-y-1">
                    <div className="font-bold flex items-center gap-1.5 text-cyan-400">
                      <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                      <span>Next Study Sync</span>
                    </div>
                    <p className="text-white font-semibold">{group.nextMeetingTime}</p>
                  </div>
                </div>

                <div className="pt-2 border-t border-[#183646] flex items-center justify-between">
                  <div className="flex -space-x-2 overflow-hidden">
                    {group.members.map((m, idx) => (
                      <img
                        key={idx}
                        src={m.avatar}
                        alt={m.name}
                        referrerPolicy="no-referrer"
                        className="inline-block h-7 w-7 rounded-full ring-2 ring-[#08151c] object-cover"
                      />
                    ))}
                  </div>

                  <button
                    onClick={() => toggleGroupJoin(group.id)}
                    className={`px-4 py-1.5 rounded-xl text-xs font-bold transition-all shadow ${
                      group.isJoined
                        ? 'bg-rose-500/20 text-rose-300 border border-rose-500/30 hover:bg-rose-500/30'
                        : 'bg-emerald-500 text-slate-950 font-black hover:bg-emerald-400'
                    }`}
                  >
                    {group.isJoined ? 'Leave Group' : 'Join Study Group'}
                  </button>
                </div>
              </div>
            ))}
          </div>
          
          <div className="p-5 rounded-2xl bg-[#08151c] border border-cyan-500/20 space-y-3">
            <h3 className="text-sm font-bold text-cyan-300">Suggested Study Buddies</h3>
            <div className="flex gap-3 overflow-x-auto pb-2">
              {['Alex', 'Sarah', 'Elena'].map((name) => (
                <div key={name} className="flex items-center gap-2 px-3 py-2 bg-[#0c1a24] rounded-xl border border-[#1b3b4a]">
                  <div className="w-8 h-8 rounded-full bg-cyan-900 flex items-center justify-center font-bold text-xs">{name[0]}</div>
                  <div className="text-xs">
                    <div className="font-semibold">{name}</div>
                    <div className="text-[10px] text-[#789cae]">Shared Goal: CS101</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* TAB 3: REAL-TIME AI Q&A */}
      {activeTab === 'qna' && (
        <div className="space-y-6">
          {/* Ask AI Box */}
          <div className="p-5 rounded-2xl bg-[#08151c] border border-purple-500/30 space-y-3 shadow-xl">
            <h3 className="text-sm font-bold text-purple-300 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-purple-400" />
              <span>Ask Real-Time AI Tutor Anything</span>
            </h3>

            <div className="flex items-center gap-2">
              <input
                type="text"
                value={qnaInput}
                onChange={(e) => setQnaInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleAskQnA()}
                placeholder="Ask any complex question from your course or research..."
                className="flex-1 px-4 py-2.5 rounded-xl bg-[#0c1a24] border border-[#1b3b4a] text-xs text-white focus:outline-none focus:border-purple-400"
              />

              <button
                onClick={handleAskQnA}
                disabled={isAskingAi}
                className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-purple-500 to-indigo-500 hover:from-purple-400 hover:to-indigo-400 text-white font-black text-xs shadow-lg flex items-center gap-1.5 active:scale-95 disabled:opacity-50"
              >
                <Zap className="w-3.5 h-3.5 fill-current" />
                <span>{isAskingAi ? 'Thinking...' : 'Ask AI'}</span>
              </button>
            </div>
          </div>

          {/* Q&A Thread List */}
          <div className="space-y-4">
            {qnAs.map((q) => (
              <div
                key={q.id}
                className="p-5 rounded-2xl bg-[#08151c] border border-[#1b3b4a] space-y-3 shadow-lg"
              >
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono text-cyan-400 bg-cyan-950/40 border border-cyan-500/30 px-2 py-0.5 rounded">
                    {q.courseTitle}
                  </span>
                  <span className="text-[10px] text-[#789cae]">{q.createdAt}</span>
                </div>

                <h3 className="font-bold text-sm text-white flex items-center gap-2">
                  <HelpCircle className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>{q.questionText}</span>
                </h3>

                {q.aiAnswer && (
                  <div className="p-4 rounded-xl bg-gradient-to-r from-purple-950/30 to-indigo-950/20 border border-purple-500/30 space-y-2 text-xs">
                    <div className="flex items-center justify-between text-[10px] text-purple-300 font-mono">
                      <span className="flex items-center gap-1 font-bold">
                        <Sparkles className="w-3 h-3 text-purple-400" />
                        Zalamati AI Real-Time Response
                      </span>
                      <span>{q.aiAnswer.confidence}</span>
                    </div>

                    <p className="text-gray-200 leading-relaxed">{q.aiAnswer.text}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ACTIVE THREAD VIEW MODAL */}
      {activeThread && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 animate-fade-in">
          <div className="bg-[#0c1a24] border border-[#1b3b4a] rounded-3xl max-w-2xl w-full p-6 space-y-5 shadow-2xl text-white max-h-[90vh] flex flex-col justify-between">
            <div className="flex items-center justify-between border-b border-[#183646] pb-4">
              <div>
                <span className="text-[10px] font-mono text-cyan-400 uppercase">
                  {activeThread.courseCode} Discussion Thread
                </span>
                <h3 className="text-base font-bold text-white mt-0.5">{activeThread.title}</h3>
              </div>
              <button
                onClick={() => setActiveThread(null)}
                className="text-[#789cae] hover:text-white"
              >
                ✕
              </button>
            </div>

            <div className="flex-1 overflow-y-auto space-y-4 pr-1 text-xs">
              <div className="p-4 rounded-2xl bg-[#08151c] border border-[#1b3b4a] space-y-2">
                <p className="text-gray-200 leading-relaxed">{activeThread.content}</p>
              </div>

              <div className="space-y-3 pt-2">
                <h4 className="font-bold text-cyan-300 text-xs">Replies ({activeThread.replies.length})</h4>
                {activeThread.replies.map((rep) => (
                  <div
                    key={rep.id}
                    className={`p-3.5 rounded-xl border space-y-1.5 ${
                      rep.isAiTutor
                        ? 'bg-purple-950/20 border-purple-500/30'
                        : 'bg-[#08151c] border-[#1b3b4a]'
                    }`}
                  >
                    <div className="flex items-center justify-between text-[11px]">
                      <span className="font-bold text-white flex items-center gap-1.5">
                        {rep.authorName}
                        {rep.isAiTutor && (
                          <span className="px-1.5 py-0.2 rounded bg-purple-500/20 text-purple-300 text-[9px] font-mono">
                            AI Tutor
                          </span>
                        )}
                      </span>
                      <span className="text-[#648798]">{rep.createdAt}</span>
                    </div>
                    <p className="text-gray-200 leading-relaxed">{rep.text}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Post Reply Input */}
            <div className="flex items-center gap-2 pt-3 border-t border-[#183646]">
              <input
                type="text"
                value={replyInput}
                onChange={(e) => setReplyInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handlePostReply()}
                placeholder="Write your response to this discussion..."
                className="flex-1 px-4 py-2 rounded-xl bg-[#08151c] border border-[#1b3b4a] text-xs text-white focus:outline-none focus:border-cyan-400"
              />
              <button
                onClick={handlePostReply}
                className="px-4 py-2 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-black text-xs shadow"
              >
                Reply
              </button>
            </div>
          </div>
        </div>
      )}

      {/* NEW THREAD MODAL */}
      {showNewThreadModal && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-[#0c1a24] border border-[#1b3b4a] rounded-3xl max-w-md w-full p-6 space-y-4 shadow-2xl text-white">
            <h3 className="text-base font-bold text-white">Start New Course Discussion</h3>

            <div className="space-y-3 text-xs">
              <div>
                <label className="block text-[#789cae] mb-1 font-semibold">Select Course</label>
                <select
                  value={newThreadCourse}
                  onChange={(e) => setNewThreadCourse(e.target.value)}
                  className="w-full px-3 py-2 rounded-xl bg-[#08151c] border border-[#1b3b4a] text-cyan-300 font-mono font-bold focus:outline-none"
                >
                  <option value="CS101">CS101 - Distributed Systems</option>
                  <option value="AI301">AI301 - Edge AI Architecture</option>
                  <option value="MATH201">MATH201 - Advanced Calculus</option>
                </select>
              </div>

              <div>
                <label className="block text-[#789cae] mb-1 font-semibold">Discussion Title</label>
                <input
                  type="text"
                  value={newThreadTitle}
                  onChange={(e) => setNewThreadTitle(e.target.value)}
                  placeholder="e.g. Question regarding Raft consensus timeouts..."
                  className="w-full px-3 py-2 rounded-xl bg-[#08151c] border border-[#1b3b4a] text-white focus:outline-none focus:border-cyan-400"
                />
              </div>

              <div>
                <label className="block text-[#789cae] mb-1 font-semibold">Discussion Details</label>
                <textarea
                  rows={4}
                  value={newThreadContent}
                  onChange={(e) => setNewThreadContent(e.target.value)}
                  placeholder="Explain your topic or question in detail..."
                  className="w-full p-3 rounded-xl bg-[#08151c] border border-[#1b3b4a] text-white focus:outline-none focus:border-cyan-400"
                />
              </div>
            </div>

            <div className="flex justify-end gap-2 pt-2 border-t border-[#183646]">
              <button
                onClick={() => setShowNewThreadModal(false)}
                className="px-4 py-2 rounded-xl bg-[#122a36] text-[#789cae] font-semibold text-xs"
              >
                Cancel
              </button>
              <button
                onClick={handleCreateThread}
                className="px-4 py-2 rounded-xl bg-cyan-500 text-slate-950 font-black text-xs shadow"
              >
                Post Discussion
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
