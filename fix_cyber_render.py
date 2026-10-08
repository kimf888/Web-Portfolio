import sys

new_text_en = """This project focuses on the 3D visual product representation of Datang Computer's industrial computers, embedded computers, and Mini PCs. By uniformly designing the modeling, materials, lighting, and rendering angles of different product models, a complete product visual display system is established.

The project involves computing devices of various forms, including industrial computers with external antennas, fanless industrial hosts, and Mini PCs of different sizes. Due to significant differences in product structures, interfaces, cooling methods, and usage scenarios, the design process primarily focuses on the authenticity of product structures, material performance, and hardware detail presentation. A unified rendering language is used to enhance visual consistency across different products.

Based on the actual external structure of each product, 3D restoration of details such as body proportions, interface layouts, cooling structures, and antennas is performed.

Specifically, the fanless industrial computers highlight the large-area fin-style cooling structure on the top, reinforcing the metallic material and industrial attributes of the product through light and shadow performance from various angles. The Mini PC products focus on displaying the clean structure of the body, rounded corner designs, front and rear interfaces, and side cooling vents, enabling users to intuitively understand the product's appearance and functional layout.

In terms of product display angles, more suitable perspectives are chosen based on different product structures to respectively highlight:

Overall product appearance and body proportions
Front functional interface and button layout
Rear expansion interfaces and connectivity
Top cooling structure
Side cooling vents and industrial structural details
Antenna and special hardware configurations

Through product rendering from multiple angles, the products not only maintain realistic structural displays but also achieve more professional commercial visual effects."""

new_text_zh_cn = """本项目围绕大唐计算机旗下工业计算机、嵌入式计算机及 Mini PC 产品进行产品三维视觉表现，通过对不同型号产品的建模、材质、灯光及渲染角度进行统一设计，建立完整的产品视觉展示体系。

项目涉及多种不同形态的计算设备，包括带外置天线的工业计算机、无风扇散热工控主机以及不同尺寸规格的 Mini PC。由于产品在结构、接口、散热方式及使用场景上存在较大差异，因此在设计过程中重点围绕产品结构真实性、材质表现及硬件细节展示展开，通过统一的渲染语言提升不同产品之间的视觉一致性。

针对每款产品的实际外观结构，对产品机身比例、接口布局、散热结构及天线等细节进行三维还原。

其中，无风扇工业计算机重点突出顶部大面积的鳍片式散热结构，通过不同角度的光影表现强化金属材质及产品的工业属性；Mini PC 产品则重点展示机身的简洁结构、圆角设计、前后接口以及侧面的散热开孔，使用户能够更直观地了解产品的外观与功能布局。

在产品展示角度上，根据不同产品结构选择更适合的视角，分别突出：

产品整体外观及机身比例
正面功能接口与按键布局
背部扩展接口及连接能力
顶部散热结构
侧面散热开孔及工业结构细节
天线及特殊硬件配置

通过多个角度的产品渲染，使产品在保持真实结构展示的同时，也具备更加专业的商业视觉效果。"""

new_text_zh_tw = """本項目圍繞大唐計算機旗下工業計算機、嵌入式計算機及 Mini PC 產品進行產品三維視覺表現，通過對不同型號產品的建模、材質、燈光及渲染角度進行統一設計，建立完整的產品視覺展示體系。

項目涉及多種不同形態的計算設備，包括帶外置天線的工業計算機、無風扇散熱工控主機以及不同尺寸規格的 Mini PC。由於產品在結構、接口、散熱方式及使用場景上存在較大差異，因此在設計過程中重點圍繞產品結構真實性、材質表現及硬件細節展示展開，通過統一的渲染語言提升不同產品之間的視覺一致性。

針對每款產品的實際外觀結構，對產品機身比例、接口佈局、散熱結構及天線等細節進行三維還原。

其中，無風扇工業計算機重點突出頂部大面積的鰭片式散熱結構，通過不同角度的光影表現強化金屬材質及產品的工業屬性；Mini PC 產品則重點展示機身的簡潔結構、圓角設計、前後接口以及側面的散熱開孔，使用戶能夠更直觀地了解產品的外觀與功能佈局。

在產品展示角度上，根據不同產品結構選擇更適合的視角，分別突出：

產品整體外觀及機身比例
正面功能接口與按鍵佈局
背部擴展接口及連接能力
頂部散熱結構
側面散熱開孔及工業結構細節
天線及特殊硬件配置

通過多個角度的產品渲染，使產品在保持真實結構展示的同時，也具備更加專業的商業視覺效果。"""

with open('src/data/projectsData.ts', 'r') as f:
    content = f.read()

start = content.find("id: 'cyber-kinetic-branding'")
if start != -1:
    tagline_start = content.find("tagline: {", start)
    tagline_end = content.find("    },", tagline_start)
    if tagline_start != -1 and tagline_end != -1:
        new_tagline = """tagline: {
      en: 'Establishing a unified 3D product visual display system for Datang Computer industrial and Mini PCs.',
      'zh-CN': '通过统一的建模与渲染语言，为大唐计算机旗下硬件产品建立完整的三维视觉展示体系。',
      'zh-TW': '通過統一的建模與渲染語言，為大唐計算機旗下硬件產品建立完整的三維視覺展示體系。',
"""
        content = content[:tagline_start] + new_tagline + content[tagline_end:]

    start = content.find("id: 'cyber-kinetic-branding'")
    cat_start = content.find("category: 'aigc',", start)
    if cat_start != -1:
        content = content[:cat_start] + "category: 'independent-site'," + content[cat_start + len("category: 'aigc',"):]
        
    start = content.find("id: 'cyber-kinetic-branding'")
    catlbl_start = content.find("categoryLabel: {", start)
    catlbl_end = content.find("    },", catlbl_start)
    if catlbl_start != -1 and catlbl_end != -1:
        new_catlbl = """categoryLabel: {
      en: '3D & Visuals',
      'zh-CN': '3D 视觉',
      'zh-TW': '3D 視覺',
"""
        content = content[:catlbl_start] + new_catlbl + content[catlbl_end:]
        
    start = content.find("id: 'cyber-kinetic-branding'")
    tags_start = content.find("tags: ['Generative Design', 'SVG Animation', 'Brand System', 'WebGL'],", start)
    if tags_start != -1:
        content = content[:tags_start] + "tags: ['3D Modeling', 'Product Rendering', 'Lighting', 'Datang Computer']," + content[tags_start + len("tags: ['Generative Design', 'SVG Animation', 'Brand System', 'WebGL'],"):]
        
    start = content.find("id: 'cyber-kinetic-branding'")
    client_start = content.find("client: 'Cyber Protocol Foundation',", start)
    if client_start != -1:
        content = content[:client_start] + "client: 'Datang Computer (大唐计算机)'," + content[client_start + len("client: 'Cyber Protocol Foundation',"):]
        
    start = content.find("id: 'cyber-kinetic-branding'")
    role_start = content.find("role: {", start)
    role_end = content.find("    },", role_start)
    if role_start != -1 and role_end != -1:
        new_role = """role: {
      en: '3D Visual Designer',
      'zh-CN': '三维视觉设计师',
      'zh-TW': '三維視覺設計師',
"""
        content = content[:role_start] + new_role + content[role_end:]
        
    start = content.find("id: 'cyber-kinetic-branding'")
    desc_start = content.find("description: {", start)
    desc_end = content.find("    },", desc_start)
    if desc_start != -1 and desc_end != -1:
        new_desc = f"""description: {{
      en: `{new_text_en}`,
      'zh-CN': `{new_text_zh_cn}`,
      'zh-TW': `{new_text_zh_tw}`,
"""
        content = content[:desc_start] + new_desc + content[desc_end:]
        
    start = content.find("id: 'cyber-kinetic-branding'")
    prob_start = content.find("problem: {", start)
    prob_end = content.find("    },", prob_start)
    if prob_start != -1 and prob_end != -1:
        new_prob = """problem: {
      en: '',
      'zh-CN': '',
      'zh-TW': '',
"""
        content = content[:prob_start] + new_prob + content[prob_end:]
        
    start = content.find("id: 'cyber-kinetic-branding'")
    sol_start = content.find("solution: {", start)
    sol_end = content.find("    },", sol_start)
    if sol_start != -1 and sol_end != -1:
        new_sol = """solution: {
      en: '',
      'zh-CN': '',
      'zh-TW': '',
"""
        content = content[:sol_start] + new_sol + content[sol_end:]

    with open('src/data/projectsData.ts', 'w') as f:
        f.write(content)
    print("Project cyber-kinetic-branding updated.")
