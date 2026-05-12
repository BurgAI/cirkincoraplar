"use client";

import { useEffect, useRef, useState } from "react";

const SUPER_W = 3500;
const SUPER_H = 2500;

type CardKind = "chart" | "counter" | "gradient" | "code" | "logo" | "stat" | "bars";

interface CardDef {
  x: number; y: number; w: number; h: number;
  kind: CardKind; hue: number; label?: string;
}

const CARDS: CardDef[] = [
  { x: 80, y: 80, w: 480, h: 280, kind: "chart", hue: 220, label: "Sipariş" },
  { x: 600, y: 80, w: 280, h: 280, kind: "counter", hue: 280, label: "Müşteri" },
  { x: 920, y: 80, w: 360, h: 180, kind: "gradient", hue: 160 },
  { x: 1320, y: 80, w: 480, h: 280, kind: "code", hue: 0, label: "Üretim" },
  { x: 1840, y: 80, w: 280, h: 280, kind: "logo", hue: 150 },
  { x: 2160, y: 80, w: 380, h: 180, kind: "stat", hue: 160, label: "Kalite" },
  { x: 2580, y: 80, w: 360, h: 280, kind: "bars", hue: 40, label: "Çorap" },
  { x: 920, y: 300, w: 360, h: 200, kind: "counter", hue: 150, label: "Renk" },
  { x: 2160, y: 300, w: 380, h: 200, kind: "chart", hue: 100, label: "Desen" },
  { x: 80, y: 400, w: 280, h: 280, kind: "gradient", hue: 340 },
  { x: 400, y: 400, w: 480, h: 280, kind: "code", hue: 0, label: "Toptan" },
  { x: 1320, y: 420, w: 280, h: 280, kind: "stat", hue: 60, label: "MOQ" },
  { x: 1640, y: 420, w: 380, h: 280, kind: "bars", hue: 150, label: "Çanta" },
  { x: 2580, y: 420, w: 360, h: 280, kind: "logo", hue: 150 },
  { x: 80, y: 720, w: 480, h: 240, kind: "chart", hue: 150, label: "Teslimat" },
  { x: 600, y: 720, w: 280, h: 240, kind: "stat", hue: 20, label: "Hız" },
  { x: 920, y: 740, w: 380, h: 220, kind: "gradient", hue: 150 },
  { x: 1320, y: 740, w: 360, h: 220, kind: "counter", hue: 140, label: "Model" },
  { x: 1720, y: 740, w: 480, h: 240, kind: "code", hue: 0, label: "Logo Baskı" },
  { x: 2240, y: 740, w: 360, h: 240, kind: "bars", hue: 150, label: "Kapasite" },
  { x: 80, y: 1000, w: 360, h: 220, kind: "logo", hue: 150 },
  { x: 460, y: 1000, w: 380, h: 220, kind: "stat", hue: 80, label: "Kalite" },
  { x: 880, y: 1000, w: 480, h: 220, kind: "chart", hue: 150, label: "Üretim" },
  { x: 1400, y: 1000, w: 280, h: 220, kind: "counter", hue: 150, label: "Ürün" },
  { x: 1720, y: 1020, w: 360, h: 220, kind: "gradient", hue: 120 },
  { x: 2120, y: 1020, w: 380, h: 220, kind: "code", hue: 0, label: "Özel" },
  { x: 2540, y: 1020, w: 400, h: 220, kind: "bars", hue: 150, label: "Stok" },
  { x: 80, y: 1280, w: 480, h: 260, kind: "code", hue: 0, label: "Bambu" },
  { x: 600, y: 1280, w: 360, h: 260, kind: "chart", hue: 150, label: "Bez" },
  { x: 1000, y: 1280, w: 280, h: 260, kind: "logo", hue: 150 },
  { x: 1320, y: 1280, w: 380, h: 260, kind: "stat", hue: 150, label: "Hız" },
  { x: 1740, y: 1280, w: 360, h: 260, kind: "counter", hue: 150, label: "Renk" },
  { x: 2140, y: 1280, w: 380, h: 260, kind: "gradient", hue: 160 },
  { x: 2560, y: 1280, w: 380, h: 260, kind: "bars", hue: 0, label: "Adet" },
];

function noise(i: number, t: number) {
  return Math.sin(t + i) * 0.5 + 0.5;
}

const ACCENT = "#2f6f5e";
const ACCENT2 = "#d44637";

function ChartCard({ t }: { t: number }) {
  const points: string[] = [];
  for (let i = 0; i < 12; i++) {
    const x = (i / 11) * 100;
    const y = 50 - (Math.sin(i * 0.7 + t) * 18 + Math.cos(i * 0.4 + t * 0.6) * 8);
    points.push(`${x},${y}`);
  }
  return (
    <svg viewBox="0 0 100 60" preserveAspectRatio="none" style={{ width: "100%", height: "100%" }}>
      <polyline points={points.join(" ")} fill="none" stroke={ACCENT} strokeWidth={1.4} strokeLinecap="round" strokeLinejoin="round" />
      <polyline points={`${points.join(" ")} 100,60 0,60`} fill={`${ACCENT}22`} stroke="none" />
    </svg>
  );
}

function BarsCard({ t, index }: { t: number; index: number }) {
  return (
    <div style={{ display: "flex", alignItems: "flex-end", gap: 6, height: "100%", width: "100%" }}>
      {Array.from({ length: 10 }).map((_, i) => {
        const h = 25 + (Math.sin(i * 0.8 + t + index) * 0.5 + 0.5) * 70;
        return (
          <div key={i} style={{ flex: 1, height: `${h}%`, background: `linear-gradient(180deg, ${ACCENT} 0%, ${ACCENT}55 100%)`, borderRadius: 4 }} />
        );
      })}
    </div>
  );
}

function CodeCard() {
  const lines = [
    { indent: 0, w: 60, c: `${ACCENT}cc` },
    { indent: 1, w: 80, c: "rgba(255,255,255,0.7)" },
    { indent: 1, w: 50, c: `${ACCENT2}cc` },
    { indent: 2, w: 70, c: "rgba(255,255,255,0.7)" },
    { indent: 2, w: 40, c: "#d8b36acc" },
    { indent: 1, w: 30, c: "rgba(255,255,255,0.5)" },
    { indent: 0, w: 20, c: "rgba(255,255,255,0.5)" },
  ];
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
      {lines.map((l, i) => (
        <div key={i} style={{ marginLeft: l.indent * 14, width: `${l.w}%`, height: 8, borderRadius: 3, background: l.c, opacity: 0.7 }} />
      ))}
    </div>
  );
}

function LogoCard() {
  return (
    <div style={{ width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center" }}>
      <div style={{ width: 80, height: 80, borderRadius: 20, background: `linear-gradient(135deg, ${ACCENT} 0%, ${ACCENT2} 100%)`, boxShadow: `0 10px 30px ${ACCENT}44` }} />
    </div>
  );
}

function GradientCard({ hue }: { hue: number }) {
  return (
    <div style={{ width: "100%", height: "100%", background: `radial-gradient(circle at 30% 30%, hsl(${hue},60%,40%) 0%, hsl(${(hue + 40) % 360},50%,25%) 50%, #0a0f0e 100%)` }} />
  );
}

function Card({ card, index, t }: { card: CardDef; index: number; t: number }) {
  const baseStyle: React.CSSProperties = {
    position: "absolute", left: card.x, top: card.y, width: card.w, height: card.h,
    borderRadius: 18, background: "linear-gradient(180deg, #131a18 0%, #0a0f0e 100%)",
    border: "1px solid rgba(47,111,94,0.15)", overflow: "hidden", padding: 18,
    color: "white", display: "flex", flexDirection: "column",
  };
  const labelEl = card.label ? (
    <div style={{ fontSize: 12, fontWeight: 600, color: "rgba(255,255,255,0.5)", letterSpacing: "0.04em", textTransform: "uppercase", marginBottom: 8 }}>
      {card.label}
    </div>
  ) : null;

  if (card.kind === "chart") return <div style={baseStyle}>{labelEl}<div style={{ flex: 1 }}><ChartCard t={t + index} /></div></div>;
  if (card.kind === "bars") return <div style={baseStyle}>{labelEl}<div style={{ flex: 1 }}><BarsCard t={t} index={index} /></div></div>;
  if (card.kind === "counter") {
    const v = Math.floor(1200 + noise(index, t) * 800);
    return (
      <div style={baseStyle}>
        {labelEl}
        <div style={{ flex: 1, display: "flex", alignItems: "center", fontSize: 52, fontWeight: 700, letterSpacing: "-0.04em" }}>{v.toLocaleString()}</div>
        <div style={{ fontSize: 12, color: ACCENT, fontWeight: 600 }}>+{(noise(index + 1, t) * 12).toFixed(1)}%</div>
      </div>
    );
  }
  if (card.kind === "stat") {
    const v = (95 + noise(index, t) * 5).toFixed(2);
    return (
      <div style={baseStyle}>
        {labelEl}
        <div style={{ flex: 1, display: "flex", alignItems: "center", fontSize: 44, fontWeight: 700, letterSpacing: "-0.03em" }}>
          {v}<span style={{ fontSize: 18, color: "rgba(255,255,255,0.4)", marginLeft: 4 }}>%</span>
        </div>
      </div>
    );
  }
  if (card.kind === "code") return <div style={baseStyle}>{labelEl}<div style={{ flex: 1, display: "flex", alignItems: "center" }}><div style={{ width: "100%" }}><CodeCard /></div></div></div>;
  if (card.kind === "logo") return <div style={{ ...baseStyle, padding: 0 }}><LogoCard /></div>;
  return <div style={{ ...baseStyle, padding: 0 }}><GradientCard hue={card.hue} /></div>;
}

export function BentoShowcase() {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);
  const [t, setT] = useState(0);

  useEffect(() => {
    const CYCLE = 40000;
    const start = performance.now();
    let raf: number;
    let lastContent = 0;

    const animate = (now: number) => {
      const elapsed = now - start;
      const progress = (elapsed % CYCLE) / CYCLE;
      const pingPong = progress < 0.5 ? progress * 2 : 2 - progress * 2;

      const wrapper = wrapperRef.current;
      const inner = innerRef.current;
      if (wrapper && inner) {
        const maxX = SUPER_W - wrapper.clientWidth;
        const maxY = SUPER_H - wrapper.clientHeight;
        inner.style.transform = `translate(${-pingPong * maxX}px, ${-pingPong * maxY}px)`;
      }

      if (now - lastContent > 80) {
        setT(elapsed / 1000);
        lastContent = now;
      }

      raf = requestAnimationFrame(animate);
    };

    raf = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <section className="relative overflow-hidden bg-ink py-24">
      <div className="relative z-10 mx-auto max-w-6xl px-4 pb-12 text-center md:px-6">
        <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-flax">Çirkin Çoraplar</p>
        <h2 className="text-4xl font-semibold text-white md:text-5xl">Üretimden Teslimata</h2>
        <p className="mx-auto mt-4 max-w-xl text-base text-white/60">Çorap, bez çanta, özel üretim ve toptan siparişler — tek çatı altında.</p>
      </div>

      <div ref={wrapperRef} className="relative h-[380px] overflow-hidden md:h-[480px]">
        <div ref={innerRef} style={{ position: "absolute", width: SUPER_W, height: SUPER_H, willChange: "transform", transition: "none" }}>
          {CARDS.map((c, i) => <Card key={i} card={c} index={i} t={t} />)}
        </div>
        <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse at center, transparent 20%, rgba(24,32,31,0.7) 70%, #18201f 100%)", pointerEvents: "none" }} />
      </div>
    </section>
  );
}
