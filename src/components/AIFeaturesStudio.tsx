import React, { useState } from 'react';
import {
  Sparkles,
  Image as ImageIcon,
  Video,
  Music,
  Globe,
  MapPin,
  Brain,
  MessageSquare,
  Send,
  Loader2,
  CheckCircle2,
  Sliders,
  Maximize2,
  FileSearch,
  Mic,
  Zap,
  Bot
} from 'lucide-react';

export const AIFeaturesStudio: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'creative' | 'grounding' | 'perception' | 'chat'>('creative');

  // Creative Studio State
  const [imagePrompt, setImagePrompt] = useState('An futuristic AI research laboratory with liquid glass holographic monitors and glowing cyan energy nodes');
  const [aspectRatio, setAspectRatio] = useState<string>('16:9');
  const [resolution, setResolution] = useState<string>('1K');
  const [isProImage, setIsProImage] = useState(false);
  const [generatedImage, setGeneratedImage] = useState<string | null>(null);
  const [isGeneratingImage, setIsGeneratingImage] = useState(false);

  // Veo Video State
  const [videoPrompt, setVideoPrompt] = useState('Cinematic aerial flythrough of an autonomous neural network processing quantum data streams');
  const [videoUrl, setVideoUrl] = useState<string | null>(null);
  const [isGeneratingVideo, setIsGeneratingVideo] = useState(false);

  // Lyria Music State
  const [musicPrompt, setMusicPrompt] = useState('Ambient lofi piano beat with soft vinyl crackle for deep focus study');
  const [audioUrl, setAudioUrl] = useState<string | null>(null);
  const [isGeneratingMusic, setIsGeneratingMusic] = useState(false);

  // Grounding State
  const [searchQuery, setSearchQuery] = useState('Latest breakthroughs in autonomous agentic AI and multi-agent systems 2026');
  const [searchResult, setSearchResult] = useState<string | null>(null);
  const [searchSources, setSearchSources] = useState<any[]>([]);
  const [isSearching, setIsSearching] = useState(false);

  // Maps Grounding State
  const [mapsQuery, setMapsQuery] = useState('Top computer science university research labs and quantum computing centers');
  const [mapsResult, setMapsResult] = useState<string | null>(null);
  const [isMapsLoading, setIsMapsLoading] = useState(false);

  // Thinking Mode State
  const [thinkingPrompt, setThinkingPrompt] = useState('Analyze the time complexity of Raft distributed consensus under network partition scenarios.');
  const [thinkingResult, setThinkingResult] = useState<string | null>(null);
  const [isThinking, setIsThinking] = useState(false);

  // Chat State
  const [chatModel, setChatModel] = useState<'lite' | 'pro'>('lite');
  const [chatInput, setChatInput] = useState('');
  const [chatMessages, setChatMessages] = useState<Array<{ role: 'user' | 'assistant'; text: string }>>([
    { role: 'assistant', text: 'Hello! I am your Gemini 3.1 AI Assistant. How can I help you master your coursework today?' }
  ]);
  const [isChatLoading, setIsChatLoading] = useState(false);

  // Handlers
  const handleGenerateImage = async () => {
    setIsGeneratingImage(true);
    setGeneratedImage(null);
    try {
      const res = await fetch('/api/gemini/generate-image', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt: imagePrompt, aspectRatio, resolution, isPro: isProImage })
      });
      const data = await res.json();
      setGeneratedImage(data.imageUrl);
    } catch (err) {
      console.error(err);
    } finally {
      setIsGeneratingImage(false);
    }
  };

  const handleGenerateVideo = async () => {
    setIsGeneratingVideo(true);
    setVideoUrl(null);
    try {
      const res = await fetch('/api/gemini/generate-video', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt: videoPrompt, aspectRatio })
      });
      const data = await res.json();
      setVideoUrl(data.videoUrl);
    } catch (err) {
      console.error(err);
    } finally {
      setIsGeneratingVideo(false);
    }
  };

  const handleGenerateMusic = async () => {
    setIsGeneratingMusic(true);
    setAudioUrl(null);
    try {
      const res = await fetch('/api/gemini/generate-music', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt: musicPrompt })
      });
      const data = await res.json();
      setAudioUrl(data.audioUrl);
    } catch (err) {
      console.error(err);
    } finally {
      setIsGeneratingMusic(false);
    }
  };

  const handleSearchGrounding = async () => {
    setIsSearching(true);
    setSearchResult(null);
    try {
      const res = await fetch('/api/gemini/search-grounding', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ query: searchQuery })
      });
      const data = await res.json();
      setSearchResult(data.result);
      setSearchSources(data.sources || []);
    } catch (err) {
      console.error(err);
    } finally {
      setIsSearching(false);
    }
  };

  const handleMapsGrounding = async () => {
    setIsMapsLoading(true);
    setMapsResult(null);
    try {
      const res = await fetch('/api/gemini/maps-grounding', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt: mapsQuery })
      });
      const data = await res.json();
      setMapsResult(data.result);
    } catch (err) {
      console.error(err);
    } finally {
      setIsMapsLoading(false);
    }
  };

  const handleHighThinking = async () => {
    setIsThinking(true);
    setThinkingResult(null);
    try {
      const res = await fetch('/api/gemini/tutor', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt: thinkingPrompt, thinkingMode: true })
      });
      const data = await res.json();
      setThinkingResult(data.reply);
    } catch (err) {
      console.error(err);
    } finally {
      setIsThinking(false);
    }
  };

  const handleSendChat = async () => {
    if (!chatInput.trim()) return;
    const userMsg = chatInput.trim();
    setChatInput('');
    setChatMessages((prev) => [...prev, { role: 'user', text: userMsg }]);
    setIsChatLoading(true);

    try {
      const res = await fetch('/api/gemini/tutor', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt: userMsg, thinkingMode: chatModel === 'pro' })
      });
      const data = await res.json();
      setChatMessages((prev) => [...prev, { role: 'assistant', text: data.reply }]);
    } catch (err) {
      console.error(err);
    } finally {
      setIsChatLoading(false);
    }
  };

  return (
    <div className="p-5 md:p-6 rounded-3xl bg-[#0a161f] border border-[#1b3b4a] text-white space-y-6 shadow-2xl animate-fade-in">
      {/* Top Banner */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#163240] pb-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-0.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-bold uppercase tracking-wider">
              Multimodal AI Studio
            </span>
            <span className="text-[11px] text-[#7195a6]">Powered by Gemini 3.1 Pro, Flash, Veo 3.1 & Lyria 3</span>
          </div>
          <h2 className="text-2xl font-black text-white mt-1">Zalamati Next-Gen AI Feature Studio</h2>
        </div>

        {/* Tab Buttons */}
        <div className="flex items-center gap-1.5 bg-[#051117] p-1.5 rounded-2xl border border-[#183848]">
          {[
            { id: 'creative', label: 'Creative Media', icon: Sparkles },
            { id: 'grounding', label: 'Grounding & Thinking', icon: Globe },
            { id: 'chat', label: 'Gemini Chatbot', icon: Bot },
          ].map((tab) => {
            const Icon = tab.icon;
            const active = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`flex items-center gap-2 px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all ${
                  active
                    ? 'bg-gradient-to-r from-cyan-500 to-teal-400 text-slate-950 font-black shadow-md'
                    : 'text-[#80a2b3] hover:text-white hover:bg-white/5'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* 1. CREATIVE MEDIA TAB */}
      {activeTab === 'creative' && (
        <div className="space-y-8">
          {/* Image & Video Generation */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Image Generator Card */}
            <div className="p-5 rounded-2xl bg-[#0e1f2a] border border-[#1d3f50] space-y-4 shadow-xl">
              <div className="flex items-center justify-between border-b border-[#183848] pb-3">
                <div className="flex items-center gap-2">
                  <ImageIcon className="w-4 h-4 text-cyan-400" />
                  <h3 className="text-sm font-bold text-white">Gemini Image Generator</h3>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setIsProImage(!isProImage)}
                    className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold border transition-colors ${
                      isProImage ? 'bg-purple-950 text-purple-300 border-purple-500/40' : 'bg-cyan-950 text-cyan-300 border-cyan-500/40'
                    }`}
                  >
                    {isProImage ? 'Pro Image Model' : 'Flash Image Model'}
                  </button>
                </div>
              </div>

              <textarea
                value={imagePrompt}
                onChange={(e) => setImagePrompt(e.target.value)}
                rows={3}
                className="w-full p-3 rounded-xl bg-[#051117] border border-[#1a3848] text-xs text-white placeholder-[#5e8293] focus:outline-none focus:border-cyan-400"
                placeholder="Describe image to generate..."
              />

              <div className="grid grid-cols-2 gap-3 text-xs">
                <div>
                  <label className="text-[10px] font-bold text-[#7297a8] uppercase">Aspect Ratio</label>
                  <select
                    value={aspectRatio}
                    onChange={(e) => setAspectRatio(e.target.value)}
                    className="w-full mt-1 p-2 rounded-xl bg-[#051117] border border-[#1a3848] text-cyan-300 font-bold focus:outline-none"
                  >
                    {['1:1', '2:3', '3:2', '3:4', '4:3', '9:16', '16:9', '21:9'].map((ratio) => (
                      <option key={ratio} value={ratio}>{ratio}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="text-[10px] font-bold text-[#7297a8] uppercase">Resolution</label>
                  <select
                    value={resolution}
                    onChange={(e) => setResolution(e.target.value)}
                    className="w-full mt-1 p-2 rounded-xl bg-[#051117] border border-[#1a3848] text-cyan-300 font-bold focus:outline-none"
                  >
                    {['1K', '2K', '4K'].map((res) => (
                      <option key={res} value={res}>{res}</option>
                    ))}
                  </select>
                </div>
              </div>

              <button
                onClick={handleGenerateImage}
                disabled={isGeneratingImage}
                className="w-full py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-teal-400 text-slate-950 font-black text-xs shadow-md flex items-center justify-center gap-2"
              >
                {isGeneratingImage ? <Loader2 className="w-4 h-4 animate-spin" /> : <Sparkles className="w-4 h-4" />}
                <span>{isGeneratingImage ? 'Generating Image...' : 'Generate Image'}</span>
              </button>

              {generatedImage && (
                <div className="rounded-xl overflow-hidden border border-[#1a3848] bg-[#051117] p-2">
                  <img src={generatedImage} alt="Generated AI preview" className="w-full rounded-lg object-cover" />
                </div>
              )}
            </div>

            {/* Veo Video Generator Card */}
            <div className="p-5 rounded-2xl bg-[#0e1f2a] border border-[#1d3f50] space-y-4 shadow-xl">
              <div className="flex items-center justify-between border-b border-[#183848] pb-3">
                <div className="flex items-center gap-2">
                  <Video className="w-4 h-4 text-purple-400" />
                  <h3 className="text-sm font-bold text-white">Veo Video Generator (`veo-3.1-fast-generate-preview`)</h3>
                </div>
              </div>

              <textarea
                value={videoPrompt}
                onChange={(e) => setVideoPrompt(e.target.value)}
                rows={3}
                className="w-full p-3 rounded-xl bg-[#051117] border border-[#1a3848] text-xs text-white placeholder-[#5e8293] focus:outline-none focus:border-purple-400"
                placeholder="Describe video clip to generate..."
              />

              <button
                onClick={handleGenerateVideo}
                disabled={isGeneratingVideo}
                className="w-full py-2.5 rounded-xl bg-gradient-to-r from-purple-500 to-indigo-500 text-white font-black text-xs shadow-md flex items-center justify-center gap-2"
              >
                {isGeneratingVideo ? <Loader2 className="w-4 h-4 animate-spin" /> : <Video className="w-4 h-4" />}
                <span>{isGeneratingVideo ? 'Rendering Veo Video...' : 'Generate Veo Video'}</span>
              </button>

              {videoUrl && (
                <div className="rounded-xl overflow-hidden border border-[#1a3848] bg-[#051117] p-2">
                  <video src={videoUrl} controls className="w-full rounded-lg" autoPlay loop muted />
                </div>
              )}
            </div>
          </div>

          {/* Lyria Music Generator */}
          <div className="p-5 rounded-2xl bg-[#0e1f2a] border border-[#1d3f50] space-y-4 shadow-xl">
            <div className="flex items-center gap-2 border-b border-[#183848] pb-3">
              <Music className="w-4 h-4 text-emerald-400" />
              <h3 className="text-sm font-bold text-white">Lyria Music Generator (`lyria-3-clip-preview`)</h3>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-3">
              <input
                type="text"
                value={musicPrompt}
                onChange={(e) => setMusicPrompt(e.target.value)}
                className="flex-1 px-4 py-2.5 rounded-xl bg-[#051117] border border-[#1a3848] text-xs text-white placeholder-[#5e8293] focus:outline-none focus:border-emerald-400"
                placeholder="Describe music style or mood..."
              />

              <button
                onClick={handleGenerateMusic}
                disabled={isGeneratingMusic}
                className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-400 text-slate-950 font-black text-xs shadow-md flex items-center gap-2 shrink-0"
              >
                {isGeneratingMusic ? <Loader2 className="w-4 h-4 animate-spin" /> : <Music className="w-4 h-4" />}
                <span>{isGeneratingMusic ? 'Synthesizing...' : 'Generate Music'}</span>
              </button>
            </div>

            {audioUrl && (
              <div className="p-3 rounded-xl bg-[#051117] border border-emerald-500/30 flex items-center gap-4">
                <Music className="w-5 h-5 text-emerald-400 shrink-0" />
                <audio src={audioUrl} controls className="w-full" />
              </div>
            )}
          </div>
        </div>
      )}

      {/* 2. GROUNDING & THINKING TAB */}
      {activeTab === 'grounding' && (
        <div className="space-y-6">
          {/* Google Search Grounding */}
          <div className="p-5 rounded-2xl bg-[#0e1f2a] border border-[#1d3f50] space-y-4 shadow-xl">
            <div className="flex items-center gap-2 border-b border-[#183848] pb-3">
              <Globe className="w-4 h-4 text-cyan-400" />
              <h3 className="text-sm font-bold text-white">Google Search Grounding (`gemini-3.5-flash` + Search)</h3>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-3">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="flex-1 px-4 py-2.5 rounded-xl bg-[#051117] border border-[#1a3848] text-xs text-white focus:outline-none focus:border-cyan-400"
              />

              <button
                onClick={handleSearchGrounding}
                disabled={isSearching}
                className="px-6 py-2.5 rounded-xl bg-cyan-600 hover:bg-cyan-500 text-white font-bold text-xs shadow-md flex items-center gap-2 shrink-0"
              >
                {isSearching ? <Loader2 className="w-4 h-4 animate-spin" /> : <Globe className="w-4 h-4" />}
                <span>Search Live Web</span>
              </button>
            </div>

            {searchResult && (
              <div className="p-4 rounded-xl bg-[#051117] border border-[#1a3848] text-xs text-[#a2c2d1] leading-relaxed space-y-3">
                <div>{searchResult}</div>
                {searchSources.length > 0 && (
                  <div className="pt-2 border-t border-[#122b38] flex flex-wrap gap-2 text-[10px]">
                    <span className="font-bold text-cyan-400">Sources:</span>
                    {searchSources.map((s, idx) => (
                      <a key={idx} href={s.url} target="_blank" rel="noreferrer" className="text-cyan-300 underline hover:text-white">
                        {s.title}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            )}
          </div>

          {/* High Thinking Mode */}
          <div className="p-5 rounded-2xl bg-[#0e1f2a] border border-[#1d3f50] space-y-4 shadow-xl">
            <div className="flex items-center gap-2 border-b border-[#183848] pb-3">
              <Brain className="w-4 h-4 text-purple-400" />
              <h3 className="text-sm font-bold text-white">High Thinking Mode (`gemini-3.1-pro-preview` High Reasoning)</h3>
            </div>

            <textarea
              value={thinkingPrompt}
              onChange={(e) => setThinkingPrompt(e.target.value)}
              rows={3}
              className="w-full p-3 rounded-xl bg-[#051117] border border-[#1a3848] text-xs text-white focus:outline-none focus:border-purple-400"
            />

            <button
              onClick={handleHighThinking}
              disabled={isThinking}
              className="px-6 py-2.5 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-bold text-xs shadow-md flex items-center gap-2"
            >
              {isThinking ? <Loader2 className="w-4 h-4 animate-spin" /> : <Brain className="w-4 h-4" />}
              <span>{isThinking ? 'Thinking Deeply...' : 'Execute Deep Reasoning'}</span>
            </button>

            {thinkingResult && (
              <div className="p-4 rounded-xl bg-[#051117] border border-purple-500/30 text-xs text-purple-200 leading-relaxed font-mono whitespace-pre-wrap">
                {thinkingResult}
              </div>
            )}
          </div>
        </div>
      )}

      {/* 3. GEMINI CHATBOT TAB */}
      {activeTab === 'chat' && (
        <div className="p-5 rounded-2xl bg-[#0e1f2a] border border-[#1d3f50] space-y-4 shadow-xl">
          <div className="flex items-center justify-between border-b border-[#183848] pb-3">
            <div className="flex items-center gap-2">
              <Bot className="w-4 h-4 text-cyan-400" />
              <h3 className="text-sm font-bold text-white">Gemini Multi-Turn AI Chatbot</h3>
            </div>

            <div className="flex items-center gap-1.5 bg-[#051117] p-1 rounded-xl border border-[#183848]">
              <button
                onClick={() => setChatModel('lite')}
                className={`px-3 py-1 rounded-lg text-xs font-bold ${
                  chatModel === 'lite' ? 'bg-cyan-500 text-slate-950' : 'text-[#7297a8]'
                }`}
              >
                Flash-Lite
              </button>
              <button
                onClick={() => setChatModel('pro')}
                className={`px-3 py-1 rounded-lg text-xs font-bold ${
                  chatModel === 'pro' ? 'bg-purple-500 text-white' : 'text-[#7297a8]'
                }`}
              >
                Pro Thinking
              </button>
            </div>
          </div>

          <div className="min-h-[260px] max-h-[360px] overflow-y-auto p-4 rounded-xl bg-[#051117] border border-[#1a3848] space-y-3">
            {chatMessages.map((msg, idx) => (
              <div
                key={idx}
                className={`flex gap-2 text-xs leading-relaxed ${
                  msg.role === 'user' ? 'justify-end' : 'justify-start'
                }`}
              >
                <div
                  className={`max-w-[80%] p-3 rounded-2xl ${
                    msg.role === 'user'
                      ? 'bg-cyan-600 text-white rounded-br-none'
                      : 'bg-[#10222e] text-[#b0d2e0] border border-[#1c3e50] rounded-bl-none'
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            {isChatLoading && (
              <div className="flex items-center gap-2 text-xs text-cyan-400">
                <Loader2 className="w-4 h-4 animate-spin" />
                <span>Gemini is thinking...</span>
              </div>
            )}
          </div>

          <div className="flex items-center gap-2">
            <input
              type="text"
              value={chatInput}
              onChange={(e) => setChatInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSendChat()}
              placeholder="Ask Gemini anything about your courses..."
              className="flex-1 px-4 py-2.5 rounded-xl bg-[#051117] border border-[#1a3848] text-xs text-white focus:outline-none focus:border-cyan-400"
            />
            <button
              onClick={handleSendChat}
              disabled={isChatLoading}
              className="p-2.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold shadow-md"
            >
              <Send className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
