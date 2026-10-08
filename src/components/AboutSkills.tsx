import React from 'react';
import { motion } from 'motion/react';
import { Layout, Users, Cpu, Code, Zap, Palette, Compass, CheckCircle2 } from 'lucide-react';
import { Language } from '../types';
import { i18n } from '../data/i18n';
import { skillCategoriesData } from '../data/projectsData';

interface AboutSkillsProps {
  lang: Language;
  accentHex: string;
}

export const AboutSkills: React.FC<AboutSkillsProps> = ({ lang, accentHex }) => {
  const t = i18n.skills;

  const iconMap: Record<string, React.ReactNode> = {
    Layout: <Layout className="w-5 h-5 text-blue-600" />,
    Users: <Users className="w-5 h-5 text-indigo-600" />,
    Cpu: <Cpu className="w-5 h-5 text-emerald-600" />,
    Code: <Code className="w-5 h-5 text-cyan-600" />,
    Zap: <Zap className="w-5 h-5 text-amber-600" />,
    Palette: <Palette className="w-5 h-5 text-violet-600" />,
  };

  return (
    <section id="skills" className="py-16 sm:py-24 bg-white border-b border-slate-200 scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Section Header */}
        <div className="space-y-2 max-w-2xl">
          <div className="inline-flex items-center gap-1.5 text-xs font-mono font-bold tracking-widest text-slate-500 uppercase">
            <span className="w-2 h-2" style={{ backgroundColor: accentHex }} />
            [03 / CAPABILITIES & MINDSET]
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            {t.title[lang]}
          </h2>
          <p className="text-sm sm:text-base text-slate-600">
            {t.subtitle[lang]}
          </p>
        </div>

        {/* Design Philosophy Cards */}
        <div className="space-y-6">
          <h3 className="text-sm font-mono font-bold text-slate-500 uppercase tracking-wider">
            {t.philosophyTitle[lang]}
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {t.philosophies.map((item) => (
              <div
                key={item.num}
                className="bg-slate-50 border border-slate-200 p-5 space-y-3 hover:border-slate-300 transition-colors"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xl font-mono font-extrabold text-slate-300">
                    {item.num}
                  </span>
                  <span className="w-2 h-2" style={{ backgroundColor: accentHex }} />
                </div>
                <h4 className="text-base font-extrabold text-slate-900 tracking-tight">
                  {item.title[lang]}
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed font-normal">
                  {item.desc[lang]}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Skill Matrix Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {skillCategoriesData.map((cat, idx) => (
            <div
              key={idx}
              className="bg-slate-50 border border-slate-200 p-6 space-y-6"
            >
              <h3 className="text-lg font-extrabold text-slate-900 flex items-center gap-2">
                <Compass className="w-5 h-5 text-slate-700" />
                <span>{cat.title[lang]}</span>
              </h3>

              <div className="space-y-5">
                {cat.skills.map((skill) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2.5">
                        {iconMap[skill.icon]}
                        <span className="text-xs font-bold text-slate-900">
                          {skill.name}
                        </span>
                      </div>
                      <span className="text-xs font-mono font-bold text-slate-600">
                        {skill.level}%
                      </span>
                    </div>

                    <p className="text-[11px] text-slate-500">
                      {skill.description[lang]}
                    </p>

                    {/* Progress Bar */}
                    <div className="h-1.5 w-full bg-slate-200 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: 'easeOut' }}
                        className="h-full"
                        style={{ backgroundColor: accentHex }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
