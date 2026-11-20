import { FaArrowUp } from "react-icons/fa6";

export default function BackToTop() {
  const moveToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <button className="back-to-top" type="button" onClick={moveToTop} aria-label="페이지 최상단으로 이동">
      <FaArrowUp aria-hidden="true" />
      <span>TOP</span>
    </button>
  );
}
