import sys
import re

with open('src/data/projectsData.ts', 'r') as f:
    content = f.read()

start = content.find("id: 'prism-brand-system'")
if start != -1:
    # Update tags
    tags_start = content.find("tags: ['Design System', 'Tokens Studio', 'TypeScript', 'Tailwind', 'Accessibility'],", start)
    if tags_start != -1:
        content = content[:tags_start] + "tags: ['Brand Identity', 'Layout Design', 'Typography', 'Visual Presentation', 'Product Brochure']," + content[tags_start + len("tags: ['Design System', 'Tokens Studio', 'TypeScript', 'Tailwind', 'Accessibility'],"):]
        
    # Update role
    role_start = content.find("role: {", start)
    role_end = content.find("    },", role_start)
    if role_start != -1 and role_end != -1:
        new_role = """role: {
      en: 'Lead Graphic & Brand Designer',
      'zh-CN': '主导平面与品牌设计师',
      'zh-TW': '主導平面與品牌設計師',"""
        content = content[:role_start] + new_role + content[role_end:]
        
    with open('src/data/projectsData.ts', 'w') as f:
        f.write(content)
    print("Project prism-brand-system metadata updated.")
else:
    print("Project not found.")
