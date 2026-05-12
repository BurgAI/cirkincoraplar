import json
import os

from google.oauth2 import service_account
from googleapiclient.discovery import build
from googleapiclient.http import MediaIoBaseDownload

FOLDER_ID = os.environ["GDRIVE_FOLDER_ID"]
CREDENTIALS_JSON = os.environ["GDRIVE_CREDENTIALS"]
OUTPUT_DIR = "public/images/gallery"

SUPPORTED = {".jpg", ".jpeg", ".webp", ".png", ".avif"}

credentials = service_account.Credentials.from_service_account_info(
    json.loads(CREDENTIALS_JSON),
    scopes=["https://www.googleapis.com/auth/drive.readonly"],
)

service = build("drive", "v3", credentials=credentials)

results = (
    service.files()
    .list(
        q=f"'{FOLDER_ID}' in parents and trashed=false",
        fields="files(id, name, mimeType)",
    )
    .execute()
)

os.makedirs(OUTPUT_DIR, exist_ok=True)
existing = set(os.listdir(OUTPUT_DIR))
downloaded = 0

for file in results.get("files", []):
    name = file["name"]
    ext = os.path.splitext(name)[1].lower()
    if ext not in SUPPORTED:
        continue
    if name in existing:
        continue

    request = service.files().get_media(fileId=file["id"])
    path = os.path.join(OUTPUT_DIR, name)
    with open(path, "wb") as f:
        downloader = MediaIoBaseDownload(f, request)
        done = False
        while not done:
            _, done = downloader.next_chunk()

    print(f"İndirildi: {name}")
    downloaded += 1

print(f"Toplam {downloaded} yeni fotoğraf indirildi.")
