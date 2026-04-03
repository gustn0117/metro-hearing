"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Image from "next/image";

const services = [
  { num: 1, title: "정부지원금 신청 가능 여부 안내", text: "청력검사 진행 후, 등급신청 가능여부 및 정부지원제도를 안내해 드립니다.", img: "/images/main/slide1.jpg" },
  { num: 2, title: "장애진단 검사 동행", text: "장애진단이 가능한 청력대로 확인되는 경우, 청각 장애진단 검사 예약 및 검사 동행을 진행합니다.", img: "/images/main/정부지원금1.jpg" },
  { num: 3, title: "브랜드별 체험 프로그램", text: "상담 당일 다양한 브랜드 비교 체험, 고객에게 맞는 제품 선택 후 한달 무료체험이 가능합니다.", img: "/images/main/slide3.jpg" },
  { num: 4, title: "집 방문 서비스", text: "이동이 어려운 분들을 위한 집 방문 1:1 전문 상담 서비스를 제공합니다.", img: "/images/main/slide4.png" },
];

const AUTOPLAY_MS = 4000;

export default function ServicesSlider() {
  const [idx, setIdx] = useState(0);
  const [paused, setPaused] = useState(false);
  const [progress, setProgress] = useState(0);
  const progressRef = useRef<number | null>(null);
  const startTimeRef = useRef(0);
  const pointerStartX = useRef<number | null>(null);
  const pointerDelta = useRef(0);

  const [isMobile, setIsMobile] = useState(false);
  const maxIdx = isMobile ? services.length - 1 : services.length - 2;

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 1023px)");
    const handler = (e: MediaQueryListEvent | MediaQueryList) => setIsMobile(e.matches);
    handler(mq);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  useEffect(() => {
    setIdx((prev) => Math.min(prev, maxIdx));
  }, [maxIdx]);

  const goTo = useCallback(
    (i: number) => {
      setIdx(Math.max(0, Math.min(maxIdx, i)));
      setProgress(0);
      startTimeRef.current = 0;
    },
    [maxIdx],
  );

  const next = useCallback(() => {
    setIdx((prev) => {
      const n = prev + 1;
      return n > maxIdx ? 0 : n;
    });
    setProgress(0);
    startTimeRef.current = 0;
  }, [maxIdx]);

  useEffect(() => {
    if (paused) {
      if (progressRef.current) cancelAnimationFrame(progressRef.current);
      return;
    }

    startTimeRef.current = performance.now();

    const tick = (now: number) => {
      const elapsed = now - startTimeRef.current;
      const pct = Math.min(elapsed / AUTOPLAY_MS, 1);
      setProgress(pct);

      if (pct >= 1) {
        next();
        return;
      }
      progressRef.current = requestAnimationFrame(tick);
    };

    progressRef.current = requestAnimationFrame(tick);
    return () => {
      if (progressRef.current) cancelAnimationFrame(progressRef.current);
    };
  }, [paused, idx, next]);

  const onPointerDown = (e: React.PointerEvent) => {
    pointerStartX.current = e.clientX;
    pointerDelta.current = 0;
  };
  const onPointerMove = (e: React.PointerEvent) => {
    if (pointerStartX.current === null) return;
    pointerDelta.current = e.clientX - pointerStartX.current;
  };
  const onPointerUp = () => {
    if (pointerStartX.current === null) return;
    const threshold = 50;
    if (pointerDelta.current < -threshold) {
      goTo(idx + 1);
    } else if (pointerDelta.current > threshold) {
      goTo(idx - 1);
    }
    pointerStartX.current = null;
    pointerDelta.current = 0;
  };

  const slideWidth = isMobile ? 100 : 50;
  const gapPx = isMobile ? 16 : 24;

  return (
    <div
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Slider viewport */}
      <div
        className="overflow-hidden rounded-2xl"
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerCancel={onPointerUp}
        style={{ touchAction: "pan-y" }}
      >
        <div
          className="slider-track flex"
          style={{
            transform: `translateX(calc(-${idx * slideWidth}% - ${idx * gapPx}px))`,
            gap: `${gapPx}px`,
          }}
        >
          {services.map((s) => (
            <div
              key={s.num}
              className="group relative bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100/60 hover:border-[var(--color-primary)]/10"
              style={{
                minWidth: `${slideWidth}%`,
                flexShrink: 0,
              }}
            >
              {/* Image */}
              <div className="relative h-[250px] overflow-hidden">
                <Image
                  src={s.img}
                  alt={s.title}
                  width={600}
                  height={250}
                  className="w-full h-full object-cover img-zoom"
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent" />
                {/* Step number overlay */}
                <div className="absolute top-5 left-5">
                  <span
                    className="inline-flex items-center justify-center w-11 h-11 rounded-xl text-white text-sm font-bold shadow-lg backdrop-blur-sm border border-white/10"
                    style={{
                      background: "linear-gradient(135deg, var(--color-primary), var(--color-accent))",
                    }}
                  >
                    {String(s.num).padStart(2, "0")}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-7 max-md:p-5">
                <span className="text-[11px] font-bold tracking-[.2em] uppercase text-[var(--color-primary)]/50 mb-3 block">
                  Step {String(s.num).padStart(2, "0")}
                </span>
                <h3 className="text-[1.1rem] font-bold mb-2.5 text-gray-900 leading-snug group-hover:text-[var(--color-primary)] transition-colors">
                  {s.title}
                </h3>
                <p className="text-[14px] text-gray-400 leading-relaxed">
                  {s.text}
                </p>
              </div>

              {/* Bottom accent line on hover */}
              <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-accent)] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
            </div>
          ))}
        </div>
      </div>

      {/* Controls row */}
      <div className="flex items-center justify-center gap-6 mt-10">
        {/* Prev button */}
        <button
          onClick={() => goTo(idx - 1)}
          aria-label="이전"
          className="w-11 h-11 rounded-full bg-gray-50 text-gray-400 flex items-center justify-center hover:bg-[var(--color-primary)] hover:text-white transition-all duration-300 hover:scale-110 border border-gray-100 hover:border-transparent"
        >
          <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path d="M15 18l-6-6 6-6"/></svg>
        </button>

        {/* Progress dots */}
        <div className="flex items-center gap-2.5">
          {Array.from({ length: maxIdx + 1 }, (_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              aria-label={`슬라이드 ${i + 1}`}
              className="relative h-2 rounded-full overflow-hidden transition-all duration-400"
              style={{
                width: idx === i ? 36 : 8,
                backgroundColor: idx === i ? "transparent" : "#e5e7eb",
              }}
            >
              {idx === i && (
                <>
                  <span
                    className="absolute inset-0 rounded-full"
                    style={{ backgroundColor: "var(--color-primary)", opacity: 0.15 }}
                  />
                  <span
                    className="absolute inset-y-0 left-0 rounded-full"
                    style={{
                      width: `${progress * 100}%`,
                      backgroundColor: "var(--color-primary)",
                      transition: "width 60ms linear",
                    }}
                  />
                </>
              )}
            </button>
          ))}
        </div>

        {/* Next button */}
        <button
          onClick={() => goTo(idx + 1)}
          aria-label="다음"
          className="w-11 h-11 rounded-full bg-gray-50 text-gray-400 flex items-center justify-center hover:bg-[var(--color-primary)] hover:text-white transition-all duration-300 hover:scale-110 border border-gray-100 hover:border-transparent"
        >
          <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path d="M9 18l6-6-6-6"/></svg>
        </button>
      </div>
    </div>
  );
}
