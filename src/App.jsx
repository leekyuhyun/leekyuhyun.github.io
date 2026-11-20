import { caseStudies, projects } from "./data";
import SiteHeader from "./components/SiteHeader";
import BackToTop from "./components/BackToTop";
import AboutSlide from "./slides/AboutSlide";
import AIWorkflowSlide from "./slides/AIWorkflowSlide";
import CapabilitiesSlide from "./slides/CapabilitiesSlide";
import ContactSlide from "./slides/ContactSlide";
import CoverSlide from "./slides/CoverSlide";
import ExperienceSlide from "./slides/ExperienceSlide";
import ProjectDetailsSlide from "./slides/ProjectDetailsSlide";
import ProjectIndexSlide from "./slides/ProjectIndexSlide";
import ProjectOverviewSlide from "./slides/ProjectOverviewSlide";

export default function App() {
  return (
    <>
      <SiteHeader />
      <main className="deck">
        <section className="deck-section" id="intro">
          <CoverSlide />
          <AboutSlide />
          <CapabilitiesSlide />
        </section>
        <section className="deck-section" id="projects">
          <ProjectIndexSlide />
        </section>
        {projects.map((project, index) => (
          <section className="deck-section project-section" id={`project-${project.index}`} key={project.index}>
            <ProjectOverviewSlide project={project} number={index * 2 + 5} />
            <ProjectDetailsSlide project={project} cases={caseStudies[index]} number={index * 2 + 6} />
          </section>
        ))}
        <section className="deck-section" id="workflow"><AIWorkflowSlide /></section>
        <section className="deck-section" id="history"><ExperienceSlide /></section>
        <section className="deck-section" id="contact"><ContactSlide /></section>
      </main>
      <BackToTop />
      <footer className="site-footer"><span>LEE KYUHYUN · FULLSTACK DEVELOPER</span><span>© 2026</span></footer>
    </>
  );
}
