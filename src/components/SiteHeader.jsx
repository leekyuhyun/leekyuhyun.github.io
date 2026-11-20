import { profile } from "../data";

const navigation = [
  ["소개", "#intro"],
  ["프로젝트", "#projects"],
  ["업무 방식", "#workflow"],
  ["이력", "#history"],
  ["연락처", "#contact"],
];

export default function SiteHeader() {
  return (
    <header className="site-header">
      <a className="site-brand" href="#intro" aria-label="포트폴리오 첫 화면으로 이동">
        <span>KYUHYUN</span>
        <strong>PORTFOLIO</strong>
      </a>
      <nav className="site-nav" aria-label="포트폴리오 주요 메뉴">
        {navigation.map(([label, href]) => <a href={href} key={href}>{label}</a>)}
      </nav>
      <a className="site-contact" href={`mailto:${profile.email}`}>Email</a>
    </header>
  );
}
