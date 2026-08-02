import React, { useState } from 'react';
import {
  GitBranch,
  CheckCircle2,
  Lock,
  Play,
  ArrowRight,
  Layers,
  Award,
  Sparkles,
  BookOpen,
  ChevronRight,
  Target,
  GraduationCap
} from 'lucide-react';
import { Course } from '../types';

export interface PrereqNode {
  id: string;
  code: string;
  title: string;
  level: 'Foundation' | 'Core' | 'Advanced' | 'Capstone';
  status: 'completed' | 'in_progress' | 'available' | 'locked';
  progress: number; // 0 - 100
  prereqs: string[]; // array of node IDs
  skillsUnlocked: string[];
  estimatedHours: number;
  description: string;
}

export interface LearningPathProgram {
  id: string;
  title: string;
  category: string;
  totalCourses: number;
  completedCourses: number;
  nodes: PrereqNode[];
}

interface CoursePrerequisiteGraphProps {
  onSelectCourse?: (courseId: string) => void;
}

export const LEARNING_PATHS: LearningPathProgram[] = [
  {
    id: 'path-ai',
    title: 'M.S. Artificial Intelligence & Cognitive Architecture',
    category: 'Artificial Intelligence',
    totalCourses: 5,
    completedCourses: 2,
    nodes: [
      {
        id: 'cs101-math',
        code: 'MATH101',
        title: 'Linear Algebra & Vector Calculus for Deep Learning',
        level: 'Foundation',
        status: 'completed',
        progress: 100,
        prereqs: [],
        skillsUnlocked: ['Tensor Math', 'Matrix Decompositions'],
        estimatedHours: 24,
        description: 'Mathematical foundations of multi-dimensional vector spaces and gradient optimization.'
      },
      {
        id: 'ai201-nn',
        code: 'AI201',
        title: 'Neural Networks & Deep Learning Architectures',
        level: 'Core',
        status: 'completed',
        progress: 100,
        prereqs: ['cs101-math'],
        skillsUnlocked: ['Backpropagation', 'PyTorch', 'CNNs'],
        estimatedHours: 36,
        description: 'Multi-layer perceptrons, activation functions, loss topologies, and backpropagation.'
      },
      {
        id: 'ai301-transformers',
        code: 'AI301',
        title: 'Transformer Models & Self-Attention Mechanisms',
        level: 'Advanced',
        status: 'in_progress',
        progress: 65,
        prereqs: ['ai201-nn'],
        skillsUnlocked: ['Self-Attention', 'Transformer Decoding', 'LLM Fine-Tuning'],
        estimatedHours: 40,
        description: 'Multi-head self-attention, positional encoding, and large language model pre-training.'
      },
      {
        id: 'ai401-agents',
        code: 'AI401',
        title: 'Autonomous Multi-Agent Swarms & Cognitive RAG',
        level: 'Advanced',
        status: 'available',
        progress: 0,
        prereqs: ['ai301-transformers'],
        skillsUnlocked: ['Agentic Workflows', 'Vector Databases', 'LangGraph'],
        estimatedHours: 45,
        description: 'Building persistent self-improving multi-agent ecosystems with real-time vector memory.'
      },
      {
        id: 'ai500-capstone',
        code: 'AI500',
        title: 'Autonomous AI Systems Capstone Defense',
        level: 'Capstone',
        status: 'locked',
        progress: 0,
        prereqs: ['ai401-agents'],
        skillsUnlocked: ['Master AI Architect Certification'],
        estimatedHours: 60,
        description: 'End-to-end design, deployment, and formal defense of a production multi-agent engine.'
      }
    ]
  },
  {
    id: 'path-dist',
    title: 'M.S. Distributed Systems & Edge Cloud Infrastructure',
    category: 'Systems Engineering',
    totalCourses: 4,
    completedCourses: 1,
    nodes: [
      {
        id: 'ds101-concurrency',
        code: 'DS101',
        title: 'Concurrent Programming & Asynchronous I/O',
        level: 'Foundation',
        status: 'completed',
        progress: 100,
        prereqs: [],
        skillsUnlocked: ['Locks & Semaphores', 'Event Loops'],
        estimatedHours: 20,
        description: 'Thread safety, async primitives, non-blocking sockets, and message passing.'
      },
      {
        id: 'ds201-raft',
        code: 'DS201',
        title: 'Distributed Consensus Protocols (Raft & Paxos)',
        level: 'Core',
        status: 'in_progress',
        progress: 80,
        prereqs: ['ds101-concurrency'],
        skillsUnlocked: ['Raft Leader Election', 'Log Replication', 'Quorums'],
        estimatedHours: 35,
        description: 'Fault-tolerant consensus algorithms, split-vote mitigation, and quorum mechanics.'
      },
      {
        id: 'ds301-edge',
        code: 'DS301',
        title: 'Zero-Latency WebGPU Edge Compute Shaders',
        level: 'Advanced',
        status: 'available',
        progress: 0,
        prereqs: ['ds201-raft'],
        skillsUnlocked: ['WGSL', 'Compute Shaders', 'WebGPU Caching'],
        estimatedHours: 42,
        description: 'Executing hardware-accelerated tensor math and matrix shaders directly in client browsers.'
      },
      {
        id: 'ds400-capstone',
        code: 'DS400',
        title: 'Global Distributed Mesh Capstone Defense',
        level: 'Capstone',
        status: 'locked',
        progress: 0,
        prereqs: ['ds301-edge'],
        skillsUnlocked: ['Master Systems Engineer Badge'],
        estimatedHours: 50,
        description: 'Architecting a fault-tolerant multi-region cluster with sub-10ms state replication.'
      }
    ]
  }
];

export const CoursePrerequisiteGraph: React.FC<CoursePrerequisiteGraphProps> = ({ onSelectCourse }) => {
  const [selectedPathId, setSelectedPathId] = useState<string>('path-ai');
  const [activeNodeId, setActiveNodeId] = useState<string>('ai301-transformers');

  const activePath = LEARNING_PATHS.find((p) => p.id === selectedPathId) || LEARNING_PATHS[0];
  const activeNode = activePath.nodes.find((n) => n.id === activeNodeId) || activePath.nodes[0];

  const getStatusBadge = (status: PrereqNode['status']) => {
    switch (status) {
      case 'completed':
        return 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40';
      case 'in_progress':
        return 'bg-cyan-500/20 text-cyan-300 border-cyan-500/40 animate-pulse';
      case 'available':
        return 'bg-amber-500/20 text-amber-300 border-amber-500/40';
      case 'locked':
        return 'bg-slate-800 text-slate-400 border-slate-700';
    }
  };

  const getStatusIcon = (status: PrereqNode['status']) => {
    switch (status) {
      case 'completed':
        return <CheckCircle2 className="w-4 h-4 text-emerald-400" />;
      case 'in_progress':
        return <Sparkles className="w-4 h-4 text-cyan-400" />;
      case 'available':
        return <ArrowRight className="w-4 h-4 text-amber-400" />;
      case 'locked':
        return <Lock className="w-4 h-4 text-slate-500" />;
    }
  };

  return (
    <div className="rounded-3xl bg-[#0c1a24] border border-[#1b3b4a] p-6 md:p-8 space-y-6 text-white shadow-2xl">
      {/* Header Banner */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-[#183646] pb-6">
        <div>
          <div className="flex items-center gap-2">
            <span className="px-3 py-1 rounded-full bg-cyan-500/15 border border-cyan-500/30 text-cyan-300 text-xs font-bold uppercase tracking-wider flex items-center gap-1.5">
              <GitBranch className="w-3.5 h-3.5 text-cyan-400" />
              Learning Path Visualizer
            </span>
            <span className="text-xs text-[#789cae]">Interactive Prerequisite Graph</span>
          </div>
          <h2 className="text-xl md:text-2xl font-black text-white mt-1">
            Degree Curriculum & Prerequisite Flow Graph
          </h2>
          <p className="text-xs text-[#789cae] mt-0.5">
            Visualize required dependencies, track progress across modules, and plan your path toward certification.
          </p>
        </div>

        {/* Path Selector */}
        <div className="flex items-center gap-2 bg-[#08151c] p-1.5 rounded-2xl border border-[#1b3b4a]">
          {LEARNING_PATHS.map((path) => (
            <button
              key={path.id}
              onClick={() => {
                setSelectedPathId(path.id);
                setActiveNodeId(path.nodes[0].id);
              }}
              className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all ${
                selectedPathId === path.id
                  ? 'bg-cyan-500 text-slate-950 font-black shadow-md'
                  : 'text-[#789cae] hover:text-white'
              }`}
            >
              {path.category}
            </button>
          ))}
        </div>
      </div>

      {/* Degree Program Progress Overview */}
      <div className="p-4 rounded-2xl bg-[#08151c] border border-[#1b3b4a] flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h3 className="font-bold text-sm text-white flex items-center gap-2">
            <GraduationCap className="w-4 h-4 text-cyan-400" />
            <span>{activePath.title}</span>
          </h3>
          <p className="text-xs text-[#789cae] mt-0.5">
            Completed {activePath.completedCourses} of {activePath.totalCourses} required program modules
          </p>
        </div>

        <div className="flex items-center gap-4 w-full md:w-auto">
          <div className="flex-1 md:w-48 bg-[#040e13] h-3 rounded-full overflow-hidden border border-[#1b3b4a]">
            <div
              className="bg-gradient-to-r from-cyan-500 to-emerald-400 h-full transition-all duration-500"
              style={{ width: `${(activePath.completedCourses / activePath.totalCourses) * 100}%` }}
            />
          </div>
          <span className="text-xs font-mono font-bold text-cyan-300">
            {Math.round((activePath.completedCourses / activePath.totalCourses) * 100)}% Complete
          </span>
        </div>
      </div>

      {/* Visual Node Graph Canvas */}
      <div className="p-6 rounded-3xl bg-[#08151c] border border-[#1b3b4a] space-y-6 relative overflow-hidden shadow-inner">
        <div className="text-xs font-bold text-[#789cae] uppercase tracking-wider flex items-center justify-between">
          <span>Prerequisite Progression Flow (Left → Right)</span>
          <span className="text-cyan-400 font-mono text-[11px]">Click any course node to inspect requirements</span>
        </div>

        {/* Desktop Connected Node Flow */}
        <div className="relative flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 pt-4 pb-2">
          {activePath.nodes.map((node, idx) => {
            const isActive = node.id === activeNodeId;

            return (
              <React.Fragment key={node.id}>
                {/* Node Card */}
                <div
                  onClick={() => setActiveNodeId(node.id)}
                  className={`flex-1 p-4 rounded-2xl border transition-all duration-300 cursor-pointer relative group flex flex-col justify-between space-y-3 shadow-lg ${
                    isActive
                      ? 'bg-gradient-to-b from-[#0f2837] to-[#0a1b24] border-cyan-400 ring-2 ring-cyan-400/40 scale-105 z-10'
                      : node.status === 'completed'
                      ? 'bg-[#081720] border-emerald-500/30 hover:border-emerald-400'
                      : node.status === 'in_progress'
                      ? 'bg-[#081924] border-cyan-500/40 hover:border-cyan-400'
                      : node.status === 'available'
                      ? 'bg-[#0b1b26] border-amber-500/30 hover:border-amber-400'
                      : 'bg-[#061117] border-slate-800 opacity-60'
                  }`}
                >
                  <div className="space-y-1.5">
                    <div className="flex items-center justify-between">
                      <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-[#040e13] border border-cyan-500/30 text-cyan-300">
                        {node.code}
                      </span>
                      <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold border flex items-center gap-1 ${getStatusBadge(node.status)}`}>
                        {getStatusIcon(node.status)}
                        <span className="capitalize">{node.status.replace('_', ' ')}</span>
                      </span>
                    </div>

                    <h4 className="font-bold text-xs text-white group-hover:text-cyan-300 transition-colors leading-snug">
                      {node.title}
                    </h4>
                  </div>

                  {/* Progress bar inside node */}
                  <div className="space-y-1 pt-1">
                    <div className="flex justify-between text-[10px] text-[#789cae]">
                      <span>Level: {node.level}</span>
                      <span className="font-mono text-cyan-300">{node.progress}%</span>
                    </div>
                    <div className="h-1.5 rounded-full bg-[#040e13] overflow-hidden border border-[#1b3b4a]">
                      <div
                        className={`h-full transition-all duration-300 ${
                          node.status === 'completed' ? 'bg-emerald-400' : 'bg-cyan-400'
                        }`}
                        style={{ width: `${node.progress}%` }}
                      />
                    </div>
                  </div>
                </div>

                {/* Connector Arrow for non-last nodes */}
                {idx < activePath.nodes.length - 1 && (
                  <div className="hidden md:flex items-center justify-center shrink-0">
                    <div className="w-6 h-0.5 bg-gradient-to-r from-cyan-500 to-teal-400 relative">
                      <ArrowRight className="w-4 h-4 text-teal-300 absolute -right-2 -top-1.5" />
                    </div>
                  </div>
                )}
              </React.Fragment>
            );
          })}
        </div>
      </div>

      {/* Selected Node Details Drawer */}
      {activeNode && (
        <div className="p-6 rounded-3xl bg-[#08151c] border border-cyan-500/30 space-y-4 shadow-xl">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-[#183646] pb-4">
            <div>
              <span className="px-2.5 py-0.5 rounded bg-cyan-500/20 text-cyan-300 text-[10px] font-mono font-bold uppercase">
                {activeNode.code} • {activeNode.level} Module
              </span>
              <h3 className="text-lg font-black text-white mt-1">{activeNode.title}</h3>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => onSelectCourse && onSelectCourse(activeNode.id)}
                disabled={activeNode.status === 'locked'}
                className={`px-5 py-2.5 rounded-xl text-xs font-black shadow-lg flex items-center gap-2 transition-all active:scale-95 ${
                  activeNode.status === 'completed'
                    ? 'bg-emerald-500 text-slate-950 hover:bg-emerald-400'
                    : activeNode.status === 'locked'
                    ? 'bg-slate-800 text-slate-500 cursor-not-allowed border border-slate-700'
                    : 'bg-gradient-to-r from-cyan-500 to-teal-400 text-slate-950 hover:from-cyan-400'
                }`}
              >
                <Play className="w-4 h-4 fill-current" />
                <span>
                  {activeNode.status === 'completed'
                    ? 'Review Module'
                    : activeNode.status === 'locked'
                    ? 'Locked (Prereqs Required)'
                    : 'Launch Course Module'}
                </span>
              </button>
            </div>
          </div>

          <p className="text-xs text-[#789cae] leading-relaxed">{activeNode.description}</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            {/* Prerequisite requirements */}
            <div className="p-3.5 rounded-xl bg-[#0c202d] border border-cyan-500/20 space-y-1.5">
              <span className="text-[11px] font-bold text-cyan-400 uppercase tracking-wider block">
                Required Prerequisites
              </span>
              {activeNode.prereqs.length === 0 ? (
                <span className="text-xs text-emerald-300 font-medium">None (Entry-Level Foundation)</span>
              ) : (
                <div className="flex flex-wrap gap-1.5">
                  {activeNode.prereqs.map((prereqId) => {
                    const prereqNode = activePath.nodes.find((n) => n.id === prereqId);
                    return (
                      <span
                        key={prereqId}
                        className="px-2.5 py-1 rounded bg-[#08151c] border border-cyan-500/30 text-cyan-300 text-xs font-mono font-semibold flex items-center gap-1"
                      >
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                        {prereqNode?.code || prereqId}
                      </span>
                    );
                  })}
                </div>
              )}
            </div>

            {/* Unlocked Skill Credentials */}
            <div className="p-3.5 rounded-xl bg-[#0c202d] border border-cyan-500/20 space-y-1.5">
              <span className="text-[11px] font-bold text-amber-400 uppercase tracking-wider block">
                Skills & Micro-Credentials Unlocked
              </span>
              <div className="flex flex-wrap gap-1.5">
                {activeNode.skillsUnlocked.map((skill, idx) => (
                  <span
                    key={idx}
                    className="px-2.5 py-1 rounded bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-semibold flex items-center gap-1"
                  >
                    <Award className="w-3.5 h-3.5 text-amber-400" />
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
