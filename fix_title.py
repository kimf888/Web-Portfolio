import sys

with open('src/data/projectsData.ts', 'r') as f:
    content = f.read()

target = "title: '自行车视觉展示',"
replacement = "title: '自行车产品三维视觉渲染项目',"

if target in content:
    content = content.replace(target, replacement)
    with open('src/data/projectsData.ts', 'w') as f:
        f.write(content)
    print('Title updated successfully')
else:
    print('Target title not found')
