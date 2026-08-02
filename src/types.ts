export type UserRole = 'student' | 'teacher' | 'school' | 'team' | 'enterprise';

export type AdaptiveLevel = 'remedial' | 'standard' | 'accelerated' | 'mastery';

export type LanguageCode = 'en' | 'es' | 'fr' | 'de' | 'ar' | 'ja' | 'zh' | 'hi';

export interface Badge {
  id: string;
  name: string;
  icon: string;
  description: string;
  dateUnlocked?: string;
  category: 'learning' | 'ai' | 'mastery' | 'streak';
}

export interface Milestone {
  id: string;
  title: string;
  targetXP: number;
  achieved: boolean;
  reward: string;
}

export interface ReadingPreferences {
  contrast: 'normal' | 'high';
  lineSpacing: 'normal' | 'loose' | 'extra-loose';
  fontSize: 'small' | 'medium' | 'large';
}

export interface ToolState {
  calculatorOpen: boolean;
  whiteboardOpen: boolean;
  codeEditorOpen: boolean;
  notesOpen: boolean;
  browserOpen: boolean;
}

export interface UserProfile {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  avatarUrl: string;
  organization?: string;
  language: LanguageCode;
  learningLevel: AdaptiveLevel;
  xpPoints: number;
  xp?: number;
  totalFocusMinutes?: number;
  careerRole?: string;
  targetTrajectory?: string;
  experiences?: any[];
  level: number;
  streakDays: number;
  offlineSyncEnabled: boolean;
  completedCourseIds: string[];
  enrolledCourseIds: string[];
  badges: Badge[];
  milestones: Milestone[];
  geminiApiKey?: string;
  adaptiveDifficulty?: boolean;
  linkedInConnected?: boolean;
  linkedInHeadline?: string;
  linkedInProfileUrl?: string;
  skills?: string[];
  achievements?: string[];
  discussionTopics?: string[];
  workspaceConnected?: boolean;
  workspaceEmail?: string;
  theme?: 'dark' | 'light';
  bio?: string;
  dailyStudyGoal?: number; // Target study time in minutes per day
  readingPreferences?: ReadingPreferences;
  toolState?: ToolState;
  isAssistantEnabled?: boolean;
}

export interface QuizQuestion {
  id: string;
  question: string;
  options: string[];
  correctAnswerIndex: number;
  explanation: string;
  hint?: string;
}

export interface Flashcard {
  id: string;
  front: string;
  back: string;
}

export interface Lesson {
  id: string;
  title: string;
  durationMinutes: number;
  content: string;
  keyTakeaways: string[];
  audioScript: string;
  audioUrl?: string; // Generated TTS audio data URI or URL
  quizzes: QuizQuestion[];
  flashcards: Flashcard[];
}

export interface Module {
  id: string;
  title: string;
  description: string;
  lessons: Lesson[];
  executiveSummary?: string;
}

export interface Course {
  id: string;
  title: string;
  category: string;
  description: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced' | 'All Levels';
  coverImage: string;
  author: string;
  rating: number;
  durationHours: number;
  modules: Module[];
  tags: string[];
  isAiGenerated?: boolean;
  language?: LanguageCode;
  degreeMetadata?: any;
}

export interface QuizResult {
  courseId: string;
  lessonId: string;
  score: number;
  totalQuestions: number;
  percentage: number;
  passed: boolean;
  feedback: string;
  completedAt: string;
  adaptiveLevelAdjusted?: AdaptiveLevel;
}

export interface Certificate {
  id: string;
  verificationId: string;
  studentName: string;
  courseTitle: string;
  issuedDate: string;
  score: number;
  instructorName: string;
  institutionName: string;
  skillsAcquired: string[];
}

export interface StudentProgress {
  userId: string;
  courseId: string;
  completedLessonIds: string[];
  quizResults: Record<string, QuizResult>; // lessonId -> QuizResult
  overallProgressPercentage: number;
  adaptiveLevel: AdaptiveLevel;
  lastAccessedAt: string;
  timeSpentMinutes: number;
}

export interface AnalyticsMetric {
  date: string;
  activeStudents: number;
  completionRate: number;
  avgQuizScore: number;
  studyHours: number;
}

export interface SkillMatrixItem {
  skillName: string;
  category: string;
  masteryPercentage: number;
  studentsTargeted: number;
}
