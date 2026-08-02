import React, { Component, ErrorInfo, ReactNode } from 'react';
import { AlertTriangle, RefreshCw, Terminal } from 'lucide-react';
import { PerformanceMonitor } from '../services/performanceMonitor';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

export class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
    error: null
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught error in application:', error, errorInfo);
    
    // Log runtime exceptions to the PerformanceMonitor which displays in Prompt Diagnostics view
    PerformanceMonitor.addLog({
      type: 'RUNTIME_ERROR',
      metricValue: 'EXCEPTION',
      message: `Fatal: ${error.message || 'Unknown runtime error'}. Stack: ${errorInfo.componentStack?.substring(0, 120) || ''}`,
      severity: 'high'
    });
  }

  private handleReset = () => {
    this.setState({ hasError: false, error: null });
    window.location.reload();
  };

  public render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-[#0B1015] text-[#e2e8f0] flex flex-col items-center justify-center p-6 font-sans">
          <div className="max-w-md w-full bg-[#141B22] border border-[#1b3b4a]/40 rounded-2xl p-6 shadow-2xl space-y-6 animate-fade-in">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 shrink-0">
                <AlertTriangle className="w-6 h-6" />
              </div>
              <div>
                <h2 className="text-base font-bold text-white">System Instability Detected</h2>
                <p className="text-xs text-slate-400 mt-1">A background process or rendering cycle encountered an unexpected runtime exception.</p>
              </div>
            </div>

            {this.state.error && (
              <div className="p-4 rounded-xl bg-black/40 border border-red-500/20 font-mono text-[10px] text-rose-300 space-y-2 overflow-x-auto max-h-40">
                <div className="flex items-center gap-1.5 font-semibold text-rose-400 border-b border-red-500/10 pb-1.5">
                  <Terminal className="w-3.5 h-3.5" />
                  <span>Diagnostics Error Stream</span>
                </div>
                <div className="whitespace-pre-wrap">{this.state.error.name}: {this.state.error.message}</div>
              </div>
            )}

            <div className="flex items-center justify-between gap-3 pt-2">
              <div className="text-[10px] text-[#5b7d8d]">
                Error logged in Prompt Diagnostics.
              </div>
              <button
                onClick={this.handleReset}
                className="px-4 py-2 rounded-xl bg-[#0f6674] hover:bg-[#137b8c] text-white text-xs font-semibold flex items-center gap-2 transition-all shadow-md active:scale-95"
              >
                <RefreshCw className="w-3.5 h-3.5" />
                <span>Recover Interface</span>
              </button>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
