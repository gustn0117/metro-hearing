import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="relative text-white/70">
      {/* Solid top accent border */}
      <div className="h-[2px] bg-[var(--color-primary)]" />

      {/* Main footer */}
      <div className="bg-[#0f172a] pt-16 pb-10">
        <div className="max-w-[1200px] mx-auto px-6">
          {/* Columns */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-14">
            {/* Logo & tagline */}
            <div>
              <Image
                src="/images/logo/logo.png"
                alt="메트로 보청기"
                width={160}
                height={40}
                className="h-10 w-auto brightness-0 invert mb-5"
              />
              <p className="text-sm leading-relaxed mb-6">
                정확한 진단과 합리적인 가격으로
                <br />
                고객 한 분 한 분의 일상에
                <br />
                편안한 소리를 되찾아드립니다.
              </p>
              <div className="flex items-center gap-3">
                <a
                  href="tel:1800-9665"
                  className="inline-flex items-center gap-2 bg-white/[.08] hover:bg-white/[.14] transition-colors rounded-none px-4 py-2 text-sm text-white/90 border border-white/10"
                >
                  <svg
                    width="16"
                    height="16"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                  1800-9665
                </a>
              </div>
            </div>

            {/* Center intro */}
            <div>
              <h4 className="text-[15px] font-bold text-white mb-5 tracking-tight flex items-center gap-2">
                <span className="w-4 h-[2px] bg-[var(--color-primary)]" />
                센터 소개
              </h4>
              <ul className="space-y-2.5 text-sm">
                <li>
                  <Link
                    href="/center#intro"
                    className="hover:text-white hover:translate-x-1 transition-all duration-200 block"
                  >
                    메트로 보청기 소개
                  </Link>
                </li>
                <li>
                  <Link
                    href="/center#greeting"
                    className="hover:text-white hover:translate-x-1 transition-all duration-200 block"
                  >
                    인사말
                  </Link>
                </li>
                <li>
                  <Link
                    href="/center#location"
                    className="hover:text-white hover:translate-x-1 transition-all duration-200 block"
                  >
                    오시는 길
                  </Link>
                </li>
              </ul>
            </div>

            {/* Brands */}
            <div>
              <h4 className="text-[15px] font-bold text-white mb-5 tracking-tight flex items-center gap-2">
                <span className="w-4 h-[2px] bg-[var(--color-primary)]" />
                보청기 브랜드
              </h4>
              <ul className="space-y-2.5 text-sm">
                <li>
                  <Link
                    href="/brands#signia"
                    className="hover:text-white hover:translate-x-1 transition-all duration-200 block"
                  >
                    시그니아
                  </Link>
                </li>
                <li>
                  <Link
                    href="/brands#oticon"
                    className="hover:text-white hover:translate-x-1 transition-all duration-200 block"
                  >
                    오티콘
                  </Link>
                </li>
                <li>
                  <Link
                    href="/brands#phonak"
                    className="hover:text-white hover:translate-x-1 transition-all duration-200 block"
                  >
                    포낙
                  </Link>
                </li>
                <li>
                  <Link
                    href="/brands#beltone"
                    className="hover:text-white hover:translate-x-1 transition-all duration-200 block"
                  >
                    벨톤
                  </Link>
                </li>
                <li>
                  <Link
                    href="/brands#widex"
                    className="hover:text-white hover:translate-x-1 transition-all duration-200 block"
                  >
                    와이덱스
                  </Link>
                </li>
              </ul>
            </div>

            {/* Customer support */}
            <div>
              <h4 className="text-[15px] font-bold text-white mb-5 tracking-tight flex items-center gap-2">
                <span className="w-4 h-[2px] bg-[var(--color-primary)]" />
                고객 지원
              </h4>
              <ul className="space-y-2.5 text-sm">
                <li>
                  <Link
                    href="/hearing"
                    className="hover:text-white hover:translate-x-1 transition-all duration-200 block"
                  >
                    청각 관련 정보
                  </Link>
                </li>
                <li>
                  <Link
                    href="/subsidy"
                    className="hover:text-white hover:translate-x-1 transition-all duration-200 block"
                  >
                    정부지원금 안내
                  </Link>
                </li>
                <li>
                  <a
                    href="tel:1800-9665"
                    className="hover:text-white hover:translate-x-1 transition-all duration-200 block"
                  >
                    전화: 1800-9665
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Thin separator line */}
          <div className="border-t border-white/[.08] mb-6" />

          {/* Business info */}
          <div className="text-center text-[13px] leading-relaxed space-y-1">
            <p>
              브랜드명: 메트로 보청기 | 대표자: 홍정헌 | 주소: 대구 중구
              달구벌대로 2109-18 흥국생명빌딩 1층
            </p>
            <p>
              사업자등록번호: 788-59-00641 | 전화: 1800-9665 | 팩스:
              053-214-2005 | 메일: mhearing25@naver.com
            </p>
            <p className="mt-4 text-white/30 text-xs">
              &copy; {new Date().getFullYear()} 메트로 보청기. All rights
              reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
