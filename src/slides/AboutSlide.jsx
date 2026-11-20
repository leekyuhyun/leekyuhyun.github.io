import Frame from "../components/Frame";
import Heading from "../components/Heading";
import { evidence, values } from "../data";

export default function AboutSlide() {
  return <Frame number={2} section="ABOUT ME"><Heading label="HOW I WORK">문제를 발견하고, 팀이 다시 쓰는 기준으로 만듭니다.</Heading>
    <div className="value-list">{values.map((value, index) => <article className="value-row" key={value.no}>
      <span className="row-number">{value.no}</span><div><h3>{value.title}</h3><p>{value.text}</p></div>
      <div className="evidence"><span className="eyebrow">IN PRACTICE</span><p>{evidence[index]}</p></div>
    </article>)}</div><div className="statement">개발 규칙과 기술 도입 과정을 기록해 팀이 같은 기준으로 협업하도록 돕습니다.</div></Frame>;
}
