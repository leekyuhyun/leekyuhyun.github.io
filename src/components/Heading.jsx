export default function Heading({ label, children, description }) {
  return <div className="heading"><p className="eyebrow">{label}</p><h2>{children}</h2>{description && <p className="heading-note">{description}</p>}</div>;
}
