import { gaegu, noto } from "./font";
import { ThemeProvider } from "@/providers/ThemeProvider";
import { Navbar, Footer } from "@/components/common/commonPath"; // 1. Navbar, Footer 임포트
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="ko"
      className={`${gaegu.variable} ${noto.variable}`}
      suppressHydrationWarning
    >
      <body className="font-noto antialiased flex min-h-screen flex-col">
        <ThemeProvider>
          <Navbar />

          <main className="grow pt-4 sm:pt-2">{children}</main>

          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
