import Frame from "../components/Frame";
import Heading from "../components/Heading";
import { projects } from "../data";

export default function ProjectIndexSlide() {
  return <Frame number={4} section="SELECTED WORK"><Heading label="PROJECT INDEX" description="개발 환경, 인증, 일정·데이터 정합성, 실시간 관제까지 — 서로 다른 문제를 해결한 네 가지 경험입니다.">복잡한 흐름을 작동하는 서비스로.</Heading>
    <div className="project-index four-projects">{projects.map((project) => { const firstPage = Number(project.index) * 2 + 3; return <a className="index-row" href={`#project-${project.index}`} key={project.index}>
      <span className="row-number">{project.index}</span><div><h3>{project.title}</h3><p>{project.category}</p><span className="index-period">{project.period}</span></div>
      <div className="index-role"><strong>{project.role}</strong><span>{project.stack.slice(0, 3).join(" · ")}</span><span className="index-page">PAGE {String(firstPage).padStart(2, "0")}–{String(firstPage + 1).padStart(2, "0")}</span></div>
    </a>; })}</div></Frame>;
}
