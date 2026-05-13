"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";

type PhotoGalleryProps = {
  images: string[];
  label: string;
};

const b = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export function PhotoGallery({ images, label }: PhotoGalleryProps) {
  const [lightbox, setLightbox] = useState<number | null>(null);

  const close = useCallback(() => setLightbox(null), []);

  const prev = useCallback(() => {
    setLightbox((i) => (i !== null ? (i - 1 + images.length) % images.length : null));
  }, [images.length]);

  const next = useCallback(() => {
    setLightbox((i) => (i !== null ? (i + 1) % images.length : null));
  }, [images.length]);

  useEffect(() => {
    if (lightbox === null) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [lightbox, close, prev, next]);

  // Scroll kilidi
  useEffect(() => {
    document.body.style.overflow = lightbox !== null ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [lightbox]);

  if (images.length === 0) {
    return (
      <div className="flex min-h-[320px] items-center justify-center rounded-3xl bg-mist">
        <p className="text-sm text-ink/40">Fotoğraflar yakında eklenecek.</p>
      </div>
    );
  }

  return (
    <>
      {/* Grid */}
      <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-4">
        {images.map((src, i) => (
          <button
            key={src}
            onClick={() => setLightbox(i)}
            className="group relative aspect-square overflow-hidden rounded-2xl bg-mist focus:outline-none focus-visible:ring-2 focus-visible:ring-thread"
            aria-label={`${label} fotoğraf ${i + 1}`}
          >
            <Image
              src={`${b}${src}`}
              alt={`${label} ürün fotoğrafı ${i + 1}`}
              fill
              className="object-cover transition duration-500 group-hover:scale-105"
              sizes="(min-width: 1024px) 25vw, (min-width: 640px) 33vw, 50vw"
            />
            {/* Hover overlay */}
            <span className="absolute inset-0 flex items-center justify-center bg-ink/0 transition duration-300 group-hover:bg-ink/30">
              <svg
                className="h-7 w-7 translate-y-1 text-white opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100"
                fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}
              >
                <path strokeLinecap="round" strokeLinejoin="round"
                  d="M21 21l-4.35-4.35M17 11A6 6 0 1 1 5 11a6 6 0 0 1 12 0zm-3-3v6m-3-3h6" />
              </svg>
            </span>
          </button>
        ))}
      </div>

      {/* Lightbox */}
      {lightbox !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/92 p-4"
          onClick={close}
          role="dialog"
          aria-modal="true"
          aria-label={`${label} galeri`}
        >
          {/* Fotoğraf */}
          <div
            className="relative flex max-h-[90vh] max-w-4xl items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              key={lightbox}
              src={`${b}${images[lightbox]}`}
              alt={`${label} fotoğraf ${lightbox + 1}`}
              width={1200}
              height={1200}
              className="max-h-[85vh] w-auto rounded-2xl object-contain shadow-2xl"
              sizes="90vw"
              priority
            />

            {/* Sayaç */}
            <span className="absolute bottom-3 left-1/2 -translate-x-1/2 rounded-full bg-black/50 px-3 py-1 text-xs text-white/70 backdrop-blur-sm">
              {lightbox + 1} / {images.length}
            </span>
          </div>

          {/* Önceki */}
          {images.length > 1 && (
            <button
              onClick={(e) => { e.stopPropagation(); prev(); }}
              className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-white/10 p-3 text-white backdrop-blur-sm transition hover:bg-white/25"
              aria-label="Önceki fotoğraf"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
          )}

          {/* Sonraki */}
          {images.length > 1 && (
            <button
              onClick={(e) => { e.stopPropagation(); next(); }}
              className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-white/10 p-3 text-white backdrop-blur-sm transition hover:bg-white/25"
              aria-label="Sonraki fotoğraf"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          )}

          {/* Kapat */}
          <button
            onClick={close}
            className="absolute right-3 top-3 rounded-full bg-white/10 p-2 text-white backdrop-blur-sm transition hover:bg-white/25"
            aria-label="Kapat"
          >
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      )}
    </>
  );
}
