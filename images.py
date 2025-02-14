import os
import re
import shutil
import urllib.parse

# Paths for posts, attachments, and static images
posts_dir = r"C:\Users\jmill\Documents\hb100-blog\content\posts"
attachments_dir = r"C:\Users\jmill\OneDrive\Prive\hb100\attachments"
static_images_dir = r"C:\Users\jmill\Documents\hb100-blog\static\images"

# Ensure the images folder exists
os.makedirs(static_images_dir, exist_ok=True)

# Regex to find images in the Markdown body (matches both `../attachments/` and `attachments/`)
image_regex = re.compile(r'!\[.*?\]\((?:\.\./)?attachments/([^)]*\.(?:png|jpg|jpeg|gif))\)')

# Regex to find `cover.image` in the front matter
cover_regex = re.compile(r'cover:\s*\n\s*image:\s*(?:\.\./)?attachments/([^)]*\.(?:png|jpg|jpeg|gif))')

# List files in the attachments directory for debugging
print(f"\n📂 Files in attachments directory: {os.listdir(attachments_dir)}")

# Iterate through all Markdown files
for filename in os.listdir(posts_dir):
    if filename.endswith(".md"):
        filepath = os.path.join(posts_dir, filename)

        with open(filepath, "r", encoding="utf-8") as file:
            content = file.read()

        # Find all images in the Markdown body
        matches = image_regex.findall(content)
        print(f"\n🔍 Found images in {filename}: {matches}")

        # Find cover image in the front matter
        cover_match = cover_regex.search(content)
        cover_image = cover_match.group(1) if cover_match else None
        if cover_image:
            print(f"🖼️ Found cover image: {cover_image}")

        # Process images in the Markdown body
        for image_name in matches:
            print(f"\n🌐 Image filename in Markdown: {image_name}")

            # Decode the filename for the operating system
            image_name_system = urllib.parse.unquote(image_name)
            print(f"📝 Decoded filename for OS: {image_name_system}")

            # Define source and destination paths
            image_source = os.path.join(attachments_dir, image_name_system)
            image_dest = os.path.join(static_images_dir, image_name_system)

            # Copy the image if it still exists in attachments
            if os.path.exists(image_source):
                print(f"✅ Image found in attachments: {image_source}")

                try:
                    shutil.copy2(image_source, image_dest)
                    print(f"📂 Copied to: {image_dest}")
                except Exception as e:
                    print(f"❌ Error copying image: {e}")
            else:
                print(f"⚠ Image not found in attachments: {image_source}")

            # Update Markdown to reference the correct /images/ path
            new_markdown_link = f"![](/images/{image_name})"
            content = re.sub(rf'!\[.*?\]\((?:\.\./)?attachments/{re.escape(image_name)}\)', new_markdown_link, content)
            print(f"📝 Updated Markdown link to: {new_markdown_link}")

        # Process the cover image if it exists
        if cover_image:
            cover_image_system = urllib.parse.unquote(cover_image)
            cover_source = os.path.join(attachments_dir, cover_image_system)
            cover_dest = os.path.join(static_images_dir, cover_image_system)

            if os.path.exists(cover_source):
                print(f"✅ Cover image found: {cover_source}")

                try:
                    shutil.copy2(cover_source, cover_dest)
                    print(f"📂 Cover image copied to: {cover_dest}")
                except Exception as e:
                    print(f"❌ Error copying cover image: {e}")
            else:
                print(f"⚠ Cover image not found: {cover_source}")

            # Ensure the `cover.image` reference in front matter is correctly updated
            content = re.sub(
                rf'cover:\s*\n\s*image:\s*(?:\.\./)?attachments/{re.escape(cover_image)}',
                f'cover:\n  image: /images/{cover_image}',
                content
            )
            print(f"📝 Updated cover image reference to: /images/{cover_image}")

        # Save the updated Markdown file
        with open(filepath, "w", encoding="utf-8") as file:
            file.write(content)

print("\n✅ Markdown files processed, including cover images!")
