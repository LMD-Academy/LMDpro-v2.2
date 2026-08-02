import { Course, StudentProgress, Certificate, UserProfile } from '../types';
import { DEFAULT_COURSES, INITIAL_CERTIFICATES } from '../data/defaultCourses';
import { db, auth } from './firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';

const STORAGE_KEYS = {
  USER_PROFILE: 'zalamati_user_profile',
  COURSES: 'zalamati_courses',
  PROGRESS: 'zalamati_student_progress',
  CERTIFICATES: 'zalamati_certificates',
  OFFLINE_MODE: 'zalamati_offline_mode',
  OFFLINE_QUIZ_QUEUE: 'zalamati_offline_quiz_queue',
};

export const defaultUser: UserProfile = {
  id: 'usr-student-01',
  name: 'Alex Rivera',
  email: 'alex.rivera@lmdpro.app',
  role: 'student',
  avatarUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop',
  organization: 'LMDpro Academy',
  language: 'en',
  learningLevel: 'standard',
  xpPoints: 1450,
  level: 2,
  badges: [
    { id: 'b1', name: 'Cognitive Scholar', icon: '🤖', description: 'Mastered 3 Cognitive & Agentic Modules', category: 'ai', dateUnlocked: 'Today' },
    { id: 'b2', name: '7-Day Streak', icon: '🔥', description: 'Maintained 7 consecutive daily study sessions', category: 'streak', dateUnlocked: 'Yesterday' },
    { id: 'b3', name: 'Degree Defender', icon: '🎓', description: 'Passed capstone evaluation defense', category: 'mastery', dateUnlocked: '2 days ago' },
  ],
  milestones: [
    { id: 'm1', title: 'Earn 1,000 XP Points', targetXP: 1000, achieved: true, reward: 'Level 2 Unlocked' },
    { id: 'm2', title: 'Complete 5 Degree Modules', targetXP: 2500, achieved: false, reward: 'Golden Badge' },
    { id: 'm3', title: 'Publish Research Paper to Docs', targetXP: 5000, achieved: false, reward: 'Academic Citation' },
  ],
  streakDays: 7,
  offlineSyncEnabled: true,
  completedCourseIds: [],
  enrolledCourseIds: ['course-ai-agentic-systems', 'course-quantum-computing']
};

export class OfflineStorageService {
  private static migrationsRun = false;

  static runMigrations(): void {
    if (this.migrationsRun) return;
    this.migrationsRun = true;
    try {
      const storedVersionStr = localStorage.getItem('zalamati_storage_version');
      let storedVersion = storedVersionStr ? parseInt(storedVersionStr, 10) : 1;
      
      const sanitizeWord = (str: string): string => {
        if (!str) return str;
        return str
          .replace(/\bAI\b/g, 'Smart')
          .replace(/\bai\b/g, 'smart')
          .replace(/\bArtificial Intelligence\b/gi, 'Cognitive Systems')
          .replace(/AITutor/g, 'SmartTutor')
          .replace(/AICourseArchitect/g, 'CourseArchitect')
          .replace(/AIContentCurationEngine/g, 'ContentCurationEngine');
      };

      if (storedVersion < 2) {
        const profileStr = localStorage.getItem(STORAGE_KEYS.USER_PROFILE);
        if (profileStr) {
          try {
            const profile = JSON.parse(profileStr);
            let mutated = false;
            if (profile && typeof profile === 'object') {
              if (profile.xpPoints !== undefined && profile.xp === undefined) {
                profile.xp = profile.xpPoints;
                mutated = true;
              }
              if (profile.totalFocusMinutes === undefined) {
                profile.totalFocusMinutes = 120;
                mutated = true;
              }
              if (!profile.careerRole) {
                profile.careerRole = 'Software Architect';
                mutated = true;
              }
              if (!profile.targetTrajectory) {
                profile.targetTrajectory = 'Cognitive & Intelligent Systems';
                mutated = true;
              }
              if (!profile.experiences) {
                profile.experiences = [];
                mutated = true;
              }
              if (mutated) {
                localStorage.setItem(STORAGE_KEYS.USER_PROFILE, JSON.stringify(profile));
              }
            }
          } catch (e) {
            console.warn('Migration to V2 failed for profile:', e);
          }
        }
        
        const coursesStr = localStorage.getItem(STORAGE_KEYS.COURSES);
        if (coursesStr) {
          try {
            const courses = JSON.parse(coursesStr);
            if (Array.isArray(courses)) {
              let mutated = false;
              courses.forEach(c => {
                if (c && !c.degreeMetadata) {
                   c.degreeMetadata = { credits: 3, code: c.id.toUpperCase().substring(0, 8), level: 'Advanced' };
                  mutated = true;
                }
              });
              if (mutated) {
                localStorage.setItem(STORAGE_KEYS.COURSES, JSON.stringify(courses));
              }
            }
          } catch (e) {
            console.warn('Migration to V2 failed for courses:', e);
          }
        }
        storedVersion = 2;
        localStorage.setItem('zalamati_storage_version', '2');
      }

      if (storedVersion < 3) {
        // Migration V3: Clean up and remove 'AI' word from user profile, courses, certificates, library
        const profileStr = localStorage.getItem(STORAGE_KEYS.USER_PROFILE);
        if (profileStr) {
          try {
            const profile = JSON.parse(profileStr);
            if (profile && typeof profile === 'object') {
              let mutated = false;
              if (profile.badges && Array.isArray(profile.badges)) {
                profile.badges = profile.badges.map((b: any) => {
                  const newName = sanitizeWord(b.name);
                  const newDesc = sanitizeWord(b.description);
                  if (newName !== b.name || newDesc !== b.description) {
                    mutated = true;
                    return { ...b, name: newName, description: newDesc };
                  }
                  return b;
                });
              }
              if (profile.targetTrajectory && profile.targetTrajectory.includes('AI')) {
                profile.targetTrajectory = sanitizeWord(profile.targetTrajectory);
                mutated = true;
              }
              if (mutated) {
                localStorage.setItem(STORAGE_KEYS.USER_PROFILE, JSON.stringify(profile));
              }
            }
          } catch (e) {
            console.warn('Migration to V3 failed for profile:', e);
          }
        }

        const coursesStr = localStorage.getItem(STORAGE_KEYS.COURSES);
        if (coursesStr) {
          try {
            const courses = JSON.parse(coursesStr);
            if (Array.isArray(courses)) {
              let mutated = false;
              const migratedCourses = courses.map(c => {
                const titleClean = sanitizeWord(c.title);
                const descClean = sanitizeWord(c.description);
                const categoryClean = sanitizeWord(c.category);
                const authorClean = sanitizeWord(c.author);
                const tagsClean = c.tags ? c.tags.map((t: string) => sanitizeWord(t)) : [];
                
                let tagsChanged = false;
                if (c.tags) {
                  for (let i = 0; i < c.tags.length; i++) {
                    if (c.tags[i] !== tagsClean[i]) tagsChanged = true;
                  }
                }

                if (titleClean !== c.title || descClean !== c.description || categoryClean !== c.category || authorClean !== c.author || tagsChanged) {
                  mutated = true;
                  return {
                    ...c,
                    title: titleClean,
                    description: descClean,
                    category: categoryClean,
                    author: authorClean,
                    tags: tagsClean
                  };
                }
                return c;
              });
              if (mutated) {
                localStorage.setItem(STORAGE_KEYS.COURSES, JSON.stringify(migratedCourses));
              }
            }
          } catch (e) {
            console.warn('Migration to V3 failed for courses:', e);
          }
        }

        const certsStr = localStorage.getItem(STORAGE_KEYS.CERTIFICATES);
        if (certsStr) {
          try {
            const certs = JSON.parse(certsStr);
            if (Array.isArray(certs)) {
              let mutated = false;
              const migratedCerts = certs.map(cert => {
                const titleClean = sanitizeWord(cert.courseTitle);
                const instClean = sanitizeWord(cert.institutionName);
                const skillsClean = cert.skillsAcquired ? cert.skillsAcquired.map((s: string) => sanitizeWord(s)) : [];
                
                let skillsChanged = false;
                if (cert.skillsAcquired) {
                  for (let i = 0; i < cert.skillsAcquired.length; i++) {
                    if (cert.skillsAcquired[i] !== skillsClean[i]) skillsChanged = true;
                  }
                }

                if (titleClean !== cert.courseTitle || instClean !== cert.institutionName || skillsChanged) {
                  mutated = true;
                  return {
                    ...cert,
                    courseTitle: titleClean,
                    institutionName: instClean,
                    skillsAcquired: skillsClean
                  };
                }
                return cert;
              });
              if (mutated) {
                localStorage.setItem(STORAGE_KEYS.CERTIFICATES, JSON.stringify(migratedCerts));
              }
            }
          } catch (e) {
            console.warn('Migration to V3 failed for certificates:', e);
          }
        }

        localStorage.setItem('zalamati_storage_version', '3');
        console.log('Successfully completed offline storage migration to Version 3 (No AI terminology)');
      }
    } catch (e) {
      console.error('Error running offline storage migrations:', e);
    }
  }

  static async performIntegrityCheck(): Promise<void> {
    this.runMigrations();
    const userId = auth.currentUser?.uid || 'anonymous';
    const logsCollection = collection(db, 'integrity_logs');
    const results = [];

    for (const [key, storageKey] of Object.entries(STORAGE_KEYS)) {
      const data = localStorage.getItem(storageKey);
      if (!data) {
        results.push({ key, status: 'missing', message: `Entry ${storageKey} is missing.` });
        continue;
      }
      try {
        JSON.parse(data);
        results.push({ key, status: 'ok', message: 'Valid' });
      } catch (e) {
        results.push({ key, status: 'corrupted', message: `Entry ${storageKey} is corrupted. Re-syncing...` });
        // Attempt to fix/reset if possible
        localStorage.removeItem(storageKey);
      }
    }

    await addDoc(logsCollection, {
      userId,
      results,
      timestamp: serverTimestamp(),
    });
  }

  static getProfile(): UserProfile {
    this.runMigrations();
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.USER_PROFILE);
      if (saved) return JSON.parse(saved);
    } catch (e) {
      console.warn('Failed to parse user profile from local storage:', e);
    }
    return defaultUser;
  }

  static saveProfile(profile: UserProfile): void {
    try {
      localStorage.setItem(STORAGE_KEYS.USER_PROFILE, JSON.stringify(profile));
    } catch (e) {
      console.error('Failed to save profile:', e);
    }
  }

  static getCourses(): Course[] {
    this.runMigrations();
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.COURSES);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length > 0) return parsed;
      }
    } catch (e) {
      console.warn('Failed to load courses from storage:', e);
    }
    return DEFAULT_COURSES;
  }

  static saveCourses(courses: Course[]): void {
    try {
      localStorage.setItem(STORAGE_KEYS.COURSES, JSON.stringify(courses));
    } catch (e) {
      console.error('Failed to save courses:', e);
    }
  }

  static saveCourse(newCourse: Course): Course[] {
    const courses = this.getCourses();
    const existingIndex = courses.findIndex(c => c.id === newCourse.id);
    if (existingIndex >= 0) {
      courses[existingIndex] = newCourse;
    } else {
      courses.unshift(newCourse);
    }
    this.saveCourses(courses);
    return courses;
  }

  static getProgressMap(): Record<string, StudentProgress> {
    this.runMigrations();
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.PROGRESS);
      if (saved) return JSON.parse(saved);
    } catch (e) {
      console.warn('Failed to load progress map:', e);
    }
    return {};
  }

  static saveProgress(progress: StudentProgress): void {
    try {
      const map = this.getProgressMap();
      map[progress.courseId] = progress;
      localStorage.setItem(STORAGE_KEYS.PROGRESS, JSON.stringify(map));
    } catch (e) {
      console.error('Failed to save progress:', e);
    }
  }

  static getCertificates(): Certificate[] {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.CERTIFICATES);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed)) return parsed;
      }
    } catch (e) {
      console.warn('Failed to load certificates:', e);
    }
    return INITIAL_CERTIFICATES;
  }

  static saveCertificate(cert: Certificate): Certificate[] {
    const certs = this.getCertificates();
    if (!certs.some(c => c.id === cert.id || c.verificationId === cert.verificationId)) {
      certs.unshift(cert);
      try {
        localStorage.setItem(STORAGE_KEYS.CERTIFICATES, JSON.stringify(certs));
      } catch (e) {
        console.error('Failed to save certificate:', e);
      }
    }
    return certs;
  }

  static isOfflineForced(): boolean {
    return localStorage.getItem(STORAGE_KEYS.OFFLINE_MODE) === 'true';
  }

  static setOfflineForced(forced: boolean): void {
    localStorage.setItem(STORAGE_KEYS.OFFLINE_MODE, forced ? 'true' : 'false');
  }

  static getCachedLibraryDocs(): any[] {
    try {
      const saved = localStorage.getItem('zalamati_cached_library');
      if (saved) return JSON.parse(saved);
    } catch (e) {
      console.warn('Failed to load cached library docs', e);
    }
    return [
      { id: 'lib-1', title: 'Autonomous Multi-Agent Systems in E-Learning Architecture', type: 'Research Paper', author: 'Dr. S. Banyata', citations: 42, date: '2026', content: 'Comprehensive overview of multi-agent cognitive mesh and real-time synchronization.' },
      { id: 'lib-2', title: 'Quantum Neural Networks and Vector Embedding Spaces', type: 'Whitepaper', author: 'LMD Research Lab', citations: 28, date: '2026', content: 'Mapping text, code, and multimodal PDFs into unified vector stores.' },
      { id: 'lib-3', title: 'Real-Time WebSocket Ingestion and Agentic Execution', type: 'Technical Spec', author: 'Zalamati Core Team', citations: 19, date: '2026', content: 'Low-latency event bus and fallback execution models.' }
    ];
  }

  static saveCachedLibraryDocs(docs: any[]): void {
    try {
      localStorage.setItem('zalamati_cached_library', JSON.stringify(docs));
    } catch (e) {
      console.error('Failed to save cached library docs', e);
    }
  }
}
