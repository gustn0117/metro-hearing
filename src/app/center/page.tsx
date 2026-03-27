"use client";

import Image from "next/image";
import FadeUp from "@/components/FadeUp";
import PageHero from "@/components/PageHero";

const features = [
  {
    icon: (
      <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    label: "청능사·청각사 상주",
  },
  {
    icon: (
      <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path d="M12 1v22M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
      </svg>
    ),
    label: "투명한 가격 정책",
  },
  {
    icon: (
      <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <polyline points="20 6 9 17 4 12" />
      </svg>
    ),
    label: "최대 할인 혜택 제공",
  },
  {
    icon: (
      <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
    label: "1개월 무료 체험 서비스",
  },
  {
    icon: (
      <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path d="M9 3H5a2 2 0 0 0-2 2v4m6-6h10a2 2 0 0 1 2 2v4M9 3v18m0 0h10a2 2 0 0 0 2-2V9M9 21H5a2 2 0 0 1-2-2V9m0 0h18" />
      </svg>
    ),
    label: "정부지원제도 안내 및 동행",
  },
];

const infoItems = [
  {
    icon: (
      <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0 1 18 0z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
    label: "주소",
    value: "대구 중구 달구벌대로 2109-18 흥국생명빌딩 1층",
  },
  {
    icon: (
      <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
      </svg>
    ),
    label: "전화",
    value: "1800-9665",
  },
  {
    icon: (
      <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
    label: "운영시간",
    value: "평일 09:00~18:00 / 토 09:00~15:00\n점심시간 12:00~13:00\n공휴일·일요일 예약시 상담가능",
  },
  {
    icon: (
      <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <rect x="1" y="3" width="15" height="13" rx="1" />
        <path d="M16 8h4l3 3v5h-7V8z" />
        <circle cx="5.5" cy="18.5" r="2.5" />
        <circle cx="18.5" cy="18.5" r="2.5" />
      </svg>
    ),
    label: "주차",
    value: "건물 내 주차장 이용 가능",
  },
  {
    icon: (
      <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    ),
    label: "대중교통",
    value: "대구 지하철 1·2호선 반월당역 12번 출구앞 골목안 70미터 (도보 1분이내)",
  },
];

export default function CenterPage() {
  return (
    <>
      <PageHero
        title="센터 소개"
        breadcrumb="홈 > 센터 소개"
        image="/images/center/intro1.jpg"
      />

      {/* Sub Navigation */}
      <nav className="sticky z-50 bg-white border-b border-gray-200 shadow-sm" style={{ top: "var(--header-h)" }}>
        <div className="max-w-[1200px] mx-auto px-6">
          <ul className="flex items-center gap-0">
            {[
              { href: "#intro", label: "센터 소개" },
              { href: "#greeting", label: "인사말" },
              { href: "#location", label: "오시는 길" },
            ].map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="sub-nav-item inline-block px-6 py-4 text-[15px] font-semibold text-gray-500 hover:text-[var(--color-primary)]"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Section: 소개 */}
      <section id="intro" className="py-24 max-md:py-16">
        <div className="max-w-[1200px] mx-auto px-6">
          <FadeUp>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
              {/* Left: Images */}
              <div className="grid grid-cols-2 gap-4">
                <div className="col-span-2 rounded-2xl overflow-hidden aspect-[4/3] relative shadow-md">
                  <Image
                    src="/images/center/intro1.jpg"
                    alt="메트로 보청기 센터"
                    fill
                    className="object-cover"
                    style={{ objectPosition: "70% center" }}
                  />
                </div>
                <div className="rounded-2xl overflow-hidden aspect-square relative shadow-md">
                  <Image
                    src="/images/center/intro2.jpg"
                    alt="메트로 보청기 상담"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="rounded-2xl overflow-hidden aspect-square relative shadow-md">
                  <Image
                    src="/images/center/intro3.jpg"
                    alt="메트로 보청기 청력검사"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              {/* Right: Content */}
              <div>
                <span className="inline-block text-sm font-semibold text-[var(--color-primary)] bg-[var(--color-primary-light)] px-4 py-1.5 rounded-full mb-4 tracking-wide">
                  About Us
                </span>
                <h2 className="text-[32px] max-md:text-2xl font-extrabold leading-tight mb-5">
                  메트로 보청기 소개
                </h2>
                <p className="text-[16px] text-gray-600 leading-relaxed mb-8">
                  메트로 보청기는 대구 지하철 1·2호선 <strong className="text-gray-800">반월당역 12번 출구</strong> 앞에 위치한 청각 전문 센터입니다.
                  청능사와 청각사가 상주하여 정밀 청력 검사부터 보청기 선택, 사후관리까지 전 과정을 책임지고 안내해 드립니다.
                  <br /><br />
                  세계 5대 보청기 브랜드를 한 자리에서 비교 체험할 수 있으며, 투명한 가격 정책과 정부지원제도 안내를 통해 고객이 최적의 선택을 할 수 있도록 돕겠습니다.
                </p>
                <ul className="space-y-3">
                  {features.map((f, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <span className="w-9 h-9 flex-shrink-0 rounded-full bg-[var(--color-primary-light)] text-[var(--color-primary)] flex items-center justify-center">
                        {f.icon}
                      </span>
                      <span className="text-[15px] font-medium text-gray-700">{f.label}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* Section: 인사말 */}
      <section id="greeting" className="py-24 max-md:py-16 bg-gray-50">
        <div className="max-w-[800px] mx-auto px-6 text-center">
          <FadeUp>
            <span className="inline-block text-sm font-semibold text-[var(--color-primary)] bg-[var(--color-primary-light)] px-4 py-1.5 rounded-full mb-4 tracking-wide">
              Greeting
            </span>
            <h2 className="text-[32px] max-md:text-2xl font-extrabold mb-8">인사말</h2>
            <div className="relative">
              <svg className="absolute -top-4 -left-2 opacity-10" width="60" height="60" fill="var(--color-primary)" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
              <div className="bg-white rounded-2xl shadow-md p-10 max-md:p-7 text-left leading-relaxed text-gray-600 text-[16px] space-y-5">
                <p>
                  안녕하십니까. 메트로 보청기입니다.
                </p>
                <p>
                  청력은 한 번 잃으면 되돌리기 어려운 소중한 감각입니다. 소리를 제대로 듣지 못하는 불편함은 단순한 의사소통의 문제를 넘어, 가족과의 관계, 사회생활, 그리고 삶의 질 전반에 큰 영향을 미칩니다.
                </p>
                <p>
                  저희 메트로 보청기는 청능사·청각사가 직접 상담에 참여하여 정확한 청력 검사를 바탕으로 고객 한 분 한 분에게 꼭 맞는 보청기를 추천해 드립니다. 다양한 글로벌 브랜드를 직접 비교 체험하시고, 투명한 가격으로 최선의 선택을 하실 수 있도록 돕겠습니다.
                </p>
                <p>
                  1개월 무료 체험 서비스와 정부지원제도 안내·동행 서비스를 통해 부담 없이 시작하실 수 있습니다. 언제든지 편하게 방문하시거나 전화 주시면 성심성의껏 상담해 드리겠습니다.
                </p>
                <p>
                  감사합니다.
                </p>
              </div>
              <div className="mt-6 flex flex-col items-center gap-1">
                <span className="text-sm text-gray-400">메트로 보청기 대표</span>
              </div>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* Section: 오시는 길 */}
      <section id="location" className="py-24 max-md:py-16">
        <div className="max-w-[1200px] mx-auto px-6">
          <FadeUp>
            <div className="text-center mb-12">
              <span className="inline-block text-sm font-semibold text-[var(--color-primary)] bg-[var(--color-primary-light)] px-4 py-1.5 rounded-full mb-4 tracking-wide">
                Location
              </span>
              <h2 className="text-[32px] max-md:text-2xl font-extrabold">오시는 길</h2>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
              {/* Map */}
              <div className="rounded-2xl overflow-hidden shadow-lg">
                <iframe
                  src="https://map.naver.com/p/entry/place/1213927754?c=15.00,0,0,0,dh&isCorrectAnswer=true"
                  className="w-full h-[420px] border-0"
                  allowFullScreen
                  loading="lazy"
                  title="메트로 보청기 위치"
                />
              </div>

              {/* Info */}
              <div className="space-y-5">
                {infoItems.map((item, i) => (
                  <div key={i} className="flex items-start gap-4 bg-gray-50 rounded-xl p-5">
                    <span className="w-10 h-10 flex-shrink-0 rounded-full bg-[var(--color-primary-light)] text-[var(--color-primary)] flex items-center justify-center mt-0.5">
                      {item.icon}
                    </span>
                    <div>
                      <p className="text-xs font-semibold text-[var(--color-primary)] mb-1 uppercase tracking-wide">
                        {item.label}
                      </p>
                      <p className="text-[15px] text-gray-700 leading-relaxed whitespace-pre-line">
                        {item.value}
                      </p>
                    </div>
                  </div>
                ))}
                <a
                  href="tel:1800-9665"
                  className="flex items-center justify-center gap-2.5 w-full py-4 bg-[var(--color-primary)] text-white text-base font-bold rounded-xl hover:opacity-90 transition-opacity mt-2"
                >
                  <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                  전화 상담 1800-9665
                </a>
              </div>
            </div>
          </FadeUp>
        </div>
      </section>
    </>
  );
}
