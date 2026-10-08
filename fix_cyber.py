import sys

with open('src/data/projectsData.ts', 'r') as f:
    content = f.read()

start = content.find("id: 'cyber-kinetic-branding'")
if start != -1:
    desc_start = content.find("description: {", start)
    desc_end = content.find("    },", desc_start)
    if desc_start != -1 and desc_end != -1:
        new_desc = """description: {
      en: 'A revolutionary light-tech brand system where the logo and grid morph procedurally based on user scroll velocity and viewport position.',
      'zh-CN': '一套前沿的浅色科技动态品牌识别系统。品牌 Logo 与底图网格可根据用户滚动速度与视角动态程序化演化。',
      'zh-TW': '一套前沿的淺色科技動態品牌識別系統。品牌 Logo 與底圖網格可根據用戶滾動速度與視角動態程式化演化。',
"""
        content = content[:desc_start] + new_desc + content[desc_end:]
        
    tagline_start = content.find("tagline: {", start)
    tagline_end = content.find("    },", tagline_start)
    if tagline_start != -1 and tagline_end != -1:
        new_tagline = """tagline: {
      en: 'A dynamic kinetic identity system featuring programmatic SVG vector graphics and generative web tokens.',
      'zh-CN': '基于程序化 SVG 矢量算法与生成式 Web 令牌的动态品牌视觉系统。',
      'zh-TW': '基於程式化 SVG 矢量演算法與生成式 Web 令牌的動態品牌視覺系統。',
"""
        content = content[:tagline_start] + new_tagline + content[tagline_end:]
        
    with open('src/data/projectsData.ts', 'w') as f:
        f.write(content)
    print("Fixed cyber-kinetic-branding")
