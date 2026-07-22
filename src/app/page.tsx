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

      <main className="max-w-[1600px] mx-auto px-4 sm:px-6 py-8 md:py-16 flex flex-col gap-10 md:gap-12">
        {/* Profile Section (Top) */}
        <section className="mb-4 md:mb-8">
          <Profile />
        </section>

        {/* Content Area (Responsive Flex Layout) */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-10 xl:gap-12 items-start">
          
          {/* Left Sidebar */}
          <aside className="w-full lg:w-[280px] xl:w-[280px] shrink-0 flex flex-col gap-8 lg:sticky lg:top-24">
            <Skills />
            {/* On lg (1024px-1279px), Values and Others join the Left Sidebar to save space */}
            <div className="hidden lg:flex xl:hidden flex-col gap-10 mt-2">
              <Values />
              <Others />
            </div>
          </aside>

          {/* Middle Main Feed (Projects & Blog) */}
          <section className="w-full lg:flex-1 lg:min-w-0 flex flex-col gap-16 md:gap-24">
            <Projects />
            <Blog />
            {/* On mobile (<1024px), Values and Others stack at the bottom */}
            <div className="flex lg:hidden flex-col gap-16 md:gap-24">
              <Values />
              <Others />
            </div>
          </section>

          {/* Right Sidebar - Only visible on xl (>=1280px) */}
          <aside className="hidden xl:flex w-full xl:w-[320px] shrink-0 flex-col gap-10 xl:sticky xl:top-24">
            <Values />
            <Others />
          </aside>
        </div>
      </main>

      <Footer />
    </div>
  );
}
