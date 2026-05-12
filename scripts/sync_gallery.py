import os
import subprocess
import sys

FOLDER_ID = os.environ["GDRIVE_FOLDER_ID"]
OUTPUT_DIR = "public/images/gallery"
SUPPORTED = {".jpg", ".jpeg", ".webp", ".png", ".avif"}

os.makedirs(OUTPUT_DIR, exist_ok=True)

# gdown ile public Drive klasörünü indir
result = subprocess.run(
    ["gdown", "--folder", "--remaining-ok", f"https://drive.google.com/drive/folders/{FOLDER_ID}", "-O", OUTPUT_DIR],
    capture_output=True,
    text=True,
)

print(result.stdout)
if result.returncode != 0:
    print(result.stderr)
    sys.exit(1)

# Desteklenmeyen dosyaları temizle
for f in os.listdir(OUTPUT_DIR):
    if os.path.splitext(f)[1].lower() not in SUPPORTED:
        os.remove(os.path.join(OUTPUT_DIR, f))
        print(f"Silindi (desteklenmiyor): {f}")
