import React from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight, Sparkles, Layers, BookOpen } from 'lucide-react';
import { Project, Language } from '../types';
import { i18n } from '../data/i18n';

interface ProjectCardProps {
  project: Project;
  index: number;
  onSelect: (project: Project) => void;
  lang: Language;
  accentHex: string;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  project,
  index,
  onSelect,
  lang,
  accentHex,
}) => {
  const t = i18n.showcase;

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2 }}
      onClick={() => onSelect(project)}
      className="bg-white border border-slate-200/90 hover:border-slate-400 overflow-hidden shadow-2xs hover:shadow-md transition-all cursor-pointer group flex flex-col h-full relative"
    >
      {/* Featured Badge */}
      {project.featured && (
        <div className="absolute top-3 left-3 z-20 px-2.5 py-1 bg-slate-900/90 text-white font-mono text-[10px] font-bold tracking-wider flex items-center gap-1.5 shadow-sm backdrop-blur-xs">
          <Sparkles className="w-3 h-3 text-amber-300" />
          <span>FEATURED</span>
        </div>
      )}

      {/* Feishu Document Badge */}
      {project.iframeUrl && (
        <div className="absolute top-3 right-3 z-20 px-2 py-0.5 bg-blue-600/95 text-white font-mono text-[9px] font-bold tracking-wider flex items-center gap-1 shadow-sm backdrop-blur-xs">
          <BookOpen className="w-2.5 h-2.5" />
          <span>
            {project.iframeUrl.includes('/slides/')
              ? 'FEISHU SLIDES'
              : project.iframeUrl.includes('/wiki/')
              ? 'FEISHU WIKI'
              : 'FEISHU DOC'}
          </span>
        </div>
      )}

      {/* Image Thumbnail Frame */}
      <div className="relative aspect-16/10 bg-slate-100 overflow-hidden border-b border-slate-100">
        <img
          src={project.thumbnail}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        
        {/* Subtle hover overlay */}
        <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-slate-900/0 transition-colors" />

        <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
          <span
            className="px-3 py-1.5 text-xs font-mono font-bold text-white shadow-md flex items-center gap-1.5"
            style={{ backgroundColor: accentHex }}
          >
            <span>{t.viewCaseStudy[lang]}</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </span>
        </div>
      </div>

      {/* Content Area */}
      <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between space-y-4">
        
        <div className="space-y-2">
          {/* Title */}
          <h3 className="text-base sm:text-lg font-bold text-slate-900 tracking-tight group-hover:text-blue-600 transition-colors line-clamp-1">
            {project.title}
          </h3>

          {/* Tagline */}
          <p className="text-xs sm:text-sm text-slate-600 line-clamp-2 leading-relaxed">
            {project.tagline[lang]}
          </p>
        </div>

        {/* Footer Metrics & Tags */}
        <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] font-mono text-slate-400 group-hover:text-slate-700 transition-colors">
          <span>{project.year} / {String(index + 1).padStart(2, '0')}</span>
          <ArrowUpRight className="w-3 h-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
        </div>

      </div>
    </motion.div>
  );
};
