import Frame from "../components/Frame";
import Heading from "../components/Heading";
import ImageSlot from "../components/ImageSlot";
import Tags from "../components/Tags";

export default function ProjectOverviewSlide({ project, number }) {
  const githubLinks = project.githubLinks ?? (project.github ? [{ label: "GitHub", url: project.github }] : []);
  return <Frame number={number} section={`PROJECT ${project.index}`}><Heading label={`SELECTED WORK / ${project.index}`} description={project.category}>{project.title}</Heading>
    <div className="project-layout"><div className="project-visual"><ImageSlot label={project.imageLabel} src={project.image} alt={`${project.title} 대표 화면`} fit={project.imageFit} /></div>
      <div className="project-details"><p className="project-summary">{project.summary}</p><dl className="project-meta">
        {[["진행", project.context], ["기간", project.period], ["역할", project.role], ["팀 구성", project.team]].map(([label, value]) => <div key={label}><dt>{label}</dt><dd>{value}</dd></div>)}
        <div><dt>GitHub</dt><dd>{githubLinks.length ? <span className="project-github-list">{githubLinks.map(({ label, url }) => <a className="project-github" href={url} target="_blank" rel="noreferrer" key={url}>{label === "GitHub" ? url.replace(/^https?:\/\//, "") : label}</a>)}</span> : <span className="project-github-placeholder">링크 추가 예정</span>}</dd></div>
      </dl>{project.award && <p className="award">{project.award}</p>}<div className="project-stack"><p className="eyebrow">TECH STACK</p><Tags items={project.stack} /></div></div></div>
    <div className="result-strip"><span className="eyebrow">RESULT</span><p>{project.result}</p></div></Frame>;
}
