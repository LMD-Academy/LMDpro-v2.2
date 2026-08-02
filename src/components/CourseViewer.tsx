import React, { useState, useEffect, useRef } from 'react';
import { Course, Lesson, StudentProgress, AdaptiveLevel, LanguageCode, UserProfile } from '../types';
import { ApiService } from '../services/api';
import { WorkspaceService } from '../services/workspace';
import { getAccessToken, googleSignIn } from '../services/firebase';
import confetti from 'canvas-confetti';
import { StudyWorkbenchDrawer } from './StudyWorkbenchDrawer';
import { InteractiveExplainer } from './InteractiveExplainer';
import { InteractiveMindMap } from './InteractiveMindMap';
import { CinematicVideoVisualizer } from './CinematicVideoVisualizer';
import {
  ArrowLeft,
  Play,
  Pause,
  Volume2,
  VolumeX,
  CheckCircle2,
  Brain,
  HelpCircle,
  Sparkles,
  Globe,
  Download,
  Award,
  ChevronRight,
  BookOpen,
  RotateCcw,
  Zap,
  Sliders,
  Check,
  Code2,
  PanelRightOpen,
  FolderSync,
  ExternalLink,
  FileText,
  RefreshCw,
  X
} from 'lucide-react';

interface CourseViewerProps {
  course: Course;
  studentProgress?: StudentProgress;
  user?: UserProfile;
  onUpdateProgress: (courseId: string, progress: StudentProgress) => void;
  onBack: () => void;
  onOpenAITutorWithContext: (lessonTitle: string, lessonContent: string) => void;
  onCourseCompleted: (course: Course) => void;
}

export const CourseViewer: React.FC<CourseViewerProps> = ({
  course,
  studentProgress,
  user,
  onUpdateProgress,
  onBack,
  onOpenAITutorWithContext,
  onCourseCompleted,
}) => {
  // Adaptive Difficulty State & Metric Calculations
  const [isAdaptiveEngineEnabled, setIsAdaptiveEngineEnabled] = useState(user?.adaptiveDifficulty ?? true);

  // Compute performance metrics from studentProgress?.quizResults
  const quizResults = studentProgress?.quizResults ? (Object.values(studentProgress.quizResults) as { score: number; percentage: number }[]) : [];
  const totalQuizScore = quizResults.reduce((acc, q) => acc + (q.percentage || 0), 0);
  const avgQuizScore = quizResults.length > 0 ? Math.round(totalQuizScore / quizResults.length) : 82;

  const adaptiveTier = avgQuizScore >= 80 ? 'Mastery / Challenge' : avgQuizScore < 50 ? 'Foundational / Guided' : 'Standard Adaptive';
  const adaptiveTierColor = avgQuizScore >= 80 ? 'text-amber-400 border-amber-500/40 bg-amber-500/10' : avgQuizScore < 50 ? 'text-cyan-400 border-cyan-500/40 bg-cyan-500/10' : 'text-emerald-400 border-emerald-500/40 bg-emerald-500/10';
  // Navigation State
  const [activeModuleIndex, setActiveModuleIndex] = useState(0);
  const [activeLessonIndex, setActiveLessonIndex] = useState(0);

  const activeModule = course.modules[activeModuleIndex] || course.modules[0];
  const activeLesson: Lesson = activeModule?.lessons[activeLessonIndex] || activeModule?.lessons[0];

  // Translation State
  const [activeLanguage, setActiveLanguage] = useState<LanguageCode>('en');
  const [translatedContent, setTranslatedContent] = useState<string | null>(null);
  const [isTranslating, setIsTranslating] = useState(false);

  // Audio Narration State
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);
  const [audioSpeed, setAudioSpeed] = useState(1);
  const [audioDataUri, setAudioDataUri] = useState<string | null>(null);
  const [isLoadingAudio, setIsLoadingAudio] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // Flashcards state
  const [activeFlashcardIndex, setActiveFlashcardIndex] = useState(0);
  const [isFlashcardFlipped, setIsFlashcardFlipped] = useState(false);

  // Quiz Modal State
  const [showQuizModal, setShowQuizModal] = useState(false);
  const [currentQuizIndex, setCurrentQuizIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [quizFeedback, setQuizFeedback] = useState<string | null>(null);
  const [isEvaluatingQuiz, setIsEvaluatingQuiz] = useState(false);
  const [quizScore, setQuizScore] = useState(0);

  // Local Completed Lessons set
  const [completedLessonIds, setCompletedLessonIds] = useState<string[]>(
    studentProgress?.completedLessonIds || []
  );

  const [currentAdaptiveLevel, setCurrentAdaptiveLevel] = useState<AdaptiveLevel>(
    studentProgress?.adaptiveLevel || 'standard'
  );

  // Retractable Workbench Drawer State
  const [isWorkbenchDrawerOpen, setIsWorkbenchDrawerOpen] = useState(false);

  // Background AI Executive Summary State
  const [moduleSummaries, setModuleSummaries] = useState<Record<string, string>>({});
  const [isGeneratingSummary, setIsGeneratingSummary] = useState(false);

  // Google Drive Export State
  const [isExportingDrive, setIsExportingDrive] = useState(false);
  const [exportSuccessMsg, setExportSuccessMsg] = useState<string | null>(null);
  const [exportedFolderUrl, setExportedFolderUrl] = useState<string | null>(null);

  // Automatic Background AI Service: Generate ~200-word executive summary for active module
  useEffect(() => {
    if (!activeModule) return;
    if (!moduleSummaries[activeModule.id] && !activeModule.executiveSummary) {
      setIsGeneratingSummary(true);
      ApiService.generateModuleExecutiveSummary(
        activeModule.title,
        activeModule.description,
        activeModule.lessons.map((l) => l.title)
      )
        .then((summary) => {
          setModuleSummaries((prev) => ({ ...prev, [activeModule.id]: summary }));
        })
        .catch((err) => console.error('Error generating executive summary:', err))
        .finally(() => setIsGeneratingSummary(false));
    }
  }, [activeModuleIndex, activeModule]);

  // Handle Export Course Notes & AI Explainers to 'LMDpro Academy' Folder in Google Drive
  const handleExportToLMDproDrive = async () => {
    setIsExportingDrive(true);
    setExportSuccessMsg(null);
    try {
      let token = getAccessToken();
      if (!token) {
        const authRes = await googleSignIn();
        token = authRes?.accessToken || null;
      }

      if (!token) {
        setExportSuccessMsg('Google Drive authentication required. Please sign in.');
        return;
      }

      const activeSummary =
        moduleSummaries[activeModule.id] ||
        activeModule.executiveSummary ||
        'Module executive summary generated via Zalamati AI Engine.';

      const fileContent = `# ${course.title}
## ${activeModule.title} - Executive Summary & Quick Review

${activeSummary}

---
### Active Lesson Notes: ${activeLesson.title}

${activeLesson.content}

### Key Takeaways
${activeLesson.keyTakeaways?.map((k) => `- ${k}`).join('\n') || '- Master core principles and execution loops.'}

---
*Exported directly to LMDpro Academy Drive Folder via Zalamati eLearning Platform*
`;

      const safeCourseTitle = course.title.replace(/[^a-zA-Z0-9 ]/g, '').trim();
      const safeModuleTitle = activeModule.title.replace(/[^a-zA-Z0-9 ]/g, '').trim();
      const fileName = `${safeCourseTitle} - ${safeModuleTitle} Notes.md`;

      const result = await WorkspaceService.exportToLMDproAcademyFolder(token, fileName, fileContent, 'text/markdown');

      if (result) {
        setExportedFolderUrl(result.folderUrl);
        setExportSuccessMsg(`Successfully saved "${fileName}" to 'LMDpro Academy' folder in Google Drive!`);
      } else {
        setExportSuccessMsg('Drive export failed. Please verify permissions.');
      }
    } catch (e) {
      console.error('Drive export error:', e);
      setExportSuccessMsg('Export error occurred.');
    } finally {
      setIsExportingDrive(false);
    }
  };

  // Handle lesson change
  useEffect(() => {
    setTranslatedContent(null);
    setIsPlayingAudio(false);
    if (audioRef.current) {
      audioRef.current.pause();
    }
    setActiveFlashcardIndex(0);
    setIsFlashcardFlipped(false);
  }, [activeModuleIndex, activeLessonIndex]);

  // Handle Translation
  const handleTranslate = async (lang: LanguageCode) => {
    setActiveLanguage(lang);
    if (lang === 'en') {
      setTranslatedContent(null);
      return;
    }
    setIsTranslating(true);
    try {
      const translated = await ApiService.translateText(activeLesson.content, lang);
      setTranslatedContent(translated);
    } catch (err) {
      console.error('Translation error:', err);
    } finally {
      setIsTranslating(false);
    }
  };

  // Audio Playback
  const handleToggleAudio = async () => {
    if (isPlayingAudio) {
      if (audioRef.current) audioRef.current.pause();
      window.speechSynthesis?.cancel();
      setIsPlayingAudio(false);
      return;
    }

    setIsPlayingAudio(true);

    // 1. Check if server TTS is available
    if (!audioDataUri) {
      setIsLoadingAudio(true);
      const audioUri = await ApiService.generateTTSAudio(activeLesson.audioScript || activeLesson.title);
      setIsLoadingAudio(false);
      if (audioUri) {
        setAudioDataUri(audioUri);
        if (audioRef.current) {
          audioRef.current.src = audioUri;
          audioRef.current.playbackRate = audioSpeed;
          audioRef.current.play();
          return;
        }
      }
    } else if (audioRef.current) {
      audioRef.current.playbackRate = audioSpeed;
      audioRef.current.play();
      return;
    }

    // 2. Fallback to Web Speech Synthesis API if server audio isn't returned
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(activeLesson.audioScript || activeLesson.title);
      utterance.rate = audioSpeed;
      utterance.onend = () => setIsPlayingAudio(false);
      utterance.onerror = () => setIsPlayingAudio(false);
      window.speechSynthesis.speak(utterance);
    } else {
      setIsPlayingAudio(false);
    }
  };

  const handleSpeedChange = (speed: number) => {
    setAudioSpeed(speed);
    if (audioRef.current) {
      audioRef.current.playbackRate = speed;
    }
  };

  // Submit Quiz Question
  const handleAnswerSubmit = async (optionIndex: number) => {
    setSelectedOption(optionIndex);
    const quiz = activeLesson.quizzes[currentQuizIndex];
    if (!quiz) return;

    setIsEvaluatingQuiz(true);

    const evalResult = await ApiService.evaluateQuizResponse({
      question: quiz.question,
      studentAnswer: quiz.options[optionIndex],
      correctAnswer: quiz.options[quiz.correctAnswerIndex],
      explanation: quiz.explanation,
      currentAdaptiveLevel: currentAdaptiveLevel
    });

    setIsEvaluatingQuiz(false);
    setQuizFeedback(evalResult.feedback);
    if (evalResult.isCorrect) {
      setQuizScore(prev => prev + 1);
    }
    if (evalResult.newAdaptiveLevel) {
      setCurrentAdaptiveLevel(evalResult.newAdaptiveLevel);
    }
  };

  const handleNextQuizQuestion = () => {
    if (currentQuizIndex + 1 < activeLesson.quizzes.length) {
      setCurrentQuizIndex(prev => prev + 1);
      setSelectedOption(null);
      setQuizFeedback(null);
    } else {
      // Quiz finished for this lesson!
      const isLessonComplete = !completedLessonIds.includes(activeLesson.id);
      let updatedCompleted = completedLessonIds;
      if (isLessonComplete) {
        updatedCompleted = [...completedLessonIds, activeLesson.id];
        setCompletedLessonIds(updatedCompleted);
      }

      // Calculate total progress
      const totalCourseLessons = course.modules.reduce((acc, m) => acc + m.lessons.length, 0);
      const progressPercentage = Math.round((updatedCompleted.length / totalCourseLessons) * 100);

      const updatedProgress: StudentProgress = {
        userId: 'usr-student-01',
        courseId: course.id,
        completedLessonIds: updatedCompleted,
        quizResults: {
          ...(studentProgress?.quizResults || {}),
          [activeLesson.id]: {
            courseId: course.id,
            lessonId: activeLesson.id,
            score: quizScore + 1,
            totalQuestions: activeLesson.quizzes.length,
            percentage: Math.round(((quizScore + 1) / activeLesson.quizzes.length) * 100),
            passed: true,
            feedback: 'Quiz Completed!',
            completedAt: new Date().toISOString(),
            adaptiveLevelAdjusted: currentAdaptiveLevel
          }
        },
        overallProgressPercentage: progressPercentage,
        adaptiveLevel: currentAdaptiveLevel,
        lastAccessedAt: new Date().toISOString(),
        timeSpentMinutes: (studentProgress?.timeSpentMinutes || 0) + activeLesson.durationMinutes
      };

      onUpdateProgress(course.id, updatedProgress);
      setShowQuizModal(false);

      // Check if course completed 100%
      if (progressPercentage >= 100) {
        confetti({ particleCount: 120, spread: 80, origin: { y: 0.6 } });
        onCourseCompleted(course);
      }
    }
  };

  const startQuizForLesson = () => {
    setCurrentQuizIndex(0);
    setSelectedOption(null);
    setQuizFeedback(null);
    setQuizScore(0);
    setShowQuizModal(true);
  };

  return (
    <div className="space-y-6 pb-16">
      {/* Hidden audio element */}
      <audio
        ref={audioRef}
        onEnded={() => setIsPlayingAudio(false)}
        className="hidden"
      />

      {/* Top Bar with Back Button & Adaptive Level Tag */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-white/10 pb-4">
        <button
          onClick={onBack}
          className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white/5 hover:bg-white/10 text-gray-300 text-xs font-semibold border border-white/10 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Dashboard</span>
        </button>

        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-500/20 text-purple-300 border border-purple-500/30 text-xs font-semibold">
            <Brain className="w-3.5 h-3.5 text-purple-400" />
            <span>Adaptive Level: <strong className="capitalize">{currentAdaptiveLevel}</strong></span>
          </div>

          <button
            onClick={() => onOpenAITutorWithContext(activeLesson.title, activeLesson.content)}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 text-white text-xs font-semibold shadow-md shadow-purple-600/30"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Tutor Context</span>
          </button>

          <button
            onClick={() => setIsWorkbenchDrawerOpen(!isWorkbenchDrawerOpen)}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#0e222f] hover:bg-[#183648] text-cyan-300 text-xs font-bold border border-cyan-500/30 shadow-md transition-all active:scale-95"
            title="Open Slim Right Study Workbench Sidebar"
          >
            <PanelRightOpen className="w-3.5 h-3.5 text-cyan-400" />
            <span>Study Workbench</span>
          </button>
        </div>
      </div>

      {/* Course Player Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Module & Lesson Sidebar */}
        <div className="lg:col-span-1 space-y-4 bg-[#13131c] border border-white/10 rounded-2xl p-5 h-fit">
          <div className="border-b border-white/10 pb-3">
            <h3 className="font-bold text-white text-sm line-clamp-1">{course.title}</h3>
            <p className="text-[11px] text-gray-400 mt-0.5">{course.category}</p>
          </div>

          <div className="space-y-4 max-h-[600px] overflow-y-auto pr-1">
            {course.modules.map((mod, mIdx) => (
              <div key={mod.id} className="space-y-2">
                <div className="text-xs font-bold text-indigo-300 flex items-center justify-between uppercase tracking-wider">
                  <span>Mod {mIdx + 1}: {mod.title}</span>
                </div>

                <div className="space-y-1">
                  {mod.lessons.map((les, lIdx) => {
                    const isSelected = mIdx === activeModuleIndex && lIdx === activeLessonIndex;
                    const isCompleted = completedLessonIds.includes(les.id);

                    return (
                      <button
                        key={les.id}
                        onClick={() => {
                          setActiveModuleIndex(mIdx);
                          setActiveLessonIndex(lIdx);
                        }}
                        className={`w-full flex items-center justify-between p-2.5 rounded-xl text-left transition-all text-xs ${
                          isSelected
                            ? 'bg-gradient-to-r from-purple-600/30 to-indigo-600/30 text-white border border-purple-500/50 font-semibold'
                            : 'text-gray-400 hover:bg-white/5 hover:text-gray-200'
                        }`}
                      >
                        <div className="flex items-center gap-2 overflow-hidden">
                          {isCompleted ? (
                            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                          ) : (
                            <div className="w-4 h-4 rounded-full border border-gray-600 shrink-0" />
                          )}
                          <span className="truncate">{les.title}</span>
                        </div>
                        <span className="text-[10px] text-gray-500 shrink-0 ml-1">{les.durationMinutes}m</span>
                      </button>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Main Lesson Content Area */}
        <div className="lg:col-span-3 space-y-6">
          {/* Audio Narration Bar */}
          <div className="p-4 rounded-2xl bg-gradient-to-r from-indigo-950 via-slate-900 to-purple-950 border border-purple-500/30 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-xl">
            <div className="flex items-center gap-3">
              <button
                onClick={handleToggleAudio}
                className="w-12 h-12 rounded-xl bg-purple-600 hover:bg-purple-500 text-white flex items-center justify-center shadow-lg shadow-purple-600/30 transition-all hover:scale-105 shrink-0"
              >
                {isLoadingAudio ? (
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                ) : isPlayingAudio ? (
                  <Pause className="w-5 h-5 fill-current" />
                ) : (
                  <Play className="w-5 h-5 fill-current ml-0.5" />
                )}
              </button>

              <div>
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold text-white">AI Voice Narration</span>
                  <span className="text-[10px] font-semibold px-2 py-0.5 rounded bg-purple-500/20 text-purple-300">
                    Gemini 3.1 TTS
                  </span>
                </div>
                <p className="text-xs text-gray-300 italic line-clamp-1 max-w-md mt-0.5">
                  "{activeLesson.audioScript || activeLesson.title}"
                </p>
              </div>
            </div>

            {/* Playback Speed Controls */}
            <div className="flex items-center gap-2 border-t sm:border-t-0 sm:border-l border-white/10 pt-3 sm:pt-0 sm:pl-4">
              <span className="text-xs text-gray-400">Speed:</span>
              {[1, 1.25, 1.5, 2].map((s) => (
                <button
                  key={s}
                  onClick={() => handleSpeedChange(s)}
                  className={`px-2 py-1 rounded text-xs font-semibold transition-colors ${
                    audioSpeed === s
                      ? 'bg-purple-600 text-white'
                      : 'bg-white/5 text-gray-400 hover:bg-white/10'
                  }`}
                >
                  {s}x
                </button>
              ))}
            </div>
          </div>

          {/* Lesson View Panel */}
          <div className="bg-[#13131c] border border-white/10 rounded-2xl p-6 md:p-8 space-y-6">
            {/* Header Title & Translation selector */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-white/10 pb-5">
              <div className="space-y-1">
                <span className="text-xs font-bold text-cyan-400 uppercase tracking-wider">
                  {activeModule.title}
                </span>
                <h1 className="text-2xl font-extrabold text-white tracking-tight">
                  {activeLesson.title}
                </h1>
              </div>

              <div className="flex items-center gap-3 flex-wrap">
                {/* Retractable Workbench Drawer Trigger */}
                <button
                  onClick={() => setIsWorkbenchDrawerOpen(true)}
                  className="px-3 py-1.5 rounded-xl bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 text-xs font-bold flex items-center gap-1.5 hover:bg-cyan-500/30 transition-all shadow-md"
                >
                  <PanelRightOpen className="w-4 h-4" />
                  <span>Study Workbench & Notes</span>
                </button>

                {/* Integrated Socratic Tutor button */}
                <button
                  onClick={() => onOpenAITutorWithContext(activeLesson.title, activeLesson.content)}
                  className="px-3 py-1.5 rounded-xl bg-purple-500/20 text-purple-300 border border-purple-500/40 text-xs font-bold flex items-center gap-1.5 hover:bg-purple-500/30 transition-all shadow-md"
                  title="Ask Socratic Tutor about this lesson"
                >
                  <Sparkles className="w-4 h-4 text-purple-400" />
                  <span>Socratic Tutor</span>
                </button>

                {/* Translate dropdown */}
                <div className="flex items-center gap-2 bg-white/5 p-1 rounded-xl border border-white/10">
                  <Globe className="w-4 h-4 text-indigo-400 ml-2" />
                  <select
                    value={activeLanguage}
                    onChange={(e) => handleTranslate(e.target.value as LanguageCode)}
                    className="bg-transparent text-xs text-gray-200 font-semibold p-1 focus:outline-none cursor-pointer"
                  >
                    <option value="en" className="bg-[#161622]">🇺🇸 English</option>
                    <option value="es" className="bg-[#161622]">🇪🇸 Español</option>
                    <option value="fr" className="bg-[#161622]">🇫🇷 Français</option>
                    <option value="de" className="bg-[#161622]">🇩🇪 Deutsch</option>
                    <option value="ar" className="bg-[#161622]">🇸🇦 العربية</option>
                    <option value="ja" className="bg-[#161622]">🇯🇵 日本語</option>
                    <option value="zh" className="bg-[#161622]">🇨🇳 中文</option>
                    <option value="hi" className="bg-[#161622]">🇮🇳 हिन्दी</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Quick Review: Module Executive Summary Section */}
            <div className="p-5 rounded-2xl bg-gradient-to-r from-[#0a1b26] via-[#0d2332] to-[#071722] border border-[#1b3e52] shadow-xl space-y-3">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-[#143447]">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-xl bg-cyan-500/15 border border-cyan-500/30 flex items-center justify-center text-cyan-300">
                    <Sparkles className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="text-xs font-black text-white uppercase tracking-wider">Quick Review</h3>
                      <span className="px-2 py-0.5 rounded-full bg-cyan-500/20 text-cyan-300 text-[9px] font-mono border border-cyan-500/30">
                        Designed Themed Rich Text
                      </span>
                    </div>
                    <p className="text-[11px] text-[#789cae]">Synthesized key conceptual overview for {activeModule.title}</p>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={handleExportToLMDproDrive}
                    disabled={isExportingDrive}
                    className="px-3.5 py-1.5 rounded-xl bg-emerald-500/20 hover:bg-emerald-500/30 text-emerald-300 border border-emerald-500/40 text-xs font-bold flex items-center gap-1.5 transition-all shadow-md active:scale-95"
                    title="Export Notes and Executive Summary to 'LMDpro Academy' Google Drive Folder"
                  >
                    {isExportingDrive ? (
                      <div className="w-3.5 h-3.5 border-2 border-emerald-300 border-t-transparent rounded-full animate-spin" />
                    ) : (
                      <FolderSync className="w-3.5 h-3.5 text-emerald-400" />
                    )}
                    <span>Export to 'LMDpro Academy' Drive</span>
                  </button>
                </div>
              </div>

              {exportSuccessMsg && (
                <div className="p-3 rounded-xl bg-emerald-950/80 border border-emerald-500/30 text-emerald-200 text-xs flex items-center justify-between gap-2 animate-fade-in">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>{exportSuccessMsg}</span>
                  </div>
                  {exportedFolderUrl && (
                    <a
                      href={exportedFolderUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="text-cyan-300 font-bold hover:underline flex items-center gap-1 text-[11px] shrink-0"
                    >
                      <span>Open Folder</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  )}
                </div>
              )}

              <div className="text-xs text-gray-200 leading-relaxed bg-[#05131b] p-4 rounded-xl border border-[#123142]">
                {isGeneratingSummary ? (
                  <div className="flex items-center justify-center py-6 gap-2 text-cyan-300 text-xs font-semibold">
                    <div className="w-4 h-4 border-2 border-cyan-400 border-t-transparent rounded-full animate-spin" />
                    <span>Generating module summary...</span>
                  </div>
                ) : (
                  <div className="space-y-3 font-sans text-gray-200 text-xs leading-relaxed">
                    {(
                      moduleSummaries[activeModule.id] ||
                      activeModule.executiveSummary ||
                      'Executive summary ready for review.'
                    )
                      .replace(/[#*_`]/g, '')
                      .split('\n\n')
                      .map((chunk, idx) => (
                        <p key={idx} className="whitespace-pre-line border-l-2 border-cyan-500/40 pl-3 py-0.5">{chunk}</p>
                      ))}
                  </div>
                )}
              </div>
            </div>

            {/* Lesson Body Content */}
            <div className="max-w-none text-gray-300 text-sm leading-relaxed space-y-4 font-sans">
              {isTranslating ? (
                <div className="flex items-center justify-center py-12 text-purple-300 gap-2">
                  <div className="w-5 h-5 border-2 border-purple-400 border-t-transparent rounded-full animate-spin" />
                  <span>Translating lesson content...</span>
                </div>
              ) : (
                <div className="space-y-6">
                  {(translatedContent || activeLesson.content)
                    .replace(/[#*_`]/g, '')
                    .split('\n\n')
                    .filter((p) => p.trim().length > 0)
                    .map((paragraphText, pIdx) => (
                      <p key={pIdx} className="text-gray-200 text-sm leading-relaxed whitespace-pre-line bg-[#111e27]/40 p-4 rounded-xl border border-[#183647]">
                        {paragraphText}
                      </p>
                    ))}
                </div>
              )}
            </div>

            {/* Key Takeaways */}
            {activeLesson.keyTakeaways && activeLesson.keyTakeaways.length > 0 && (
              <div className="p-5 rounded-2xl bg-indigo-950/40 border border-indigo-500/30 space-y-3">
                <h4 className="font-bold text-white text-sm flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-indigo-400" />
                  Key Takeaways
                </h4>
                <ul className="space-y-2 text-xs text-indigo-200">
                  {activeLesson.keyTakeaways.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Interactive Explainer (Brilliant Style) */}
            <InteractiveExplainer topicTitle={activeLesson.title} />

            {/* Interactive Mind Mapping Tool */}
            <InteractiveMindMap lessonTitle={activeLesson.title} />

            {/* Cinematic Video Visualizer & Veo Explainer */}
            <CinematicVideoVisualizer lessonTitle={activeLesson.title} lessonContent={activeLesson.content} />

            {/* Flashcards Deck */}
            {activeLesson.flashcards && activeLesson.flashcards.length > 0 && (
              <div className="space-y-3 pt-4 border-t border-white/10">
                <div className="flex items-center justify-between">
                  <h4 className="font-bold text-white text-sm flex items-center gap-2">
                    <Zap className="w-4 h-4 text-amber-400" />
                    Spaced Repetition Flashcards ({activeFlashcardIndex + 1}/{activeLesson.flashcards.length})
                  </h4>
                </div>

                <div
                  onClick={() => setIsFlashcardFlipped(!isFlashcardFlipped)}
                  className="p-8 rounded-2xl bg-gradient-to-tr from-[#1a1a28] to-[#222236] border border-white/10 hover:border-purple-500/50 cursor-pointer text-center min-h-[140px] flex flex-col items-center justify-center gap-2 transition-all shadow-lg"
                >
                  <span className="text-[10px] font-bold uppercase tracking-wider text-purple-400">
                    {isFlashcardFlipped ? 'Answer (Click to Flip)' : 'Question (Click to Flip)'}
                  </span>
                  <p className="text-sm font-semibold text-white">
                    {isFlashcardFlipped
                      ? activeLesson.flashcards[activeFlashcardIndex]?.back
                      : activeLesson.flashcards[activeFlashcardIndex]?.front}
                  </p>
                </div>

                <div className="flex justify-between items-center text-xs">
                  <button
                    onClick={() => {
                      setIsFlashcardFlipped(false);
                      setActiveFlashcardIndex(prev => Math.max(0, prev - 1));
                    }}
                    disabled={activeFlashcardIndex === 0}
                    className="px-3 py-1.5 rounded-lg bg-white/5 disabled:opacity-30 text-gray-300"
                  >
                    Previous
                  </button>
                  <button
                    onClick={() => {
                      setIsFlashcardFlipped(false);
                      setActiveFlashcardIndex(prev => Math.min(activeLesson.flashcards.length - 1, prev + 1));
                    }}
                    disabled={activeFlashcardIndex === activeLesson.flashcards.length - 1}
                    className="px-3 py-1.5 rounded-lg bg-white/5 disabled:opacity-30 text-gray-300"
                  >
                    Next
                  </button>
                </div>
              </div>
            )}

            {/* Action Bar: Take Interactive Quiz */}
            {activeLesson.quizzes && activeLesson.quizzes.length > 0 && (
              <div className="pt-6 border-t border-white/10 space-y-3">
                <div className="p-3 rounded-2xl bg-[#091822] border border-[#1b3d4f] flex flex-wrap items-center justify-between gap-3 text-xs">
                  <div className="flex items-center gap-2">
                    <span className={`px-2.5 py-0.5 rounded-full border text-[10px] font-bold uppercase tracking-wider ${adaptiveTierColor}`}>
                      Adaptive Difficulty Engine: {adaptiveTier}
                    </span>
                    <span className="text-[#81a5b6] text-[11px]">
                      Avg Quiz Accuracy: <strong className="text-white">{avgQuizScore}%</strong>
                    </span>
                  </div>

                  <button
                    onClick={() => setIsAdaptiveEngineEnabled(!isAdaptiveEngineEnabled)}
                    className="text-[10px] text-cyan-300 underline font-semibold hover:text-white"
                  >
                    {isAdaptiveEngineEnabled ? 'Disable Engine' : 'Enable Adaptive Difficulty'}
                  </button>
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="text-xs text-gray-400">
                    Questions dynamically adjust complexity based on your real-time quiz performance ({avgQuizScore}% score).
                  </div>

                  <button
                    onClick={startQuizForLesson}
                    className="flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 text-white font-bold text-xs shadow-xl shadow-emerald-500/20 transition-all hover:scale-[1.02] w-full sm:w-auto justify-center"
                  >
                    <HelpCircle className="w-4 h-4" />
                    <span>Start Interactive Quiz ({activeLesson.quizzes.length} Qs)</span>
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Interactive Quiz Modal */}
      {showQuizModal && activeLesson.quizzes[currentQuizIndex] && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-[#161622] border border-white/10 rounded-2xl max-w-xl w-full p-6 space-y-6 shadow-2xl relative">
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <div>
                <span className="text-[10px] font-bold text-emerald-400 uppercase tracking-wider">
                  Adaptive Quiz • Question {currentQuizIndex + 1} of {activeLesson.quizzes.length}
                </span>
                <h3 className="text-lg font-bold text-white mt-1">
                  {activeLesson.quizzes[currentQuizIndex].question}
                </h3>
              </div>
            </div>

            {/* Options */}
            <div className="space-y-3">
              {activeLesson.quizzes[currentQuizIndex].options.map((option, oIdx) => {
                const isSelected = selectedOption === oIdx;
                return (
                  <button
                    key={oIdx}
                    onClick={() => handleAnswerSubmit(oIdx)}
                    disabled={selectedOption !== null}
                    className={`w-full text-left p-3.5 rounded-xl text-xs font-semibold border transition-all ${
                      isSelected
                        ? 'bg-purple-600/30 border-purple-500 text-white shadow-lg'
                        : 'bg-white/5 border-white/10 text-gray-300 hover:bg-white/10 hover:border-white/20'
                    }`}
                  >
                    <span className="text-purple-400 font-bold mr-2">{String.fromCharCode(65 + oIdx)}.</span>
                    {option}
                  </button>
                );
              })}
            </div>

            {/* Socratic Grading & Feedback */}
            {isEvaluatingQuiz && (
              <div className="flex items-center justify-center py-4 text-purple-300 gap-2 text-xs">
                <div className="w-4 h-4 border-2 border-purple-400 border-t-transparent rounded-full animate-spin" />
                <span>Evaluating response via Cognitive Engine...</span>
              </div>
            )}

            {quizFeedback && (
              <div className="p-4 rounded-xl bg-purple-950/40 border border-purple-500/40 text-xs text-purple-200 space-y-2">
                <div className="font-bold text-white flex items-center gap-1.5">
                  <Sparkles className="w-4 h-4 text-purple-400" />
                  <span>Socratic Grading Feedback:</span>
                </div>
                <p>{quizFeedback}</p>

                <div className="pt-2">
                  <button
                    onClick={handleNextQuizQuestion}
                    className="w-full py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs"
                  >
                    {currentQuizIndex + 1 < activeLesson.quizzes.length ? 'Next Question' : 'Complete Quiz'}
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Retractable Study Workbench Drawer */}
      <StudyWorkbenchDrawer
        isOpen={isWorkbenchDrawerOpen}
        onClose={() => setIsWorkbenchDrawerOpen(false)}
        lessonContext={activeLesson?.content}
      />
    </div>
  );
};
