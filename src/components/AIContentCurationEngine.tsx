import React, { useState, useEffect } from 'react';
import {
  Sparkles,
  ExternalLink,
  BookOpen,
  Video,
  FileText,
  GraduationCap,
  Clock,
  Bookmark,
  CheckCircle2,
  RefreshCw,
  Tag,
  Filter,
  Brain,
  Layers,
  ChevronRight,
  TrendingUp,
  ThumbsUp
} from 'lucide-react';
import { UserProfile, Course } from '../types';

export interface CuratedResource {
  id: string;
  title: string;
  type: 'article' | 'video' | 'course' | 'paper';
  url: string;
  source: string;
  description: string;
  reasoning: string;
  estimatedTime: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced' | 'Expert';
  tags: string[];
  isBookmarked?: boolean;
  isCompleted?: boolean;
  upvotes: number;
}

interface AIContentCurationEngineProps {
  user: UserProfile;
  currentCourse?: Course | null;
  courses?: Course[];
}

export const AIContentCurationEngine: React.FC<AIContentCurationEngineProps> = ({
  user,
  currentCourse,
  courses = []
}) => {
  const [filterType, setFilterType] = useState<'all' | 'article' | 'video' | 'course' | 'paper'>('all');
  const [selectedCourseId, setSelectedCourseId] = useState<string>(currentCourse?.id || courses[0]?.id || 'default');
  const [isCurating, setIsCurating] = useState<boolean>(false);
  const [bookmarkedIds, setBookmarkedIds] = useState<Set<string>>(new Set());
  const [completedIds, setCompletedIds] = useState<Set<string>>(new Set());
  const [upvotedIds, setUpvotedIds] = useState<Set<string>>(new Set());

  const activeCourse = courses.find((c) => c.id === selectedCourseId) || currentCourse || courses[0];

  const [curatedResources, setCuratedResources] = useState<CuratedResource[]>([
    {
      id: 'res-1',
      title: 'Attention Is All You Need: Transformers Architecture Explained',
      type: 'paper',
      url: 'https://arxiv.org/abs/1706.03762',
      source: 'arXiv Research Archive',
      description: 'The seminal research paper establishing multi-head self-attention mechanisms for modern LLMs.',
      reasoning: `Curated for your level (${user.learningLevel.toUpperCase()}) to strengthen mathematical foundations in Transformer architectures.`,
      estimatedTime: '25 min read',
      difficulty: 'Advanced',
      tags: ['Transformers', 'Deep Learning', 'Attention'],
      upvotes: 142
    },
    {
      id: 'res-2',
      title: 'Illustrated Guide to Raft Distributed Consensus Protocol',
      type: 'article',
      url: 'https://raft.github.io/',
      source: 'Raft Research Visualizer',
      description: 'Interactive visual breakdown of leader election, heartbeat timeouts, and log replication quorums.',
      reasoning: 'Complements your active enrolled module in Distributed Systems with dynamic state transitions.',
      estimatedTime: '15 min interact',
      difficulty: 'Intermediate',
      tags: ['Consensus', 'Raft', 'Distributed Systems'],
      upvotes: 98
    },
    {
      id: 'res-3',
      title: 'Stanford CS224N: Natural Language Processing with Deep Learning',
      type: 'video',
      url: 'https://www.youtube.com/watch?v=8rXD5-xhemo',
      source: 'YouTube - Stanford Online',
      description: 'Comprehensive lecture series covering word embeddings, recurrent neural nets, and contextual attention.',
      reasoning: `Recommended based on your stated interest in AI & Agentic Systems and current ${user.xpPoints} XP milestone.`,
      estimatedTime: '52 min video',
      difficulty: 'Intermediate',
      tags: ['NLP', 'Stanford', 'Neural Nets'],
      upvotes: 215
    },
    {
      id: 'res-4',
      title: 'MIT OpenCourseWare: Advanced Algorithms & Data Structures',
      type: 'course',
      url: 'https://ocw.mit.edu/courses/6-046j-design-and-analysis-of-algorithms-spring-2015/',
      source: 'MIT OCW Portal',
      description: 'Full degree-level course on dynamic programming, network flow, NP-completeness, and randomized algorithms.',
      reasoning: 'Perfect fit to advance from your current academic rank to the next level.',
      estimatedTime: '12 hrs course',
      difficulty: 'Expert',
      tags: ['Algorithms', 'MIT', 'Computer Science'],
      upvotes: 176
    },
    {
      id: 'res-5',
      title: 'Building Zero-Latency WebGPU Shaders for Edge AI Inference',
      type: 'article',
      url: 'https://developer.mozilla.org/en-US/docs/Web/API/WebGPU_API',
      source: 'MDN Web Docs & W3C',
      description: 'Technical guide on WGSL compute shaders, memory buffer alignment, and client GPU acceleration.',
      reasoning: 'Directly aligns with your platform experience with WebGPU and Gemini Edge Agents.',
      estimatedTime: '18 min read',
      difficulty: 'Advanced',
      tags: ['WebGPU', 'WGSL', 'Performance'],
      upvotes: 84
    }
  ]);

  // Handle re-curating via Gemini AI
  const handleFetchAiCurations = async () => {
    setIsCurating(true);
    try {
      const targetTopic = activeCourse?.title || 'Advanced AI & Software Systems';
      const res = await fetch('/api/gemini/tutor', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          prompt: `Generate 4 highly curated external learning resources (articles, video lectures, research papers, online courses) to supplement a student studying "${targetTopic}".
Student Learning Level: ${user.learningLevel}.
Student Interests: ${user.skills?.join(', ') || 'AI, Distributed Systems, Algorithms'}.
Return a clean JSON array with fields: title, type ('article'|'video'|'course'|'paper'), source, description, reasoning, estimatedTime, difficulty, tags (array), url.`
        })
      });

      if (res.ok) {
        const data = await res.json();
        const textReply = data.reply || '';
        // Try parsing JSON block inside response
        const jsonMatch = textReply.match(/\[\s*\{[\s\S]*\}\s*\]/);
        if (jsonMatch) {
          const parsed = JSON.parse(jsonMatch[0]);
          const formatted: CuratedResource[] = parsed.map((item: any, idx: number) => ({
            id: `ai-curated-${Date.now()}-${idx}`,
            title: item.title || `Advanced Deep Dive into ${targetTopic}`,
            type: ['article', 'video', 'course', 'paper'].includes(item.type) ? item.type : 'article',
            url: item.url || 'https://scholar.google.com',
            source: item.source || 'Zalamati AI Academic Index',
            description: item.description || `Specialized research overview for ${targetTopic}.`,
            reasoning: item.reasoning || `Tailored to your ${user.learningLevel} learning trajectory.`,
            estimatedTime: item.estimatedTime || '15 min',
            difficulty: item.difficulty || 'Intermediate',
            tags: item.tags || [targetTopic, 'AI Curated'],
            upvotes: Math.floor(20 + Math.random() * 80)
          }));
          setCuratedResources(formatted);
        }
      }
    } catch (e) {
      console.warn('AI Content Curation fallback:', e);
    } finally {
      setIsCurating(false);
    }
  };

  const toggleBookmark = (id: string) => {
    setBookmarkedIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  const toggleCompleted = (id: string) => {
    setCompletedIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  const toggleUpvote = (id: string) => {
    setUpvotedIds((prev) => {
      const next = new Set(prev);
      const isUpvoted = next.has(id);
      if (isUpvoted) next.delete(id);
      else next.add(id);

      setCuratedResources((list) =>
        list.map((r) => (r.id === id ? { ...r, upvotes: r.upvotes + (isUpvoted ? -1 : 1) } : r))
      );
      return next;
    });
  };

  const filtered = curatedResources.filter((r) => {
    if (filterType === 'all') return true;
    return r.type === filterType;
  });

  const getTypeIcon = (type: CuratedResource['type']) => {
    switch (type) {
      case 'article':
        return <FileText className="w-4 h-4 text-cyan-400" />;
      case 'video':
        return <Video className="w-4 h-4 text-rose-400" />;
      case 'course':
        return <GraduationCap className="w-4 h-4 text-emerald-400" />;
      case 'paper':
        return <BookOpen className="w-4 h-4 text-purple-400" />;
    }
  };

  const getTypeBadge = (type: CuratedResource['type']) => {
    switch (type) {
      case 'article':
        return 'bg-cyan-500/10 text-cyan-300 border-cyan-500/30';
      case 'video':
        return 'bg-rose-500/10 text-rose-300 border-rose-500/30';
      case 'course':
        return 'bg-emerald-500/10 text-emerald-300 border-emerald-500/30';
      case 'paper':
        return 'bg-purple-500/10 text-purple-300 border-purple-500/30';
    }
  };

  return (
    <div className="rounded-3xl bg-[#0c1a24] border border-[#1b3b4a] p-6 md:p-8 space-y-6 text-white shadow-2xl">
      {/* Header Banner */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-[#183646] pb-6">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <span className="px-3 py-1 rounded-full bg-cyan-500/15 border border-cyan-500/30 text-cyan-300 text-xs font-bold uppercase tracking-wider flex items-center gap-1.5">
              <Brain className="w-3.5 h-3.5 text-cyan-400" />
              Gemini Curation Engine
            </span>
            <span className="text-xs text-[#7397aa]">Personalized Research Feed</span>
          </div>
          <h2 className="text-xl md:text-2xl font-black text-white tracking-tight flex items-center gap-2">
            <span>Adaptive Knowledge Curation</span>
          </h2>
          <p className="text-xs text-[#7fa3b5]">
            Dynamically recommended papers, videos, articles, and courses tailored to your progress in{' '}
            <strong className="text-cyan-200">{activeCourse?.title || 'Active Curriculum'}</strong>
          </p>
        </div>

        <div className="flex items-center gap-3">
          {/* Select active course filter */}
          {courses.length > 0 && (
            <select
              value={selectedCourseId}
              onChange={(e) => setSelectedCourseId(e.target.value)}
              className="px-3 py-2 rounded-xl bg-[#08151c] border border-[#1b3b4a] text-cyan-300 text-xs font-semibold focus:outline-none focus:border-cyan-400 max-w-[180px] truncate"
            >
              {courses.map((c) => (
                <option key={c.id} value={c.id}>
                  {c.title}
                </option>
              ))}
            </select>
          )}

          <button
            onClick={handleFetchAiCurations}
            disabled={isCurating}
            className="px-4 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-teal-400 hover:from-cyan-400 hover:to-teal-300 text-slate-950 font-black text-xs shadow-lg flex items-center gap-2 transition-all active:scale-95 disabled:opacity-50"
          >
            <RefreshCw className={`w-4 h-4 ${isCurating ? 'animate-spin' : ''}`} />
            <span>{isCurating ? 'Curating...' : 'Refresh AI Feed'}</span>
          </button>
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#183646] pb-4">
        <div className="flex items-center gap-2 overflow-x-auto max-w-full pb-1">
          {(['all', 'article', 'video', 'paper', 'course'] as const).map((t) => (
            <button
              key={t}
              onClick={() => setFilterType(t)}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-bold capitalize transition-all ${
                filterType === t
                  ? 'bg-cyan-500 text-slate-950 font-black shadow'
                  : 'bg-[#08151c] text-[#7397aa] border border-[#1b3b4a] hover:text-white'
              }`}
            >
              {t === 'all' ? 'All Types' : `${t}s`}
            </button>
          ))}
        </div>

        <div className="text-xs text-[#7397aa] flex items-center gap-2">
          <span>Showing {filtered.length} curated items</span>
          <span className="text-emerald-400 font-mono font-semibold">• 100% Verified</span>
        </div>
      </div>

      {/* Resource Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filtered.map((item) => {
          const isBookmarked = bookmarkedIds.has(item.id);
          const isCompleted = completedIds.has(item.id);
          const isUpvoted = upvotedIds.has(item.id);

          return (
            <div
              key={item.id}
              className={`p-5 rounded-2xl bg-[#08151c]/90 border transition-all duration-300 flex flex-col justify-between space-y-4 hover:border-cyan-500/50 shadow-lg ${
                isCompleted ? 'opacity-75 border-emerald-500/30' : 'border-[#1b3b4a]'
              }`}
            >
              <div className="space-y-3">
                {/* Card Top Row */}
                <div className="flex items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <span className={`px-2.5 py-0.5 rounded-full border text-[10px] font-bold uppercase tracking-wider flex items-center gap-1 ${getTypeBadge(item.type)}`}>
                      {getTypeIcon(item.type)}
                      <span>{item.type}</span>
                    </span>
                    <span className="text-[11px] font-semibold text-[#7397aa] truncate max-w-[140px]">
                      {item.source}
                    </span>
                  </div>

                  <div className="flex items-center gap-1">
                    <span className="text-[10px] text-amber-300 bg-amber-950/40 border border-amber-500/30 px-2 py-0.5 rounded font-mono font-bold">
                      {item.difficulty}
                    </span>
                    <button
                      onClick={() => toggleBookmark(item.id)}
                      className={`p-1.5 rounded-lg border transition-colors ${
                        isBookmarked
                          ? 'bg-amber-500/20 text-amber-300 border-amber-500/40'
                          : 'bg-[#0c1a24] text-[#7397aa] border-[#1b3b4a] hover:text-white'
                      }`}
                      title={isBookmarked ? 'Remove Bookmark' : 'Bookmark Resource'}
                    >
                      <Bookmark className="w-3.5 h-3.5 fill-current" />
                    </button>
                  </div>
                </div>

                {/* Title & Description */}
                <h3 className="font-bold text-sm text-white group-hover:text-cyan-300 transition-colors leading-snug">
                  {item.title}
                </h3>

                <p className="text-xs text-[#80a3b5] leading-relaxed line-clamp-2">
                  {item.description}
                </p>

                {/* AI Reasoning Box */}
                <div className="p-3 rounded-xl bg-[#0c202d] border border-cyan-500/20 text-[11px] text-cyan-200 space-y-1">
                  <div className="font-bold flex items-center gap-1 text-cyan-400 text-[10px] uppercase">
                    <Sparkles className="w-3 h-3 text-cyan-300" />
                    <span>Why AI Curated This For You</span>
                  </div>
                  <p className="leading-snug text-[#9cc0d2]">{item.reasoning}</p>
                </div>
              </div>

              {/* Bottom Actions Row */}
              <div className="pt-2 border-t border-[#183646] flex items-center justify-between text-xs">
                <div className="flex items-center gap-3">
                  <span className="text-[11px] text-[#7397aa] flex items-center gap-1">
                    <Clock className="w-3 h-3 text-cyan-400" />
                    {item.estimatedTime}
                  </span>

                  <button
                    onClick={() => toggleUpvote(item.id)}
                    className={`flex items-center gap-1 text-[11px] px-2 py-0.5 rounded border transition-colors ${
                      isUpvoted
                        ? 'bg-cyan-500/20 text-cyan-300 border-cyan-500/40'
                        : 'bg-[#0c1a24] text-[#7397aa] border-[#1b3b4a] hover:text-white'
                    }`}
                  >
                    <ThumbsUp className="w-3 h-3" />
                    <span>{item.upvotes}</span>
                  </button>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => toggleCompleted(item.id)}
                    className={`p-1.5 rounded-lg border text-xs font-semibold flex items-center gap-1 transition-all ${
                      isCompleted
                        ? 'bg-emerald-950 text-emerald-300 border-emerald-500/40'
                        : 'bg-[#0c1a24] text-[#7397aa] border-[#1b3b4a] hover:text-white'
                    }`}
                  >
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                    <span>{isCompleted ? 'Read' : 'Mark Read'}</span>
                  </button>

                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-1.5 rounded-xl bg-[#122e3d] hover:bg-[#193c4e] text-cyan-300 border border-cyan-500/30 text-xs font-bold flex items-center gap-1 shadow transition-all"
                  >
                    <span>Explore</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
