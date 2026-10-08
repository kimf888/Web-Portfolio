import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Copy, Check, Palette } from 'lucide-react';
import { DesignToken } from '../types';

interface ColorSystemPreviewProps {
  tokens: DesignToken[];
  accentHex: string;
}

export const ColorSystemPreview: React.FC<ColorSystemPreviewProps> = ({ tokens, accentHex }) => {
  const [copiedHex, setCopiedHex] = useState<string | null>(null);

  const copyToClipboard = (hex: string) => {
    navigator.clipboard.writeText(hex);
    setCopiedHex(hex);
    setTimeout(() => setCopiedHex(null), 1500);
  };

  return (
    <div className="bg-slate-100/80 p-4 sm:p-6 border border-slate-200/80 space-y-4">
      <div className="flex items-center justify-between border-b border-slate-200 pb-3">
        <div className="flex items-center gap-2">
          <Palette className="w-4 h-4 text-emerald-600" />
          <span className="font-mono text-xs font-semibold text-slate-700 tracking-wider uppercase">
            PRISM Design Token Matrix
          </span>
        </div>
        <span className="text-[11px] font-mono text-slate-400">WCAG AA+ COMPLIANT</span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
        {tokens.map((token, idx) => (
          <div
            key={idx}
            onClick={() => copyToClipboard(token.hex)}
            className="p-3 bg-white border border-slate-200 shadow-2xs hover:border-slate-400 transition-all cursor-pointer group flex items-center justify-between"
          >
            <div className="flex items-center gap-3">
              <span
                className="w-8 h-8 border border-slate-300 shadow-2xs"
                style={{ backgroundColor: token.hex }}
              />
              <div>
                <div className="text-xs font-medium text-slate-800 group-hover:text-blue-600 transition-colors">
                  {token.name}
                </div>
                <div className="font-mono text-[11px] text-slate-500 uppercase">{token.hex}</div>
              </div>
            </div>

            <button className="p-1.5 text-slate-400 hover:text-slate-800 hover:bg-slate-100">
              {copiedHex === token.hex ? (
                <Check className="w-3.5 h-3.5 text-emerald-600" />
              ) : (
                <Copy className="w-3.5 h-3.5" />
              )}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};
