import os
import re
import subprocess
import sys
import shutil
import unicodedata
from typing import Optional

SUPPORTED = {".jpg", ".jpeg", ".webp", ".png", ".avif"}
MIME_EXTENSION_MAP = {
    "image/jpeg": ".jpg",
    "image/png": ".png",
    "image/webp": ".webp",
    "image/avif": ".avif",
}

# Eski/orijinal paylasim duzeldiginde tekrar buna donecegiz.
LEGACY_CATEGORY_MAP = [
    ("1SFaVwLPwOkvtnVuPBFMzi_MK1Pxu4V5Z", "public/images/kadin"),
    ("1MM0sziX_FbG4AVlO_BMip6t36S14zaux", "public/images/erkek"),
    ("1qWes76sjFVjoT9ZbieRIuEsgu7BYfA5f", "public/images/cocuk"),
    ("1KZeJxzm6cSoY3JhQTdCyCrdRX14w5DVB", "public/images/bez-canta"),
]

# Gecici olarak paylasilan ust klasorden alinan kategori ID'leri.
# Varsayilan olarak bunu kullaniyoruz; eski linkler duzelince USE_LEGACY_DRIVE_IDS=1 yeterli.
TEMP_CATEGORY_MAP = [
    ("1LnNJsXMCG7llY6tsLvG8Q2p6xsiIDxt6", "public/images/kadin"),
    ("1DT30f5-159FrxBjIHxZKW-wETTHGQlbj", "public/images/erkek"),
    ("1eBYSsLqjKXGeLE3ChMKH3D0rhHXbM-GV", "public/images/cocuk"),
    ("1jC-7BiUt9w2rfLZXZhaex1zOZy_i1i4m", "public/images/bez-canta"),
]

USE_LEGACY_DRIVE_IDS = os.getenv("USE_LEGACY_DRIVE_IDS", "").strip() == "1"
CATEGORY_MAP = LEGACY_CATEGORY_MAP if USE_LEGACY_DRIVE_IDS else TEMP_CATEGORY_MAP

def slugify(name: str) -> str:
    name = unicodedata.normalize("NFKD", name)
    name = "".join(ch for ch in name if not unicodedata.combining(ch))
    name = name.lower().strip()
    slug = re.sub(r"[^a-z0-9]+", "-", name).strip("-")
    return slug


def guess_extension(path: str) -> Optional[str]:
    result = subprocess.run(
        ["file", "--mime-type", "-b", path],
        capture_output=True,
        text=True,
    )
    if result.returncode != 0:
        return None
    return MIME_EXTENSION_MAP.get(result.stdout.strip())


def ensure_supported_extension(path: str) -> Optional[str]:
    ext = os.path.splitext(path)[1].lower()
    if ext in SUPPORTED:
        return path

    guessed_ext = guess_extension(path)
    if not guessed_ext:
        return None

    new_path = path + guessed_ext
    if os.path.exists(new_path):
        return new_path

    os.rename(path, new_path)
    return new_path


def move_with_merge(src: str, dst: str) -> None:
    os.makedirs(dst, exist_ok=True)
    for name in list(os.listdir(src)):
        src_path = os.path.join(src, name)
        dst_path = os.path.join(dst, name)
        if os.path.isdir(src_path):
            move_with_merge(src_path, dst_path)
            continue
        if os.path.exists(dst_path):
            base, ext = os.path.splitext(name)
            counter = 2
            while os.path.exists(dst_path):
                dst_path = os.path.join(dst, f"{base}-{counter}{ext}")
                counter += 1
        shutil.move(src_path, dst_path)
    shutil.rmtree(src)


def has_any_files(directory: str) -> bool:
    for _, _, files in os.walk(directory):
        if files:
            return True
    return False


def clean_dir(directory: str) -> None:
    for name in list(os.listdir(directory)):
        path = os.path.join(directory, name)
        if os.path.isdir(path):
            slug = slugify(name)
            new_path = os.path.join(directory, slug)
            if name != slug:
                # macOS büyük/küçük harf duyarsız: ara adım kullan
                tmp_path = os.path.join(directory, "_tmp_" + slug)
                os.rename(path, tmp_path)
                if os.path.exists(new_path) and tmp_path.lower() != new_path.lower():
                    if has_any_files(tmp_path):
                        move_with_merge(tmp_path, new_path)
                    else:
                        shutil.rmtree(tmp_path)
                else:
                    os.rename(tmp_path, new_path)
                path = new_path
            for f in list(os.listdir(path)):
                f_path = os.path.join(path, f)
                if not os.path.isfile(f_path):
                    continue
                normalized_path = ensure_supported_extension(f_path)
                if not normalized_path:
                    os.remove(f_path)
        else:
            normalized_path = ensure_supported_extension(path)
            if normalized_path:
                continue
            os.remove(path)


def sync_folder(folder_id: str, out_dir: str) -> None:
    os.makedirs(out_dir, exist_ok=True)
    url = f"https://drive.google.com/drive/folders/{folder_id}"
    print(f"\n--- {out_dir} syncleniyor ---")
    result = subprocess.run(
        [
            sys.executable,
            "-m",
            "gdown",
            "--folder",
            "--remaining-ok",
            url,
            "-O",
            out_dir,
        ],
        capture_output=True,
        text=True,
    )
    print(result.stdout)
    if result.returncode != 0:
        print(result.stderr, file=sys.stderr)
    clean_dir(out_dir)
    print(f"Tamam: {out_dir}")


for folder_id, out_dir in CATEGORY_MAP:
    sync_folder(folder_id, out_dir)
