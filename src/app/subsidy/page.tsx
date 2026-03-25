import Image from "next/image";
import FadeUp from "@/components/FadeUp";
import PageHero from "@/components/PageHero";

const registrationSteps = [
  {
    num: 1,
    title: "진단의뢰",
    place: "주민자치센터 / 사무소",
    desc: "가까운 주민자치센터 또는 행정복지센터를 방문하여 청각장애 진단 의뢰서를 신청합니다.",
    time: "약 1주 ~ 1개월",
    isLast: false,
  },
  {
    num: 2,
    title: "등급판정",
    place: "이비인후과 병원",
    desc: "이비인후과 전문의에게 청력 검사를 받고 장애 등급 판정을 위한 진단을 진행합니다.",
    time: "약 1개월",
    isLast: false,
  },
  {
    num: 3,
    title: "진단서 발급",
    place: "이비인후과 병원",
    desc: "청각장애 진단서 및 검사 결과지를 발급받아 등록 서류를 준비합니다.",
    time: "",
    isLast: false,
  },
  {
    num: 4,
    title: "등록 및 복지카드 발급",
    place: "주민자치센터",
    desc: "구비 서류를 지참하여 주민자치센터에서 청각장애 등록 신청 및 복지카드를 발급받습니다.",
    time: "약 1개월",
    isLast: false,
  },
  {
    num: 5,
    title: "완료",
    place: "",
    desc: "청각장애 등록이 완료되어 보청기 정부지원금 신청 자격이 부여됩니다.",
    time: "",
    isLast: true,
  },
];

const claimSteps = [
  {
    num: 1,
    title: "청력검사 및 처방전 발급",
    place: "이비인후과",
    desc: "이비인후과 전문의에게 청력검사를 받고 보청기 처방전을 발급받습니다.",
    time: "",
    isLast: false,
  },
  {
    num: 2,
    title: "보청기 구입",
    place: "보청기 전문점",
    desc: "처방전을 지참하여 보청기 전문점(메트로보청기)에서 보청기를 구입합니다.",
    time: "",
    isLast: false,
  },
  {
    num: 3,
    title: "확인서 발급",
    place: "이비인후과",
    desc: "보청기 구입 후 착용 적합성 검사를 받고 확인서를 발급받습니다.",
    time: "착용 31일 이후",
    isLast: false,
  },
  {
    num: 4,
    title: "보청기 급여비 청구",
    place: "국민건강보험공단",
    desc: "처방전·영수증·확인서 등 구비 서류를 가지고 국민건강보험공단에 급여비를 청구합니다.",
    time: "",
    isLast: false,
  },
  {
    num: 5,
    title: "환급 완료",
    place: "",
    desc: "심사 후 지원금이 신청 계좌로 환급됩니다.",
    time: "",
    isLast: true,
  },
];

function StepFlow({ steps }: { steps: typeof registrationSteps }) {
  return (
    <div className="flex max-md:flex-col items-stretch justify-center gap-0 mt-10">
      {steps.map((step) => (
        <div
          key={step.num}
          className={`step-card relative flex-1 flex flex-col items-center text-center px-3 max-md:px-0 max-md:flex-row max-md:text-left max-md:gap-4 max-md:items-start ${!step.isLast ? "step-arrow" : ""}`}
        >
          {/* Circle */}
          <div
            className={`w-12 h-12 rounded-full flex items-center justify-center text-white font-extrabold text-lg shrink-0 mb-3 max-md:mb-0 ${
              step.isLast
                ? "bg-[var(--color-gold)]"
                : "bg-[var(--color-primary)]"
            }`}
          >
            {step.isLast ? (
              <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <polyline points="20 6 9 17 4 12" />
              </svg>
            ) : (
              step.num
            )}
          </div>

          {/* Content */}
          <div className="flex-1 max-md:pb-6">
            <p className="font-bold text-[15px] text-gray-900 leading-snug mb-1">{step.title}</p>
            {step.place && (
              <p className="text-[12px] font-semibold text-[var(--color-primary)] mb-1">{step.place}</p>
            )}
            <p className="text-[12px] text-gray-500 leading-relaxed">{step.desc}</p>
            {step.time && (
              <span className="inline-block mt-1.5 text-[11px] bg-[var(--color-primary-light)] text-[var(--color-primary)] font-semibold px-2 py-0.5 rounded-full">
                {step.time}
              </span>
            )}
          </div>

          {/* Mobile connector line */}
          {!step.isLast && (
            <div className="hidden max-md:block absolute left-6 top-12 bottom-0 w-0.5 bg-[var(--color-primary)] opacity-20" />
          )}
        </div>
      ))}
    </div>
  );
}

export default function SubsidyPage() {
  return (
    <>
      <PageHero
        title="정부지원금 안내"
        breadcrumb="홈 > 정부지원금"
        image="/images/subsidy/subsidy1.jpg"
      />

      {/* Sub Nav */}
      <nav
        className="sticky z-40 bg-white border-b border-gray-200 shadow-sm"
        style={{ top: "var(--header-h)" }}
      >
        <div className="max-w-[1200px] mx-auto px-6 flex justify-center gap-0">
          {[
            { label: "보청기 정부지원제도", href: "#system" },
            { label: "청각장애 등록 절차", href: "#registration" },
            { label: "보청기 급여비 수령 절차", href: "#claim" },
          ].map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="sub-nav-item px-6 py-4 max-md:px-4 max-md:py-3 text-[14px] max-md:text-[12px] font-semibold text-gray-600 whitespace-nowrap"
            >
              {item.label}
            </a>
          ))}
        </div>
      </nav>

      {/* Section 1: 보청기 정부지원제도 */}
      <section id="system" className="py-20 max-md:py-14">
        <div className="max-w-[1200px] mx-auto px-6">
          <FadeUp className="text-center mb-12">
            <span className="inline-block text-sm font-semibold text-[var(--color-primary)] bg-[var(--color-primary-light)] px-4 py-1.5 rounded-full mb-4 tracking-wide">
              Government Support
            </span>
            <h2 className="text-3xl max-md:text-2xl font-extrabold text-gray-900">
              보청기 정부지원제도
            </h2>
          </FadeUp>

          <FadeUp className="flex justify-center">
            <div className="max-w-[800px] w-full bg-[var(--color-primary-light)] rounded-2xl p-10 max-md:p-6 text-center">
              {/* Document icon */}
              <div className="w-20 h-20 mx-auto mb-6 bg-white rounded-full flex items-center justify-center shadow-md">
                <svg
                  width="38"
                  height="38"
                  fill="none"
                  stroke="var(--color-primary)"
                  strokeWidth="1.8"
                  viewBox="0 0 24 24"
                >
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                  <polyline points="14 2 14 8 20 8" />
                  <line x1="16" y1="13" x2="8" y2="13" />
                  <line x1="16" y1="17" x2="8" y2="17" />
                  <polyline points="10 9 9 9 8 9" />
                </svg>
              </div>

              <p className="text-[17px] max-md:text-[15px] text-gray-700 leading-relaxed">
                2015년 11월 15일부터 새롭게 개정된 정부지원금 제도로,{" "}
                <strong className="text-[var(--color-primary)]">청각장애</strong>(2~6급) 복지카드를 보유하고
                해당 분류에 보청기 구입 시,{" "}
                <strong className="text-[var(--color-primary)]">5년에 1회</strong> 보청기 구입비를 최대{" "}
                <strong className="text-[var(--color-primary)]">131만원</strong>까지 지원받으실 수 있는 제도입니다.
              </p>

              <div className="flex justify-center gap-4 max-md:gap-3 mt-8 flex-wrap">
                {[
                  { label: "청각장애", sub: "2~6급 복지카드 보유자" },
                  { label: "5년에 1회", sub: "지원 가능" },
                  { label: "최대 131만원", sub: "보청기 구입비 지원" },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="bg-white rounded-xl px-6 py-4 max-md:px-4 max-md:py-3 shadow-sm text-center min-w-[140px]"
                  >
                    <p className="text-[var(--color-primary)] font-extrabold text-lg max-md:text-base">
                      {item.label}
                    </p>
                    <p className="text-gray-500 text-[12px] mt-0.5">{item.sub}</p>
                  </div>
                ))}
              </div>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* Section 2: 청각장애 등록 절차 */}
      <section id="registration" className="py-20 max-md:py-14 bg-gray-50">
        <div className="max-w-[1200px] mx-auto px-6">
          <FadeUp>
            <div className="border-l-4 border-[var(--color-primary)] pl-5 mb-10">
              <span className="text-sm font-semibold text-[var(--color-primary)] tracking-wide">
                Step by Step
              </span>
              <h2 className="text-3xl max-md:text-2xl font-extrabold text-gray-900 mt-1">
                청각장애 등록 절차
              </h2>
              <p className="text-gray-500 mt-2 text-[15px]">
                보청기 정부지원금을 받기 위해서는 먼저 청각장애 등록이 필요합니다.
              </p>
            </div>

            <StepFlow steps={registrationSteps} />
          </FadeUp>
        </div>
      </section>

      {/* Section 3: 보청기 급여비 수령 절차 */}
      <section id="claim" className="py-20 max-md:py-14">
        <div className="max-w-[1200px] mx-auto px-6">
          <FadeUp>
            <div className="border-l-4 border-[var(--color-primary)] pl-5 mb-10">
              <span className="text-sm font-semibold text-[var(--color-primary)] tracking-wide">
                Step by Step
              </span>
              <h2 className="text-3xl max-md:text-2xl font-extrabold text-gray-900 mt-1">
                보청기 급여비 수령 절차
              </h2>
              <p className="text-gray-500 mt-2 text-[15px]">
                청각장애 등록 완료 후 아래 절차에 따라 보청기 구입비를 지원받으실 수 있습니다.
              </p>
            </div>

            <StepFlow steps={claimSteps} />

            {/* Yellow info box */}
            <div className="mt-10 bg-[#FFFBEB] border border-[var(--color-gold)] rounded-xl p-6 max-md:p-5 flex gap-4 items-start">
              <div className="shrink-0 w-8 h-8 bg-[var(--color-gold)] rounded-full flex items-center justify-center text-white font-extrabold text-sm">
                !
              </div>
              <div>
                <p className="font-bold text-gray-800 mb-1">후기적립비 청구 안내</p>
                <p className="text-[14px] text-gray-600 leading-relaxed">
                  보청기 구입 후 <strong>1년</strong> 이내에 이비인후과 전문의에게 후기 적합관리(착용 후 확인서)를 받으시면,
                  선택 진료비 중 일부를 추가로 청구하실 수 있습니다.
                  후기적립비는 최대 <strong>20만 5천원</strong>까지 별도 지원되오니, 구입 후 반드시 확인하시기 바랍니다.
                </p>
              </div>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* CTA Bar */}
      <section className="bg-[var(--color-primary)] py-12 max-md:py-10">
        <FadeUp>
          <div className="max-w-[1200px] mx-auto px-6 flex max-md:flex-col items-center justify-between gap-6">
            <div className="text-white text-center max-md:text-center">
              <p className="text-xl max-md:text-lg font-extrabold">
                정부지원금 신청이 가능한지 확인해 보세요
              </p>
              <p className="text-white/75 text-sm mt-1">
                전문 상담사가 자격 여부를 무료로 확인해 드립니다.
              </p>
            </div>
            <a
              href="tel:1800-9665"
              className="inline-flex items-center gap-3 bg-white text-[var(--color-primary)] font-extrabold text-lg px-8 py-4 rounded-full shadow-lg hover:bg-[var(--color-primary-light)] hover:-translate-y-0.5 transition-all shrink-0"
            >
              <svg
                width="22"
                height="22"
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
        </FadeUp>
      </section>
    </>
  );
}
