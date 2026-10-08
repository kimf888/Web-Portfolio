import React from 'react';
import { Language } from '../types';
import portraitImgColor from '../assets/images/user_portrait.jpg';
import portraitImgGray from '../assets/images/user_portrait_gray.jpg';
import contactBg from '../assets/images/contact_bg.jpg';
import wechatQr from '../assets/images/wechat_qr.png';
import { useInView } from '../hooks/useInView';

interface ContactSectionProps {
  lang: Language;
  accentHex: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ lang }) => {
  const { ref, isInView } = useInView<HTMLElement>({ threshold: 0.1, rootMargin: '0px 0px -60px 0px' });

  return (
    <section 
      ref={ref}
      id="contact" 
      className="relative py-16 sm:py-20 lg:py-24 bg-black text-white scroll-mt-16 border-b border-neutral-800 overflow-hidden"
    >
      {/* Background Image Layer (清晰原图展示，无模糊处理) */}
      <div 
        className={`absolute inset-0 z-0 pointer-events-none overflow-hidden select-none transition-opacity duration-1000 ease-out ${
          isInView ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <img
          src={contactBg}
          alt=""
          className="w-full h-full object-cover object-center"
        />
      </div>

      <div className="relative z-10 w-[1920px] max-w-full mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Minimalist Header Line */}
        <div 
          className={`pb-4 border-b border-neutral-800 mb-12 sm:mb-16 flex items-center gap-6 text-[11px] font-mono tracking-widest text-neutral-400 uppercase transition-all duration-1000 ease-out ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <span className="text-neutral-500 font-bold">01</span>
          <span className="text-neutral-300 font-semibold tracking-[0.2em]">ABOUT THE DESIGNER</span>
        </div>

        {/* Main 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center mb-16 lg:mb-20">
          
          {/* Left: Designer Stylized Portrait Card (Slow Entrance for Image & Typography) */}
          <div 
            className={`lg:col-span-5 relative w-full h-[573px] bg-[#0c0c0c] border border-neutral-800 overflow-hidden shadow-2xl group transition-all duration-1000 ease-out delay-150 ${
              isInView ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-10 scale-[0.97]'
            }`}
            style={{ height: '573px' }}
          >
            {/* Pure Image Layer (默认灰底，鼠标移入直接显示全幅原色彩图) */}
            <div className="absolute inset-0 z-0">
              {/* Default Gray Background Image */}
              <img
                src={portraitImgGray}
                alt="Designer Portrait (Gray)"
                className="w-full h-full object-cover object-center"
                style={{ height: '573px' }}
              />

              {/* Full Color Original Image (Hover Direct Reveal with Slight Scale-Up) */}
              <img
                src={portraitImgColor}
                alt="Designer Portrait (Color)"
                className="absolute inset-0 w-full h-full object-cover object-center opacity-0 group-hover:opacity-100 scale-100 group-hover:scale-105 transition-all duration-700 ease-out"
                style={{ height: '573px' }}
              />
            </div>

            {/* Dedicated Floating Text Layer (缓慢显现文字) */}
            <div className="absolute inset-0 z-20 pointer-events-none select-none flex flex-col justify-end p-6 sm:p-8">
              {/* Bottom Main Typography */}
              <div 
                className={`transition-all duration-1000 ease-out delay-300 ${
                  isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}
              >
                <div className="text-2xl sm:text-3xl lg:text-[32px] font-extrabold text-white tracking-tight uppercase leading-tight font-sans drop-shadow-[0_4px_12px_rgba(0,0,0,0.85)]">
                  GUODONG-ZHENG
                </div>
                <div className="text-lg sm:text-xl lg:text-[22px] font-semibold text-neutral-200 tracking-wider mt-1.5 font-sans drop-shadow-[0_2px_8px_rgba(0,0,0,0.85)]">
                  郑国栋
                </div>
              </div>
            </div>
          </div>

          {/* Right: Bio & 3 Highlight Cards */}
          <div 
            className={`lg:col-span-7 flex flex-col justify-center transition-all duration-1000 ease-out delay-200 ${
              isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            
            {/* Tagline Indicator */}
            <div className="flex items-center gap-3 mb-4 sm:mb-5">
              <span className="w-6 h-[2px] bg-[#2563EB]" />
              <span className="text-xs font-bold text-[#2563EB] tracking-wider uppercase">
                {lang === 'en' ? 'VISUAL DESIGNER' : '视觉设计师'}
              </span>
              <span className="text-xs font-mono text-neutral-400 tracking-widest uppercase">
                BASED IN CHINA
              </span>
            </div>

            {/* Huge Headline */}
            <h2 className="text-3xl sm:text-4xl lg:text-[46px] font-extrabold text-white tracking-tight leading-tight mb-6">
              {lang === 'en' ? 'About Me' : '关于我'}
            </h2>

            {/* Narrative Paragraphs */}
            <div className="space-y-4 text-sm sm:text-[15px] leading-relaxed text-neutral-300 font-normal mb-8 sm:mb-10 text-justify">
              <p>
                {lang === 'en'
                  ? 'I am a visual designer with years of experience in advertising creativity and design execution. Specializing in translating business objectives and brand emotions into sharp, memorable visual languages, delivering end-to-end systems from concept and key visuals to official portals and campaign assets.'
                  : '我是一名视觉设计师，拥有多年广告创意与设计执行经验。擅长从商业目标与品牌情绪出发，建立清晰、有记忆点的视觉语言，并完成从概念、KV 到官网与传播物料的系统落地。'}
              </p>
              <p>
                {lang === 'en'
                  ? 'Integrating AIGC and Vibe Coding into creative workflows, accelerating visual exploration, interactive prototyping, and motion experiments through AI collaboration. Constantly tracking cutting-edge AI technologies to turn new paradigms into higher productivity and truly breathtaking visual experiences.'
                  : '同时将 AIGC 与 Vibe Coding 融入创作流程，通过 AI 协同快速完成视觉探索、交互原型和动态实验。持续关注前沿 AI 应用，把新技术转化为更高的工作效率，以及真正令人惊艳的视觉效果。'}
              </p>
            </div>

            {/* Profile & Contact Details Grid (50% 透明度色块 + 右侧微信二维码) */}
            <div className="min-h-[300px] border-t border-neutral-800 bg-[#0a0a0a]/50 backdrop-blur-md p-6 sm:p-8 border rounded-lg border-neutral-800/80 font-sans shadow-xl flex flex-col justify-between">
              
              {/* Header Title inside table */}
              <div className="flex items-center justify-between pb-3.5 mb-2 border-b border-neutral-800/80">
                <div className="flex items-center gap-2.5">
                  <span className="w-2 h-2 rounded-full bg-blue-500" />
                  <h4 className="text-[14px] sm:text-[15px] font-bold text-white tracking-wide font-sans">
                    {lang === 'en' ? 'Bio / Personal Profile' : 'Bio / 个人简信'}
                  </h4>
                </div>
                <span className="text-[11px] font-mono text-neutral-500 uppercase tracking-widest">
                  PROFILE DATA
                </span>
              </div>

              <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 items-center justify-between flex-1 pt-1">
                {/* Left: Contact Info List in 2 Columns */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-3.5 flex-1 w-full">
                  {/* Availability */}
                  <div className="flex items-center justify-between py-2 border-b border-neutral-800/60 gap-4">
                    <span className="text-sm sm:text-[15px] font-medium text-neutral-400 tracking-normal font-sans">Availability:</span>
                    <span className="text-base sm:text-[17px] font-bold text-white flex items-center gap-2 font-sans">
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse shrink-0" />
                      随时到岗
                    </span>
                  </div>

                  {/* ProfessionalExperience */}
                  <div className="flex items-center justify-between py-2 border-b border-neutral-800/60 gap-4">
                    <span className="text-sm sm:text-[15px] font-medium text-neutral-400 tracking-normal font-sans">ProfessionalExperience:</span>
                    <span className="text-base sm:text-[17px] font-bold text-white font-sans">5年+</span>
                  </div>

                  {/* Phone */}
                  <div className="flex items-center justify-between py-2 border-b border-neutral-800/60 gap-4">
                    <span className="text-sm sm:text-[15px] font-medium text-neutral-400 tracking-normal font-sans">Phone:</span>
                    <a href="tel:15014146569" className="text-base sm:text-[17px] font-bold text-white font-sans hover:text-[#2563EB] transition-colors">15014146569</a>
                  </div>

                  {/* Email */}
                  <div className="flex items-center justify-between py-2 border-b border-neutral-800/60 gap-4">
                    <span className="text-sm sm:text-[15px] font-medium text-neutral-400 tracking-normal font-sans">Email:</span>
                    <a href="mailto:1061860145@qq.com" className="text-base sm:text-[17px] font-bold text-white font-sans hover:text-[#2563EB] transition-colors">1061860145@qq.com</a>
                  </div>

                  {/* WeChat/微信 */}
                  <div className="flex items-center justify-between py-2 border-b border-neutral-800/60 gap-4">
                    <span className="text-sm sm:text-[15px] font-medium text-neutral-400 tracking-normal font-sans">WeChat/微信:</span>
                    <span className="text-base sm:text-[17px] font-bold text-white font-sans">GD15014146569</span>
                  </div>

                  {/* ZCOOL */}
                  <div className="flex items-center justify-between py-2 border-b border-neutral-800/60 gap-4">
                    <span className="text-sm sm:text-[15px] font-medium text-neutral-400 tracking-normal font-sans">ZCOOL:</span>
                    <span className="text-base sm:text-[17px] font-bold text-white font-sans">颠颠鳄</span>
                  </div>
                </div>

                {/* Right: Carved-out Rectangle with QR Code and Bottom Caption */}
                <div className="shrink-0 flex flex-col items-center justify-center p-3 bg-black/40 border border-neutral-800/90 rounded-xl shadow-inner">
                  <img
                    src={wechatQr}
                    alt="WeChat QR Code"
                    className="w-28 h-28 sm:w-32 sm:h-32 object-contain select-none rounded-lg shadow-sm"
                  />
                  <span className="text-[12px] sm:text-[13px] font-medium text-neutral-300 mt-2 tracking-wider text-center">
                    {lang === 'en' ? 'WeChat QR Code' : '微信二维码'}
                  </span>
                </div>
              </div>

            </div>

          </div>

        </div>

        {/* Bottom 4-Column Metadata Matrix Bar (四个div的色块纯正 50% 透明度) */}
        <div 
          className={`grid grid-cols-2 lg:grid-cols-4 border-t border-b border-neutral-800 divide-y sm:divide-y-0 sm:divide-x divide-neutral-800 transition-all duration-1000 ease-out delay-300 shadow-xl ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          
          {/* Col 1: Education */}
          <div className="p-6 sm:p-8 flex flex-col justify-center bg-black/50 backdrop-blur-md hover:bg-black/30 transition-colors">
            <span className="text-[11px] font-mono tracking-[0.2em] text-neutral-500 font-bold uppercase mb-2">
              EDUCATION
            </span>
            <span className="text-[15px] sm:text-[17px] font-bold text-white tracking-wide font-sans">
              {lang === 'en' ? 'Guangzhou University Textile College' : '广州大学纺织服装学院'}
            </span>
          </div>

          {/* Col 2: Focus */}
          <div className="p-6 sm:p-8 flex flex-col justify-center bg-black/50 backdrop-blur-md hover:bg-black/30 transition-colors">
            <span className="text-[11px] font-mono tracking-[0.2em] text-neutral-500 font-bold uppercase mb-2">
              FOCUS
            </span>
            <span className="text-[15px] sm:text-[17px] font-bold text-white tracking-wide font-sans">
              {lang === 'en' ? 'Brand / Campaign / E-Commerce / AIGC' : '品牌 / 活动 / 电商 / AIGC'}
            </span>
          </div>

          {/* Col 3: Tools */}
          <div className="p-6 sm:p-8 flex flex-col justify-center bg-black/50 backdrop-blur-md hover:bg-black/30 transition-colors">
            <span className="text-[11px] font-mono tracking-[0.2em] text-neutral-500 font-bold uppercase mb-2">
              TOOLS
            </span>
            <span className="text-[15px] sm:text-[17px] font-bold text-white tracking-wide font-sans">
              ChatGPT / PS / AI / Blender / 剪映 ...
            </span>
          </div>

          {/* Col 4: Location */}
          <div className="p-6 sm:p-8 flex flex-col justify-center bg-black/50 backdrop-blur-md hover:bg-black/30 transition-colors">
            <span className="text-[11px] font-mono tracking-[0.2em] text-neutral-500 font-bold uppercase mb-2">
              LOCATION
            </span>
            <div className="flex items-center gap-2.5">
              <span className="w-2 h-2 rounded-full bg-blue-500 shrink-0" />
              <span className="text-[15px] sm:text-[17px] font-bold text-white tracking-wide font-sans">
                {lang === 'en' ? 'Shenzhen Longhua / Baishilong' : '深圳龙华区 / 白石龙'}
              </span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
