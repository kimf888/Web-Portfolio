import sys

new_text_zh_cn = """本款二合一充电露营手提灯是集强光探照手电与全景露营灯于一体的多功能户外照明产品，专为露营、徒步、垂钓、应急抢险、居家停电备用等场景打造，兼顾 Type‑C 充电与手摇应急发电双重供电方式，无需担心户外断电问题，为户外出行与突发应急提供稳定可靠的照明保障。

产品整机重量 345g，尺寸 182×90×85mm，色温 7000K，内置 2000mAh 可充电锂电池，机身采用耐磨抗摔外壳，搭配可旋转便携提手，握持、悬挂摆放都十分方便，轻巧机身便于随身携带。

设备搭载三种实用照明模式：前置强光探照模式，适合远距离搜索照明，续航 4‑5 小时；360° 全景侧灯露营模式，提供大范围柔和环境光，续航 4‑5 小时；SOS 红光警示模式，用于遇险求救，最长可续航 200 小时，多模式自由切换适配不同使用需求。

供电方案上支持双路补给，常规可通过 Type‑C 接口进行充电；当没有电源时，转动顶部手摇发电手柄即可手动发电，实现无电源环境下应急补电。机身同时带有 USB 输出接口，可临时为手机等小型数码设备应急供电。整机结构布局清晰，配置旋转锁扣、电源按键、工作指示灯，接口布局规整，操作简单直观。

产品一机两用，既是远射强光手电筒，又是大范围氛围露营灯。广泛适用于户外露营、夜间垂钓、徒步登山、野外搜救、设备维修，也可作为家庭停电、灾害避险的应急物资。坚固便携、多模式照明、手摇自救发电的组合设计，让它成为户外出行与居家应急的全能照明装备。"""

new_text_zh_tw = """本款二合一充電露營手提燈是集強光探照手電與全景露營燈於一體的多功能戶外照明產品，專為露營、徒步、垂釣、應急搶險、居家停電備用等場景打造，兼顧 Type‑C 充電與手搖應急發電雙重供電方式，無需擔心戶外斷電問題，為戶外出行與突發應急提供穩定可靠的照明保障。

產品整機重量 345g，尺寸 182×90×85mm，色溫 7000K，內置 2000mAh 可充電鋰電池，機身採用耐磨抗摔外殼，搭配可旋轉便攜提手，握持、懸掛擺放都十分方便，輕巧機身便於隨身攜帶。

設備搭載三種實用照明模式：前置強光探照模式，適合遠距離搜索照明，續航 4‑5 小時；360° 全景側燈露營模式，提供大範圍柔和環境光，續航 4‑5 小時；SOS 紅光警示模式，用於遇險求救，最長可續航 200 小時，多模式自由切換適配不同使用需求。

供電方案上支持雙路補給，常規可通過 Type‑C 接口進行充電；當沒有電源時，轉動頂部手搖發電手柄即可手動發電，實現無電源環境下應急補電。機身同時帶有 USB 輸出接口，可臨時為手機等小型數碼設備應急供電。整機結構佈局清晰，配置旋轉鎖扣、電源按鍵、工作指示燈，接口佈局規整，操作簡單直觀。

產品一機兩用，既是遠射強光手電筒，又是大範圍氛圍露營燈。廣泛適用於戶外露營、夜間垂釣、徒步登山、野外搜救、設備維修，也可作為家庭停電、災害避險的應急物資。堅固便攜、多模式照明、手搖自救發電的組合設計，讓它成為戶外出行與居家應急的全能照明裝備。"""

new_text_en = """This 2-in-1 rechargeable camping lantern is a multifunctional outdoor lighting product integrating a high-intensity searchlight flashlight and a panoramic camping light. Specifically designed for camping, hiking, fishing, emergency rescue, and home power outages, it features dual power supply methods: Type-C charging and hand-crank emergency power generation. With no need to worry about power loss outdoors, it provides stable and reliable lighting for outdoor travel and sudden emergencies.

Weighing 345g with dimensions of 182×90×85mm and a color temperature of 7000K, the device features a built-in 2000mAh rechargeable lithium battery. The body uses a wear-resistant and drop-resistant shell, paired with a rotatable portable handle, making it very convenient to hold or hang. Its lightweight body makes it easy to carry around.

The device is equipped with three practical lighting modes: a front high-intensity searchlight mode suitable for long-distance search lighting with a 4-5 hour battery life; a 360° panoramic side light camping mode providing wide-range soft ambient light with a 4-5 hour battery life; and an SOS red light warning mode used for distress calls with a battery life of up to 200 hours. The multiple modes can be freely switched to suit different usage needs.

The power supply scheme supports dual replenishment. It can be charged conventionally via the Type-C interface; when there is no power source, turning the top hand-crank handle allows for manual power generation, achieving emergency recharging in environments without electricity. The body also features a USB output interface to temporarily provide emergency power to small digital devices like mobile phones. The overall structure is clearly laid out, equipped with a rotary lock, power button, and working indicator light, with neatly arranged interfaces for simple and intuitive operation.

The product serves two purposes in one device: it is both a long-range high-intensity flashlight and a wide-range ambient camping lantern. It is widely applicable to outdoor camping, night fishing, hiking and mountaineering, field search and rescue, and equipment maintenance, and can also serve as an emergency supply for home power outages and disaster avoidance. The combined design of rugged portability, multi-mode lighting, and hand-crank self-rescue power generation makes it an all-around lighting equipment for outdoor travel and home emergencies."""

with open('src/data/projectsData.ts', 'r') as f:
    content = f.read()

start = content.find("id: 'placeholder-1'")
if start != -1:
    # Update title
    title_start = content.find("title: '", start)
    title_end = content.find("',", title_start)
    if title_start != -1 and title_end != -1:
        content = content[:title_start] + "title: '二合一充电露营灯亚马逊主图'" + content[title_end+1:]
        
    start = content.find("id: 'placeholder-1'")
    tagline_start = content.find("tagline: {", start)
    tagline_end = content.find("    },", tagline_start)
    if tagline_start != -1 and tagline_end != -1:
        new_tagline = """tagline: {
      en: 'A multifunctional 2-in-1 outdoor lighting product integrating a high-intensity flashlight and a panoramic camping lantern.',
      'zh-CN': '集强光探照手电与全景露营灯于一体的多功能户外照明产品，兼顾 Type-C 充电与手摇应急发电。',
      'zh-TW': '集強光探照手電與全景露營燈於一體的多功能戶外照明產品，兼顧 Type-C 充電與手搖應急發電。',
"""
        content = content[:tagline_start] + new_tagline + content[tagline_end:]
        
    start = content.find("id: 'placeholder-1'")
    cat_start = content.find("categoryLabel: {", start)
    cat_end = content.find("    },", cat_start)
    if cat_start != -1 and cat_end != -1:
        new_cat = """categoryLabel: {
      en: 'E-commerce',
      'zh-CN': '电商设计',
      'zh-TW': '電商設計',
"""
        content = content[:cat_start] + new_cat + content[cat_end:]
        
    start = content.find("id: 'placeholder-1'")
    tags_start = content.find("tags: [", start)
    tags_end = content.find("],", tags_start)
    if tags_start != -1 and tags_end != -1:
        content = content[:tags_start] + "tags: ['Amazon Design', 'Product Showcase', 'Visual Design', 'E-commerce']" + content[tags_end+1:]
        
    start = content.find("id: 'placeholder-1'")
    year_start = content.find("year: '", start)
    year_end = content.find("',", year_start)
    if year_start != -1 and year_end != -1:
        content = content[:year_start] + "year: '2023'" + content[year_end+1:]
        
    start = content.find("id: 'placeholder-1'")
    client_start = content.find("client: '", start)
    client_end = content.find("',", client_start)
    if client_start != -1 and client_end != -1:
        content = content[:client_start] + "client: 'Cross-border E-commerce (跨境电商)'" + content[client_end+1:]
        
    start = content.find("id: 'placeholder-1'")
    role_start = content.find("role: {", start)
    role_end = content.find("    },", role_start)
    if role_start != -1 and role_end != -1:
        new_role = """role: {
      en: 'Visual Designer',
      'zh-CN': '视觉设计师',
      'zh-TW': '視覺設計師',
"""
        content = content[:role_start] + new_role + content[role_end:]

    start = content.find("id: 'placeholder-1'")
    metrics_start = content.find("metrics: [", start)
    metrics_end = content.find("    ],", metrics_start)
    if metrics_start != -1 and metrics_end != -1:
        new_metrics = """metrics: [
      { label: 'Conversion Rate', value: '+35%' },
      { label: 'Click-Through Rate', value: '+42%' },
    ],"""
        content = content[:metrics_start] + new_metrics + content[metrics_end+6:] # add 6 to eat '    ],' space

    start = content.find("id: 'placeholder-1'")
    desc_start = content.find("description: {", start)
    desc_end = content.find("    },", desc_start)
    if desc_start != -1 and desc_end != -1:
        new_desc = f"""description: {{
      en: `{new_text_en}`,
      'zh-CN': `{new_text_zh_cn}`,
      'zh-TW': `{new_text_zh_tw}`,
"""
        content = content[:desc_start] + new_desc + content[desc_end:]
        
    start = content.find("id: 'placeholder-1'")
    prob_start = content.find("problem: {", start)
    prob_end = content.find("    },", prob_start)
    if prob_start != -1 and prob_end != -1:
        new_prob = """problem: {
      en: '',
      'zh-CN': '',
      'zh-TW': '',
"""
        content = content[:prob_start] + new_prob + content[prob_end:]
        
    start = content.find("id: 'placeholder-1'")
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
    print("Project placeholder-1 updated.")
else:
    print("Project not found.")
