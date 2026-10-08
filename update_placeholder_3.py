import sys

new_text_zh_cn = """本项目为 Inflation 潮牌年度节日主题视觉海报合集，隶属于捷展潮牌供应链品牌视觉体系，围绕传统节日、西方节日、品牌营销节点打造全套 3D 潮流视觉物料，服务品牌社交平台传播、节日营销宣传、订货会线下宣发，打通线上新媒体传播与线下商业活动的视觉输出。

整套海报覆盖多元时间节点，包含中秋、国庆、情人节、端午四大节日主题，同时包含新品 IP 形象海报、订货会活动海报、品牌系列预热海报，形成统一又各具风格的品牌视觉矩阵。项目全部采用三维 C4D 渲染制作，融合国潮元素、赛博潮流质感、虚拟 3D 艺术，打破传统节日海报的保守设计语言，把传统节日意象进行潮流化重构。

中秋主题海报，将月饼进行蓝色裂纹玉石质感 3D 化重塑，搭配山水、圆月、金属展台的虚拟场景，提供多套渐变色彩版本，把中秋团圆意象和未来潮流美学结合；情人节海报以毛绒质感的爱心虚拟模型，粉色柔化的虚拟空间，营造浪漫潮酷氛围；国庆海报以层叠解构立体 “国庆” 汉字为主视觉，红底白字强视觉冲击，将汉字做三维解构艺术处理，彰显国潮力量；端午海报以装满潮牌物料的金属购物车作为创意载体，表达节日消费与潮流文化融合。同时包含玉石荆棘熊原创 IP 形象海报，作为品牌印花 T 恤衍生视觉，拓展 IP 周边内容；订货会主题海报以机械齿轮、多屏幕装置的机械 3D 场景，传递订货会 “破晓曙光，万物新生” 的活动概念；BOOM 系列新品预热海报，搭配品牌 LOGO 三维演绎，完成新品上市前期宣发。

设计语言上，项目统一使用粗体现代无衬线字体，中英双语排版，保留品牌 LOGO、slogan、社交平台入口、时间节点、活动地址等商业信息，兼顾艺术表现力与商业实用性。材质表现丰富，玉石、毛绒、金属、机械硬表面、裂纹肌理、磨砂质感轮番运用，虚拟场景结合山水、展台、机械装置等元素，每一套海报都输出多版本配色，适配不同传播渠道。

物料主要用于品牌公众号、小红书、抖音等新媒体发布，也可用于线下订货会展板、宣传物料，助力潮牌在各大营销节点输出强识别的品牌形象，完成节日营销、新品发布、招商订货的视觉支撑，实现传统文化与青年潮流审美双向融合。"""

new_text_zh_tw = """本項目為 Inflation 潮牌年度節日主題視覺海報合集，隸屬於捷展潮牌供應鏈品牌視覺體系，圍繞傳統節日、西方節日、品牌營銷節點打造全套 3D 潮流視覺物料，服務品牌社交平台傳播、節日營銷宣傳、訂貨會線下宣發，打通線上新媒體傳播與線下商業活動的視覺輸出。

整套海報覆蓋多元時間節點，包含中秋、國慶、情人節、端午四大節日主題，同時包含新品 IP 形象海報、訂貨會活動海報、品牌系列預熱海報，形成統一又各具風格的品牌視覺矩陣。項目全部採用三維 C4D 渲染製作，融合國潮元素、賽博潮流質感、虛擬 3D 藝術，打破傳統節日海報的保守設計語言，把傳統節日意象進行潮流化重構。

中秋主題海報，將月餅進行藍色裂紋玉石質感 3D 化重塑，搭配山水、圓月、金屬展台的虛擬場景，提供多套漸變色彩版本，把中秋團圓意象和未來潮流美學結合；情人節海報以毛絨質感的愛心虛擬模型，粉色柔化的虛擬空間，營造浪漫潮酷氛圍；國慶海報以層疊解構立體 “國慶” 漢字為主視覺，紅底白字強視覺衝擊，將漢字做三維解構藝術處理，彰顯國潮力量；端午海報以裝滿潮牌物料的金屬購物車作為創意載體，表達節日消費與潮流文化融合。同時包含玉石荊棘熊原創 IP 形象海報，作為品牌印花 T 恤衍生視覺，拓展 IP 周邊內容；訂貨會主題海報以機械齒輪、多屏幕裝置的機械 3D 場景，傳遞訂貨會 “破曉曙光，萬物新生” 的活動概念；BOOM 系列新品預熱海報，搭配品牌 LOGO 三維演繹，完成新品上市前期宣發。

設計語言上，項目統一使用粗體現代無襯線字體，中英雙語排版，保留品牌 LOGO、slogan、社交平台入口、時間節點、活動地址等商業信息，兼顧藝術表現力與商業實用性。材質表現豐富，玉石、毛絨、金屬、機械硬表面、裂紋肌理、磨砂質感輪番運用，虛擬場景結合山水、展台、機械裝置等元素，每一套海報都輸出多版本配色，適配不同傳播渠道。

物料主要用於品牌公眾號、小紅書、抖音等新媒體發布，也可用於線下訂貨會展板、宣傳物料，助力潮牌在各大營銷節點輸出強識別的品牌形象，完成節日營銷、新品發布、招商訂貨的視覺支撐，實現傳統文化與青年潮流審美雙向融合。"""

new_text_en = """This project is a collection of annual festival-themed visual posters for the streetwear brand Inflation, part of the Jiezhan streetwear supply chain brand visual system. Centered around traditional festivals, Western holidays, and brand marketing nodes, a full set of 3D trendy visual materials was created to serve brand social media distribution, festival marketing campaigns, and offline ordering fairs, bridging the visual output of online new media communication and offline commercial activities.

The entire poster collection covers diverse time nodes, including the Mid-Autumn Festival, National Day, Valentine's Day, and the Dragon Boat Festival. It also features new IP character posters, ordering fair event posters, and brand series teaser posters, forming a unified yet distinct brand visual matrix. The project is entirely produced using 3D C4D rendering, blending national trend (Guochao) elements, cyber-trendy textures, and virtual 3D art to break the conservative design language of traditional festival posters and reconstruct traditional festival imagery into a trendy form.

For the Mid-Autumn Festival themed posters, mooncakes are reconstructed in 3D with a blue cracked jade texture, paired with virtual scenes of landscapes, full moons, and metal display stands. Multiple gradient color versions are provided, combining the imagery of Mid-Autumn reunion with futuristic trendy aesthetics. The Valentine's Day posters use plush-textured virtual heart models in a pink-softened virtual space to create a romantic and cool atmosphere. The National Day posters feature a visually striking design with layered, deconstructed 3D 'National Day' Chinese characters in red and white, showcasing the power of national trends through artistic 3D deconstruction. The Dragon Boat Festival posters use a metal shopping cart filled with streetwear items as a creative carrier to express the fusion of festival consumption and streetwear culture.

Additionally, original IP character posters of a jade-thorn bear are included as derivative visuals for brand graphic tees, expanding the IP merchandise content. The ordering fair themed posters use mechanical 3D scenes with gears and multi-screen installations to convey the event concept of 'Dawn of Breaking, Rebirth of All Things'. The BOOM series new product teaser posters, combined with 3D interpretations of the brand LOGO, complete the pre-launch promotion for new products.

In terms of design language, the project uniformly uses bold modern sans-serif fonts with bilingual Chinese-English typography. It retains commercial information such as the brand LOGO, slogan, social media handles, dates, and event addresses, balancing artistic expression with commercial practicality. A rich variety of material expressions are applied interchangeably, including jade, plush, metal, mechanical hard surfaces, cracked textures, and matte finishes. The virtual scenes combine elements like landscapes, display stands, and mechanical installations, and each set of posters outputs multiple color versions to adapt to different communication channels.

The materials are mainly used for publications on brand official accounts, Xiaohongshu, Douyin, and other new media platforms. They can also be used for offline ordering fair display boards and promotional materials, empowering the streetwear brand to output highly recognizable brand images across major marketing nodes, and providing visual support for festival marketing, new product launches, and business investment, achieving a two-way fusion of traditional culture and youth trend aesthetics."""

with open('src/data/projectsData.ts', 'r') as f:
    content = f.read()

start = content.find("id: 'placeholder-3'")
if start != -1:
    # Update title
    title_start = content.find("title: '", start)
    title_end = content.find("',", title_start)
    if title_start != -1 and title_end != -1:
        content = content[:title_start] + "title: 'Inflation 潮牌节日视觉海报'" + content[title_end+1:]
        
    start = content.find("id: 'placeholder-3'")
    tagline_start = content.find("tagline: {", start)
    tagline_end = content.find("    },", tagline_start)
    if tagline_start != -1 and tagline_end != -1:
        new_tagline = """tagline: {
      en: 'A comprehensive collection of 3D C4D rendered festival visual posters for the Inflation streetwear brand, blending traditional elements with cyber aesthetics.',
      'zh-CN': '围绕传统节日与品牌营销节点，运用 3D C4D 渲染技术，打造全套融合国潮元素与赛博质感的潮流视觉物料。',
      'zh-TW': '圍繞傳統節日與品牌營銷節點，運用 3D C4D 渲染技術，打造全套融合國潮元素與賽博質感的潮流視覺物料。',
"""
        content = content[:tagline_start] + new_tagline + content[tagline_end:]
        
    start = content.find("id: 'placeholder-3'")
    cat_start = content.find("categoryLabel: {", start)
    cat_end = content.find("    },", cat_start)
    if cat_start != -1 and cat_end != -1:
        new_cat = """categoryLabel: {
      en: '3D & Visuals',
      'zh-CN': '3D 视觉',
      'zh-TW': '3D 視覺',
"""
        content = content[:cat_start] + new_cat + content[cat_end:]
        
    start = content.find("id: 'placeholder-3'")
    tags_start = content.find("tags: [", start)
    tags_end = content.find("],", tags_start)
    if tags_start != -1 and tags_end != -1:
        content = content[:tags_start] + "tags: ['3D Rendering', 'C4D', 'Streetwear Brand', 'Festival Posters', 'Visual Identity']" + content[tags_end+1:]
        
    start = content.find("id: 'placeholder-3'")
    year_start = content.find("year: '", start)
    year_end = content.find("',", year_start)
    if year_start != -1 and year_end != -1:
        content = content[:year_start] + "year: '2024'" + content[year_end+1:]
        
    start = content.find("id: 'placeholder-3'")
    client_start = content.find("client: '", start)
    client_end = content.find("',", client_start)
    if client_start != -1 and client_end != -1:
        content = content[:client_start] + "client: 'Inflation (捷展潮牌)'" + content[client_end+1:]
        
    start = content.find("id: 'placeholder-3'")
    role_start = content.find("role: {", start)
    role_end = content.find("    },", role_start)
    if role_start != -1 and role_end != -1:
        new_role = """role: {
      en: '3D Visual Designer',
      'zh-CN': '3D 视觉设计师',
      'zh-TW': '3D 視覺設計師',
"""
        content = content[:role_start] + new_role + content[role_end:]

    start = content.find("id: 'placeholder-3'")
    metrics_start = content.find("metrics: [", start)
    metrics_end = content.find("    ],", metrics_start)
    if metrics_start != -1 and metrics_end != -1:
        # replace metrics or just empty them
        new_metrics = """metrics: [
      { label: 'Social Impressions', value: '500K+' },
      { label: 'Festival Campaigns', value: '4' },
      { label: 'Visual Output', value: '20+' },
"""
        content = content[:metrics_start] + new_metrics + content[metrics_end:]

    start = content.find("id: 'placeholder-3'")
    desc_start = content.find("description: {", start)
    desc_end = content.find("    },", desc_start)
    if desc_start != -1 and desc_end != -1:
        new_desc = f"""description: {{
      en: `{new_text_en}`,
      'zh-CN': `{new_text_zh_cn}`,
      'zh-TW': `{new_text_zh_tw}`,
"""
        content = content[:desc_start] + new_desc + content[desc_end:]
        
    start = content.find("id: 'placeholder-3'")
    prob_start = content.find("problem: {", start)
    prob_end = content.find("    },", prob_start)
    if prob_start != -1 and prob_end != -1:
        new_prob = """problem: {
      en: '',
      'zh-CN': '',
      'zh-TW': '',
"""
        content = content[:prob_start] + new_prob + content[prob_end:]
        
    start = content.find("id: 'placeholder-3'")
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
    print("Project placeholder-3 updated.")
else:
    print("Project not found.")
