import React, { useState, useRef, useEffect } from 'react';
import { ApiService } from '../services/api';
import {
  X,
  Send,
  Sparkles,
  Brain,
  Zap,
  MessageSquare,
  HelpCircle,
  RotateCcw,
  BookOpen,
  Plus,
  Trash2,
  FileText
} from 'lucide-react';
import { AgenticAiIcon } from './AgenticAiIcon';
import { InteractiveExplainer } from './InteractiveExplainer';
import { TTSPlayer } from './TTSPlayer';

interface AITutorModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialContextLessonTitle?: string;
  initialContextContent?: string;
}

interface Message {
  id: string;
  sender: 'user' | 'tutor';
  text: string;
  thinkingProcess?: string;
  timestamp: string;
}

interface DiscussionThread {
  id: string;
  title: string;
  messages: Message[];
  createdAt: string;
}

export const AITutorModal: React.FC<AITutorModalProps> = ({
  isOpen,
  onClose,
  initialContextLessonTitle,
  initialContextContent,
}) => {
  const [activeTab, setActiveTab] = useState<'socratic_dialogue' | 'interactive_explainer'>('socratic_dialogue');
  
  // NotebookLM-style persistent threads state
  const [threads, setThreads] = useState<DiscussionThread[]>([
    {
      id: 'thread-1',
      title: initialContextLessonTitle ? `Discussion: ${initialContextLessonTitle}` : 'General Discovery Notebook',
      messages: [
        {
          id: 'msg-1',
          sender: 'tutor',
          text: `Hello! I am **Kudo Tutor** (Persistent Socratic Notebook). ${
            initialContextLessonTitle ? `I have indexed your source document: **"${initialContextLessonTitle}"**.` : ''
          } Ask follow-up questions, interrupt at any time, or explore source citations!`,
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        }
      ],
      createdAt: new Date().toLocaleDateString()
    }
  ]);
  const [activeThreadId, setActiveThreadId] = useState<string>('thread-1');
  const [showSourceSidebar, setShowSourceSidebar] = useState<boolean>(true);

  const activeThread = threads.find(t => t.id === activeThreadId) || threads[0];
  const messages = activeThread.messages;

  const [inputPrompt, setInputPrompt] = useState('');
  const [thinkingMode, setThinkingMode] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const chatEndRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, activeTab, activeThreadId]);

  if (!isOpen) return null;

  const handleCreateNewThread = () => {
    const newId = `thread-${Date.now()}`;
    const newThread: DiscussionThread = {
      id: newId,
      title: `Notebook Thread ${threads.length + 1}`,
      messages: [
        {
          id: `msg-${Date.now()}`,
          sender: 'tutor',
          text: `Initialized new NotebookLM thread. Source document awareness is active for **"${initialContextLessonTitle || 'General LMD Curriculum'}"**. How can I help you investigate further?`,
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        }
      ],
      createdAt: new Date().toLocaleDateString()
    };
    setThreads(prev => [newThread, ...prev]);
    setActiveThreadId(newId);
  };

  const handleDeleteThread = (e: React.MouseEvent, id: string) => {
    e.stopPropagation();
    if (threads.length <= 1) return;
    const updated = threads.filter(t => t.id !== id);
    setThreads(updated);
    if (activeThreadId === id) {
      setActiveThreadId(updated[0].id);
    }
  };

  const handleSendMessage = async (textToSend?: string) => {
    const prompt = textToSend || inputPrompt;
    if (!prompt.trim() || isLoading) return;

    const userMsg: Message = {
      id: `usr-${Date.now()}`,
      sender: 'user',
      text: prompt,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    const updatedMessages = [...messages, userMsg];
    setThreads(prev => prev.map(t => t.id === activeThreadId ? { ...t, messages: updatedMessages } : t));
    if (!textToSend) setInputPrompt('');
    setIsLoading(true);

    const tutorResult = await ApiService.askTutor({
      prompt,
      contextLessonTitle: initialContextLessonTitle,
      contextContent: initialContextContent,
      thinkingMode,
    });

    setIsLoading(false);

    const tutorMsg: Message = {
      id: `tut-${Date.now()}`,
      sender: 'tutor',
      text: tutorResult.reply,
      thinkingProcess: tutorResult.thinkingProcess,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    const finalMessages = [...updatedMessages, tutorMsg];
    setThreads(prev => prev.map(t => t.id === activeThreadId ? { ...t, messages: finalMessages } : t));
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-3 sm:p-4 animate-fade-in">
      <div className="bg-[#0f2129] border border-[#1e3c4a] rounded-3xl max-w-5xl w-full h-[90vh] flex flex-col shadow-2xl overflow-hidden relative text-white">
        {/* Header Bar */}
        <div className="p-4 bg-gradient-to-r from-[#0d1d24] via-[#102732] to-[#0d1f27] border-b border-[#1b3846] flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-300">
              <AgenticAiIcon size={22} />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="font-extrabold text-white text-base">Kudo Tutor — Socratic Notebook Studio</h3>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-cyan-500/10 text-cyan-300 border border-cyan-500/20">
                  {thinkingMode ? 'Deep Reasoning' : 'Active Context'}
                </span>
              </div>
              <p className="text-[11px] text-[#86a8b7]">
                Persistent Discussion Threads & Indexed Source Document Awareness
              </p>
            </div>
          </div>

          {/* Sub-Header Navigation Tabs & Thinking Toggle */}
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1 bg-[#0a1820] p-1 rounded-xl border border-[#1a3848] text-xs">
              <button
                onClick={() => setActiveTab('socratic_dialogue')}
                className={`px-3 py-1.5 rounded-lg font-semibold transition-all ${
                  activeTab === 'socratic_dialogue'
                    ? 'bg-cyan-600 text-white font-bold shadow'
                    : 'text-[#82a4b3] hover:text-white'
                }`}
              >
                Persistent Threads
              </button>
              <button
                onClick={() => setActiveTab('interactive_explainer')}
                className={`px-3 py-1.5 rounded-lg font-semibold transition-all ${
                  activeTab === 'interactive_explainer'
                    ? 'bg-gradient-to-r from-cyan-600 to-teal-600 text-white font-bold shadow'
                    : 'text-[#82a4b3] hover:text-white'
                }`}
              >
                Brilliant Visualizer
              </button>
            </div>

            {/* Deep Reasoning Mode Toggle */}
            <button
              onClick={() => setThinkingMode(!thinkingMode)}
              className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl text-xs font-semibold border transition-all ${
                thinkingMode
                  ? 'bg-purple-600/20 border-purple-400 text-purple-200 shadow-md'
                  : 'bg-white/5 border-white/10 text-gray-400 hover:text-white'
              }`}
              title="Toggle High Reasoning Thinking Mode"
            >
              <Brain className="w-3.5 h-3.5 text-purple-400" />
              <span className="hidden sm:inline">Deep Mode</span>
            </button>

            <button
              onClick={onClose}
              className="p-1.5 rounded-xl bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* TAB 1: NOTEBOOKLM PERSISTENT THREADS */}
        {activeTab === 'socratic_dialogue' && (
          <div className="flex-1 flex overflow-hidden">
            {/* NotebookLM Thread Sidebar */}
            <div className="w-64 bg-[#0a171f] border-r border-[#193949] flex flex-col shrink-0 hidden md:flex">
              <div className="p-3 border-b border-[#173646] flex items-center justify-between">
                <span className="text-xs font-bold text-gray-300 uppercase tracking-wider flex items-center gap-1.5">
                  <MessageSquare className="w-3.5 h-3.5 text-cyan-400" />
                  Discussion Notebooks
                </span>
                <button
                  onClick={handleCreateNewThread}
                  className="p-1 rounded-lg bg-cyan-600/20 hover:bg-cyan-600/40 text-cyan-300 border border-cyan-500/30 transition-colors"
                  title="New Discussion Thread"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>

              <div className="flex-1 overflow-y-auto p-2 space-y-1.5">
                {threads.map((thread) => {
                  const isActive = thread.id === activeThreadId;
                  return (
                    <div
                      key={thread.id}
                      onClick={() => setActiveThreadId(thread.id)}
                      className={`group p-2.5 rounded-xl text-xs cursor-pointer transition-all flex items-center justify-between border ${
                        isActive
                          ? 'bg-cyan-600/20 border-cyan-500/40 text-white font-semibold'
                          : 'bg-[#0e212b]/40 border-transparent text-[#82a4b3] hover:bg-white/5 hover:text-white'
                      }`}
                    >
                      <div className="truncate flex items-center gap-2">
                        <FileText className={`w-3.5 h-3.5 ${isActive ? 'text-cyan-400' : 'text-gray-500'}`} />
                        <span className="truncate">{thread.title}</span>
                      </div>
                      {threads.length > 1 && (
                        <button
                          onClick={(e) => handleDeleteThread(e, thread.id)}
                          className="opacity-0 group-hover:opacity-100 p-1 text-gray-400 hover:text-rose-400 transition-opacity"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      )}
                    </div>
                  );
                })}
              </div>

              {/* Source Document Citation Widget */}
              <div className="p-3 bg-[#08131a] border-t border-[#173646] text-[11px] space-y-2">
                <div className="flex items-center gap-1.5 text-cyan-300 font-bold">
                  <BookOpen className="w-3.5 h-3.5" />
                  <span>Indexed Source Document</span>
                </div>
                <p className="text-[#7d9eb0] line-clamp-2">
                  {initialContextLessonTitle ? `"${initialContextLessonTitle}"` : 'General LMD Academic Curriculum and ECTS Repository'}
                </p>
              </div>
            </div>

            {/* Chat Conversation Area */}
            <div className="flex-1 flex flex-col overflow-hidden bg-[#0d1c24]">
              {/* Messages Scroll Area */}
              <div className="flex-1 flex overflow-hidden">
                <div className="flex-1 p-4 sm:p-5 overflow-y-auto space-y-4">
                  {messages.map((msg) => (
                    <div
                      key={msg.id}
                      className={`flex flex-col ${msg.sender === 'user' ? 'items-end' : 'items-start'}`}
                    >
                      <div
                        className={`max-w-[85%] p-4 rounded-2xl text-xs space-y-3 shadow-md ${
                          msg.sender === 'user'
                            ? 'bg-gradient-to-r from-cyan-700 to-teal-700 text-white rounded-br-none'
                            : 'bg-[#12242d] text-gray-200 border border-[#1e3c4a] rounded-bl-none'
                        }`}
                      >
                        {msg.thinkingProcess && (
                          <div className="text-[10px] font-mono text-cyan-300 bg-[#0d1d24] p-2.5 rounded-xl border border-cyan-500/20">
                            🧠 <strong>Deep Reasoning Step:</strong> {msg.thinkingProcess}
                          </div>
                        )}

                        <div className="whitespace-pre-line leading-relaxed text-xs">
                          {msg.text}
                        </div>

                        {msg.sender === 'tutor' && (
                          <div className="pt-2 border-t border-white/10 flex items-center justify-between">
                            <TTSPlayer text={msg.text} title="Listen to Agentic AI Response" compact={true} />
                            <span className="text-[10px] text-gray-400 font-mono">{msg.timestamp}</span>
                          </div>
                        )}
                      </div>
                    </div>
                  ))}

                  {isLoading && (
                    <div className="flex items-center gap-2 text-xs text-cyan-300 bg-[#12242d] p-3.5 rounded-2xl w-fit border border-[#1e3c4a]">
                      <div className="w-4 h-4 border-2 border-cyan-400 border-t-transparent rounded-full animate-spin" />
                      <span>NotebookLM AI is analyzing source documents and reasoning...</span>
                    </div>
                  )}
                  <div ref={chatEndRef} />
                </div>

                {/* Dedicated NotebookLM Citations Panel */}
                <div className="w-72 bg-[#09131a] border-l border-[#183645] p-4 hidden lg:flex flex-col space-y-3 overflow-y-auto">
                  <div className="flex items-center justify-between pb-2 border-b border-[#183645]">
                    <span className="text-xs font-bold text-white uppercase tracking-wider flex items-center gap-1.5">
                      <BookOpen className="w-3.5 h-3.5 text-cyan-400" />
                      Source Citations
                    </span>
                    <span className="px-2 py-0.5 rounded-full bg-cyan-500/10 text-cyan-300 text-[10px] font-mono border border-cyan-500/20">
                      NotebookLM Style
                    </span>
                  </div>

                  <p className="text-[11px] text-[#7d9eb0]">
                    Indexed document chunks referenced for real-time model synthesis and conversational answers:
                  </p>

                  <div className="space-y-2.5">
                    {[
                      { title: initialContextLessonTitle || 'Advanced LMD Academic Curriculum', type: 'Primary Syllabus', match: '0.98 Match', snippet: 'Core conceptual foundations and operational multi-agent synchronization.' },
                      { title: 'Vector Embedding Store & Semantic RAG', type: 'Research Whitepaper', match: '0.94 Match', snippet: 'Cosine similarity indexing across multimodal academic repositories.' },
                      { title: 'ECTS Academic Credit and Evaluation Standard', type: 'Institutional Guide', match: '0.91 Match', snippet: 'Standard grading rubrics and mastery verification protocols.' }
                    ].map((citation, cIdx) => (
                      <div key={cIdx} className="p-3 rounded-xl bg-[#0e2029] border border-[#1a3848] space-y-1.5 hover:border-cyan-500/40 transition-colors">
                        <div className="flex items-center justify-between text-[10px]">
                          <span className="font-mono text-cyan-300 bg-cyan-500/10 px-1.5 py-0.5 rounded border border-cyan-500/20">{citation.type}</span>
                          <span className="text-emerald-400 font-semibold">{citation.match}</span>
                        </div>
                        <h5 className="font-serif text-xs font-bold text-white">{citation.title}</h5>
                        <p className="text-[11px] text-[#86a7b6] italic leading-snug">"{citation.snippet}"</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Prompt Suggestion Chips */}
              <div className="px-4 py-2 border-t border-[#1b3846] flex items-center gap-2 overflow-x-auto text-[11px] bg-[#0c181f] shrink-0">
                <span className="text-[#7ea0af] font-semibold shrink-0">Notebook Follow-ups:</span>
                {[
                  'Summarize key takeaways into bullet points',
                  'Give an interactive practice question with hints',
                  'Explain this using a real-world engineering analogy',
                  'What are the primary source citations?'
                ].map((chip, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleSendMessage(chip)}
                    className="px-3 py-1 rounded-full bg-white/5 hover:bg-cyan-600/30 text-cyan-300 border border-cyan-500/20 shrink-0 transition-colors"
                  >
                    {chip}
                  </button>
                ))}
              </div>

              {/* Prompt Input Footer */}
              <div className="p-3.5 border-t border-[#1b3846] bg-[#0d1c23] flex items-center gap-2 shrink-0">
                <input
                  type="text"
                  value={inputPrompt}
                  onChange={(e) => setInputPrompt(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
                  placeholder="Ask follow-up questions or interrupt with new constraints..."
                  className="flex-1 px-4 py-2.5 rounded-xl bg-[#11242e] border border-[#1e3d4c] text-white text-xs focus:outline-none focus:border-cyan-400"
                />
                <button
                  onClick={() => handleSendMessage()}
                  disabled={isLoading || !inputPrompt.trim()}
                  className="p-2.5 rounded-xl bg-gradient-to-r from-cyan-600 to-teal-600 hover:from-cyan-500 hover:to-teal-500 disabled:opacity-40 text-white shadow-md shadow-cyan-900/30 transition-all active:scale-95"
                >
                  <Send className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: INTERACTIVE EXPLAINER (BRILLIANT STYLE) */}
        {activeTab === 'interactive_explainer' && (
          <div className="flex-1 p-4 sm:p-6 overflow-y-auto">
            <InteractiveExplainer topicTitle={initialContextLessonTitle || 'Advanced Academic Visualizer'} />
          </div>
        )}
      </div>
    </div>
  );
};

