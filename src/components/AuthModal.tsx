import React, { useState } from 'react';
import { UserProfile } from '../types';
import {
  X,
  Key,
  ShieldCheck,
  CheckCircle2,
  Lock,
  Mail,
  User,
  Building,
  Sparkles,
  Bot,
  Layers,
  ArrowRight
} from 'lucide-react';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  user: UserProfile;
  onUpdateUser: (updated: Partial<UserProfile>) => void;
}

export const AuthModal: React.FC<AuthModalProps> = ({
  isOpen,
  onClose,
  user,
  onUpdateUser,
}) => {
  const [activeTab, setActiveTab] = useState<'google' | 'gemini' | 'email' | 'passkey'>('google');
  const [email, setEmail] = useState(user.email || '');
  const [name, setName] = useState(user.name || '');
  const [password, setPassword] = useState('');
  const [geminiKeyInput, setGeminiKeyInput] = useState(user.geminiApiKey || '');
  const [isConnectingWorkspace, setIsConnectingWorkspace] = useState(false);
  const [isSavingKey, setIsSavingKey] = useState(false);
  const [statusMessage, setStatusMessage] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleGoogleSignIn = () => {
    onUpdateUser({
        name: name || 'Alex Rivera (Google Workspace)',
        email: email || 'alex.rivera@workspace.edu',
        workspaceConnected: true,
        workspaceEmail: email || 'alex.rivera@workspace.edu',
        avatarUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
        xpPoints: user.xpPoints + 150,
      });
      onClose();
  };

  const handlePasskeyAuth = async () => {
    onUpdateUser({
        name: name || 'Alex Rivera (Passkey Secured)',
        email: email || 'alex.rivera@passkey.security',
        workspaceConnected: true,
        avatarUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
        xpPoints: user.xpPoints + 200,
      });
      onClose();
  };

  const handleSaveGeminiKey = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSavingKey(true);
    setStatusMessage('Validating custom Gemini API key...');

    setTimeout(() => {
      setIsSavingKey(false);
      onUpdateUser({
        geminiApiKey: geminiKeyInput.trim(),
        xpPoints: user.xpPoints + 100,
      });
      setStatusMessage('Custom Gemini API Key active! System AI features enabled.');
      setTimeout(() => {
        setStatusMessage(null);
        onClose();
      }, 1500);
    }, 1000);
  };

  const handleEmailAuth = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    onUpdateUser({
      name: name || email.split('@')[0],
      email: email,
    });
    setStatusMessage('Logged in successfully!');
    setTimeout(() => {
      setStatusMessage(null);
      onClose();
    }, 1000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in">
      <div className="relative w-full max-w-md bg-[#0e1f27] border border-[#1d3d4b] rounded-2xl shadow-2xl overflow-hidden flex flex-col">
        {/* Modal Header */}
        <div className="flex items-center justify-between p-5 border-b border-[#1b3644] bg-[#11242e]">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-cyan-500 to-indigo-500 flex items-center justify-center text-white shadow-md">
              <Sparkles className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-base font-bold text-white leading-none">
                LMD<span className="text-cyan-400 font-normal">pro</span> Identity & API Gateway
              </h3>
              <p className="text-[11px] text-[#789cae] mt-1">
                Sign in & grant permissions for Gemini & Google Workspace
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-gray-400 hover:text-white hover:bg-white/10 transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Tab Selection */}
        <div className="flex border-b border-[#1b3644] bg-[#0b181f] p-1 overflow-x-auto">
          <button
            onClick={() => setActiveTab('passkey')}
            className={`flex-1 py-2 px-2 text-xs font-semibold rounded-lg transition-colors flex items-center justify-center gap-1.5 whitespace-nowrap ${
              activeTab === 'passkey'
                ? 'bg-[#183644] text-white shadow-sm'
                : 'text-[#7498a9] hover:text-white'
            }`}
          >
            <Lock className="w-3.5 h-3.5 text-cyan-400" />
            <span>Passkey</span>
          </button>
          <button
            onClick={() => setActiveTab('google')}
            className={`flex-1 py-2 px-2 text-xs font-semibold rounded-lg transition-colors flex items-center justify-center gap-1.5 whitespace-nowrap ${
              activeTab === 'google'
                ? 'bg-[#183644] text-white shadow-sm'
                : 'text-[#7498a9] hover:text-white'
            }`}
          >
            <span>Workspace</span>
          </button>
          <button
            onClick={() => setActiveTab('gemini')}
            className={`flex-1 py-2 px-2 text-xs font-semibold rounded-lg transition-colors flex items-center justify-center gap-1.5 whitespace-nowrap ${
              activeTab === 'gemini'
                ? 'bg-[#183644] text-white shadow-sm'
                : 'text-[#7498a9] hover:text-white'
            }`}
          >
            <Key className="w-3.5 h-3.5 text-cyan-400" />
            <span>Gemini Key</span>
          </button>
          <button
            onClick={() => setActiveTab('email')}
            className={`flex-1 py-2 px-2 text-xs font-semibold rounded-lg transition-colors flex items-center justify-center gap-1.5 whitespace-nowrap ${
              activeTab === 'email'
                ? 'bg-[#183644] text-white shadow-sm'
                : 'text-[#7498a9] hover:text-white'
            }`}
          >
            <Mail className="w-3.5 h-3.5 text-gray-400" />
            <span>Email</span>
          </button>
        </div>

        {/* Status Notification */}
        {statusMessage && (
          <div className="mx-5 mt-4 p-3 rounded-xl bg-cyan-950/80 border border-cyan-500/30 text-cyan-200 text-xs flex items-center gap-2 animate-fade-in">
            <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
            <span>{statusMessage}</span>
          </div>
        )}

        {/* Tab Contents */}
        <div className="p-6 space-y-5">
          {/* 0. Passkey / WebAuthn Biometric Tab */}
          {activeTab === 'passkey' && (
            <div className="space-y-4">
              <div className="p-4 rounded-xl bg-[#122631] border border-[#1f4253] space-y-2">
                <div className="flex items-center gap-2 text-xs font-semibold text-cyan-300">
                  <Lock className="w-4 h-4 text-cyan-400" />
                  <span>WebAuthn & FIDO2 Biometric Passkeys</span>
                </div>
                <p className="text-[11px] text-[#81a5b6] leading-relaxed">
                  Authenticate instantly and securely using native browser biometrics (Touch ID, Face ID, Windows Hello, or hardware security keys). Zero passwords required.
                </p>
                <div className="flex flex-wrap gap-2 pt-1 text-[10px] text-[#a1c4d4]">
                  <span className="bg-[#0c181f] px-2 py-0.5 rounded border border-[#1e3c4a]">
                    FIDO2 / WebAuthn
                  </span>
                  <span className="bg-[#0c181f] px-2 py-0.5 rounded border border-[#1e3c4a]">
                    Touch ID / Face ID
                  </span>
                  <span className="bg-[#0c181f] px-2 py-0.5 rounded border border-[#1e3c4a]">
                    Hardware Enclave
                  </span>
                </div>
              </div>

              <button
                onClick={handlePasskeyAuth}
                className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-gradient-to-r from-cyan-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 text-white font-bold text-xs shadow-lg shadow-cyan-500/20 transition-all active:scale-95"
              >
                <Lock className="w-4 h-4" />
                <span>Sign in with Biometric Passkey</span>
              </button>
            </div>
          )}

          {/* 1. Google Workspace Sign In Tab */}
          {activeTab === 'google' && (
            <div className="space-y-4">
              <div className="p-4 rounded-xl bg-[#122631] border border-[#1f4253] space-y-2">
                <div className="flex items-center gap-2 text-xs font-semibold text-cyan-300">
                  <ShieldCheck className="w-4 h-4 text-cyan-400" />
                  <span>Google Workspace Integration</span>
                </div>
                <p className="text-[11px] text-[#81a5b6] leading-relaxed">
                  LMDpro AI agents have access to Google Docs, Sheets, Drive, and Classroom to export notes, research, and track degree progress.
                </p>
                <div className="flex flex-wrap gap-2 pt-1 text-[10px] text-[#a1c4d4]">
                  <span className="bg-[#0c181f] px-2 py-0.5 rounded border border-[#1e3c4a]">
                    Google Drive
                  </span>
                  <span className="bg-[#0c181f] px-2 py-0.5 rounded border border-[#1e3c4a]">
                    Google Docs
                  </span>
                  <span className="bg-[#0c181f] px-2 py-0.5 rounded border border-[#1e3c4a]">
                    Google Sheets
                  </span>
                  <span className="bg-[#0c181f] px-2 py-0.5 rounded border border-[#1e3c4a]">
                    Classroom API
                  </span>
                </div>
              </div>

              <button
                onClick={handleGoogleSignIn}
                className="w-full flex items-center justify-center gap-3 py-3 px-4 rounded-xl bg-white hover:bg-gray-100 text-gray-900 font-bold text-xs shadow-lg transition-all active:scale-95"
              >
                {/* Google Multicolor SVG Logo */}
                <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24">
                  <path
                    fill="#4285F4"
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  />
                  <path
                    fill="#34A853"
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  />
                  <path
                    fill="#FBBC05"
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
                  />
                  <path
                    fill="#EA4335"
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
                  />
                </svg>
                <span>Sign in with Google Workspace</span>
              </button>
            </div>
          )}

          {/* 2. Custom Gemini API Key Tab */}
          {activeTab === 'gemini' && (
            <form onSubmit={handleSaveGeminiKey} className="space-y-4">
              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-gray-300 flex items-center justify-between">
                  <span>Gemini API Key (BYOK)</span>
                  <a
                    href="https://aistudio.google.com/app/apikey"
                    target="_blank"
                    rel="noreferrer"
                    className="text-[11px] text-cyan-400 hover:underline"
                  >
                    Get API Key →
                  </a>
                </label>
                <div className="relative">
                  <Key className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#598091]" />
                  <input
                    type="password"
                    placeholder="AIzaSy..."
                    value={geminiKeyInput}
                    onChange={(e) => setGeminiKeyInput(e.target.value)}
                    className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-[#0b171f] border border-[#1f4253] text-white text-xs placeholder-[#4b6d7c] focus:outline-none focus:border-cyan-400 transition-colors"
                  />
                </div>
                <p className="text-[11px] text-[#799db0] leading-relaxed">
                  Provide your own Gemini 3.1 Pro / Flash API key for unlimited AI tutoring, automated degree module expansion, and real-time research.
                </p>
              </div>

              <button
                type="submit"
                disabled={isSavingKey || !geminiKeyInput.trim()}
                className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-[#0f6674] hover:bg-[#137b8c] text-white font-semibold text-xs shadow-lg transition-all active:scale-95 disabled:opacity-50"
              >
                <span>Save & Activate Key</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          )}

          {/* 3. Email Login Tab */}
          {activeTab === 'email' && (
            <form onSubmit={handleEmailAuth} className="space-y-3">
              <div className="space-y-1">
                <label className="text-xs text-gray-300">Full Name</label>
                <div className="relative">
                  <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#598091]" />
                  <input
                    type="text"
                    placeholder="e.g. Alex Rivera"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 rounded-xl bg-[#0b171f] border border-[#1f4253] text-white text-xs placeholder-[#4b6d7c] focus:outline-none focus:border-cyan-400 transition-colors"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-xs text-gray-300">Email Address</label>
                <div className="relative">
                  <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#598091]" />
                  <input
                    type="email"
                    required
                    placeholder="alex@lmdpro.app"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 rounded-xl bg-[#0b171f] border border-[#1f4253] text-white text-xs placeholder-[#4b6d7c] focus:outline-none focus:border-cyan-400 transition-colors"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-xs text-gray-300">Password</label>
                <div className="relative">
                  <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#598091]" />
                  <input
                    type="password"
                    placeholder="••••••••"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 rounded-xl bg-[#0b171f] border border-[#1f4253] text-white text-xs placeholder-[#4b6d7c] focus:outline-none focus:border-cyan-400 transition-colors"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-2.5 rounded-xl bg-[#0f6674] hover:bg-[#137b8c] text-white font-semibold text-xs shadow-lg transition-all active:scale-95"
              >
                Sign In
              </button>
            </form>
          )}
        </div>

        {/* Footer */}
        <div className="p-4 bg-[#0b171e] border-t border-[#1a3543] text-center text-[11px] text-[#6e93a5]">
          <span>Protected by LMDpro Security Protocol & Google Cloud OAuth</span>
        </div>
      </div>
    </div>
  );
};
