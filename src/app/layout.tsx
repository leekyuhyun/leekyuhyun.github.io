import { gaegu, noto } from "./font";
import { ThemeProvider } from "@/providers/ThemeProvider";
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
      <body className="font-noto antialiased">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
