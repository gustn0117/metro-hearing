import Image from "next/image";
import Link from "next/link";
import FadeUp from "@/components/FadeUp";
import ServicesSlider from "@/components/ServicesSlider";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-screen min-h-[600px] max-h-[1000px] flex items-center overflow-hidden mt-[var(--header-h)]">
        <div className="absolute inset-0">
          <Image src="/images/main/hero1.png" alt="메트로 보청기" fill className="object-cover scale-105" priority />
        </div>
        {/* Multi-layer overlay for depth */}
        <div className="hero-gradient absolute inset-0" />
        <div className="hero-grain absolute inset-0" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/10" />

        {/* Decorative floating shapes */}
        <div className="absolute top-[15%] right-[10%] w-64 h-64 rounded-full bg-[var(--color-gold)]/[.06] blur-3xl hero-shape-1" />
        <div className="absolute bottom-[20%] left-[5%] w-80 h-80 rounded-full bg-[var(--color-accent)]/[.05] blur-3xl hero-shape-2" />

        {/* Diagonal decorative line */}
        <div className="absolute top-0 right-0 w-[1px] h-[60%] bg-gradient-to-b from-transparent via-white/10 to-transparent" style={{ transform: "rotate(20deg)", transformOrigin: "top right" }} />

        <FadeUp className="relative z-10 text-white max-w-[780px] pl-20 max-lg:pl-8 max-md:pl-6">
          <span className="inline-flex items-center gap-2.5 text-sm font-semibold tracking-[.12em] uppercase text-white/70 mb-6">
            <span className="w-8 h-[1.5px] bg-[var(--color-gold)]" />
            Hearing Care Specialist
          </span>
          <h1 className="text-[3.75rem] max-lg:text-[42px] max-md:text-[28px] font-extrabold leading-[1.12] mb-6" style={{ textShadow: "0 4px 30px rgba(0,0,0,.35)" }}>
            <span className="text-shimmer">정확한 진단</span>이<br />올바른 선택을 만듭니다
          </h1>
          <p className="text-xl max-md:text-base text-white/75 mb-12 leading-relaxed max-w-[520px]" style={{ textShadow: "0 2px 8px rgba(0,0,0,.2)" }}>
            청능사·청각사가 직접 상담하는<br />청각 전문 솔루션 센터
          </p>
          <div className="flex items-center gap-4 max-md:flex-col max-md:items-start">
            <a href="tel:1800-9665" className="group inline-flex items-center gap-3 px-10 py-[18px] bg-[var(--color-gold)] text-white text-base font-bold rounded-full hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(212,168,83,.45)] transition-all duration-300 shadow-lg">
              <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" className="group-hover:animate-pulse"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
              무료 상담 예약 1800-9665
            </a>
            <Link href="/center#location" className="group inline-flex items-center gap-2.5 px-8 py-[17px] border border-white/25 text-white rounded-full font-semibold hover:bg-white/10 hover:border-white/50 backdrop-blur-sm transition-all duration-300">
              오시는 길
              <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24" className="group-hover:translate-x-1 transition-transform"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </Link>
          </div>
        </FadeUp>

        {/* Scroll-down indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-3">
          <span className="text-white/40 text-[11px] tracking-[.3em] uppercase font-medium">Scroll</span>
          <div className="w-[1px] h-8 bg-gradient-to-b from-white/50 to-transparent animate-bounce" />
        </div>
      </section>

      {/* Stats Counter Section */}
      <section className="relative z-20 -mt-20 max-md:-mt-14 pb-10">
        <div className="max-w-[1100px] mx-auto px-6">
          <div className="grid grid-cols-4 max-md:grid-cols-2 gap-5 max-md:gap-3">
            {[
              { label: "보청기 전문가 상담", value: "청각사, 청능사", icon: <svg width="26" height="26" fill="none" stroke="var(--color-primary)" strokeWidth="1.8" viewBox="0 0 24 24"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/></svg> },
              { label: "고객 만족도", value: "98%", icon: <svg width="26" height="26" fill="none" stroke="var(--color-primary)" strokeWidth="1.8" viewBox="0 0 24 24"><path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3H14zM4 22H2V11h2"/></svg> },
              { label: "세계 5대 브랜드", value: "멀티 브랜드", icon: <svg width="26" height="26" fill="none" stroke="var(--color-primary)" strokeWidth="1.8" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg> },
              { label: "보청기 지원금", value: "111만원", icon: <svg width="26" height="26" fill="none" stroke="var(--color-primary)" strokeWidth="1.8" viewBox="0 0 24 24"><path d="M12 1v22M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg> },
            ].map((stat, i) => (
              <FadeUp key={i} delay={i * 100}>
                <div className="glass-card rounded-2xl p-7 max-md:p-5 text-center shadow-lg hover:shadow-xl hover:-translate-y-1.5 transition-all duration-400 bg-white/90 group icon-hover-bounce">
                  <div className="w-14 h-14 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-[var(--color-primary-light)] to-white flex items-center justify-center border border-[var(--color-primary)]/[.08] group-hover:border-[var(--color-primary)]/20 transition-colors">
                    {stat.icon}
                  </div>
                  <p className="text-2xl max-md:text-xl font-extrabold gradient-text mb-1.5 tracking-tight">{stat.value}</p>
                  <p className="text-[13px] text-gray-400 font-medium tracking-wide">{stat.label}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* 4대 핵심 서비스 */}
      <section className="py-28 max-md:py-18">
        <div className="max-w-[1200px] mx-auto px-6">
          <FadeUp>
            <div className="flex items-end justify-between max-md:flex-col max-md:items-start max-md:gap-4 mb-14">
              <div>
                <span className="section-label">Core Services</span>
                <h2 className="text-[2.5rem] max-md:text-[26px] font-extrabold leading-tight mb-3">
                  4대 <span className="gradient-text">핵심 서비스</span>
                </h2>
                <div className="section-divider" />
              </div>
              <p className="text-[16px] text-gray-400 max-w-[400px] leading-relaxed max-md:text-[15px]">상담부터 사후관리까지<br/>체계적인 서비스를 제공합니다.</p>
            </div>
          </FadeUp>
          <ServicesSlider />
        </div>
      </section>

      {/* 강점 3가지 */}
      <section className="py-28 max-md:py-18 relative overflow-hidden">
        {/* Subtle background pattern */}
        <div className="absolute inset-0 bg-gradient-to-b from-gray-50/80 via-white to-gray-50/50" />
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[var(--color-primary)]/[.02] rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-[var(--color-gold)]/[.03] rounded-full blur-3xl translate-x-1/3 translate-y-1/3" />

        <div className="max-w-[1200px] mx-auto px-6 text-center relative z-10">
          <FadeUp>
            <span className="section-label">Why Metro</span>
            <h2 className="text-[2.5rem] max-md:text-[26px] font-extrabold mb-3">
              잘 들리는 <span className="gradient-text">메트로 보청기</span>
            </h2>
            <div className="section-divider mx-auto mb-5" />
            <p className="text-[16px] text-gray-400 max-w-[600px] mx-auto mb-16">메트로 보청기만의 차별화된 서비스로 고객 만족을 실현합니다.</p>
          </FadeUp>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-7 stagger-children">
            {[
              {
                icon: <svg width="30" height="30" fill="none" stroke="white" strokeWidth="1.8" viewBox="0 0 24 24"><path d="M12 1v22M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>,
                title: "최대 50~75% 특별 프로모션 혜택",
                text: "센터 자체 프로모션으로 일부 제품 최대 50~75% 할인 적용",
                color: "from-[var(--color-primary)] to-[var(--color-accent)]",
                accent: "var(--color-primary)",
              },
              {
                icon: <svg width="30" height="30" fill="none" stroke="white" strokeWidth="1.8" viewBox="0 0 24 24"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/></svg>,
                title: "청능사·청각사 상시 상주",
                text: "자격을 갖춘 전문 인력이 상담부터 사후관리까지 직접 담당",
                color: "from-[var(--color-accent)] to-[#4fc3f7]",
                accent: "var(--color-accent)",
              },
              {
                icon: <svg width="30" height="30" fill="none" stroke="white" strokeWidth="1.8" viewBox="0 0 24 24"><path d="M9 3H5a2 2 0 0 0-2 2v4m6-6h10a2 2 0 0 1 2 2v4M9 3v18m0 0h10a2 2 0 0 0 2-2V9M9 21H5a2 2 0 0 1-2-2V9m0 0h18"/></svg>,
                title: "정밀 검사 전문 장비",
                text: "고급 청력 검사 장비를 통한 체계적인 진단 시스템 운영",
                color: "from-[var(--color-gold)] to-[#f0c27f]",
                accent: "var(--color-gold)",
              },
            ].map((s, i) => (
              <FadeUp key={i}>
                <div className="premium-card rounded-2xl p-10 max-md:p-8 text-center group">
                  {/* Hover glow */}
                  <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-40 h-40 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-3xl" style={{ background: s.accent, opacity: 0 }} />

                  <div className={`relative w-16 h-16 mx-auto mb-7 rounded-2xl bg-gradient-to-br ${s.color} flex items-center justify-center shadow-lg group-hover:shadow-xl group-hover:scale-105 transition-all duration-300`}>
                    {s.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-gray-900">{s.title}</h3>
                  <p className="text-[15px] text-gray-400 leading-relaxed">{s.text}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* 멀티 브랜드 강조 */}
      <section className="py-32 max-md:py-22 bg-[var(--color-bg-dark)] relative overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0">
          <Image src="/images/main/multi1.jpg" alt="" fill className="object-cover opacity-[.07]" />
        </div>
        {/* Radial gradient overlay */}
        <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at 50% 30%, rgba(11,83,148,.15), transparent 70%)" }} />
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 opacity-[0.025]" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)", backgroundSize: "60px 60px" }} />

        <div className="max-w-[1200px] mx-auto px-6 relative z-10 text-center">
          <FadeUp>
            <span className="inline-flex items-center gap-2.5 text-sm font-semibold text-white/80 bg-white/[.06] backdrop-blur-sm px-6 py-2.5 rounded-full mb-6 border border-white/[.08]">
              <svg width="14" height="14" fill="none" stroke="var(--color-gold)" strokeWidth="2.5" viewBox="0 0 24 24"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
              Global Brands
            </span>
            <h2 className="text-[2.5rem] max-md:text-[26px] font-extrabold text-white mb-5">
              글로벌 보청기 <span className="text-[var(--color-gold)]">비교 전문센터</span>
            </h2>
            <p className="text-[16px] text-white/50 max-w-[680px] mx-auto mb-16 leading-relaxed">
              보청기 브랜드마다 제공하는 기능과 음질이 다르기에<br className="max-md:hidden"/> 자신에게 적합한 제품을 찾는 과정이 중요합니다.<br />세계 주요 브랜드를 한 자리에서 비교 체험하세요.
            </p>
          </FadeUp>
          <div className="flex justify-center items-center gap-5 max-lg:gap-3 flex-wrap stagger-children">
            {[
              { name: "시그니아", logo: "/images/brands/signia.png", id: "signia" },
              { name: "오티콘", logo: "/images/brands/oticon.png", id: "oticon" },
              { name: "포낙", logo: "/images/brands/phonak.png", id: "phonak" },
              { name: "벨톤", logo: "/images/brands/beltone.png", id: "beltone" },
              { name: "와이덱스", logo: "/images/brands/widex.png", id: "widex" },
            ].map((b) => (
              <FadeUp key={b.id}>
                <Link href={`/brands#${b.id}`} className="brand-glow group flex flex-col items-center gap-4 px-10 py-7 max-md:px-6 max-md:py-5 rounded-2xl bg-white/[.04] backdrop-blur-md border border-white/[.06] hover:bg-white/[.1] hover:border-white/[.15] hover:-translate-y-2 transition-all duration-400">
                  <Image src={b.logo} alt={b.name} width={120} height={50} className="h-[48px] w-auto opacity-70 group-hover:opacity-100 transition-all duration-300" />
                  <span className="text-[13px] text-white/30 group-hover:text-white/70 transition-colors font-medium tracking-wide">{b.name}</span>
                </Link>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-28 max-md:py-18 overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/images/main/cta1.jpg" alt="" fill className="object-cover" />
        </div>
        <div className="cta-overlay absolute inset-0" />
        {/* Decorative light streak */}
        <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, transparent 30%, rgba(212,168,83,.05) 50%, transparent 70%)" }} />

        <div className="max-w-[1200px] mx-auto px-6 relative z-10">
          <div className="flex max-lg:flex-col items-center gap-16">
            <FadeUp className="flex-1 text-white">
              {/* Floating badge */}
              <div className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-[var(--color-gold)]/15 border border-[var(--color-gold)]/25 text-[var(--color-gold)] text-sm font-semibold mb-7 float-anim">
                <span className="relative w-2.5 h-2.5 rounded-full bg-[var(--color-gold)]">
                  <span className="absolute inset-0 rounded-full bg-[var(--color-gold)] animate-ping" />
                </span>
                무료 상담 가능
              </div>

              <h2 className="text-[40px] max-md:text-[26px] font-extrabold mb-4 leading-[1.15]" style={{ textShadow: "0 2px 16px rgba(0,0,0,.25)" }}>
                지금 바로<br />상담하세요
              </h2>
              <div className="w-16 h-1 rounded-full mb-7" style={{ background: "linear-gradient(90deg, var(--color-gold), rgba(212,168,83,.2))" }} />
              <p className="text-white/60 mb-10 text-lg leading-relaxed">정확한 청력 진단과 맞춤 솔루션을<br className="max-md:hidden"/> 제공해 드립니다.</p>

              <ul className="space-y-5 mb-12">
                {["정확한 청력검사", "보청기 비교 체험 예약", "정부지원 가능 여부 확인"].map((t) => (
                  <li key={t} className="flex items-center gap-4 text-[17px]">
                    <span className="flex-shrink-0 w-7 h-7 rounded-full bg-[var(--color-gold)]/15 border border-[var(--color-gold)]/20 flex items-center justify-center">
                      <svg width="14" height="14" fill="none" stroke="var(--color-gold)" strokeWidth="3" viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"/></svg>
                    </span>
                    <span className="text-white/85">{t}</span>
                  </li>
                ))}
              </ul>

              <div className="flex gap-4 max-md:flex-col">
                <a href="tel:1800-9665" className="group inline-flex items-center gap-3 px-9 py-[17px] bg-[var(--color-gold)] text-white rounded-full font-bold hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(212,168,83,.4)] transition-all duration-300 shadow-lg text-base">
                  <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" className="group-hover:animate-pulse"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                  전화 상담
                </a>
                <Link href="/center#location" className="group inline-flex items-center gap-2.5 px-9 py-[16px] border border-white/25 text-white rounded-full font-semibold hover:bg-white/10 hover:border-white/50 transition-all duration-300">
                  오시는 길 안내
                  <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24" className="group-hover:translate-x-1 transition-transform"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                </Link>
              </div>
            </FadeUp>

            <FadeUp className="flex-1 w-full">
              <div className="rounded-2xl overflow-hidden shadow-2xl border border-white/[.08] ring-1 ring-white/5">
                <iframe src="https://www.google.com/maps?q=대구+중구+달구벌대로+2109-18+흥국생명빌딩&output=embed" className="w-full h-[400px] border-0" allowFullScreen loading="lazy"></iframe>
              </div>
              <div className="flex items-start gap-3 mt-6 text-white/60 text-sm">
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
