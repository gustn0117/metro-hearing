import Image from "next/image";
import Link from "next/link";
import FadeUp from "@/components/FadeUp";
import PageHero from "@/components/PageHero";

const inEarTypes = [
  {
    id: "iic",
    name: "IIC (초소형 고막형)",
    image: "/images/hearing/iic.jpg",
    features: [
      "가장 작은 보청기로 완전히 귀 안에 위치",
      "경도~중도 난청에 적합",
      "눈에 거의 띄지 않는 초소형 디자인",
      "고막 가까이 위치해 자연스러운 음질",
    ],
  },
  {
    id: "cic",
    name: "CIC (고막형)",
    image: "/images/hearing/cic.jpg",
    features: [
      "외이도 내부에 완전히 삽입되는 형태",
      "중도~고도 난청에 적합",
      "착용 시 거의 보이지 않음",
      "전화 통화 시 편리",
    ],
  },
  {
    id: "itc",
    name: "ITC (외이도형)",
    image: "/images/hearing/itc.jpg",
    features: [
      "다양한 기능 옵션 탑재 가능",
      "중고도~고도 난청에 적합",
      "볼륨 조절 버튼 내장",
      "착용 및 조작이 비교적 간편",
    ],
  },
];

const behindEarTypes = [
  {
    id: "ric",
    name: "RIC (오픈형)",
    image: "/images/hearing/ric.jpg",
    features: [
      "귀 뒤에 착용, 스피커는 귀 안에 위치",
      "고도 난청까지 폭넓게 적합",
      "다양한 색상으로 개성 표현 가능",
      "블루투스 연결 지원",
    ],
  },
  {
    id: "bte",
    name: "BTE (귀걸이형)",
    image: "/images/hearing/bte.jpg",
    features: [
      "귓바퀴 뒤에 착용하는 전통적 형태",
      "고심도 난청에도 적합한 강력한 출력",
      "배터리 교체 등 관리가 편리",
      "투명 튜브로 자연스러운 착용감",
    ],
  },
];

const necessityCards = [
  {
    title: "난청의 호전",
    desc: "조기에 보청기를 착용하면 청각 신경 자극을 유지해 청력 회복에 도움이 됩니다.",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-8 h-8" aria-hidden="true">
        <path d="M20 6C13.37 6 8 11.37 8 18c0 4.18 2.14 7.86 5.38 10.02V32h13.24v-3.98C29.86 25.86 32 22.18 32 18c0-6.63-5.37-12-12-12z" fill="currentColor" opacity=".2"/>
        <path d="M20 8c-5.52 0-10 4.48-10 10 0 3.69 2 6.9 5 8.66V30h10v-3.34C28 25.9 30 22.69 30 19c0-5.52-4.48-11-10-11zm0 2a8 8 0 0 1 8 9c0 3.07-1.72 5.75-4.24 7.13L23 27h-6v-1.87C14.72 23.75 12 21.07 12 18a8 8 0 0 1 8-8z" fill="currentColor"/>
        <path d="M17 34h6v2h-6z" fill="currentColor"/>
      </svg>
    ),
  },
  {
    title: "난청의 악화 예방",
    desc: "방치된 난청은 청각 세포 손상을 가속화합니다. 보청기 착용으로 악화를 방지합니다.",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-8 h-8" aria-hidden="true">
        <circle cx="20" cy="20" r="12" fill="currentColor" opacity=".2"/>
        <path d="M20 10a10 10 0 1 0 0 20A10 10 0 0 0 20 10zm0 2a8 8 0 1 1 0 16A8 8 0 0 1 20 12zm-1 4v6l5 3 1-1.73-4-2.27V16h-2z" fill="currentColor"/>
      </svg>
    ),
  },
  {
    title: "이명의 호전",
    desc: "보청기를 통한 외부 소리 증폭은 이명 증상 완화에 효과적인 방법입니다.",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-8 h-8" aria-hidden="true">
        <path d="M20 8v4M12.93 12.93l2.83 2.83M9 20h4M12.93 27.07l2.83-2.83M20 28v4M27.07 27.07l-2.83-2.83M31 20h-4M27.07 12.93l-2.83 2.83" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        <circle cx="20" cy="20" r="5" fill="currentColor" opacity=".3"/>
        <circle cx="20" cy="20" r="3" fill="currentColor"/>
      </svg>
    ),
  },
  {
    title: "치매 예방",
    desc: "난청은 치매 위험인자 중 하나입니다. 적절한 보청기 사용이 인지 기능 유지에 기여합니다.",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-8 h-8" aria-hidden="true">
        <path d="M20 8c-6.63 0-12 5.37-12 12 0 3.1 1.18 5.93 3.12 8.06L20 34l8.88-5.94C30.82 25.93 32 23.1 32 20c0-6.63-5.37-12-12-12z" fill="currentColor" opacity=".2"/>
        <path d="M16 20a4 4 0 0 1 4-4 4 4 0 0 1 4 4 4 4 0 0 1-4 4 4 4 0 0 1-4-4zm-2 0a6 6 0 0 0 6 6 6 6 0 0 0 6-6 6 6 0 0 0-6-6 6 6 0 0 0-6 6z" fill="currentColor"/>
      </svg>
    ),
  },
];

export default function HearingPage() {
  return (
    <>
      <PageHero
        title="청각 관련 정보"
        breadcrumb="홈 > 청각 관련 정보"
        image="/images/hearing/necessity1.jpg"
      />

      {/* Sub Navigation */}
      <nav
        className="sticky bg-white border-b border-gray-200 z-40 shadow-sm"
        style={{ top: "var(--header-h)" }}
      >
        <div className="max-w-[1200px] mx-auto px-6 flex gap-0">
          <a
            href="#necessity"
            className="sub-nav-item px-6 py-4 text-[15px] font-semibold text-gray-600 whitespace-nowrap"
          >
            보청기의 필요성
          </a>
          <a
            href="#types"
            className="sub-nav-item px-6 py-4 text-[15px] font-semibold text-gray-600 whitespace-nowrap"
          >
            보청기의 종류
          </a>
        </div>
      </nav>

      {/* Section 1: 보청기의 필요성 */}
      <section id="necessity" className="py-28 max-md:py-16 bg-white">
        <div className="max-w-[1200px] mx-auto px-6">
          <FadeUp>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
              {/* Left: Image */}
              <div className="relative h-[380px] overflow-hidden shadow-[0_2px_16px_rgba(0,0,0,0.1)]">
                <Image
                  src="/images/hearing/necessity1.jpg"
                  alt="보청기의 필요성"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Right: Text */}
              <div>
                <span className="inline-block text-xs font-bold tracking-widest text-[var(--color-primary)] uppercase mb-3">
                  Why You Need It
                </span>
                <h2 className="text-[36px] max-md:text-2xl font-extrabold text-gray-900 mb-8 leading-tight">
                  청력 저하는 자연적으로
                  <br />
                  회복되기 어렵습니다.
                </h2>
                <div className="space-y-5 text-gray-600 leading-relaxed">
                  <p>
                    난청은 대부분 감각신경성으로, 한번 손상된 청각 세포는 자연 회복이 불가능합니다.
                    많은 분들이 &lsquo;시간이 지나면 좋아지겠지&rsquo;라고 생각하지만, 방치할수록
                    상태는 더욱 악화됩니다.
                  </p>
                  <p>
                    난청을 방치하면 의사소통 장애, 사회적 고립, 우울증, 인지 기능 저하로 이어질 수
                    있습니다. 특히 노인성 난청의 경우 치매 위험도를 크게 높이는 것으로 알려져
                    있습니다.
                  </p>
                  <p>
                    보청기는 단순히 소리를 키워주는 기기가 아닙니다. 청각 신경을 지속적으로
                    자극하여 청력 기능을 유지하고, 삶의 질을 높이는 의료기기입니다.
                  </p>
                </div>
              </div>
            </div>
          </FadeUp>

          {/* 4-col icon grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {necessityCards.map((card, i) => (
              <FadeUp key={card.title} className={`delay-[${i * 100}ms]`}>
                <div className="bg-white border border-gray-200 shadow-[0_2px_12px_rgba(0,0,0,0.06)] p-7 text-center h-full flex flex-col items-center gap-5 hover:shadow-[0_4px_20px_rgba(0,0,0,0.1)] transition-shadow">
                  <div className="w-16 h-16 bg-[var(--color-primary-light)] text-[var(--color-primary)] flex items-center justify-center flex-shrink-0">
                    {card.icon}
                  </div>
                  <h3 className="font-bold text-gray-900 text-[17px]">{card.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{card.desc}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* Section 2: 보청기의 종류 */}
      <section id="types" className="py-28 max-md:py-16 bg-gray-50">
        <div className="max-w-[1200px] mx-auto px-6">
          <FadeUp>
            <div className="text-center mb-16">
              <span className="inline-block text-xs font-bold tracking-widest text-[var(--color-primary)] uppercase mb-3">
                Types of Hearing Aids
              </span>
              <h2 className="text-[36px] max-md:text-2xl font-extrabold text-gray-900 mb-4">보청기의 종류</h2>
              <p className="text-gray-500 max-w-2xl mx-auto leading-relaxed">
                보청기 선택은 청력검사 후 전문가의 상담을 통해 결정하는 것이 가장 중요합니다.
              </p>
            </div>
          </FadeUp>

          {/* 귓속형 */}
          <FadeUp>
            <div className="flex items-center gap-4 mb-10">
              <div className="w-[3px] h-8 bg-[var(--color-primary)]" />
              <h3 className="text-[22px] font-extrabold text-gray-900">귓속형 보청기</h3>
            </div>
          </FadeUp>

          <div className="flex flex-col gap-6 mb-16">
            {inEarTypes.map((type) => (
              <FadeUp key={type.id}>
                <div className="bg-white border border-gray-200 shadow-[0_2px_8px_rgba(0,0,0,0.05)] hover:shadow-[0_4px_16px_rgba(0,0,0,0.08)] transition-shadow flex flex-col sm:flex-row gap-6 p-6 items-start sm:items-center">
                  <div className="relative w-[200px] h-[200px] flex-shrink-0 overflow-hidden bg-gray-100 mx-auto sm:mx-0">
                    <Image
                      src={type.image}
                      alt={type.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg font-extrabold text-[var(--color-primary)] mb-4">
                      {type.name}
                    </h4>
                    <ul className="space-y-2.5">
                      {type.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-2.5 text-[15px] text-gray-600">
                          <span className="mt-2 w-1.5 h-1.5 bg-[var(--color-primary)] flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>

          {/* 귀걸이형 */}
          <FadeUp>
            <div className="flex items-center gap-4 mb-10">
              <div className="w-[3px] h-8 bg-[var(--color-primary)]" />
              <h3 className="text-[22px] font-extrabold text-gray-900">귀걸이형 보청기</h3>
            </div>
          </FadeUp>

          <div className="flex flex-col gap-6">
            {behindEarTypes.map((type) => (
              <FadeUp key={type.id}>
                <div className="bg-white border border-gray-200 shadow-[0_2px_8px_rgba(0,0,0,0.05)] hover:shadow-[0_4px_16px_rgba(0,0,0,0.08)] transition-shadow flex flex-col sm:flex-row gap-6 p-6 items-start sm:items-center">
                  <div className="relative w-[200px] h-[200px] flex-shrink-0 overflow-hidden bg-gray-100 mx-auto sm:mx-0">
                    <Image
                      src={type.image}
                      alt={type.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg font-extrabold text-[var(--color-primary)] mb-4">
                      {type.name}
                    </h4>
                    <ul className="space-y-2.5">
                      {type.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-2.5 text-[15px] text-gray-600">
                          <span className="mt-2 w-1.5 h-1.5 bg-[var(--color-primary)] flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Bar */}
      <section className="bg-[var(--color-primary)] py-14">
        <div className="max-w-[1200px] mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="text-white text-center sm:text-left">
            <p className="text-sm font-semibold opacity-80 mb-1">전문가 무료 상담</p>
            <h3 className="text-2xl font-extrabold">나에게 맞는 보청기가 궁금하신가요?</h3>
          </div>
          <Link
            href="tel:18009665"
            className="inline-flex items-center gap-3 bg-white text-[var(--color-primary)] font-extrabold px-8 py-4 rounded-sm shadow-lg hover:bg-gray-50 transition-colors whitespace-nowrap text-lg"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5" aria-hidden="true">
              <path d="M6.62 10.79a15.05 15.05 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1C10.61 21 3 13.39 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.45.57 3.58a1 1 0 0 1-.25 1.01l-2.2 2.2z"/>
            </svg>
            1800-9665
          </Link>
        </div>
      </section>
    </>
  );
}
