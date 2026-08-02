import React from 'react';
import { Calculator, Pencil, Code, StickyNote, Globe } from 'lucide-react';
import { ToolState } from '../types';

interface ToolDockProps {
  state: ToolState;
  onToggle: (tool: keyof ToolState) => void;
}

export const ToolDock: React.FC<ToolDockProps> = ({ state, onToggle }) => {
  return (
    <div className="fixed top-1/2 left-6 -translate-y-1/2 p-2 bg-[#0c1a24] border border-[#1b3b4a] rounded-full shadow-2xl z-50 flex flex-col gap-4">
      <button onClick={() => onToggle('calculatorOpen')} className={`p-3 rounded-full ${state.calculatorOpen ? 'bg-cyan-500 text-slate-950' : 'text-[#789cae]'}`}><Calculator className="w-5 h-5"/></button>
      <button onClick={() => onToggle('whiteboardOpen')} className={`p-3 rounded-full ${state.whiteboardOpen ? 'bg-cyan-500 text-slate-950' : 'text-[#789cae]'}`}><Pencil className="w-5 h-5"/></button>
      <button onClick={() => onToggle('codeEditorOpen')} className={`p-3 rounded-full ${state.codeEditorOpen ? 'bg-cyan-500 text-slate-950' : 'text-[#789cae]'}`}><Code className="w-5 h-5"/></button>
      <button onClick={() => onToggle('notesOpen')} className={`p-3 rounded-full ${state.notesOpen ? 'bg-cyan-500 text-slate-950' : 'text-[#789cae]'}`}><StickyNote className="w-5 h-5"/></button>
      <button onClick={() => onToggle('browserOpen')} className={`p-3 rounded-full ${state.browserOpen ? 'bg-cyan-500 text-slate-950' : 'text-[#789cae]'}`}><Globe className="w-5 h-5"/></button>
    </div>
  );
};
