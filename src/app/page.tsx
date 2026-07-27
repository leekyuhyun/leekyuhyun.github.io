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

      <main className="max-w-[1600px] mx-auto px-4 sm:px-6 py-8 md:py-16 flex flex-col gap-12 md:gap-16">
        {/* Profile Section (Top) */}
        <section>
          <Profile />
        </section>

        {/* Core Values Section (Top Highlight - 3-Column Card Grid) */}
        <section>
          <Values />
        </section>

        {/* Content Area (Responsive 2-Column Layout) */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 xl:gap-16 items-start">
          
          {/* Left Sidebar (Sticky Skills) */}
          <aside className="w-full lg:w-[300px] xl:w-[340px] shrink-0 flex flex-col gap-8 lg:sticky lg:top-24">
            <Skills />
          </aside>

          {/* Main Feed (Projects -> Blog -> Others) */}
          <section className="w-full lg:flex-1 lg:min-w-0 flex flex-col gap-16 md:gap-24">
            <Projects />
            <Blog />
            <Others />
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
