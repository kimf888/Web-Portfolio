import sys

target = '''    description: {
      en: 'Centered around product display needs, created multi-angle product renderings and local detail displays, focusing on the frame structure, wheelset, transmission system, suspension, handlebars, and seat. A complete product visual display system was established through a unified studio-style scene, lighting, and material performance.',
      'zh-CN': '围绕产品展示需求，制作多角度产品渲染图及局部细节展示，重点表现车架结构、轮组、变速系统、避震、把手及座椅等产品细节，并通过统一的摄影棚式场景、光影和材质表现，建立完整的产品视觉展示体系。',
      'zh-TW': '圍繞產品展示需求，製作多角度產品渲染圖及局部細節展示，重點表現車架結構、輪組、變速系統、避震、把手及座椅等產品細節，並通過統一的攝影棚式場景、光影和材質表現，建立完整的產品視覺展示體系。',
    },'''

new_text_zh_cn = """本项目围绕山地自行车产品进行三维视觉表现，通过产品建模、材质制作、灯光搭建与场景渲染，对自行车整体结构及关键零部件进行系统化视觉呈现。

项目以产品本身为核心，采用简洁、干净的浅灰色背景与高质感反射地面，弱化复杂场景元素，使视觉重点集中于产品造型、结构比例及材质细节。通过不同视角的产品展示，对自行车的整体轮廓、车架结构、前后避震、变速系统、轮组、把手及坐垫等主要部件进行多角度呈现。

在产品细节展示部分，通过近景及局部特写强化车架连接、机械结构、轮胎纹理、刹车系统、变速组件以及车把控制区域等细节，使产品不仅具备完整的整体展示，同时能够传达真实的工业设计与产品质感。

整体视觉采用偏产品广告与商业产品摄影的表现方式，通过统一的光影逻辑、材质表现和镜头语言建立系列化视觉效果，使三维渲染结果能够应用于产品宣传、品牌展示、电商详情页、产品画册及视觉作品集等不同场景。"""

new_text_en = """This project focuses on the 3D visual representation of a mountain bike product. Through product modeling, material creation, lighting setup, and scene rendering, it systematically presents the overall structure and key components of the bicycle.

With the product itself at its core, the project utilizes a clean, simple light-gray background with a highly textured reflective ground, minimizing complex scene elements to draw visual focus entirely to the product's shape, structural proportions, and material details. Through multi-angle product displays, major components such as the overall silhouette, frame structure, front and rear suspension, transmission system, wheelset, handlebars, and saddle are comprehensively showcased.

In the detailed product display section, close-ups and local shots are used to emphasize details like frame connections, mechanical structures, tire textures, the braking system, transmission components, and the handlebar control area. This ensures that the product not only has a complete overall presentation but also conveys authentic industrial design and material texture.

The overall visual style leans towards product advertising and commercial product photography. By establishing a unified logic for lighting, material representation, and camera language, it creates a serialized visual effect, making the 3D rendering results suitable for various applications, including product promotion, brand display, e-commerce detail pages, product catalogs, and visual portfolios."""

new_text_zh_tw = """本項目圍繞山地自行車產品進行三維視覺表現，通過產品建模、材質製作、燈光搭建與場景渲染，對自行車整體結構及關鍵零部件進行系統化視覺呈現。

項目以產品本身為核心，採用簡潔、乾淨的淺灰色背景與高質感反射地面，弱化複雜場景元素，使視覺重點集中於產品造型、結構比例及材質細節。通過不同視角的產品展示，對自行車的整體輪廓、車架結構、前後避震、變速系統、輪組、把手及坐墊等主要部件進行多角度呈現。

在產品細節展示部分，通過近景及局部特寫強化車架連接、機械結構、輪胎紋理、剎車系統、變速組件以及車把控制區域等細節，使產品不僅具備完整的整體展示，同時能夠傳達真實的工業設計與產品質感。

整體視覺採用偏產品廣告與商業產品攝影的表現方式，通過統一的光影邏輯、材質表現和鏡頭語言建立系列化視覺效果，使三維渲染結果能夠應用於產品宣傳、品牌展示、電商詳情頁、產品畫冊及視覺作品集等不同場景。"""

replacement = f'''    description: {{
      en: `{new_text_en}`,
      'zh-CN': `{new_text_zh_cn}`,
      'zh-TW': `{new_text_zh_tw}`,
    }},'''

with open('src/data/projectsData.ts', 'r') as f:
    content = f.read()

if target in content:
    content = content.replace(target, replacement)
    with open('src/data/projectsData.ts', 'w') as f:
        f.write(content)
    print('Replaced successfully')
else:
    print('Target not found')
