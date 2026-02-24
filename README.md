# 🌌 Kyuloud — 개인 포트폴리오 & 블로그

> 이규현의 개인 포트폴리오 및 기술 블로그입니다.

🔗 **배포 링크**: [https://leekyuhyun.github.io](https://leekyuhyun.github.io)

---

## 📖 프로젝트 소개

개인 포트폴리오와 블로그를 하나의 사이트에서 운영하기 위해 제작했습니다.  
마크다운 파일 기반으로 블로그 포스트를 작성하고, 시리즈별 필터링 및 통합 검색 기능을 제공합니다.

---

## 🛠 기술 스택

![기술 스택](https://skillicons.dev/icons?i=next,ts,tailwindcss,git)

| 분류       | 스택                                     |
| ---------- | ---------------------------------------- |
| 프레임워크 | Next.js 15 (App Router)                  |
| 언어       | TypeScript                               |
| 스타일링   | Tailwind CSS                             |
| 콘텐츠     | Markdown + gray-matter + next-mdx-remote |
| 테마       | next-themes                              |
| 아이콘     | lucide-react                             |
| 배포       | GitHub Pages                             |

---

## ✨ 주요 기능

- 📝 **마크다운 블로그** — `content/Blog/` 폴더 기반 포스트 자동 파싱
- 🗂 **시리즈 필터링** — 폴더 구조 기준으로 시리즈 자동 분류
- 🔍 **통합 검색** — 블로그 제목 / 설명 / 태그 기반 검색 (`/search?q=`)
- 🌗 **다크모드** — Light / Dark / System 테마 지원
- 🏠 **메인 페이지** — 최근 포스트 3개 노출
- 👤 **소개 페이지** — 프로필, 기술 스택, 학력, 수상 이력
- 💼 **프로젝트 페이지** — 프로젝트 목록 및 상세

---

## 📁 폴더 구조

```
src/
├── app/                        # Next.js App Router 페이지
│   ├── page.tsx                # 메인 페이지
│   ├── blog/
│   │   ├── page.tsx            # 블로그 목록
│   │   └── [slug]/page.tsx     # 블로그 상세
│   ├── project/page.tsx        # 프로젝트 목록
│   ├── about/page.tsx          # 소개 페이지
│   └── search/page.tsx         # 통합 검색
│
├── components/                 # 재사용 컴포넌트
│   ├── blog/                   # 블로그 관련 컴포넌트
│   ├── common/                 # Navbar, Footer, Search
│   ├── home/                   # 메인 페이지 컴포넌트
│   ├── introduce/              # 소개 페이지 컴포넌트
│   └── project/                # 프로젝트 컴포넌트
│
├── views/                      # 페이지 단위 View 컴포넌트
├── lib/
│   └── blog.ts                 # 마크다운 파싱 유틸
└── providers/
    └── ThemeProvider.tsx       # 다크모드 프로바이더

content/
└── Blog/
    ├── TIL/                    # TIL 시리즈
    │   └── 2025-12-30-til.md
    └── ...                     # 기타 시리즈 폴더
```

---

## 🚀 시작하는 법

### 요구사항

- Node.js 18+
- npm 또는 yarn

### 설치 및 실행

```bash
# 저장소 클론
git clone https://github.com/leekyuhyun/universe.git
cd universe

# 의존성 설치
npm install

# 개발 서버 실행
npm run dev
```

### 블로그 포스트 작성

`content/Blog/{시리즈명}/YYYY-MM-DD-제목.md` 형식으로 파일을 생성하세요.

```markdown
---
title: "포스트 제목"
date: "2025-12-30"
description: "포스트 설명"
thumbnail: "/images/thumbnail.png"
tags: ["태그1", "태그2"]
---

본문 내용...
```
