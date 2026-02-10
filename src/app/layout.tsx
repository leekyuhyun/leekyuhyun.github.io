import type { Metadata } from "next";
import { Noto_Sans_KR, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

const _notoSansKR = Noto_Sans_KR({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "이규현 | 개발자 포트폴리오",
  description:
    "개인 포트폴리오와 블로그 - 프로젝트, 생각, 그리고 배움의 기록.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-background font-sans text-foreground antialiased">
        <Navbar />
        <main className="min-h-[calc(100vh-160px)]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
