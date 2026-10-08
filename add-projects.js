const fs = require('fs');

let content = fs.readFileSync('src/data/projectsData.ts', 'utf-8');
const searchStr = "  },\n];\n\nexport const skillCategoriesData";
const idx = content.indexOf(searchStr);

if (idx !== -1) {
  let projectTemplate = `
  {
    id: 'placeholder-PROJECT_NUM',
    title: 'Placeholder Project PROJECT_NUM',
    tagline: {
      en: 'A placeholder project added automatically.',
      'zh-CN': '自动添加的占位项目。',
      'zh-TW': '自動添加的佔位項目。',
    },
    category: 'aigc',
    categoryLabel: {
      en: 'AIGC',
      'zh-CN': 'AIGC',
      'zh-TW': 'AIGC',
    },
    tags: ['Placeholder', 'UI', 'Design'],
    year: '2026',
    client: 'Placeholder Client',
    role: {
      en: 'Designer',
      'zh-CN': '设计师',
      'zh-TW': '設計師',
    },
    thumbnail: 'https://picsum.photos/seed/PROJECT_NUM/1200/800',
    coverImage: 'https://picsum.photos/seed/PROJECT_NUM/1200/800',
    featured: false,
    metrics: [
      { label: 'Placeholder Metric', value: '100%' },
    ],
    description: {
      en: 'This is a placeholder description for the newly added project.',
      'zh-CN': '这是新添加项目的占位说明。',
      'zh-TW': '這是新添加項目的佔位說明。',
    },
    problem: {
      en: 'Placeholder problem statement.',
      'zh-CN': '占位问题陈述。',
      'zh-TW': '佔位問題陳述。',
    },
    solution: {
      en: 'Placeholder solution statement.',
      'zh-CN': '占位解决方案。',
      'zh-TW': '佔位解決方案。',
    },
    tokens: [
      { name: 'Color A', hex: '#FFFFFF', category: 'surface' },
      { name: 'Color B', hex: '#000000', category: 'text' },
    ],
  }`;

  let newProjects = '';
  for (let i = 1; i <= 9; i++) {
    newProjects += ',' + projectTemplate.replace(/PROJECT_NUM/g, i);
  }

  const before = content.slice(0, idx + 4);
  const after = content.slice(idx + 4);

  fs.writeFileSync('src/data/projectsData.ts', before + newProjects + after, 'utf-8');
  console.log('Added 9 projects');
} else {
  console.log('Could not find the insertion point');
}
