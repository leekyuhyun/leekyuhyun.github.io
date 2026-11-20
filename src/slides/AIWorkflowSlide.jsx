import Frame from "../components/Frame";
import Heading from "../components/Heading";
import { workflow } from "../data";

export default function AIWorkflowSlide() {
  return <Frame number={13} section="AI WORKFLOW"><Heading label="AI AS A COLLABORATOR" description="ChatGPT · Codex · Gemini · Claude">빠르게 탐색하고, 끝까지 직접 검증합니다.</Heading>
    <div className="workflow-list">{workflow.map(([number, title, description, example]) => <article className="workflow-row" key={number}>
      <span className="row-number">{number}</span><h3>{title}</h3><div><p>{description}</p><span>{example}</span></div>
    </article>)}</div><div className="statement">AI의 답은 출발점입니다. 최종 판단과 검증은 직접 책임집니다.</div></Frame>;
}
