import Image from "next/image";
import Link from "next/link";
import FadeUp from "@/components/FadeUp";
import ServicesSlider from "@/components/ServicesSlider";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-screen min-h-[600px] max-h-[900px] flex items-center overflow-hidden mt-[var(--header-h)]">
        <div className="absolute inset-0">
          <Image src="/images/main/hero1.png" alt="메트로 보청기" fill className="object-cover" priority />
        </div>
        <div className="hero-gradient absolute inset-0" />

        <FadeUp className="relative z-10 text-white max-w-[650px] pl-[60px] max-lg:pl-8 max-md:pl-6">
          <h1 className="text-[48px] max-lg:text-[36px] max-md:text-[28px] font-extrabold leading-[1.3] mb-4" style={{ textShadow: "0 2px 10px rgba(0,0,0,.2)" }}>
            <span className="text-shimmer">정확한 진단</span>이<br />올바른 선택을 만듭니다
          </h1>
          <p className="text-xl max-md:text-base text-white/90 mb-9 leading-[1.6]">
            청능사·청각사가 직접 상담하는<br />청각 전문 솔루션 센터
          </p>
          <a href="tel:1800-9665" className="inline-flex items-center gap-2.5 px-9 py-4 bg-[var(--color-gold)] text-white text-base font-bold rounded-full hover:-translate-y-0.5 hover:shadow-[0_6px_30px_rgba(212,168,83,.5)] transition-all duration-300 shadow-[0_4px_20px_rgba(212,168,83,.4)]">
            <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
            무료 상담 예약 1800-9665
          </a>
        </FadeUp>
      </section>

      {/* Stats Counter Section */}
      <section className="relative z-20 -mt-16 max-md:-mt-12 pb-8">
        <div className="max-w-[1100px] mx-auto px-6">
          <div className="grid grid-cols-4 max-md:grid-cols-2 gap-5 max-md:gap-3">
            {[
              { label: "보청기 전문가 상담", value: "청각사, 청능사", icon: <svg width="26" height="26" fill="none" stroke="var(--color-primary)" strokeWidth="1.8" viewBox="0 0 24 24"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/></svg> },
              { label: "고객 만족도", value: "98%", icon: <svg width="26" height="26" fill="none" stroke="var(--color-primary)" strokeWidth="1.8" viewBox="0 0 24 24"><path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3H14zM4 22H2V11h2"/></svg> },
              { label: "세계 5대 브랜드", value: "멀티 브랜드", icon: <svg width="26" height="26" fill="none" stroke="var(--color-primary)" strokeWidth="1.8" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg> },
              { label: "보청기 지원금", value: "111만원", icon: <svg width="26" height="26" fill="none" stroke="var(--color-primary)" strokeWidth="1.8" viewBox="0 0 24 24"><path d="M12 1v22M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg> },
            ].map((stat, i) => (
              <FadeUp key={i} delay={i * 100}>
                <div className="glass-card rounded-xl p-6 max-md:p-4 text-center shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 bg-white/90">
                  <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-[var(--color-primary-light)] flex items-center justify-center">
                    {stat.icon}
                  </div>
                  <p className="text-2xl max-md:text-xl font-extrabold gradient-text mb-1">{stat.value}</p>
                  <p className="text-sm text-gray-500 font-medium">{stat.label}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* 4대 핵심 서비스 */}
      <section className="py-[100px] max-md:py-[60px]">
        <div className="max-w-[1200px] mx-auto px-6">
          <FadeUp>
            <span className="section-label">Core Services</span>
            <h2 className="text-4xl max-md:text-[26px] font-extrabold leading-[1.3] mb-4">
              4대 <span className="gradient-text">핵심 서비스</span>
            </h2>
            <p className="text-[17px] text-gray-500 max-w-[650px] mb-12 leading-[1.8]">메트로 보청기는 상담부터 사후관리까지 체계적인 서비스를 제공합니다.</p>
          </FadeUp>
          <ServicesSlider />
        </div>
      </section>

      {/* 강점 3가지 */}
      <section className="py-[100px] max-md:py-[60px] bg-[#f8f9fa]">
        <div className="max-w-[1200px] mx-auto px-6 text-center">
          <FadeUp>
            <span className="section-label">Why Metro</span>
            <h2 className="text-4xl max-md:text-[26px] font-extrabold leading-[1.3] mb-4">
              잘 들리는 <span className="gradient-text">메트로 보청기</span>
            </h2>
            <p className="text-[17px] text-gray-500 max-w-[650px] mx-auto mb-12 leading-[1.8]">메트로 보청기만의 차별화된 서비스로 고객 만족을 실현합니다.</p>
          </FadeUp>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 stagger-children">
            {[
              {
                icon: <svg width="36" height="36" fill="none" stroke="var(--color-primary)" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 1v22M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>,
                title: "최대 50~75% 특별 프로모션 혜택",
                text: "센터 자체 프로모션으로 일부 제품 최대 50~75% 할인 적용",
              },
              {
                icon: <svg width="36" height="36" fill="none" stroke="var(--color-primary)" strokeWidth="2" viewBox="0 0 24 24"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/></svg>,
                title: "청능사·청각사 상담",
                text: "자격을 갖춘 전문 인력이 상담부터 사후관리까지 직접 담당",
              },
              {
                icon: <svg width="36" height="36" fill="none" stroke="var(--color-primary)" strokeWidth="2" viewBox="0 0 24 24"><path d="M9 3H5a2 2 0 0 0-2 2v4m6-6h10a2 2 0 0 1 2 2v4M9 3v18m0 0h10a2 2 0 0 0 2-2V9M9 21H5a2 2 0 0 1-2-2V9m0 0h18"/></svg>,
                title: "정밀 검사 전문 장비",
                text: "고급 청력 검사 장비를 통한 체계적인 진단 시스템 운영",
              },
            ].map((s, i) => (
              <FadeUp key={i}>
                <div className="bg-white rounded-xl p-12 max-md:p-8 text-center shadow-[0_2px_20px_rgba(0,0,0,.08)] hover:-translate-y-1.5 hover:shadow-[0_10px_40px_rgba(0,0,0,.12)] transition-all duration-300">
                  <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-[var(--color-primary-light)] flex items-center justify-center">
                    {s.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-gray-800">{s.title}</h3>
                  <p className="text-[15px] text-gray-500 leading-[1.7]">{s.text}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* 멀티 브랜드 강조 */}
      <section className="py-[100px] max-md:py-[60px] bg-[#f8f9fa]">
        <div className="max-w-[1200px] mx-auto px-6 text-center">
          <FadeUp>
            <span className="section-label">Global Brands</span>
            <h2 className="text-4xl max-md:text-[26px] font-extrabold leading-[1.3] mb-4">
              글로벌 보청기 <span className="gradient-text">비교 전문센터</span>
            </h2>
            <div className="w-12 h-[3px] bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-gold)] rounded-sm mx-auto mb-5" />
            <p className="text-[17px] text-gray-500 max-w-[700px] mx-auto mb-12 leading-[1.8]">
              보청기 브랜드마다 제공하는 기능과 음질이 다르기에 자신에게 적합한 제품을 찾는 과정이 중요합니다.<br />세계 주요 브랜드를 한 자리에서 비교 체험하세요.
            </p>
          </FadeUp>
          {/* 3+2 layout */}
          <FadeUp>
            <div className="grid grid-cols-3 max-md:grid-cols-2 gap-5 mb-5 max-md:mb-3">
              {[
                { name: "시그니아", logo: "/images/brands/signia.png", id: "signia" },
                { name: "오티콘", logo: "/images/brands/oticon.png", id: "oticon" },
                { name: "포낙", logo: "/images/brands/phonak.png", id: "phonak" },
              ].map((b) => (
                <Link key={b.id} href={`/brands#${b.id}`} className="group flex flex-col items-center gap-4 py-8 rounded-2xl bg-white border border-[#f0f0f0] hover:shadow-lg hover:-translate-y-1 transition-all duration-400">
                  <Image src={b.logo} alt={b.name} width={130} height={55} className="h-[50px] max-md:h-[40px] w-auto opacity-80 group-hover:opacity-100 transition-opacity" />
                  <span className="text-[13px] text-gray-400 font-semibold tracking-wide">{b.name}</span>
                </Link>
              ))}
            </div>
            <div className="grid grid-cols-2 gap-5 max-md:gap-3 max-w-[66%] max-md:max-w-full mx-auto">
              {[
                { name: "벨톤", logo: "/images/brands/beltone.png", id: "beltone" },
                { name: "와이덱스", logo: "/images/brands/widex.png", id: "widex" },
              ].map((b) => (
                <Link key={b.id} href={`/brands#${b.id}`} className="group flex flex-col items-center gap-4 py-8 rounded-2xl bg-white border border-[#f0f0f0] hover:shadow-lg hover:-translate-y-1 transition-all duration-400">
                  <Image src={b.logo} alt={b.name} width={130} height={55} className="h-[50px] max-md:h-[40px] w-auto opacity-80 group-hover:opacity-100 transition-opacity" />
                  <span className="text-[13px] text-gray-400 font-semibold tracking-wide">{b.name}</span>
                </Link>
              ))}
            </div>
          </FadeUp>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 max-md:py-[60px] overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/images/main/cta1.jpg" alt="" fill className="object-cover" />
        </div>
        <div className="cta-overlay absolute inset-0" />

        <div className="max-w-[1200px] mx-auto px-6 relative z-10">
          <div className="flex max-lg:flex-col items-center gap-[60px]">
            <FadeUp className="flex-1 text-white">
              <h2 className="text-[32px] max-md:text-[26px] font-extrabold mb-2 leading-tight">지금 바로 상담하세요</h2>
              <p className="text-white/80 mb-8 text-base">정확한 청력 진단과 맞춤 솔루션을 제공해 드립니다.</p>

              <ul className="space-y-4 mb-8">
                {["정확한 청력검사", "보청기 비교 체험 예약", "정부지원 가능 여부 확인"].map((t) => (
                  <li key={t} className="flex items-center gap-3 text-lg">
                    <svg width="24" height="24" fill="none" stroke="#FFD700" strokeWidth="2.5" viewBox="0 0 24 24" className="flex-shrink-0"><polyline points="20 6 9 17 4 12"/></svg>
                    {t}
                  </li>
                ))}
              </ul>

              <div className="flex gap-4 max-md:flex-col">
                <a href="tel:1800-9665" className="inline-flex items-center gap-2 px-7 py-3.5 bg-[var(--color-gold)] text-white rounded-full font-semibold hover:-translate-y-0.5 hover:shadow-[0_6px_20px_rgba(212,168,83,.4)] transition-all duration-300 shadow-[0_4px_15px_rgba(212,168,83,.3)] text-[15px]">
                  <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                  전화 상담
                </a>
                <Link href="/center#location" className="inline-flex items-center gap-2 px-7 py-3.5 border-2 border-white/50 text-white rounded-full font-semibold hover:bg-white/10 hover:border-white transition-all duration-300 text-[15px]">
                  오시는 길 안내
                </Link>
              </div>
            </FadeUp>

            <FadeUp className="flex-1 w-full">
              <div className="rounded-xl overflow-hidden shadow-[0_10px_40px_rgba(0,0,0,.12)]">
                <iframe src="https://map.naver.com/p/search/%EB%8C%80%EA%B5%AC%20%EC%A4%91%EA%B5%AC%20%EB%8B%AC%EA%B5%AC%EB%B2%8C%EB%8C%80%EB%A1%9C%202109-18" className="w-full h-[350px] border-0" allowFullScreen loading="lazy"></iframe>
              </div>
              <p className="mt-4 text-white/90 text-sm">대구 중구 달구벌대로 2109-18 흥국생명빌딩 1층 | 반월당역 12번 출구 도보 1분</p>
            </FadeUp>
          </div>
        </div>
      </section>
    </>
  );
}
