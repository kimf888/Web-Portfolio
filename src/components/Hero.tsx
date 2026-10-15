import { ChevronLeft, ChevronRight } from 'lucide-react';
import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Language } from '../types';

interface HeroProps {
  lang: Language;
  accentHex: string;
}

const heroBackgroundImages = [
  'https://i.ibb.co/jkYW2SWZ/1.png',
  'https://i.ibb.co/LDfY73F7/2.png',
  'https://i.ibb.co/F4d3YfYk/3.png',
  'https://i.ibb.co/SXJJJG4V/4.png',
  'https://i.ibb.co/dwxfBPLN/5.png',
];

interface HeroSlideData {
  tag: { 'zh-CN': string; 'zh-TW': string; en: string };
  title: { 'zh-CN': string; 'zh-TW': string; en: string };
  subtitle: { 'zh-CN': string; 'zh-TW': string; en: string };
}

const heroSlides: HeroSlideData[] = [
  {
    tag: {
      'zh-CN': '01 · 庭院生态与智能割草',
      'zh-TW': '01 · 庭院生態與智能割草',
      en: '01 · Smart Garden & Eco Living',
    },
    title: {
      'zh-CN': '智护庭院，自在生长',
      'zh-TW': '智護庭院，自在生長',
      en: 'Smart Garden Care, Growing Naturally',
    },
    subtitle: {
      'zh-CN': '无人智能割草机与户外智能生态科技，重塑现代庭院惬意生活',
      'zh-TW': '無人智能割草機與戶外智能生態科技，重塑現代庭院愜意生活',
      en: 'Robotic lawn mower & outdoor smart eco-tech for tranquil modern living',
    },
  },
  {
    tag: {
      'zh-CN': '02 · 重塑强悍性能 · Intel i5',
      'zh-TW': '02 · 重塑強悍性能 · Intel i5',
      en: '02 · Performance Redefined',
    },
    title: {
      'zh-CN': 'Performance Redefined',
      'zh-TW': 'Performance Redefined',
      en: 'Performance Redefined',
    },
    subtitle: {
      'zh-CN': '12th Gen Intel Core i5 i5-12400, Drive Your Workstation',
      'zh-TW': '12th Gen Intel Core i5 i5-12400, Drive Your Workstation',
      en: '12th Gen Intel Core i5 i5-12400, Drive Your Workstation',
    },
  },
  {
    tag: {
      'zh-CN': '03 · 图解安装与调试指南',
      'zh-TW': '03 · 圖解安裝與調試指南',
      en: '03 · Visual Assembly & Setup Guide',
    },
    title: {
      'zh-CN': '开箱即装，一步到位',
      'zh-TW': '開箱即裝，一步到位',
      en: 'Out of the Box, One-Step Setup',
    },
    subtitle: {
      'zh-CN': '分步图解式说明与部件结构拆解，助力快速完成产品组装调试',
      'zh-TW': '分步圖解式說明與部件結構拆解，助力快速完成產品組裝調試',
      en: 'Step-by-step visual guides & component breakdown for effortless assembly',
    },
  },
  {
    tag: {
      'zh-CN': '04 · 电竞工坊与沉浸空间',
      'zh-TW': '04 · 電競工坊與沉浸空間',
      en: '04 · Esports Workstation & Performance',
    },
    title: {
      'zh-CN': '重构高效电竞工作空间',
      'zh-TW': '重構高效電競工作空間',
      en: 'Rebuilding High-Performance Esports Workspaces',
    },
    subtitle: {
      'zh-CN': '沉浸式声光氛围与人体工学，激发生产力与竞技巅峰潜能',
      'zh-TW': '沉浸式聲光氛圍與人體工學，激發生產力與競技巔峰潛能',
      en: 'Immersive acoustics, lighting & ergonomics to unleash peak gaming performance',
    },
  },
  {
    tag: {
      'zh-CN': '05 · 母婴健康与纯净守护',
      'zh-TW': '05 · 母嬰健康與純淨守護',
      en: '05 · Pure Care & Healthy Living',
    },
    title: {
      'zh-CN': '安心洁净，守护孩童自在空间',
      'zh-TW': '安心潔淨，守護孩童自在空間',
      en: 'Pure & Clean, Nurturing Children\'s Space',
    },
    subtitle: {
      'zh-CN': '母婴级全维深度洁净，为孩子打造自由探索的纯净天地',
      'zh-TW': '母嬰級全維深度潔淨，為孩子打造自由探索的純淨天地',
      en: 'Maternal-grade deep sanitation, creating a safe world for kids to explore',
    },
  },
  {
    tag: {
      'zh-CN': '06 · 极限性能与极客算力',
      'zh-TW': '06 · 極限性能與極客算力',
      en: '06 · Mini Form Factor & Mighty Compute',
    },
    title: {
      'zh-CN': '小巧机身，释放强悍算力',
      'zh-TW': '小巧機身，釋放強悍算力',
      en: 'Compact Build, Unleashing Mighty Compute',
    },
    subtitle: {
      'zh-CN': '精致高密架构与强劲核心性能，随时随地开启专业级创作',
      'zh-TW': '精緻高密架構與強勁核心性能，隨時隨地開啟專業級創作',
      en: 'Dense compact engineering & flagship power for professional workflows',
    },
  },
];

const marqueeItems = [
  {
    num: '01',
    en: '3D Scene',
  },
  {
    num: '02',
    en: 'Brand Assets',
  },
  {
    num: '03',
    en: 'AIGC',
  },
  {
    num: '04',
    en: 'Independent Store',
  },
  {
    num: '05',
    en: 'Amazon',
  },
  {
    num: '06',
    en: 'Holiday Campaign',
  },
  {
    num: '07',
    en: 'Personal Lab',
  },
];

export const Hero: React.FC<HeroProps> = ({ lang, accentHex }) => {
  const [bgIndex, setBgIndex] = useState(0);
  const [direction, setDirection] = useState<'next' | 'prev'>('next');
  const [isHovered, setIsHovered] = useState(false);

  // Switch to next slide
  const goToNext = useCallback(() => {
    setDirection('next');
    setBgIndex((prev) => (prev + 1) % heroBackgroundImages.length);
  }, []);

  // Switch to prev slide
  const goToPrev = useCallback(() => {
    setDirection('prev');
    setBgIndex((prev) => (prev - 1 + heroBackgroundImages.length) % heroBackgroundImages.length);
  }, []);

  // Auto-cycle background images every 5 seconds (pauses on hover)
  useEffect(() => {
    const bgTimer = setInterval(() => {
      if (!isHovered) {
        goToNext();
      }
    }, 5000);
    return () => clearInterval(bgTimer);
  }, [goToNext, isHovered]);

  // Directional slide variants
  const slideVariants = {
    enter: (dir: 'next' | 'prev') => ({
      x: dir === 'next' ? '100%' : '-100%',
      opacity: 0.85,
    }),
    center: {
      x: '0%',
      opacity: 1,
    },
    exit: (dir: 'next' | 'prev') => ({
      x: dir === 'next' ? '-100%' : '100%',
      opacity: 0.85,
    }),
  };

  return (
    <section
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative overflow-hidden bg-black border-b border-neutral-800 w-full aspect-[16/10] min-h-[640px] max-h-[1200px] group/hero select-none"
    >
      {/* Background Images Carousel */}
      <div className="absolute inset-0 z-0 overflow-hidden w-full h-full pointer-events-none">
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={bgIndex}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { duration: 0.75, ease: [0.22, 1, 0.36, 1] },
              opacity: { duration: 0.35 },
            }}
            className="absolute inset-0 w-full h-full"
          >
            <img
              src={heroBackgroundImages[bgIndex]}
              alt={`Hero Background ${bgIndex + 1}`}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover object-center pointer-events-none select-none"
            />

            {/* Slide 2: 垂直居中、靠左排版 (Vertically Centered, Left Aligned) */}
            {bgIndex === 1 && (
              <div className="absolute left-16 sm:left-24 md:left-28 lg:left-32 top-[calc(50%-50px)] -translate-y-1/2 z-10 flex flex-col gap-2.5 sm:gap-3.5 max-w-xl lg:max-w-2xl text-left pointer-events-none select-none">
                <h1 className="text-3xl sm:text-5xl md:text-6xl font-black text-white tracking-tight leading-[1.12] drop-shadow-[0_4px_24px_rgba(0,0,0,0.9)] font-sans">
                  Performance Redefined
                </h1>
                <p className="text-sm sm:text-base md:text-lg text-white/90 font-medium tracking-wide drop-shadow-[0_2px_12px_rgba(0,0,0,0.95)] max-w-lg leading-relaxed">
                  12th Gen Intel Core i5 i5-12400, Drive Your Workstation
                </p>
              </div>
            )}

            {/* Other Slides Topic / Creative Badge Overlay (Top Left) */}
            {bgIndex !== 1 && (
              <div className="absolute top-6 left-6 sm:top-8 sm:left-8 z-10 flex flex-col gap-1.5 max-w-lg pointer-events-none select-none">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-white font-mono text-xs font-semibold w-max shadow-lg">
                  <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
                  <span>{heroSlides[bgIndex]?.tag[lang] || heroSlides[0].tag[lang]}</span>
                </div>
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Left Carousel Arrow Button */}
      <button
        onClick={goToPrev}
        aria-label="Previous slide"
        className="absolute left-4 sm:left-8 top-[calc(50%-40px)] -translate-y-1/2 z-20 w-11 h-11 sm:w-13 sm:h-13 rounded-full bg-black/50 hover:bg-black/85 text-white/80 hover:text-white border border-white/20 hover:border-white/40 backdrop-blur-md flex items-center justify-center transition-all duration-200 shadow-xl hover:scale-105 active:scale-95 cursor-pointer opacity-85 hover:opacity-100 group/btn"
      >
        <ChevronLeft className="w-6 h-6 sm:w-7 sm:h-7 transition-transform group-hover/btn:-translate-x-0.5" />
      </button>

      {/* Right Carousel Arrow Button */}
      <button
        onClick={goToNext}
        aria-label="Next slide"
        className="absolute right-4 sm:right-8 top-[calc(50%-40px)] -translate-y-1/2 z-20 w-11 h-11 sm:w-13 sm:h-13 rounded-full bg-black/50 hover:bg-black/85 text-white/80 hover:text-white border border-white/20 hover:border-white/40 backdrop-blur-md flex items-center justify-center transition-all duration-200 shadow-xl hover:scale-105 active:scale-95 cursor-pointer opacity-85 hover:opacity-100 group/btn"
      >
        <ChevronRight className="w-6 h-6 sm:w-7 sm:h-7 transition-transform group-hover/btn:translate-x-0.5" />
      </button>

      {/* Floating Slide Indicators (Top Right) */}
      <div className="absolute top-6 right-6 sm:top-8 sm:right-8 z-20 flex items-center gap-3 pointer-events-auto">
        <div className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-white/20 shadow-lg">
          {heroBackgroundImages.map((_, idx) => (
            <button
              key={idx}
              onClick={() => {
                setDirection(idx >= bgIndex ? 'next' : 'prev');
                setBgIndex(idx);
              }}
              aria-label={`Go to slide ${idx + 1}`}
              className={`transition-all duration-300 rounded-full cursor-pointer ${
                bgIndex === idx
                  ? 'w-6 h-2 bg-blue-500 shadow-sm'
                  : 'w-2 h-2 bg-white/40 hover:bg-white/80'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Bottom Blue Marquee Rectangle Block (Height 100px, Absolute Pinned to Bottom) */}
      <div 
        id="hero-bottom-blue-marquee"
        className="absolute bottom-0 left-0 right-0 w-full overflow-hidden select-none shadow-2xl border-t border-blue-500/40 bg-[#2563EB] z-20"
        style={{
          height: '100px',
        }}
      >
        {/* Endless Continuous Marquee Track (Right to Left) */}
        <div className="h-full flex items-center relative z-10">
          <motion.div
            className="flex items-center h-full whitespace-nowrap"
            animate={{ x: ['0%', '-50%'] }}
            transition={{
              ease: 'linear',
              duration: 45,
              repeat: Infinity,
            }}
          >
            {/* Render 2 sets for seamless endless loop */}
            {[...marqueeItems, ...marqueeItems].map((item, idx) => (
              <div
                key={idx}
                className="h-full w-[260px] sm:w-[300px] md:w-[340px] lg:w-[380px] shrink-0 flex items-center justify-start text-left px-6 sm:px-8 lg:px-10 border-r border-white/20 sm:border-white/30 group hover:bg-blue-700/30 transition-colors"
              >
                <div className="flex items-center justify-start space-x-2.5 sm:space-x-3 w-full">
                  {/* Number Badge */}
                  <span className="text-[11px] sm:text-xs font-mono font-bold text-blue-200/90 tracking-widest uppercase shrink-0">
                    {item.num}
                  </span>
                  
                  {/* Main Marquee Title */}
                  <span className="text-xs sm:text-sm md:text-base font-black text-white tracking-widest uppercase font-sans drop-shadow-sm whitespace-nowrap">
                    {item.en}
                  </span>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
