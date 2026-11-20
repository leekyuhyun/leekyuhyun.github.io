import Frame from "../components/Frame";
import ImageSlot from "../components/ImageSlot";
import { profile } from "../data";

export default function CoverSlide() {
  return <Frame number={1} section="INTRODUCTION" cover><div className="cover-layout"><div className="cover-copy">
    <p className="eyebrow">FRONTEND TO FULLSTACK</p><h1>{profile.name}<span>Developer Portfolio</span></h1>
    <p className="cover-headline">{profile.headline}</p><p className="cover-intro">{profile.intro}</p>
  </div><ImageSlot label="프로필 사진 또는 작업 모습" portrait src={profile.image} alt={`${profile.name} 프로필`} /></div></Frame>;
}
