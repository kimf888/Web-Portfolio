import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Image as ImageIcon, FileText, CheckCircle, Tag, Calendar, User, Briefcase, ExternalLink, BookOpen, ArrowUpRight } from 'lucide-react';
import { Project, Language } from '../types';
import { i18n } from '../data/i18n';
import { projectsData } from '../data/projectsData';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
  lang: Language;
  accentHex: string;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({
  project: initialProject,
  onClose,
  lang,
  accentHex,
}) => {
  const project = (initialProject?.id ? projectsData.find((p) => p.id === initialProject.id) : null) || initialProject;
  const [activeTab, setActiveTab] = useState<'images' | 'desc'>('images');
  const [brokenImages, setBrokenImages] = useState<Set<string>>(new Set());

  useEffect(() => {
    // Reset tab and broken images when project changes
    setActiveTab('images');
    setBrokenImages(new Set());
  }, [project?.id]);

  const handleImageError = (url: string) => {
    setBrokenImages((prev) => {
      const next = new Set(prev);
      next.add(url);
      return next;
    });
  };

  useEffect(() => {
    if (project) {
      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = 'hidden';

      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Escape') onClose();
      };

      window.addEventListener('keydown', handleKeyDown);
      return () => {
        document.body.style.overflow = originalOverflow;
        window.removeEventListener('keydown', handleKeyDown);
      };
    }
  }, [project, onClose]);

  const renderInlineMarkdown = (line: string) => {
    const parts = line.split(/(\*\*.*?\*\*)/g);
    return parts.map((part, index) => {
      if (part.startsWith('**') && part.endsWith('**')) {
        return (
          <strong key={index} className="font-semibold text-slate-900">
            {part.slice(2, -2)}
          </strong>
        );
      }
      return part;
    });
  };

  const renderFormattedContent = (content: string) => {
    if (!content) return null;
    if (!content.includes('##') && !content.includes('**')) {
      return (
        <p className="text-sm text-slate-700 leading-relaxed whitespace-pre-line">
          {content}
        </p>
      );
    }

    const blocks = content.split('\n\n');
    return (
      <div className="space-y-4 text-sm text-slate-700 leading-relaxed">
        {blocks.map((block, bIdx) => {
          const trimmed = block.trim();
          if (trimmed.startsWith('## ')) {
            return (
              <h3 key={bIdx} className="text-base font-bold text-slate-900 pt-3 pb-1 border-b border-slate-100 flex items-center gap-2">
                <span className="w-1.5 h-3.5 bg-slate-900 rounded-xs inline-block" />
                <span>{trimmed.replace(/^##\s+/, '')}</span>
              </h3>
            );
          }
          if (trimmed.startsWith('### ')) {
            return (
              <h4 key={bIdx} className="text-sm font-bold text-slate-900 pt-2 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-slate-900 inline-block" />
                <span>{trimmed.replace(/^###\s+/, '')}</span>
              </h4>
            );
          }

          const lines = trimmed.split('\n');
          return (
            <div key={bIdx} className="space-y-2">
              {lines.map((line, lIdx) => {
                const isNumberedList = /^\d+\.\s+/.test(line);
                return (
                  <p key={lIdx} className={isNumberedList ? 'pl-4 -indent-4' : ''}>
                    {renderInlineMarkdown(line)}
                  </p>
                );
              })}
            </div>
          );
        })}
      </div>
    );
  };

  if (!project) return null;

  const t = i18n.modal;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-slate-900/60 backdrop-blur-xs overscroll-contain">
        
        {/* Modal Window Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          transition={{ type: 'spring', stiffness: 300, damping: 25 }}
          className="bg-white w-full max-w-4xl border border-slate-200 shadow-2xl overflow-hidden my-8 flex flex-col max-h-[90vh] overscroll-contain"
        >
          {/* Top Header Bar */}
          <div className="px-5 py-4 bg-slate-50 border-b border-slate-200 flex flex-wrap items-center justify-between gap-3 shrink-0">
            {/* Tab Toggle Controls (Moved to left) */}
            <div className="flex items-center gap-2.5 min-w-0">
              <div className="flex items-center p-1 bg-slate-200/70 border border-slate-200">
                <button
                  onClick={() => setActiveTab('images')}
                  className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold font-mono transition-all ${
                    activeTab === 'images'
                      ? 'bg-white text-slate-900 shadow-xs'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  {project.iframeUrl ? (
                    <BookOpen className="w-3.5 h-3.5" style={{ color: activeTab === 'images' ? accentHex : undefined }} />
                  ) : (
                    <ImageIcon className="w-3.5 h-3.5" style={{ color: activeTab === 'images' ? accentHex : undefined }} />
                  )}
                  <span>
                    {project.iframeUrl
                      ? (project.iframeUrl.includes('/slides/')
                          ? (lang === 'en' ? 'Feishu Slides' : lang === 'zh-CN' ? '飞书幻灯片展示' : '飛書投影片展示')
                          : (lang === 'en' ? 'Feishu Document' : lang === 'zh-CN' ? '飞书文档展示' : '飛書文檔展示'))
                      : t.imagesTab[lang]}
                  </span>
                </button>
                <button
                  onClick={() => setActiveTab('desc')}
                  className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold font-mono transition-all ${
                    activeTab === 'desc'
                      ? 'bg-white text-slate-900 shadow-xs'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  <FileText className="w-3.5 h-3.5" style={{ color: activeTab === 'desc' ? accentHex : undefined }} />
                  <span>{t.descTab[lang]}</span>
                </button>
              </div>
            </div>

            {/* Actions & Close Button (Right) */}
            <div className="flex items-center gap-2 sm:gap-3 shrink-0 ml-auto">
              {project.iframeUrl && (
                <a
                  href={project.iframeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 px-3 py-1.5 bg-[#2563EB] hover:bg-blue-600 text-white transition-colors text-xs font-semibold shadow-xs"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  <span>
                    {project.iframeUrl.includes('/slides/')
                      ? (lang === 'en' ? 'Open Slides in Feishu' : lang === 'zh-CN' ? '在新窗口打开飞书幻灯片' : '在新視窗打開飛書投影片')
                      : (lang === 'en' ? 'Open in Feishu' : lang === 'zh-CN' ? '在新窗口打开飞书文档' : '在新視窗打開飛書文檔')}
                  </span>
                </a>
              )}

              {/* 关闭案例 Button */}
              <button
                onClick={onClose}
                className="flex items-center gap-1.5 px-3 py-1.5 bg-white border border-slate-200 text-slate-700 hover:bg-slate-100 transition-colors text-xs font-semibold shadow-2xs"
                aria-label={t.closeCase[lang]}
              >
                <span>{t.closeCase[lang]}</span>
                <X className="w-4 h-4 text-slate-500" />
              </button>
            </div>
          </div>

          {/* Modal Content Area */}
          <div className={`overflow-y-auto flex-1 ${activeTab === 'images' ? '' : 'p-6 space-y-6'}`}>
            
            {/* VIEW 1: 图片展示 / 飞书幻灯片展示 */}
            {activeTab === 'images' && (
              <div className="w-full h-full flex flex-col items-center">
                {(() => {
                  // If project has Feishu iframe / presentation URL
                  if (project.iframeUrl) {
                    return (
                      <div className="w-full h-[72vh] min-h-[580px] bg-slate-50 flex flex-col">
                        <iframe
                          src={project.iframeUrl}
                          title={project.title}
                          className="w-full h-full border-0 bg-white"
                          allow="autoplay; fullscreen"
                          sandbox="allow-scripts allow-same-origin allow-popups allow-forms"
                        />
                      </div>
                    );
                  }

                  const isMultiImageProject = Array.isArray(project.additionalImages);
                  const validAdditionalImages = (project.additionalImages || []).filter(
                    (img) => !brokenImages.has(img)
                  );
                  const showcaseUrl = project.hiFiUrl || project.coverImage || project.thumbnail;

                  if (isMultiImageProject) {
                    if (validAdditionalImages.length === 0) {
                      return (
                        <div className="py-24 px-6 text-center text-slate-400 flex flex-col items-center justify-center">
                          <p className="text-sm font-medium">
                            {lang === 'zh-CN' ? '该案例暂无展示图片' : lang === 'zh-TW' ? '該案例暫無展示圖片' : 'No showcase images available'}
                          </p>
                          <button
                            onClick={() => setActiveTab('desc')}
                            className="mt-4 px-4 py-2 text-xs font-semibold bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors"
                          >
                            {lang === 'zh-CN' ? '查看案例详情' : lang === 'zh-TW' ? '查看案例詳情' : 'View Case Details'}
                          </button>
                        </div>
                      );
                    }

                    return (
                      <div className="w-full flex flex-col items-center bg-black p-0">
                        {validAdditionalImages.map((imgUrl, idx) => (
                          <img
                            key={imgUrl}
                            src={imgUrl}
                            alt={`${project.title} showcase ${idx + 1}`}
                            className="w-full h-auto block select-none"
                            referrerPolicy="no-referrer"
                            onError={() => handleImageError(imgUrl)}
                          />
                        ))}
                      </div>
                    );
                  }

                  // Single-image project fallback
                  if (showcaseUrl && !brokenImages.has(showcaseUrl)) {
                    return (
                      <div className="w-full flex flex-col items-center bg-black p-0">
                        <img
                          src={showcaseUrl}
                          alt={project.title}
                          className="w-full h-auto block select-none"
                          referrerPolicy="no-referrer"
                          onError={() => handleImageError(showcaseUrl)}
                        />
                      </div>
                    );
                  }

                  return (
                    <div className="py-24 px-6 text-center text-slate-400">
                      <p className="text-sm font-medium">
                        {lang === 'zh-CN' ? '该案例暂无展示图片' : lang === 'zh-TW' ? '該案例暫無展示圖片' : 'No showcase images available'}
                      </p>
                    </div>
                  );
                })()}
              </div>
            )}

            {/* VIEW 2: 项目描述 (纯文字描述) */}
            {activeTab === 'desc' && (
              <div className="space-y-6 sm:space-y-8">
                
                {/* Title & Tagline Banner */}
                <div className="space-y-2">
                  <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">
                    {project.title}
                  </h2>
                </div>

                {/* Detailed Overview */}
                <div className="space-y-2">
                  <h4 className="text-xs font-mono font-bold text-slate-900 uppercase tracking-wider flex items-center gap-1.5">
                    <span className="w-2 h-2" style={{ backgroundColor: accentHex }} />
                    <span>{t.overview[lang]}</span>
                  </h4>
                  {renderFormattedContent(project.description[lang])}
                </div>

                {/* Tags / Keywords */}
                <div className="space-y-2 pt-2 border-t border-slate-100">
                  <div className="flex flex-wrap items-center gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-slate-500 text-xs font-mono hover:text-slate-800 transition-colors cursor-default"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>

              </div>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
