import TechIcon from "./TechIcon";

export default function Tags({ items, icons = false }) {
  return <div className="flex flex-wrap gap-2">{items.map((item) => <span className={`tag ${icons ? "tag-with-icon" : ""}`} key={item}>
    {icons && <span className="tag-icon"><TechIcon name={item} /></span>}{item}
  </span>)}</div>;
}
