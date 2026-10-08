import sys

with open('src/data/projectsData.ts', 'r') as f:
    content = f.read()

start = content.find("id: 'prism-brand-system'")
if start != -1:
    hifi_pos = content.find("hiFiUrl: 'https://picsum.photos/seed/prismdesignsys/1200/800',", start)
    if hifi_pos != -1:
        # We will insert additionalImages just before hiFiUrl or after.
        new_content = content[:hifi_pos] + "additionalImages: ['https://i.ibb.co/TMhHvd4k/1-01.jpg', 'https://i.ibb.co/5WHbNrcR/T-1.jpg'],\n    " + content[hifi_pos:]
        with open('src/data/projectsData.ts', 'w') as f:
            f.write(new_content)
        print("Updated successfully")
    else:
        print("hiFiUrl not found")
else:
    print("Project not found")
