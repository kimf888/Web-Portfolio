import React from 'react';
import { motion } from 'motion/react';
import { Cpu, Layout, Code, Zap, Palette, Users, Shield, CheckCircle2 } from 'lucide-react';
import { Language } from '../types';
import { skillCategoriesData } from '../data/projectsData';
import { i18n } from '../data/i18n';

interface SkillsSectionProps {
  lang: Language;
  accentHex: string;
}

export const SkillsSection: React.FC<SkillsSectionProps> = ({ lang, accentHex }) => {
  const t = i18n.skills;

  const iconMap: Record<string, any> = {
    Layout,
    Users,
    Cpu,
    Code,
    Zap,
    Palette,
  };

  return (
    <section id="skills" className="py-20 bg-white border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Section Header */}
        <div className="space-y-2 max-w-2xl text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-slate-100 border border-slate-200 text-slate-700 font-mono text-xs font-semibold">
            <Cpu className="w-3.5 h-3.5 text-indigo-600" />
            <span>CAPABILITIES & ARCHITECTURE</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            {t.title[lang]}
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            {t.subtitle[lang]}
          </p>
        </div>

        {/* Technical Capabilities Skill Bars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategoriesData.map((category, catIdx) => (
            <div
              key={catIdx}
              className="bg-slate-50 p-6 sm:p-8 border border-slate-200/90 shadow-2xs space-y-6"
            >
              <h3 className="text-base sm:text-lg font-bold text-slate-900 font-mono border-b border-slate-200 pb-3">
                {category.title[lang]}
              </h3>

              <div className="space-y-5">
                {category.skills.map((skill, skillIdx) => {
                  const Icon = iconMap[skill.icon] || Code;
                  return (
                    <div key={skillIdx} className="space-y-2">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <Icon className="w-4 h-4 text-slate-600" />
                          <span className="font-semibold text-xs sm:text-sm text-slate-800">
                            {skill.name}
                          </span>
                        </div>
                        <span className="font-mono text-xs font-bold text-slate-600">
                          {skill.level}%
                        </span>
                      </div>

                      {/* Animated Progress Bar */}
                      <div className="h-2 w-full bg-slate-200 overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: skillIdx * 0.1 }}
                          className="h-full"
                          style={{ backgroundColor: accentHex }}
                        />
                      </div>

                      <p className="text-[11px] text-slate-500 leading-normal">
                        {skill.description[lang]}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Design Philosophy Cards */}
        <div className="space-y-6 pt-4">
          <h3 className="text-xl font-bold text-slate-900 font-mono tracking-tight">
            {t.philosophyTitle[lang]}
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {t.philosophies.map((item, idx) => (
              <div
                key={idx}
                className="bg-white p-6 border border-slate-200/90 shadow-2xs hover:border-slate-300 transition-all space-y-3"
              >
                <div className="font-mono text-2xl font-black text-slate-300">
                  {item.num}
                </div>
                <h4 className="font-bold text-sm text-slate-900">{item.title[lang]}</h4>
                <p className="text-xs text-slate-600 leading-relaxed font-normal">
                  {item.desc[lang]}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
