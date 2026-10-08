import React, { useRef, useEffect, useState } from 'react';
import { BookOpen, ArrowUpRight } from 'lucide-react';
import { Language, Project } from '../types';
import { projectsData } from '../data/projectsData';

interface ProjectShowcaseProps {
  lang: Language;
  accentHex: string;
  onSelectProject: (project: Project) => void;
  activeDiscipline?: string;
}

interface ProjectCardProps {
  project: Project;
  idx: number;
  totalCount: string;
  lang: Language;
  onSelectProject: (project: Project) => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  project,
  idx,
  totalCount,
  lang,
  onSelectProject,
}) => {
  const indexStr = String(idx + 1).padStart(2, '0');

  return (
    <div
      className="flex flex-col group cursor-pointer w-[340px] sm:w-[400px] lg:w-[440px] shrink-0 select-none transition-transform duration-300"
      onClick={() => onSelectProject(project)}
    >
      {/* 4:3 Image Container */}
      <div className="relative aspect-[4/3] w-full bg-[#121212] border border-neutral-800/80 overflow-hidden mb-4 flex items-center justify-center p-0 group-hover:border-neutral-500 transition-colors">
        {/* Top-Left Pill: Index / Total */}
        <div className="absolute top-3.5 left-3.5 z-10 px-2.5 py-1 bg-black/70 backdrop-blur-md text-white/90 font-mono text-[11px] font-semibold rounded-full border border-white/10 shadow-sm">
          {indexStr} / {totalCount}
        </div>

        {/* Top-Right Pill: Feishu Badge or Details Trigger */}
        <div className="absolute top-3.5 right-3.5 z-10 px-2.5 py-1 bg-black/70 backdrop-blur-md text-white/80 font-mono text-[10px] font-semibold rounded-full border border-white/10 flex items-center gap-1 group-hover:text-white group-hover:border-white/30 transition-all shadow-sm">
          {project.iframeUrl ? (
            <>
              <BookOpen className="w-3 h-3 text-blue-400" />
              <span>
                {project.iframeUrl.includes('/slides/')
                  ? (lang === 'en' ? 'SLIDES ↗' : '幻灯片 ↗')
                  : (lang === 'en' ? 'FEISHU ↗' : '飞书 ↗')}
              </span>
            </>
          ) : (
            <>
              <span>DETAILS</span>
              <ArrowUpRight className="w-3 h-3 text-neutral-400 group-hover:text-white transition-colors" />
            </>
          )}
        </div>

        {/* Cover Image */}
        <img
          src={project.thumbnail}
          alt={project.title}
          draggable={false}
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 pointer-events-none"
        />
      </div>

      {/* Typography Stack */}

      {/* 1. Monospace Index */}
      <div className="text-[12px] font-mono text-neutral-400 font-bold tracking-wider mb-1">
        {indexStr} / {totalCount}
      </div>

      {/* 2. Primary Project Title */}
      <h3 className="text-[20px] sm:text-[22px] font-bold text-white tracking-tight leading-tight group-hover:text-blue-400 transition-colors mb-2 truncate">
        {project.title}
      </h3>

      {/* 3. Description Tagline */}
      <p className="text-[13px] text-neutral-400 leading-relaxed line-clamp-2 font-normal">
        {project.tagline[lang]}
      </p>
    </div>
  );
};

interface ShowcaseRowProps {
  items: Array<{ project: Project; originalIdx: number }>;
  direction: 'left' | 'right';
  totalCount: string;
  lang: Language;
  onSelectProject: (project: Project) => void;
  speed?: number; // pixels per frame
}

const ShowcaseRow: React.FC<ShowcaseRowProps> = ({
  items,
  direction,
  totalCount,
  lang,
  onSelectProject,
  speed = 0.22,
}) => {
  const rowRef = useRef<HTMLDivElement>(null);
  const isHoveredRef = useRef(false);
  const isDraggingRef = useRef(false);
  const startXRef = useRef(0);
  const scrollStartRef = useRef(0);
  const movedDistanceRef = useRef(0);
  const wheelVelocityRef = useRef(0);

  // Duplicate items 6 times to provide infinite smooth coordinate space
  const duplicatedItems = [...items, ...items, ...items, ...items, ...items, ...items];

  useEffect(() => {
    const el = rowRef.current;
    if (!el) return;

    // Initialize initial scroll position around center
    const setCenter = () => {
      const singleSetWidth = el.scrollWidth / 6;
      if (singleSetWidth > 0 && el.scrollLeft === 0) {
        el.scrollLeft = singleSetWidth * 2;
      }
    };

    setCenter();

    let animationFrameId: number;
    let lastTime = performance.now();

    const step = (currentTime: number) => {
      const dt = Math.min((currentTime - lastTime) / 16.667, 2); // normalize delta time
      lastTime = currentTime;

      if (!isDraggingRef.current && el) {
        const singleSetWidth = el.scrollWidth / 6;

        // 1. If user applied wheel momentum, smoothly glide with inertial damping
        if (Math.abs(wheelVelocityRef.current) > 0.05) {
          el.scrollLeft += wheelVelocityRef.current * dt;
          wheelVelocityRef.current *= Math.pow(0.90, dt); // smooth slow deceleration
        } else {
          wheelVelocityRef.current = 0;
          // 2. If not hovered and not wheeling, slow, elegant auto-scroll
          if (!isHoveredRef.current) {
            const moveAmount = speed * dt;
            if (direction === 'left') {
              el.scrollLeft += moveAmount;
            } else {
              el.scrollLeft -= moveAmount;
            }
          }
        }

        // Seamless infinite wrap
        if (singleSetWidth > 0) {
          if (el.scrollLeft >= singleSetWidth * 4) {
            el.scrollLeft -= singleSetWidth * 2;
          } else if (el.scrollLeft <= singleSetWidth) {
            el.scrollLeft += singleSetWidth * 2;
          }
        }
      }

      animationFrameId = requestAnimationFrame(step);
    };

    animationFrameId = requestAnimationFrame(step);

    // Native non-passive wheel listener with smooth, gradual acceleration
    const onWheelNative = (e: WheelEvent) => {
      e.preventDefault();
      e.stopPropagation();

      const delta = Math.abs(e.deltaX) > Math.abs(e.deltaY) ? e.deltaX : e.deltaY;
      // Clamp single impulse to prevent abrupt jumps, creating a gentle and slow rolling acceleration
      const clampedDelta = Math.sign(delta) * Math.min(Math.abs(delta), 60);
      wheelVelocityRef.current += clampedDelta * 0.14;
    };

    el.addEventListener('wheel', onWheelNative, { passive: false });

    return () => {
      cancelAnimationFrame(animationFrameId);
      el.removeEventListener('wheel', onWheelNative);
    };
  }, [direction, speed]);

  // Mouse Drag Support
  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = rowRef.current;
    if (!el) return;
    isDraggingRef.current = true;
    startXRef.current = e.pageX - el.offsetLeft;
    scrollStartRef.current = el.scrollLeft;
    movedDistanceRef.current = 0;
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDraggingRef.current || !rowRef.current) return;
    const x = e.pageX - rowRef.current.offsetLeft;
    const walk = (x - startXRef.current) * 1.2;
    movedDistanceRef.current += Math.abs(walk);
    rowRef.current.scrollLeft = scrollStartRef.current - walk;

    const singleSetWidth = rowRef.current.scrollWidth / 6;
    if (singleSetWidth > 0) {
      if (rowRef.current.scrollLeft >= singleSetWidth * 4) {
        rowRef.current.scrollLeft -= singleSetWidth * 2;
      } else if (rowRef.current.scrollLeft <= singleSetWidth) {
        rowRef.current.scrollLeft += singleSetWidth * 2;
      }
    }
  };

  const handleMouseUp = () => {
    isDraggingRef.current = false;
  };

  const handleCardClick = (project: Project) => {
    // If dragged significantly, don't trigger click
    if (movedDistanceRef.current > 10) return;
    onSelectProject(project);
  };

  return (
    <div
      ref={rowRef}
      onMouseEnter={() => {
        isHoveredRef.current = true;
      }}
      onMouseLeave={() => {
        isHoveredRef.current = false;
        isDraggingRef.current = false;
      }}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      className="w-full overflow-x-auto no-scrollbar py-2 cursor-grab active:cursor-grabbing select-none overscroll-contain touch-pan-x"
    >
      <div className="flex gap-6 sm:gap-8 w-max">
        {duplicatedItems.map((item, index) => (
          <ProjectCard
            key={`${item.project.id}-${index}`}
            project={item.project}
            idx={item.originalIdx}
            totalCount={totalCount}
            lang={lang}
            onSelectProject={handleCardClick}
          />
        ))}
      </div>
    </div>
  );
};

export const Showcase: React.FC<ProjectShowcaseProps> = ({
  lang,
  onSelectProject,
  activeDiscipline = 'all',
}) => {
  const filteredData = React.useMemo(() => {
    if (!activeDiscipline || activeDiscipline === 'all') return projectsData;
    const res = projectsData.filter((p) => {
      const cat = (p.category || '').toLowerCase();
      const catLabel = (p.categoryLabel?.en || '').toLowerCase();
      const tags = (p.tags || []).join(' ').toLowerCase();
      if (activeDiscipline === 'campaign') {
        return cat.includes('amazon') || cat.includes('product-video') || catLabel.includes('campaign') || tags.includes('活动') || tags.includes('电商');
      }
      if (activeDiscipline === 'web') {
        return cat.includes('independent-site') || catLabel.includes('web') || tags.includes('独立站') || tags.includes('官网');
      }
      if (activeDiscipline === 'aigc') {
        return cat.includes('aigc') || tags.includes('aigc') || tags.includes('ai');
      }
      if (activeDiscipline === 'brand') {
        return cat.includes('graphic-design') || catLabel.includes('brand') || tags.includes('品牌') || tags.includes('主视觉');
      }
      if (activeDiscipline === 'illustration') {
        return cat.includes('graphic-design') || tags.includes('插画') || tags.includes('3d') || tags.includes('三维');
      }
      return true;
    });
    return res.length > 0 ? res : projectsData;
  }, [activeDiscipline]);

  const totalCount = String(filteredData.length).padStart(2, '0');

  // Distribute projects sequentially from small to large:
  // Row 1: 7 projects (01—07)
  // Row 2: 6 projects (08—13)
  // Row 3: 6 projects (14—19)
  const countRow1 = Math.min(filteredData.length, 7);
  const countRow2 = Math.min(Math.max(0, filteredData.length - countRow1), 6);

  const row1Projects = filteredData.slice(0, countRow1).map((project, idx) => ({
    project,
    originalIdx: idx,
  }));

  const row2Projects = filteredData.slice(countRow1, countRow1 + countRow2).map((project, idx) => ({
    project,
    originalIdx: countRow1 + idx,
  }));

  const row3Projects = filteredData.slice(countRow1 + countRow2).map((project, idx) => ({
    project,
    originalIdx: countRow1 + countRow2 + idx,
  }));

  return (
    <section
      id="showcase"
      className="py-24 bg-black text-white scroll-mt-16 border-b border-neutral-800 overflow-hidden"
    >
      <div className="w-[1920px] max-w-full mx-auto px-4 sm:px-6 lg:px-8">
        {/* Minimalist Heading Layout */}
        <div className="mb-12 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <h2 className="text-[28px] sm:text-[32px] leading-tight font-bold text-white tracking-tight uppercase">
              PROJECT SHOWCASE
            </h2>
            <p className="text-[16px] sm:text-[18px] font-medium text-neutral-400 mt-1">
              {lang === 'en' ? 'Selected Portfolio & Works' : '项目展示'}
            </p>
          </div>

          <div className="text-xs font-mono text-neutral-400 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span>
              {lang === 'en'
                ? 'Hover row to pause · Wheel scroll or drag to freely explore'
                : '光标移至该行即刻暂停 · 支持滚轮/拖拽自由左右浏览'}
            </span>
          </div>
        </div>

        {/* 3 Horizontal Scrolling Rows */}
        <div className="space-y-12 sm:space-y-16">
          {/* Row 1: Right to Left (从右往左) */}
          <div className="space-y-2 group/row">
            <div className="text-[10px] font-mono uppercase tracking-widest text-neutral-500 px-1 flex items-center justify-between">
              <span>ROW 01 · AUTO-FLOW ←</span>
              <span className="text-[9px] text-neutral-600 opacity-0 group-hover/row:opacity-100 transition-opacity">
                PAUSED ON HOVER
              </span>
            </div>
            <ShowcaseRow
              items={row1Projects}
              direction="left"
              totalCount={totalCount}
              lang={lang}
              onSelectProject={onSelectProject}
              speed={0.22}
            />
          </div>

          {/* Row 2: Left to Right (从左往右) */}
          <div className="space-y-2 group/row">
            <div className="text-[10px] font-mono uppercase tracking-widest text-neutral-500 px-1 flex items-center justify-between">
              <span>ROW 02 · AUTO-FLOW →</span>
              <span className="text-[9px] text-neutral-600 opacity-0 group-hover/row:opacity-100 transition-opacity">
                PAUSED ON HOVER
              </span>
            </div>
            <ShowcaseRow
              items={row2Projects}
              direction="right"
              totalCount={totalCount}
              lang={lang}
              onSelectProject={onSelectProject}
              speed={0.25}
            />
          </div>

          {/* Row 3: Right to Left (从右往左) */}
          <div className="space-y-2 group/row">
            <div className="text-[10px] font-mono uppercase tracking-widest text-neutral-500 px-1 flex items-center justify-between">
              <span>ROW 03 · AUTO-FLOW ←</span>
              <span className="text-[9px] text-neutral-600 opacity-0 group-hover/row:opacity-100 transition-opacity">
                PAUSED ON HOVER
              </span>
            </div>
            <ShowcaseRow
              items={row3Projects}
              direction="left"
              totalCount={totalCount}
              lang={lang}
              onSelectProject={onSelectProject}
              speed={0.20}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
