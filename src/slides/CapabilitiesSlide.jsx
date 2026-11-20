import Frame from "../components/Frame";
import Heading from "../components/Heading";
import Tags from "../components/Tags";
import { skills } from "../data";

export default function CapabilitiesSlide() {
  return (
    <Frame number={3} section="CAPABILITIES">
      <Heading
        label="TECH STACK"
        description="프로젝트에서 활용한 주요 기술을 영역별로 정리했습니다."
      >
        서비스의 앞과 뒤를 연결하는 기술
      </Heading>
      <div className="skills-table">
        {skills.map(([category, ...items]) => (
          <article className="skill-row" key={category}>
            <h3>{category}</h3>
            <div><Tags items={items} icons /></div>
          </article>
        ))}
      </div>
    </Frame>
  );
}
