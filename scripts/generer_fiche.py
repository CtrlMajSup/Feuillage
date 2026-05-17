import os
import datetime
from google import genai

# 1. Connexion à l'IA avec la clé secrète
client = genai.Client(api_key=os.environ["GEMINI_API_KEY"])

# 2. Définir le prompt (ce que l'IA doit écrire)
prompt = """
Rédige une fiche de blog au format Markdown. 
Le sujet : 'Une astuce de productivité ou de développement informatique aléatoire'.
Donne un titre accrocheur, utilise des sous-titres, et du code si nécessaire.
Ne mets pas de balises génériques au début, commence directement par le contenu.
"""

# 3. Appel de l'IA
response = client.models.generate_content(
    model='gemini-2.5-flash',
    contents=prompt,
)

# 4. Création du fichier Jekyll avec le Front Matter
date_str = datetime.date.today().strftime("%Y-%m-%d")
filename = f"_posts/{date_str}-fiche-ia.md"

front_matter = f"""---
layout: post
title: "Fiche IA du {date_str}"
date: {date_str}
categories: fiches
---

"""

with open(filename, "w", encoding="utf-8") as f:
    f.write(front_matter + response.text)

print(f"Fiche générée par l'IA avec succès : {filename}")
