import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true, // GitHub Pages는 백엔드 Node 서버가 없으므로 정적 이미지 최적화 옵션을 끕니다.
  },
};

export default nextConfig;
