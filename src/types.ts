export type Language = 'en' | 'zh-CN' | 'zh-TW';

export type AccentColor = 'blue' | 'emerald' | 'indigo' | 'violet';

export type ProjectCategory = 'all' | 'independent-site' | 'amazon' | 'graphic-design' | 'aigc' | 'product-video';

export interface ProjectMetric {
  label: string;
  value: string;
}

export interface DesignToken {
  name: string;
  hex: string;
  category: 'primary' | 'surface' | 'accent' | 'text';
}

export interface Project {
  id: string;
  title: string;
  tagline: {
    en: string;
    'zh-CN': string;
    'zh-TW': string;
  };
  category: ProjectCategory;
  categoryLabel: {
    en: string;
    'zh-CN': string;
    'zh-TW': string;
  };
  tags: string[];
  year: string;
  client: string;
  role: {
    en: string;
    'zh-CN': string;
    'zh-TW': string;
  };
  thumbnail: string;
  coverImage: string;
  metrics: ProjectMetric[];
  description: {
    en: string;
    'zh-CN': string;
    'zh-TW': string;
  };
  problem: {
    en: string;
    'zh-CN': string;
    'zh-TW': string;
  };
  solution: {
    en: string;
    'zh-CN': string;
    'zh-TW': string;
  };
  interactivePreviewType: 'ai-prompt' | 'fintech-chart' | 'spatial-toggle' | 'color-system';
  tokens: DesignToken[];
  wireframeUrl: string;
  hiFiUrl: string;
  iframeUrl?: string;
  additionalImages?: string[];
  featured?: boolean;
}

export interface SkillCategory {
  title: {
    en: string;
    'zh-CN': string;
    'zh-TW': string;
  };
  skills: {
    name: string;
    level: number; // 0 - 100
    icon: string;
    description: {
      en: string;
      'zh-CN': string;
      'zh-TW': string;
    };
  }[];
}

export interface TimelineItem {
  id: string;
  year: string;
  period: string;
  company: string;
  location: string;
  role: {
    en: string;
    'zh-CN': string;
    'zh-TW': string;
  };
  description: {
    en: string;
    'zh-CN': string;
    'zh-TW': string;
  };
  highlights: {
    en: string[];
    'zh-CN': string[];
    'zh-TW': string[];
  };
  tags: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  avatar: string;
  quote: {
    en: string;
    'zh-CN': string;
    'zh-TW': string;
  };
  rating: number;
}
