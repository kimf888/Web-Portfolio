import React from 'react';
import { Language } from '../types';
import { useInView } from '../hooks/useInView';
import typographyImg from '../assets/images/selected_works_typography.png';
import toolkitIcon1 from '../assets/toolkit_figma_icon.png';
import toolkitAeIcon from '../assets/toolkit_ae_icon.png';
import toolkitIcon3 from '../assets/toolkit_icon3.png';
import c4dIcon from '../assets/toolkit_c4d_icon.png';
import toolkitIcon8 from '../assets/toolkit_icon8.png';

interface SelectedWorkIntroProps {
  lang: Language;
  accentHex: string;
}

export const SelectedWorkIntro: React.FC<SelectedWorkIntroProps> = ({
  lang,
}) => {
  const { ref, isInView } = useInView<HTMLElement>({ threshold: 0.1, rootMargin: '0px 0px -60px 0px' });

  return (
    <section
      ref={ref}
      id="selected-work"
      className="py-16 sm:py-20 lg:py-28 bg-black text-white scroll-mt-16 border-b border-neutral-800 relative overflow-hidden select-none"
    >
      <div className="w-[1920px] max-w-full mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Minimalist Header Line */}
        <div 
          className={`pb-4 border-b border-neutral-800 mb-12 sm:mb-16 lg:mb-20 flex items-center gap-6 text-[11px] font-mono tracking-widest text-neutral-400 uppercase transition-all duration-1000 ease-out ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <span className="text-neutral-500 font-bold">02</span>
          <span className="text-neutral-300 font-semibold tracking-[0.2em]">SELECTED WORKS</span>
        </div>

        {/* Main 2-Column Hero Typographic Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center mb-16 lg:mb-24">
          
          {/* Left Column: Giant Artistic Typography "SELECTED WORKS" */}
          <div 
            className={`lg:col-span-8 relative transition-all duration-1000 ease-out delay-150 ${
              isInView ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-10 scale-[0.98]'
            }`}
          >
            <div className="relative inline-block max-w-full">
              <img
                src={typographyImg}
                alt="SELECTED WORKS"
                className="w-full max-w-[780px] h-auto object-contain select-none pointer-events-none drop-shadow-2xl"
              />
            </div>
          </div>

          {/* Right Column: Narrative / Summary */}
          <div 
            className={`lg:col-span-4 flex flex-col justify-center transition-all duration-1000 ease-out delay-250 lg:pl-4 ${
              isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            {/* Tagline / Year indicator */}
            <div className="text-[13px] sm:text-[14px] font-bold text-white tracking-wider mb-3">
              {lang === 'en' ? 'SELECTED PROJECTS / 2021—2025' : '精选项目 / 2021—2025'}
            </div>

            {/* Paragraph narrative */}
            <p className="text-[13px] sm:text-[14px] leading-relaxed text-neutral-400 font-normal text-justify max-w-md">
              {lang === 'en'
                ? 'From commercial objectives and visual strategies to final multi-platform delivery. Explore highlighted milestone case studies, then dive into the full gallery spanning five core creative disciplines.'
                : '从商业目标、视觉策略到最终交付。先看重点案例，再进入五个创作方向的完整画廊。'}
            </p>
          </div>

        </div>

        {/* Swapped Block: Bottom Design Toolkit Container */}
        <div 
          className={`border border-neutral-800 bg-[#080808] p-6 sm:p-9 lg:p-10 flex flex-col xl:flex-row xl:items-center justify-between gap-8 sm:gap-10 transition-all duration-1000 ease-out delay-400 ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {/* Left: Toolkit Text List */}
          <div className="flex flex-col">
            <div className="text-[11px] sm:text-[12px] font-mono uppercase tracking-[0.25em] text-neutral-400 font-bold mb-2.5">
              DESIGN TOOLKIT
            </div>
            <div className="text-[14px] sm:text-[16px] font-mono text-neutral-200 tracking-wide font-medium leading-relaxed max-w-2xl">
              ChatGPT · Google Gemini · 剪映 / CapCut · Adobe Photoshop · Adobe Illustrator · Blender · lovart · Libtv
            </div>
          </div>

          {/* Right: 8 Square Icon Badges */}
          <div className="flex flex-wrap items-center gap-3.5 sm:gap-4 md:gap-5">
            {/* 1. Custom Icon / Figma */}
            <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-[88px] md:h-[88px] bg-[#121212] border border-neutral-800 rounded-2xl flex items-center justify-center hover:border-neutral-500 hover:scale-105 transition-all duration-200 shadow-md p-2.5 sm:p-3 overflow-hidden group">
              <img
                src={toolkitIcon1}
                alt="Design Tool"
                className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-300"
              />
            </div>

            {/* 2. Custom Icon 2 */}
            <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-[88px] md:h-[88px] bg-[#121212] border border-neutral-800 rounded-2xl flex items-center justify-center hover:border-neutral-500 hover:scale-105 transition-all duration-200 shadow-md p-2.5 sm:p-3 overflow-hidden group">
              <img
                src={toolkitAeIcon}
                alt="Design Tool"
                className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-300"
              />
            </div>

            {/* 3. Custom Icon 3 */}
            <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-[88px] md:h-[88px] bg-[#121212] border border-neutral-800 rounded-2xl flex items-center justify-center hover:border-neutral-500 hover:scale-105 transition-all duration-200 shadow-md p-2.5 sm:p-3 overflow-hidden group">
              <img
                src={toolkitIcon3}
                alt="Design Tool"
                className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-300"
              />
            </div>

            {/* 4. Ps */}
            <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-[88px] md:h-[88px] bg-[#121212] border border-neutral-800 rounded-2xl flex items-center justify-center hover:border-neutral-500 hover:scale-105 transition-all duration-200 shadow-md">
              <span className="text-[24px] sm:text-[28px] md:text-[32px] font-bold text-[#31A8FF] tracking-tight font-sans">Ps</span>
            </div>

            {/* 5. Ai */}
            <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-[88px] md:h-[88px] bg-[#121212] border border-neutral-800 rounded-2xl flex items-center justify-center hover:border-neutral-500 hover:scale-105 transition-all duration-200 shadow-md">
              <span className="text-[24px] sm:text-[28px] md:text-[32px] font-bold text-[#FF9A00] tracking-tight font-sans">Ai</span>
            </div>

            {/* 6. Cinema 4D / 3D Icon */}
            <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-[88px] md:h-[88px] bg-[#121212] border border-neutral-800 rounded-2xl flex items-center justify-center hover:border-neutral-500 hover:scale-105 transition-all duration-200 shadow-md p-2.5 sm:p-3 overflow-hidden group">
              <img
                src={c4dIcon}
                alt="Cinema 4D"
                className="w-full h-full object-contain filter drop-shadow group-hover:scale-105 transition-transform"
              />
            </div>

            {/* 7. Lottie */}
            <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-[88px] md:h-[88px] bg-[#121212] border border-neutral-800 rounded-2xl flex items-center justify-center hover:border-neutral-500 hover:scale-105 transition-all duration-200 shadow-md">
              <span className="text-[20px] sm:text-[24px] md:text-[28px] font-black text-white tracking-tighter font-mono">ˉL°</span>
            </div>

            {/* 8. Custom Icon 8 */}
            <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-[88px] md:h-[88px] bg-[#121212] border border-neutral-800 rounded-2xl flex items-center justify-center hover:border-neutral-500 hover:scale-105 transition-all duration-200 shadow-md p-2.5 sm:p-3 overflow-hidden group">
              <img
                src={toolkitIcon8}
                alt="Design Tool"
                className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-300"
              />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
