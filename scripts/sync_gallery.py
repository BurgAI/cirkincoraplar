import os
import re
import shutil
import subprocess
import sys
import tempfile
import unicodedata
from typing import Dict, Iterable, Optional

SUPPORTED = {".jpg", ".jpeg", ".webp", ".png", ".avif"}
MIME_EXTENSION_MAP = {
    "image/jpeg": ".jpg",
    "image/png": ".png",
    "image/webp": ".webp",
    "image/avif": ".avif",
}

DEFAULT_ROOT_FOLDER_ID = "1vcmJJ62lldNR1crfeiLj0utbt08x6SKy"

# Eski/orijinal paylasim duzeldiginde kategori bazli sync'e donebiliriz.
LEGACY_CATEGORY_MAP = [
    ("1SFaVwLPwOkvtnVuPBFMzi_MK1Pxu4V5Z", "public/images/kadin"),
    ("1MM0sziX_FbG4AVlO_BMip6t36S14zaux", "public/images/erkek"),
    ("1qWes76sjFVjoT9ZbieRIuEsgu7BYfA5f", "public/images/cocuk"),
    ("1KZeJxzm6cSoY3JhQTdCyCrdRX14w5DVB", "public/images/bez-canta"),
]

CATEGORY_TARGETS = {
    "kadin": "public/images/kadin",
    "erkek": "public/images/erkek",
    "cocuk": "public/images/cocuk",
    "bez-canta": "public/images/bez-canta",
}

CATEGORY_ALIASES = {
    "kadin": {
        "kadin",
        "kadin-corap",
        "women",
        "woman",
        "bayan",
        "ladies",
        "female",
    },
    "erkek": {
        "erkek",
        "erkek-corap",
        "men",
        "man",
        "male",
    },
    "cocuk": {
        "cocuk",
        "cocuk-corap",
        "cocuklar",
        "kids",
        "kid",
        "children",
        "child",
        "baby-kids",
    },
    "bez-canta": {
        "bez-canta",
        "bezcanta",
        "canta",
        "cantalar",
        "tote",
        "tote-bag",
        "tote-bags",
        "totebag",
        "totebag",
        "bags",
        "bez-bag",
    },
}


def slugify(name: str) -> str:
    name = unicodedata.normalize("NFKD", name)
    name = "".join(ch for ch in name if not unicodedata.combining(ch))
    name = name.lower().strip()
    return re.sub(r"[^a-z0-9]+", "-", name).strip("-")


def extract_drive_id(value: str) -> str:
    value = value.strip()
    match = re.search(r"/folders/([a-zA-Z0-9_-]+)", value)
    if match:
        return match.group(1)
    return value


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
            for child in list(os.listdir(path)):
                child_path = os.path.join(path, child)
                if not os.path.isfile(child_path):
                    continue
                normalized_path = ensure_supported_extension(child_path)
                if not normalized_path:
                    os.remove(child_path)
        else:
            normalized_path = ensure_supported_extension(path)
            if normalized_path:
                continue
            os.remove(path)


def reset_dir(directory: str) -> None:
    os.makedirs(directory, exist_ok=True)
    for name in list(os.listdir(directory)):
        path = os.path.join(directory, name)
        if os.path.isdir(path):
            shutil.rmtree(path)
        else:
            os.remove(path)


def merge_dir_into(src_dir: str, dst_dir: str) -> None:
    os.makedirs(dst_dir, exist_ok=True)
    for name in os.listdir(src_dir):
        src_path = os.path.join(src_dir, name)
        dst_path = os.path.join(dst_dir, name)
        if os.path.isdir(src_path):
            move_with_merge(src_path, dst_path)
        else:
            if os.path.exists(dst_path):
                os.remove(dst_path)
            shutil.move(src_path, dst_path)


def run_gdown_folder(folder_id: str, output_dir: str) -> None:
    url = f"https://drive.google.com/drive/folders/{folder_id}"
    print(f"\n--- Google Drive klasoru indiriliyor: {folder_id} ---")
    result = subprocess.run(
        [
            sys.executable,
            "-m",
            "gdown",
            "--folder",
            "--remaining-ok",
            url,
            "-O",
            output_dir,
        ],
        capture_output=True,
        text=True,
    )
    print(result.stdout)
    if result.returncode != 0:
        stderr = result.stderr.strip()
        if "Failed to retrieve file url" in stderr:
            print("Uyari: Bazi Drive dosyalari erisime kapali, indirilebilenler ile devam ediliyor.")
            print(stderr, file=sys.stderr)
            return
        raise RuntimeError(stderr or "gdown klasor indiremedi.")


def match_category(slug: str) -> Optional[str]:
    for category, aliases in CATEGORY_ALIASES.items():
        if slug in aliases:
            return category
    return None


def discover_category_dirs(root_dir: str) -> Dict[str, list[str]]:
    matches: Dict[str, list[str]] = {category: [] for category in CATEGORY_TARGETS}

    for current_root, dirnames, _ in os.walk(root_dir, topdown=True):
        matched_children: list[str] = []
        for dirname in list(dirnames):
            slug = slugify(dirname)
            category = match_category(slug)
            if not category:
                continue
            matches[category].append(os.path.join(current_root, dirname))
            matched_children.append(dirname)

        if matched_children:
            dirnames[:] = [name for name in dirnames if name not in matched_children]

    return {category: paths for category, paths in matches.items() if paths}


def import_category_dirs(source_dirs: Iterable[str], target_dir: str) -> None:
    staging_dir = tempfile.mkdtemp(prefix="gallery-stage-")
    try:
        for source_dir in source_dirs:
            for name in os.listdir(source_dir):
                source_path = os.path.join(source_dir, name)
                if os.path.isdir(source_path):
                    move_with_merge(source_path, os.path.join(staging_dir, name))
                elif os.path.isfile(source_path):
                    shutil.move(source_path, os.path.join(staging_dir, name))

        clean_dir(staging_dir)
        merge_dir_into(staging_dir, target_dir)
        clean_dir(target_dir)
    finally:
        shutil.rmtree(staging_dir, ignore_errors=True)


def sync_from_root_folder(root_folder_id: str) -> None:
    with tempfile.TemporaryDirectory(prefix="drive-root-") as temp_dir:
        run_gdown_folder(root_folder_id, temp_dir)
        category_dirs = discover_category_dirs(temp_dir)

        missing = [category for category in CATEGORY_TARGETS if category not in category_dirs]
        if missing:
            missing_str = ", ".join(missing)
            raise RuntimeError(
                f"Ust Drive klasorunde kategori klasorleri eksik veya eslesmedi: {missing_str}"
            )

        for category, target_dir in CATEGORY_TARGETS.items():
            print(f"\n--- {category} => {target_dir} senkronlaniyor ---")
            import_category_dirs(category_dirs[category], target_dir)
            print(f"Tamam: {target_dir}")


def sync_legacy_category_map() -> None:
    for folder_id, out_dir in LEGACY_CATEGORY_MAP:
        with tempfile.TemporaryDirectory(prefix="legacy-gallery-") as temp_dir:
            run_gdown_folder(folder_id, temp_dir)
            clean_dir(temp_dir)
            merge_dir_into(temp_dir, out_dir)
            clean_dir(out_dir)
        print(f"Tamam: {out_dir}")


def main() -> None:
    use_legacy_drive_ids = os.getenv("USE_LEGACY_DRIVE_IDS", "").strip() == "1"
    root_folder_value = os.getenv("GOOGLE_DRIVE_ROOT_FOLDER_ID", DEFAULT_ROOT_FOLDER_ID)
    root_folder_id = extract_drive_id(root_folder_value)

    if use_legacy_drive_ids:
        print("Legacy kategori bazli Drive ID'leri kullaniliyor.")
        sync_legacy_category_map()
        return

    print(f"Ust Drive klasoru kullaniliyor: {root_folder_id}")
    try:
        sync_from_root_folder(root_folder_id)
    except RuntimeError as exc:
        print(
            "Uyari: Ust klasor sync'i tamamlanamadi. Kategori bazli Drive klasorlerine fallback yapiliyor.",
            file=sys.stderr,
        )
        print(str(exc), file=sys.stderr)
        sync_legacy_category_map()


if __name__ == "__main__":
    main()
