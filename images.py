import os
import re
import shutil
import urllib.parse  # Voor het decoderen van URL-gecodeerde tekens

# Paths
posts_dir = r"C:\Users\jmill\Documents\hb100-blog\content\posts"
attachments_dir = r"C:\Users\jmill\OneDrive\Prive\hb100\attachments"
static_images_dir = r"C:\Users\jmill\Documents\hb100-blog\static\images"

# Zorg dat de images folder bestaat
os.makedirs(static_images_dir, exist_ok=True)

# Regex om afbeeldingen in Markdown te vinden
image_regex = re.compile(r'!\[\]\((\.\./attachments/([^)]*\.(?:png|jpg|jpeg|gif)))\)')

# Loop door alle markdown bestanden
for filename in os.listdir(posts_dir):
    if filename.endswith(".md"):
        filepath = os.path.join(posts_dir, filename)
        
        with open(filepath, "r", encoding="utf-8") as file:
            content = file.read()

        # Zoek en vervang afbeelding-paden
        matches = image_regex.findall(content)
        
        for full_match, image_name in matches:
            # Houd de originele bestandsnaam met %20 in Markdown intact
            image_name_escaped = image_name  # Laat URL-encoded (%20) intact

            # Decodeer alleen voor bestandsnamen op het besturingssysteem (vervang %20 door spatie)
            image_name_system = urllib.parse.unquote(image_name)

            # Pad naar de originele afbeelding
            image_source = os.path.join(attachments_dir, image_name_system)

            if os.path.exists(image_source):
                # Pad naar de nieuwe locatie in Hugo's static folder
                image_dest = os.path.join(static_images_dir, image_name_system)
                
                # Kopieer de afbeelding
                shutil.copy(image_source, image_dest)

                # **Fix de Markdown-link en behoud correcte encoding (%20 blijft in de URL!)**
                new_markdown_link = f"![](/images/{image_name_escaped})"
                content = content.replace(f"![]({full_match})", new_markdown_link)
            else:
                print(f"⚠ Afbeelding niet gevonden: {image_source}")

        # Sla het aangepaste Markdown bestand op
        with open(filepath, "w", encoding="utf-8") as file:
            file.write(content)

print("✅ Markdown bestanden verwerkt en afbeeldingen correct gekopieerd!")
