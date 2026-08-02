import { Course, LanguageCode, AdaptiveLevel, Certificate } from '../types';

export interface GenerateCourseRequest {
  topic: string;
  category: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced' | 'All Levels';
  targetAudience?: string;
  language?: LanguageCode;
  moduleCount?: number;
}

export interface TutorQueryRequest {
  prompt: string;
  contextLessonTitle?: string;
  contextContent?: string;
  thinkingMode?: boolean;
  language?: LanguageCode;
}

export interface QuizEvalRequest {
  question: string;
  studentAnswer: string;
  correctAnswer: string;
  explanation: string;
  currentAdaptiveLevel: AdaptiveLevel;
}

export class ApiService {
  static async generateCourse(req: GenerateCourseRequest): Promise<Course> {
    try {
      const res = await fetch('/api/gemini/generate-course', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(req)
      });
      if (!res.ok) {
        throw new Error(`Server returned status ${res.status}`);
      }
      const data = await res.json();
      return data.course;
    } catch (err) {
      console.warn('API course generation fallback used:', err);
      const courseId = `course-ai-gen-${Date.now()}`;
      return {
        id: courseId,
        title: req.topic.length > 5 ? req.topic : `Advanced ${req.topic} Masterclass`,
        category: req.category || 'Artificial Intelligence',
        description: `An AI-generated adaptive course exploring deep concepts in ${req.topic}. Designed for ${req.level} learners.`,
        level: req.level,
        coverImage: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=800&auto=format&fit=crop',
        author: 'Zalamati Autonomous AI Architect',
        rating: 5.0,
        durationHours: 6,
        tags: [req.topic, 'AI Generated', 'Adaptive', 'Interactive'],
        isAiGenerated: true,
        modules: [
          {
            id: `mod-${courseId}-1`,
            title: `Module 1: Foundations of ${req.topic}`,
            description: `Core concepts, mathematical principles, and practical application of ${req.topic}.`,
            lessons: [
              {
                id: `les-${courseId}-1-1`,
                title: `Introduction to ${req.topic}`,
                durationMinutes: 15,
                content: `Welcome to this comprehensive lesson on **${req.topic}**.\n\n### Core Pillars:\n1. **Theoretical Foundations**: Understanding key mechanisms.\n2. **Practical Execution**: Applying strategies to real-world engineering and business cases.\n3. **Continuous Mastery**: Adapting to new inputs and feedback loops.`,
                keyTakeaways: [
                  `Grasp the fundamental mechanics of ${req.topic}.`,
                  'Apply structured decision frameworks to complex problems.',
                  'Evaluate outcomes and iterate continuously.'
                ],
                audioScript: `Welcome to Introduction to ${req.topic}. In this lesson, we break down the foundational concepts and practical executions step by step.`,
                quizzes: [
                  {
                    id: `q-${courseId}-1`,
                    question: `What is the primary goal when studying ${req.topic}?`,
                    options: [
                      'Achieve systematic mastery through adaptive feedback',
                      'Memorize raw data without context',
                      'Avoid taking notes or practice quizzes',
                      'Rely solely on manual calculations'
                    ],
                    correctAnswerIndex: 0,
                    explanation: 'Adaptive feedback and systematic mastery provide the highest retention and practical problem-solving capability.',
                    hint: 'Focus on systematic mastery and feedback.'
                  }
                ],
                flashcards: [
                  {
                    id: `fc-${courseId}-1`,
                    front: `What defines ${req.topic}?`,
                    back: `A systematic discipline combining core principles with dynamic execution and continuous adaptive learning.`
                  }
                ]
              }
            ]
          }
        ]
      };
    }
  }

  static async askTutor(req: TutorQueryRequest): Promise<{ reply: string; thinkingProcess?: string }> {
    try {
      const res = await fetch('/api/gemini/tutor', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(req)
      });
      if (!res.ok) {
        throw new Error(`Server returned status ${res.status}`);
      }
      return await res.json();
    } catch (err) {
      console.warn('Tutor offline fallback:', err);
      return {
        reply: `Here is a structured explanation regarding your query about "${req.prompt}":\n\n1. **Core Concept**: ${req.prompt} forms a fundamental part of the lesson topic.\n2. **Key Insight**: Always break down the problem into smaller logical steps.\n3. **Recommendation**: Review the key takeaways or try the interactive quiz to reinforce your understanding.`,
        thinkingProcess: 'Analyzing question offline -> Local rule-based synthesis applied.'
      };
    }
  }

  static async queryAITutor(prompt: string, contextAgentTitle?: string): Promise<string> {
    const res = await this.askTutor({
      prompt,
      contextLessonTitle: contextAgentTitle || 'Zalamati Specialized Agent Service'
    });
    return res.reply;
  }

  static async generateTTSAudio(text: string): Promise<string | null> {
    try {
      const res = await fetch('/api/gemini/tts', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ text })
      });
      if (!res.ok) return null;
      const data = await res.json();
      return data.audioDataUri || null;
    } catch (err) {
      console.warn('TTS server request failed, client Web Speech API will be used:', err);
      return null;
    }
  }

  static async evaluateQuizResponse(req: QuizEvalRequest): Promise<{
    isCorrect: boolean;
    feedback: string;
    newAdaptiveLevel: AdaptiveLevel;
    xpGained: number;
  }> {
    try {
      const res = await fetch('/api/gemini/quiz-eval', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(req)
      });
      if (!res.ok) throw new Error(`Status ${res.status}`);
      return await res.json();
    } catch (err) {
      console.warn('Quiz eval fallback used:', err);
      const isCorrect = req.studentAnswer.trim().toLowerCase() === req.correctAnswer.trim().toLowerCase();
      let newLevel: AdaptiveLevel = req.currentAdaptiveLevel;
      if (isCorrect && req.currentAdaptiveLevel === 'remedial') newLevel = 'standard';
      else if (isCorrect && req.currentAdaptiveLevel === 'standard') newLevel = 'accelerated';
      else if (isCorrect && req.currentAdaptiveLevel === 'accelerated') newLevel = 'mastery';

      return {
        isCorrect,
        feedback: isCorrect ? 'Great job! Your response demonstrates solid understanding.' : `Not quite. ${req.explanation}`,
        newAdaptiveLevel: newLevel,
        xpGained: isCorrect ? 50 : 10
      };
    }
  }

  static async translateText(text: string, targetLanguage: LanguageCode): Promise<string> {
    if (targetLanguage === 'en') return text;
    try {
      const res = await fetch('/api/gemini/translate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ text, targetLanguage })
      });
      if (!res.ok) throw new Error('Translation failed');
      const data = await res.json();
      return data.translatedText || text;
    } catch (err) {
      console.warn('Translation fallback:', err);
      return text;
    }
  }

  static async generateModuleExecutiveSummary(
    moduleTitle: string,
    moduleDescription?: string,
    lessonTitles?: string[]
  ): Promise<string> {
    try {
      const res = await fetch('/api/gemini/module-summary', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          moduleTitle,
          moduleDescription,
          lessonContext: lessonTitles ? lessonTitles.join(', ') : ''
        })
      });
      if (!res.ok) throw new Error('Module summary request failed');
      const data = await res.json();
      return data.summary || '';
    } catch (err) {
      console.warn('Module summary fallback used:', err);
      return `### Executive Summary: ${moduleTitle}\n\n- **Core Theme**: Deep dive into ${moduleTitle} principles, architectures, and evaluation metrics.\n- **Practical Focus**: Hands-on lab scenarios and algorithm breakdowns.\n- **Strategic Outcome**: Enables high-confidence application in production environments.`;
    }
  }

  static async generateCertificate(studentName: string, courseTitle: string, score: number): Promise<Certificate> {
    const randomHex = Math.floor(100000 + Math.random() * 900000);
    const dateStr = new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric', day: 'numeric' });
    return {
      id: `cert-${Date.now()}`,
      verificationId: `ZAL-${new Date().getFullYear()}-${randomHex}-CERT`,
      studentName,
      courseTitle,
      issuedDate: dateStr,
      score,
      instructorName: 'Zalamati AI Master Council',
      institutionName: 'Zalamati Global eLearning Academy',
      skillsAcquired: [courseTitle, 'Adaptive Learning Mastery', 'AI-Verified Competency']
    };
  }
}
