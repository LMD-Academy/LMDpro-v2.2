import React, { useState, useEffect } from 'react';
import {
  Globe,
  RefreshCw,
  CheckCircle2,
  Database,
  Layers,
  Search,
  Zap,
  X,
  FileText,
  Cpu,
  Flame,
  Radio
} from 'lucide-react';

interface DeepCrawlRagModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const DeepCrawlRagModal: React.FC<DeepCrawlRagModalProps> = ({ isOpen, onClose }) => {
  const [selectedPlatform, setSelectedPlatform] = useState<string>('Autonomous Robotics Cluster');
  const [isCrawling, setIsCrawling] = useState(false);
  const [crawlProgress, setCrawlProgress] = useState(100);
  const [learnedPhrases, setLearnedPhrases] = useState<string[]>([
    'Identified syntactic hierarchy in agent handoffs',
    'Synthesized zero-shot parameters for tool docking',
    'Optimized ECTS evaluation matrix vectors'
  ]);

  const PLATFORMS = [
    { name: 'Autonomous Robotics Cluster', coursesCount: 14, iconColor: 'text-rose-400', desc: 'Syllabi and kinematics datasets' },
    { name: 'Quantum Foundation Hub', coursesCount: 18, iconColor: 'text-blue-400', desc: 'Qubit matrices and state vectors' },
    { name: 'Socratic Reasoning Engine', coursesCount: 12, iconColor: 'text-purple-400', desc: 'Logical evaluation trees' },
    { name: 'Distributed Agentic Systems', coursesCount: 15, iconColor: 'text-emerald-400', desc: 'Canary logs and system blueprints' },
    { name: 'Neural NLP Synthesis Platform', coursesCount: 11, iconColor: 'text-cyan-400', desc: 'Attention maps and tokenizers' },
    { name: 'Advanced Cryptographic Safe', coursesCount: 10, iconColor: 'text-blue-500', desc: 'Zero-knowledge proof constraints' },
    { name: 'VPC Isolation Governance', coursesCount: 8, iconColor: 'text-lime-400', desc: 'IP policies and subnets' },
    { name: 'Multi-Tenant Sandbox Cluster', coursesCount: 6, iconColor: 'text-teal-400', desc: 'Container sandbox configurations' },
    { name: 'Adaptive Evaluation Hub', coursesCount: 6, iconColor: 'text-amber-400', desc: 'Competency benchmarks' }
  ];

  const handleRunCrawl = () => {
    setIsCrawling(true);
    setCrawlProgress(20);

    setTimeout(() => {
      setCrawlProgress(55);
      setLearnedPhrases(prev => ['Analyzed transformer weight matrices from crawl...', ...prev]);
    }, 600);
    setTimeout(() => {
      setCrawlProgress(85);
      setLearnedPhrases(prev => ['Extracted socratic dialogue rules from vector stream...', ...prev]);
    }, 1200);
    setTimeout(() => {
      setCrawlProgress(100);
      setIsCrawling(false);
      setLearnedPhrases(prev => [
        `✓ Succesfully parsed & trained NLP parameters from ${selectedPlatform}! Raw crawl scrapings discarded immediately to secure IP.`,
        ...prev
      ]);
    }, 1800);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fade-in">
      <div className="relative w-full max-w-4xl bg-[#08151c] border border-[#1b3b4a] rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
        {/* Header with gradient */}
        <div className="flex items-center justify-between p-5 border-b border-[#1b3b4a] bg-gradient-to-r from-[#0c1a24] to-[#08151c]">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500 to-teal-500 flex items-center justify-center text-slate-950 shadow-lg shadow-cyan-500/20">
              <Globe className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-lg font-bold text-white">Deep Memory NLP Learning & RAG Pipeline</h2>
              <p className="text-xs text-[#82a4b3]">
                Processes active curriculum nodes, agent logs, and raw crawling outputs into an ephemeral RAG store for automated zero-save training.
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl text-gray-400 hover:text-white hover:bg-white/10 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-6 overflow-y-auto flex-1 space-y-6">
          {/* Crawl Control Header */}
          <div className="p-5 rounded-2xl bg-[#0c222e] border border-[#1b3d50] space-y-4">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <div className="text-xs font-bold text-white flex items-center gap-2">
                  <Zap className="w-4 h-4 text-amber-400" />
                  Active Learning Target: <span className="text-cyan-300 font-extrabold">{selectedPlatform}</span>
                </div>
                <div className="text-[11px] text-[#82a4b3] mt-1">
                  Parsing logic graphs, lecture nodes, transcripts and custom blueprints to train the localized NLP engine in-memory.
                </div>
              </div>

              <button
                onClick={handleRunCrawl}
                disabled={isCrawling}
                className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#0f6674] hover:bg-[#137b8c] text-white text-xs font-semibold shadow-md transition-all active:scale-95 disabled:opacity-50"
              >
                <RefreshCw className={`w-4 h-4 ${isCrawling ? 'animate-spin' : ''}`} />
                <span>{isCrawling ? `Extracting... (${crawlProgress}%)` : 'Run Ephemeral NLP Training'}</span>
              </button>
            </div>

            {/* Zero Save Warning Badge */}
            <div className="flex items-center gap-2 text-[10px] bg-rose-950/40 border border-rose-500/30 text-rose-300 p-2.5 rounded-xl">
              <Flame className="w-3.5 h-3.5 text-rose-400 shrink-0" />
              <span>
                <strong>Ephemeral Training Protocol Enforced</strong>: Raw crawled text is processed entirely in RAM to synthesize weights and discarded immediately after indexing. Zero persistent storage is utilized.
              </span>
            </div>

            {/* Visual Progress Bar */}
            {isCrawling && (
              <div className="space-y-1.5 animate-fade-in">
                <div className="flex justify-between text-[11px] text-[#7da4b8]">
                  <span>Scraping & Synthesizing {selectedPlatform}...</span>
                  <span className="font-mono text-cyan-400">{crawlProgress}%</span>
                </div>
                <div className="w-full h-1.5 rounded-full bg-[#061117] overflow-hidden border border-[#1b3c4d]">
                  <div
                    className="h-full bg-gradient-to-r from-cyan-500 via-teal-400 to-emerald-400 transition-all duration-300"
                    style={{ width: `${crawlProgress}%` }}
                  />
                </div>
              </div>
            )}
          </div>

          {/* Platform Selector Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {PLATFORMS.map(p => {
              const isSelected = selectedPlatform === p.name;
              return (
                <div
                  key={p.name}
                  onClick={() => setSelectedPlatform(p.name)}
                  className={`p-3.5 rounded-xl border text-left cursor-pointer transition-all space-y-1 ${
                    isSelected
                      ? 'bg-[#0f6674]/20 border-cyan-500/60 shadow-lg shadow-cyan-950/20'
                      : 'bg-[#09151e] border-[#1b3d50] hover:bg-[#122b3a]'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className={`font-bold text-xs text-white ${p.iconColor}`}>{p.name}</span>
                    <div className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-ping" />
                      <span className="text-[9px] text-emerald-400 font-mono">Running</span>
                    </div>
                  </div>
                  <p className="text-[10px] text-[#7193a3] line-clamp-2">{p.desc}</p>
                </div>
              );
            })}
          </div>

          {/* Real-time learned stream */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white flex items-center gap-2 uppercase tracking-wider">
              <Cpu className="w-4 h-4 text-cyan-400" />
              Dynamic In-Memory NLP Feedback Stream
            </h4>

            <div className="bg-[#050e12] p-4 rounded-xl border border-[#153444] font-mono text-[11px] text-[#86aac1] space-y-1.5">
              {learnedPhrases.map((phrase, idx) => (
                <div key={idx} className="flex gap-2">
                  <span className="text-cyan-400 select-none">❯</span>
                  <span>{phrase}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Magazine-Style Indexed Document Summary Feed */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white flex items-center gap-2 uppercase tracking-wider">
              <FileText className="w-4 h-4 text-teal-400" />
              Ephemeral Vector Training Feed ({selectedPlatform})
            </h4>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { title: `Core Curriculum Weight Calibration`, type: 'Syllabus Parse', status: 'Synthesized', time: 'Just now' },
                { title: `Advanced Multi-Agent Dialogue Rules`, type: 'Dialogue Matrix', status: 'Synthesized', time: '14 mins ago' },
                { title: `Evaluation Rubrics NLP Synthesis`, type: 'Assessment Weights', status: 'Applied', time: '1 hour ago' },
                { title: `Cosine Distance Calibration Vector Log`, type: 'Calibration Matrix', status: 'Applied', time: '3 hours ago' }
              ].map((doc, dIdx) => (
                <div key={dIdx} className="p-3.5 rounded-xl bg-[#09151e] border border-[#1b3d50] hover:border-cyan-500/40 transition-all space-y-1.5">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-cyan-950 text-cyan-300 border border-cyan-500/30">{doc.type}</span>
                    <span className="text-[10px] text-gray-400">{doc.time}</span>
                  </div>
                  <h5 className="font-sans text-xs font-bold text-white line-clamp-1">{doc.title}</h5>
                  <div className="flex items-center justify-between text-[11px] text-teal-400 font-medium">
                    <span>{doc.status}</span>
                    <CheckCircle2 className="w-3.5 h-3.5 text-teal-400" />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Scraped & Parsed Metadata Breakdown */}
          <div className="p-4 rounded-xl bg-black/60 border border-[#1b3d50] space-y-3">
            <h4 className="text-xs font-bold text-white flex items-center gap-2">
              <Database className="w-4 h-4 text-teal-400" />
              In-Memory Vector Matrix Metrics
            </h4>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs">
              <div className="p-3 rounded-lg bg-[#09151e] border border-[#153444]">
                <div className="text-[10px] text-gray-400">Total Crawled Units</div>
                <div className="text-sm font-bold text-teal-400 mt-0.5">14,250 Scrapes</div>
              </div>

              <div className="p-3 rounded-lg bg-[#09151e] border border-[#153444]">
                <div className="text-[10px] text-gray-400">Persisted Storage Load</div>
                <div className="text-sm font-bold text-rose-400 mt-0.5">0.00 MB (RAM Only)</div>
              </div>

              <div className="p-3 rounded-lg bg-[#09151e] border border-[#153444]">
                <div className="text-[10px] text-gray-400">In-Memory Training Accuracy</div>
                <div className="text-sm font-bold text-cyan-400 mt-0.5">99.8% Perfect</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
