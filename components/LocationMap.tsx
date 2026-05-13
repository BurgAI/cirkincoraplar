"use client";

import { AnimatePresence, motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useRef, useState } from "react";

export function LocationMap() {
  const [isHovered, setIsHovered] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const rotateX = useTransform(mouseY, [-50, 50], [8, -8]);
  const rotateY = useTransform(mouseX, [-50, 50], [-8, 8]);
  const springRotateX = useSpring(rotateX, { stiffness: 300, damping: 30 });
  const springRotateY = useSpring(rotateY, { stiffness: 300, damping: 30 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    mouseX.set(e.clientX - (rect.left + rect.width / 2));
    mouseY.set(e.clientY - (rect.top + rect.height / 2));
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
    setIsHovered(false);
  };

  return (
    <motion.div
      ref={containerRef}
      className="relative cursor-pointer select-none"
      style={{ perspective: 1000 }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      onClick={() => setIsExpanded(!isExpanded)}
    >
      <motion.div
        className="relative overflow-hidden rounded-3xl border border-ink/10 bg-white shadow-soft"
        style={{ rotateX: springRotateX, rotateY: springRotateY, transformStyle: "preserve-3d" }}
        animate={{ width: isExpanded ? 360 : 260, height: isExpanded ? 280 : 148 }}
        transition={{ type: "spring", stiffness: 400, damping: 35 }}
      >
        {/* Arka plan doku */}
        <motion.div
          className="absolute inset-0 opacity-[0.03]"
          animate={{ opacity: isExpanded ? 0 : 0.03 }}
          transition={{ duration: 0.3 }}
        >
          <svg width="100%" height="100%">
            <defs>
              <pattern id="map-grid" width="20" height="20" patternUnits="userSpaceOnUse">
                <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#18201f" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#map-grid)" />
          </svg>
        </motion.div>

        {/* Açılınca harita görünümü */}
        <AnimatePresence>
          {isExpanded && (
            <motion.div
              className="absolute inset-0 pointer-events-none"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.35, delay: 0.1 }}
            >
              <div className="absolute inset-0 bg-mist" />

              <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none">
                {/* Ana yollar */}
                {[35, 65].map((y, i) => (
                  <motion.line key={`h${i}`} x1="0%" y1={`${y}%`} x2="100%" y2={`${y}%`}
                    stroke="#18201f" strokeOpacity="0.2" strokeWidth="3"
                    initial={{ pathLength: 0 }} animate={{ pathLength: 1 }}
                    transition={{ duration: 0.7, delay: 0.2 + i * 0.1 }} />
                ))}
                {[30, 70].map((x, i) => (
                  <motion.line key={`v${i}`} x1={`${x}%`} y1="0%" x2={`${x}%`} y2="100%"
                    stroke="#18201f" strokeOpacity="0.15" strokeWidth="2"
                    initial={{ pathLength: 0 }} animate={{ pathLength: 1 }}
                    transition={{ duration: 0.55, delay: 0.35 + i * 0.1 }} />
                ))}
                {/* Yan sokaklar */}
                {[18, 50, 82].map((y, i) => (
                  <motion.line key={`sh${i}`} x1="0%" y1={`${y}%`} x2="100%" y2={`${y}%`}
                    stroke="#18201f" strokeOpacity="0.07" strokeWidth="1.5"
                    initial={{ pathLength: 0 }} animate={{ pathLength: 1 }}
                    transition={{ duration: 0.45, delay: 0.55 + i * 0.08 }} />
                ))}
                {[15, 48, 55, 85].map((x, i) => (
                  <motion.line key={`sv${i}`} x1={`${x}%`} y1="0%" x2={`${x}%`} y2="100%"
                    stroke="#18201f" strokeOpacity="0.07" strokeWidth="1.5"
                    initial={{ pathLength: 0 }} animate={{ pathLength: 1 }}
                    transition={{ duration: 0.45, delay: 0.65 + i * 0.08 }} />
                ))}
              </svg>

              {/* Bloklar */}
              {[
                { top: "40%", left: "10%", w: "15%", h: "20%" },
                { top: "15%", left: "35%", w: "12%", h: "15%" },
                { top: "70%", left: "75%", w: "18%", h: "18%" },
                { top: "20%", right: "10%", w: "10%", h: "25%" },
                { top: "55%", left: "5%", w: "8%", h: "12%" },
                { top: "8%", left: "75%", w: "14%", h: "10%" },
              ].map((s, i) => (
                <motion.div key={i}
                  className="absolute rounded-sm"
                  style={{ ...s, width: s.w, height: s.h, backgroundColor: "rgba(24,32,31,0.12)", border: "1px solid rgba(24,32,31,0.08)" }}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.35, delay: 0.45 + i * 0.08 }} />
              ))}

              {/* Pin */}
              <motion.div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                initial={{ scale: 0, y: -20 }} animate={{ scale: 1, y: 0 }}
                transition={{ type: "spring", stiffness: 400, damping: 20, delay: 0.3 }}
              >
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none"
                  style={{ filter: "drop-shadow(0 0 8px rgba(212,70,55,0.5))" }}>
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" fill="#d44637" />
                  <circle cx="12" cy="9" r="2.5" fill="white" />
                </svg>
              </motion.div>

              <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent opacity-50" />
            </motion.div>
          )}
        </AnimatePresence>

        {/* İçerik */}
        <div className="relative z-10 flex h-full flex-col justify-between p-5">
          {/* Üst */}
          <div className="flex items-start justify-between">
            <motion.div animate={{ opacity: isExpanded ? 0 : 1 }} transition={{ duration: 0.25 }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none"
                stroke="#d44637" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polygon points="3 6 9 3 15 6 21 3 21 18 15 21 9 18 3 21" />
                <line x1="9" x2="9" y1="3" y2="18" />
                <line x1="15" x2="15" y1="6" y2="21" />
              </svg>
            </motion.div>
            <motion.div
              className="flex items-center gap-1.5 rounded-full bg-ink/5 px-2 py-1 backdrop-blur-sm"
              animate={{ scale: isHovered ? 1.05 : 1 }}
            >
              <span className="h-1.5 w-1.5 rounded-full bg-eucalyptus" />
              <span className="text-[10px] font-semibold uppercase tracking-wide text-ink/50">Açık</span>
            </motion.div>
          </div>

          {/* Alt */}
          <div className="space-y-1">
            <motion.p
              className="text-sm font-semibold text-ink"
              animate={{ x: isHovered ? 4 : 0 }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
            >
              Terazidere Mah., Bayrampaşa
            </motion.p>
            <AnimatePresence>
              {isExpanded && (
                <motion.p
                  className="font-mono text-xs text-ink/45"
                  initial={{ opacity: 0, y: -8, height: 0 }}
                  animate={{ opacity: 1, y: 0, height: "auto" }}
                  exit={{ opacity: 0, y: -8, height: 0 }}
                >
                  41.0380° N, 28.9170° E
                </motion.p>
              )}
            </AnimatePresence>
            <motion.div
              className="h-px bg-gradient-to-r from-thread/50 via-thread/20 to-transparent"
              animate={{ scaleX: isHovered || isExpanded ? 1 : 0.3, originX: 0 }}
              transition={{ duration: 0.35 }}
            />
          </div>
        </div>
      </motion.div>

      {/* Tıkla ipucu */}
      <motion.p
        className="absolute -bottom-6 left-1/2 -translate-x-1/2 whitespace-nowrap text-[10px] text-ink/35"
        animate={{ opacity: isHovered && !isExpanded ? 1 : 0, y: isHovered ? 0 : 4 }}
        transition={{ duration: 0.2 }}
      >
        Haritayı genişlet
      </motion.p>
    </motion.div>
  );
}
