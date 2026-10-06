import Header from "../components/Header";
import Skills from "../components/Skills";
import Projects from "../components/project/Projects";
import Profile from "../components/Profile";
import Footer from "../components/Footer";
import Others from "../components/Others";
import Values from "../components/Values";
import Blog from "../components/Blog";
import AiWorkflow from "../components/AiWorkflow";

export default function Home() {
  return (
    <div className="min-h-screen overflow-x-clip bg-slate-50 font-sans text-slate-900 transition-colors duration-300 dark:bg-slate-950 dark:text-slate-100">
      <Header />

      <main className="mx-auto max-w-6xl px-5 pb-16 sm:px-8 md:pb-24">
        <section aria-label="개발자 소개">
          <Profile />
        </section>

        <section id="projects" className="content-section border-b-0! pb-0! md:pt-20!">
          <Projects />
        </section>

        <section id="values" className="content-section">
          <Values />
        </section>

        <section id="ai-workflow" className="content-section">
          <AiWorkflow />
        </section>

        <section id="skills" className="content-section relative">
          <div className="pointer-events-none absolute inset-y-0 left-1/2 z-0 w-screen -translate-x-1/2 bg-sky-50/60 dark:bg-sky-950/20" aria-hidden="true" />
          <div className="relative z-10"><Skills /></div>
        </section>

        <section id="blog" className="content-section">
          <Blog />
        </section>

        <section id="experience" className="scroll-mt-24 pt-12 md:pt-16">
          <Others />
        </section>
      </main>

      <Footer />
    </div>
  );
}
