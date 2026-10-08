import sys

new_en = "Maxtang offers a full range of mini PCs, covering fanless low-power, Intel Core, and AMD Ryzen multi-tier models. Balancing office work, audio-visual entertainment, light content creation, and home servers across various usage scenarios, the compact chassis unleashes powerful performance."
new_zh_cn = "Maxtang 提供全系列迷你主机，覆盖无风扇低功耗、英特尔酷睿、AMD 锐龙多档位机型，兼顾办公、影音娱乐、轻度创作、家庭服务器等多种使用场景，小巧机身释放强劲性能。"
new_zh_tw = "Maxtang 提供全系列迷你主機，覆蓋無風扇低功耗、英特爾酷睿、AMD 銳龍多檔位機型，兼顧辦公、影音娛樂、輕度創作、家庭服務器等多種使用場景，小巧機身釋放強勁性能。"

with open('src/data/projectsData.ts', 'r', encoding='utf-8') as f:
    content = f.read()

start = content.find("id: 'aura-ai-workspace'")
if start != -1:
    tagline_start = content.find("tagline: {", start)
    tagline_end = content.find("    },", tagline_start)
    if tagline_start != -1 and tagline_end != -1:
        new_tagline = f"""tagline: {{
      en: '{new_en}',
      'zh-CN': '{new_zh_cn}',
      'zh-TW': '{new_zh_tw}',"""
        content = content[:tagline_start] + new_tagline + content[tagline_end:]
        with open('src/data/projectsData.ts', 'w', encoding='utf-8') as f:
            f.write(content)
        print("Tagline updated successfully")
    else:
        print("tagline section not found")
else:
    print("Project aura-ai-workspace not found")
