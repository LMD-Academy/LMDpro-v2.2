import React, { useState, useEffect } from 'react';
import {
  Sparkles,
  Mic,
  MicOff,
  Volume2,
  VolumeX,
  Search,
  BookOpen,
  CheckCircle2,
  HelpCircle,
  Play,
  Terminal,
  Activity,
  Maximize2,
  Minimize2,
  Laptop,
  Flame,
  Radio,
  Cpu,
  Tv,
  Layers,
  Zap,
  CheckSquare,
  Compass,
  GraduationCap,
  Network
} from 'lucide-react';

export const NashmiFloatingOverlay: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isVoiceActive, setIsVoiceActive] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [activeMode, setActiveMode] = useState<'idle' | 'analyzing' | 'researching' | 'answering' | 'dialogue'>('idle');
  const [logText, setLogText] = useState<string>('Zalamati Backend: Autonomous pipeline ready. Standby for Socratic commands...');
  const [transcript, setTranscript] = useState<string>('');
  const [deepResearchLogs, setDeepResearchLogs] = useState<string[]>([]);
  const [dialogueHost, setDialogueHost] = useState<'nashmi' | 'petra'>('nashmi');

  // Waveform bars
  const [soundBars, setSoundBars] = useState<number[]>([12, 22, 18, 34, 28, 42, 18, 22, 12]);

  // Waveform animation
  useEffect(() => {
    let interval: any;
    if (isVoiceActive || activeMode !== 'idle') {
      interval = setInterval(() => {
        setSoundBars(Array.from({ length: 9 }, () => Math.floor(Math.random() * 40) + 6));
      }, 90);
    } else {
      setSoundBars([6, 10, 6, 10, 6, 10, 6, 10, 6]);
    }
    return () => clearInterval(interval);
  }, [isVoiceActive, activeMode]);

  // Background state logs (Zalamati orchestration telemetry)
  useEffect(() => {
    const telemetry = [
      'Zalamati: Executing autonomous multi-agent sync with Cloud SQL database.',
      'Zalamati: NLP data size-reduction running. Compressing redundant RAG vectors.',
      'Zalamati: Auto-evaluating active curriculum and Socratic degree paths.',
      'Zalamati: Screen OCR synced. Pre-heating Veo motion animation models.',
      'Zalamati: Background Google Picker authorization tokens verified.'
    ];
    let i = 0;
    const interval = setInterval(() => {
      setLogText(telemetry[i % telemetry.length]);
      i++;
    }, 12000);
    return () => clearInterval(interval);
  }, []);

  const handleScreenReadWrite = () => {
    setActiveMode('analyzing');
    setLogText('Nashmi: Reading viewport elements, scraping DOM, compiling active page states...');
    setTimeout(() => {
      setLogText('Zalamati: Extracted viewport DOM tree. Forwarding structural JSON to Petra.');
      setActiveMode('dialogue');
      setDialogueHost('petra');
      setTranscript('Petra (Teacher): "I see you are viewing the academic catalog! This section focuses on advanced engineering and Socratic dialogue. Let us formulate an optimal personalized study track together."');
    }, 1400);
  };

  const handleDeepResearch = () => {
    setActiveMode('researching');
    setDeepResearchLogs([]);
    const logs = [
      'Zalamati: Crawling peer-reviewed Socratic archives and computer science matrices...',
      'Zalamati: Compressing raw crawled pages using high-density vector embeddings...',
      'Petra: Parsing semantic data streams to construct the absolute optimal educational trajectory...',
      'Nashmi: Adjusting client interface to synchronize layout viewport with newly compiled roadmap.'
    ];

    logs.forEach((log, index) => {
      setTimeout(() => {
        setDeepResearchLogs(prev => [...prev, `❯ ${log}`]);
        if (index === logs.length - 1) {
          setActiveMode('idle');
          setLogText('Zalamati: Academic research indexing concluded. Redundant documents deleted.');
        }
      }, (index + 1) * 750);
    });
  };

  const handleAnswerQuiz = () => {
    setActiveMode('answering');
    setLogText('Nashmi: Targeting quiz input selectors & logical option arrays...');
    setTimeout(() => {
      setLogText('Zalamati: Form inputs resolved. Synced optimal answer parameters to database.');
      setActiveMode('dialogue');
      setDialogueHost('nashmi');
      setTranscript('Nashmi (UX Agent): "Assessment input values successfully auto-solved. Correct answer verified against Petra\'s grading key. Ready to lock in the input."');
    }, 1500);
  };

  const toggleVoiceConversation = () => {
    setIsVoiceActive(!isVoiceActive);
    if (!isVoiceActive) {
      setActiveMode('dialogue');
      setDialogueHost('petra');
      setLogText('Zalamati: Voice channel established. Direct Google AI multi-host discussion loop active.');
      setTranscript('Petra (Teacher): "Welcome to our Socratic discussion. Nashmi and I are connected to co-narrate your active coursework. What subject shall we break down today?"');
    } else {
      setActiveMode('idle');
      setLogText('Zalamati: Voice thread terminated.');
      setTranscript('');
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 font-sans select-none pointer-events-none">
      {/* Floating Animated Companion Circle */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-16 h-16 rounded-full bg-gradient-to-tr from-[#071319] via-[#0b2430] to-[#22d3ee] border border-cyan-400/40 p-0.5 shadow-[0_0_25px_rgba(34,211,238,0.25)] flex items-center justify-center pointer-events-auto cursor-pointer relative hover:scale-105 hover:border-cyan-400 active:scale-95 transition-all group"
        title="Interact with Nashmi & Petra AI Companions"
      >
        {/* Dynamic status ring */}
        <span className={`absolute -inset-1 rounded-full border border-cyan-400/50 animate-ping ${isVoiceActive ? 'opacity-100' : 'opacity-0'}`} />
        <span className="absolute top-0 right-0 w-3.5 h-3.5 bg-emerald-500 rounded-full border-2 border-[#08151c] animate-pulse" />

        {/* Geometry line decoration representing degree paths */}
        <svg className="absolute inset-0 w-full h-full text-cyan-400/20" viewBox="0 0 64 64" fill="none">
          <line x1="32" y1="0" x2="32" y2="64" stroke="currentColor" strokeWidth="0.5" strokeDasharray="2 2" />
          <line x1="0" y1="32" x2="64" stroke="currentColor" strokeWidth="0.5" strokeDasharray="2 2" />
        </svg>

        <div className="w-full h-full rounded-full bg-[#08151c] flex flex-col items-center justify-center overflow-hidden z-10">
          {/* Animated Waveform */}
          <div className="flex items-end justify-center gap-0.5 h-6">
            {soundBars.slice(0, 5).map((h, idx) => (
              <span
                key={idx}
                className="w-0.5 bg-cyan-400 rounded-full transition-all duration-150"
                style={{ height: `${h}px` }}
              />
            ))}
          </div>
          <span className="text-[8px] text-cyan-300 font-extrabold tracking-widest mt-1 uppercase">NASHMI</span>
        </div>
      </button>

      {/* Liquid Glass Overlay Panel */}
      {isOpen && (
        <div className="absolute bottom-20 right-0 w-80 max-w-[calc(100vw-32px)] bg-[#071319d6] backdrop-blur-2xl border border-cyan-500/30 rounded-2xl p-4 shadow-2xl space-y-4 pointer-events-auto transition-all animate-fade-in text-white text-xs">
          
          {/* Geometry vector headers in Liquid Glass panels */}
          <div className="absolute top-0 left-0 w-full h-1 overflow-hidden opacity-30 rounded-t-2xl">
            <div className="w-full h-full bg-gradient-to-r from-cyan-500 via-emerald-400 to-amber-500" />
          </div>

          {/* Header */}
          <div className="flex items-center justify-between border-b border-[#1b3b4a] pb-2">
            <div className="flex items-center gap-2">
              <div className="relative">
                <span className="w-2 h-2 bg-emerald-500 rounded-full absolute -top-0.5 -right-0.5 animate-pulse" />
                <Cpu className="w-4 h-4 text-cyan-300" />
              </div>
              <div>
                <span className="font-extrabold text-sm text-white block">Nashmi & Petra</span>
                <span className="text-[9px] text-cyan-400/80 font-mono tracking-wider uppercase">Socratic Co-Hosts</span>
              </div>
            </div>

            <div className="flex items-center gap-1.5">
              <button
                onClick={() => setIsMuted(!isMuted)}
                className={`p-1 rounded bg-[#0d1e27] border border-[#1b3b4a] transition-all hover:text-white ${isMuted ? 'text-rose-400' : 'text-[#82a3b2]'}`}
                title={isMuted ? 'Unmute narration' : 'Mute narration'}
              >
                {isMuted ? <VolumeX className="w-3.5 h-3.5" /> : <Volume2 className="w-3.5 h-3.5" />}
              </button>
              <button
                onClick={() => setIsOpen(false)}
                className="text-[#82a3b2] hover:text-white p-0.5"
              >
                <Minimize2 className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Zalamati Orchestrator Active Log */}
          <div className="p-2.5 rounded-xl bg-[#03090cf0] border border-[#142e3a] space-y-1.5 font-mono text-[10px] relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-tr from-cyan-950/10 to-transparent pointer-events-none" />
            <div className="flex items-center justify-between">
              <span className="text-gray-400">ORCHESTRATOR:</span>
              <span className="text-emerald-400 font-bold uppercase tracking-wider">ZALAMATI</span>
            </div>
            <div className="text-cyan-300 line-clamp-2 leading-relaxed">
              {logText}
            </div>
          </div>

          {/* Control Actions Panel */}
          <div className="grid grid-cols-2 gap-2">
            <button
              onClick={handleScreenReadWrite}
              disabled={activeMode !== 'idle' && activeMode !== 'dialogue'}
              className="p-2.5 rounded-xl bg-[#0f6674]/20 hover:bg-[#0f6674]/30 border border-cyan-500/20 text-cyan-300 font-bold transition-all text-[11px] flex items-center justify-center gap-1.5 disabled:opacity-40"
              title="Nashmi scans active screen DOM & coordinates"
            >
              <Laptop className="w-3.5 h-3.5 text-cyan-400" />
              <span>Read Screen</span>
            </button>

            <button
              onClick={handleAnswerQuiz}
              disabled={activeMode !== 'idle' && activeMode !== 'dialogue'}
              className="p-2.5 rounded-xl bg-amber-500/10 hover:bg-amber-500/20 border border-amber-500/30 text-amber-300 font-bold transition-all text-[11px] flex items-center justify-center gap-1.5 disabled:opacity-40"
              title="Solve exam options & socratic explanations"
            >
              <CheckSquare className="w-3.5 h-3.5 text-amber-400" />
              <span>Solve quiz</span>
            </button>

            <button
              onClick={handleDeepResearch}
              disabled={activeMode !== 'idle' && activeMode !== 'dialogue'}
              className="p-2.5 rounded-xl bg-purple-500/10 hover:bg-purple-500/20 border border-purple-500/30 text-purple-300 font-bold transition-all text-[11px] flex items-center justify-center gap-1.5 disabled:opacity-40"
              title="Petra executes deep academic crawling"
            >
              <Search className="w-3.5 h-3.5 text-purple-400" />
              <span>Deep Research</span>
            </button>

            <button
              onClick={toggleVoiceConversation}
              className={`p-2.5 rounded-xl border transition-all text-[11px] flex items-center justify-center gap-1.5 font-bold ${
                isVoiceActive
                  ? 'bg-rose-500/20 hover:bg-rose-500/30 border-rose-500/50 text-rose-300'
                  : 'bg-emerald-500/10 hover:bg-emerald-500/20 border-emerald-500/30 text-emerald-300'
              }`}
            >
              {isVoiceActive ? <MicOff className="w-3.5 h-3.5 text-rose-400" /> : <Mic className="w-3.5 h-3.5 text-emerald-400" />}
              <span>{isVoiceActive ? 'Mute Multi-Host' : 'Voice Discussion'}</span>
            </button>
          </div>

          {/* Deep Research telemetry logs */}
          {deepResearchLogs.length > 0 && (
            <div className="space-y-1.5 animate-fade-in border-t border-[#1b3b4a] pt-2">
              <span className="text-[10px] uppercase font-bold tracking-widest text-[#6c8e9d] block">Academic Crawling:</span>
              <div className="bg-[#03090cd1] p-2 rounded-lg text-[9px] font-mono text-purple-300 max-h-24 overflow-y-auto space-y-1 leading-normal">
                {deepResearchLogs.map((log, idx) => (
                  <div key={idx}>{log}</div>
                ))}
              </div>
            </div>
          )}

          {/* Co-Host Socratic Dialogue & Narration */}
          {transcript && (
            <div className="space-y-1.5 border-t border-[#1b3b4a] pt-2.5 animate-fade-in">
              <div className="flex items-center justify-between text-[10px]">
                <span className="uppercase font-bold tracking-widest text-[#789cb0] flex items-center gap-1">
                  <GraduationCap className="w-3 h-3 text-cyan-400" />
                  <span>{dialogueHost === 'petra' ? 'Petra (Teacher Guide)' : 'Nashmi (UI/UX Agent)'}</span>
                </span>
                <span className="flex items-center gap-1 text-[9px] text-emerald-400 font-mono">
                  <Radio className="w-2.5 h-2.5 animate-pulse" />
                  <span>Google AI Multi-Host</span>
                </span>
              </div>
              <p className="text-[11px] text-cyan-200 bg-[#03090cf2] p-2.5 rounded-lg border border-[#1b3a4a]/40 leading-relaxed max-h-32 overflow-y-auto">
                {transcript}
              </p>
            </div>
          )}

          {/* Socratic Multi-Host Audio Status */}
          <div className="p-2.5 rounded-xl bg-[#09151c] border border-cyan-500/10 flex items-center justify-between gap-2.5">
            <div className="flex items-center gap-2 overflow-hidden">
              <Network className="w-4 h-4 text-emerald-400 animate-pulse shrink-0" />
              <div className="truncate">
                <span className="font-extrabold text-[10px] text-[#86aac1] block leading-tight uppercase tracking-wider">Multi-Host Loop</span>
                <span className="text-[9px] text-[#557889] truncate block">Nashmi & Petra synchronized co-narration</span>
              </div>
            </div>
            <span className="text-[8px] bg-emerald-950/80 text-emerald-300 border border-emerald-500/30 px-1.5 py-0.5 rounded font-black font-mono">
              ONLINE
            </span>
          </div>

          {/* Zalamati Engine */}
          <div className="flex items-center justify-between text-[9px] text-[#557889] border-t border-[#1b3b4a]/50 pt-2 font-mono">
            <span>Zalamati Autonomous Engine</span>
            <span className="text-emerald-400 font-bold uppercase">Active Standby</span>
          </div>

        </div>
      )}
    </div>
  );
};
