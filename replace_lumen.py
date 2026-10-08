import sys

new_desc_zh_cn = """本项目围绕大唐计算机旗下 Mini PC、嵌入式计算机及工业计算设备展开产品视觉设计，通过产品渲染、场景构建及多场景应用视觉，建立统一的产品展示体系。

项目的核心目标是解决传统工业计算机产品在视觉表达上的两个问题：一是产品本身具有较强的技术属性，外观和功能信息相对理性；二是不同产品型号、不同应用场景之间缺乏统一的视觉语言。因此在设计过程中，以产品本身为视觉主体，结合不同使用场景进行延展，通过材质、灯光、空间结构和色彩氛围强化产品的科技属性，同时保持产品外观、结构及接口细节的准确呈现。"""

new_desc_zh_tw = """本項目圍繞大唐計算機旗下 Mini PC、嵌入式計算機及工業計算設備展開產品視覺設計，通過產品渲染、場景構建及多場景應用視覺，建立統一的產品展示體系。

項目的核心目標是解決傳統工業計算機產品在視覺表達上的兩個問題：一是產品本身具有較強的技術屬性，外觀和功能信息相對理性；二是不同產品型號、不同應用場景之間缺乏統一的視覺語言。因此在設計過程中，以產品本身為視覺主體，結合不同使用場景進行延展，通過材質、燈光、空間結構和色彩氛圍強化產品的科技屬性，同時保持產品外觀、結構及接口細節的準確呈現。"""

new_desc_en = """This project focuses on the product visual design for Datang Computer's Mini PCs, embedded computers, and industrial computing devices. Through product rendering, scene construction, and multi-scenario application visuals, it establishes a unified product display system.

The core objective of the project is to solve two problems in the visual expression of traditional industrial computer products: first, the product itself has strong technical attributes, and its appearance and functional information are relatively rational; second, there is a lack of a unified visual language among different product models and different application scenarios. Therefore, in the design process, the product itself is used as the visual subject, extending into different usage scenarios. Through materials, lighting, spatial structure, and color atmosphere, the technological attributes of the product are enhanced while maintaining the accurate presentation of the product's appearance, structure, and interface details."""

with open('src/data/projectsData.ts', 'r') as f:
    content = f.read()

start = content.find("id: 'lumen-health-mobile',")
if start != -1:
    # Update tagline
    tagline_start = content.find("tagline: {", start)
    tagline_end = content.find("    },", tagline_start)
    if tagline_start != -1 and tagline_end != -1:
        new_tagline = """tagline: {
      en: 'Focusing on the product visual design for Datang Computer hardware, establishing a unified product display system through rendering and scene construction.',
      'zh-CN': '围绕大唐计算机旗下硬件设备展开产品视觉设计，通过产品渲染与场景构建建立统一的产品展示体系。',
      'zh-TW': '圍繞大唐計算機旗下硬件設備展開產品視覺設計，通過產品渲染與場景構建建立統一的產品展示體系。',
"""
        content = content[:tagline_start] + new_tagline + content[tagline_end:]

    # refresh start since length changed
    start = content.find("id: 'lumen-health-mobile',")

    # Update description
    desc_start = content.find("description: {", start)
    desc_end = content.find("    },", desc_start)
    if desc_start != -1 and desc_end != -1:
        new_desc = f"""description: {{
      en: `{new_desc_en}`,
      'zh-CN': `{new_desc_zh_cn}`,
      'zh-TW': `{new_desc_zh_tw}`,
"""
        content = content[:desc_start] + new_desc + content[desc_end:]

    # refresh start since length changed
    start = content.find("id: 'lumen-health-mobile',")

    # Update tags
    tags_start = content.find("tags: ['Health Tech', 'iOS App', 'Micro-interactions', 'Accessibility AA+'],", start)
    if tags_start != -1:
        content = content[:tags_start] + "tags: ['Product Rendering', '3D Modeling', 'Scene Construction', 'Visual System']," + content[tags_start + len("tags: ['Health Tech', 'iOS App', 'Micro-interactions', 'Accessibility AA+'],"):]

    # Update role
    role_start = content.find("role: {", start)
    role_end = content.find("    },", role_start)
    if role_start != -1 and role_end != -1:
        new_role = """role: {
      en: 'Lead Visual Designer',
      'zh-CN': '主导视觉设计师',
      'zh-TW': '主導視覺設計師',"""
        content = content[:role_start] + new_role + content[role_end:]

    with open('src/data/projectsData.ts', 'w') as f:
        f.write(content)
    print("Project lumen-health-mobile updated.")
else:
    print("Project lumen-health-mobile not found.")
