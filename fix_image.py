import sys

target = '''                ) : (
                  <>
                    <img
                      src={project.hiFiUrl || project.coverImage || project.thumbnail}
                      alt={project.title}
                      className="w-full h-auto object-cover block"
                    />
                    {project.additionalImages && project.additionalImages.map((imgUrl, idx) => (
                      <img
                        key={idx}
                        src={imgUrl}
                        alt={`${project.title} additional ${idx}`}
                        className="w-full h-auto object-cover block"
                      />
                    ))}
                  </>
                )}'''

replacement = '''                ) : (
                  <>
                    {(!project.additionalImages || project.additionalImages.length === 0) && (
                      <img
                        src={project.hiFiUrl || project.coverImage || project.thumbnail}
                        alt={project.title}
                        className="w-full h-auto object-cover block"
                      />
                    )}
                    {project.additionalImages && project.additionalImages.map((imgUrl, idx) => (
                      <img
                        key={idx}
                        src={imgUrl}
                        alt={`${project.title} additional ${idx}`}
                        className="w-full h-auto object-cover block"
                      />
                    ))}
                  </>
                )}'''

with open('src/components/ProjectModal.tsx', 'r') as f:
    content = f.read()

if target in content:
    content = content.replace(target, replacement)
    with open('src/components/ProjectModal.tsx', 'w') as f:
        f.write(content)
    print('Replaced successfully')
else:
    print('Target not found, check the file content')
