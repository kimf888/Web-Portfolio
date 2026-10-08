import React, { useState, useRef, useEffect } from 'react';
import { Language } from '../types';
import { useInView } from '../hooks/useInView';
import featuredCase01Hero from '../assets/images/featured_case_01_hero.png';
import featuredCase01Detail from '../assets/images/featured_case_01_detail.png';

interface FeaturedCampaignKVProps {
  lang: Language;
  accentHex: string;
}

export const FeaturedCampaignKV: React.FC<FeaturedCampaignKVProps> = ({
  lang,
}) => {
  const { ref, isInView } = useInView<HTMLElement>({ threshold: 0.1, rootMargin: '0px 0px -60px 0px' });

  // State for project image modal & zoom
  const [isPreviewModalOpen, setIsPreviewModalOpen] = useState(false);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // Lock background body scroll when modal is open
  useEffect(() => {
    if (isPreviewModalOpen) {
      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = 'hidden';

      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Escape') {
          setIsPreviewModalOpen(false);
        }
      };

      window.addEventListener('keydown', handleKeyDown);
      return () => {
        document.body.style.overflow = originalOverflow;
        window.removeEventListener('keydown', handleKeyDown);
      };
    }
  }, [isPreviewModalOpen]);

  const scrollToTop = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <>
      <section
        ref={ref}
        id="featured-campaign-kv"
        className="py-16 sm:py-20 lg:py-24 bg-[#050505] text-white border-b border-neutral-800/90 relative overflow-hidden select-none"
      >
        <div className="w-[1920px] max-w-full mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Top Header Tag */}
          <div 
            className={`flex items-center justify-between pb-4 border-b border-neutral-800/80 mb-6 transition-all duration-1000 ease-out ${
              isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-900 border border-neutral-700/80 text-[11px] font-mono tracking-widest text-neutral-300">
              <span className="w-1.5 h-1.5 rounded-full bg-[#2563EB] animate-ping" />
              <span>FEATURED CASE</span>
            </div>

            <div className="text-[11px] font-mono tracking-widest text-neutral-500 uppercase">
              MAYA Laptop 2024 | Slim & Powerful
            </div>
          </div>

          {/* Main Canvas Display Container */}
          <div 
            onClick={() => setIsPreviewModalOpen(true)}
            className={`relative rounded-2xl overflow-hidden border border-neutral-800 bg-[#030712] shadow-2xl transition-all duration-1000 ease-out delay-150 cursor-pointer group ${
              isInView ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-8 scale-[0.99]'
            }`}
          >
            {/* Hero Banner Stage */}
            <div className="relative h-[950px] min-h-[950px] bg-[#02050f] overflow-hidden flex items-center justify-center">
              <img
                src={featuredCase01Hero}
                alt="Featured Mega Campaign KV"
                className="w-full h-[950px] object-cover object-center group-hover:scale-[1.015] transition-transform duration-700 ease-out"
              />

              {/* Subtle Atmospheric Gradient Overlay on Borders */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/20 pointer-events-none" />

              {/* Hover Floating Action Badge */}
              <div className="absolute bottom-6 right-6 z-20 inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-black/70 backdrop-blur-md border border-neutral-700/80 text-white font-mono text-xs font-semibold shadow-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="w-2 h-2 rounded-full bg-[#2563EB] animate-ping" />
                <span>{lang === 'en' ? 'CLICK TO VIEW FULL PROJECT ↗' : '点击查看完整项目展示 ↗'}</span>
              </div>
            </div>

          </div>

          {/* Bottom Project Metadata & Narrative Bar (Exact Replica of image footer) */}
          <div 
            className={`mt-10 pt-8 border-t border-neutral-800/80 flex flex-col lg:flex-row lg:items-start justify-between gap-8 sm:gap-12 transition-all duration-1000 ease-out delay-300 ${
              isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            
            {/* Left Column: Index & Giant Title in Site Blue */}
            <div className="shrink-0 flex flex-col">
              <span className="text-[12px] sm:text-[13px] font-mono text-neutral-500 font-bold tracking-widest mb-1">
                01  /  02
              </span>
              <h3 className="text-3xl sm:text-4xl lg:text-[42px] font-black tracking-tight text-[#2563EB] drop-shadow-[0_0_20px_rgba(37,99,235,0.25)] font-sans">
                {lang === 'en' ? 'MAYA All-Around Ultrabook' : 'MAYA 全能轻薄本'}
              </h3>
              <span className="text-[10px] sm:text-[11px] font-mono tracking-[0.25em] text-neutral-500 uppercase mt-1">
                MAYA All-Round Laptop 2024
              </span>
            </div>

            {/* Center Column: Core Creative Strategy Narrative */}
            <div className="flex-1 max-w-2xl lg:px-6">
              <p className="text-[13.5px] sm:text-[15px] leading-relaxed text-neutral-300 font-normal">
                {lang === 'en'
                  ? 'MAYA All-Around Ultrabook 2024: Mainstream mid-range performance, high color gamut expansive display, all-metal chassis, full-area haptic trackpad, and long battery life with comprehensive I/O connectivity—effortlessly handling productivity and light creative workflows.'
                  : 'MAYA 全能轻薄本 2024，2024 主流中端性能，高色域大屏，金属机身，全域压感触控板，长续航全接口，轻松应对办公与轻度创作。'}
              </p>
            </div>

            {/* Right Column: Spec / Category Metadata Lines */}
            <div className="shrink-0 flex flex-col lg:text-right gap-1.5 font-mono text-[11px] sm:text-[12px]">
              <div className="font-bold text-neutral-300 tracking-wider">
                DTC · AMAZON
              </div>
              <div className="text-neutral-500">
                2024-05-11
              </div>
              <div className="text-neutral-500">
                15 ITEMS
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* Centered Floating Modal Window for Project Long-Image Showcase */}
      {isPreviewModalOpen && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 md:p-8 bg-black/80 backdrop-blur-md animate-fadeIn overscroll-contain"
          onClick={() => setIsPreviewModalOpen(false)}
        >
          {/* Modal Dialog Card */}
          <div 
            className="relative w-full max-w-5xl h-[88vh] bg-[#0b0f19] border border-neutral-700/90 rounded-2xl shadow-[0_25px_60px_-15px_rgba(0,0,0,0.95)] flex flex-col overflow-hidden text-white overscroll-contain"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="px-5 py-3.5 bg-[#070a12] border-b border-neutral-800 flex items-center justify-between gap-4 shrink-0 shadow-sm">
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-1.5">
                  <button
                    type="button"
                    onClick={() => setIsPreviewModalOpen(false)}
                    className="w-3 h-3 rounded-full bg-[#ef4444] hover:opacity-80 transition-opacity"
                    title="Close"
                  />
                  <span className="w-3 h-3 rounded-full bg-[#f59e0b]" />
                  <span className="w-3 h-3 rounded-full bg-[#10b981]" />
                </div>

                <div className="flex items-center gap-2 pl-2 border-l border-neutral-800">
                  <span className="px-2 py-0.5 rounded bg-blue-600/20 text-blue-400 font-mono text-[11px] font-bold">
                    01 / 02
                  </span>
                  <span className="text-xs sm:text-sm font-bold text-neutral-200 tracking-wide truncate">
                    {lang === 'en' ? 'MAYA All-Around Ultrabook · Full Showcase' : 'MAYA 全能轻薄本 · 全案设计长图展示'}
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <span className="hidden sm:inline text-[11px] font-mono text-neutral-400">
                  {lang === 'en' ? 'Scroll to explore' : '鼠标滚轮上下滚动查看'}
                </span>

                <button
                  type="button"
                  onClick={() => setIsPreviewModalOpen(false)}
                  className="p-1.5 rounded-lg bg-neutral-800 hover:bg-neutral-700 text-neutral-300 hover:text-white transition-colors"
                  title="Close modal"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Modal Body - Scrollable Container with Edge-to-Edge 100% Full-Width Image */}
            <div 
              ref={scrollContainerRef}
              className="flex-1 w-full overflow-y-auto overflow-x-hidden p-0 bg-[#050505] cursor-default overscroll-contain"
              style={{
                scrollBehavior: 'smooth',
              }}
            >
              <div className="w-full bg-black flex flex-col items-center">
                {/* Complete Full-Length Image - 100% Width Full-Bleed with No Side Gaps */}
                <img
                  src={featuredCase01Detail}
                  alt="Full Project Showcase"
                  className="w-full h-auto block select-none"
                  loading="eager"
                />
              </div>
            </div>

            {/* Modal Footer Bar */}
            <div className="px-5 py-2.5 bg-[#070a12] border-t border-neutral-800/80 flex items-center justify-between text-xs font-mono text-neutral-400 shrink-0">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>COMPLETE PROJECT SHOWCASE</span>
              </div>

              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={scrollToTop}
                  className="text-neutral-400 hover:text-blue-400 transition-colors flex items-center gap-1"
                >
                  <span>回到顶部 ↑</span>
                </button>
                <button
                  type="button"
                  onClick={() => setIsPreviewModalOpen(false)}
                  className="px-3 py-1 rounded bg-blue-600 hover:bg-blue-500 text-white font-semibold transition-all"
                >
                  {lang === 'en' ? 'Close' : '关闭弹窗'}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
