import re

with open('src/components/ProjectModal.tsx', 'r') as f:
    content = f.read()

# Replace the messed up block
mess = """              <button
                onClick={onClose}          {/* Modal Content Area */}
          <div className={`overflow-y-auto flex-1 ${activeTab === 'images' ? '' : 'p-6 space-y-6'}`}>
            {/* VIEW 1: 图片展示 - 一整张图片 */}
            {activeTab === 'images' && (
              <div className="w-full h-full flex flex-col items-center">
                {project.iframeUrl ? (
                  <iframe 
                    src={project.iframeUrl} 
                    className="w-full h-[80vh] min-h-[600px] border-none"
                    title={project.title}
                    allowFullScreen
                  />
                ) : (
                  <>                <X className="w-4 h-4 text-slate-500" />
              </button>
            </div>
          </div>
          {/* Modal Content Area */}
          <div className={`overflow-y-auto flex-1 ${activeTab === 'images' ? '' : 'p-6 space-y-6'}`}>
                  <>"""

correct = """              <button
                onClick={onClose}
                className="flex items-center gap-1.5 px-3 py-1.5 bg-white border border-slate-200 text-slate-700 hover:bg-slate-100 transition-colors text-xs font-semibold shadow-2xs"
                aria-label={t.closeCase[lang]}
              >
                <span>{t.closeCase[lang]}</span>
                <X className="w-4 h-4 text-slate-500" />
              </button>
            </div>
          </div>

          {/* Modal Content Area */}
          <div className={`overflow-y-auto flex-1 ${activeTab === 'images' ? '' : 'p-6 space-y-6'}`}>
            
            {/* VIEW 1: 图片展示 - 一整张图片 */}
            {activeTab === 'images' && (
              <div className="w-full h-full flex flex-col items-center">
                {project.iframeUrl ? (
                  <iframe 
                    src={project.iframeUrl} 
                    className="w-full h-[80vh] min-h-[600px] border-none"
                    title={project.title}
                    allowFullScreen
                  />
                ) : (
                  <>"""

new_content = content.replace(mess, correct)

with open('src/components/ProjectModal.tsx', 'w') as f:
    f.write(new_content)

print("Fixed!")
