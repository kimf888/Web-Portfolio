import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ChevronRight, LayoutGrid } from 'lucide-react';
import { Language, AccentColor } from '../types';
import { i18n } from '../data/i18n';

interface NavbarProps {
  lang: Language;
  setLang: (lang: Language) => void;
  accent: AccentColor;
  setAccent: (accent: AccentColor) => void;
  accentHex: string;
  showGrid?: boolean;
  onToggleGrid?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  lang,
  accentHex,
  showGrid = false,
  onToggleGrid,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const t = i18n.nav;

  const navLinks = [
    { href: '#selected-work', label: t.projects[lang] },
    { href: '#experience', label: lang === 'en' ? 'Experience' : (lang === 'zh-TW' ? '公司履歷' : '公司履历') },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/75 backdrop-blur-2xl border-b border-white/10 transition-all duration-200 text-white">
      <div className="w-[1920px] max-w-full mx-auto px-4 sm:px-6 lg:px-8 h-16 sm:h-20 flex items-center justify-between">
        
        {/* Brand Logo / Home Link */}
        <a href="#" className="flex items-center gap-2.5 group font-bold text-white tracking-tight text-base sm:text-lg hover:text-blue-300 transition-colors drop-shadow-sm">
          <img
            src="https://i.ibb.co/hFGxrV7L/285.png"
            alt="Logo"
            className="w-7 h-7 sm:w-8 sm:h-8 object-contain rounded-lg shrink-0 transition-transform duration-200 group-hover:scale-105"
          />
          <span>{t.home[lang]}</span>
        </a>

        {/* Right Controls & Navigation (Aligned Right) */}
        <div className="flex items-center gap-3 sm:gap-5 ml-auto">
          
          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-3.5 py-1.5 text-sm font-medium text-white/85 hover:text-white hover:bg-white/10 rounded-md transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* 12-Column Grid Toggle Button (Desktop & Tablet) */}
          {onToggleGrid && (
            <button
              onClick={onToggleGrid}
              title={showGrid ? '点击隐藏 12 网格系统' : '点击显示 12 网格系统'}
              className={`inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-md border transition-all cursor-pointer backdrop-blur-md active:scale-95 ${
                showGrid
                  ? 'bg-rose-500/35 border-rose-400 text-white shadow-sm ring-1 ring-rose-400/50'
                  : 'bg-white/10 hover:bg-white/20 border-white/20 text-white/90 hover:text-white'
              }`}
            >
              <LayoutGrid className={`w-3.5 h-3.5 ${showGrid ? 'text-rose-300' : 'text-white/80'}`} />
              <span>12网格</span>
              <span
                className={`w-1.5 h-1.5 rounded-full transition-colors ${
                  showGrid ? 'bg-rose-400 animate-pulse' : 'bg-white/40'
                }`}
              />
            </button>
          )}

          {/* Contact CTA Button */}
          <a
            href="#contact"
            className="hidden sm:inline-flex items-center justify-center px-4 py-2 text-xs font-semibold text-white shadow-md rounded-md transition-all hover:opacity-90 active:scale-95 backdrop-blur-xs"
            style={{ backgroundColor: accentHex }}
          >
            {t.contact[lang]}
          </a>

          {/* Mobile Hamburger Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 bg-white/10 border border-white/20 text-white hover:bg-white/20 rounded-md transition-colors backdrop-blur-md"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-black/75 backdrop-blur-2xl border-b border-white/10 overflow-hidden text-white"
          >
            <div className="px-4 pt-3 pb-6 space-y-2">
              <div className="flex items-center gap-2 mb-3 px-2 py-1.5 bg-emerald-500/20 border border-emerald-400/30 text-emerald-200 text-xs font-mono rounded">
                <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
                <span>{t.availableBadge[lang]}</span>
              </div>
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-between px-3 py-2.5 text-sm font-medium text-white/90 hover:bg-white/10 rounded-md"
                >
                  <span>{link.label}</span>
                  <ChevronRight className="w-4 h-4 text-white/40" />
                </a>
              ))}

              {/* 12-Column Grid Toggle (Mobile) */}
              {onToggleGrid && (
                <button
                  onClick={() => {
                    onToggleGrid();
                    setMobileMenuOpen(false);
                  }}
                  className={`w-full flex items-center justify-between px-3 py-2.5 text-sm font-medium rounded-md border transition-all ${
                    showGrid
                      ? 'bg-rose-500/30 border-rose-400 text-white'
                      : 'bg-white/5 hover:bg-white/10 border-white/15 text-white/90'
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <LayoutGrid className="w-4 h-4 text-rose-300" />
                    <span>{showGrid ? '隐藏 12 网格系统' : '显示 12 网格系统'}</span>
                  </div>
                  <span
                    className={`text-xs px-2 py-0.5 rounded font-mono ${
                      showGrid ? 'bg-rose-500 text-white font-bold' : 'bg-white/10 text-white/60'
                    }`}
                  >
                    {showGrid ? '已开启' : '关闭'}
                  </span>
                </button>
              )}

              <div className="pt-2">
                <a
                  href="#contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full flex items-center justify-center px-4 py-2.5 text-sm font-semibold text-white shadow-xs rounded-md"
                  style={{ backgroundColor: accentHex }}
                >
                  {t.contact[lang]}
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
