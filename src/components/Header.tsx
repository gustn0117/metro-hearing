"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const navItems = [
  {
    label: "센터 소개",
    href: "/center",
    sub: [
      { label: "메트로 보청기 소개", href: "/center#intro" },
      { label: "인사말", href: "/center#greeting" },
      { label: "오시는 길", href: "/center#location" },
    ],
  },
  {
    label: "보청기 브랜드",
    href: "/brands",
    sub: [
      { label: "시그니아", href: "/brands#signia" },
      { label: "오티콘", href: "/brands#oticon" },
      { label: "포낙", href: "/brands#phonak" },
      { label: "벨톤", href: "/brands#beltone" },
      { label: "와이덱스", href: "/brands#widex" },
    ],
  },
  {
    label: "청각 관련 정보",
    href: "/hearing",
    sub: [
      { label: "보청기의 필요성", href: "/hearing#necessity" },
      { label: "보청기의 종류", href: "/hearing#types" },
    ],
  },
  {
    label: "정부지원금",
    href: "/subsidy",
    sub: [
      { label: "보청기 정부지원제도", href: "/subsidy#system" },
      { label: "청각장애 등록 절차", href: "/subsidy#registration" },
      { label: "보청기 급여비 수령 절차", href: "/subsidy#claim" },
    ],
  },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [expandedMobile, setExpandedMobile] = useState<string | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  const closeMobile = useCallback(() => setMobileOpen(false), []);

  return (
    <>
      <header className={`header ${scrolled ? "scrolled" : ""}`}>
        <div className="max-w-[1240px] mx-auto px-6 flex items-center justify-between h-full">
          <Link href="/" className="relative z-10">
            <Image src="/images/logo/logo.png" alt="메트로 보청기" width={180} height={45} className="h-[42px] w-auto" priority />
          </Link>

          {/* Desktop Nav */}
          <ul className="desktop-nav gap-1 items-center">
            {navItems.map((item) => (
              <li key={item.href} className="nav-item relative group">
                <Link
                  href={item.href}
                  className={`block px-5 py-2.5 text-[15px] font-semibold rounded-lg transition-all duration-200 ${
                    pathname === item.href
                      ? "text-[var(--color-primary)] bg-[var(--color-primary-light)]"
                      : "text-gray-600 hover:text-[var(--color-primary)] hover:bg-[var(--color-primary-light)]/60"
                  }`}
                >
                  {item.label}
                </Link>
                {item.sub && (
                  <ul className="nav-dropdown absolute top-full left-1/2 -translate-x-1/2 min-w-[220px] bg-white/[.98] backdrop-blur-xl rounded-2xl shadow-xl shadow-black/[.06] py-2.5 z-50 border border-gray-100/80">
                    {item.sub.map((s) => (
                      <li key={s.href}>
                        <Link href={s.href} className="block px-5 py-2.5 text-[14px] text-gray-400 hover:bg-[var(--color-primary-light)]/70 hover:text-[var(--color-primary)] transition-all rounded-xl mx-1.5">
                          {s.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
            <li className="ml-3">
              <a href="tel:1800-9665" className="group inline-flex items-center gap-2 px-6 py-2.5 bg-[var(--color-primary)] text-white text-[14px] font-bold rounded-full hover:bg-[var(--color-primary-dark)] transition-all duration-200 shadow-md shadow-blue-900/15 hover:shadow-lg hover:shadow-blue-900/20 hover:-translate-y-0.5">
                <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                1800-9665
              </a>
            </li>
          </ul>

          {/* Mobile Toggle */}
          <button
            className="mobile-menu flex-col justify-center gap-[6px] w-9 h-9 bg-transparent relative z-10"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="메뉴"
          >
            <span className={`block w-6 h-[2px] bg-gray-800 rounded-full transition-all duration-300 ${mobileOpen ? "rotate-45 translate-y-[8px]" : ""}`} />
            <span className={`block w-6 h-[2px] bg-gray-800 rounded-full transition-all duration-300 ${mobileOpen ? "opacity-0 scale-0" : ""}`} />
            <span className={`block w-6 h-[2px] bg-gray-800 rounded-full transition-all duration-300 ${mobileOpen ? "-rotate-45 -translate-y-[8px]" : ""}`} />
          </button>
        </div>
      </header>

      {/* Mobile Overlay */}
      {mobileOpen && (
        <div className="mobile-menu-overlay open" onClick={closeMobile} />
      )}

      {/* Mobile Drawer */}
      <div className={`mobile-drawer ${mobileOpen ? "open" : ""}`}>
        <div className="p-6 pt-8">
          <div className="flex items-center justify-between mb-10">
            <Image src="/images/logo/logo.png" alt="메트로 보청기" width={140} height={35} className="h-[35px] w-auto" />
            <button onClick={closeMobile} className="w-10 h-10 flex items-center justify-center rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors" aria-label="닫기">
              <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path d="M18 6L6 18M6 6l12 12"/></svg>
            </button>
          </div>

          <nav className="space-y-1">
            {navItems.map((item) => (
              <div key={item.href}>
                <button
                  className={`flex items-center justify-between w-full py-3.5 px-4 rounded-xl font-semibold text-[15px] transition-all ${
                    pathname === item.href
                      ? "text-[var(--color-primary)] bg-[var(--color-primary-light)]"
                      : "text-gray-700 hover:bg-gray-50"
                  }`}
                  onClick={() => setExpandedMobile(expandedMobile === item.href ? null : item.href)}
                >
                  {item.label}
                  <svg className={`w-4 h-4 text-gray-300 transition-transform duration-200 ${expandedMobile === item.href ? "rotate-180" : ""}`} fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><polyline points="6 9 12 15 18 9"/></svg>
                </button>
                {expandedMobile === item.href && item.sub && (
                  <div className="pl-4 pb-2 space-y-0.5">
                    {item.sub.map((s) => (
                      <Link key={s.href} href={s.href} className="block py-2.5 px-4 text-[14px] text-gray-400 rounded-lg hover:bg-gray-50 hover:text-[var(--color-primary)] transition-all" onClick={closeMobile}>
                        {s.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          <div className="mt-10 pt-8 border-t border-gray-100">
            <a href="tel:1800-9665" className="flex items-center justify-center gap-2.5 w-full py-4 bg-[var(--color-primary)] text-white font-bold rounded-2xl shadow-lg shadow-blue-900/15 text-[15px] hover:bg-[var(--color-primary-dark)] transition-colors">
              <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
              무료 상담 예약 1800-9665
            </a>
            <div className="flex gap-3 mt-4">
              <a href="https://pf.kakao.com/_wnSzX/chat" target="_blank" rel="noopener noreferrer" className="flex-1 flex items-center justify-center gap-2 py-3.5 bg-[#FEE500] text-[#3C1E1E] font-semibold rounded-xl text-[13px] hover:brightness-95 transition-all">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 3C6.48 3 2 6.58 2 10.9c0 2.78 1.86 5.21 4.65 6.6-.15.56-.96 3.56-.99 3.79 0 0-.02.17.09.24.11.06.24.01.24.01.32-.04 3.7-2.44 4.28-2.86.56.08 1.14.12 1.73.12 5.52 0 10-3.58 10-7.9C22 6.58 17.52 3 12 3z"/></svg>
                카카오톡
              </a>
              <a href="https://talk.naver.com/ct/wewzl7e?frm=pblog#nafullscreen" target="_blank" rel="noopener noreferrer" className="flex-1 flex items-center justify-center gap-2 py-3.5 bg-[#03C75A] text-white font-semibold rounded-xl text-[13px] hover:brightness-95 transition-all">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M13.3 12.22l-3.3-4.72H7v9h3.7v-4.72l3.3 4.72H17v-9h-3.7v4.72z"/></svg>
                네이버
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
