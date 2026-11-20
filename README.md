# 이규현 포트폴리오 발표 자료

React + Vite + Tailwind CSS로 만든 A4 가로형 포트폴리오입니다. 화면 전환 애니메이션 없이 인쇄와 PDF 저장에 맞춰 구성했습니다.

## 실행

```bash
corepack pnpm install
corepack pnpm dev
```

개발 서버는 `http://localhost:7778`에서 실행됩니다.

## PDF로 저장

1. 브라우저에서 페이지를 엽니다.
2. `Ctrl + P`를 누릅니다.
3. 용지는 `A4`, 레이아웃은 `가로`, 여백은 `없음`으로 설정합니다.
4. 디자인 색상을 유지하려면 `배경 그래픽`을 켭니다.

## 이미지 교체

이미지 파일을 `public/images/`에 넣고 데이터 파일의 `image` 값만 지정하면 됩니다.

```js
// src/data/projects.js
image: "/images/project-01.png"

// src/data/profile.js
image: "/images/profile.png"
```

이미지가 없으면 기존 16:9 안내 박스가 자동으로 표시됩니다.

## 파일 구조

```text
src/
├─ components/       # 페이지 프레임, 제목, 이미지 슬롯, 기술 태그
├─ slides/           # 인쇄 페이지별 React 컴포넌트
├─ data/             # 프로필, 소개, 프로젝트, 이력 데이터
├─ App.jsx           # 13페이지 순서 조립
├─ data.js           # 데이터 모듈 통합 export
└─ styles.css        # 화면·A4 인쇄 스타일
```

- 프로젝트 소개 화면: `src/slides/ProjectOverviewSlide.jsx`
- 프로젝트 문제·해결·결과: `src/slides/ProjectDetailsSlide.jsx`
- 프로젝트 내용과 이미지: `src/data/projects.js`
- 프로필과 연락처: `src/data/profile.js`
