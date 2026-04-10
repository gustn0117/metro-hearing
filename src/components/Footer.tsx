import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#1a1a2e] text-white/70">
      <div className="max-w-[1200px] mx-auto px-6 pt-[60px] pb-10">
        {/* Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1fr] gap-12 mb-10">
          {/* Logo & tagline */}
          <div>
            <Image
              src="/images/logo/logo.png"
              alt="메트로 보청기"
              width={160}
              height={40}
              className="h-10 w-auto brightness-0 invert mb-4"
            />
            <p className="text-sm leading-[1.8]">
              정확한 진단과 합리적인 가격으로
              <br />
              고객 한 분 한 분의 일상에
              <br />
              편안한 소리를 되찾아드립니다.
            </p>
          </div>

          {/* Center intro */}
          <div>
            <h4 className="text-[15px] font-bold text-white mb-4">센터 소개</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/center#intro" className="hover:text-white transition-colors">메트로 보청기 소개</Link></li>
              <li><Link href="/center#greeting" className="hover:text-white transition-colors">인사말</Link></li>
              <li><Link href="/center#location" className="hover:text-white transition-colors">오시는 길</Link></li>
            </ul>
          </div>

          {/* Brands */}
          <div>
            <h4 className="text-[15px] font-bold text-white mb-4">보청기 브랜드</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/brands#signia" className="hover:text-white transition-colors">시그니아</Link></li>
              <li><Link href="/brands#oticon" className="hover:text-white transition-colors">오티콘</Link></li>
              <li><Link href="/brands#phonak" className="hover:text-white transition-colors">포낙</Link></li>
              <li><Link href="/brands#beltone" className="hover:text-white transition-colors">벨톤</Link></li>
              <li><Link href="/brands#widex" className="hover:text-white transition-colors">와이덱스</Link></li>
            </ul>
          </div>

          {/* Customer support */}
          <div>
            <h4 className="text-[15px] font-bold text-white mb-4">고객 지원</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/hearing" className="hover:text-white transition-colors">청각 관련 정보</Link></li>
              <li><Link href="/subsidy" className="hover:text-white transition-colors">정부지원금 안내</Link></li>
              <li><a href="tel:1800-9665" className="hover:text-white transition-colors">전화: 1800-9665</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/10 pt-6 text-center text-[13px]">
          <p>브랜드명: 메트로 보청기 | 대표자: 홍정헌 | 주소: 대구 중구 달구벌대로 2109-18 흥국생명빌딩 1층</p>
          <p>사업자등록번호: 788-59-00641 | 전화: 1800-9665 | 팩스: 053-214-2005 | 메일: mhearing25@naver.com</p>
          <p className="mt-3 opacity-50">&copy; {new Date().getFullYear()} 메트로 보청기. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
