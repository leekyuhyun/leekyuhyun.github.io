# 💻 이규현 (Lee Kyuhyun) - Developer Portfolio

효율적인 프로세스를 고민하는 풀스택 개발자 이규현의 포트폴리오 웹사이트입니다.
Velog(벨로그)와 유사한 깔끔하고 트렌디한 기술 블로그 UI를 차용하여 구현되었습니다.

👉 **[포트폴리오 보러 가기](https://leekyuhyun.github.io)**

## 🚀 주요 특징 (Features)

- **현대적인 UI/UX**: 개발자 친화적인 Velog 스타일의 깔끔한 카드형 인터페이스
- **반응형 웹 디자인**: 모바일, 태블릿, 데스크탑을 완벽하게 지원하는 맞춤형 반응형 레이아웃
- **다크 모드 지원**: 사용자 시스템 설정 및 수동 토글이 가능한 완벽한 다크/라이트 모드
- **정적 배포 최적화**: Github Pages 배포를 위한 Next.js Static Export 적용 (`output: 'export'`)

## 🛠 기술 스택 (Tech Stack)

- **Framework**: Next.js (App Router)
- **Styling**: Tailwind CSS v4
- **Icons**: Lucide React, Custom SVGs
- **Theme**: next-themes
- **Package Manager**: pnpm

## 📂 주요 디렉토리 구조

```text
src/
├── app/
│   ├── globals.css      # 전역 스타일 및 Tailwind CSS Theme (Dongle 폰트 크기 커스텀)
│   ├── layout.tsx       # Root 레이아웃 및 ThemeProvider
│   └── page.tsx         # 메인 페이지 레이아웃 구조
├── components/          # 재사용 가능한 UI 컴포넌트
│   ├── Header.tsx       # 상단 네비게이션바 및 다크모드 토글
│   ├── Profile.tsx      # 프로필, 자기소개 및 소셜 링크
│   ├── Skills.tsx       # 기술 스택 태그 목록
│   ├── Projects.tsx     # 프로젝트 목록 피드 및 모달 팝업
│   └── Icons.tsx        # SVG 아이콘 컴포넌트 분리
├── data/                # 포트폴리오 렌더링에 사용되는 정적 데이터
│   ├── profile.ts       # 개인 정보, 소셜 링크 등
│   ├── skills.ts        # 기술 스택 분류 데이터
│   └── projects.ts      # 프로젝트 상세 정보
└── assets/
    └── images/          # 프로필 사진 및 프로젝트 썸네일 이미지
```

## ⚙️ 로컬 실행 방법 (Getting Started)

1. 저장소를 클론합니다.
```bash
git clone https://github.com/leekyuhyun/leekyuhyun.github.io.git
cd leekyuhyun.github.io/portfolio
```

2. 패키지를 설치합니다.
```bash
pnpm install
```

3. 개발 서버를 실행합니다.
```bash
pnpm dev
```

4. 브라우저에서 `http://localhost:3000`에 접속하여 확인합니다.

## 📝 데이터 수정 가이드

포트폴리오 내용을 본인의 정보로 수정하려면 `src/data/` 폴더 안의 파일들을 수정하세요.
- `profile.ts`: 이름, 직업, 자기소개, 프로필 이미지 수정
- `skills.ts`: 프론트엔드, 백엔드 등 사용 가능한 기술 스택 수정
- `projects.ts`: 참여한 프로젝트 목록, 썸네일, 상세 설명, 기여도 수정

## 📄 License

This project is licensed under the MIT License.
