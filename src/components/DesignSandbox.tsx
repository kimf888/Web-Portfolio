import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Sliders, Sparkles, Copy, Check, Play, RefreshCw, Palette, Layers } from 'lucide-react';
import { Language } from '../types';
import { i18n } from '../data/i18n';

interface DesignSandboxProps {
  lang: Language;
  accentHex: string;
}

export const DesignSandbox: React.FC<DesignSandboxProps> = ({ lang, accentHex }) => {
  const t = i18n.sandbox;

  // Spring physics parameters
  const [stiffness, setStiffness] = useState(300);
  const [damping, setDamping] = useState(20);
  const [mass, setMass] = useState(1);
  const [bounceTrigger, setBounceTrigger] = useState(0);
  const [copiedCode, setCopiedCode] = useState(false);

  // Elevation parameters
  const [borderRadius, setBorderRadius] = useState(12);
  const [borderWidth, setBorderWidth] = useState(1);
  const [cardBgOpacity, setCardBgOpacity] = useState(100);

  const samplePalette = [
    { name: 'Surface Canvas Base', hex: '#F8FAFC', usage: 'Main background' },
    { name: 'Card Pure White', hex: '#FFFFFF', usage: 'Primary elevation' },
    { name: 'Tech Electric Blue', hex: '#2563EB', usage: 'Primary action CTA' },
    { name: 'Emerald Status Token', hex: '#059669', usage: 'Success / Active state' },
    { name: 'Cyan Spatial Accent', hex: '#0EA5E9', usage: 'Interactive hover pill' },
    { name: 'Slate High Contrast Text', hex: '#0F172A', usage: 'Main body & titles' },
  ];

  const [copiedColor, setCopiedColor] = useState<string | null>(null);

  const handleCopyColor = (hex: string) => {
    navigator.clipboard.writeText(hex);
    setCopiedColor(hex);
    setTimeout(() => setCopiedColor(null), 2000);
  };

  const generatedMotionCode = `<motion.button
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
  transition={{
    type: "spring",
    stiffness: ${stiffness},
    damping: ${damping},
    mass: ${mass}
  }}
>
  Click Me
</motion.button>`;

  const handleCopyCode = () => {
    navigator.clipboard.writeText(generatedMotionCode);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
  };

  return (
    <section id="sandbox" className="py-16 sm:py-24 bg-slate-50 border-b border-slate-200 scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Title */}
        <div className="space-y-2 max-w-2xl">
          <div className="inline-flex items-center gap-1.5 text-xs font-mono font-bold tracking-widest text-slate-500 uppercase">
            <span className="w-2 h-2" style={{ backgroundColor: accentHex }} />
            [02 / INTERACTIVE DESIGN LAB]
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            {t.title[lang]}
          </h2>
          <p className="text-sm sm:text-base text-slate-600">
            {t.subtitle[lang]}
          </p>
        </div>

        {/* Lab Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* TOOL 1: Spring Physics Studio */}
          <div className="lg:col-span-7 bg-white border border-slate-200 p-6 shadow-xs space-y-6 flex flex-col justify-between">
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Sliders className="w-4 h-4 text-slate-600" />
                <h3 className="text-base font-extrabold text-slate-900">
                  {t.tool1Title[lang]}
                </h3>
              </div>
              <p className="text-xs text-slate-500">
                {t.tool1Desc[lang]}
              </p>
            </div>

            {/* Sliders Controls */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 bg-slate-50 p-4 border border-slate-200/80 font-mono text-xs">
              <div className="space-y-1.5">
                <div className="flex justify-between text-slate-700 font-semibold">
                  <span>{t.stiffness[lang]}</span>
                  <span className="text-blue-600">{stiffness}</span>
                </div>
                <input
                  type="range"
                  min="50"
                  max="600"
                  step="10"
                  value={stiffness}
                  onChange={(e) => setStiffness(Number(e.target.value))}
                  className="w-full h-1.5 bg-slate-200 appearance-none cursor-pointer accent-blue-600"
                />
              </div>

              <div className="space-y-1.5">
                <div className="flex justify-between text-slate-700 font-semibold">
                  <span>{t.damping[lang]}</span>
                  <span className="text-blue-600">{damping}</span>
                </div>
                <input
                  type="range"
                  min="5"
                  max="60"
                  step="1"
                  value={damping}
                  onChange={(e) => setDamping(Number(e.target.value))}
                  className="w-full h-1.5 bg-slate-200 appearance-none cursor-pointer accent-blue-600"
                />
              </div>

              <div className="space-y-1.5">
                <div className="flex justify-between text-slate-700 font-semibold">
                  <span>{t.mass[lang]}</span>
                  <span className="text-blue-600">{mass}</span>
                </div>
                <input
                  type="range"
                  min="0.2"
                  max="5"
                  step="0.1"
                  value={mass}
                  onChange={(e) => setMass(Number(e.target.value))}
                  className="w-full h-1.5 bg-slate-200 appearance-none cursor-pointer accent-blue-600"
                />
              </div>
            </div>

            {/* Interactive Physics Stage */}
            <div className="p-8 bg-slate-100 border border-slate-200 flex flex-col items-center justify-center gap-4 min-h-[160px]">
              <motion.button
                key={bounceTrigger}
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                whileHover={{ scale: 1.06 }}
                whileTap={{ scale: 0.94 }}
                transition={{
                  type: 'spring',
                  stiffness: stiffness,
                  damping: damping,
                  mass: mass,
                }}
                onClick={() => setBounceTrigger((prev) => prev + 1)}
                className="px-6 py-3.5 text-sm font-bold text-white shadow-md active:outline-hidden"
                style={{ backgroundColor: accentHex }}
              >
                {t.testTrigger[lang]}
              </motion.button>
              <div className="text-[11px] font-mono text-slate-500">
                ● CLICK OR HOVER TO TEST PHYSICS RESPONSE
              </div>
            </div>

            {/* Code Output Box */}
            <div className="bg-slate-900 p-4 text-xs font-mono text-slate-200 space-y-2">
              <div className="flex items-center justify-between border-b border-slate-800 pb-2">
                <span className="text-[10px] text-slate-400">REACT MOTION SNIPPET</span>
                <button
                  onClick={handleCopyCode}
                  className="flex items-center gap-1.5 px-2.5 py-1 bg-slate-800 text-slate-300 hover:text-white transition-colors"
                >
                  {copiedCode ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copiedCode ? t.codeCopied[lang] : t.copyCode[lang]}</span>
                </button>
              </div>
              <pre className="text-emerald-400 overflow-x-auto text-[11px] leading-relaxed">
                {generatedMotionCode}
              </pre>
            </div>
          </div>

          {/* TOOL 2: Color Palette Extractor */}
          <div className="lg:col-span-5 bg-white border border-slate-200 p-6 shadow-xs space-y-6 flex flex-col justify-between">
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Palette className="w-4 h-4 text-slate-600" />
                <h3 className="text-base font-extrabold text-slate-900">
                  {t.tool2Title[lang]}
                </h3>
              </div>
              <p className="text-xs text-slate-500">
                {t.tool2Desc[lang]}
              </p>
            </div>

            <div className="space-y-2.5">
              {samplePalette.map((col) => (
                <div
                  key={col.hex}
                  onClick={() => handleCopyColor(col.hex)}
                  className="group p-2.5 border border-slate-200 bg-slate-50 hover:bg-slate-100 transition-colors cursor-pointer flex items-center justify-between"
                >
                  <div className="flex items-center gap-3">
                    <span
                      className="w-7 h-7 border border-slate-300 shadow-2xs"
                      style={{ backgroundColor: col.hex }}
                    />
                    <div>
                      <div className="text-xs font-bold text-slate-900">{col.name}</div>
                      <div className="text-[10px] font-mono text-slate-500">{col.usage}</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-1.5 text-xs font-mono font-semibold text-slate-700">
                    <span>{col.hex}</span>
                    {copiedColor === col.hex ? (
                      <Check className="w-3.5 h-3.5 text-emerald-600" />
                    ) : (
                      <Copy className="w-3.5 h-3.5 text-slate-400 group-hover:text-slate-800" />
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="p-3 bg-blue-50/80 border border-blue-100 text-[11px] font-mono text-blue-900 flex items-center justify-between">
              <span>CONTRAST RATIO AUDIT</span>
              <span className="font-bold">WCAG AA+ PASS (10.2:1)</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
