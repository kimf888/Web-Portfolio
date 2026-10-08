import sys

new_zh_cn = "业务兼顾标准化产品销售与项目定制服务，依靠研发、制造、品质、售后一体化能力，面向工业物联网、商用消费市场提供高可靠、高性价比的计算机硬件整体解决方案。"
new_zh_tw = "業務兼顧標準化產品銷售與項目定制服務，依靠研發、製造、品質、售後一體化能力，面向工業物聯網、商用消費市場提供高可靠、高性價比的計算機硬件整體解決方案。"
new_en = "Balancing standardized product sales with customized project services, we rely on integrated R&D, manufacturing, quality, and after-sales capabilities to provide highly reliable, cost-effective computer hardware solutions for the industrial IoT and commercial consumer markets."

with open('src/data/projectsData.ts', 'r', encoding='utf-8') as f:
    content = f.read()

start = content.find("id: 'kinetic-fintech-platform'")
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
        print("Updated p3 tagline successfully.")
    else:
        print("Could not find tagline block.")
else:
    print("Could not find kinetic-fintech-platform.")
