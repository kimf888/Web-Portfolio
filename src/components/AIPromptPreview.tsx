import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Sparkles, Send, Command, RefreshCw } from 'lucide-react';

interface AIPromptPreviewProps {
  accentHex: string;
}

export const AIPromptPreview: React.FC<AIPromptPreviewProps> = ({ accentHex }) => {
  const [prompt, setPrompt] = useState('Generate a flat tech UI component tree for a real-time dashboard');
  const [isGenerating, setIsGenerating] = useState(false);
  const [nodes, setNodes] = useState([
    { id: '1', title: 'User Input Stream', status: 'ready', type: 'Input Node' },
    { id: '2', title: 'LLM Reasoning Engine', status: 'active', type: 'Model Core' },
    { id: '3', title: 'Flat UI Synthesizer', status: 'ready', type: 'Visual Output' },
  ]);

  const handleGenerate = () => {
    if (!prompt.trim()) return;
    setIsGenerating(true);
    setTimeout(() => {
      setNodes((prev) => [
        ...prev,
        {
          id: String(Date.now()),
          title: `Node: ${prompt.slice(0, 18)}...`,
          status: 'ready',
          type: 'Custom Canvas Branch',
        },
      ]);
      setIsGenerating(false);
    }, 800);
  };

  return (
    <div className="bg-slate-100/80 p-4 sm:p-6 border border-slate-200/80 space-y-4">
      <div className="flex items-center justify-between border-b border-slate-200 pb-3">
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 bg-blue-500 animate-pulse" />
          <span className="font-mono text-xs font-semibold text-slate-700 tracking-wider uppercase">
            AURA Canvas Node Simulation
          </span>
        </div>
        <div className="font-mono text-[11px] text-slate-400">STATUS: ONLINE (0.8ms)</div>
      </div>

      {/* Simulated Node Canvas */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 min-h-[160px] p-3 bg-white border border-slate-200/90 shadow-xs relative overflow-hidden">
        {nodes.map((node, i) => (
          <motion.div
            key={node.id}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="p-3 border border-slate-200 bg-slate-50/50 hover:bg-white hover:border-blue-300 transition-all shadow-2xs relative"
          >
            <div className="flex items-center justify-between mb-1.5">
              <span className="text-[10px] font-mono text-slate-400 uppercase">{node.type}</span>
              <span
                className="w-2 h-2"
                style={{ backgroundColor: node.status === 'active' ? accentHex : '#10B981' }}
              />
            </div>
            <div className="font-medium text-xs text-slate-800 line-clamp-1">{node.title}</div>
            <div className="mt-2 flex items-center justify-between text-[10px] text-slate-400 font-mono">
              <span>LATENCY: 4ms</span>
              <span>CONF: 99.4%</span>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Interactive Prompt Input */}
      <div className="flex flex-col sm:flex-row gap-2">
        <div className="relative flex-1">
          <Command className="w-4 h-4 absolute left-3 top-3 text-slate-400" />
          <input
            type="text"
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            placeholder="Type a canvas prompt..."
            className="w-full pl-9 pr-4 py-2 bg-white border border-slate-200 text-xs font-mono text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
          />
        </div>
        <button
          onClick={handleGenerate}
          disabled={isGenerating}
          className="px-4 py-2 text-xs font-semibold text-white flex items-center justify-center gap-2 hover:opacity-90 active:scale-95 transition-all"
          style={{ backgroundColor: accentHex }}
        >
          {isGenerating ? (
            <RefreshCw className="w-3.5 h-3.5 animate-spin" />
          ) : (
            <>
              <Sparkles className="w-3.5 h-3.5" />
              <span>Execute Node</span>
            </>
          )}
        </button>
      </div>
    </div>
  );
};
