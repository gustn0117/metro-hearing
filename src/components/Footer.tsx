import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="relative text-white/60">
      {/* Gradient top border */}
      <div className="h-[3px] bg-gradient-to-r from-[var(--color-primary)] via-[var(--color-accent)] to-[var(--color-gold)]" />

      <div
        className="bg-[#080d1a] pt-18 pb-12"
        style={{
          backgroundImage:
            "radial-gradient(ellipse at 20% 0%, rgba(11,83,148,.06), transparent 50%), linear-gradient(rgba(255,255,255,.015) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.015) 1px, transparent 1px)",
          backgroundSize: "100% 100%, 40px 40px, 40px 40px",
        }}
      >
        <div className="max-w-[1200px] mx-auto px-6">
          {/* Columns */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            {/* Logo & tagline */}
            <div>
              <Image
                src="/images/logo/logo.png"
                alt="메트로 보청기"
                width={160}
                height={40}
                className="h-10 w-auto brightness-0 invert mb-6 opacity-90"
              />
              <p className="text-sm leading-[1.9] mb-7 text-white/40">
                정확한 진단과 합리적인 가격으로
                <br />
                고객 한 분 한 분의 일상에
                <br />
                편안한 소리를 되찾아드립니다.
              </p>
              <a
                href="tel:1800-9665"
                className="inline-flex items-center gap-2.5 bg-white/[.05] hover:bg-white/[.1] transition-all duration-300 rounded-full px-5 py-2.5 text-sm text-white/70 hover:text-white border border-white/[.06] hover:border-white/10"
              >
                <svg width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                1800-9665
              </a>
            </div>

            {/* Center intro */}
            <div>
              <h4 className="text-[14px] font-bold text-white/90 mb-6 flex items-center gap-2.5 tracking-wide">
                <span className="w-1 h-4 rounded-full bg-gradient-to-b from-[var(--color-accent)] to-[var(--color-primary)]" />
                센터 소개
              </h4>
              <ul className="space-y-3 text-sm">
                {[
                  { label: "메트로 보청기 소개", href: "/center#intro" },
                  { label: "인사말", href: "/center#greeting" },
                  { label: "오시는 길", href: "/center#location" },
                ].map((item) => (
                  <li key={item.href}>
                    <Link href={item.href} className="inline-flex items-center gap-2 text-white/35 hover:text-white/80 hover:translate-x-1 transition-all duration-200">
                      <span className="w-1 h-1 rounded-full bg-white/20" />
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Brands */}
            <div>
              <h4 className="text-[14px] font-bold text-white/90 mb-6 flex items-center gap-2.5 tracking-wide">
                <span className="w-1 h-4 rounded-full bg-gradient-to-b from-[var(--color-accent)] to-[var(--color-primary)]" />
                보청기 브랜드
              </h4>
              <ul className="space-y-3 text-sm">
                {[
                  { label: "시그니아", href: "/brands#signia" },
                  { label: "오티콘", href: "/brands#oticon" },
                  { label: "포낙", href: "/brands#phonak" },
                  { label: "벨톤", href: "/brands#beltone" },
                  { label: "와이덱스", href: "/brands#widex" },
                ].map((item) => (
                  <li key={item.href}>
                    <Link href={item.href} className="inline-flex items-center gap-2 text-white/35 hover:text-white/80 hover:translate-x-1 transition-all duration-200">
                      <span className="w-1 h-1 rounded-full bg-white/20" />
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Customer support */}
            <div>
              <h4 className="text-[14px] font-bold text-white/90 mb-6 flex items-center gap-2.5 tracking-wide">
                <span className="w-1 h-4 rounded-full bg-gradient-to-b from-[var(--color-accent)] to-[var(--color-primary)]" />
                고객 지원
              </h4>
              <ul className="space-y-3 text-sm">
                {[
                  { label: "청각 관련 정보", href: "/hearing" },
                  { label: "정부지원금 안내", href: "/subsidy" },
                ].map((item) => (
                  <li key={item.href}>
                    <Link href={item.href} className="inline-flex items-center gap-2 text-white/35 hover:text-white/80 hover:translate-x-1 transition-all duration-200">
                      <span className="w-1 h-1 rounded-full bg-white/20" />
                      {item.label}
                    </Link>
                  </li>
                ))}
                <li>
                  <a href="tel:1800-9665" className="inline-flex items-center gap-2 text-white/35 hover:text-white/80 hover:translate-x-1 transition-all duration-200">
                    <span className="w-1 h-1 rounded-full bg-white/20" />
                    전화: 1800-9665
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Separator */}
          <div className="h-[1px] bg-gradient-to-r from-transparent via-white/[.06] to-transparent mb-8" />

          {/* Business info */}
          <div className="text-center text-[12px] leading-relaxed space-y-1.5 text-white/25">
            <p>
              브랜드명: 메트로 보청기 | 대표자: 홍정헌 | 주소: 대구 중구
              달구벌대로 2109-18 흥국생명빌딩 1층
            </p>
            <p>
              사업자등록번호: 788-59-00641 | 전화: 1800-9665 | 팩스:
              053-214-2005 | 메일: mhearing25@naver.com
            </p>
            <p className="mt-5 text-white/15 text-[11px]">
              &copy; {new Date().getFullYear()} 메트로 보청기. All rights
              reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
