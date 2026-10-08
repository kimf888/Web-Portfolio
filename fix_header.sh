sed -i '50,105c\
          {/* Top Header Bar */}\
          <div className="px-5 py-4 bg-slate-50 border-b border-slate-200 flex flex-wrap items-center justify-between gap-3 shrink-0">\
            {/* Tab Toggle Controls */}\
            <div className="flex items-center gap-2.5 min-w-0">\
              <div className="flex items-center p-1 bg-slate-200/70 border border-slate-200">\
                <button\
                  onClick={() => setActiveTab('\''images'\'')}\
                  className={`flex items-center gap-1.5 px-3 py-1.5  text-xs font-semibold font-mono transition-all ${\
                    activeTab === '\''images'\''\n                      ? '\''bg-white text-slate-900 shadow-xs'\''\n                      : '\''text-slate-600 hover:text-slate-900'\''\n                  }`}\
                >\
                  <ImageIcon className="w-3.5 h-3.5" style={{ color: activeTab === '\''images'\'' ? accentHex : undefined }} />\
                  <span>{t.imagesTab[lang]}</span>\
                </button>\
                <button\
                  onClick={() => setActiveTab('\''desc'\'')}\
                  className={`flex items-center gap-1.5 px-3 py-1.5  text-xs font-semibold font-mono transition-all ${\
                    activeTab === '\''desc'\''\n                      ? '\''bg-white text-slate-900 shadow-xs'\''\n                      : '\''text-slate-600 hover:text-slate-900'\''\n                  }`}\
                >\
                  <FileText className="w-3.5 h-3.5" style={{ color: activeTab === '\''desc'\'' ? accentHex : undefined }} />\
                  <span>{t.descTab[lang]}</span>\
                </button>\
              </div>\
            </div>\
            {/* View Switchers & Close Button */}\
            <div className="flex items-center gap-2 sm:gap-3 shrink-0 ml-auto">\
              {/* 关闭案例 Button */}\
              <button\
                onClick={onClose}\
                className="flex items-center gap-1.5 px-3 py-1.5 bg-white border border-slate-200 text-slate-700 hover:bg-slate-100 transition-colors text-xs font-semibold shadow-2xs"\
                aria-label={t.closeCase[lang]}\
              >\
                <span>{t.closeCase[lang]}</span>\
                <X className="w-4 h-4 text-slate-500" />\
              </button>\
            </div>\
          </div>\
          {/* Modal Content Area */}\
          <div className={`overflow-y-auto flex-1 ${activeTab === '\''images'\'' ? '\'\'' : '\''p-6 space-y-6'\''}`}>' src/components/ProjectModal.tsx
