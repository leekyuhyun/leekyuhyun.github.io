import Frame from "../components/Frame";
import Heading from "../components/Heading";
import { profile } from "../data";
import { SiGithub } from "react-icons/si";
import { LuArrowUpRight, LuMail, LuNotebookPen } from "react-icons/lu";

export default function ContactSlide() {
  const links = [["E-mail", profile.email, `mailto:${profile.email}`, LuMail], ["GitHub", profile.github, `https://${profile.github}`, SiGithub], ["Blog", profile.blog, `https://${profile.blog}`, LuNotebookPen]];
  return <Frame number={15} section="CONTACT"><Heading label="LET’S BUILD TOGETHER" description="협업 제안이나 궁금한 점이 있으시다면 언제든 연락주세요.">함께 해결할 문제가 있다면.</Heading>
    <div className="contact-layout"><div className="contact-intro"><span className="initials" aria-hidden="true">LK.</span><h3>{profile.name}</h3><p>Frontend · Fullstack Developer</p></div>
      <div className="contact-list">{links.map(([label, value, href, Icon]) => <a href={href} key={label}><span className="contact-kind"><i aria-hidden="true"><Icon /></i>{label}</span><strong>{value}</strong><b aria-hidden="true"><LuArrowUpRight /></b></a>)}</div></div>
    <div className="statement">화면 구현부터 서비스 운영까지, 함께 완성하겠습니다.</div></Frame>;
}
