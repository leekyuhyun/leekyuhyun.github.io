import localFont from "next/font/local";
import { Noto_Sans_KR } from "next/font/google";

export const gaegu = localFont({
  src: [
    {
      path: "./font/Gaegu-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "./font/Gaegu-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./font/Gaegu-Light.ttf",
      weight: "300",
      style: "normal",
    },
  ],
  variable: "--font-gaegu",
});

export const noto = Noto_Sans_KR({
  subsets: ["latin"],
  variable: "--font-noto",
});
