import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { UserProfile, UserRole, Course, StudentProgress, Certificate, LanguageCode } from './types';
import { OfflineStorageService } from './services/offlineStorage';
import { Header } from './components/Header';
import { AuthModal } from './components/AuthModal';
import { CatalogGrid2x4 } from './components/CatalogGrid2x4';
import { AITutorModal } from './components/AITutorModal';
import { AICourseArchitectModal } from './components/AICourseArchitectModal';
import { CertificateModal } from './components/CertificateModal';
import { GoogleClassroomModal } from './components/GoogleClassroomModal';
import { AgentInspectorModal } from './components/AgentInspectorModal';
import { DeepCrawlRagModal } from './components/DeepCrawlRagModal';
import { ProfileModal } from './components/ProfileModal';
import { SettingsModal } from './components/SettingsModal';
import { SearchModal } from './components/SearchModal';
import { LegalModal } from './components/LegalModal';
import { LiveVoiceAgent } from './components/LiveVoiceAgent';
import { DocumentationView } from './components/DocumentationView';
import { DeveloperApiEngineView } from './components/DeveloperApiEngineView';
import { OpenSourceView } from './components/OpenSourceView';
import { DonateSupportView } from './components/DonateSupportView';
import { AboutProjectView } from './components/AboutProjectView';
import { PromptDiagnosticsView } from './components/PromptDiagnosticsView';
import { AchievementsPanel } from './components/AchievementsPanel';
import { BrilliantExplainer } from './components/BrilliantExplainer';
import { InteractiveStudyTools } from './components/InteractiveStudyTools';
import { AIFeaturesStudio } from './components/AIFeaturesStudio';
import { FeaturedSolutionsView } from './components/FeaturedSolutionsView';
import { WeeklySchedulePlanner } from './components/WeeklySchedulePlanner';
import { LearningAnalyticsDashboard } from './components/LearningAnalyticsDashboard';
import { FeaturedPricingView } from './components/FeaturedPricingView';
import { LeaderboardPanel } from './components/LeaderboardPanel';
import { ToolModalOverlay, ToolType } from './components/ToolModalOverlay';
import { QuickKeyModalOverlay } from './components/QuickKeyModalOverlay';
import { BackgroundServicesEngine } from './components/BackgroundServicesEngine';
import { testFirestoreConnection } from './services/firebase';
import { NashmiFloatingOverlay } from './components/NashmiFloatingOverlay';

// Lazy loaded components for optimized bundle size & responsiveness
const Sidebar = React.lazy(() => import('./components/Sidebar').then(m => ({ default: m.Sidebar })));
const StudentDashboard = React.lazy(() => import('./components/StudentDashboard').then(m => ({ default: m.StudentDashboard })));
const TeacherDashboard = React.lazy(() => import('./components/TeacherDashboard').then(m => ({ default: m.TeacherDashboard })));
const SchoolDashboard = React.lazy(() => import('./components/SchoolDashboard').then(m => ({ default: m.SchoolDashboard })));
const TeamDashboard = React.lazy(() => import('./components/TeamDashboard').then(m => ({ default: m.TeamDashboard })));
const EnterpriseDashboard = React.lazy(() => import('./components/EnterpriseDashboard').then(m => ({ default: m.EnterpriseDashboard })));
const CourseViewer = React.lazy(() => import('./components/CourseViewer').then(m => ({ default: m.CourseViewer })));
const DegreeProgramsCatalog = React.lazy(() => import('./components/DegreeProgramsCatalog').then(m => ({ default: m.DegreeProgramsCatalog })));
const StudyRooms = React.lazy(() => import('./components/StudyRooms').then(m => ({ default: m.StudyRooms })));
const SocialLearningHub = React.lazy(() => import('./components/SocialLearningHub').then(m => ({ default: m.SocialLearningHub })));
const AIContentCurationEngine = React.lazy(() => import('./components/AIContentCurationEngine').then(m => ({ default: m.AIContentCurationEngine })));

export default function App() {
  const [showQuickKeyModal, setShowQuickKeyModal] = useState(false);
  // Storage State
  const [user, setUser] = useState<UserProfile>(() => {
    const p = OfflineStorageService.getProfile();
    return {
      ...p,
      theme: p.theme || 'dark',
      level: p.level || 1,
      badges: p.badges || [
        { id: 'b1', name: 'AI Scholar', icon: '🤖', description: 'Mastered 3 AI & Agentic Modules', category: 'ai', dateUnlocked: 'Today' },
        { id: 'b2', name: '7-Day Streak', icon: '🔥', description: 'Maintained 7 consecutive daily study sessions', category: 'streak', dateUnlocked: 'Yesterday' },
        { id: 'b3', name: 'Degree Defender', icon: '🎓', description: 'Passed capstone evaluation defense', category: 'mastery', dateUnlocked: '2 days ago' },
      ],
      milestones: p.milestones || [
        { id: 'm1', title: 'Earn 1,000 XP Points', targetXP: 1000, achieved: p.xpPoints >= 1000, reward: 'Level 2 Unlocked' },
        { id: 'm2', title: 'Complete 5 Degree Modules', targetXP: 2500, achieved: p.xpPoints >= 2500, reward: 'Golden Badge' },
        { id: 'm3', title: 'Publish Research Paper to Docs', targetXP: 5000, achieved: false, reward: 'Academic Citation' },
      ],
      dailyStudyGoal: p.dailyStudyGoal || 60,
      isAssistantEnabled: p.isAssistantEnabled ?? true
    };
  });

  const [courses, setCourses] = useState<Course[]>(() => OfflineStorageService.getCourses());
  const [progressMap, setProgressMap] = useState<Record<string, StudentProgress>>(() => OfflineStorageService.getProgressMap());
  const [certificates, setCertificates] = useState<Certificate[]>(() => OfflineStorageService.getCertificates());
  const [isOffline, setIsOffline] = useState<boolean>(() => OfflineStorageService.isOfflineForced());

  // UI Navigation State
  const [activeTab, setActiveTab] = useState<string>('student_dashboard');
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      return window.innerWidth >= 1200;
    }
    return true;
  });

  // Modals State
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [showAITutor, setShowAITutor] = useState(false);
  const [tutorContextLesson, setTutorContextLesson] = useState<{ title: string; content: string } | null>(null);
  const [showCourseArchitect, setShowCourseArchitect] = useState(false);
  const [showClassroomModal, setShowClassroomModal] = useState(false);
  const [showAgentInspector, setShowAgentInspector] = useState(false);
  const [showRagIndexer, setShowRagIndexer] = useState(false);
  const [showProfileModal, setShowProfileModal] = useState(false);
  const [showSettingsModal, setShowSettingsModal] = useState(false);
  const [showSearchModal, setShowSearchModal] = useState(false);
  const [showLegalModal, setShowLegalModal] = useState(false);
  const [selectedCertificate, setSelectedCertificate] = useState<Certificate | null>(null);
  const [activeToolModal, setActiveToolModal] = useState<ToolType>(null);

  useEffect(() => {
    testFirestoreConnection();
  }, []);

  // Global Keyboard Shortcuts (Ctrl/Cmd + K, Ctrl/Cmd + T, Ctrl/Cmd + D, ?)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Ignore if user is typing in an input or textarea
      const target = e.target as HTMLElement;
      if (target && (target.tagName === 'INPUT' || target.tagName === 'TEXTAREA' || target.isContentEditable)) {
        return;
      }

      if (e.key === '?') {
        e.preventDefault();
        setShowQuickKeyModal((prev) => !prev);
        return;
      }

      const isCmdOrCtrl = e.metaKey || e.ctrlKey;
      if (!isCmdOrCtrl) return;

      const key = e.key.toLowerCase();
      if (key === 'k') {
        e.preventDefault();
        setShowSearchModal(true);
      } else if (key === 't') {
        e.preventDefault();
        setTutorContextLesson(null);
        setShowAITutor(true);
      } else if (key === 'd') {
        e.preventDefault();
        setActiveTab('dashboard');
        setSelectedCourse(null);
      } else if (key === 'o') {
        e.preventDefault();
        setActiveToolModal('obsidian');
      } else if (key === 'a') {
        e.preventDefault();
        setActiveToolModal('office');
      } else if (key === 'w') {
        e.preventDefault();
        setActiveToolModal('workspace');
      } else if (key === 'n') {
        e.preventDefault();
        setActiveToolModal('notes');
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Auto-Save User Progress & Profile every 2 minutes
  useEffect(() => {
    const autoSaveInterval = setInterval(() => {
      OfflineStorageService.saveProfile(user);
    }, 120000); // 2 minutes

    return () => clearInterval(autoSaveInterval);
  }, [user]);

  // Auto-detect language on mount
  useEffect(() => {
    if (!user.language) {
      const browserLang = navigator.language.split('-')[0];
      const detectedLang = browserLang === 'ar' ? 'ar' : 'en';
      handleUpdateUser({ language: detectedLang });
    }
  }, []);

  // Sync theme and RTL with DOM
  useEffect(() => {
    const currentTheme = user.theme || 'dark';
    document.documentElement.setAttribute('data-theme', currentTheme);
    document.documentElement.setAttribute('dir', user.language === 'ar' ? 'rtl' : 'ltr');
    
    if (currentTheme === 'light') {
      document.body.classList.add('light-theme');
    } else {
      document.body.classList.remove('light-theme');
    }
  }, [user.theme, user.language]);

  const handleUpdateUser = (updatedPartial: Partial<UserProfile>) => {
    const updated = { ...user, ...updatedPartial };
    setUser(updated);
    OfflineStorageService.saveProfile(updated);
  };

  // Handle Role Switch
  const handleRoleChange = (newRole: UserRole) => {
    handleUpdateUser({ role: newRole });
    setSelectedCourse(null);
    setActiveTab('dashboard');
  };

  // Handle Language Switch
  const handleLanguageChange = (lang: LanguageCode) => {
    handleUpdateUser({ language: lang });
  };

  // Handle Toggle Offline Mode
  const handleToggleOffline = () => {
    const nextVal = !isOffline;
    setIsOffline(nextVal);
    OfflineStorageService.setOfflineForced(nextVal);
  };

  // Handle Course Creation
  const handleCourseCreated = (newCourse: Course) => {
    const updatedCourses = OfflineStorageService.saveCourse(newCourse);
    setCourses(updatedCourses);

    // Auto-enroll user in newly created course
    if (!user.enrolledCourseIds.includes(newCourse.id)) {
      handleUpdateUser({ enrolledCourseIds: [...user.enrolledCourseIds, newCourse.id] });
    }
  };

  // Handle Course Lesson Progress Update
  const handleUpdateProgress = (courseId: string, updatedProgress: StudentProgress) => {
    OfflineStorageService.saveProgress(updatedProgress);
    const newProgressMap = OfflineStorageService.getProgressMap();
    setProgressMap(newProgressMap);

    // Calculate XP reward
    const currentXP = user.xpPoints;
    const newXP = currentXP + 100;
    const newLevel = Math.floor(newXP / 1000) + 1;
    handleUpdateUser({ xpPoints: newXP, level: newLevel });
  };

  // Handle Course Completion & Certificate Generation
  const handleCourseCompleted = (course: Course) => {
    const newCert: Certificate = {
      id: `cert-${Date.now()}`,
      verificationId: `ZAL-${Math.random().toString(36).substring(2, 9).toUpperCase()}`,
      studentName: user.name,
      courseTitle: course.title,
      issuedDate: new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }),
      score: 98,
      instructorName: course.author || 'Prof. Autonomous Agent',
      institutionName: 'Zalamati LMDpro Academy',
      skillsAcquired: course.tags || ['AI Engineering', 'Autonomous Agents']
    };

    const updatedCerts = OfflineStorageService.saveCertificate(newCert);
    setCertificates(updatedCerts);
    setSelectedCertificate(newCert);
  };

  // Open Tutor with Lesson context
  const handleOpenAITutorWithContext = (lessonTitle: string, lessonContent: string) => {
    setTutorContextLesson({ title: lessonTitle, content: lessonContent });
    setShowAITutor(true);
  };

  return (
    <div className={`min-h-screen ${user.theme === 'light' ? 'bg-slate-50 text-slate-900' : 'bg-[#071319] text-gray-100'} flex flex-col font-sans selection:bg-cyan-500 selection:text-black`}>
      {/* Retractable Navigation Sidebar */}
      <React.Suspense fallback={<div className="w-16 lg:w-64 bg-[#0B1015]" />}>
        <Sidebar
          isOpen={isSidebarOpen}
          onToggle={() => setIsSidebarOpen(!isSidebarOpen)}
          activeTab={activeTab}
          setActiveTab={(tab) => {
            setActiveTab(tab);
            setSelectedCourse(null);
          }}
          userRole={user.role}
          onOpenAuthModal={() => setShowAuthModal(true)}
          onOpenSettings={() => setShowSettingsModal(true)}
          onOpenProfile={() => setShowProfileModal(true)}
          user={user}
          xpPoints={user.xpPoints}
          level={user.level || 1}
          onOpenAITutor={() => setShowAITutor(true)}
          onOpenLegalModal={() => setShowLegalModal(true)}
        />
      </React.Suspense>

      {/* Main Layout Area shifting with Sidebar */}
      <div className={`flex-1 transition-all duration-300 ${isSidebarOpen ? 'lg:pl-64 pl-0' : 'lg:pl-16 pl-0'}`}>
        {/* Global Navigation Header */}
        <Header
          user={user}
          courses={courses}
          onSelectCourse={setSelectedCourse}
          onRoleChange={handleRoleChange}
          onLanguageChange={handleLanguageChange}
          isOffline={isOffline}
          onToggleOffline={handleToggleOffline}
          onOpenCourseGenerator={() => setShowCourseArchitect(true)}
          onOpenAITutor={() => {
            setTutorContextLesson(null);
            setShowAITutor(true);
          }}
          onOpenClassroomModal={() => setShowClassroomModal(true)}
          onOpenAgentInspector={() => setShowAgentInspector(true)}
          onOpenRagIndexer={() => setShowRagIndexer(true)}
          onOpenProfile={() => setShowProfileModal(true)}
          onOpenSettings={() => setShowSettingsModal(true)}
          onOpenSearch={() => setShowSearchModal(true)}
          onOpenLegalModal={() => setShowLegalModal(true)}
          activeTab={activeTab}
          setActiveTab={(tab) => {
            setActiveTab(tab);
            setSelectedCourse(null);
            if (typeof window !== 'undefined') {
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }
          }}
          onToggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)}
          onOpenTool={(tool) => setActiveToolModal(tool)}
          onOpenQuickKeyModal={() => setShowQuickKeyModal(true)}
        />

        {/* Main Content Area */}
        <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6 pb-20 overflow-y-auto">
          <React.Suspense fallback={
            <div className="flex items-center justify-center p-20 text-sm text-slate-400 gap-3">
              <span className="w-4 h-4 rounded-full border-2 border-cyan-500 border-t-transparent animate-spin"></span>
              <span>Loading workspace components...</span>
            </div>
          }>
            {/* Course Player View */}
            {selectedCourse ? (
              <CourseViewer
                course={selectedCourse}
                studentProgress={progressMap[selectedCourse.id]}
                user={user}
                onUpdateProgress={handleUpdateProgress}
                onBack={() => setSelectedCourse(null)}
                onOpenAITutorWithContext={handleOpenAITutorWithContext}
                onCourseCompleted={handleCourseCompleted}
              />
            ) : activeTab === 'degrees' ? (
              <DegreeProgramsCatalog onSelectCourse={setSelectedCourse} />
            ) : activeTab === 'study_rooms' ? (
              <StudyRooms user={user} />
            ) : activeTab === 'social_forums' || activeTab === 'forums' ? (
              <SocialLearningHub user={user} courses={courses} onOpenAITutor={() => setShowAITutor(true)} />
            ) : activeTab === 'curation' ? (
              <AIContentCurationEngine user={user} courses={courses} />
            ) : activeTab === 'leaderboard' ? (
              <LeaderboardPanel user={user} />
            ) : activeTab === 'ai_labs' || activeTab === 'ai_studio' ? (
              <AIFeaturesStudio />
            ) : activeTab === 'workbench' || activeTab === 'agentic_ai' ? (
              <InteractiveStudyTools user={user} onUpdateUser={handleUpdateUser} />
            ) : activeTab === 'analytics' ? (
              <LearningAnalyticsDashboard user={user} onNavigateTab={setActiveTab} />
            ) : activeTab === 'pricing' ? (
              <FeaturedPricingView onOpenWorkspaceAuth={() => setShowAuthModal(true)} />
            ) : activeTab === 'live_voice' ? (
              <LiveVoiceAgent />
            ) : activeTab === 'knowledge_base' ? (
              <div className="space-y-10">
                <DocumentationView />
                <div className="border-t border-[#1a3848] pt-8">
                  <DeveloperApiEngineView />
                </div>
              </div>
            ) : activeTab === 'achievements' ? (
              <AchievementsPanel user={user} onUpdateUser={handleUpdateUser} />
            ) : activeTab === 'api_engine' ? (
              <DeveloperApiEngineView />
            ) : activeTab === 'open_source' ? (
              <OpenSourceView />
            ) : activeTab === 'donate' ? (
              <DocumentationView initialSubTab="donation" />
            ) : activeTab === 'about' ? (
              <AboutProjectView />
            ) : activeTab === 'prompt_diagnostics' ? (
              <PromptDiagnosticsView />
            ) : activeTab === 'planner' ? (
              <WeeklySchedulePlanner />
            ) : activeTab === 'featured' ? (
              <FeaturedSolutionsView
                onSelectCourse={setSelectedCourse}
                onOpenAITutor={() => setShowAITutor(true)}
              />
            ) : activeTab === 'catalog' ? (
              <div className="space-y-12">
                <CatalogGrid2x4
                  onSelectCourse={setSelectedCourse}
                  onOpenAITutor={() => setShowAITutor(true)}
                  onExportWorkspace={() => {}}
                />
                <div className="border-t border-[#1a3848] pt-10">
                  <FeaturedSolutionsView
                    onSelectCourse={setSelectedCourse}
                    onOpenAITutor={() => setShowAITutor(true)}
                  />
                </div>
              </div>
            ) : activeTab === 'research' ? (
              <div className="space-y-6">
                <div className="p-6 rounded-2xl bg-[#10222b] border border-[#1c3a47] space-y-3">
                  <h2 className="text-xl font-bold text-white">Academic Research & Deep Crawl RAG Agent</h2>
                  <p className="text-xs text-[#82a4b3]">
                    Autonomous research engine that crawls university repositories, indexes papers, and generates citations.
                  </p>
                  <button
                    onClick={() => setShowRagIndexer(true)}
                    className="px-4 py-2 rounded-xl bg-[#0f6674] hover:bg-[#137b8c] text-white text-xs font-semibold"
                  >
                    Launch Deep Crawl RAG Indexer
                  </button>
                </div>
              </div>
            ) : activeTab === 'workspace' ? (
              <div className="space-y-6">
                <div className="p-6 rounded-2xl bg-[#10222b] border border-[#1c3a47] space-y-3">
                  <h2 className="text-xl font-bold text-white">Google Workspace & Drive Integration</h2>
                  <p className="text-xs text-[#82a4b3]">
                    Connect Google Workspace to auto-sync study guides, research papers, and certificates directly into Google Docs and Sheets.
                  </p>
                  <button
                    onClick={() => setShowAuthModal(true)}
                    className="px-4 py-2 rounded-xl bg-[#0f6674] hover:bg-[#137b8c] text-white text-xs font-semibold"
                  >
                    Configure Workspace & Gemini Keys
                  </button>
                </div>
              </div>
            ) : (
              /* Role Specific Dashboards */
              <div className="space-y-8">
                {user.role === 'student' && (
                  <StudentDashboard
                    user={user}
                    courses={courses}
                    progressMap={progressMap}
                    certificates={certificates}
                    onSelectCourse={setSelectedCourse}
                    onOpenCertificate={setSelectedCertificate}
                    onOpenAITutor={() => setShowAITutor(true)}
                    onOpenCourseGenerator={() => setShowCourseArchitect(true)}
                    onOpenClassroomModal={() => setShowClassroomModal(true)}
                    onOpenAuthModal={() => setShowAuthModal(true)}
                    onUpdateUser={handleUpdateUser}
                    isAssistantEnabled={user.isAssistantEnabled ?? true}
                  />
                )}

                {user.role === 'teacher' && (
                  <TeacherDashboard
                    user={user}
                    courses={courses}
                    onOpenCourseGenerator={() => setShowCourseArchitect(true)}
                    onSelectCourse={setSelectedCourse}
                    onOpenClassroomModal={() => setShowClassroomModal(true)}
                  />
                )}

                {user.role === 'school' && (
                  <SchoolDashboard
                    user={user}
                    onOpenAITutor={() => setShowAITutor(true)}
                    onOpenSubscriptions={() => {}}
                  />
                )}

                {user.role === 'team' && (
                  <TeamDashboard
                    user={user}
                    onOpenAITutor={() => setShowAITutor(true)}
                    onOpenSubscriptions={() => {}}
                  />
                )}

                {user.role === 'enterprise' && (
                  <EnterpriseDashboard
                    user={user}
                    onOpenAITutor={() => setShowAITutor(true)}
                    onOpenSubscriptions={() => {}}
                    onOpenAgentInspector={() => setShowAgentInspector(true)}
                  />
                )}
              </div>
            )}
          </React.Suspense>
        </main>
      </div>

      {/* Global Modals */}
      <AuthModal
        isOpen={showAuthModal}
        onClose={() => setShowAuthModal(false)}
        user={user}
        onUpdateUser={handleUpdateUser}
      />

      <AITutorModal
        isOpen={showAITutor}
        onClose={() => setShowAITutor(false)}
        initialContextLessonTitle={tutorContextLesson?.title}
        initialContextContent={tutorContextLesson?.content}
      />

      <AICourseArchitectModal
        isOpen={showCourseArchitect}
        onClose={() => setShowCourseArchitect(false)}
        onCourseCreated={handleCourseCreated}
      />

      <CertificateModal
        certificate={selectedCertificate}
        onClose={() => setSelectedCertificate(null)}
      />

      <GoogleClassroomModal
        isOpen={showClassroomModal}
        onClose={() => setShowClassroomModal(false)}
        onImportCourse={handleCourseCreated}
        currentUser={user}
      />

      <AgentInspectorModal
        isOpen={showAgentInspector}
        onClose={() => setShowAgentInspector(false)}
        selectedProgramTitle={selectedCourse ? selectedCourse.title : 'Autonomous AI Agent Swarms & Antigravity Reasoning'}
      />

      <DeepCrawlRagModal
        isOpen={showRagIndexer}
        onClose={() => setShowRagIndexer(false)}
      />

      <ProfileModal
        isOpen={showProfileModal}
        onClose={() => setShowProfileModal(false)}
        user={user}
        certificates={certificates}
        onUpdateUser={handleUpdateUser}
        onViewCertificate={(cert) => {
          setShowProfileModal(false);
          setSelectedCertificate(cert);
        }}
      />

      <SettingsModal
        isOpen={showSettingsModal}
        onClose={() => setShowSettingsModal(false)}
        user={user}
        isOffline={isOffline}
        onUpdateUser={handleUpdateUser}
        onLanguageChange={handleLanguageChange}
        onToggleOffline={handleToggleOffline}
        onOpenWorkspaceAuth={() => setShowAuthModal(true)}
        onOpenClassroomModal={() => setShowClassroomModal(true)}
        onNavigateTab={(tab) => {
          setActiveTab(tab);
          setSelectedCourse(null);
        }}
        onOpenAITutor={() => setShowAITutor(true)}
      />

      <SearchModal
        isOpen={showSearchModal}
        onClose={() => setShowSearchModal(false)}
        courses={courses}
        onSelectProgram={setSelectedCourse}
        onSelectTab={(tab) => {
          setActiveTab(tab);
          setSelectedCourse(null);
        }}
      />

      <LegalModal
        isOpen={showLegalModal}
        onClose={() => setShowLegalModal(false)}
      />

      <ToolModalOverlay
        activeTool={activeToolModal}
        onClose={() => setActiveToolModal(null)}
      />

      <QuickKeyModalOverlay
        isOpen={showQuickKeyModal}
        onClose={() => setShowQuickKeyModal(false)}
      />

      {/* Floating Animated Socratic Companion Bot NASMI */}
      <NashmiFloatingOverlay />

      {/* Invisible Background Engine Monitoring Frame Rates & Curation Service */}
      <BackgroundServicesEngine />
    </div>
  );
}
