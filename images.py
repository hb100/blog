import os
import re
import shutil
import urllib.parse

# Paths
posts_dir = r"C:\Users\jmill\Documents\hb100-blog\content\posts"
attachments_dir = r"C:\Users\jmill\OneDrive\Prive\hb100\attachments"
static_images_dir = r"C:\Users\jmill\Documents\hb100-blog\static\images"

# Zorg dat de images folder bestaat
os.makedirs(static_images_dir, exist_ok=True)

# Regex om afbeeldingen te vinden (zowel attachments als images)
image_regex = re.compile(r'!\[.*?\]\((?:\.\./attachments/|/images/)([^)]*\.(?:png|jpg|jpeg|gif))\)')

# Controleer bestanden in attachments map
print(f"\n📂 Bestanden in attachments map: {os.listdir(attachments_dir)}")

# Loop door alle Markdown bestanden
for filename in os.listdir(posts_dir):
    if filename.endswith(".md"):
        filepath = os.path.join(posts_dir, filename)

        with open(filepath, "r", encoding="utf-8") as file:
            content = file.read()

        # Zoek afbeeldingen die mogelijk nog in attachments staan
        matches = image_regex.findall(content)

        print(f"\n🔍 Gevonden afbeeldingen in {filename}: {matches}")

        for image_name in matches:
            print(f"\n🌐 Bestandsnaam uit Markdown: {image_name}")

            # Decodeer de bestandsnaam voor het besturingssysteem
            image_name_system = urllib.parse.unquote(image_name)
            print(f"📝 Decoded bestandsnaam voor OS: {image_name_system}")

            # Pad naar de originele afbeelding in attachments
            image_source = os.path.join(attachments_dir, image_name_system)

            # Pad naar de nieuwe locatie in Hugo's static folder
            image_dest = os.path.join(static_images_dir, image_name_system)

            # Controleer of het bestand nog in attachments staat en kopieer indien nodig
            if os.path.exists(image_source):
                print(f"✅ Bestand gevonden in attachments: {image_source}")

                try:
                    shutil.copy2(image_source, image_dest)
                    print(f"📂 Gekopieerd naar: {image_dest}")
                except Exception as e:
                    print(f"❌ Fout bij kopiëren: {e}")
            else:
                print(f"⚠ Bestand niet gevonden in attachments: {image_source}")

            # Update Markdown met de juiste /images/ verwijzing
            new_markdown_link = f"![](/images/{image_name})"
            content = re.sub(rf'!\[.*?\]\((?:\.\./attachments/|/images/){re.escape(image_name)}\)', new_markdown_link, content)
            print(f"📝 Markdown-link bijgewerkt naar: {new_markdown_link}")

        # Markdown bestand opslaan met updates
        with open(filepath, "w", encoding="utf-8") as file:
            file.write(content)

print("\n✅ Markdown bestanden verwerkt en afbeeldingen correct gekopieerd!")
