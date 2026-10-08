import sys
import re

with open('src/data/projectsData.ts', 'r') as f:
    content = f.read()

start = content.find("id: 'lumen-health-mobile'")
if start != -1:
    role_start = content.find("role: {", start)
    role_end = content.find("    },", role_start) + 6
    
    # insert missing properties after role
    insertion = """    thumbnail: 'https://i.ibb.co/whVK8ZW0/4.jpg',
    coverImage: 'https://i.ibb.co/tT7gMMXF/1.jpg',
    metrics: [
      { label: 'App Store Rating', value: '4.9★' },
      { label: 'Daily Log Retention', value: '78%' },
      { label: 'EHR Sync Accuracy', value: '99.9%' },
    ],
    description: {
      en: `This project centers on the visual product design for Datang Computer's Mini PCs, embedded computers, and industrial computing devices. Through product rendering, scene construction, and multi-scenario application visuals, it establishes a unified product display system.

The core objective of the project is to address two issues in the visual expression of traditional industrial computer products: first, the products themselves have strong technical attributes, making their appearance and functional information relatively rational; second, there is a lack of a unified visual language across different product models and application scenarios. Therefore, during the design process, the product itself is treated as the visual subject, extended by combining different usage scenarios. Through materials, lighting, spatial structure, and color atmosphere, the technological attributes of the products are enhanced while maintaining accurate presentation of the product's appearance, structure, and interface details.

Based on the positioning and usage environment of different products, a variety of product application scenarios were established, including:

Industrial / Commercial Scenarios: Dominated by white and light gray spaces, reflecting an industrial technological feel through architectural structures, three-dimensional platforms, and linear textures to highlight the product's professional attributes.
Office Scenarios: Combining the Mini PC with monitors, keyboards, mice, and other equipment to simulate a real desktop office environment, reinforcing the product's application attributes in daily work.
Entertainment / Gaming Scenarios: Utilizing dark environments and purple ambient lighting, placing the product within monitor, game screen, and RGB lighting environments to highlight the Mini PC's entertainment and high-performance computing attributes.
Home / Life Scenarios: Softening the sense of distance of industrial equipment through more restrained indoor spaces, desktops, and home elements, presenting a more lifestyle-oriented visual image for the product.`,
      'zh-CN': `本项目围绕大唐计算机旗下 Mini PC、嵌入式计算机及工业计算设备展开产品视觉设计，通过产品渲染、场景构建及多场景应用视觉，建立统一的产品展示体系。

项目的核心目标是解决传统工业计算机产品在视觉表达上的两个问题：一是产品本身具有较强的技术属性，外观和功能信息相对理性；二是不同产品型号、不同应用场景之间缺乏统一的视觉语言。因此在设计过程中，以产品本身为视觉主体，结合不同使用场景进行延展，通过材质、灯光、空间结构和色彩氛围强化产品的科技属性，同时保持产品外观、结构及接口细节的准确呈现。

根据不同产品的定位和使用环境，建立了多种产品应用场景，包括：

工业 / 商业场景：以白色、浅灰色空间为主，通过建筑结构、立体平台和线性纹理体现工业科技感，突出产品的专业属性。
办公场景：将Mini PC与显示器、键盘、鼠标等设备结合，模拟真实桌面办公环境，强化产品在日常工作中的应用属性。
娱乐 / 游戏场景：采用深色环境及紫色氛围光，将产品置于显示器、游戏画面和RGB灯光环境中，突出Mini PC的娱乐及高性能计算属性。
家庭 / 生活场景：通过更加克制的室内空间、桌面及家居元素弱化工业设备的距离感，使产品呈现更加生活化的视觉形象。`,
      'zh-TW': `本項目圍繞大唐計算機旗下 Mini PC、嵌入式計算機及工業計算設備展開產品視覺設計，通過產品渲染、場景構建及多場景應用視覺，建立統一的產品展示體系。

項目的核心目標是解決傳統工業計算機產品在視覺表達上的兩個問題：一是產品本身具有較強的技術屬性，外觀和功能信息相對理性；二是不同產品型號、不同應用場景之間缺乏統一的視覺語言。因此在設計過程中，以產品本身為視覺主體，結合不同使用場景進行延展，通過材質、燈光、空間結構和色彩氛圍強化產品的科技屬性，同時保持產品外觀、結構及接口細節的準確呈現。

根據不同產品的定位和使用環境，建立了多種產品應用場景，包括：

工業 / 商業場景：以白色、淺灰色空間為主，通過建築結構、立體平台和線性紋理體現工業科技感，突出產品的專業屬性。
辦公場景：將Mini PC與顯示器、鍵盤、鼠標等設備結合，模擬真實桌面辦公環境，強化產品在日常工作中的應用屬性。
娛樂 / 遊戲場景：採用深色環境及紫色氛圍光，將產品置於顯示器、遊戲畫面和RGB燈光環境中，突出Mini PC的娛樂及高性能計算屬性。
家庭 / 生活場景：通過更加克制的室內空間、桌面及家居元素弱化工業設備的距離感，使產品呈現更加生活化的視覺形象。`,
    },
"""
    content = content[:role_end] + insertion + content[role_end:]
    
    # We should also fix cyber-kinetic-branding if it lost its description.
    # Wait, did cyber-kinetic-branding lose its description or just get it overwritten?
    # cyber-kinetic-branding got its description overwritten by Datang content.
    # I will fix cyber-kinetic-branding as well.
    with open('src/data/projectsData.ts', 'w') as f:
        f.write(content)
    print("Fixed lumen-health-mobile")
else:
    print("Not found")
