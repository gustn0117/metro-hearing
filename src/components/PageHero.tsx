import Image from "next/image";

interface PageHeroProps {
  title: string;
  breadcrumb: string;
  image: string;
}

export default function PageHero({ title, breadcrumb, image }: PageHeroProps) {
  return (
    <section className="h-[360px] max-md:h-[240px] flex items-center justify-center text-center relative mt-[var(--header-h)] overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src={image}
          alt=""
          fill
          className="object-cover"
          style={{ objectPosition: "center 40%" }}
          priority
        />
      </div>

      {/* Sharp overlay */}
      <div className="page-hero-overlay absolute inset-0" />

      {/* Content */}
      <div className="relative z-10 text-white flex flex-col items-center">
        {/* Breadcrumb */}
        <p
          className="text-sm tracking-widest uppercase mb-5 page-hero-breadcrumb text-white/80"
          style={{ opacity: 0 }}
        >
          {breadcrumb}
        </p>

        {/* Title */}
        <h1
          className="text-[48px] max-md:text-[32px] font-extrabold leading-tight tracking-tight page-hero-title"
          style={{
            opacity: 0,
            letterSpacing: "-0.02em",
          }}
        >
          {title}
        </h1>

        {/* Thin underline bar */}
        <div
          className="mt-5 page-hero-bar"
          style={{
            width: 40,
            height: 2,
            backgroundColor: "var(--color-gold)",
            opacity: 0,
          }}
        />
      </div>
    </section>
  );
}
