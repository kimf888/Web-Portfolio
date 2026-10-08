import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Calculator, Check, Copy, Send, Sparkles, Sliders } from 'lucide-react';
import { Language } from '../types';
import { i18n } from '../data/i18n';

interface ProjectEstimatorProps {
  lang: Language;
  accentHex: string;
  onSendBriefToContact: (brief: string) => void;
}

export const ProjectEstimator: React.FC<ProjectEstimatorProps> = ({
  lang,
  accentHex,
  onSendBriefToContact,
}) => {
  const t = i18n.estimator;

  const [projectType, setProjectType] = useState<'saas' | 'ds' | 'mobile' | 'spatial'>('saas');
  const [timeline, setTimeline] = useState<'sprint' | 'standard' | 'retainer'>('standard');
  const [deliverables, setDeliverables] = useState<string[]>([
    'figma-tokens',
    'react-code',
    'motion-spec',
  ]);

  const [copiedBrief, setCopiedBrief] = useState(false);

  const projectTypes = [
    { id: 'saas', label: { en: 'AI & SaaS Platform', 'zh-CN': 'AI & SaaS 平台 UI/UX', 'zh-TW': 'AI & SaaS 平台 UI/UX' }, basePrice: 6000 },
    { id: 'ds', label: { en: 'Design System Architecture', 'zh-CN': '企业级设计系统', 'zh-TW': '企業級設計系統' }, basePrice: 8500 },
    { id: 'mobile', label: { en: 'Mobile App Product', 'zh-CN': '移动应用 UI/UX', 'zh-TW': '移動應用 UI/UX' }, basePrice: 5000 },
    { id: 'spatial', label: { en: 'Spatial & 3D Web', 'zh-CN': '空间计算与 3D Web', 'zh-TW': '空間計算與 3D Web' }, basePrice: 9000 },
  ];

  const timelineOptions = [
    { id: 'sprint', label: { en: '2 Weeks Sprint', 'zh-CN': '2 周极速 Sprint', 'zh-TW': '2 週極速 Sprint' }, multiplier: 1.25 },
    { id: 'standard', label: { en: '4-6 Weeks Full Phase', 'zh-CN': '4-6 周标准完整交付', 'zh-TW': '4-6 週標準完整交付' }, multiplier: 1.0 },
    { id: 'retainer', label: { en: 'Quarterly Advisory', 'zh-CN': '季度顾问与深度协同', 'zh-TW': '季度顧問與深度協同' }, multiplier: 1.5 },
  ];

  const deliverableOptions = [
    { id: 'figma-tokens', label: { en: 'Figma Tokens & UI Kit', 'zh-CN': 'Figma 令牌与 UI 组件库', 'zh-TW': 'Figma 令牌與 UI 組件庫' }, addPrice: 1200 },
    { id: 'react-code', label: { en: 'React 19 / Tailwind Code', 'zh-CN': 'React 19 / Tailwind 前端实现', 'zh-TW': 'React 19 / Tailwind 前端實現' }, addPrice: 2000 },
    { id: 'motion-spec', label: { en: 'Framer Motion Physics Spec', 'zh-CN': '物理弹簧动效规范', 'zh-TW': '物理彈簧動效規範' }, addPrice: 800 },
    { id: 'research', label: { en: 'User Research & Testing', 'zh-CN': '用户调研与可用性测试', 'zh-TW': '用戶調研與可用性測試' }, addPrice: 1500 },
  ];

  const toggleDeliverable = (id: string) => {
    setDeliverables((prev) =>
      prev.includes(id) ? prev.filter((d) => d !== id) : [...prev, id]
    );
  };

  // Calculate estimated total
  const selectedTypeObj = projectTypes.find((p) => p.id === projectType);
  const selectedTimeObj = timelineOptions.find((t) => t.id === timeline);
  const deliverablesAddon = deliverableOptions
    .filter((d) => deliverables.includes(d.id))
    .reduce((sum, d) => sum + d.addPrice, 0);

  const basePrice = (selectedTypeObj?.basePrice || 5000) + deliverablesAddon;
  const totalPrice = Math.round(basePrice * (selectedTimeObj?.multiplier || 1.0));

  const generatedProposalText = `[PROPOSAL BRIEF ESTIMATE]
Project Type: ${selectedTypeObj?.label[lang]}
Target Timeline: ${selectedTimeObj?.label[lang]}
Selected Deliverables: ${deliverables.map((d) => deliverableOptions.find((o) => o.id === d)?.label[lang]).join(', ')}
Estimated Investment Range: $${totalPrice.toLocaleString()} - $${Math.round(totalPrice * 1.2).toLocaleString()} USD`;

  const handleCopy = () => {
    navigator.clipboard.writeText(generatedProposalText);
    setCopiedBrief(true);
    setTimeout(() => setCopiedBrief(false), 2000);
  };

  return (
    <section id="estimator" className="py-20 bg-white border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="space-y-2 max-w-2xl text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-slate-100 border border-slate-200 text-slate-700 font-mono text-xs font-semibold">
            <Calculator className="w-3.5 h-3.5 text-emerald-600" />
            <span>INTERACTIVE ESTIMATOR</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            {t.title[lang]}
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            {t.subtitle[lang]}
          </p>
        </div>

        {/* Estimator Configuration Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Options Column */}
          <div className="lg:col-span-7 bg-slate-50 p-6 sm:p-8 border border-slate-200 space-y-8">
            
            {/* Step 1: Project Type */}
            <div className="space-y-3">
              <h3 className="text-xs font-mono font-bold text-slate-800 uppercase tracking-wider">
                {t.selectType[lang]}
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {projectTypes.map((pt) => {
                  const isSelected = projectType === pt.id;
                  return (
                    <button
                      key={pt.id}
                      onClick={() => setProjectType(pt.id as any)}
                      className={`p-3.5  border text-left text-xs font-semibold transition-all ${
                        isSelected
                          ? 'bg-slate-900 text-white border-slate-900 shadow-xs'
                          : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-100'
                      }`}
                    >
                      {pt.label[lang]}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 2: Timeline */}
            <div className="space-y-3">
              <h3 className="text-xs font-mono font-bold text-slate-800 uppercase tracking-wider">
                {t.selectTimeline[lang]}
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                {timelineOptions.map((tl) => {
                  const isSelected = timeline === tl.id;
                  return (
                    <button
                      key={tl.id}
                      onClick={() => setTimeline(tl.id as any)}
                      className={`p-3  border text-left text-xs font-semibold transition-all ${
                        isSelected
                          ? 'bg-slate-900 text-white border-slate-900 shadow-xs'
                          : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-100'
                      }`}
                    >
                      {tl.label[lang]}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 3: Deliverables */}
            <div className="space-y-3">
              <h3 className="text-xs font-mono font-bold text-slate-800 uppercase tracking-wider">
                {t.selectFeatures[lang]}
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {deliverableOptions.map((d) => {
                  const isChecked = deliverables.includes(d.id);
                  return (
                    <button
                      key={d.id}
                      onClick={() => toggleDeliverable(d.id)}
                      className={`p-3  border text-left text-xs font-semibold flex items-center justify-between transition-all ${
                        isChecked
                          ? 'bg-blue-50/80 text-blue-900 border-blue-300'
                          : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-100'
                      }`}
                    >
                      <span>{d.label[lang]}</span>
                      <div
                        className={`w-4 h-4  flex items-center justify-center border transition-colors ${
                          isChecked ? 'bg-blue-600 border-blue-600 text-white' : 'border-slate-300'
                        }`}
                      >
                        {isChecked && <Check className="w-3 h-3" />}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

          </div>

          {/* Proposal Brief & Price Output Card */}
          <div className="lg:col-span-5 bg-white p-6 sm:p-8 border border-slate-200 shadow-lg space-y-6">
            
            <div className="flex items-center justify-between pb-4 border-b border-slate-100">
              <span className="font-mono text-xs font-bold text-slate-800 uppercase tracking-wider">
                {t.estimatedRange[lang]}
              </span>
              <span className="w-2.5 h-2.5 bg-emerald-500 animate-pulse" />
            </div>

            {/* Estimated Total Range Display */}
            <div className="space-y-1">
              <div className="text-3xl sm:text-4xl font-black font-mono text-slate-900" style={{ color: accentHex }}>
                ${totalPrice.toLocaleString()} - ${Math.round(totalPrice * 1.2).toLocaleString()}
              </div>
              <div className="text-xs font-mono text-slate-400 uppercase">
                ESTIMATED INVESTMENT (USD)
              </div>
            </div>

            {/* Brief Output Box */}
            <div className="space-y-1 font-mono text-xs">
              <div className="text-slate-500 font-medium">Generated Brief Summary:</div>
              <pre className="p-3 bg-slate-50 text-slate-700 border border-slate-200 text-[11px] leading-relaxed whitespace-pre-wrap">
                {generatedProposalText}
              </pre>
            </div>

            {/* CTA Buttons */}
            <div className="space-y-2 pt-2">
              <button
                onClick={() => onSendBriefToContact(generatedProposalText)}
                className="w-full py-3.5 px-4 text-xs font-semibold text-white shadow-md flex items-center justify-center gap-2 hover:opacity-90 active:scale-95 transition-all"
                style={{ backgroundColor: accentHex }}
              >
                <Send className="w-3.5 h-3.5" />
                <span>{t.sendWithBrief[lang]}</span>
              </button>

              <button
                onClick={handleCopy}
                className="w-full py-3 px-4 text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 border border-slate-200 transition-all flex items-center justify-center gap-2"
              >
                {copiedBrief ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copiedBrief ? t.briefCopied[lang] : t.generateBrief[lang]}</span>
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
