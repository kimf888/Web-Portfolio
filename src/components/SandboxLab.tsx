import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Terminal, Sliders, Play, Copy, Check, Sparkles, Layers, Zap } from 'lucide-react';
import { Language } from '../types';
import { i18n } from '../data/i18n';

interface SandboxLabProps {
  lang: Language;
  accentHex: string;
}

export const SandboxLab: React.FC<SandboxLabProps> = ({ lang, accentHex }) => {
  const t = i18n.sandbox;

  // Spring physics parameters state
  const [stiffness, setStiffness] = useState(300);
  const [damping, setDamping] = useState(18);
  const [mass, setMass] = useState(1);
  const [triggerKey, setTriggerKey] = useState(0);
  const [copiedCode, setCopiedCode] = useState(false);

  const reactMotionCode = `<motion.div
  initial={{ scale: 0.8, opacity: 0 }}
  animate={{ scale: 1, opacity: 1 }}
  transition={{
    type: "spring",
    stiffness: ${stiffness},
    damping: ${damping},
    mass: ${mass}
  }}
/>`;

  const copyCode = () => {
    navigator.clipboard.writeText(reactMotionCode);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
  };

  return (
    <section id="sandbox" className="py-20 bg-slate-50 border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="space-y-2 max-w-2xl text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white border border-slate-200 text-slate-700 font-mono text-xs font-semibold shadow-2xs">
            <Terminal className="w-3.5 h-3.5 text-blue-600" />
            <span>INTERACTIVE LAB // EXPERIMENTAL</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            {t.title[lang]}
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            {t.subtitle[lang]}
          </p>
        </div>

        {/* Sandbox Tool Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Controls Column */}
          <div className="lg:col-span-5 bg-white p-6 sm:p-8 border border-slate-200 shadow-sm space-y-6">
            <div className="flex items-center justify-between pb-4 border-b border-slate-100">
              <div className="flex items-center gap-2 font-mono text-xs font-bold text-slate-800">
                <Sliders className="w-4 h-4 text-slate-600" />
                <span>PHYSICS PARAMETERS</span>
              </div>
              <span className="font-mono text-[10px] text-slate-400">ENGINE: SPRING v2</span>
            </div>

            {/* Slider 1: Stiffness */}
            <div className="space-y-2 font-mono">
              <div className="flex justify-between text-xs font-semibold text-slate-700">
                <span>{t.stiffness[lang]}</span>
                <span className="text-blue-600 font-bold">{stiffness}</span>
              </div>
              <input
                type="range"
                min="50"
                max="600"
                step="10"
                value={stiffness}
                onChange={(e) => setStiffness(Number(e.target.value))}
                className="w-full accent-blue-600 cursor-pointer"
              />
              <div className="flex justify-between text-[10px] text-slate-400">
                <span>50 (Soft Fluid)</span>
                <span>600 (Snappy)</span>
              </div>
            </div>

            {/* Slider 2: Damping */}
            <div className="space-y-2 font-mono">
              <div className="flex justify-between text-xs font-semibold text-slate-700">
                <span>{t.damping[lang]}</span>
                <span className="text-blue-600 font-bold">{damping}</span>
              </div>
              <input
                type="range"
                min="5"
                max="50"
                step="1"
                value={damping}
                onChange={(e) => setDamping(Number(e.target.value))}
                className="w-full accent-blue-600 cursor-pointer"
              />
              <div className="flex justify-between text-[10px] text-slate-400">
                <span>5 (High Bouncy)</span>
                <span>50 (No Bounce)</span>
              </div>
            </div>

            {/* Slider 3: Mass */}
            <div className="space-y-2 font-mono">
              <div className="flex justify-between text-xs font-semibold text-slate-700">
                <span>{t.mass[lang]}</span>
                <span className="text-blue-600 font-bold">{mass}</span>
              </div>
              <input
                type="range"
                min="0.2"
                max="3"
                step="0.1"
                value={mass}
                onChange={(e) => setMass(Number(e.target.value))}
                className="w-full accent-blue-600 cursor-pointer"
              />
              <div className="flex justify-between text-[10px] text-slate-400">
                <span>0.2 (Feather)</span>
                <span>3.0 (Heavy Inertia)</span>
              </div>
            </div>

            {/* Action Trigger Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row gap-3">
              <button
                onClick={() => setTriggerKey((prev) => prev + 1)}
                className="flex-1 py-3 px-4 text-xs font-semibold text-white shadow-md flex items-center justify-center gap-2 hover:opacity-90 active:scale-95 transition-all"
                style={{ backgroundColor: accentHex }}
              >
                <Play className="w-3.5 h-3.5 fill-current" />
                <span>{t.testTrigger[lang]}</span>
              </button>

              <button
                onClick={copyCode}
                className="py-3 px-4 text-xs font-semibold text-slate-800 bg-slate-100 hover:bg-slate-200 border border-slate-200 transition-all flex items-center justify-center gap-2"
              >
                {copiedCode ? (
                  <Check className="w-3.5 h-3.5 text-emerald-600" />
                ) : (
                  <Copy className="w-3.5 h-3.5" />
                )}
                <span>{copiedCode ? 'Copied' : 'Code'}</span>
              </button>
            </div>
          </div>

          {/* Playground Preview Stage Column */}
          <div className="lg:col-span-7 bg-white p-6 sm:p-8 border border-slate-200 shadow-sm space-y-6">
            <div className="flex items-center justify-between pb-4 border-b border-slate-100">
              <div className="flex items-center gap-2 font-mono text-xs font-bold text-slate-800">
                <Zap className="w-4 h-4 text-emerald-600" />
                <span>PHYSICS STAGE // PREVIEW</span>
              </div>
              <span className="font-mono text-[10px] text-slate-400">FPS: 60 REAL-TIME</span>
            </div>

            {/* Interactive Spring Motion Canvas */}
            <div className="h-64 sm:h-72 w-full bg-slate-50 border border-slate-200 flex items-center justify-center p-6 relative overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.div
                  key={triggerKey}
                  initial={{ scale: 0.3, opacity: 0, y: 30 }}
                  animate={{ scale: 1, opacity: 1, y: 0 }}
                  transition={{
                    type: 'spring',
                    stiffness: stiffness,
                    damping: damping,
                    mass: mass,
                  }}
                  className="w-full max-w-xs p-5 bg-white border border-slate-300 shadow-xl space-y-3 relative z-10"
                >
                  <div className="flex items-center justify-between">
                    <span className="w-2.5 h-2.5" style={{ backgroundColor: accentHex }} />
                    <span className="font-mono text-[10px] text-slate-400">COMPONENT_NODE</span>
                  </div>
                  <div className="font-bold text-sm text-slate-900">Fluid Spring Response</div>
                  <div className="text-xs text-slate-500 font-mono">
                    Stiffness: {stiffness} | Damping: {damping}
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Background grid markings */}
              <div className="absolute inset-0 border border-dashed border-slate-200/60 pointer-events-none m-4" />
            </div>

            {/* Generated Code Output Box */}
            <div className="space-y-1.5 font-mono text-xs">
              <div className="text-slate-500 font-medium">React Motion Code Output:</div>
              <pre className="p-3 bg-slate-900 text-slate-200 overflow-x-auto text-[11px] leading-relaxed">
                {reactMotionCode}
              </pre>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
