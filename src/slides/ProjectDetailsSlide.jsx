import Frame from "../components/Frame";
import Heading from "../components/Heading";

export default function ProjectDetailsSlide({ project, cases, number }) {
  return <Frame number={number} section={`PROJECT ${project.index} / CONTRIBUTIONS`}><Heading label="PROBLEM → ACTION → RESULT" description={project.role}>{project.title} · 문제 해결과 기여</Heading>
    <div className="case-list">{cases.map(([heading, problem, action, result], index) => <article className="case-row" key={heading}>
      <h3><span>{String(index + 1).padStart(2, "0")}</span>{heading}</h3><div className="case-columns">
        {[["문제", problem], ["해결", action], ["결과", result]].map(([label, copy]) => <div key={label}><h4>{label}</h4><p>{copy}</p></div>)}
      </div></article>)}</div></Frame>;
}
