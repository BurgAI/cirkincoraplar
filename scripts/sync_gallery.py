import os
import re
import subprocess
import sys
import shutil

SUPPORTED = {".jpg", ".jpeg", ".webp", ".png", ".avif"}

# Drive klasör ID → yerel dizin eşlemesi (ana kategoriler)
CATEGORY_MAP = [
    ("1SFaVwLPwOkvtnVuPBFMzi_MK1Pxu4V5Z", "public/images/kadin"),
    ("1MM0sziX_FbG4AVlO_BMip6t36S14zaux", "public/images/erkek"),
    ("1qWes76sjFVjoT9ZbieRIuEsgu7BYfA5f", "public/images/cocuk"),
    ("1KZeJxzm6cSoY3JhQTdCyCrdRX14w5DVB", "public/images/bez-canta"),
]

# Drive alt klasör slug → site kodu eşlemesi
# Drive'da klasör adı ne olursa olsun (Türkçe veya kod), bu tablo doğru bölüme yönlendirir
SLUG_MAP: dict[str, str] = {
    # Kadın
    "bamboo": "k-01",
    "bamboo-parmak-corap": "k-01",
    "diz-alti": "k-02",
    "diz-ustu": "k-03",
    "en-yeniler": "k-04",
    "ince-corap": "k-05",
    "nakisli-corap": "k-06",
    "patik": "k-07",
    "renkli-corap": "k-08",
    "sneaker-ve-babet": "k-09",
    "soket": "k-10",
    "pilates-corap": "k-11",  # Drive'da varsa site navigasyonuna eklenebilir
    # Erkek
    "bambu-corap": "e-01",
    "desenli-corap": "e-02",
    "diyabetik-corap": "e-03",
    "kislik-corap": "e-04",
    "patik-corap": "e-05",
    "sneaker-corap": "e-06",
    # Çocuk
    "erkek-cocuk": "c-01",
    "kiz-cocuk": "c-02",
    "taraftar": "c-03",
    # Bez çanta
    "baskili-bez-canta": "b-01",
    "ozel-tasarim-bez-canta": "b-02",
}


def slugify(name: str) -> str:
    name = name.replace("ı", "i").replace("İ", "i")
    name = name.replace("ğ", "g").replace("Ğ", "g")
    name = name.replace("ü", "u").replace("Ü", "u")
    name = name.replace("ş", "s").replace("Ş", "s")
    name = name.replace("ö", "o").replace("Ö", "o")
    name = name.replace("ç", "c").replace("Ç", "c")
    name = name.lower().strip()
    slug = re.sub(r"[^a-z0-9]+", "-", name).strip("-")
    return SLUG_MAP.get(slug, slug)


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
                    shutil.rmtree(new_path)
                os.rename(tmp_path, new_path)
                path = new_path
            for f in list(os.listdir(path)):
                f_path = os.path.join(path, f)
                if os.path.isfile(f_path) and os.path.splitext(f)[1].lower() not in SUPPORTED:
                    os.remove(f_path)
        elif os.path.splitext(name)[1].lower() not in SUPPORTED:
            os.remove(path)


for folder_id, out_dir in CATEGORY_MAP:
    os.makedirs(out_dir, exist_ok=True)
    url = f"https://drive.google.com/drive/folders/{folder_id}"
    print(f"\n--- {out_dir} syncleniyor ---")
    result = subprocess.run(
        [sys.executable, "-m", "gdown", "--folder", url, "-O", out_dir],
        capture_output=True,
        text=True,
    )
    print(result.stdout)
    if result.returncode != 0:
        print(result.stderr, file=sys.stderr)
    clean_dir(out_dir)
    print(f"Tamam: {out_dir}")
