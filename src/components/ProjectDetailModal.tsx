import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ExternalLink, Check, Copy, Sparkles, Layers, Sliders, Cpu, Activity, RefreshCw, FileText, ArrowUpRight, BookOpen } from 'lucide-react';
import { Language, Project } from '../types';
import { i18n } from '../data/i18n';

interface ProjectDetailModalProps {
  project: Project | null;
  onClose: () => void;
  lang: Language;
  accentHex: string;
}

export const ProjectDetailModal: React.FC<ProjectDetailModalProps> = ({
  project,
  onClose,
  lang,
  accentHex,
}) => {
  if (!project) return null;

  const t = i18n.modal;
  const [activeTab, setActiveTab] = useState<'overview' | 'prototype' | 'tokens' | 'wireframe'>('overview');
  const [copiedToken, setCopiedToken] = useState<string | null>(null);

  // Interactive prototype state
  const [aiPrompt, setAiPrompt] = useState('Generate a flat tech UI system for AI node graphs...');
  const [aiResponse, setAiResponse] = useState<string | null>(null);
  const [aiLoading, setAiLoading] = useState(false);

  const [tradeVolume, setTradeVolume] = useState(1250);
  const [spatialMode, setSpatialMode] = useState<'2d' | '3d'>('2d');
  const [wireframePos, setWireframePos] = useState(50); // Slider percentage

  const handleCopy = (hex: string) => {
    navigator.clipboard.writeText(hex);
    setCopiedToken(hex);
    setTimeout(() => setCopiedToken(null), 2000);
  };

  const handleRunAiPrompt = () => {
    if (!aiPrompt.trim()) return;
    setAiLoading(true);
    setAiResponse(null);
    setTimeout(() => {
      setAiLoading(false);
      setAiResponse(
        `✓ GENERATED FLAT TECH NODE [ID: #AI-${Math.floor(Math.random() * 8999 + 1000)}]\n• Surface: #F8FAFC\n• Status: WCAG AA+ Passed (12.4:1)\n• Micro-motion: Spring(stiffness: 300, damping: 25)`
      );
    }, 800);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6 bg-slate-900/60 backdrop-blur-xs overflow-y-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 12 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: 12 }}
          className="bg-white border border-slate-200 shadow-2xl w-full max-w-4xl max-h-[90vh] flex flex-col overflow-hidden text-slate-900 my-auto"
        >
          {/* Modal Top Header Bar */}
          <div className="flex items-center justify-between p-4 sm:p-5 border-b border-slate-200 bg-slate-50/80">
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <span className="px-2 py-0.5 bg-slate-900 text-white font-mono text-[10px] font-bold">
                  {project.year}
                </span>
                <span className="text-xs font-mono text-slate-500 font-semibold uppercase">
                  {project.client}
                </span>
              </div>
              <h2 className="text-lg sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                {project.title}
              </h2>
            </div>

            <div className="flex items-center gap-2">
              {project.iframeUrl && (
                <a
                  href={project.iframeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-slate-900 text-white hover:bg-slate-800 text-xs font-mono font-medium transition-colors"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  <span>
                    {project.iframeUrl.includes('/slides/')
                      ? (lang === 'en' ? 'Open Slides' : lang === 'zh-CN' ? '查看飞书幻灯片' : '查看飛書投影片')
                      : (lang === 'en' ? 'Open Document' : lang === 'zh-CN' ? '查看飞书文档' : '查看飛書文檔')}
                  </span>
                </a>
              )}
              <button
                onClick={onClose}
                className="p-2 bg-white border border-slate-200 text-slate-500 hover:text-slate-900 hover:bg-slate-100 transition-colors"
                title={t.close[lang]}
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Modal Tab Navigation Bar */}
          <div className="flex items-center gap-1 p-2 bg-slate-100/80 border-b border-slate-200 overflow-x-auto text-xs font-medium">
            <button
              onClick={() => setActiveTab('overview')}
              className={`px-3 py-1.5  transition-colors whitespace-nowrap ${
                activeTab === 'overview'
                  ? 'bg-white text-slate-900 font-bold shadow-2xs border border-slate-200'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              {t.overview[lang]}
            </button>

            <button
              onClick={() => setActiveTab('prototype')}
              className={`px-3 py-1.5  transition-colors flex items-center gap-1.5 whitespace-nowrap ${
                activeTab === 'prototype'
                  ? 'bg-white text-slate-900 font-bold shadow-2xs border border-slate-200'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <Sparkles className="w-3.5 h-3.5 text-amber-500" />
              <span>{t.interactiveTab[lang]}</span>
            </button>

            <button
              onClick={() => setActiveTab('tokens')}
              className={`px-3 py-1.5  transition-colors flex items-center gap-1.5 whitespace-nowrap ${
                activeTab === 'tokens'
                  ? 'bg-white text-slate-900 font-bold shadow-2xs border border-slate-200'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <Layers className="w-3.5 h-3.5 text-blue-500" />
              <span>{t.tokensTab[lang]}</span>
            </button>

            <button
              onClick={() => setActiveTab('wireframe')}
              className={`px-3 py-1.5  transition-colors flex items-center gap-1.5 whitespace-nowrap ${
                activeTab === 'wireframe'
                  ? 'bg-white text-slate-900 font-bold shadow-2xs border border-slate-200'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <Sliders className="w-3.5 h-3.5 text-indigo-500" />
              <span>{t.wireframeTab[lang]}</span>
            </button>
          </div>

          {/* Modal Content Scroll Area */}
          <div className="p-5 sm:p-6 overflow-y-auto space-y-6 flex-1">
            
            {/* TAB 1: OVERVIEW */}
            {activeTab === 'overview' && (
              <div className="space-y-6">
                {/* Cover Image Banner or Feishu Document Preview */}
                {project.iframeUrl ? (
                  <div className="border border-slate-200 bg-slate-900 overflow-hidden text-white">
                    {/* Feishu Header Bar */}
                    <div className="p-3.5 bg-slate-900 border-b border-slate-800 flex flex-wrap items-center justify-between gap-3">
                      <div className="flex items-center gap-2.5">
                        <div className="w-7 h-7 bg-blue-600/20 border border-blue-500/40 text-blue-400 flex items-center justify-center">
                          <BookOpen className="w-4 h-4" />
                        </div>
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="text-[10px] font-mono px-1.5 py-0.5 bg-blue-500/20 text-blue-300 font-bold uppercase">
                              {project.iframeUrl.includes('/slides/')
                                ? 'FEISHU SLIDES'
                                : project.iframeUrl.includes('/wiki/')
                                ? 'FEISHU WIKI DOC'
                                : project.iframeUrl.includes('/file/')
                                ? 'FEISHU PRODUCT BROCHURE'
                                : 'FEISHU DOC'}
                            </span>
                            <span className="text-xs font-mono font-bold text-white">
                              {project.iframeUrl.includes('/slides/')
                                ? (lang === 'en' ? 'Online Presentation & Video Brief' : lang === 'zh-CN' ? '飞书在线幻灯片与视频拍摄策划案' : '飛書在線投影片與影片拍攝策劃案')
                                : project.iframeUrl.includes('/wiki/')
                                ? (lang === 'en' ? 'Online Assembly Manual' : lang === 'zh-CN' ? '飞书在线使用与安装说明书' : '飛書在線使用與安裝說明書')
                                : project.iframeUrl.includes('/file/')
                                ? (lang === 'en' ? 'Corporate Product Brochure (Feishu)' : lang === 'zh-CN' ? '飞书在线企业产品手册' : '飛書在線企業產品手冊')
                                : (lang === 'en' ? 'Feishu Cloud Document' : lang === 'zh-CN' ? '飞书云端在线文档' : '飛書雲端在線文檔')}
                            </span>
                          </div>
                          <span className="text-[11px] font-mono text-slate-400 hidden sm:inline block truncate max-w-md">
                            {project.iframeUrl}
                          </span>
                        </div>
                      </div>

                      <a
                        href={project.iframeUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white font-mono text-xs font-bold transition-all shadow-md active:scale-95"
                      >
                        <span>
                          {project.iframeUrl.includes('/slides/')
                            ? (lang === 'en' ? 'Open Slides in Feishu' : lang === 'zh-CN' ? '在新窗口打开飞书幻灯片' : '在新視窗打開飛書投影片')
                            : project.iframeUrl.includes('/wiki/')
                            ? (lang === 'en' ? 'Open in Feishu Wiki' : lang === 'zh-CN' ? '在新窗口打开飞书完整文档' : '在新視窗打開飛書完整文檔')
                            : (lang === 'en' ? 'Open File in Feishu' : lang === 'zh-CN' ? '在新窗口打开飞书手册/文件' : '在新視窗打開飛書手冊/文件')}
                        </span>
                        <ArrowUpRight className="w-4 h-4" />
                      </a>
                    </div>

                    {/* Document Embed Frame & Interactive Card */}
                    <div className="relative w-full aspect-16/9 bg-slate-950 flex flex-col">
                      <iframe
                        src={project.iframeUrl}
                        title={project.title}
                        className="w-full h-full border-0 bg-white"
                        sandbox="allow-scripts allow-same-origin allow-popups allow-forms"
                      />
                      <div className="p-3 bg-slate-950/95 border-t border-slate-800 flex items-center justify-between text-xs font-mono">
                        <div className="flex items-center gap-2 text-slate-400">
                          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                          <span>{lang === 'en' ? 'Document Link Active' : lang === 'zh-CN' ? '飞书文档链接正常' : '飛書文檔鏈接正常'}</span>
                        </div>
                        <a
                          href={project.iframeUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-400 hover:text-blue-300 font-bold underline flex items-center gap-1"
                        >
                          <span>{lang === 'en' ? 'Click to Read Directly' : lang === 'zh-CN' ? '点击全屏直达阅读 ↗' : '點擊全屏直達閱讀 ↗'}</span>
                        </a>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="overflow-hidden border border-slate-200 aspect-16/9 bg-slate-100">
                    <img
                      src={project.coverImage}
                      alt={project.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}

                {/* Key Metrics Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {project.metrics.map((m, idx) => (
                    <div key={idx} className="bg-slate-50 p-4 border border-slate-200 space-y-1">
                      <div className="text-xs font-mono text-slate-500">{m.label}</div>
                      <div className="text-xl font-extrabold font-mono text-slate-900" style={{ color: accentHex }}>
                        {m.value}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Problem vs Solution */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-rose-50/50 p-4 border border-rose-100 space-y-2">
                    <h4 className="text-xs font-mono font-bold text-rose-800 uppercase tracking-wider">
                      [01] {t.problem[lang]}
                    </h4>
                    <p className="text-xs text-slate-700 leading-relaxed font-normal">
                      {project.problem[lang]}
                    </p>
                  </div>

                  <div className="bg-emerald-50/50 p-4 border border-emerald-100 space-y-2">
                    <h4 className="text-xs font-mono font-bold text-emerald-800 uppercase tracking-wider">
                      [02] {t.solution[lang]}
                    </h4>
                    <p className="text-xs text-slate-700 leading-relaxed font-normal">
                      {project.solution[lang]}
                    </p>
                  </div>
                </div>

                {/* Description & Metadata */}
                <div className="space-y-3 pt-2 border-t border-slate-200">
                  <h4 className="text-xs font-mono font-bold text-slate-500 uppercase tracking-wider">
                    [PROJECT BREAKDOWN]
                  </h4>
                  <p className="text-sm text-slate-700 leading-relaxed">
                    {project.description[lang]}
                  </p>
                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.tags.map((tag) => (
                      <span key={tag} className="px-2.5 py-1 bg-slate-100 border border-slate-200 text-xs font-mono text-slate-700">
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Additional Images Gallery */}
                {project.additionalImages && project.additionalImages.length > 0 && (
                  <div className="space-y-4 pt-6 border-t border-slate-200 mt-6">
                    <h4 className="text-xs font-mono font-bold text-slate-500 uppercase tracking-wider">
                      [SHOWCASE GALLERY]
                    </h4>
                    <div className="flex flex-col gap-4">
                      {project.additionalImages.map((img, idx) => (
                        <div key={idx} className="overflow-hidden border border-slate-200 bg-slate-100">
                          <img
                            src={img}
                            alt={`${project.title} gallery ${idx + 1}`}
                            referrerPolicy="no-referrer"
                            className="w-full h-auto object-cover"
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* TAB 2: INTERACTIVE PROTOTYPE SANDBOX */}
            {activeTab === 'prototype' && (
              <div className="space-y-5">
                <div className="p-4 bg-slate-900 text-slate-100 space-y-4">
                  <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                    <div className="flex items-center gap-2">
                      <Cpu className="w-4 h-4 text-emerald-400" />
                      <span className="text-xs font-mono font-bold tracking-wider text-emerald-400">
                        LIVE INTERACTIVE PROTOTYPE SANDBOX
                      </span>
                    </div>
                    <span className="text-[10px] font-mono text-slate-400">
                      EMBEDDED REACT COMPONENT
                    </span>
                  </div>

                  {/* Widget variation based on project type */}
                  {project.interactivePreviewType === 'ai-prompt' && (
                    <div className="space-y-3">
                      <label className="text-xs font-mono text-slate-300 block">
                        Test AI Canvas Prompt Command:
                      </label>
                      <div className="flex gap-2">
                        <input
                          type="text"
                          value={aiPrompt}
                          onChange={(e) => setAiPrompt(e.target.value)}
                          className="flex-1 bg-slate-800 border border-slate-700 px-3 py-2 text-xs text-white focus:outline-hidden focus:border-blue-500 font-mono"
                          placeholder="Type prompt..."
                        />
                        <button
                          onClick={handleRunAiPrompt}
                          disabled={aiLoading}
                          className="px-4 py-2 text-xs font-bold text-white shadow-xs hover:opacity-90 transition-opacity flex items-center gap-1.5"
                          style={{ backgroundColor: accentHex }}
                        >
                          {aiLoading ? <RefreshCw className="w-3.5 h-3.5 animate-spin" /> : <Sparkles className="w-3.5 h-3.5" />}
                          <span>Execute Node</span>
                        </button>
                      </div>

                      {aiResponse && (
                        <div className="p-3 bg-slate-800/90 border border-slate-700 text-xs font-mono text-emerald-300 whitespace-pre-wrap leading-relaxed animate-fade-in">
                          {aiResponse}
                        </div>
                      )}
                    </div>
                  )}

                  {project.interactivePreviewType === 'fintech-chart' && (
                    <div className="space-y-4">
                      <div className="flex items-center justify-between text-xs font-mono">
                        <span className="text-slate-400">Simulate Order Volume ($K):</span>
                        <span className="font-bold text-emerald-400">${tradeVolume}K</span>
                      </div>
                      <input
                        type="range"
                        min="100"
                        max="5000"
                        step="50"
                        value={tradeVolume}
                        onChange={(e) => setTradeVolume(Number(e.target.value))}
                        className="w-full h-1.5 bg-slate-800 appearance-none cursor-pointer accent-emerald-500"
                      />
                      <div className="p-4 bg-slate-800 border border-slate-700 grid grid-cols-3 gap-3 text-center font-mono">
                        <div>
                          <div className="text-[10px] text-slate-400">LATENCY</div>
                          <div className="text-sm font-bold text-emerald-400">11.8ms</div>
                        </div>
                        <div>
                          <div className="text-[10px] text-slate-400">MARGIN IMPACT</div>
                          <div className="text-sm font-bold text-blue-400">+{(tradeVolume * 0.012).toFixed(1)}%</div>
                        </div>
                        <div>
                          <div className="text-[10px] text-slate-400">STATUS</div>
                          <div className="text-sm font-bold text-emerald-400">EXEC HIGH</div>
                        </div>
                      </div>
                    </div>
                  )}

                  {(project.interactivePreviewType === 'spatial-toggle' || project.interactivePreviewType === 'color-system') && (
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-mono text-slate-300">Toggle Viewport Layer Mode:</span>
                        <div className="flex gap-1 bg-slate-800 p-1">
                          <button
                            onClick={() => setSpatialMode('2d')}
                            className={`px-3 py-1  text-xs font-mono font-bold transition-colors ${
                              spatialMode === '2d' ? 'bg-blue-600 text-white' : 'text-slate-400'
                            }`}
                          >
                            2D Flat Grid
                          </button>
                          <button
                            onClick={() => setSpatialMode('3d')}
                            className={`px-3 py-1  text-xs font-mono font-bold transition-colors ${
                              spatialMode === '3d' ? 'bg-blue-600 text-white' : 'text-slate-400'
                            }`}
                          >
                            3D Depth Tilt
                          </button>
                        </div>
                      </div>

                      <div
                        className={`p-6 bg-slate-800  border border-slate-700 flex items-center justify-center transition-all duration-300 ${
                          spatialMode === '3d' ? 'scale-105 rotate-x-6 rotate-y-6 shadow-2xl' : 'scale-100'
                        }`}
                      >
                        <div className="bg-white text-slate-900 p-4 shadow-md border border-slate-200 space-y-2 max-w-sm w-full">
                          <div className="text-xs font-bold font-mono text-blue-600">
                            [SPATIAL COMPONENT]
                          </div>
                          <div className="text-sm font-extrabold">{project.title}</div>
                          <div className="text-xs text-slate-500 font-mono">
                            Layer Elevation: {spatialMode === '3d' ? 'Z-Depth +24px' : 'Z-Depth 0px'}
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                </div>
              </div>
            )}

            {/* TAB 3: DESIGN TOKENS */}
            {activeTab === 'tokens' && (
              <div className="space-y-4">
                <div className="text-xs font-mono text-slate-500">
                  Click any hex token to copy code to clipboard:
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {project.tokens.map((token) => (
                    <div
                      key={token.name}
                      onClick={() => handleCopy(token.hex)}
                      className="group p-3 border border-slate-200 bg-slate-50 hover:bg-slate-100 transition-colors cursor-pointer flex items-center justify-between"
                    >
                      <div className="flex items-center gap-3">
                        <span
                          className="w-8 h-8 border border-slate-300 shadow-2xs"
                          style={{ backgroundColor: token.hex }}
                        />
                        <div>
                          <div className="text-xs font-bold text-slate-900">{token.name}</div>
                          <div className="text-[11px] font-mono text-slate-500 uppercase">{token.category}</div>
                        </div>
                      </div>

                      <div className="flex items-center gap-2 font-mono text-xs font-semibold text-slate-700">
                        <span>{token.hex}</span>
                        {copiedToken === token.hex ? (
                          <Check className="w-4 h-4 text-emerald-600" />
                        ) : (
                          <Copy className="w-4 h-4 text-slate-400 group-hover:text-slate-800" />
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* TAB 4: WIREFRAME COMPARISON */}
            {activeTab === 'wireframe' && (
              <div className="space-y-4">
                <div className="text-xs font-mono text-slate-500 flex justify-between">
                  <span>LO-FI WIREFRAME (LEFT)</span>
                  <span>HI-FI FLAT DESIGN (RIGHT)</span>
                </div>

                {/* Slider Comparison Container */}
                <div className="relative overflow-hidden border border-slate-200 aspect-16/9 bg-slate-200 select-none">
                  {/* Hi-Fi Background */}
                  <img
                    src={project.hiFiUrl}
                    alt="Hi-Fi"
                    referrerPolicy="no-referrer"
                    className="absolute inset-0 w-full h-full object-cover"
                  />

                  {/* Lo-Fi Clipped Overlay */}
                  <div
                    className="absolute inset-y-0 left-0 overflow-hidden border-r-2 border-white shadow-xl bg-slate-100"
                    style={{ width: `${wireframePos}%` }}
                  >
                    <img
                      src={project.wireframeUrl}
                      alt="Wireframe"
                      referrerPolicy="no-referrer"
                      className="absolute inset-0 w-full h-full object-cover filter grayscale contrast-125"
                    />
                  </div>

                  {/* Slider Control Handle */}
                  <input
                    type="range"
                    min="0"
                    max="100"
                    value={wireframePos}
                    onChange={(e) => setWireframePos(Number(e.target.value))}
                    className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize"
                  />
                </div>
              </div>
            )}

          </div>

          {/* Modal Footer */}
          <div className="p-4 bg-slate-50 border-t border-slate-200 flex items-center justify-between">
            <span className="text-xs font-mono text-slate-500">
              ROLE: {project.role[lang]}
            </span>
            <button
              onClick={onClose}
              className="px-4 py-2 bg-slate-900 text-white font-bold text-xs hover:bg-slate-800 transition-colors"
            >
              {t.close[lang]}
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
