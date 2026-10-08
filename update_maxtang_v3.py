import sys

new_text_zh_cn = """Maxtang Mini PC 系列是一套完整的小型化桌面计算解决方案，产品线覆盖入门静音办公、生产力多屏输出、高性能影音娱乐等多个层级，将完整 PC 性能浓缩于小巧机身，面向家庭用户、办公商用、DIY 爱好者、小型服务器场景，提供高性价比的迷你主机选择。

整套产品矩阵包含四大主力机型：无风扇 N100 静音款、MTN‑FP650（R7‑5800H）、MTN‑AL50（Intel 酷睿 i5/i7）、MTN‑FP750（R7‑7735HS），统一采用精致金属外壳，接口丰富，支持硬件拓展，适配 Windows、Linux 多系统，满足差异化性能预算需求。
产品系列详解

Fanless 无风扇迷你主机（Intel N100）

主打**零噪音 7×24 小时不间断运行**，采用鳍片被动散热设计，无风扇结构彻底消除风扇噪音，适合长时间待机工作。搭载 12 代 Intel N100 处理器；存储支持 1×M.2 2280 SATA 硬盘位 + 1×SATA (FPC) 硬盘位，双盘位方便存储扩容；内存为单通道 SO‑DIMM DDR4，最大可升级至 32GB；配备 2500Mbps 高速以太网。
低功耗稳定输出，非常适合家庭软路由、轻量数据服务器、办公终端、客厅影音等场景。

MTN‑FP650

稳定高性能家用迷你主机，搭载 AMD R7‑5800H 处理器，集成 Radeon 核显。出厂标配 16GB 内存 + 512GB SSD，内置 WiFi 与蓝牙模块，无线连接稳定流畅。机身小巧便携，接口配置齐全，兼顾日常办公、网页多任务处理、影音播放、轻度创作，是家庭与小型办公室的可靠算力选择。

MTN‑AL50

面向生产力的多屏办公机型，搭载 Intel Core i5/i7 处理器；采用双通道 DDR5 内存，最高拓展至 64GB；搭载 NVMe PCIe4.0 高速固态硬盘。支持三屏 4K 同步输出，通过 2×HDMI2.0 + DP1.4 (Type‑C) 实现多显示器联动；兼容 Win10、Win11、Linux 系统。适合多窗口办公、商务办公、设计制图等需要多屏幕协同工作的商用场景。

MTN‑FP750

全性能旗舰迷你主机，搭载 AMD R7‑7735HS 8 核处理器，搭配 Radeon 680M 核显，图形性能强劲。标配 32GB 内存 + 512GB SSD，支持 SUHD 4K 三屏显示输出。可流畅应对高清影音、轻度游戏、内容剪辑创作，兼顾家用娱乐与生产力需求，打造紧凑型高性能桌面主机。"""

new_text_zh_tw = """Maxtang Mini PC 系列是一套完整的小型化桌面計算解決方案，產品線覆蓋入門靜音辦公、生產力多屏輸出、高性能影音娛樂等多個層級，將完整 PC 性能濃縮於小巧機身，面向家庭用戶、辦公商用、DIY 愛好者、小型服務器場景，提供高性價比的迷你主機選擇。

整套產品矩陣包含四大主力機型：無風扇 N100 靜音款、MTN‑FP650（R7‑5800H）、MTN‑AL50（Intel 酷睿 i5/i7）、MTN‑FP750（R7‑7735HS），統一採用精緻金屬外殼，接口豐富，支持硬件拓展，適配 Windows、Linux 多系統，滿足差異化性能預算需求。
產品系列詳解

Fanless 無風扇迷你主機（Intel N100）

主打**零噪音 7×24 小時不間斷運行**，採用鰭片被動散熱設計，無風扇結構徹底消除風扇噪音，適合長時間待機工作。搭載 12 代 Intel N100 處理器；存儲支持 1×M.2 2280 SATA 硬盤位 + 1×SATA (FPC) 硬盤位，雙盤位方便存儲擴容；內存為單通道 SO‑DIMM DDR4，最大可升級至 32GB；配備 2500Mbps 高速以太網。
低功耗穩定輸出，非常適合家庭軟路由、輕量數據服務器、辦公終端、客廳影音等場景。

MTN‑FP650

穩定高性能家用迷你主機，搭載 AMD R7‑5800H 處理器，集成 Radeon 核顯。出廠標配 16GB 內存 + 512GB SSD，內置 WiFi 與藍牙模塊，無線連接穩定流暢。機身小巧便攜，接口配置齊全，兼顧日常辦公、網頁多任務處理、影音播放、輕度創作，是家庭與小型辦公室的可靠算力選擇。

MTN‑AL50

面向生產力的多屏辦公機型，搭載 Intel Core i5/i7 處理器；採用雙通道 DDR5 內存，最高拓展至 64GB；搭載 NVMe PCIe4.0 高速固態硬盤。支持三屏 4K 同步輸出，通過 2×HDMI2.0 + DP1.4 (Type‑C) 實現多顯示器聯動；兼容 Win10、Win11、Linux 系統。適合多窗口辦公、商務辦公、設計製圖等需要多屏幕協同工作的商用場景。

MTN‑FP750

全性能旗艦迷你主機，搭載 AMD R7‑7735HS 8 核處理器，搭配 Radeon 680M 核顯，圖形性能強勁。標配 32GB 內存 + 512GB SSD，支持 SUHD 4K 三屏顯示輸出。可流暢應對高清影音、輕度遊戲、內容剪輯創作，兼顧家用娛樂與生產力需求，打造緊湊型高性能桌面主機。"""

new_text_en = """The Maxtang Mini PC series is a comprehensive miniaturized desktop computing solution. The product line covers multiple tiers, including entry-level silent office setups, multi-display productivity configurations, and high-performance audio-visual entertainment systems. Packing complete PC performance into a compact chassis, it provides a cost-effective mini host choice for home users, business professionals, DIY enthusiasts, and small server applications.

The entire product matrix features four main models: the fanless N100 silent version, MTN-FP650 (R7-5800H), MTN-AL50 (Intel Core i5/i7), and MTN-FP750 (R7-7735HS). They uniformly adopt a refined metal casing, rich interfaces, support hardware expansion, and are compatible with multiple OS including Windows and Linux, meeting diverse performance and budget needs.
Product Series Details

Fanless Mini PC (Intel N100)

Highlighting **zero noise 7x24 continuous operation**, it utilizes a passive fin cooling design where the fanless structure completely eliminates fan noise, making it ideal for long-duration standby tasks. It is powered by a 12th-gen Intel N100 processor. Storage supports 1×M.2 2280 SATA drive slot + 1×SATA (FPC) drive slot, with a dual-drive layout for convenient capacity expansion. Memory utilizes single-channel SO-DIMM DDR4, upgradable to a maximum of 32GB. It is also equipped with a 2500Mbps high-speed Ethernet port.
With stable low-power output, it is highly suitable for scenarios such as home soft routers, lightweight data servers, office terminals, and living room audio-visual setups.

MTN-FP650

A stable, high-performance mini PC for home use, powered by the AMD R7-5800H processor with integrated Radeon graphics. It comes standard with 16GB memory and a 512GB SSD, featuring built-in WiFi and Bluetooth modules for stable and smooth wireless connections. Its compact and portable body, along with complete interface configurations, balances daily office work, web multi-tasking, audio-visual playback, and light creative work, making it a reliable computing choice for homes and small offices.

MTN-AL50

A multi-display office model oriented towards productivity, powered by Intel Core i5/i7 processors. It utilizes dual-channel DDR5 memory, expandable up to 64GB, and is equipped with an NVMe PCIe 4.0 high-speed solid-state drive. It supports synchronous 4K triple-screen output via 2×HDMI2.0 + DP1.4 (Type-C) for multi-monitor linkage, and is compatible with Win10, Win11, and Linux systems. It is suitable for commercial scenarios requiring multi-screen collaboration, such as multi-window operations, business workflows, and design drafting.

MTN-FP750

An all-performance flagship mini PC, powered by the AMD R7-7735HS 8-core processor paired with Radeon 680M integrated graphics for strong graphical performance. It comes standard with 32GB memory and a 512GB SSD, supporting SUHD 4K triple-screen display output. It smoothly handles high-definition audio-visuals, light gaming, and content editing/creation, balancing home entertainment and productivity needs to build a compact, high-performance desktop host."""

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
    print("Project Maxtang text updated to final version.")
else:
    print("Project not found.")
