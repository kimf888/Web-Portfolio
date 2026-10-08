import sys

new_text_zh_cn = """Maxtang Mini PC 系列是一套小型化桌面计算解决方案，覆盖入门静音办公、多屏生产力、高性能影音娱乐等层级，将完整 PC 性能浓缩于小巧机身，面向家庭、办公商用、DIY 爱好者及小型服务器场景。

产品矩阵包含四款主力机型，统一采用金属外壳，接口丰富，支持硬件拓展，兼容 Windows 与 Linux 系统。

Fanless 无风扇款（Intel N100）：鳍片被动散热，零噪音 7×24 小时运行。支持 M.2+SATA 双盘位、DDR4 最高 32GB、2500Mbps 网口，适合软路由、轻量服务器、办公终端。起售价 $141。

MTN-FP650（R7-5800H）：标配 16GB+512GB，内置 WiFi / 蓝牙，接口齐全，兼顾日常办公、影音播放与轻度创作，适合家庭及小型办公室。售价 $371。

MTN-AL50（Intel i5/i7）：双通道 DDR5 最高 64GB，PCIe4.0 固态，支持三屏 4K 输出（2×HDMI2.0+DP1.4 Type-C），面向多窗口办公、设计制图等商用场景。起售价 $336。

MTN-FP750（R7-7735HS）：8 核处理器 + Radeon 680M 核显，标配 32GB+512GB，支持 4K 三屏输出，可流畅应对高清影音、轻度游戏与内容创作，为旗舰全能机型。

核心优势：金属机身紧凑省空间；内存硬盘可自由升级；网口、视频、USB、Type-C 接口齐全；可作数据服务器、路由、娱乐主机、办公终端；从入门低功耗到旗舰高性能，全档位覆盖不同预算。

Maxtang 迷你主机系列以紧凑机身实现传统台式机的完整能力，覆盖家用、商用、DIY 多类需求，提供轻量化、高性价比的桌面计算方案。"""

new_text_zh_tw = """Maxtang Mini PC 系列是一套小型化桌面計算解決方案，覆蓋入門靜音辦公、多屏生產力、高性能影音娛樂等層級，將完整 PC 性能濃縮於小巧機身，面向家庭、辦公商用、DIY 愛好者及小型服務器場景。

產品矩陣包含四款主力機型，統一採用金屬外殼，接口豐富，支持硬件拓展，兼容 Windows 與 Linux 系統。

Fanless 無風扇款（Intel N100）：鰭片被動散熱，零噪音 7×24 小時運行。支持 M.2+SATA 雙盤位、DDR4 最高 32GB、2500Mbps 網口，適合軟路由、輕量服務器、辦公終端。起售價 $141。

MTN-FP650（R7-5800H）：標配 16GB+512GB，內置 WiFi / 藍牙，接口齊全，兼顧日常辦公、影音播放與輕度創作，適合家庭及小型辦公室。售價 $371。

MTN-AL50（Intel i5/i7）：雙通道 DDR5 最高 64GB，PCIe4.0 固態，支持三屏 4K 輸出（2×HDMI2.0+DP1.4 Type-C），面向多窗口辦公、設計製圖等商用場景。起售價 $336。

MTN-FP750（R7-7735HS）：8 核處理器 + Radeon 680M 核顯，標配 32GB+512GB，支持 4K 三屏輸出，可流暢應對高清影音、輕度遊戲與內容創作，為旗艦全能機型。

核心優勢：金屬機身緊湊省空間；內存硬盤可自由升級；網口、視頻、USB、Type-C 接口齊全；可作數據服務器、路由、娛樂主機、辦公終端；從入門低功耗到旗艦高性能，全檔位覆蓋不同預算。

Maxtang 迷你主機系列以緊湊機身實現傳統台式機的完整能力，覆蓋家用、商用、DIY 多類需求，提供輕量化、高性價比的桌面計算方案。"""

new_text_en = """The Maxtang Mini PC series is a compact desktop computing solution covering entry-level silent office setups, multi-screen productivity, and high-performance audio-visual entertainment. Concentrating full PC performance into a small chassis, it caters to home, commercial office, DIY enthusiasts, and small server scenarios.

The product matrix features four main models, uniformly adopting metal casings, rich interfaces, hardware expansion support, and compatibility with Windows and Linux systems.

Fanless Model (Intel N100): Passive fin cooling for zero-noise 7x24 operation. Supports M.2+SATA dual drives, up to 32GB DDR4, and a 2500Mbps Ethernet port. Ideal for soft routers, lightweight servers, and office terminals. Starting at $141.

MTN-FP650 (R7-5800H): Comes standard with 16GB+512GB, built-in WiFi/Bluetooth, and full interfaces. Balances daily office tasks, media playback, and light creation. Suitable for homes and small offices. Priced at $371.

MTN-AL50 (Intel i5/i7): Dual-channel DDR5 up to 64GB, PCIe 4.0 SSD, supporting 4K triple-display output (2×HDMI 2.0 + DP1.4 Type-C). Geared towards multi-window workflows and design drafting in commercial scenarios. Starting at $336.

MTN-FP750 (R7-7735HS): 8-core processor + Radeon 680M integrated graphics, standard 32GB+512GB, supports 4K triple-display output. Smoothly handles HD media, light gaming, and content creation as the flagship all-around model.

Core Advantages: Compact metal body saves space; freely upgradable memory and storage; complete Ethernet, video, USB, and Type-C interfaces; versatile as data servers, routers, entertainment hosts, or office terminals; full tier coverage from low-power entry models to high-performance flagships for different budgets.

The Maxtang Mini PC series achieves full traditional desktop capabilities within a compact chassis, covering various home, commercial, and DIY needs to provide a lightweight and cost-effective desktop computing solution."""

with open('src/data/projectsData.ts', 'r') as f:
    content = f.read()

start = content.find("id: 'aura-ai-workspace'")
if start != -1:
    desc_start = content.find("description: {", start)
    desc_end = content.find("    },", desc_start)
    if desc_start != -1 and desc_end != -1:
        new_desc = f"""description: {{
      en: `{new_text_en}`,
      'zh-CN': `{new_text_zh_cn}`,
      'zh-TW': `{new_text_zh_tw}`,
"""
        content = content[:desc_start] + new_desc + content[desc_end:]
        
    with open('src/data/projectsData.ts', 'w') as f:
        f.write(content)
    print("Project Maxtang text updated to condensed version.")
else:
    print("Project not found.")
