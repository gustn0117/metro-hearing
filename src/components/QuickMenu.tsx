"use client";

import { useEffect, useState } from "react";

export default function QuickMenu() {
  const [showTop, setShowTop] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    const handleScroll = () => {
      setShowTop(window.scrollY > 400);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div
      className={`fixed right-5 top-1/2 -translate-y-1/2 z-[999] flex flex-col gap-2.5 max-lg:right-2.5 transition-all duration-500 ${
        mounted ? "opacity-100 translate-x-0" : "opacity-0 translate-x-4"
      }`}
    >
      {/* 카톡 문의 */}
      <a
        href="https://pf.kakao.com/_wnSzX/chat"
        target="_blank"
        rel="noopener noreferrer"
        className="quick-item group relative w-[50px] h-[50px] max-lg:w-10 max-lg:h-10 rounded-full flex items-center justify-center shadow-lg hover:scale-110 hover:shadow-xl transition-all duration-300 bg-[#FEE500] text-[#3C1E1E]"
        title="카톡 문의"
      >
        <span className="quick-label absolute bg-gray-900/90 text-white px-3 py-1.5 rounded-lg text-xs whitespace-nowrap backdrop-blur-sm after:content-[''] after:absolute after:top-1/2 after:-right-1 after:-translate-y-1/2 after:border-4 after:border-transparent after:border-l-gray-900/90">
          카톡 문의
        </span>
        <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 3C6.48 3 2 6.58 2 10.9c0 2.78 1.86 5.21 4.65 6.6-.15.56-.96 3.56-.99 3.79 0 0-.02.17.09.24.11.06.24.01.24.01.32-.04 3.7-2.44 4.28-2.86.56.08 1.14.12 1.73.12 5.52 0 10-3.58 10-7.9C22 6.58 17.52 3 12 3z" />
        </svg>
      </a>

      {/* 네이버톡톡 */}
      <a
        href="https://talk.naver.com/ct/wewzl7e?frm=pblog#nafullscreen"
        target="_blank"
        rel="noopener noreferrer"
        className="quick-item group relative w-[50px] h-[50px] max-lg:w-10 max-lg:h-10 rounded-full flex items-center justify-center shadow-lg hover:scale-110 hover:shadow-xl transition-all duration-300 bg-[#03C75A] text-white"
        title="네이버톡톡"
      >
        <span className="quick-label absolute bg-gray-900/90 text-white px-3 py-1.5 rounded-lg text-xs whitespace-nowrap backdrop-blur-sm after:content-[''] after:absolute after:top-1/2 after:-right-1 after:-translate-y-1/2 after:border-4 after:border-transparent after:border-l-gray-900/90">
          네이버톡톡
        </span>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
          <path d="M13.3 12.22l-3.3-4.72H7v9h3.7v-4.72l3.3 4.72H17v-9h-3.7v4.72z" />
        </svg>
      </a>

      {/* 전화 문의 */}
      <a
        href="tel:1800-9665"
        className="quick-item group relative w-[50px] h-[50px] max-lg:w-10 max-lg:h-10 rounded-full flex items-center justify-center shadow-lg hover:scale-110 hover:shadow-xl transition-all duration-300 bg-[var(--color-primary)] text-white"
        title="전화 문의"
      >
        <span className="quick-label absolute bg-gray-900/90 text-white px-3 py-1.5 rounded-lg text-xs whitespace-nowrap backdrop-blur-sm after:content-[''] after:absolute after:top-1/2 after:-right-1 after:-translate-y-1/2 after:border-4 after:border-transparent after:border-l-gray-900/90">
          전화 문의
        </span>
        <svg
          width="20"
          height="20"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
        </svg>
      </a>

      {/* 후기 */}
      <a
        href="https://blog.naver.com/PostList.naver?blogId=mhearing25&categoryNo=7&skinType=&skinId=&from=menu&userSelectMenu=true"
        target="_blank"
        rel="noopener noreferrer"
        className="quick-item group relative w-[50px] h-[50px] max-lg:w-10 max-lg:h-10 rounded-full flex items-center justify-center shadow-lg hover:scale-110 hover:shadow-xl transition-all duration-300 bg-[var(--color-gold)] text-white"
        title="후기"
      >
        <span className="quick-label absolute bg-gray-900/90 text-white px-3 py-1.5 rounded-lg text-xs whitespace-nowrap backdrop-blur-sm after:content-[''] after:absolute after:top-1/2 after:-right-1 after:-translate-y-1/2 after:border-4 after:border-transparent after:border-l-gray-900/90">
          후기
        </span>
        <svg
          width="20"
          height="20"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
      </a>

      {/* 블로그 */}
      <a
        href="https://blog.naver.com/mhearing25"
        target="_blank"
        rel="noopener noreferrer"
        className="quick-item group relative w-[50px] h-[50px] max-lg:w-10 max-lg:h-10 rounded-full flex items-center justify-center shadow-lg hover:scale-110 hover:shadow-xl transition-all duration-300 bg-[#03C75A] text-white"
        title="블로그"
      >
        <span className="quick-label absolute bg-gray-900/90 text-white px-3 py-1.5 rounded-lg text-xs whitespace-nowrap backdrop-blur-sm after:content-[''] after:absolute after:top-1/2 after:-right-1 after:-translate-y-1/2 after:border-4 after:border-transparent after:border-l-gray-900/90">
          블로그
        </span>
        <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
          <path d="M4 4h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2zm1 4v2h6V8H5zm0 4v2h4v-2H5zm8-4v6h6V8h-6z" />
        </svg>
      </a>

      {/* Scroll to top */}
      <button
        onClick={scrollToTop}
        className={`w-[50px] h-[50px] max-lg:w-10 max-lg:h-10 rounded-full flex items-center justify-center shadow-lg bg-white/90 text-gray-700 hover:bg-white hover:scale-110 hover:shadow-xl transition-all duration-300 mt-1 ${
          showTop
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-4 pointer-events-none"
        }`}
        aria-label="맨 위로 이동"
      >
        <svg
          width="20"
          height="20"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          viewBox="0 0 24 24"
        >
          <path d="M18 15l-6-6-6 6" />
        </svg>
      </button>
    </div>
  );
}
