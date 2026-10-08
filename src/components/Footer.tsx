import React from 'react';
import { ArrowUp, Terminal, ShieldCheck, Cpu } from 'lucide-react';
import { Language } from '../types';
import { i18n } from '../data/i18n';

interface FooterProps {
  lang: Language;
  accentHex: string;
}

export const Footer: React.FC<FooterProps> = ({ lang, accentHex }) => {
  const t = i18n.footer;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-900 text-slate-300 py-12 border-t border-slate-800 text-xs font-mono">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Status Bar */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pb-8 border-b border-slate-800 text-slate-400">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 bg-emerald-400 animate-pulse" />
            <span>{t.systemStatus[lang]}</span>
          </div>

          <div className="flex items-center gap-2">
            <Cpu className="w-4 h-4 text-blue-400" />
            <span>{t.fps[lang]}</span>
          </div>

          <div className="flex items-center gap-2">
            <Terminal className="w-4 h-4 text-indigo-400" />
            <span>{t.version[lang]}</span>
          </div>
        </div>

        {/* Bottom copyright and Back to Top */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
          <div className="text-slate-500">
            {t.copyright[lang]}
          </div>

          <button
            onClick={scrollToTop}
            className="px-3.5 py-1.5 bg-slate-800 hover:bg-slate-700 text-white flex items-center gap-2 transition-colors"
          >
            <span>{t.backToTop[lang]}</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
};
