import Image from "next/image";
import Link from "next/link";
import FadeUp from "@/components/FadeUp";
import ServicesSlider from "@/components/ServicesSlider";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-screen min-h-[600px] max-h-[960px] flex items-center overflow-hidden mt-[var(--header-h)]">
        <div className="absolute inset-0">
          <Image src="/images/main/hero1.png" alt="메트로 보청기" fill className="object-cover scale-105" priority />
        </div>
        {/* Animated gradient overlay */}
        <div className="hero-gradient absolute inset-0" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/30" />

        <FadeUp className="relative z-10 text-white max-w-[720px] pl-20 max-lg:pl-8 max-md:pl-6">
          <span className="inline-block text-sm font-semibold tracking-[.15em] uppercase text-white/80 mb-5 border-l-2 border-[var(--color-gold)] pl-3">Hearing Care Specialist</span>
          <h1 className="text-6xl max-lg:text-[40px] max-md:text-[30px] font-extrabold leading-[1.15] mb-5" style={{ textShadow: "0 4px 20px rgba(0,0,0,.3), 0 1px 4px rgba(0,0,0,.2)" }}>
            정확한 진단이<br />올바른 선택을 만듭니다
          </h1>
          <p className="text-xl max-md:text-base text-white/85 mb-10 leading-relaxed max-w-[500px]">
            청능사·청각사가 직접 상담하는<br />청각 전문 솔루션 센터
          </p>
          <div className="flex items-center gap-4 max-md:flex-col max-md:items-start">
            <a href="tel:1800-9665" className="inline-flex items-center gap-2.5 px-10 py-4.5 bg-[var(--color-gold)] text-white text-base font-bold rounded-full hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(212,168,83,.4)] transition-all duration-300 shadow-lg">
              <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
              무료 상담 예약 1800-9665
            </a>
            <Link href="/center#location" className="inline-flex items-center gap-2 px-7 py-4 border-2 border-white/40 text-white rounded-full font-semibold hover:bg-white/10 hover:border-white/70 transition-all duration-300">
              오시는 길
              <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </Link>
          </div>
        </FadeUp>

        {/* Scroll-down indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 animate-bounce">
          <span className="text-white/60 text-xs tracking-widest uppercase">Scroll</span>
          <svg width="20" height="20" fill="none" stroke="white" strokeWidth="2" viewBox="0 0 24 24" className="opacity-60"><path d="M12 5v14M5 12l7 7 7-7"/></svg>
        </div>
      </section>

      {/* Stats Counter Section */}
      <section className="relative z-20 -mt-16 max-md:-mt-12 pb-8">
        <div className="max-w-[1100px] mx-auto px-6">
          <div className="grid grid-cols-4 max-md:grid-cols-2 gap-4 max-md:gap-3">
            {[
              { label: "청각 전문 상담", value: "전문 청능사", icon: <svg width="28" height="28" fill="none" stroke="var(--color-primary)" strokeWidth="2" viewBox="0 0 24 24"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/></svg> },
              { label: "고객 만족도", value: "98%", icon: <svg width="28" height="28" fill="none" stroke="var(--color-primary)" strokeWidth="2" viewBox="0 0 24 24"><path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3H14zM4 22H2V11h2"/></svg> },
              { label: "세계 5대 브랜드", value: "멀티 브랜드", icon: <svg width="28" height="28" fill="none" stroke="var(--color-primary)" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg> },
              { label: "정부지원금", value: "131만원", icon: <svg width="28" height="28" fill="none" stroke="var(--color-primary)" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 1v22M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg> },
            ].map((stat, i) => (
              <FadeUp key={i}>
                <div className="glass-card rounded-2xl p-6 max-md:p-4 text-center shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 bg-white/90">
                  <div className="w-12 h-12 mx-auto mb-3 rounded-xl bg-[var(--color-primary-light)] flex items-center justify-center">
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
      <section className="py-24 max-md:py-16">
        <div className="max-w-[1200px] mx-auto px-6">
          <FadeUp>
            <span className="section-label">Core Services</span>
            <h2 className="text-4xl max-md:text-[26px] font-extrabold leading-tight mb-3">
              4대 <span className="gradient-text">핵심 서비스</span>
            </h2>
            <div className="section-divider mb-4" />
            <p className="text-[17px] text-gray-500 max-w-[650px] mb-14 leading-relaxed">메트로 보청기는 상담부터 사후관리까지 체계적인 서비스를 제공합니다.</p>
          </FadeUp>
          <ServicesSlider />
        </div>
      </section>

      {/* 강점 3가지 */}
      <section className="py-24 max-md:py-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-[1200px] mx-auto px-6 text-center">
          <FadeUp>
            <span className="section-label">Why Metro</span>
            <h2 className="text-4xl max-md:text-[26px] font-extrabold mb-3">
              잘 들리는 <span className="gradient-text">메트로보청기</span>
            </h2>
            <div className="section-divider mx-auto mb-4" />
            <p className="text-[17px] text-gray-500 max-w-[650px] mx-auto mb-14">메트로 보청기만의 차별화된 서비스로 고객 만족을 실현합니다.</p>
          </FadeUp>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 stagger-children">
            {[
              {
                icon: <svg width="32" height="32" fill="none" stroke="white" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 1v22M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>,
                title: "최대 65~75% 특별 프로모션 혜택",
                text: "센터 자체 프로모션으로 일부 제품 최대 65~75% 할인 적용",
                color: "from-[var(--color-primary)] to-[var(--color-accent)]",
                barColor: "bg-[var(--color-primary)]",
              },
              {
                icon: <svg width="32" height="32" fill="none" stroke="white" strokeWidth="2" viewBox="0 0 24 24"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/></svg>,
                title: "청능사·청각사 상시 상주",
                text: "자격을 갖춘 전문 인력이 상담부터 사후관리까지 직접 담당",
                color: "from-[var(--color-accent)] to-[#4fc3f7]",
                barColor: "bg-[var(--color-accent)]",
              },
              {
                icon: <svg width="32" height="32" fill="none" stroke="white" strokeWidth="2" viewBox="0 0 24 24"><path d="M9 3H5a2 2 0 0 0-2 2v4m6-6h10a2 2 0 0 1 2 2v4M9 3v18m0 0h10a2 2 0 0 0 2-2V9M9 21H5a2 2 0 0 1-2-2V9m0 0h18"/></svg>,
                title: "정밀 검사 전문 장비",
                text: "고급 청력 검사 장비를 통한 체계적인 진단 시스템 운영",
                color: "from-[var(--color-gold)] to-[#f0c27f]",
                barColor: "bg-[var(--color-gold)]",
              },
            ].map((s, i) => (
              <FadeUp key={i}>
                <div className="relative bg-white rounded-2xl shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-400 p-10 text-center group overflow-hidden">
                  {/* Top color bar */}
                  <div className={`absolute top-0 left-0 right-0 h-1 ${s.barColor} opacity-60 group-hover:opacity-100 transition-opacity`} />
                  <div className={`w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br ${s.color} flex items-center justify-center shadow-lg`}>
                    {s.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3">{s.title}</h3>
                  <p className="text-[15px] text-gray-500 leading-relaxed">{s.text}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* 멀티 브랜드 강조 */}
      <section className="py-28 max-md:py-20 bg-[var(--color-bg-dark)] relative overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0">
          <Image src="/images/main/multi1.jpg" alt="" fill className="object-cover opacity-10" />
        </div>
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)", backgroundSize: "60px 60px" }} />

        <div className="max-w-[1200px] mx-auto px-6 relative z-10 text-center">
          <FadeUp>
            <span className="inline-flex items-center gap-2 text-sm font-semibold text-white/90 bg-white/10 backdrop-blur-sm px-5 py-2 rounded-full mb-5 border border-white/10">
              <svg width="14" height="14" fill="none" stroke="var(--color-gold)" strokeWidth="2.5" viewBox="0 0 24 24"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
              Global Brands
            </span>
            <h2 className="text-4xl max-md:text-[26px] font-extrabold text-white mb-4">글로벌 보청기 <span className="text-[var(--color-gold)]">비교 전문센터</span></h2>
            <p className="text-[17px] text-white/70 max-w-[700px] mx-auto mb-14 leading-relaxed">
              보청기 브랜드마다 제공하는 기능과 음질이 다르기에 자신에게 적합한 제품을 찾는 과정이 중요합니다.<br />세계 주요 브랜드를 한 자리에서 비교 체험하고 전문 상담을 통해 최적의 선택을 하세요.
            </p>
          </FadeUp>
          <div className="flex justify-center items-center gap-6 max-lg:gap-4 flex-wrap stagger-children">
            {[
              { name: "시그니아", logo: "/images/brands/signia.png", id: "signia" },
              { name: "오티콘", logo: "/images/brands/oticon.png", id: "oticon" },
              { name: "포낙", logo: "/images/brands/phonak.png", id: "phonak" },
              { name: "벨톤", logo: "/images/brands/beltone.png", id: "beltone" },
              { name: "와이덱스", logo: "/images/brands/widex.png", id: "widex" },
            ].map((b) => (
              <FadeUp key={b.id}>
                <Link href={`/brands#${b.id}`} className="group flex flex-col items-center gap-3 px-8 py-6 max-md:px-5 max-md:py-4 rounded-2xl bg-white/[0.06] backdrop-blur-md border border-white/10 hover:bg-white/[0.12] hover:border-white/20 hover:-translate-y-1 transition-all duration-300">
                  <Image src={b.logo} alt={b.name} width={120} height={50} className="h-[45px] w-auto brightness-0 invert opacity-70 group-hover:opacity-100 transition-opacity" />
                  <span className="text-sm text-white/50 group-hover:text-white/80 transition-colors font-medium">{b.name}</span>
                </Link>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 max-md:py-16 overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/images/main/cta1.jpg" alt="" fill className="object-cover" />
        </div>
        <div className="cta-overlay absolute inset-0" />

        <div className="max-w-[1200px] mx-auto px-6 relative z-10">
          <div className="flex max-lg:flex-col items-center gap-16">
            <FadeUp className="flex-1 text-white">
              {/* Floating badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--color-gold)]/20 border border-[var(--color-gold)]/40 text-[var(--color-gold)] text-sm font-semibold mb-6 float-anim">
                <span className="relative w-2 h-2 rounded-full bg-[var(--color-gold)]">
                  <span className="absolute inset-0 rounded-full bg-[var(--color-gold)] animate-ping" />
                </span>
                무료 상담 가능
              </div>

              <h2 className="text-[36px] max-md:text-2xl font-extrabold mb-3 leading-tight" style={{ textShadow: "0 2px 12px rgba(0,0,0,.2)" }}>
                지금 바로<br />상담하세요
              </h2>
              <div className="section-divider mb-6" style={{ background: "linear-gradient(90deg, var(--color-gold), rgba(212,168,83,.3))" }} />
              <p className="text-white/75 mb-8 text-lg">정확한 청력 진단과 맞춤 솔루션을 제공해 드립니다.</p>

              <ul className="space-y-4 mb-10">
                {["정확한 청력검사", "보청기 비교 체험 예약", "정부지원 가능 여부 확인"].map((t) => (
                  <li key={t} className="flex items-center gap-3 text-lg">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[var(--color-gold)]/20 flex items-center justify-center">
                      <svg width="14" height="14" fill="none" stroke="#FFD700" strokeWidth="3" viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"/></svg>
                    </span>
                    {t}
                  </li>
                ))}
              </ul>

              <div className="flex gap-4 max-md:flex-col">
                <a href="tel:1800-9665" className="inline-flex items-center gap-2.5 px-8 py-4 bg-[var(--color-gold)] text-white rounded-full font-bold hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(212,168,83,.4)] transition-all duration-300 shadow-lg text-base">
                  <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                  전화 상담
                </a>
                <Link href="/center#location" className="inline-flex items-center gap-2 px-8 py-4 border-2 border-white/40 text-white rounded-full font-semibold hover:bg-white/10 hover:border-white/70 transition-all duration-300">
                  오시는 길 안내
                  <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                </Link>
              </div>
            </FadeUp>

            <FadeUp className="flex-1 w-full">
              <div className="rounded-2xl overflow-hidden shadow-2xl border border-white/10">
                <iframe src="https://www.google.com/maps?q=대구+중구+달구벌대로+2109-18&output=embed" className="w-full h-[380px] border-0" allowFullScreen loading="lazy"></iframe>
              </div>
              <div className="flex items-start gap-3 mt-5 text-white/80 text-sm">
                <svg width="18" height="18" fill="none" stroke="var(--color-gold)" strokeWidth="2" viewBox="0 0 24 24" className="flex-shrink-0 mt-0.5"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                <p>대구 중구 달구벌대로 2109-18 흥국생명빌딩 1층 | 반월당역 12번 출구 도보 1분</p>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>
    </>
  );
}
