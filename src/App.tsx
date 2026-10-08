import React, { useState } from 'react';
import { Language, AccentColor, Project } from './types';
import { projectsData } from './data/projectsData';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Showcase } from './components/Showcase';
import { ProjectModal } from './components/ProjectModal';
import { ExperienceTimeline, DisciplineCategory } from './components/ExperienceTimeline';
import { ContactSection } from './components/ContactSection';
import { SelectedWorkIntro } from './components/SelectedWorkIntro';
import { FeaturedCampaignKV } from './components/FeaturedCampaignKV';
import { FeaturedCase02 } from './components/FeaturedCase02';
import { Footer } from './components/Footer';
import { GridOverlay } from './components/GridOverlay';

export default function App() {
  const [lang, setLang] = useState<Language>('zh-CN');
  const [accent, setAccent] = useState<AccentColor>('blue');
  const [selectedProjectId, setSelectedProjectId] = useState<string | null>(null);
  const [activeDiscipline, setActiveDiscipline] = useState<DisciplineCategory>('all');
  const [showGrid, setShowGrid] = useState(false);

  const selectedProject = selectedProjectId
    ? (projectsData.find((p) => p.id === selectedProjectId) || null)
    : null;

  const accentHexMap: Record<AccentColor, string> = {
    blue: '#2563EB',
    emerald: '#059669',
    indigo: '#4F46E5',
    violet: '#7C3AED',
  };

  const currentAccentHex = accentHexMap[accent];

  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-blue-600 selection:text-white antialiased relative">
      
      {/* 12-Column Grid System Overlay */}
      <GridOverlay visible={showGrid} onClose={() => setShowGrid(false)} />

      {/* Navigation Header */}
      <Navbar
        lang={lang}
        setLang={setLang}
        accent={accent}
        setAccent={setAccent}
        accentHex={currentAccentHex}
        showGrid={showGrid}
        onToggleGrid={() => setShowGrid((prev) => !prev)}
      />

      {/* Main Content Sections */}
      <main>
        {/* Page 1: Hero Section */}
        <Hero lang={lang} accentHex={currentAccentHex} />

        {/* Page 2: Profile & Personal Info (01 ABOUT THE DESIGNER) */}
        <ContactSection
          lang={lang}
          accentHex={currentAccentHex}
        />

        {/* Page 3: Selected Work Intro (02 SELECTED WORK) */}
        <SelectedWorkIntro
          lang={lang}
          accentHex={currentAccentHex}
        />

        {/* Page 4: Featured Case 01 - 大促活动 KV (Valentine Campaign Showcase) */}
        <FeaturedCampaignKV
          lang={lang}
          accentHex={currentAccentHex}
        />

        {/* Page 5: Featured Case 02 - 独立站 / DTC 页面 (Smart Ergonomics DTC System) */}
        <FeaturedCase02
          lang={lang}
          accentHex={currentAccentHex}
        />

        {/* Portfolio Showcase Grid */}
        <Showcase
          onSelectProject={(proj) => setSelectedProjectId(proj.id)}
          lang={lang}
          accentHex={currentAccentHex}
          activeDiscipline={activeDiscipline}
        />

        {/* Page 4: Career Experience & Milestones (03 EXPERIENCE & TOOLKIT) */}
        <ExperienceTimeline
          lang={lang}
          accentHex={currentAccentHex}
          activeDiscipline={activeDiscipline}
          onSelectDiscipline={setActiveDiscipline}
        />
      </main>

      {/* Case Study Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProjectId(null)}
        lang={lang}
        accentHex={currentAccentHex}
      />

    </div>
  );
}
