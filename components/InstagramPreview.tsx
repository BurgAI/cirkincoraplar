import Image from "next/image";
import { instagramPreviewImages } from "@/data/media";

export function InstagramPreview() {
  return (
    <div className="grid gap-3 sm:grid-cols-2">
      {instagramPreviewImages.map((image) => (
        <div
          key={image.src}
          className="relative aspect-square overflow-hidden rounded-2xl border border-ink/10 bg-mist"
        >
          <Image src={image.src} alt={image.alt} fill className="object-cover" sizes="220px" />
        </div>
      ))}
    </div>
  );
}
