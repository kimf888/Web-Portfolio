import sys
import re

with open('src/data/projectsData.ts', 'r') as f:
    content = f.read()

start = content.find("id: 'lumen-health-mobile'")
if start != -1:
    # Update client
    client_start = content.find("client: 'Lumen Health Bio',", start)
    if client_start != -1:
        content = content[:client_start] + "client: 'Datang Computer (大唐计算机)'," + content[client_start + len("client: 'Lumen Health Bio',"):]
    
    # Update problem
    start = content.find("id: 'lumen-health-mobile'")
    prob_start = content.find("problem: {", start)
    prob_end = content.find("    },", prob_start)
    if prob_start != -1 and prob_end != -1:
        new_prob = """problem: {
      en: '',
      'zh-CN': '',
      'zh-TW': '',
"""
        content = content[:prob_start] + new_prob + content[prob_end:]
        
    # Update solution
    start = content.find("id: 'lumen-health-mobile'")
    sol_start = content.find("solution: {", start)
    sol_end = content.find("    },", sol_start)
    if sol_start != -1 and sol_end != -1:
        new_sol = """solution: {
      en: '',
      'zh-CN': '',
      'zh-TW': '',
"""
        content = content[:sol_start] + new_sol + content[sol_end:]

    with open('src/data/projectsData.ts', 'w') as f:
        f.write(content)
    print("Fixed extra metadata")
else:
    print("Project not found")
