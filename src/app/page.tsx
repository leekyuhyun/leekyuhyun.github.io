import Header from "../components/Header";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Profile from "../components/Profile";
import Footer from "../components/Footer";
import Others from "../components/Others";
import Values from "../components/Values";
import Blog from "../components/Blog";

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 font-sans transition-colors duration-300">
      <Header />

      <main className="max-w-6xl mx-auto px-5 sm:px-8 pb-16 md:pb-24">
        <section aria-label="개발자 소개">
          <Profile />
        </section>

        <section id="skills" className="content-section relative">
          <div className="pointer-events-none absolute inset-y-0 left-1/2 -z-0 w-screen -translate-x-1/2 bg-sky-50/60 dark:bg-sky-950/20" aria-hidden="true" />
          <div className="relative z-10"><Skills /></div>
        </section>

        <section id="projects" className="content-section md:!py-20">
          <Projects />
        </section>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 py-12 md:py-16 border-b border-slate-200 dark:border-slate-800">
          <div id="values" className="scroll-mt-24"><Values /></div>
          <div id="blog" className="scroll-mt-24"><Blog /></div>
        </div>

        <section id="experience" className="scroll-mt-24 pt-12 md:pt-16">
          <Others />
        </section>
      </main>

      <Footer />
    </div>
  );
}
