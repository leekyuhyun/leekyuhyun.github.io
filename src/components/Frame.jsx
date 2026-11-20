const TOTAL_PAGES = 15;

export default function Frame({ number, section, children, cover = false }) {
  return (
    <section className={`slide ${cover ? "cover-page" : ""}`} aria-label={`${number}페이지 · ${section}`}>
      <header className="page-top"><span>LEE KYUHYUN / PORTFOLIO</span><span>{section}</span></header>
      <div className="page-content">{children}</div>
      <footer className="page-bottom"><span>이규현 · Fullstack Developer</span><span>{String(number).padStart(2, "0")} / {TOTAL_PAGES}</span></footer>
    </section>
  );
}
