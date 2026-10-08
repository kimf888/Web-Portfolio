import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Language } from '../types';

interface HeroProps {
  lang: Language;
  accentHex: string;
}

const heroBackgroundImages = [
  'https://i.ibb.co/Qjb8Cg2T/4.png',
  'https://i.ibb.co/0VqXxk4g/1.png',
  'https://i.ibb.co/B2yfsPz8/2.png',
  'https://i.ibb.co/SDhkB3j5/3.png',
  'https://i.ibb.co/JR1ydc0X/1.png',
];

interface HeroSlideData {
  tag: { 'zh-CN': string; 'zh-TW': string; en: string };
  title: { 'zh-CN': string; 'zh-TW': string; en: string };
  subtitle: { 'zh-CN': string; 'zh-TW': string; en: string };
}

const heroSlides: HeroSlideData[] = [
  {
    tag: {
      'zh-CN': '01 · AIGC-创意 · 庭院生态与智能护理',
      'zh-TW': '01 · AIGC-創意 · 庭院生態與智能護理',
      en: '01 · AIGC Creative · Smart Garden & Eco Living',
    },
    title: {
      'zh-CN': '智护庭院，自在生长',
      'zh-TW': '智護庭院，自在生長',
      en: 'Smart Garden Care, Growing Naturally',
    },
    subtitle: {
      'zh-CN': 'AIGC-创意｜无人割草机与户外智能生态科技，重塑现代庭院惬意生活',
      'zh-TW': 'AIGC-創意｜無人割草機與戶外智能生態科技，重塑現代庭院愜意生活',
      en: 'AIGC Creative | Robotic lawn mower & outdoor smart eco-tech for tranquil modern living',
    },
  },
  {
    tag: {
      'zh-CN': '02 · 母婴健康与纯净守护',
      'zh-TW': '02 · 母嬰健康與純淨守護',
      en: '02 · Pure Care & Healthy Living',
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
      'zh-CN': '03 · 派对聚会与极速制冷',
      'zh-TW': '03 · 派對聚會與極速制冷',
      en: '03 · Instant Chill & Social Moments',
    },
    title: {
      'zh-CN': '欢聚时刻，冰爽触手可及',
      'zh-TW': '歡聚時刻，冰爽觸手可及',
      en: 'Gathering Moments, Instant Refreshing Chill',
    },
    subtitle: {
      'zh-CN': '极速强劲制冷与便捷取冰，点亮每一个派对与畅饮时光',
      'zh-TW': '極速強勁制冷與便捷取冰，點亮每一個派對與暢飲時光',
      en: 'Rapid cooling & effortless ice making to elevate every social moment',
    },
  },
  {
    tag: {
      'zh-CN': '04 · 图解安装与调试',
      'zh-TW': '04 · 圖解安裝與調試',
      en: '04 · Visual Assembly & Setup',
    },
    title: {
      'zh-CN': '开箱即装，一步到位',
      'zh-TW': '開箱即裝，一步到位',
      en: 'Out of the Box, One-Step Setup',
    },
    subtitle: {
      'zh-CN': '分步图解式说明，助力快速完成产品组装调试',
      'zh-TW': '分步圖解式說明，助力快速完成產品組裝調試',
      en: 'Step-by-step visual guides for effortless assembly and calibration',
    },
  },
  {
    tag: {
      'zh-CN': '05 · 电竞工坊与沉浸空间',
      'zh-TW': '05 · 電競工坊與沉浸空間',
      en: '05 · Esports Workstation & Performance',
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

  // Auto-cycle background images from left to right every 4.8 seconds
  useEffect(() => {
    const bgTimer = setInterval(() => {
      setBgIndex((prev) => (prev + 1) % heroBackgroundImages.length);
    }, 4800);
    return () => clearInterval(bgTimer);
  }, []);

  return (
    <section className="relative overflow-hidden bg-black border-b border-neutral-800 w-full aspect-[16/10] min-h-[640px] max-h-[1200px]">
      
      {/* Background Images Carousel (Slides progressively from left to right, nicely filling the hero section) */}
      <div className="absolute inset-0 z-0 overflow-hidden w-full h-full">
        <AnimatePresence initial={false}>
          <motion.div
            key={bgIndex}
            initial={{ x: '-100%' }}
            animate={{ x: '0%' }}
            exit={{ x: '100%' }}
            transition={{
              x: { duration: 1.2, ease: [0.25, 1, 0.5, 1] },
            }}
            className="absolute inset-0 w-full h-full"
          >
            <img
              src={heroBackgroundImages[bgIndex]}
              alt={`Hero Background ${bgIndex + 1}`}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover object-center pointer-events-none select-none"
            />

            {/* Slide Topic / Creative Badge Overlay */}
            <div className="absolute top-6 left-6 sm:top-8 sm:left-8 z-10 flex flex-col gap-1.5 max-w-lg pointer-events-none select-none">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-white font-mono text-xs font-semibold w-max shadow-lg">
                <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
                <span>{heroSlides[bgIndex]?.tag[lang] || heroSlides[0].tag[lang]}</span>
              </div>
              {bgIndex === 0 && (
                <div className="text-white/90 text-xs sm:text-sm font-medium drop-shadow-md bg-black/40 backdrop-blur-xs px-3 py-1 rounded-md border border-white/10 w-max">
                  {lang === 'en' ? 'Robotic Mower · AIGC Creative' : '无人智能割草机 · AIGC-创意'}
                </div>
              )}
            </div>
          </motion.div>
        </AnimatePresence>
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
