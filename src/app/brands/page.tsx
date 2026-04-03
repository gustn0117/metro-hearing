import Image from "next/image";
import FadeUp from "@/components/FadeUp";
import PageHero from "@/components/PageHero";

const brands = [
  {
    id: "signia",
    nameKo: "시그니아",
    nameEn: "Signia",
    country: "독일",
    flag: "/images/brands/flags/germany.jpg",
    logo: "/images/brands/signia.png",
    desc: "보청기의 성능과 디자인을 혁신적인 수준으로 끌어올리며 세계적인 보청기 기업으로 자리매김한 시그니아는 독일의 첨단 기술력을 바탕으로 착용자가 자연스러운 소리를 경험할 수 있도록 끊임없이 연구 개발하고 있습니다. 독자적인 Own Voice Processing(OVP) 기술로 착용자 자신의 목소리까지 자연스럽게 들리는 최고 수준의 보청기를 제공합니다.",
    products: [
      {
        badge: "최신 제품",
        badgeType: "new",
        name: "Silk Charge&Go IX",
        nameKo: "실크 차지앤고 IX",
        image: "/images/brands/products/signia-silk.png",
        desc: "귀 속에 완전히 들어가는 초소형 디자인으로 편리한 충전 시스템을 갖춘 시그니아의 최신 플래그십 제품입니다.",
        features: ["초소형 CIC 충전식 디자인", "지능형 소음 관리 시스템", "Integrated Xperience(IX) 플랫폼"],
      },
      {
        badge: "정부지원 모델",
        badgeType: "gov",
        name: "Insio 7NX",
        nameKo: "인시오 7NX",
        image: "/images/brands/products/signia-insio.png",
        desc: "정부보조금 지원 대상 제품으로 뛰어난 음질과 작은 크기를 동시에 제공하는 맞춤형 보청기입니다.",
        features: ["선명하고 자연스러운 음질", "귀 안에 완전히 들어가는 작은 디자인", "다양한 쉘 색상 선택 가능"],
      },
    ],
  },
  {
    id: "oticon",
    nameKo: "오티콘",
    nameEn: "Oticon",
    country: "덴마크",
    flag: "/images/brands/flags/denmark.jpg",
    logo: "/images/brands/oticon.png",
    desc: "1904년 덴마크에서 설립된 오티콘은 100년이 넘는 역사와 전통을 자랑하는 세계 최고 수준의 보청기 브랜드입니다. Brain Hearing™ 철학을 바탕으로 단순히 소리를 크게 하는 것이 아닌, 뇌가 소리를 더 쉽게 처리할 수 있도록 돕는 혁신적인 기술을 개발하여 착용자에게 풍부하고 자연스러운 청취 경험을 제공합니다.",
    products: [
      {
        badge: "최신 제품",
        badgeType: "new",
        name: "Own SI",
        nameKo: "오운 SI",
        image: "/images/brands/products/oticon-own-si.png",
        desc: "딥러닝 AI 기술이 탑재된 오티콘의 최신 초소형 귓속형 보청기로 선명한 사운드를 제공합니다.",
        features: ["딥러닝 AI 기반 청취 지원", "전방향 선명한 사운드 처리", "초소형 IIC 디자인"],
      },
      {
        badge: "정부지원 모델",
        badgeType: "gov",
        name: "More",
        nameKo: "모어",
        image: "/images/brands/products/oticon-more.png",
        desc: "말소리 이해도를 획기적으로 높인 정부지원 모델로 다양한 환경에서 뛰어난 청취 성능을 발휘합니다.",
        features: ["말소리 이해도 최대 15% 향상", "지능형 사운드 씬 분석", "전용 앱을 통한 손쉬운 관리"],
      },
    ],
  },
  {
    id: "phonak",
    nameKo: "포낙",
    nameEn: "Phonak",
    country: "스위스",
    flag: "/images/brands/flags/switzerland.jpg",
    logo: "/images/brands/phonak.png",
    desc: "스위스의 정밀 기술력을 기반으로 1947년 설립된 포낙은 어떤 환경에서도 최상의 청취 경험을 제공하는 것을 목표로 합니다. Universal Connectivity 기술을 통해 스마트폰, TV 등 다양한 기기와 원활하게 연결되며 Roger 무선 마이크 시스템과 결합하여 소음이 많은 환경에서도 뛰어난 말소리 이해도를 실현합니다.",
    products: [
      {
        badge: "최신 제품",
        badgeType: "new",
        name: "Infinio Ultra",
        nameKo: "인피니오 울트라",
        image: "/images/brands/products/phonak-infinio.png",
        desc: "AI 기반 사운드 처리 기술로 복잡한 환경에서도 또렷한 말소리를 전달하는 포낙의 최신 플래그십 모델입니다.",
        features: ["AI 사운드 처리 엔진 탑재", "소음 속에서도 또렷한 말소리", "Bluetooth 무선 연결 지원"],
      },
      {
        badge: "정부지원 모델",
        badgeType: "gov",
        name: "Audeo Paradise",
        nameKo: "오데오 파라다이스",
        image: "/images/brands/products/phonak-paradise.png",
        desc: "탁월한 말소리 이해도와 편안한 착용감으로 일상생활의 모든 순간을 풍요롭게 만드는 정부지원 모델입니다.",
        features: ["말소리 이해도 및 청취 편안함 향상", "적응형 노이즈 캔슬링 기능", "멀티포인트 무선 연결 지원"],
      },
    ],
  },
  {
    id: "beltone",
    nameKo: "벨톤",
    nameEn: "Beltone",
    country: "덴마크",
    flag: "/images/brands/flags/denmark.jpg",
    logo: "/images/brands/beltone.png",
    desc: "1940년 덴마크에서 시작된 벨톤은 80년 이상의 역사를 가진 세계적인 보청기 브랜드로, 착용자의 생활 방식에 맞는 맞춤형 청취 솔루션을 제공합니다. 독자적인 Beltone Remote Care 시스템을 통해 전문가가 원격으로 보청기를 조절할 수 있어 사후 관리가 편리하며, 다양한 디자인과 컬러 옵션을 제공하여 패션 보청기로도 인기가 높습니다.",
    products: [
      {
        badge: "최신 제품",
        badgeType: "new",
        name: "Envision",
        nameKo: "인비전",
        image: "/images/brands/products/beltone-envision.png",
        desc: "다양한 컬러 옵션과 직관적인 탭 컨트롤을 갖춘 벨톤의 최신 스타일리시 보청기 모델입니다.",
        features: ["풍부한 컬러 옵션 및 스타일리시 디자인", "이어팁 더블 탭으로 간편한 컨트롤", "핸즈프리 통화 및 스트리밍"],
      },
      {
        badge: "정부지원 모델",
        badgeType: "gov",
        name: "Serene",
        nameKo: "세린",
        image: "/images/brands/products/beltone-serene.png",
        desc: "방수 설계와 CROS/BiCROS 기능을 갖춰 단측성 난청자도 사용 가능한 정부지원 모델입니다.",
        features: ["IP68 등급 방수·방진 설계", "CROS/BiCROS 지원 (단측성 난청)", "무선 연결 및 앱 제어"],
      },
    ],
  },
  {
    id: "widex",
    nameKo: "와이덱스",
    nameEn: "Widex",
    country: "덴마크",
    flag: "/images/brands/flags/denmark.jpg",
    logo: "/images/brands/widex.png",
    desc: "1956년 덴마크에서 설립된 와이덱스는 세계 최초의 디지털 보청기를 출시하며 업계를 선도해 온 혁신적인 보청기 브랜드입니다. 독자적인 퓨어사운드(PureSound) 기술로 음악과 자연음을 왜곡 없이 자연스럽게 전달하는 것으로 유명하며, 머신러닝 기술을 활용해 착용자의 환경과 취향을 스스로 학습하는 지능형 보청기를 개발하고 있습니다.",
    products: [
      {
        badge: "최신 제품",
        badgeType: "new",
        name: "Allure",
        nameKo: "얼루어",
        image: "/images/brands/products/widex-allure.png",
        desc: "퓨어사운드 기술로 음악과 자연음을 왜곡 없이 전달하는 와이덱스의 최신 플래그십 보청기입니다.",
        features: ["퓨어사운드(PureSound) 기술 탑재", "자연스러운 말소리 전달 최적화", "착용자 환경 자동 감지 및 조정"],
      },
      {
        badge: "정부지원 모델",
        badgeType: "gov",
        name: "Magnify",
        nameKo: "매그니파이",
        image: "/images/brands/products/widex-magnify.png",
        desc: "머신러닝 기반 맞춤 사운드 조정으로 착용자에게 최적화된 청취 환경을 제공하는 정부지원 모델입니다.",
        features: ["머신러닝 기반 맞춤 사운드 조정", "착용자 선호도 자동 최적화 학습", "무선 연결 및 원격 피팅 지원"],
      },
    ],
  },
];

const navItems = [
  { label: "시그니아", href: "#signia" },
  { label: "오티콘", href: "#oticon" },
  { label: "포낙", href: "#phonak" },
  { label: "벨톤", href: "#beltone" },
  { label: "와이덱스", href: "#widex" },
];

export default function BrandsPage() {
  return (
    <>
      <PageHero
        title="보청기 브랜드"
        breadcrumb="홈 > 보청기 브랜드"
        image="/images/brands/brand-bg1.jpg"
      />

      {/* Sub Nav */}
      <nav
        className="sticky z-50 bg-white border-b border-gray-200 shadow-sm"
        style={{ top: "var(--header-h)" }}
      >
        <div className="max-w-[1200px] mx-auto px-6">
          <ul className="flex overflow-x-auto scrollbar-hide">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="sub-nav-item flex items-center px-6 py-4 text-[15px] font-semibold text-gray-600 whitespace-nowrap"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Common Intro */}
      <section className="py-20 max-md:py-14 text-center">
        <div className="max-w-[1200px] mx-auto px-6">
          <FadeUp>
            <span className="inline-block text-sm font-semibold text-[var(--color-primary)] bg-[var(--color-primary-light)] px-4 py-1.5 rounded-full mb-4 tracking-wide">
              Global Brands
            </span>
            <h2 className="text-4xl max-md:text-[26px] font-extrabold mb-4">
              세계 5대 보청기 브랜드
            </h2>
            <p className="text-[17px] text-gray-500 max-w-[700px] mx-auto leading-relaxed">
              세계 5대 보청기 브랜드를 취급하며, 보청기 브랜드별 특징을 정확히 이해한 전문 상담을 제공합니다.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* Brand Sections */}
      {brands.map((brand, idx) => (
        <section
          key={brand.id}
          id={brand.id}
          className={`py-20 max-md:py-14 scroll-mt-[calc(var(--header-h)+56px)] ${
            idx % 2 === 0 ? "bg-white" : "bg-gray-50"
          }`}
        >
          <div className="max-w-[1200px] mx-auto px-6">
            {/* Brand Header */}
            <FadeUp>
              <div className="flex flex-col md:flex-row md:items-center gap-6 mb-10 pb-8 border-b border-gray-200">
                <div className="relative h-14 w-[180px] flex-shrink-0">
                  <Image
                    src={brand.logo}
                    alt={`${brand.nameKo} 로고`}
                    fill
                    className="object-contain object-left"
                  />
                </div>
                <div className="flex items-center gap-3 flex-1">
                  <div className="relative w-8 h-6 rounded-sm overflow-hidden flex-shrink-0 shadow-sm">
                    <Image
                      src={brand.flag}
                      alt={`${brand.country} 국기`}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <span className="text-sm font-medium text-gray-500">{brand.country}</span>
                  <span className="text-gray-300">|</span>
                  <span className="text-lg font-bold text-gray-800">{brand.nameKo}</span>
                  <span className="text-sm text-gray-400">{brand.nameEn}</span>
                </div>
              </div>
            </FadeUp>

            {/* Brand Description */}
            <FadeUp>
              <p className="text-[16px] text-gray-600 leading-relaxed mb-12 max-w-[900px]">
                {brand.desc}
              </p>
            </FadeUp>

            {/* Product Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {brand.products.map((product) => (
                <FadeUp key={product.name}>
                  <div className="product-card bg-white rounded-2xl border border-gray-100 shadow-md overflow-hidden hover:-translate-y-1 transition-transform">
                    {/* Badge */}
                    <div className="px-6 pt-6">
                      <span
                        className={`inline-block text-xs font-bold px-3 py-1 rounded-full mb-4 ${
                          product.badgeType === "new"
                            ? "bg-[var(--color-primary)] text-white"
                            : "bg-[var(--color-gold)] text-white"
                        }`}
                      >
                        {product.badge}
                      </span>
                    </div>

                    {/* Product Image */}
                    <div className="relative h-[200px] mx-6 flex items-center justify-center">
                      <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        className="object-contain"
                      />
                    </div>

                    {/* Product Info */}
                    <div className="px-6 pb-6 pt-4">
                      <h3 className="text-xl font-extrabold text-gray-900 mb-1">
                        {product.name}
                      </h3>
                      {product.nameKo && (
                        <p className="text-[14px] text-gray-400 font-medium mb-2">{product.nameKo}</p>
                      )}
                      <p className="text-[14px] text-gray-500 leading-relaxed mb-4">
                        {product.desc}
                      </p>

                      {/* Features */}
                      <ul className="space-y-2">
                        {product.features.map((feature) => (
                          <li key={feature} className="flex items-start gap-2.5 text-[14px] text-gray-600">
                            <svg
                              className="flex-shrink-0 mt-0.5"
                              width="16"
                              height="16"
                              fill="none"
                              stroke="var(--color-primary)"
                              strokeWidth="2.5"
                              viewBox="0 0 24 24"
                            >
                              <polyline points="20 6 9 17 4 12" />
                            </svg>
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
      ))}
    </>
  );
}
