import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    // GitHub Pages에는 이미지 최적화 서버가 없으므로 정적 이미지를 사용합니다.
    unoptimized: true,
  },
};

export default nextConfig;
