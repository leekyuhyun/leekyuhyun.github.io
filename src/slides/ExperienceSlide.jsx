import Frame from "../components/Frame";
import Heading from "../components/Heading";
import { history } from "../data";
import { LuBookOpenCheck, LuGraduationCap, LuSparkles, LuTrophy } from "react-icons/lu";

export default function ExperienceSlide() {
  const icons = [LuBookOpenCheck, LuSparkles, LuGraduationCap, LuTrophy];
  return <Frame number={14} section="EXPERIENCE"><Heading label="HISTORY">배우고, 만들고, 도전했습니다.</Heading>
    <div className="history-layout"><div className="timeline">{history.map(([date, event], index) => {
      const Icon = icons[index];
      return <article key={date}><span className="history-icon" aria-hidden="true"><Icon /></span><div><time>{date}</time><h3>{event}</h3></div></article>;
    })}</div></div>
  </Frame>;
}
