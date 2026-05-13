"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";

interface ShowcaseItem {
  num: string;
  label: string;
  href: string;
  clipId: string;
  image: string;
}

type CategoryShowcaseProps = {
  items: ShowcaseItem[];
};

export function CategoryShowcase({ items }: CategoryShowcaseProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<SVGImageElement>(null);
  const mainGroupRef = useRef<SVGGElement>(null);
  const masterTl = useRef<gsap.core.Timeline | null>(null);

  const createLoop = (index: number) => {
    const item = items[index];
    const selector = `#${item.clipId} .path`;

    if (masterTl.current) masterTl.current.kill();
    if (imageRef.current) imageRef.current.setAttribute("href", item.image);
    if (mainGroupRef.current)
      mainGroupRef.current.setAttribute("clip-path", `url(#${item.clipId})`);

    gsap.set(selector, { scale: 0, transformOrigin: "50% 50%" });

    const tl = gsap.timeline({ repeat: -1, repeatDelay: 0.8 });
    tl.to(selector, {
      scale: 1,
      duration: 0.8,
      stagger: { amount: 0.4, from: "random" },
      ease: "expo.out",
    })
      .to(selector, {
        scale: 1.04,
        duration: 1.4,
        yoyo: true,
        repeat: 1,
        ease: "sine.inOut",
        stagger: { amount: 0.2, from: "center" },
      })
      .to(selector, {
        scale: 0,
        duration: 0.55,
        stagger: { amount: 0.3, from: "edges" },
        ease: "expo.in",
      });

    masterTl.current = tl;
  };

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      createLoop(0);
    }, containerRef);
    return () => ctx.revert();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div
      ref={containerRef}
      className="flex w-full flex-col items-center justify-between gap-12 overflow-hidden bg-ink px-6 py-16 md:flex-row md:gap-0 md:px-20 md:py-24"
    >
      {/* Sol: Menü */}
      <nav className="z-20 w-full md:w-1/2">
        <ul className="flex flex-col gap-10">
          {items.map((item, index) => (
            <li key={item.num}>
              <Link
                href={item.href}
                onMouseEnter={() => {
                  if (index !== activeIndex) {
                    setActiveIndex(index);
                    createLoop(index);
                  }
                }}
                className="group flex items-start gap-5"
              >
                <span
                  className={cn(
                    "mt-2 text-2xl font-bold transition-all duration-500",
                    activeIndex === index ? "scale-110 text-thread" : "text-white/25"
                  )}
                >
                  {item.num}
                </span>
                <span
                  className={cn(
                    "text-5xl font-black uppercase leading-[0.85] tracking-tighter transition-all duration-700 md:text-6xl",
                    activeIndex === index
                      ? "translate-x-3 text-white opacity-100"
                      : "translate-x-0 text-white/20 opacity-60"
                  )}
                >
                  {item.label.split(" ").map((word, i) => (
                    <span key={i} className="block">{word}</span>
                  ))}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {/* Sağ: SVG Animasyon */}
      <div className="relative flex w-full items-center justify-center md:w-1/2">
        <div className="absolute h-[120%] w-[120%] rounded-full bg-thread/10 blur-[100px]" />
        <svg
          viewBox="0 0 500 500"
          className="relative z-10 h-auto w-full max-w-[440px] drop-shadow-2xl"
        >
          <defs>
            {/* Strips */}
            <clipPath id="cc-strips">
              <rect className="path" x="8" y="204" width="484" height="18" rx="4" />
              <rect className="path" x="8" y="344" width="484" height="10" rx="4" />
              <rect className="path" x="8" y="242" width="484" height="86" rx="24" />
              <rect className="path" x="8" y="110" width="484" height="86" rx="8" />
              <rect className="path" x="40" y="368" width="420" height="64" rx="14" />
            </clipPath>

            {/* Blocks */}
            <clipPath id="cc-blocks">
              <rect className="path" x="20" y="20" width="200" height="280" rx="16" />
              <rect className="path" x="20" y="320" width="200" height="160" rx="16" />
              <rect className="path" x="240" y="20" width="240" height="140" rx="16" />
              <rect className="path" x="240" y="180" width="110" height="160" rx="16" />
              <rect className="path" x="370" y="180" width="110" height="160" rx="16" />
              <rect className="path" x="240" y="360" width="240" height="120" rx="16" />
            </clipPath>

            {/* Grid */}
            <clipPath id="cc-grid">
              {Array.from({ length: 9 }).map((_, i) => (
                <rect
                  key={i}
                  className="path"
                  x={(i % 3) * 160 + 20}
                  y={Math.floor(i / 3) * 160 + 20}
                  width="140"
                  height="140"
                  rx="6"
                />
              ))}
            </clipPath>
          </defs>

          <g ref={mainGroupRef} clipPath={`url(#${items[0].clipId})`}>
            <image
              ref={imageRef}
              href={items[0].image}
              width="500"
              height="500"
              preserveAspectRatio="xMidYMid slice"
            />
          </g>
        </svg>
      </div>
    </div>
  );
}
