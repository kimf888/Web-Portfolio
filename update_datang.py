import sys

new_text_zh_cn = """本项目为深圳市大唐计算机有限公司企业产品手册设计，主要围绕企业品牌形象、发展历程、技术研发、生产制造、行业应用以及核心产品体系进行完整的视觉呈现。大唐计算机成立于2009年，是一家集行业专用计算机及消费级便携式计算设备研发、生产、销售与服务于一体的高新技术企业，产品覆盖嵌入式工业主板、嵌入式工控机、OPS、嵌入式准系统、工业主机、Mini PC、一体机等多个产品方向，并面向全球客户提供定制化、高性能及可靠的计算产品与解决方案。

项目并非单纯以产品展示为核心，而是从企业品牌认知建立出发，对公司从成立至今的发展历程、技术积累、研发团队、制造体系、质量控制及行业布局进行重新梳理，再将企业能力与具体产品建立关联，形成“企业实力—技术能力—产品体系—行业应用”的完整内容逻辑。

在企业介绍部分，通过公司定位、业务范围、全球客户、研发团队及企业规模等信息，建立品牌基础认知。大唐拥有超过15年的行业经验，全球客户超过1500家，并持续进行自主研发，同时与北京航空航天大学开展产学研合作。公司研发团队拥有多名具有多年行业经验的高级研发工程师及产品设计团队，为企业产品开发和技术迭代提供持续支持。

在企业发展历程部分，对2009年至2024年的重要发展节点进行时间轴整理，从早期低功耗处理器平台主板、无风扇工控主机，到后续Intel、AMD平台产品、AI工业相机、嵌入式PC、单板计算机以及IXH系列无风扇工业箱式PC等产品的持续推出，将企业的发展过程与产品技术迭代结合起来，使企业成长过程能够通过产品和技术的发展直观呈现。

研发能力是整个产品手册中的重要内容之一。项目将企业研发服务进行模块化整理，包括工业系统设计、散热设计、产品模拟、3D CAD主板模型设计、软件及BIOS技术支持、主板修改、子系统集成、加固服务、扩展温度筛选以及产品生命周期管理等内容。通过对研发能力的系统呈现，突出企业不仅具备标准产品研发能力，同时能够针对不同客户需求提供定制化产品及工程技术支持。

在制造能力与品质体系部分，则重点展示企业的生产环境、自动化生产设备及质量控制流程。大唐拥有4000余平方米现代化生产及无尘测试车间，并配置精密生产线及多种研发、检测和自动化制造设备，形成从生产、检测到质量管理的完整制造体系。产品手册进一步从原材料选择、生产工艺、过程检测以及出厂检验等维度进行展示，并结合ISO9001、RoHS、FCC、CE、3C等认证信息，强化品牌在产品品质、可靠性和国际市场标准方面的专业形象。

在产品体系展示部分，根据企业实际产品结构进行分类，将工业主板、ATX主板、Mini ITX主板、单板计算机、核心板及定制板，以及工业计算机、嵌入式设备、Mini PC等不同产品进行统一规划。针对硬件产品信息复杂、参数较多的特点，将产品型号、处理器、内存、存储、显示接口、电源、尺寸、温度等技术参数进行结构化整理，通过统一的信息层级和产品视觉展示方式，让专业的硬件产品信息更加直观、易读。

同时，项目并没有将产品局限于单独的硬件展示，而是进一步延伸至行业应用与解决方案。结合企业产品能力，对物联网、能源管理、监控、数据存储、通信、网络安全、数字标牌、边缘计算、工业自动化、智能交通、自助服务终端、车载计算及机器视觉等应用方向进行内容整合，从产品本身进一步延伸到实际使用场景，帮助用户理解不同计算产品在具体行业中的应用价值。

此外，产品手册还通过企业与Intel、AMD等行业企业的长期战略合作，以及CES、Integrated Systems Europe、Embedded World、India Expo Convergence、COMPUTEX等国际行业展会的信息，进一步强化品牌的全球化定位与行业影响力。

设计目标

本项目的核心并不是简单罗列企业信息和产品参数，而是通过信息架构、产品视觉、版式系统和品牌内容整合，将一个技术型、信息密度较高的工业计算机企业转化为更加清晰、专业且具有科技感的品牌视觉表达。

整体内容以企业为主线，以产品为核心，通过发展历程建立品牌厚度，以研发和制造能力建立专业信任，再通过产品矩阵及行业应用体现企业的实际业务能力，最终形成一套兼具企业宣传、品牌展示、产品介绍及商务沟通功能的完整产品手册。"""

new_text_zh_tw = """本項目為深圳市大唐計算機有限公司企業產品手冊設計，主要圍繞企業品牌形象、發展歷程、技術研發、生產製造、行業應用以及核心產品體系進行完整的視覺呈現。大唐計算機成立於2009年，是一家集行業專用計算機及消費級便攜式計算設備研發、生產、銷售與服務於一體的高新技術企業，產品覆蓋嵌入式工業主板、嵌入式工控機、OPS、嵌入式準系統、工業主機、Mini PC、一體機等多個產品方向，並面向全球客戶提供定制化、高性能及可靠的計算產品與解決方案。

項目並非單純以產品展示為核心，而是從企業品牌認知建立出發，對公司從成立至今的發展歷程、技術積累、研發團隊、製造體系、質量控制及行業佈局進行重新梳理，再將企業能力與具體產品建立關聯，形成“企業實力—技術能力—產品體系—行業應用”的完整內容邏輯。

在企業介紹部分，通過公司定位、業務範圍、全球客戶、研發團隊及企業規模等信息，建立品牌基礎認知。大唐擁有超過15年的行業經驗，全球客戶超過1500家，並持續進行自主研發，同時與北京航空航天大學開展產學研合作。公司研發團隊擁有多名具有多年行業經驗的高級研發工程師及產品設計團隊，為企業產品開發和技術迭代提供持續支持。

在企業發展歷程部分，對2009年至2024年的重要發展節點進行時間軸整理，從早期低功耗處理器平台主板、無風扇工控主機，到後續Intel、AMD平台產品、AI工業相機、嵌入式PC、單板計算機以及IXH系列無風扇工業箱式PC等產品的持續推出，將企業的發展過程與產品技術迭代結合起來，使企業成長過程能夠通過產品和技術的發展直觀呈現。

研發能力是整個產品手冊中的重要內容之一。項目將企業研發服務進行模塊化整理，包括工業系統設計、散熱設計、產品模擬、3D CAD主板模型設計、軟件及BIOS技術支持、主板修改、子系統集成、加固服務、擴展溫度篩選以及產品生命周期管理等內容。通過對研發能力的系統呈現，突出企業不僅具備標準產品研發能力，同時能夠針對不同客戶需求提供定制化產品及工程技術支持。

在製造能力與品質體系部分，則重點展示企業的生產環境、自動化生產設備及質量控制流程。大唐擁有4000餘平方米現代化生產及無塵測試車間，並配置精密生產線及多種研發、檢測和自動化製造設備，形成從生產、檢測到質量管理的完整製造體系。產品手冊進一步從原材料選擇、生產工藝、過程檢測以及出廠檢驗等維度進行展示，並結合ISO9001、RoHS、FCC、CE、3C等認證信息，強化品牌在產品品質、可靠性和國際市場標準方面的專業形象。

在產品體系展示部分，根據企業實際產品結構進行分類，將工業主板、ATX主板、Mini ITX主板、單板計算機、核心板及定制板，以及工業計算機、嵌入式設備、Mini PC等不同產品進行統一規劃。針對硬件產品信息複雜、參數較多的特點，將產品型號、處理器、內存、存儲、顯示接口、電源、尺寸、溫度等技術參數進行結構化整理，通過統一的信息層級和產品視覺展示方式，讓專業的硬件產品信息更加直觀、易讀。

同時，項目並沒有將產品局限於單獨的硬件展示，而是進一步延伸至行業應用與解決方案。結合企業產品能力，對物聯網、能源管理、監控、數據存儲、通信、網絡安全、數字標牌、邊緣計算、工業自動化、智能交通、自助服務終端、車載計算及機器視覺等應用方向進行內容整合，從產品本身進一步延伸到實際使用場景，幫助用戶理解不同計算產品在具體行業中的應用價值。

此外，產品手冊還通過企業與Intel、AMD等行業企業的長期戰略合作，以及CES、Integrated Systems Europe、Embedded World、India Expo Convergence、COMPUTEX等國際行業展會的信息，進一步強化品牌的全球化定位與行業影響力。

設計目標

本項目的核心並不是簡單羅列企業信息和產品參數，而是通過信息架構、產品視覺、版式系統和品牌內容整合，將一個技術型、信息密度較高的工業計算機企業轉化為更加清晰、專業且具有科技感的品牌視覺表達。

整體內容以企業為主線，以產品為核心，通過發展歷程建立品牌厚度，以研發和製造能力建立專業信任，再通過產品矩陣及行業應用體現企業的實際業務能力，最終形成一套兼具企業宣傳、品牌展示、產品介紹及商務溝通功能的完整產品手冊。"""

new_text_en = """This project involves the design of the corporate product brochure for Shenzhen Datang Computer Co., Ltd., focusing primarily on a comprehensive visual presentation of the corporate brand image, development history, technology R&D, manufacturing, industry applications, and core product system. Founded in 2009, Datang Computer is a high-tech enterprise integrating R&D, production, sales, and service of industry-specific computers and consumer portable computing devices. Its products cover multiple segments including embedded industrial motherboards, embedded IPCs, OPS, embedded barebone systems, industrial hosts, Mini PCs, and all-in-one PCs, providing customized, high-performance, and reliable computing products and solutions to global customers.

Rather than focusing purely on product display, the project starts with establishing brand awareness. It reorganizes the company's development timeline from its inception to the present, technological accumulation, R&D team, manufacturing systems, quality control, and industry layout. It then links corporate capabilities with specific products to form a complete content logic of "Corporate Strength – Technical Capability – Product System – Industry Application."

In the corporate introduction section, basic brand recognition is established through information on company positioning, business scope, global clientele, R&D team, and enterprise scale. Datang possesses over 15 years of industry experience with more than 1,500 global customers. It continually conducts independent R&D while engaging in industry-university-research cooperation with Beihang University. The R&D team comprises numerous senior R&D engineers and product designers with extensive industry experience, providing sustained support for corporate product development and technical iteration.

The corporate development history section organizes key milestones from 2009 to 2024 into a timeline. From early low-power processor platform motherboards and fanless industrial hosts to the continuous rollout of Intel and AMD platform products, AI industrial cameras, embedded PCs, single-board computers, and IXH series fanless industrial box PCs, the enterprise's development process is combined with product and technological iterations. This allows the company's growth to be visually presented through the advancement of its products and technology.

R&D capability is a crucial component of the entire product brochure. The project modularizes corporate R&D services, covering industrial system design, thermal design, product simulation, 3D CAD motherboard modeling, software and BIOS technical support, motherboard modification, subsystem integration, ruggedization services, extended temperature screening, and product lifecycle management. Through a systematic presentation of these capabilities, it highlights that the enterprise not only possesses standard product R&D abilities but can also provide customized products and engineering support tailored to different customer needs.

The manufacturing capability and quality system section focuses on showcasing the enterprise's production environment, automated manufacturing equipment, and quality control workflows. Datang operates a modern production and dust-free testing workshop spanning over 4,000 square meters, equipped with precision production lines alongside various R&D, testing, and automated manufacturing equipment, forming a comprehensive manufacturing system from production to quality management. The product brochure further displays dimensions such as raw material selection, production processes, in-process testing, and final outgoing inspections, combined with certification information like ISO9001, RoHS, FCC, CE, and 3C, reinforcing the brand's professional image regarding product quality, reliability, and international market standards.

In the product system display section, products are categorized according to the actual corporate product structure, unifying diverse lines such as industrial motherboards, ATX motherboards, Mini ITX motherboards, single-board computers, core boards, custom boards, as well as industrial computers, embedded devices, and Mini PCs. Addressing the complex and parameter-heavy nature of hardware product information, technical specs—including product model, processor, memory, storage, display interfaces, power supply, dimensions, and temperature ranges—are structurally organized. Through a unified information hierarchy and visual presentation format, professional hardware product data becomes much more intuitive and readable.

Furthermore, the project does not confine the products to isolated hardware displays but extends into industry applications and solutions. Combining the enterprise's product capabilities, it integrates content across application vectors such as IoT, energy management, surveillance, data storage, communications, network security, digital signage, edge computing, industrial automation, intelligent transportation, self-service kiosks, in-vehicle computing, and machine vision. Extending from the product itself to actual usage scenarios helps users understand the application value of different computing products in specific industries.

Additionally, the product brochure reinforces the brand's global positioning and industry influence through information regarding long-term strategic partnerships with industry leaders like Intel and AMD, as well as participation in international trade shows such as CES, Integrated Systems Europe, Embedded World, India Expo Convergence, and COMPUTEX.

Design Goals

The core of this project is not simply listing corporate information and product parameters. Instead, through information architecture, product visuals, typography systems, and brand content integration, it transforms a technology-driven, information-dense industrial computer enterprise into a much clearer, more professional, and tech-forward brand visual expression.

The overall content uses the enterprise as the main thread and the products as the core. It builds brand depth through the development history, establishes professional trust through R&D and manufacturing capabilities, and demonstrates actual business competence through the product matrix and industry applications. Ultimately, this creates a comprehensive product brochure that seamlessly blends corporate promotion, brand display, product introduction, and business communication functionalities."""

with open('src/data/projectsData.ts', 'r') as f:
    content = f.read()

start = content.find("id: 'prism-brand-system'")
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
        
    client_start = content.find("client: '", start)
    client_end = content.find("',", client_start)
    if client_start != -1 and client_end != -1:
        content = content[:client_start] + "client: '深圳市大唐计算机有限公司 (Datang Computer)'" + content[client_end+1:]
        
    with open('src/data/projectsData.ts', 'w') as f:
        f.write(content)
    print("Project prism-brand-system updated.")
else:
    print("Project not found.")
