import React from 'react';
import { ArrowUp, Terminal } from 'lucide-react';
import { Language } from '../types';
import { i18n } from '../data/i18n';

interface TechFooterProps {
  lang: Language;
  accentHex: string;
}

export const TechFooter: React.FC<TechFooterProps> = ({ lang, accentHex }) => {
  const t = i18n.footer;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-900 text-slate-300 border-t border-slate-800 text-xs font-mono py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        
        {/* System Diagnostics Bar */}
        <div className="flex flex-wrap items-center justify-between gap-4 p-3 bg-slate-800/80 border border-slate-700/80">
          <div className="flex items-center gap-3">
            <span className="w-2 h-2 bg-emerald-400 animate-pulse" />
            <span className="text-emerald-400 font-bold">{t.systemStatus[lang]}</span>
          </div>

          <div className="flex flex-wrap items-center gap-4 text-[11px] text-slate-400">
            <span>{t.fps[lang]}</span>
            <span>•</span>
            <span>{t.version[lang]}</span>
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1 px-3 py-1 bg-slate-700 text-slate-200 hover:text-white hover:bg-slate-600 transition-colors"
          >
            <span>{t.backToTop[lang]}</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Bottom Copyright */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-slate-500 text-[11px]">
          <div>{t.copyright[lang]}</div>
          <div className="flex items-center gap-2">
            <span>FLAT LIGHT-TECH EDITION</span>
            <span>|</span>
            <span>DESIGNED BY KAI</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
