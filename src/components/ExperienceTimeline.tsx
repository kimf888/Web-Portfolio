import React from 'react';
import { Language } from '../types';
import experienceBg from '../assets/experience_bg.png';
import { useInView } from '../hooks/useInView';

export type DisciplineCategory = 'all' | 'campaign' | 'web' | 'aigc' | 'brand' | 'illustration';

interface ExperienceTimelineProps {
  lang: Language;
  accentHex?: string;
  activeDiscipline?: DisciplineCategory;
  onSelectDiscipline?: (cat: DisciplineCategory) => void;
}

interface CareerItem {
  id: string;
  startDate: string;
  endDate: string;
  company: {
    'zh-CN': string;
    'zh-TW': string;
    en: string;
  };
  description: {
    'zh-CN': string;
    'zh-TW': string;
    en: string;
  };
  products?: {
    'zh-CN': string;
    'zh-TW': string;
    en: string;
  };
}

const careerList: CareerItem[] = [
  {
    id: 'c-1',
    startDate: '2025.07',
    endDate: 'NOW',
    company: {
      'zh-CN': '深圳市迭代创新科技有限公司',
      'zh-TW': '深圳市迭代創新科技有限公司',
      en: 'Shenzhen Iterative Innovation Technology Co., Ltd.',
    },
    description: {
      'zh-CN': '高级视觉设计师 / 视觉设计负责人',
      'zh-TW': '高級視覺設計師 / 視覺設計負責人',
      en: 'Senior Visual Designer / Head of Visual Design',
    },
    products: {
      'zh-CN': '产品：升降桌 / 智能家具茶几',
      'zh-TW': '產品：升降桌 / 智能家具茶几',
      en: 'Products: Standing Desk / Smart Coffee Table',
    },
  },
  {
    id: 'c-2',
    startDate: '2024.10',
    endDate: '2025.06',
    company: {
      'zh-CN': '深圳睿丰和电子商务有限公司',
      'zh-TW': '深圳睿豐和電子商務有限公司',
      en: 'Shenzhen Ruifenghe E-Commerce Co., Ltd.',
    },
    description: {
      'zh-CN': '视觉设计师',
      'zh-TW': '視覺設計師',
      en: 'Visual Designer',
    },
    products: {
      'zh-CN': '产品：音乐架 / 延长线 / 露营灯 / 太阳能灯 / 门闭器 / 触摸灯',
      'zh-TW': '產品：音樂架 / 延長線 / 露營燈 / 太陽能燈 / 門閉器 / 觸摸燈',
      en: 'Products: Music Stand / Extension Cord / Camping Light / Solar Light / Door Closer / Touch Light',
    },
  },
  {
    id: 'c-3',
    startDate: '2021.03',
    endDate: '2024.09',
    company: {
      'zh-CN': '深圳大唐计算机有限公司',
      'zh-TW': '深圳大唐計算機有限公司',
      en: 'Shenzhen Datang Computer Co., Ltd.',
    },
    description: {
      'zh-CN': '视觉设计师',
      'zh-TW': '視覺設計師',
      en: 'Visual Designer',
    },
    products: {
      'zh-CN': '产品：MINI主机 / 工业主板/ 工控机 / 笔记本电脑',
      'zh-TW': '產品：MINI主機 / 工業主板 / 工控機 / 筆記本電腦',
      en: 'Products: Mini PC / Industrial Motherboard / IPC / Laptops',
    },
  },
];

export const ExperienceTimeline: React.FC<ExperienceTimelineProps> = ({
  lang,
  activeDiscipline = 'all',
  onSelectDiscipline,
}) => {
  const { ref, isInView } = useInView<HTMLElement>({ threshold: 0.1, rootMargin: '0px 0px -60px 0px' });

  const disciplines: Array<{ id: DisciplineCategory; label: { en: string; 'zh-CN': string; 'zh-TW': string } }> = [
    { id: 'all', label: { en: 'ALL', 'zh-CN': '全部', 'zh-TW': '全部' } },
    { id: 'campaign', label: { en: 'Campaign', 'zh-CN': 'Campaign', 'zh-TW': 'Campaign' } },
    { id: 'web', label: { en: 'Web', 'zh-CN': 'Web', 'zh-TW': 'Web' } },
    { id: 'aigc', label: { en: 'AIGC', 'zh-CN': 'AIGC', 'zh-TW': 'AIGC' } },
    { id: 'brand', label: { en: 'Brand', 'zh-CN': 'Brand', 'zh-TW': 'Brand' } },
    { id: 'illustration', label: { en: 'Illustration', 'zh-CN': 'Illustration', 'zh-TW': 'Illustration' } },
  ];

  const handleDisciplineClick = (cat: DisciplineCategory) => {
    if (onSelectDiscipline) {
      onSelectDiscipline(cat);
    }
    const el = document.getElementById('showcase');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      ref={ref}
      id="experience"
      className="relative py-20 sm:py-24 bg-black text-white border-b border-neutral-800 overflow-hidden"
    >
      {/* Background Image Layer (Behind content, text 100% legible) */}
      <div 
        className={`absolute inset-0 z-0 pointer-events-none overflow-hidden select-none transition-opacity duration-1000 ease-out ${
          isInView ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <img
          src={experienceBg}
          alt=""
          className="w-full h-full object-cover object-center opacity-65"
        />
        {/* Soft Vignette & Dark Overlays for maximum text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-black/90" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_90%_70%_at_30%_40%,transparent_20%,rgba(0,0,0,0.75)_100%)]" />
      </div>

      <div className="relative z-10 w-[1920px] max-w-full mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Minimalist Header Line */}
        <div 
          className={`pb-5 border-b border-neutral-800/80 mb-12 sm:mb-16 flex items-center gap-6 text-[11px] font-mono tracking-widest text-neutral-400 uppercase transition-all duration-1000 ease-out ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <span className="text-neutral-500 font-bold">04</span>
          <span className="text-neutral-300 font-semibold">EXPERIENCE &amp; TOOLKIT</span>
        </div>

        {/* Main 2-Column Section Body */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start mb-16 lg:mb-20">
          
          {/* Left Column: Huge Headline & Career Tag */}
          <div 
            className={`lg:col-span-5 flex flex-col justify-start pt-2 transition-all duration-1000 ease-out delay-150 ${
              isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            {/* Tagline */}
            <div className="flex items-center gap-2 mb-6 sm:mb-8">
              <span className="w-5 h-[2px] bg-[#2563EB]" />
              <span className="text-xs font-bold text-[#2563EB] tracking-wider">
                {lang === 'en' ? 'CAREER PATH' : '职业轨迹'}
              </span>
              <span className="text-xs font-mono text-neutral-300 ml-1">2021 — NOW</span>
            </div>

            {/* Giant Title */}
            <h2 className="text-[42px] sm:text-[54px] lg:text-[62px] font-extrabold text-white tracking-tight leading-[1.12]">
              {lang === 'en' ? (
                <>
                  Career Path,
                  <br />
                  Work Timeline.
                </>
              ) : lang === 'zh-TW' ? (
                <>
                  公司履歷，
                  <br />
                  工作時間線。
                </>
              ) : (
                <>
                  公司履历，
                  <br />
                  工作时间线。
                </>
              )}
            </h2>
          </div>

          {/* Right Column: 5 Horizontal Timeline Rows */}
          <div 
            className={`lg:col-span-7 flex flex-col divide-y divide-neutral-800/80 border-t border-b border-neutral-800/80 transition-all duration-1000 ease-out delay-250 ${
              isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            {careerList.map((item, idx) => (
              <div
                key={item.id}
                className={`py-6 sm:py-7 flex flex-col sm:flex-row sm:items-start gap-3 sm:gap-8 group hover:bg-neutral-950/40 transition-all duration-700 px-1 sm:px-3 ${
                  isInView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'
                }`}
                style={{
                  transitionDelay: isInView ? `${300 + idx * 120}ms` : '0ms',
                }}
              >
                {/* Date Numbers */}
                <div className="w-full sm:w-[170px] lg:w-[190px] shrink-0">
                  <div className="text-[24px] sm:text-[28px] font-bold font-mono text-white tracking-tight leading-tight">
                    {item.startDate} —
                  </div>
                  <div className="text-[24px] sm:text-[28px] font-bold font-mono text-white tracking-tight leading-tight mt-0.5 text-neutral-200">
                    {item.endDate}
                  </div>
                </div>

                {/* Company & Description (No Expanders) */}
                <div className="flex-1 min-w-0 pt-1 flex flex-col md:flex-row md:items-start justify-between gap-2 md:gap-6">
                  <div>
                    <h3 className="text-[16px] sm:text-[17px] font-bold text-white mb-1.5 tracking-tight group-hover:text-blue-400 transition-colors">
                      {item.company[lang]}
                    </h3>
                    <p className="text-[12.5px] sm:text-[13px] text-neutral-400 leading-relaxed font-normal">
                      {item.description[lang]}
                    </p>
                  </div>
                  {item.products && (
                    <div className="text-[12px] sm:text-[13px] font-mono text-neutral-200 font-bold md:text-right shrink-0 pt-0.5">
                      {item.products[lang]}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

        </div>

        {/* Bottom Discipline Filter Bar with Narrative */}
        <div 
          className={`pt-6 border-t border-neutral-800/90 transition-all duration-1000 ease-out delay-350 ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          {/* Section Label & Professional Summary Paragraph */}
          <div className="flex flex-col w-full">
            <div className="text-[10px] sm:text-[11px] font-mono tracking-[0.2em] text-neutral-400 uppercase font-bold mb-2">
              EXPLORE BY DISCIPLINE
            </div>
            <p className="text-[11px] sm:text-[12px] leading-relaxed text-neutral-400 font-normal w-full">
              {lang === 'en'
                ? '5+ years of cross-border brand visual design experience, Senior Visual Designer. Led end-to-end brand visual identity creation for consumer electronics, orchestrated Amazon Listings, DTC independent sites, and off-site campaign assets; drove design execution, proficient in 3D product rendering and AIGC workflows, balancing brand consistency with product-level conversion, continuously driving CTR and ROI gains.'
                : lang === 'zh-TW'
                ? '5+年跨境品牌視覺設計經驗，高級視覺設計。主導消費電子類產品整套品牌視覺體系搭建，統籌亞馬遜 Listing、獨立站、站外營銷物料設計；帶領視覺項目落地，熟悉產品 3D 渲染、AIGC 創意工作流，兼顧品牌統一性與單品競爭力，持續用視覺設計助力產品點擊率與轉化提升。'
                : '5+年跨境品牌视觉设计经验，高级视觉设计。主导消费电子类产品整套品牌视觉体系搭建，统筹亚马逊 Listing、独立站、站外营销物料设计；带领视觉项目落地，熟悉产品 3D 渲染、AIGC 创意工作流，兼顾品牌统一性与单品竞争力，持续用视觉设计助力产品点击率与转化提升。'}
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};
