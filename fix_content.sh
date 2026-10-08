sed -i '84,98c\
          {/* Modal Content Area */}\
          <div className={`overflow-y-auto flex-1 ${activeTab === '\''images'\'' ? '\'\'' : '\''p-6 space-y-6'\''}`}>\
            {/* VIEW 1: 图片展示 - 一整张图片 */}\
            {activeTab === '\''images'\'' && (\
              <div className="w-full h-full flex flex-col items-center">\
                {project.iframeUrl ? (\
                  <iframe \
                    src={project.iframeUrl} \
                    className="w-full h-[80vh] min-h-[600px] border-none"\
                    title={project.title}\
                    allowFullScreen\
                  />\
                ) : (\
                  <>' src/components/ProjectModal.tsx
