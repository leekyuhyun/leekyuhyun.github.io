import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "../components/ThemeProvider";
import CustomCursor from "../components/common/CustomCursor";

export const metadata: Metadata = {
  metadataBase: new URL("https://leekyuhyun.github.io"),
  title: "이규현 | Full-stack Developer",
  description: "프론트엔드를 중심으로 서비스의 전체 흐름을 구현하는 이규현의 개발 포트폴리오입니다.",
  openGraph: {
    siteName: "이규현의 포트폴리오",
    locale: "ko_KR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className="scroll-smooth" suppressHydrationWarning>
      <body className="bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-100 transition-colors duration-300 break-keep">
        <ThemeProvider>
          <CustomCursor />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
