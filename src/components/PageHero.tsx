import Image from "next/image";

interface PageHeroProps {
  title: string;
  breadcrumb: string;
  image: string;
}

export default function PageHero({ title, breadcrumb, image }: PageHeroProps) {
  return (
    <section className="h-[380px] max-md:h-[260px] flex items-center justify-center text-center relative mt-[var(--header-h)] overflow-hidden">
      {/* Background image with parallax-style positioning */}
      <div className="absolute inset-0" style={{ top: "-20%", bottom: "-20%", height: "140%" }}>
        <Image
          src={image}
          alt=""
          fill
          className="object-cover"
          style={{ objectPosition: "center 40%" }}
          priority
        />
      </div>

      {/* Gradient overlay */}
      <div className="page-hero-overlay absolute inset-0" />

      {/* Geometric pattern overlay */}
      <div className="absolute inset-0 pointer-events-none" style={{ opacity: 0.07 }}>
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="hero-geo" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M30 0 L60 30 L30 60 L0 30Z" fill="none" stroke="white" strokeWidth="1" />
              <circle cx="30" cy="30" r="3" fill="white" opacity="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#hero-geo)" />
        </svg>
      </div>

      {/* Diagonal accent line */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "linear-gradient(135deg, transparent 40%, rgba(212,168,83,0.08) 50%, transparent 60%)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 text-white flex flex-col items-center">
        {/* Breadcrumb with fade-in animation */}
        <p
          className="text-sm tracking-wider uppercase mb-4 page-hero-breadcrumb"
          style={{ opacity: 0, textShadow: "0 1px 8px rgba(0,0,0,.3)" }}
        >
          {breadcrumb}
        </p>

        {/* Title */}
        <h1
          className="text-[44px] max-md:text-[30px] font-extrabold leading-tight page-hero-title"
          style={{
            opacity: 0,
            textShadow: "0 2px 20px rgba(0,0,0,.4), 0 4px 40px rgba(11,83,148,.3)",
          }}
        >
          {title}
        </h1>

        {/* Decorative gradient bar */}
        <div
          className="mt-5 rounded-full page-hero-bar"
          style={{
            width: 60,
            height: 4,
            background: "linear-gradient(90deg, #D4A853, #f0d68a, #D4A853)",
            opacity: 0,
          }}
        />
      </div>

      {/* Bottom fade edge */}
      <div
        className="absolute bottom-0 left-0 right-0 h-16 pointer-events-none"
        style={{
          background: "linear-gradient(to top, rgba(255,255,255,0.05), transparent)",
        }}
      />
    </section>
  );
}
