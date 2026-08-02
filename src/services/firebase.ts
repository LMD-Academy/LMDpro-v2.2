import { initializeApp } from 'firebase/app';
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
  User,
  signOut
} from 'firebase/auth';
import {
  getFirestore,
  doc,
  getDocFromServer,
  collection,
  getDocs,
  setDoc,
  getDoc,
  query,
  where
} from 'firebase/firestore';
import firebaseConfig from '../../firebase-applet-config.json';

const app = initializeApp(firebaseConfig);

// Initialize Firestore with specific database ID from provisioned project
const FIRESTORE_DB_ID = 'ai-studio-zalamatielearnin-3cc65a7b-0c36-42e0-9fd6-0bd3008b74f8';
export const db = getFirestore(app, FIRESTORE_DB_ID);
export const auth = getAuth(app);

// In-memory token cache with automatic localStorage fallback
let cachedAccessToken: string | null = typeof window !== 'undefined' ? localStorage.getItem('g_access_token') || sessionStorage.getItem('g_access_token') : null;
let isSigningIn = false;

// Error Handling Enum and Helper
export enum OperationType {
  CREATE = 'create',
  UPDATE = 'update',
  DELETE = 'delete',
  LIST = 'list',
  GET = 'get',
  WRITE = 'write',
}

export interface FirestoreErrorInfo {
  error: string;
  operationType: OperationType;
  path: string | null;
  authInfo: {
    userId?: string | null;
    email?: string | null;
    emailVerified?: boolean | null;
    isAnonymous?: boolean | null;
    tenantId?: string | null;
    providerInfo?: {
      providerId?: string | null;
      email?: string | null;
    }[];
  };
}

export function handleFirestoreError(error: unknown, operationType: OperationType, path: string | null) {
  const errInfo: FirestoreErrorInfo = {
    error: error instanceof Error ? error.message : String(error),
    authInfo: {
      userId: auth.currentUser?.uid,
      email: auth.currentUser?.email,
      emailVerified: auth.currentUser?.emailVerified,
      isAnonymous: auth.currentUser?.isAnonymous,
      tenantId: auth.currentUser?.tenantId,
      providerInfo: auth.currentUser?.providerData?.map(provider => ({
        providerId: provider.providerId,
        email: provider.email,
      })) || []
    },
    operationType,
    path
  };
  console.error('Firestore Error: ', JSON.stringify(errInfo));
  throw new Error(JSON.stringify(errInfo));
}

// Test connectivity on initial load
export async function testFirestoreConnection() {
  try {
    await getDocFromServer(doc(db, 'test', 'connection'));
  } catch (error) {
    if (error instanceof Error && error.message.includes('the client is offline')) {
      console.warn('Firebase Firestore client is offline or initializing.');
    }
  }
}

// Google Auth Provider with Google Workspace Scopes
export const WORKSPACE_SCOPES = [
  'https://www.googleapis.com/auth/calendar.events',
  'https://www.googleapis.com/auth/classroom.courses.readonly',
  'https://www.googleapis.com/auth/classroom.rosters.readonly',
  'https://www.googleapis.com/auth/classroom.coursework.students.readonly',
  'https://www.googleapis.com/auth/classroom.announcements.readonly',
  'https://www.googleapis.com/auth/drive.readonly',
  'https://www.googleapis.com/auth/drive.file',
  'https://www.googleapis.com/auth/spreadsheets.readonly',
  'https://www.googleapis.com/auth/gmail.readonly',
  'https://www.googleapis.com/auth/documents.readonly',
  'https://www.googleapis.com/auth/presentations.readonly',
  'https://www.googleapis.com/auth/tasks.readonly',
  'https://www.googleapis.com/auth/chat.messages.readonly',
  'https://www.googleapis.com/auth/forms.body.readonly',
  'https://www.googleapis.com/auth/forms.responses.readonly'
];

export const initAuth = (
  onAuthSuccess?: (user: User, token: string | null) => void,
  onAuthFailure?: () => void
) => {
  return onAuthStateChanged(auth, async (user: User | null) => {
    if (user) {
      if (onAuthSuccess) onAuthSuccess(user, cachedAccessToken);
    } else {
      cachedAccessToken = null;
      if (onAuthFailure) onAuthFailure();
    }
  });
};

export const googleSignIn = async (): Promise<{ user: User; accessToken: string | null } | null> => {
  try {
    isSigningIn = true;
    const provider = new GoogleAuthProvider();
    WORKSPACE_SCOPES.forEach(scope => provider.addScope(scope));

    const result = await signInWithPopup(auth, provider);
    const credential = GoogleAuthProvider.credentialFromResult(result);
    cachedAccessToken = credential?.accessToken || null;

    if (cachedAccessToken && typeof window !== 'undefined') {
      localStorage.setItem('g_access_token', cachedAccessToken);
      sessionStorage.setItem('g_access_token', cachedAccessToken);
    }

    return { user: result.user, accessToken: cachedAccessToken };
  } catch (error: any) {
    console.error('Google Sign In Error:', error);
    throw error;
  } finally {
    isSigningIn = false;
  }
};

export const getAccessToken = (): string | null => {
  if (!cachedAccessToken && typeof window !== 'undefined') {
    cachedAccessToken = localStorage.getItem('g_access_token') || sessionStorage.getItem('g_access_token');
  }
  return cachedAccessToken;
};

export const setAccessToken = (token: string | null) => {
  cachedAccessToken = token;
  if (typeof window !== 'undefined') {
    if (token) {
      localStorage.setItem('g_access_token', token);
      sessionStorage.setItem('g_access_token', token);
    } else {
      localStorage.removeItem('g_access_token');
      sessionStorage.removeItem('g_access_token');
    }
  }
};

export const logout = async () => {
  await signOut(auth);
  setAccessToken(null);
};
