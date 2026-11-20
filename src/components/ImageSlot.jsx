export default function ImageSlot({ label, portrait = false, src, alt = "", fit = "cover" }) {
  if (src) {
    return <figure className={`image-slot has-image fit-${fit} ${portrait ? "portrait-slot" : ""}`}><img src={src} alt={alt || label} /></figure>;
  }

  return (
    <figure className={`image-slot ${portrait ? "portrait-slot" : ""}`}>
      <span className="slot-corner">{portrait ? "PROFILE" : "16 : 9"}</span>
      <div className="slot-caption"><span className="slot-icon" aria-hidden="true">＋</span><strong>{label}</strong><span>이미지 삽입 예정</span></div>
    </figure>
  );
}
