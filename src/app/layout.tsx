import type { Metadata } from "next";
import { Noto_Sans_KR } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import QuickMenu from "@/components/QuickMenu";
import Footer from "@/components/Footer";

const notoSansKR = Noto_Sans_KR({
  variable: "--font-noto-sans-kr",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "메트로 보청기 | 청각 전문 솔루션 센터",
  description: "정확한 진단이 올바른 선택을 만듭니다. 청능사·청각사가 직접 상담하는 청각 전문 솔루션 센터, 메트로 보청기",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className={`${notoSansKR.variable} antialiased`}>
      <body className="min-h-screen flex flex-col" style={{ fontFamily: "var(--font-noto-sans-kr), 'Noto Sans KR', sans-serif" }}>
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <QuickMenu />
      </body>
    </html>
  );
}
