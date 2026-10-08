import sys

new_text_zh_cn = """以山地自行车产品为对象，进行完整的产品三维建模与视觉渲染表现。项目重点围绕产品本身的造型结构、材质细节及运动属性展开，通过不同视角、景别和局部特写，对自行车的整体外观及关键结构进行系统化展示。

在整体产品展示部分，分别从正侧面、前侧面、后侧面及三分之四视角对产品进行渲染，通过不同角度呈现车架比例、车轮结构、前后避震、车把、座椅及传动系统等整体设计，使产品的外观形态和结构关系能够得到完整体现。

在产品细节展示部分，进一步针对自行车的核心结构进行局部特写，包括车架、前叉、车把、轮组、轮胎、刹车系统、变速系统、后轮传动结构及座椅组件等，通过近距离构图突出产品的机械结构、材质质感和细节工艺，使整体视觉从单纯的产品展示延伸到细节层面的设计表达。

场景表现采用简洁的摄影棚式产品展示环境，以浅灰色背景、柔和的环境光和高反射地面构建统一的视觉空间。通过产品底部的自然倒影增强画面空间感，同时利用柔和的明暗过渡控制产品轮廓，使紫色、黄色与黑色组成的车架配色更加突出，避免复杂场景对产品主体造成干扰。

在画面构图上，根据不同展示目的调整产品在画面中的比例和视觉重心：整体展示采用较完整的产品构图，保证自行车轮廓和结构信息完整；细节展示则通过局部裁切、近距离视角和低景别构图强化产品的视觉冲击力，使车架、轮胎、变速系统及操控区域等关键部位成为画面的主要视觉焦点。

整个项目以产品视觉呈现为核心，通过三维建模、材质、灯光、摄影机视角和场景搭建等方式，将实体自行车转化为具有商业展示效果的数字化产品视觉素材，可应用于产品详情页、品牌官网、电商平台、产品宣传及广告视觉等场景。"""

new_text_zh_tw = """以山地自行車產品為對象，進行完整的產品三維建模與視覺渲染表現。項目重點圍繞產品本身的造型結構、材質細節及運動屬性展開，通過不同視角、景別和局部特寫，對自行車的整體外觀及關鍵結構進行系統化展示。

在整體產品展示部分，分別從正側面、前側面、後側面及三分之四視角對產品進行渲染，通過不同角度呈現車架比例、車輪結構、前後避震、車把、座椅及傳動系統等整體設計，使產品的外觀形態和結構關係能夠得到完整體現。

在產品細節展示部分，進一步針對自行車的核心結構進行局部特寫，包括車架、前叉、車把、輪組、輪胎、剎車系統、變速系統、後輪傳動結構及座椅組件等，通過近距離構圖突出產品的機械結構、材質質感和細節工藝，使整體視覺從單純的產品展示延伸到細節層面的設計表達。

場景表現採用簡潔的攝影棚式產品展示環境，以淺灰色背景、柔和的環境光和高反射地面構建統一的視覺空間。通過產品底部的自然倒影增強畫面空間感，同時利用柔和的明暗過渡控制產品輪廓，使紫色、黃色與黑色組成的車架配色更加突出，避免複雜場景對產品主體造成干擾。

在畫面構圖上，根據不同展示目的調整產品在畫面中的比例和視覺重心：整體展示採用較完整的產品構圖，保證自行車輪廓和結構信息完整；細節展示則通過局部裁切、近距離視角和低景別構圖強化產品的視覺衝擊力，使車架、輪胎、變速系統及操控區域等關鍵部位成為畫面的主要視覺焦點。

整個項目以產品視覺呈現為核心，通過三維建模、材質、燈光、攝影機視角和場景搭建等方式，將實體自行車轉化為具有商業展示效果的數字化產品視覺素材，可應用於產品詳情頁、品牌官網、電商平台、產品宣傳及廣告視覺等場景。"""

new_text_en = """Taking mountain bike products as the subject, this project involves complete 3D product modeling and visual rendering. The project focuses on the product's shape structure, material details, and sports attributes, systematically showcasing the overall appearance and key structures of the bicycle through different perspectives, shots, and close-ups.

In the overall product display section, the product is rendered from the front side, front three-quarter, rear side, and three-quarter perspectives. Through different angles, the overall design of the frame proportions, wheel structure, front and rear suspension, handlebars, seat, and transmission system is presented, ensuring the product's appearance and structural relationships are fully reflected.

In the detailed product display section, close-ups are further targeted at the core structures of the bicycle, including the frame, front fork, handlebars, wheelset, tires, braking system, transmission system, rear wheel transmission structure, and seat components. Through close-range composition, the product's mechanical structure, material texture, and detail craftsmanship are highlighted, extending the overall visual from pure product display to design expression at the detail level.

The scene representation adopts a clean, studio-style product display environment, constructing a unified visual space with a light gray background, soft ambient light, and a highly reflective ground. Natural reflections at the bottom of the product enhance the sense of space in the image, while soft light-and-dark transitions control the product's silhouette, making the purple, yellow, and black frame color scheme stand out and avoiding interference from complex scenes on the main product subject.

In terms of image composition, the product's proportion and visual center of gravity in the frame are adjusted according to different display purposes: overall displays use a relatively complete product composition to ensure the bicycle's silhouette and structural information are intact; detail displays strengthen the visual impact of the product through local cropping, close-up perspectives, and low-angle shots, making key areas such as the frame, tires, transmission system, and control area the main visual focus of the image.

The entire project revolves around product visual presentation. Through 3D modeling, materials, lighting, camera perspectives, and scene construction, the physical bicycle is transformed into digital product visual assets with commercial display effects. These assets can be applied in various scenarios such as product detail pages, brand official websites, e-commerce platforms, product promotion, and advertising visuals."""

with open('src/data/projectsData.ts', 'r') as f:
    content = f.read()

start = content.find("id: 'nexus-spatial-os'")
if start != -1:
    desc_start = content.find('description: {', start)
    desc_end = content.find('    },', desc_start)
    
    if desc_start != -1 and desc_end != -1:
        replacement = f'''description: {{
      en: `{new_text_en}`,
      'zh-CN': `{new_text_zh_cn}`,
      'zh-TW': `{new_text_zh_tw}`,
'''
        
        content = content[:desc_start] + replacement + content[desc_end:]
        with open('src/data/projectsData.ts', 'w') as f:
            f.write(content)
        print('Replacement successful!')
    else:
        print('Could not find description block limits')
else:
    print('Could not find nexus-spatial-os project')
